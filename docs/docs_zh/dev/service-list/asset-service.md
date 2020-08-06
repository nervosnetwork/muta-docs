---
title: Asset Service
---

Asset service 是 Huobi Chain 的内置资产模块，负责管理链原生资产以及第三方发行资产。

- 资产成为一等公民：加密资产作为区块链的核心，理应成为一等公民。Asset 模块利用 Muta 框架提供的 service 能力，为所有资产提供链级别的支持，为面向资产编程提供支持。
  
- 第三方发行资产： 用户可以使用 Asset 模块发行资产，自定义资产属性和总量等

- 资产与合约交互： 未来可以打通虚拟机和资产模块，为资产的广泛使用提供支持

## 接口

Asset 模块采用类似以太坊 ERC-20 的接口设计，主要包含：

1.发行资产

```rust
// 资产数据结构
pub struct Asset {
    pub id:     Hash,
    pub name:   String,
    pub symbol: String,
    pub admin: Address, // 资产的管理员，拥有 mint 资产的权利
    pub supply: u64, // 发行量：supply 为 100，precision 为 1 时，表示发行 10 个 token
    pub precision: u64, // 资产数值精度，1 表示 10 的一次方，以此类推
    pub relayable: bool, // 标记资产是否是 relayable 的
}

// 发行资产接口
// 资产 ID 自动生成，确保唯一
fn create_asset(&mut self, ctx: ServiceContext, payload: CreateAssetPayload) -> ProtocolResult<Asset>;

// 发行资产参数
pub struct CreateAssetPayload {
    pub name:       String,
    pub symbol:     String,
    pub admin:      Address,
    pub supply:     u64,
    pub init_mints: Vec<IssuerWithBalance>, // 创建资产时，需要同时 mint 操作的请求
    pub precision:  u64,
    pub relayable:  bool,
}
```

2.查询资产信息

```rust
// 查询接口
fn get_asset(&self, ctx: ServiceContext, payload: GetAssetPayload) -> ProtocolResult<Asset>；

// 查询参数
pub struct GetAssetPayload {
    pub id: Hash, // 资产 ID
}
```

3.转账

```rust
// 转账接口
fn transfer(&mut self, ctx: ServiceContext, payload: TransferPayload) -> ProtocolResult<()>；

// 转账参数
pub struct TransferPayload {
    pub asset_id: Hash,
    pub to:       Address,
    pub value:    u64,
    pub memo:     String,
}

// 转账事件，name = "TransferAsset"
pub struct TransferEvent {
    pub asset_id: Hash,
    pub from:     Address,
    pub to:       Address,
    pub value:    u64,
    pub memo:     String,
}
```

4.查询余额

```rust
// 查询接口
fn get_balance(&self, ctx: ServiceContext, payload: GetBalancePayload) -> ProtocolResult<GetBalanceResponse> 

// 查询参数
pub struct GetBalancePayload {
    pub asset_id: Hash,
    pub user:     Address,
}

// 返回值
pub struct GetBalanceResponse {
    pub asset_id: Hash,
    pub user:     Address,
    pub balance:  u64,
}
```

5.批准额度

```rust
// 批准接口
fn approve(&mut self, ctx: ServiceContext, payload: ApprovePayload) -> ProtocolResult<()>;

// 批准参数
pub struct ApprovePayload {
    pub asset_id: Hash,
    pub to:       Address,
    pub value:    u64,
    pub memo:     String,
}

// 批准事件，name = "ApproveAsset"
pub struct ApproveEvent {
    pub asset_id: Hash,
    pub grantor:  Address,
    pub grantee:  Address,
    pub value:    u64,
    pub memo:     String,
}
```

6.授权转账

```rust
// 接口
fn transfer_from(&mut self, ctx: ServiceContext, payload: TransferFromPayload) -> ProtocolResult<()>；

// 参数
pub struct TransferFromPayload {
    pub asset_id:  Hash,
    pub sender:    Address,
    pub recipient: Address,
    pub value:     u64,
    pub memo:      String,
}

// 授权转账事件，name = "TransferFrom"
pub struct TransferFromEvent {
    pub asset_id:  Hash,
    pub caller:    Address,
    pub sender:    Address,
    pub recipient: Address,
    pub value:     u64,
    pub memo:      String,
}
```

7.查询限额

```rust
// 查询接口
fn get_allowance(&self, ctx: ServiceContext, payload: GetAllowancePayload) -> ProtocolResult<GetAllowanceResponse>；

// 查询参数
pub struct GetAllowancePayload {
    pub asset_id: Hash,
    pub grantor:  Address,
    pub grantee:  Address,
}

// 返回值
pub struct GetAllowanceResponse {
    pub asset_id: Hash,
    pub grantor:  Address,
    pub grantee:  Address,
    pub value:    u64,
}
```

8.查询链的原生资产

链的原生资产为创世启动时发行的资产，资产信息写在 `Asset Service` 创世配置文件中。

```rust
// 查询接口：返回原生资产
fn get_native_asset(&self, ctx: ServiceContext) -> ProtocolResult<Asset>;
```

9.mint 资产

只有对应 Asset 的 admin 才有权限 mint 资产。

```rust
// mint 接口
fn mint(&mut self, ctx: ServiceContext, payload: MintAssetPayload) -> ServiceResponse<()>;

// mint 参数
pub struct MintAssetPayload {
    pub asset_id: Hash,
    pub to:       Address,
    pub amount:   u64,
    pub proof:    Hex,
    pub memo:     String,
}

// mint 事件，name = "MintAsset"
pub struct MintAssetEvent {
    pub asset_id: Hash,
    pub to:       Address,
    pub amount:   u64,
    pub proof:    Hex,
    pub memo:     String,
}
```

10.burn 资产

只有资产的拥有者自身可以 burn 掉自己的资产

```rust
// burn 接口
fn burn(&mut self, ctx: ServiceContext, payload: BurnAssetPayload) -> ServiceResponse<()>;

// burn 参数
pub struct BurnAssetPayload {
    pub asset_id: Hash,
    pub amount:   u64,
    pub proof:    Hex,
    pub memo:     String,
}

// burn 事件，name = "BurnAsset"
pub struct BurnAssetEvent {
    pub asset_id: Hash,
    pub from:     Address,
    pub amount:   u64,
    pub proof:    Hex,
    pub memo:     String,
}
```

11.relay 资产

relay 资产和 burn 资产类似，只有资产拥有者才有权利操作，但是 relay 操作只能在 标记为 relayable 的 Asset 上才可以进行。

```rust
// relay 接口
fn relay(&mut self, ctx: ServiceContext, payload: RelayAssetPayload) -> ServiceResponse<()>;

// relay 参数
pub struct RelayAssetPayload {
    pub asset_id: Hash,
    pub amount:   u64,
    pub proof:    Hex,
    pub memo:     String,
}

// relay 事件，name = "RelayAsset"
pub struct RelayAssetEvent {
    pub asset_id: Hash,
    pub from:     Address,
    pub amount:   u64,
    pub proof:    Hex,
    pub memo:     String,
}
```