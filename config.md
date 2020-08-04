# 配置说明

默认的创世块和配置样例在 `devtools/chain/` 文件夹中，此处对其中的一些字段进行说明。

## 创世块

`genesis.toml`:

```toml
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
   "issuer": "muta14e0lmgck835vm2dfm0w3ckv6svmez8fdgdl705"
}
'''

[[services]]
name = "metadata"
payload = '''
{
    "chain_id": "0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036",
    "bech32_address_hrp": "muta",
    "common_ref": "0x6c747758636859487038",
    "timeout_gap": 20,
    "cycles_limit": 4294967295,
    "cycles_price": 1,
    "interval": 3000,
    "verifier_list": [
       {
           "bls_pub_key": "0x04102947214862a503c73904deb5818298a186d68c7907bb609583192a7de6331493835e5b8281f4d9ee705537c0e765580e06f86ddce5867812fceb42eecefd209f0eddd0389d6b7b0100f00fb119ef9ab23826c6ea09aadcc76fa6cea6a32724",
           "pub_key": "0x02ef0cb0d7bc6c18b4bea1f5908d9106522b35ab3c399369605d4242525bda7e60",
           "address": "muta14e0lmgck835vm2dfm0w3ckv6svmez8fdgdl705",
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

创世块的初始化参数：

- `timestamp`: 创世块的时间戳，可以随意设置，配置成 0，或者当天 0 点的时间都可以。
- `prevhash`: 可以随意设置，只会影响查询创世块时的字段显示。

`services` 为各个 service 的初始化参数。各 service 的初始化参数说明：

- `asset`: 如果链需要发行原生资产，可以参考上面的例子填写，否则可以去掉
  - `id`: 资产的唯一 id，建议设置成 hash ，以免在之后和链上其他资产重复
  - `name`: 资产名字
  - `symbol`: 资产简称
  - `supply`: 资产发行总量
  - `issuer`: 发行方地址
- `metadata`: 链的元数据，必须填写
  - `chain_id`: 链唯一 id，建议设置为任意 hash
  - `bech32_address_hrp`: 链上地址的抬头，人类可读部分，创世块后不允许修改，注意需要符合 bech32 hrp 的规范
  - `common_ref`: BLS 签名需要
  - `timeout_gap`: 交易池能接受的最大超时块范围。用户在发送交易的时候，需要填写 `timeout` 字段，表示块高度超过这个值后，如果该交易还没有被打包，则以后都不会被打包，这样可以确保之前的某笔交易超时后一定会失败，避免用户的交易很长时间未被打包后换 `nonce` 重发交易，结果两笔交易都上链的情况。当用户填写的 `timeout` > `chain_current_height` + `timeout_gap` 时，交易池会拒绝这笔交易。考虑到一些特殊情况（比如一些冷钱包对交易签名后较长时间才发出），该值可以适当调大
  - `cycles_limit`: 10进制，链级别对单个交易可以消耗的最大 `cycle` 的限制
  - `cycles_price`: 最小 cycle 价格，目前没有使用
  - `interval`: 出块间隔，单位为 ms。当设置为 3s 的时候，出块间隔并不是严格的 3s，而是在 3s 附近波动，这是因为 Overlord 共识在响应性上的优化。当网络状况较好的时候，会小于 3s，网络情况较差，则会略大于 3s。
  - `verifier_list`: 共识列表
    - `bls_pub_key`: 节点的 BLS 公钥
    - `pub_key`: 节点的公钥
    - `address`: 节点的地址
    - `propose_weight`: 节点的出块权重。如果有四个共识节点，出块权重分别为 `1, 2, 3, 4`，则第一个节点的出块概率为 `1 / (1 + 2 + 3 + 4)`。投票权重的逻辑类似。
    - `vote_weight`: 节点的投票权重
  - `propose_ratio`: propose 阶段的超时时间与出块时间的比例。例如 `propose_ratio` 为 5, `interval` 为 3000，则 propose 阶段的超时时间为 `15 / 10 * 3000 = 4500`，单位均为毫秒。
  - `prevote_ratio`: prevote 阶段的超时时间与出块时间的比例
  - `precommit_ratio`: precommit 阶段的超时时间与出块时间的比例
  - `brake_ratio`: brake 阶段的超时时间与出块时间的比例
  - `tx_num_limit`: 每一个块里最多可以打包的交易数
  - `max_tx_size`: 单个交易最大的字节数

## 链的运行配置

`config.toml`:

```toml
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
inbound_conn_limit = 20

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

