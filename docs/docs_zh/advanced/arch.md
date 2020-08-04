---
title: 架构设计
---

## System Architecture
![](/static/docs-img/arch/arch.png)

## Components
见各组件详细文档

## Core Flow
> 用户发 Transaction 到 Transaction 上链发生了什么

![](/static/docs-img/arch/core-flow.png)

### 交易
#### 从 User

1. 用户通过 `SDK`、`GraphiQL` 等工具对节点提交一笔交易
2. `Mempool` 验证交易信息是否合法，典型的有：交易签名、`TimeoutGap`、`Cycles` 等，同时存入自身的交易内存池。
    - 交易池达到上限将丢失该交易，同时不会广播。
    - 验证不通过将丢弃该交易，同时不会广播。
3. 当交易验证成功后，调用 `Network`, `Network` 把交易序列化后，向已连上的其他节点广播该交易。

#### 从 Network 
4. 本节点通过 `Network` 收到一笔交易，`Network` 直接转交给`Mempool`验证。验证流程参考 `2`
    - 不同点: 从 `Network` 来的交易不会被再次广播

### 出块
#### 提案节点

5. `Consensus` 向 `Mempool` 请求筛选一批交易，`Mempool` 会根据一些系统参数如: `CyclesLimit`，来决定最后筛选出的交易数量
6. `Consensus` 将筛选后的交易打包成 `Block` 并且对它签名后组成 `Proposal`，然后通过 `Network` 广播给其他节点。
    - `Muta` 使用了 `Compact Blocks`，所以 `Block` 中并不存放交易的具体内容

#### 提案块投票
7. 通过 `Network` 收到提案节点的`Proposal`，验证 `Proposal` 的签名、区块参数等基础信息。
8. 查看本地是否存在对应交易。
9. 不存在的交易将通过 `Network` 从网络获取。
10. 验证通过后将对 `Proposal` 投 `Yes` 票，详细的共识流程可以查看 `Overlord` 设计文档，这里不再赘述。

#### Commit 区块
11. 存储共识成功后的 `Block` 到 `Storage`, 同时进入下一轮共识。
12. 异步的将交易提交给 `Framework` 执行。
13. `Framework` 根据交易内容找到对应的 `Service`。
14. 执行成功后，数据存储到 `Storage`

## Parallet Execution
![](/static/docs-img/arch/parallet.png)

## Execution Block

![](/static/docs-img/arch/execution-block.png)