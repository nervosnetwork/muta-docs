---
title: 项目配置
---

Overlord 提供两种出块逻辑，随机出块和轮询出块。随机出块根据节点的 `propose_weight` 使用确定性随机算法选择 leader，按照 `vote_weight` 进行计票。轮询出块轮流选择 leader，所以这时 `propose_weight` 是不生效的。轮询出块也是按照 `vote_weight` 进行计票。
Muta 中有随机出块特性的开关， 通过 `features = ["random_leader"]` 开启，在 muta-chain 中，默认是使用随机出块的。在使用 Muta 框架进行开发的时候，在 `Cargo.toml` 中的 muta 依赖中可以选择出块方式：

```rust
# 轮询出块
muta = { git = "https://github.com/nervosnetwork/muta", branch = "master" }
# 随机出块
muta = { git = "https://github.com/nervosnetwork/muta", branch = "master", features = ["random_leader"] }
```