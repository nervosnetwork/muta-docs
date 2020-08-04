---
title: Service Dev Guide
---

区块链作为一种新的分布式应用，可以简单的理解成一个副本状态机，同时使用密码学做到应用数据的可验证和防篡改。一方面，多个副本的通信和一致性，由 P2P 网络、交易池和共识组件等共同完成，这些组件也是区块链架构中的底层模块，一般很少变动，所以可以固化到框架中直接提供给开发者使用。另一方面，状态机部分往往与链的具体需求和业务相关，需要由开发者进行自定义，框架提供 SDK 来让减轻这部分工作的时间成本和技术复杂度。

Muta 框架将用户自定义部分抽象成一个 Service，同时提供 `ServiceSDK` 让 Service 开发变得简单和高效。每个 Service 完成一个相对独立的功能，单独维护自己的存储和操作接口，类似一个运行在沙盒里的小型状态机。开发者可以使用 Service 开发链的治理模块、业务逻辑，甚至是将虚拟机接入区块链。除了开发自己的 Service，你也可以复用他人已经开发好的 Service，未来 Muta 框架会提供许多常见功能的 Service，如 Asset、Risc-V 虚拟机、DPoS、多签治理等等。Service 之间可以互相调用，这些 Service 共同组成了链的状态机部分，通过框架接口将状态机接入区块链底层组件，一条专属你的全新链就开发完成啦。

换句话说，使用 Muta 框架开发你自己的区块链只需 3 步：

1. 思考自己链的专属需求，确定需要哪些 Service
2. 如果需要的 Service 有现成的，可以直接复用；如果没有，可以自己开发
3. 将这些 Service 接入框架，编译运行！

