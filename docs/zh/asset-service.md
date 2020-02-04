# Asset Service

Asset service 是 huobi-chain 的内置资产模块，负责管理链原生资产以及第三方发行资产。

## 特点

- 资产成为一等公民：Asset 模块利用 muta 框架提供的 service 能力，做为链原生提供的功能，让加密资产成为一等公民
  
- 第三方发行资产： 用户可以使用 Asset 模块发行资产，自定义资产属性和总量等

- 资产与合约交互： 未来可以打通虚拟机和资产模块，为资产的广泛使用提供支持

## 接口

Asset 模块采用类似以太坊 ERC-20 的接口设计，主要包含：

1. 发行资产

```rust
// 资产数据结构
pub struct Asset {
    pub id:     Hash,
    pub name:   String,
    pub symbol: String,
    pub supply: u64,
    pub issuer: Address,
}

// 发行资产接口
// 资产 ID 自动生成，确保唯一
fn create_asset(&mut self, ctx: ServiceContext, payload: CreateAssetPayload, ) -> ProtocolResult<Asset>;

// 发行资产参数
pub struct CreateAssetPayload {
    pub name:   String,
    pub symbol: String,
    pub supply: u64,
}
```

2. 查询资产信息

```rust
// 查询接口
fn get_asset(&self, ctx: ServiceContext, payload: GetAssetPayload) -> ProtocolResult<Asset>；

// 查询参数
pub struct GetAssetPayload {
    pub id: Hash, // 资产 ID
}
```

3. 转账

```rust
// 转账接口
fn transfer(&mut self, ctx: ServiceContext, payload: TransferPayload) -> ProtocolResult<()>；

// 转账参数
pub struct TransferPayload {
    pub asset_id: Hash,
    pub to:       Address,
    pub value:    u64,
}
```

4. 查询余额

```rust
// 查询接口
fn get_balance(&self, ctx: ServiceContext, payload: GetBalancePayload, ) -> ProtocolResult<GetBalanceResponse> 

// 查询参数
pub struct GetBalancePayload {
    pub asset_id: Hash,
}

// 返回值
pub struct GetBalanceResponse {
    pub asset_id: Hash,
    pub balance:  u64,
}
```

5. 批准额度

```rust
// 批准接口
fn approve(&mut self, ctx: ServiceContext, payload: ApprovePayload) -> ProtocolResult<()>;

// 批准参数
pub struct ApprovePayload {
    pub asset_id: Hash,
    pub to:       Address,
    pub value:    u64,
}
```

6. 授权转账

```rust
// 接口
fn transfer_from(&mut self, ctx: ServiceContext, payload: TransferFromPayload) -> ProtocolResult<()>；

// 参数
pub struct TransferFromPayload {
    pub asset_id:  Hash,
    pub sender:    Address,
    pub recipient: Address,
    pub value:     u64,
}
```

7. 查询限额

```rust
// 查询接口
fn get_allowance(&self, ctx: ServiceContext, payload: GetAllowancePayload, ) -> ProtocolResult<GetAllowanceResponse>；

// 查询参数
pub struct GetAllowancePayload {
    pub asset_id: Hash,
    pub grantee:  Address,
}

// 返回值
pub struct GetAllowanceResponse {
    pub asset_id: Hash,
    pub grantee:  Address,
    pub value:    u64,
}
```