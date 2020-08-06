---
title: Multi-signature Service
---

Multi-signature Service 是 Muta 的原生多重签名实现。多重签名是一个地址由若干个账户所组成，每一个地址对应着一个权重。当签名的权重之和大于多签账户的阈值的时候，就代表一个有效的多重签名。多重签名账户的结构如下：

```rust
pub struct MultiSigPermission {
    pub owner:     Address,
    pub accounts:  Vec<Account>,
    pub threshold: u32,
    pub memo:      String,
}

pub struct Account {
    pub address:     Address,
    pub weight:      u8,
    pub is_multiple: bool,
}
```

`MultiSigPermission` 中的 owner 即是账户的管理员，memo 是多签账户的备注信息。Muta 原生多签允许多签嵌套，所以在 Account 结构中，用 is_multiple 表示是否是多签账户。Muta 多重签名有两点限制：

1. 多签嵌套不得超过 8 层。
2. 每一级账户的数量不得超过 16 个。

为了让交易的签名能够兼容多重签名，`SignedTransaction` 中 pubkey 是所有的签名者的公钥数组调用 `rlp::encode_list()` 序列化后的，signature 是签名数组调用 `rlp::encode_list()` 序列化后的结果。`RawTransaction` 中的 sender 是多签地址或者签名者的地址。

```rust
pub struct RawTransaction {
    pub chain_id:     Hash,
    pub cycles_price: u64,
    pub cycles_limit: u64,
    pub nonce:        Hash,
    pub request:      TransactionRequest,
    pub timeout:      u64,
    pub sender:       Address,
}

pub struct TransactionRequest {
    pub method:       String,
    pub service_name: String,
    pub payload:      JsonString,
}

pub struct SignedTransaction {
    pub raw:       RawTransaction,
    pub tx_hash:   Hash,
    pub pubkey:    Bytes,
    pub signature: Bytes,
}
```

## 接口

1.创建多签账户

```rust
fn generate_account(&mut self, ctx: ServiceContext, payload: GenerateMultiSigAccountPayload) -> ServiceResponse<GenerateMultiSigAccountResponse>;

// 参数
pub struct GenerateMultiSigAccountPayload {
    pub owner:            Address,
    pub autonomy:         bool,
    pub addr_with_weight: Vec<AddressWithWeight>,
    pub threshold:        u32,
    pub memo:             String,
}

pub struct AddressWithWeight {
    pub address: Address,
    pub weight:  u8,
}

pub struct GenerateMultiSigAccountResponse {
    pub address: Address,
}
```

2.查询多签账户

```rust
fn get_account_from_address(&self, _ctx: ServiceContext, payload: GetMultiSigAccountPayload) -> ServiceResponse<GetMultiSigAccountResponse>;

// 参数
pub struct GetMultiSigAccountPayload {
    pub multi_sig_address: Address,
}


pub struct GetMultiSigAccountResponse {
    pub permission: MultiSigPermission,
}

pub struct MultiSigPermission {
    pub owner:     Address,
    pub accounts:  Vec<Account>,
    pub threshold: u32,
    pub memo:      String,
}
```


3.创建更新多签账户

```rust
// 需要 admin 权限
fn update_account(&mut self, ctx: ServiceContext, payload: UpdateAccountPayload,) -> ServiceResponse<()>;

// 参数
pub struct UpdateAccountPayload {
    pub account_address:  Address,
    pub owner:            Address,
    pub addr_with_weight: Vec<AddressWithWeight>,
    pub threshold:        u32,
    pub memo:             String,
}
```