这篇文章主要介绍 Service 的组成和开发指南。在熟悉 Service 之后，可以阅读 [开发一条 Dex 专有链](dex.md)，学习如何使用 Muta 框架从零开发一条区块链。
参考代码在： [dex](https://github.com/nervosnetwork/muta-tutorial-dex)。

## 开发范式

在设计 Service 时，我们希望降低开发者的开发门槛，让更多对区块链不那么熟悉的开发者也可以快速上手，开发自己的区块链。在开发体验上，我们希望向开发合约的体验靠拢，如果你已经学会了如何开发合约，那么恭喜你，你也已经学会了如何开发 Service。在开发范式上，我们把 Service 抽象成一个小型状态机，Service 包含普通状态机所拥有的组件：

- 状态（存储）
- 输入（接口）
- 函数（逻辑）
- 输出（返回值）
- 异常和错误处理

同时也包含区块链特有的一些组件：

- 创世块配置
- 事件
- 资源消耗统计（Cycle）
- 与区块链相关的钩子函数
 - `hook_before` 和 `hook_after` 在一个区块执行前/后调用的函数
 - `tx_hook_before` 和 `tx_hook_after` 在每一个 tx 前/后调用的函数

接下来我们分别介绍每个组件。

## 状态存储

区别于普通程序的存储，区块链的存储需要使用密码学保证数据的可验证和防篡改。`ServiceSDK` 提供了一些数据类型和接口，让开发者无需关心密码学相关的部分，可以像开发普通程序一样完成状态的存储。

`ServiceSDK` 提供了两类存储接口，一类是获得常见数据类型 map、array、uint64、String、Bool 的接口，使用这些数据类型的数据会自动存入区块链的世界状态中。

```rust
pub trait ServiceSDK {
    // Alloc or recover a `Map` by` var_name`
    fn alloc_or_recover_map<
        Key: 'static + Send + FixedCodec + Clone + PartialEq,
        Val: 'static + FixedCodec,
    >(
        &mut self,
        var_name: &str,
    ) -> Box<dyn StoreMap<Key, Val>>;

    // Alloc or recover a `Array` by` var_name`
    fn alloc_or_recover_array<Elm: 'static + FixedCodec>(
        &mut self,
        var_name: &str,
    ) -> Box<dyn StoreArray<Elm>>;

    // Alloc or recover a `Uint64` by` var_name`
    fn alloc_or_recover_uint64(&mut self, var_name: &str) -> Box<dyn StoreUint64>;

    // Alloc or recover a `String` by` var_name`
    fn alloc_or_recover_string(&mut self, var_name: &str) -> Box<dyn StoreString>;

    // Alloc or recover a `Bool` by` var_name`
    fn alloc_or_recover_bool(&mut self, var_name: &str) -> Box<dyn StoreBool>;

    // more functions are hidden
}
```

如果这些数据类型不能满足你的需求，还有一类 key-value 接口：

```rust
pub trait ServiceSDK {
    
    // Get a value from the service state by key
    fn get_value<Key: FixedCodec, Ret: FixedCodec>(&self, key: &Key) -> Option<Ret>;

    // Set a value to the service state by key
    fn set_value<Key: FixedCodec, Val: FixedCodec>(&mut self, key: Key, val: Val);

    // more functions are hidden
}
```

更有 get/set_account_value 这样便捷的方法。

```rust
pub trait ServiceSDK {
    
    // Get a value from the specified address by key
    fn get_account_value<Key: FixedCodec, Ret: FixedCodec>(
        &self,
        address: &Address,
        key: &Key,
    ) -> Option<Ret>;

    // Insert a pair of key / value to the specified address
    fn set_account_value<Key: FixedCodec, Val: FixedCodec>(
        &mut self,
        address: &Address,
        key: Key,
        val: Val,
    );

    // more functions are hidden
}
```

使用这类接口的数据也会自动存储在世界状态中。

你需要使用结构体来封装 Service，以 Dex Service 为例：

```rust
// A dex service
pub struct DexService<SDK: ServiceSDK, A> {
    _sdk: SDK,
    trades: Box<dyn StoreMap<Hash, Trade>>,
    buy_orders: Box<dyn StoreMap<Hash, Order>>,
    sell_orders: Box<dyn StoreMap<Hash, Order>>,
    history_orders: Box<dyn StoreMap<Hash, Order>>,
    validity: Box<dyn StoreUint64>,
    // 这里的 asset 是依赖另一个 AssetService 的服务，A 是她的 trait type param
    asset: A,
}
```

此外，Service 的结构体中需要包含实现 `ServiceSDK` trait 的数据类型，通过该类型获得 ServiceSDK 提供的能力。

## 接口方法

Service 通过过程宏标记方法，来提供链外可以调用的接口。

> 调用其他 Service 的接口，必须声明其他接口的 trait(推荐)， 然后在注册 Service 的时候，通过适当的方法将其他 Service 的实例传入。之后会说明。

以 Dex Service 为例：

```rust
#[service]
impl<SDK: 'static + ServiceSDK> DexService<SDK> {
   #[cycles(210_00)]
   #[write]
   fn add_trade(&mut self, ctx: ServiceContext, payload: AddTradePayload) -> ServiceResponse<()>;

  #[read]
  fn get_trades(&self, _ctx: ServiceContext) -> ServiceResponse<GetTradesResponse>;

}
```

给 Service 结构体绑定方法的 `impl` 块中，需要标记 `#[service]` 过程宏，该过程宏会给 Service 自动实现 `Service` trait，框架通过该 trait 和 Service 交互。

Dex Service 中定义了增加交易对和读取交易对两个接口方法，标记了 `#[write]` 的为写方法，该方法可以改变 Service 状态；标记了 `#[read]` 的为读方法，该方法不能改变 Service 状态；

方法的第二个参数**必须**为 `ServiceContext` 类型，该类型负责管理交易执行的上下文；

方法的第三个参数是**可选**的，定义接口的输入参数，同时需要为该类型实现序列化 trait，目前框架使用的是 **json** 序列化方案：

```rust
#[derive(Deserialize, Serialize, Clone, Debug, PartialEq, Eq)]
pub struct AddTradePayload {
    pub base_asset: Hash,
    pub counter_party: Hash,
}
```

接口方法最多只能有这 3 个参数。

## 返回值和错误处理

接口方法的返回值统一为 `ServiceResponse<T>` 类型：

```rust
#[derive(Debug, Clone, Default)]
pub struct ServiceResponse<T: Default> {
    pub code:          u64,
    pub succeed_data:  T,
    pub error_message: String,
}
```

对于正确的数据返回，只需将数据通过 ServiceResponse.from_succeed(succeed_data: T) 即可创建 ServiceResponse

对于错误返回，推荐每个 Service 定义自己的错误类型，然后通过ServiceResponsef.from_error(code: u64, error_message: String)，创建 ServiceResponse。以 Dex Service 为例

```rust

#[derive(Debug, Display)]
pub enum DexError {
    #[display(fmt = "Parsing payload to json failed {:?}", _0)]
    JsonParse(serde_json::Error),

    IllegalTrade,

    TradeExisted,

    TradeNotExisted,

    OrderOverdue,

    OrderNotExisted,
}

impl DexError {
    fn code(&self) -> u64 {
        match self {
            DexError::JsonParse(_) => 201,
            DexError::IllegalTrade { .. } => 202,
            DexError::TradeExisted { .. } => 203,
            DexError::TradeNotExisted { .. } => 204,
            DexError::OrderOverdue => 205,
            DexError::OrderNotExisted => 206,
        }
    }
}

impl<T: Default> From<DexError> for ServiceResponse<T> {
    fn from(err: DexError) -> ServiceResponse<T> {
        ServiceResponse::from_error(err.code(), err.to_string())
    }
}
```

## 创世配置

如果创世块的世界状态需要包含 Service 的初始状态，可以在 Service 中通过过程宏`#[genesis]` 标注的 `fn init_genesis` 方法来完成。框架在创建创世块时，会调用 Service 中标注了 `#[genesis]` 的方法来完成初始化，该函数最多只有一个。

```rust
#[genesis]
    fn init_genesis(&mut self, payload: InitGenesisPayload) {
        assert!(self.profits.is_empty());

        let mut info = payload.info;
        info.tx_fee_discount.sort();
        self.sdk.set_value(INFO_KEY.to_string(), info);
        self.sdk.set_value(
            MINER_PROFIT_OUTLET_KEY.to_string(),
            payload.miner_profit_outlet_address,
        );

        for miner in payload.miner_charge_map.into_iter() {
            self.miners
                .insert(miner.address, miner.miner_charge_address);
        }
    }
```

## 资源消耗统计：cycle

接口方法中使用 `ServiceContext` 的 `fn sub_cycles` 接口，可以消耗一定数量的 cycles ，接口如下：

```rust
pub fn sub_cycles(&self, cycles: u64) -> bool
```

此外，如果接口方法消耗的 cycles 是固定数量，可以使用过程宏 `#[cycles(amount)]` 标记接口方法，框架会自动扣除 `amount` 数量的 cycles 。例如，创建资产方法消耗固定 210_00 数量的 cycles: 

```rust
#[cycles(210_00)]
    #[write]
    fn create_asset(
        &mut self,
        ctx: ServiceContext,
        payload: CreateAssetPayload,
    ) -> ServiceResponse<Asset> ;
```

## 事件

使用 `ServiceContext` 的 `fn emit_event` 接口，可以向链外抛出事件信息。 name 类似于 topic， message 则是信息：

```rust
pub fn emit_event(&self, name: String, message: String) {
        self.events.borrow_mut().push(Event {
            service: self.service_name.clone(),
            name,
            data: message,
        })
    }；
```

抛出的事件 message 为 json 序列化的字符串，以 Asset Service 为例：

```rust
macro_rules! serde_json_string {
    ($payload: expr) => {
        match serde_json::to_string(&$payload).map_err(AssetError::JsonParse) {
            Ok(s) => s,
            Err(e) => return e.into(),
        };
    };
}


let event_json = serde_json_string!(event);
ctx.emit_event("TransferAsset".to_owned(), event_json);
ServiceResponse::from_succeed(())
```

这段代码使用到了一个在 Asset Service 内自定义的宏 serde_json_string。
该宏只是简单地将传入的数据 json stringfy 成字符串返回，或者当 json stringfy 出错的时候，直接在当前方法下 return AssetError::JsonParse 的错误。

## ServiceContext 中的其他方法

ServiceContext 维护交易执行的上下文，通过 ServiceContext 可以获取的信息有：

```rust
// 获取交易哈希
pub fn get_tx_hash(&self) -> Option<Hash>;

// 获取 nonce
pub fn get_nonce(&self) -> Option<Hash>;

// 获取 cycle 价格
pub fn get_cycles_price(&self) -> u64；

// 获取  cycle limit
pub fn get_cycles_limit(&self) -> u64；

// 获取已消耗 cycles 数量
pub fn get_cycles_used(&self) -> u64；

// 获取交易发起方地址
pub fn get_caller(&self) -> Address；

// 获取交易所在区块高度
pub fn get_current_height(&self) -> u64；

// 获取额外信息
pub fn get_extra(&self) -> Option<Bytes>；

// 获取当前区块时间戳
pub fn get_timestamp(&self) -> u64；

// 获得已经事件信息
pub fn get_events(&self) -> Vec<Event>；

// 获得 tx 调用的 service name
pub fn get_service_name(&self) -> &str;

// 获得 tx 调用的 method name
pub fn get_service_method(&self) -> &str;

// 获得 tx 调用的 payload
pub fn get_payload(&self) -> &str;
```

## Service 调用

一个 Service 调用另一个 Service，等同于一个 Rust function 中调用另一个 funtion。
例如在 Dex Service 中调用 Asset Service，只需要通过 Dex Service 自身的 asset 变量，就可以访问 Asset Service了。
Trait bound A 推荐是 Asset Service 对其他 Service 暴露出来的方法。

该 asset 属性需要在构造 DexService 的时候传入。之后我们会讲到。

```rust

pub struct DexService<SDK: ServiceSDK, A> {
    _sdk: SDK,
    trades: Box<dyn StoreMap<Hash, Trade>>,
    buy_orders: Box<dyn StoreMap<Hash, Order>>,
    sell_orders: Box<dyn StoreMap<Hash, Order>>,
    history_orders: Box<dyn StoreMap<Hash, Order>>,
    validity: Box<dyn StoreUint64>,
    asset: A,
}

```

## Hook

每个 block 执行前后，框架会分别调用 Service 的 hook_before、hook_after 方法, 这两个方法需分别使用 `#[hook_before]`、`#[hook_after]` 过程宏标记。
Service 可借助 hook 功能完成特定逻辑，如 DPoS Service 可在 hook_after 方法中统计候选验证人抵押 token 数量，进行验证人变更等操作；Dex Service 可在 hook_after 方法中对订单进行匹配和成交操作：

```rust
// Hook method in dex service
#[hook_after]
    fn match_and_deal(&mut self, params: &ExecutorParams)；
```

注意，hook_before 和 hook_after 不允许返回任何数据类型。这意味着他们没有**错误**一说。开发者必须在方法内妥善处理可能遇到的业务异常，**切不可抛出 panic**。

## Tx Hook

在每笔交易执行的前后，框架还会调用 Service 的 tx_hook_before、tx_hook_after 方法，这两个方法需分别使用 `#[tx_hook_before]`、`#[tx_hook_after]` 过程宏标记。
Service 可借助 tx hook 完成针对交易的特定逻辑，比如验证交易的发起人是否满足特定的条件，若不满足，可直接终止该交易的执行。

```rust
// Tx hook method
#[tx_hook_before]
fn check_balance(&self, ctx: ServiceContext) -> ServiceResponse<()> {
    let caller = ctx.get_caller();
    // Check caller balance...
    // if caller.balance < xxx {
    //     ctx.cancel("abort tx".to_owned())
    // }
}
```

tx_hook_before 和 tx_hook_after 可以返回错误。

1. 无论 tx_hook_before 执行的结果是失败还是成功，tx_hook_before 所造成的改动，包括 state 和 event，都将被保留。
2. 如果 tx_hook_before 返回了错误，那么 tx 的逻辑将被跳过。
3. 如果 tx_hook_after 执行成功，那么 tx 的改动 和 tx_hook_after 的改动，都将被保留。
4. 如果 tx_hook_after 执行失败，那么 tx 的改动 和 tx_hook_after 的改动，都将被遗弃。

## 序列化

Service 主要使用两种序列化方案: Json 和 [RLP](https://github.com/ethereum/wiki/wiki/RLP);

### Json

用户发送交易和返回结果，均使用 json 序列化，因此接口方法的输入参数中的 `payload` 和返回值 `ServiceResponse<_>` 中的 `Response` 都需要实现 json 序列化的 trait。以 [Asset Service](https://github.com/mkxbl/muta-tutorial-dex/tree/master/services/asset) 的 `fn create_asset` 接口方法为例：

```rust
// 接口方法
#[cycles(210_00)]
#[write]
fn create_asset(
        &mut self,
        ctx: ServiceContext,
        payload: CreateAssetPayload,
    ) -> ServiceResponse<Asset>;

// 标记 #[derive(Deserialize, Serialize)] 以实现 json 序列化
#[derive(Deserialize, Serialize, Clone, Debug)]
pub struct CreateAssetPayload {
    pub name:   String,
    pub symbol: String,
    pub supply: u64,
}
// 标记 #[derive(Deserialize, Serialize)] 以实现 json 序列化
#[derive(Deserialize, Serialize, Clone, Debug)]
pub struct Asset {
    pub id:     Hash,
    pub name:   String,
    pub symbol: String,
    pub supply: u64,
    pub issuer: Address,
}
```

### RLP

对于存储到世界状态的数据结构，为了保证序列化的一致性，该数据结构需要实现 `trait FixedCodec`，我们默认使用 RLP 方案来实现该 trait 。以 [Asset Service](https://github.com/mkxbl/muta-tutorial-dex/tree/master/services/asset) 为例：

```rust
// Asset 需要存入世界状态 
pub struct AssetService<SDK> {
    // 省略其他
    assets: Box<dyn StoreMap<Hash, Asset>>,
}

pub trait FixedCodec: Sized {
    fn encode_fixed(&self) -> ProtocolResult<Bytes>;
    fn decode_fixed(bytes: Bytes) -> ProtocolResult<Self>;
}

// 对 Asset 实现 trait FixedCodec
impl FixedCodec for Asset {
    fn encode_fixed(&self) -> ProtocolResult<Bytes> {
        Ok(Bytes::from(rlp::encode(self)))
    }

    fn decode_fixed(bytes: Bytes) -> ProtocolResult<Self> {
        Ok(rlp::decode(bytes.as_ref()).map_err(FixedCodecError::from)?)
    }
}
// 对 Asset 实现 RLP 反序列化方案
impl rlp::Decodable for Asset {
    fn decode(rlp: &rlp::Rlp) -> Result<Self, rlp::DecoderError> {
        Ok(Self {
            id:     rlp.at(0)?.as_val()?,
            name:   rlp.at(1)?.as_val()?,
            symbol: rlp.at(2)?.as_val()?,
            supply: rlp.at(3)?.as_val()?,
            issuer: rlp.at(4)?.as_val()?,
        })
    }
}
// 对 Asset 实现 RLP 序列化方案
impl rlp::Encodable for Asset {
    fn rlp_append(&self, s: &mut rlp::RlpStream) {
        s.begin_list(5)
            .append(&self.id)
            .append(&self.name)
            .append(&self.symbol)
            .append(&self.supply)
            .append(&self.issuer);
    }
}
```

## 构造方法

构造方法返回 Service 实例，以 Asset Service 为例：

```rust
#[service]
impl<SDK: ServiceSDK> AssetService<SDK> {
    pub fn new(mut sdk: SDK) -> Self {
        let assets: Box<dyn StoreMap<Hash, Asset>> = sdk.alloc_or_recover_map(ASSETS_KEY);

        Self { sdk, assets }
    }
}
```

## 初始化&注册 Service

DefaultServiceMapping 类负责向 Muta 注册 Service。
1. 将要注册的 Service 手动添加到 list_service_name 方法的列表中。
2. 通过 SDKFactory，获得，获得对应 Service 的 ServiceSDK，ServiceSDK的作用见上文。
3. 如果一个 Service 依赖其他的 Service，先将其他 Service 构造出来。
4. 如果有循环依赖，可以先完成构造，最后设置依赖。

> 例子中的 new_dex，就是先获取 AssetService 的实例，然后再初始化 DexService 自身

```rust

impl ServiceMapping for DefaultServiceMapping {
    fn get_service<SDK: 'static + ServiceSDK, Factory: SDKFactory<SDK>>(
        &self,
        name: &str,
        factory: &Factory,
    ) -> ProtocolResult<Box<dyn Service>> {
        let service = match name {
            "asset" => Box::new(Self::new_asset(factory)?) as Box<dyn Service>,
            "metadata" => Box::new(Self::new_metadata(factory)?) as Box<dyn Service>,
            "dex" => Box::new(Self::new_dex(factory)?) as Box<dyn Service>,
            _ => panic!("not found service"),
        };

        Ok(service)
    }

    fn list_service_name(&self) -> Vec<String> {
        vec!["asset".to_owned(), "metadata".to_owned(), "dex".to_owned()]
    }
}

impl DefaultServiceMapping {
    fn new_asset<SDK: 'static + ServiceSDK, Factory: SDKFactory<SDK>>(
        factory: &Factory,
    ) -> ProtocolResult<AssetService<SDK>> {
        Ok(AssetService::new(factory.get_sdk("asset")?))
    }

    fn new_metadata<SDK: 'static + ServiceSDK, Factory: SDKFactory<SDK>>(
        factory: &Factory,
    ) -> ProtocolResult<MetadataService<SDK>> {
        Ok(MetadataService::new(factory.get_sdk("metadata")?))
    }

    fn new_dex<SDK: 'static + ServiceSDK, Factory: SDKFactory<SDK>>(
        factory: &Factory,
    ) -> ProtocolResult<DexService<SDK, AssetService<SDK>>> {
        let asset = Self::new_asset(factory)?;
        Ok(DexService::new(factory.get_sdk("dex")?, asset))
    }
}

```

## Service 示例

这里有一个功能类似 ERC-20 的 [Asset Service 示例](https://github.com/nervosnetwork/muta/tree/master/built-in-services/asset)，读者可以查看一个 Service 的全貌。更多的 Service 示例，请参考 [Service 示例](./service_eg.md)。

## 下一站

现在你已经对 Service 的组件和开发有了一定的认识，下一步通过学习 [开发一条 Dex 专有链](dex.md) ，你将对 Service 有一个更全面的理解并且学会如何使用 Muta 框架开发自己的区块链。

> 注意：由于框架正在持续的开发过程中，所以框架的 api 有可能发生变动