# Metadata Service
Metadata Service 负责管理链的元数据信息，包含：

```rust
pub struct Metadata {
    pub chain_id:        Hash,
    pub common_ref:      String, // BLS 签名算法的公共参数
    pub timeout_gap:     u64, // (交易有效期 - 当前区块高度)的最大值
    pub cycles_limit:    u64, 
    pub cycles_price:    u64,
    pub interval:        u64, // 区块产生间隔
    pub verifier_list:   Vec<Validator>,
    pub propose_ratio:   u64, // 共识 propose 阶段的超时时间与 interval 的比值
    pub prevote_ratio:   u64, // 共识 prevote 阶段的超时时间与 interval 的比值
    pub precommit_ratio: u64, // 共识 precommit 阶段的超时时间与 interval 的比值
}
```
通过 Metadata Service 可以读取这些信息，admin 账户可以动态更新 `interval`、`verifier_list`、 `propose_ratio`、 `prevote_ratio`、`precommit_ratio`。Admin 账户在初始化链时设置，之后可以通过 `set_admin` 进行更改。 

## 接口

1. 读取 admin 地址
   
```rust
fn get_admin(&self, ctx: ServiceContext) -> ProtocolResult<Address>；

// Example: graphiql send tx
query get_admin{
  queryService(
  caller: "016cbd9ee47a255a6f68882918dcdd9e14e6bee1"
  serviceName: "metadata"
  method: "get_admin"
  payload: ""
  ){
    ret,
    isError
  }
}
```

2. 设置 admin 地址
   
```rust
// 需要 admin 权限
fn set_admin(&mut self, ctx: ServiceContext, payload: SetAdminPayload) -> ProtocolResult<()>；

// 参数
pub struct SetAdminPayload {
    pub admin: Address,
}

// Example: graphiql send tx
mutation set_admin{
  unsafeSendTransaction(inputRaw: {
    serviceName:"metadata",
    method:"set_admin",
    payload:"{\"admin\": \"016cbd9ee47a255a6f68882918dcdd9e14e6bee1\"}",
    timeout:"0x14",
    nonce:"0x9db2d7efe2b61a28827e4836e2775d913a442ed2f9096ca1233e479607c27cf7",
    chainId:"b6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036",
    cyclesPrice:"0x9999",
    cyclesLimit:"0x9999",
    }, inputPrivkey: "0x45c56be699dca666191ad3446897e0f480da234da896270202514a0e1a587c3f"
  )
}
```

3. 读取元数据
   
```rust
fn get_metadata(&self, ctx: ServiceContext) -> ProtocolResult<Metadata>；

// Example: graphiql send tx
query get_admin{
  queryService(
  caller: "016cbd9ee47a255a6f68882918dcdd9e14e6bee1"
  serviceName: "metadata"
  method: "get_metadata"
  payload: ""
  ){
    ret,
    isError
  }
}
```

4. 更新元数据
   
```rust
// 需要 admin 权限
fn update_metadata(&mut self, ctx: ServiceContext, payload: UpdateMetadataPayload) -> ProtocolResult<()>；

// 参数
pub struct UpdateMetadataPayload {
    pub verifier_list:   Vec<Validator>,
    pub interval:        u64,
    pub propose_ratio:   u64,
    pub prevote_ratio:   u64,
    pub precommit_ratio: u64,
}

// Example: graphiql send tx
mutation update_metadata{
  unsafeSendTransaction(inputRaw: {
    serviceName:"metadata",
    method:"update_metadata",
    payload:"{\"verifier_list\": [{\"address\": \"016cbd9ee47a255a6f68882918dcdd9e14e6bee1\", \"propose_weight\": 5, \"vote_weight\": 5}], \"interval\": 5000, \"propose_ratio\": 5, \"prevote_ratio\": 5, \"precommit_ratio\": 5}",
    timeout:"0xbe",
    nonce:"0x9db2d7efe2b61a28827e4836e2775d913a442ed2f9096ca1233e479607c27cf7",
    chainId:"b6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036",
    cyclesPrice:"0x9999",
    cyclesLimit:"0x9999",
    }, inputPrivkey: "0x30269d47fcf602b889243722b666881bf953f1213228363d34cf04ddcd51dfd2"
  )
}
```

5. 更新区块间隔
   
```rust
// 需要 admin 权限
fn update_interval(&mut self, ctx: ServiceContext, **payload**: UpdateIntervalPayload) -> ProtocolResult<()>；

// 参数
pub struct UpdateIntervalPayload {
    pub interval: u64,
}

// Example: graphiql send tx
mutation update_interval{
  unsafeSendTransaction(inputRaw: {
    serviceName:"metadata",
    method:"update_interval",
    payload:"{\"interval\": 666}",
    timeout:"0x20",
    nonce:"0x9db2d7efe2b61a28827e4836e2775d913a442ed2f9096ca1233e479607c27cf7",
    chainId:"b6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036",
    cyclesPrice:"0x9999",
    cyclesLimit:"0x9999",
    }, inputPrivkey: "0x45c56be699dca666191ad3446897e0f480da234da896270202514a0e1a587c3f"
  )
}
```

6. 更新验证人集合
   
```rust
// 需要 admin 权限
fn update_validators(&mut self, ctx: ServiceContext, payload: UpdateValidatorsPayload) -> ProtocolResult<()>；

// 参数
pub struct UpdateValidatorsPayload {
    pub verifier_list: Vec<Validator>,
}

pub struct Validator {
    pub address:        Address,
    pub propose_weight: u32,
    pub vote_weight:    u32,
}

// Example: graphiql send tx
mutation update_validators{
  unsafeSendTransaction(inputRaw: {
    serviceName:"metadata",
    method:"update_validators",
    payload:"{\"verifier_list\": [{\"address\": \"016cbd9ee47a255a6f68882918dcdd9e14e6bee1\", \"propose_weight\": 5, \"vote_weight\": 5}]}",
    timeout:"0xbe",
    nonce:"0x9db2d7efe2b61a28827e4836e2775d913a442ed2f9096ca1233e479607c27cf7",
    chainId:"b6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036",
    cyclesPrice:"0x9999",
    cyclesLimit:"0x9999",
    }, inputPrivkey: "0x30269d47fcf602b889243722b666881bf953f1213228363d34cf04ddcd51dfd2"
  )
}
```

7. 更新共识 round 超时时间
   
```rust
// 需要 admin 权限
fn update_ratio(&mut self, ctx: ServiceContext, payload: UpdateRatioPayload) -> ProtocolResult<()>；

// 参数
pub struct UpdateRatioPayload {
    pub propose_ratio:   u64,
    pub prevote_ratio:   u64,
    pub precommit_ratio: u64,
}

// Example: graphiql send tx
mutation update_ratio{
  unsafeSendTransaction(inputRaw: {
    serviceName:"metadata",
    method:"update_ratio",
    payload:"{\"propose_ratio\": 5, \"prevote_ratio\": 5, \"precommit_ratio\": 5}",
    timeout:"0xbe",
    nonce:"0x9db2d7efe2b61a28827e4836e2775d913a442ed2f9096ca1233e479607c27cf7",
    chainId:"b6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036",
    cyclesPrice:"0x9999",
    cyclesLimit:"0x9999",
    }, inputPrivkey: "0x30269d47fcf602b889243722b666881bf953f1213228363d34cf04ddcd51dfd2"
  )
}
```
