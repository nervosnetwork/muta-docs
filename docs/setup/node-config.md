---
title: Node Configuration
description: The fundamental Muta concepts. A great place to start learning about Muta.
---

In this section we will understand how to customize node running parameters in [`devtools/chain/config.toml`][config.toml] which only affect individual nodes in a network. Different nodes can set their own parameters depending on their operation environment.

## Overview

Let's take a look at [`devtools/chain/config.toml`][config.toml].

```
# crypto
privkey = "0x5ec982173d54d830b6789cbbbe43eaa2853a5ff752d1ebc1b266cf9790314f8a"

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
peer_id = "QmTEJkB5QKWsEq37huryZZfVvqBKb54sHnKn9TQcA6j3n9"
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
| `privkey`   | Private key of the node, also the only identifier of the node, used when bootstraps the node. In order for other nodes to connect, it needs to expose address and corresponding public key. If it's a block producing node, its address needs to be included in consensus `verifier_list` |         |   |
| `data_path`    | where chain data is stored                                                                                |        |   |

### GraphQL parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `listening_address`| listening address of GraphQL                                                          |         ||
| `graphql_uri`        | URL to access GraphQL service                                                                                   |        ||
| `graphiql_uri`      | URL to access GraphiQL                                                                                           |          ||
| `workers`      | number of thread to handle http request. If 0 is entered, will default use number of CPU core                 |     0     ||
| `maxconn`      | max number of connection                                                                              |   25000       ||
| `max_payload_size`      |     Size of transaction after serialization, maximum limit in bytes                                  |   1048576      ||

### Network parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `listening_address`| listening address of the chain                                                          |         ||
| `rpc_timeout`        | timeout of RPC call (Ex: pull transaction from other nodes), measured in second                                                                                  |    10    ||

### Consensus parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `sync_txs_chunk_size`| Get transactions from the remote end in batches during synchronization, number of transactions per batch       |         ||


### Network bootstraps node parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `peer_id`|    node id, calculated from the public key                                                      |         ||
| `address`        | network address                                                                                |        ||

### Mempool parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `pool_size`| size of mempool                                                        |      2000   ||
| `broadcast_txs_size` | number of transaction in one broadcast                                                              |    200    ||
| `broadcast_txs_interval`      | interval between each broadcast, measured in millisecond                              |    200     ||

### Executor parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `light`| when set to true, node will only keep the state of latest block hight                                             |   false      ||

### Logger parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `filter`| log level globally                                                       |   "info"      ||
| `log_to_console`        | whether output the log to console, it's recommended to set to false in production                    |   true     ||
| `console_show_file_and_line`      | when `log_to_console` and `console_show_file_and_line` are both true, log will include file and number of lines                  |   false       ||
| `log_to_file`      | whether output log to file                                                            |    true      ||
| `metrics`      | whether output metrics. There are metric functions which is independent from global log level in logger module, and if it's needed, it can be used to output metrics to specific files.   |    true      ||

### Rocksdb parameters

| Parameter     | Description                                                                                                   |Default   ||
|:--------------|:--------------------------------------------------------------------------------------------------------------|:---      |:--   |
| `max_open_files `|     The maximum value of file descriptors (FD) allowed to be opened by rocksdb.                       |   64      ||


## Log sample

All logs are in json format, each message is a nested json structure.

```
$ tail logs/muta.log -n 1
{"time":"2020-02-12T17:11:04.187149+08:00","message":"update_after_exec cache: height 2, exec height 0, prev_hash 0x039d2f399864dba72c5b0f26ec989cba9bdcb9fca23ce48c8bc8c4398cb2ad0b,latest_state_root 0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772 state root [0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772], receipt root [], confirm root [], cycle used []","module_path":"core_consensus::status","file":"/Users/huwenchao/.cargo/git/checkouts/muta-cad92efdb84944c1/34d052a/core/consensus/src/status.rs","line":114,"level":"INFO","target":"core_consensus::status","thread":"main","thread_id":4576796096,"mdc":{}}

$ tail logs/metrics.log -n 1
{"time":"2020-02-12T17:11:04.187240+08:00","message":"{\"timestamp\":1581498664187,\"event_name\":\"update_exec_info\",\"event_type\":\"custom\",\"tag\":{\"confirm_root\":\"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\",\"exec_height\":1,\"receipt_root\":\"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\",\"state_root\":\"0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772\"},\"metadata\":{\"address\":\"0xf8389d774afdad8755ef8e629e5a154fddc6325a\",\"v\":\"0.3.0\"}}","module_path":"core_consensus::trace","file":"/Users/huwenchao/.cargo/git/checkouts/muta-cad92efdb84944c1/34d052a/core/consensus/src/trace.rs","line":24,"level":"TRACE","target":"metrics","thread":"main","thread_id":4576796096,"mdc":{}}
```

[config.toml]: https://github.com/nervosnetwork/muta/blob/master/devtools/chain/config.toml