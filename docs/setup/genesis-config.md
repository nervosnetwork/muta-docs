---
title: Genesis Configuration
description: The fundamental Muta concepts. A great place to start learning about Muta.
---

In this section we will understand how to customize genesis parameters in [`devtools/chain/genesis.toml`][genesis.toml] which affect the entire chain and network. 

## Overview

Genesis parameters are global to a blockchain, and most of them are critical to that blockchain’s consensus. Once the blockchain is initialized, most of these parameters cannot be changed. However, a small number can be updated using the metadata service and are marked as **Upgradable** below. And some of these parameters are required configuration while the others are optional which are marked as **Optional** below. All the nodes in a blockchain network should share the same [`genesis.toml`][genesis.toml].

Let's take a look at `devtools/chain/genesis.toml`.

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
Let’s go line-by-line and understand what each parameter means.

## Full list of blockchain parameters

### Initialization parameters

| Parameter     | Description                                                                                                   |Default   |   |
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--|
| `timestamp`   | timestamp of genesis block, can be set to arbitrary timestamp. For example, it can be 0 or 00:00 on some day. |0         |   |
| `prevhash`    | can be set to arbitrary value.                                                                                |0x        |   |

### Asset service parameters

***Optional configuration***

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:-------------------------------------------------------------------------------|:---      |:--   |
| `id`          | unique identifier of an asset, it's recommended to set it as a hash value avoid duplication with other assets on the chain in the future                    |0x          ||
| `name`        | asset name                                                                                                       |   MutaToken   ||
| `symbol`      | asset short name                                                                                                       |  MT        ||
| `supply`      | total supply of the asset                                                                                              |  320000011        ||
| `issuer`      | issuer address                                                                                                       | 0x          ||

### Metadata service parameters

| Parameter     | Description                                                                                                   |Default   |  |
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--- |
| `chain_id`    | unique identifier of the chain, it's recommended to set it as a random hash value.                            |   0x       |  |
| `common_ref`  | needed for BLS signature                                                                                        |   0x      |  |
| `timeout_gap` | max timeout an exchange pool can wait on a block. Users need to fill in `timeout` when starting a transaction to indicate this transaction will not be included in the chain after block height exceeds this value. This will make sure the failure of the timeout transaction and avoid user starting a new transaction with new `nonce` after waiting for a long time which produces 2 transactions on the chain eventually. If user entered `timeout` > `chain_current_height` + `timeout_gap`, exchange pool will reject this transaction. For some special cases (Ex: cold wallet sends the transaction after signing for a long time), `transaction_gap` can be set to a bigger value accordingly                     | 20   |  |
| `cycles_limit`| base 10 number, max `cycle` can be run for a single transaction on the chain level                              |  1000000 |  |
| `cycles_price`| minimum price for a cycle, currently not in use                                                           |   1      |  |
| `interval`    | interval between generating blocks, measured in millisecond. When it's set to 3s, it's not strictly 3s but it's about 3s due to optimization of `Overload` consensus on latency. It will be less than 3s in a good network condition, and more than 3s in a bad network condition |  3000  | |
| **verifier_list**   |     Validator List                                                                                                      |         |  |
| `bls_pub_key` | BLS public key of the node                                                                                        |  0x      |   |
| `address`     | node address                                                                                       |     0x           |  |
| `propose_weight` | weight of node when producing blocks. For example: 4 nodes, weights are `1, 2, 3, 4`, first node's chance of producing a block is `1 / (1 + 2 + 3 + 4)`  |1        |  |
| `vote_weight` | weight of node when voting, similar calculation process as `propose_weight`                                           |1        |  |
| `propose_ratio` | ratio between timeout and block producing time in propose stage. For example: if `propose_ratio` is 5, `interval` is 3000ms, then timeout at propose stage is `15 / 10 * 3000 = 4500`, all measured in millisecond                   |15       |  |
| `prevote_ratio` | ratio between timeout and block producing time in prevote stage                        |10       |  |
| `precommit_ratio`| ratio between timeout and block producing time in precommit stage                                 |10       |  |
| `brake_ratio`    | ratio between timeout and block producing time in brake stage                          |7      |  |
| `tx_num_limit`   | max number of transaction in a single block                                                       |20000      |  |
| `max_tx_size`    | max number of byte in a single transaction                                                |1024      |  |

[genesis.toml]: https://github.com/nervosnetwork/muta/blob/master/devtools/chain/genesis.toml
