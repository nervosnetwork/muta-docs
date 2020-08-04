---
title: 创世块配置
description: The fundamental Muta concepts. A great place to start learning about Muta.
---

本文档将详细介绍如何配置创世块，配置文件为 `devtools/chain/genesis.toml` 。

## 概览

一条链的不同节点的创世块文件必须是相同的。链一启动，创世块的许多配置就不能改变了，在下面的参数解释里，我们会将可以改变的参数标注为”可升级“。

让我们先来看下 `devtools/chain/genesis.toml`：

```
timestamp = 0
prevhash = "0x44915be5b6c20b0678cf05fcddbbaa832e25d7e6ac538784cd5c24de00d47472"

[[services]]
name = "asset"
payload = '''
{
    "id": "0xf56924db538e77bb5951eb5ff0d02b88983c49c45eea30e8ae3e7234b311436c",
    "name": "MutaToken",
    "symbol": "MT",
    "supply": 320000011,
    "issuer": "0xf8389d774afdad8755ef8e629e5a154fddc6325a"
}
'''

[[services]]
name = "metadata"
payload = '''
{
    "chain_id": "0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036",
    "common_ref": "0x703873635a6b51513451",
    "timeout_gap": 20,
    "cycles_limit": 4294967295,
    "cycles_price": 1,
    "interval": 3000,
    "verifier_list": [
        {
            "bls_pub_key": "0x04188ef9488c19458a963cc57b567adde7db8f8b6bec392d5cb7b67b0abc1ed6cd966edc451f6ac2ef38079460eb965e890d1f576e4039a20467820237cda753f07a8b8febae1ec052190973a1bcf00690ea8fc0168b3fbbccd1c4e402eda5ef22",
            "address": "0xf8389d774afdad8755ef8e629e5a154fddc6325a",
            "propose_weight": 1,
            "vote_weight": 1
        }
    ],
    "propose_ratio": 15,
    "prevote_ratio": 10,
    "precommit_ratio": 10,
    "brake_ratio": 7,
    "tx_num_limit": 20000,
    "max_tx_size": 1024
}
'''
```

## 参数解释

### 初始化参数

| 参数名称   | 参数解释                                                                                                  |默认值  |   |
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--|
| `timestamp`   | 创世块的时间戳，可以随意设置，配置成 0，或者当天 0 点的时间都可以。 |0         |   |
| `prevhash`    | 可以随意设置，只会影响查询创世块时的字段显示。                                                                              |0x        |   |

### Asset service 参数

| 参数名称     | 参数解释                                                                                                   |默认值  ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `id`          | 资产的唯一 id，建议设置成 hash ，以免在之后和链上其他资产重复                                                          |0         ||
| `name`        | 资产名字                                                                                                        |0x        ||
| `symbol`      | 资产简称                                                                                                        |          ||
| `supply`      | 资产发行总量                                                                                                     |          ||
| `issuer`      | 发行方地址                                                                                                       |          ||

### Metadata service 参数

| 参数名称    | 参数解释                                                                                                   |默认值   |  |
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--- |
| `chain_id`    | 链唯一 id，建议设置为任意 hash                                                                                    |          |  |
| `common_ref`  | BLS 签名需要                                                                                                    |          |  |
| `timeout_gap` | 交易池能接受的最大超时块范围。用户在发送交易的时候，需要填写 `timeout` 字段，表示块高度超过这个值后，如果该交易还没有被打包，则以后都不会被打包，这样可以确保之前的某笔交易超时后一定会失败，避免用户的交易很长时间未被打包后换 `nonce` 重发交易，结果两笔交易都上链的情况。当用户填写的 `timeout` > `chain_current_height` + `timeout_gap` 时，交易池会拒绝这笔交易。考虑到一些特殊情况（比如一些冷钱包对交易签名后较长时间才发出），该值可以适当调大                                                                                     |  20  |  |
| `cycles_limit`| 10进制，链级别对单个交易可以消耗的最大 `cycle` 的限制                                                                 |  1000000 |  |
| `cycles_price`| 最小 cycle 价格，目前没有使用                                                                                      |   1      |  |
| `interval`    | 出块间隔，单位为 ms。当设置为 3s 的时候，出块间隔并不是严格的 3s，而是在 3s 附近波动，这是因为 Overlord 共识在响应性上的优化。当网络状况较好的时候，会小于 3s，网络情况较差，则会略大于 3s。 |  3000  |
| **verifier_list**   |                                                                                                           |         |  |
| `bls_pub_key` | 节点的 BLS 公钥                                                                                                   |        |   |
| `address`     | 节点的地址                                                                                                        |                |  |
| `propose_weight` | 节点的出块权重。如果有四个共识节点，出块权重分别为 1, 2, 3, 4，则第一个节点的出块概率为 1 / (1 + 2 + 3 + 4)。投票权重的逻辑类似。  |1        |  |
| `vote_weight` | 节点的投票权重                                                                                                     |1         |  |
| `propose_ratio` | propose 阶段的超时时间与出块时间的比例。例如 propose_ratio 为 5, interval 为 3000，则 propose 阶段的超时时间为 15 / 10 * 3000 = 4500，单位均为毫秒。                                                                                |15       |  |
| `prevote_ratio` | prevote 阶段的超时时间与出块时间的比例                                                                               |10       |  |
| `precommit_ratio`| precommit 阶段的超时时间与出块时间的比例                                                                            |10       |  |
| `brake_ratio`    | brake 阶段的超时时间与出块时间的比例                                                                                |7      |  |
| `tx_num_limit`   | 每一个块里最多可以打包的交易数                                                                                      |20000      |  |
| `max_tx_size`    | 单个交易最大的字节数                                                                                              |1024      |  |