- `privkey`: 节点私钥，节点的唯一标识，在作为 bootstraps 节点时，需要给出地址和该私钥对应的公钥让其他节点连接；如果是出块节点，该私钥对应的地址需要在 consensus verifier_list 中
- `data_path`: 链数据所在目录
- `graphql`:
  - `listening_address`: GraphQL 监听地址
  - `graphql_uri`: GraphQL 服务访问路径
  - `graphiql_uri`: GraphiQL 访问路径
  - `workers`: 处理 http 的线程数量，填 0 的话，会默认按 CPU 的核数
  - `maxconn`: 最大连接数
  - `max_payload_size` 每个请求的最大字节数
- `network`:
  - `listening_address`: 链 p2p 网络监听地址
  - `rpc_timeout`: RPC 调用（例如从其它节点拉交易）超时时间，单位为秒
  - `inbound_conn_limit`: 连入类型的连接允许的最大数量，连出的最大数量由最大连接数减去本配置项的值
- `network.bootstraps`: 起链时连接的初始节点信息
  - `pubkey`: 公钥
  - `address`: 网络地址
- `mempool`: 交易池相关配置
  - `pool_size`: 交易池大小
  - `broadcast_txs_size`: 一次批量广播的交易数量
  - `broadcast_txs_interval`: 每次广播交易的时间间隔，单位 ms
- `executor`:
  - `light`: 设为 true 时，节点将只保存最新高度的 state
- `logger`: 日志相关配置
  - `filter`: 全局日志级别
  - `log_to_console`: 是否输出日志到 console，生产环境建议设为 false
  - `console_show_file_and_line`: 当 `log_to_console` 和本配置都置为 true 时，console 输出的日志里会包含日志打印处的文件和行数。本地通过日志调试时有用，一般可以设为 false。
  - `log_to_file`: 是否输出日志到文件
  - `metrics`: 是否输出 metrics。logger 模块中有专门的 metrics 输出函数，如有需要，可以用来输出 metrics 日志，不受全局日志级别的影响，且对应的日志会输出到专门的文件。
  - `log_path`: 会在该路径生成两个日志文件：`muta.log` 和 `metrics.log`。`metrics.log`中包含了专门的 metrics 日志，`muta.log` 中包含了其它所有 log 输出。
- `rocksdb`
  - `max_open_files` rocksdb 最大打开文件个数，即 fd。
-  `apm`: application performace monitor，用以监控系统全链路性能
  - `service_name` 需要监控的服务
  - `tracing_address` 需要将监控数据推送至服务器的地址
  - `tracing_batch_size` 分批推送，每一次分批的大小

## 出块逻辑
Overlord 提供两种出块逻辑，随机出块和轮询出块。随机出块根据节点的 `propose_weight` 使用确定性随机算法选择 leader，按照 `vote_weight` 进行计票。轮询出块轮流选择 leader，所以这时 `propose_weight` 是不生效的。轮询出块也是按照 `vote_weight` 进行计票。
Muta 中有随机出块特性的开关， 通过 `features = ["random_leader"]` 开启，在 muta-chain 中，默认是使用随机出块的。在使用 Muta 框架进行开发的时候，在 `Cargo.toml` 中的 muta 依赖中可以选择出块方式：

```rust
# 轮询出块
muta = { git = "https://github.com/nervosnetwork/muta", branch = "master" }
# 随机出块
muta = { git = "https://github.com/nervosnetwork/muta", branch = "master", features = ["random_leader"] }
```

## 日志示例

文件中的日志均为 json 格式，方便用程序处理。其中 message 一般为一个嵌套的 json 结构，用来表达结构化信息。

```bash
$ tail logs/muta.log -n 1
{"time":"2020-02-12T17:11:04.187149+08:00","message":"update_after_exec cache: height 2, exec height 0, prev_hash 0x039d2f399864dba72c5b0f26ec989cba9bdcb9fca23ce48c8bc8c4398cb2ad0b,latest_state_root 0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772 state root [0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772], receipt root [], confirm root [], cycle used []","module_path":"core_consensus::status","file":"/Users/huwenchao/.cargo/git/checkouts/muta-cad92efdb84944c1/34d052a/core/consensus/src/status.rs","line":114,"level":"INFO","target":"core_consensus::status","thread":"main","thread_id":4576796096,"mdc":{}}

$ tail logs/metrics.log -n 1
{"time":"2020-02-12T17:11:04.187240+08:00","message":"{\"timestamp\":1581498664187,\"event_name\":\"update_exec_info\",\"event_type\":\"custom\",\"tag\":{\"confirm_root\":\"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\",\"exec_height\":1,\"receipt_root\":\"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\",\"state_root\":\"0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772\"},\"metadata\":{\"address\":\"0xf8389d774afdad8755ef8e629e5a154fddc6325a\",\"v\":\"0.3.0\"}}","module_path":"core_consensus::trace","file":"/Users/huwenchao/.cargo/git/checkouts/muta-cad92efdb84944c1/34d052a/core/consensus/src/trace.rs","line":24,"level":"TRACE","target":"metrics","thread":"main","thread_id":4576796096,"mdc":{}}
```
