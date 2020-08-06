---
title: 存储
---

## 概述

Storage 负责对上层模块提供数据的访问、持久化支持，存储方式采用 kv 结构。

接口上，主要有两种类型
1. Storage 针对具体业务数据的存储逻辑，需要依靠 Adapter 的能力完成访问、持久化能力。
2. Adapter 一种底层 KV 操作的抽象，理论上任何拥有 kv 存储能力的数据库都可以方便的接入，比如 RocksDB、LevelDB、Redis 等。

Muta 使用 RocksDB Adapter 作为默认的数据库。

Storage 接口主要提供了以下数据类型的读写：

- Transaction
- Receipt
- Block
- LatestProof: 当前最新区块的 Proof
- WAL: 提供给 Overlord 操作 WAL 数据。WAL 是一种预写入机制，为了避免在出现意外 Down 机后可以继续运行，可参阅 [Overlord 文档](./overlord.md)获取更多信息

## 设计
### 目录结构
https://github.com/nervosnetwork/muta/tree/master/core/storage
```
├── ...
└── src
    ├── adapter
    │   ├── memory.rs // 基于内存数据库作为底层存储，只在单元测试中使用
    │   ├── mod.rs
    │   └── rocks.rs // 基于 RocksDB 作为数据库存储，用于真实的运行环境
    ├── lib.rs // 
    └── tests // Storage 的单元测试用例
```

### 存储逻辑

首先有 5 个列族为数据做逻辑划分, 分别 `Block`, `Receipt`, `SignedTransaction`, `WAL`，`HashHeight`, 各列族在源码中的定义如下：
```
#[derive(Debug, Copy, Clone, Display)]
pub enum StorageCategory {
    Block, // Block, Latest Block, Latest Block Proof
    Receipt,
    SignedTransaction,
    Wal,
    HashHeight, // block height 对应的 Block hash 的映射
}
```

各列族实际存储的 KV 数据:
- Block
    - Block
        - key: [height]
        - value: Block
    - Latest Block:
        - key: "latest_hash" 
        - value: Block
    - Latest Block Proof
        - key: "latest_proof"
        - value: Block
- Receipt
    - key: [block-height]-[transaction-hash]
    - value: Receipt
- SignedTransaction
    - key: [block-height]-[transaction-hash]
    - value: SignedTransaction
- WAL
    - key: "overlord_wal"
    - value: Bytes // 数据格式由 Overlord 定义
- HashHeight
    - key: [Block-hash]
    - value: height

对于 `SignedTransaction` 和 `Receipt` 这两种数据我们特地加了 `Height` 作为前缀，作用是使得数据可以尽量的按顺序进行排序，在物理上尽量落到一份文件上，加快读取数据，详细读取流程如下：
```
// 以 SignedTransaction 举例
BlockHeight(BigEndian U64) + TransactionHash -> SignedTransaction: 交易哈希到交易的映射
- 一次性查询高度 1 的全部 Tx: db.range_scan(1 + 0x00001000)
```

Muta 是一个高性能的区块链框架，一个区块可以处理数万笔 `SignedTransaction`，对应的也会生成数万条 `Receipt`，如果持续不断的压测那么很快数据量就会达到数十亿的级别，在这种数据体量下经过内部测试，随机读和循序读的性能差距达到了 **300** 倍左右。

### 序列化
所有数据均使用 protocol-buffers 序列化和反序列化

## 参考
- [WAL](https://en.wikipedia.org/wiki/Write-ahead_logging): write-ahead logging 
- [protocol-buffers](https://developers.google.com/protocol-buffers): Protocol buffers are a language-neutral, platform-neutral extensible mechanism for serializing structured data.
- [RocksDB](https://rocksdb.org/): A Persistent Key-Value Store for Flash and RAM Storage