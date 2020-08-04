---
title: 节点运行配置
description: The fundamental Muta concepts. A great place to start learning about Muta.
---

In this section we will understand how to customize node running parameters in `devtools/chain/genesis.toml` which only affect individual nodes in a network. Different nodes can set their own parameters depending on their operation environment.

## Overview

Let's take a look at `devtools/chain/config.toml`.

```
# crypto
privkey = "0x4a33067c449635c434cc758ed5f595e1f5653debc45233997c93814c31f710d5"

# db config
data_path = "./devtools/chain/data"

[graphql]
listening_address = "0.0.0.0:8000"
graphql_uri = "/graphql"
graphiql_uri = "/graphiql"
workers = 0 # if 0, uses number of available logical cpu as threads count.
maxconn = 25000
max_payload_size = 1048576

[network]
listening_address = "0.0.0.0:1337"
rpc_timeout = 10

[consensus]
sync_txs_chunk_size = 5000

[[network.bootstraps]]
peer_id = "QmeG2AjWkLbK5ThySV7TrX5KuFryPsaM8GBgDs6Ch1Z5xJ"
address = "0.0.0.0:1888"

[mempool]
pool_size = 20000
broadcast_txs_size = 200
broadcast_txs_interval = 200

[executor]
light = false

[logger]
filter = "info"
log_to_console = true
console_show_file_and_line = false
log_path = "logs/"
log_to_file = true
metrics = true
# you can specify log level for modules with config below
# modules_level = { "overlord::state::process" = "debug", core_consensus = "error" }

[rocksdb]
max_open_files = 64

# [apm]
# service_name = "muta"
# tracing_address = "127.0.0.1:6831"
# tracing_batch_size = 50
```

Let’s go line-by-line and understand what each parameter means.

## Full list of node running parameters

### Local parameters

| Parameter     | Description                                                                                                   |Default   |   |
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--|
| `privkey`   | 节点私钥，节点的唯一标识，在作为 bootstraps 节点时，需要给出地址和该私钥对应的公钥让其他节点连接；如果是出块节点，该私钥对应的地址需要在 consensus verifier_list 中 |         |   |
| `data_path`    | 链数据所在目录                                                                                |        |   |

### GraphQL parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `listening_address`| GraphQL 监听地址                                                          |         ||
| `graphql_uri`        | GraphQL 服务访问路径                                                                                   |        ||
| `graphiql_uri`      | GraphiQL 访问路径                                                                                           |          ||
| `workers`      | 处理 http 的线程数量，填 0 的话，会默认按 CPU 的核数                                                               |          ||
| `maxconn`      | 最大连接数                                                                                                       |          ||

## Network parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `listening_address`| GraphQL 监听地址                                                          |         ||
| `graphql_uri`        | GraphQL 服务访问路径                                                                                   |        ||

## Network bootstraps node parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `pubkey`| 公钥                                                          |         ||
| `address`        | 网络地址                                                                                  |        ||

## Mempool parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `pool_size`| 交易池大小                                                        |         ||
| `broadcast_txs_size` | 一次批量广播的交易数量                                                                                  |        ||
| `broadcast_txs_interval`      | 每次广播交易的时间间隔，单位 ms                                                                        |          ||

## Executor parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `light`| 设为 true 时，节点将只保存最新高度的 state                                                         |         ||

## Logger parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `filter`| 全局日志级别                                                         |         ||
| `log_to_console`        | 是否输出日志到 console，生产环境建议设为 false                                                                       |        ||
| `console_show_file_and_line`      | 当 `log_to_console` 和本配置都置为 true 时，console 输出的日志里会包含日志打印处的文件和行数。本地通过日志调试时有用，一般可以设为 false。                                                                  |          ||
| `log_to_file`      | 是否输出日志到文件                                                              |          ||
| `metrics`      | 是否输出 metrics。logger 模块中有专门的 metrics 输出函数，如有需要，可以用来输出 metrics 日志，不受全局日志级别的影响，且对应的日志会输出到专门的文件。      |          ||
| `log_path`| 会在该路径生成两个日志文件：muta.log 和 metrics.log。metrics.log中包含了专门的 metrics 日志，muta.log 中包含了其它所有 log 输出。      |         ||


