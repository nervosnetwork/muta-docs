# Configuration

Default genesis block and config example is in `devtools/chain/` Here's some explanation to it.

## Genesis block

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
    "cycles_limit": 1000000,
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

Genesis block default setup:

- `timestamp`: timestamp of genesis block, can be set to arbitrary timestamp. For example, it can be 0 or 00:00 on some day
- `prevhash`: can be set to arbitrary value, it only affects the outcome when querying genesis block

`services`: default value for configs in services

- `asset`: [Optional] Exist if a chain issues native asset, you can refer to example above
  - `id`: unique identifier of an asset, it's recommended to set it as a hash value avoid duplication with other assets on the chain in the future
  - `name`: asset name
  - `symbol`: asset short name
  - `supply`: total supply of the asset
  - `issuer`: issuer address
- `metadata`: [Required] Metadata of the chain
  - `chain_id`: unique identifier of the chain, it's recommended to set it as a random hash value.
  - `common_ref`: needed for BLS signature
  - `timeout_gap`: max timeout an exchange pool can wait on a block. Users need to fill in `timeout` when starting a transaction to indicate this transaction will not be included in the chain after block height exceeds this value. This will make sure the failure of the timeout transaction and avoid user starting a new transaction with new `nonce` after waiting for a long time which produces 2 transactions on the chain eventually. If user entered `timeout` > `chain_current_height` + `timeout_gap`, exchange pool will reject this transaction. For some special cases (Ex: cold wallet sends the transaction after signing for a long time), `transaction_gap` can be set to a bigger value accordingly
  - `cycles_limit`: base 10 number, max `cycle` can be run for a single transaction on the chain level
  - `cycles_price`: minimum price for a cycle, currently not in use
  - `interval`: interval between generating blocks, measured in millisecond. When it's set to 3s, it's not strictly 3s but it's about 3s. Due to optimization of `Overload` consensus on latency. It will be less than 3s in a good network condition, and more than 3s in a bad network condition
  - `verifier_list`: consensus list
    - `bls_pub_key`: BLS public key of the node
    - `address`: node address
    - `propose_weight`: weight of node when producing blocks. For example: 4 nodes, weights are `1, 2, 3, 4`, first node's chance of producing a block is `1 / (1 + 2 + 3 + 4)`
    - `vote_weight`: weight of node when voting, similar calculation process as `propose_weight`
  - `propose_ratio`: ratio between timeout and block producing time in propose stage. For example: if `propose_ratio` is 5, `interval` is 3000ms, then timeout at propose stage is `15 / 10 * 3000 = 4500`, all measured in millisecond
  - `prevote_ratio`: ratio between timeout and block producing time in prevote stage
  - `precommit_ratio`: ratio between timeout and block producing time in precommit stage
  - `brake_ratio`: ratio between timeout and block producing time in brake stage
  - `tx_num_limit`: max number of transaction in a single block
  - `max_tx_size`: max number of byte in a single transaction

## Runtime config

`config.toml`:

```toml
# crypto
privkey = "0x45c56be699dca666191ad3446897e0f480da234da896270202514a0e1a587c3f"

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

[[network.bootstraps]]
pubkey = "0x031288a6788678c25952eba8693b2f278f66e2187004b64ac09416d07f83f96d5b"
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
```

- `privkey`: Private key of the node, also the only identifier of the node, used when bootstraps the node. In order for other nodes to connect, it needs to expose address and corresponding public key. If it's a block producing node, its address needs to be included in consensus `verifier_list`
- `data_path`: where chain data is stored
- `graphql`:
  - `listening_address`: listening address of GraphQL
  - `graphql_uri`: URL to access GraphQL service
  - `graphiql_uri`: URL to access GraphiQL
  - `workers`: number of thread to handle http request. If 0 is entered, will default use number of CPU core
  - `maxconn`: max number of connection
- `network`:
  - `listening_address`: listening address of the chain
  - `rpc_timeout`: timeout of RPC call (Ex: pull transaction from other nodes), measured in second
- `network.bootstraps`: starting node info when bootstraps the chain
  - `pubkey`: public key
  - `address`: network address
- `mempool`: exchange pool configurations
  - `pool_size`: size of pool
  - `broadcast_txs_size`: number of transaction in one broadcast
  - `broadcast_txs_interval`: interval between each broadcast, measured in millisecond
- `executor`:
  - `light`: when set to true, node will only keep the state of latest block hight
- `logger`: logger configuration
  - `filter`: log level globally
  - `log_to_console`: whether output the log to console, it's recommended to set to false in production
  - `console_show_file_and_line`: when `log_to_console` and `console_show_file_and_line` are both true, log will include file and number of lines
  - `log_to_file`: whether output log to file
  - `metrics`: whether output metrics, there are metric functions in logger module. It's independent from global log level, and it will output to specific files
  - `log_path`: generates 2 log files in this path: `muta.log` and `metrics.log`. `metrics.log` includes metrics log, `muta.log` includes all other logs

## Log sample

All logs are in json format, each message is a nested json structure.

```bash
$ tail logs/muta.log -n 1
{"time":"2020-02-12T17:11:04.187149+08:00","message":"update_after_exec cache: height 2, exec height 0, prev_hash 0x039d2f399864dba72c5b0f26ec989cba9bdcb9fca23ce48c8bc8c4398cb2ad0b,latest_state_root 0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772 state root [0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772], receipt root [], confirm root [], cycle used []","module_path":"core_consensus::status","file":"/Users/huwenchao/.cargo/git/checkouts/muta-cad92efdb84944c1/34d052a/core/consensus/src/status.rs","line":114,"level":"INFO","target":"core_consensus::status","thread":"main","thread_id":4576796096,"mdc":{}}

$ tail logs/metrics.log -n 1
{"time":"2020-02-12T17:11:04.187240+08:00","message":"{\"timestamp\":1581498664187,\"event_name\":\"update_exec_info\",\"event_type\":\"custom\",\"tag\":{\"confirm_root\":\"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\",\"exec_height\":1,\"receipt_root\":\"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\",\"state_root\":\"0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772\"},\"metadata\":{\"address\":\"0xf8389d774afdad8755ef8e629e5a154fddc6325a\",\"v\":\"0.3.0\"}}","module_path":"core_consensus::trace","file":"/Users/huwenchao/.cargo/git/checkouts/muta-cad92efdb84944c1/34d052a/core/consensus/src/trace.rs","line":24,"level":"TRACE","target":"metrics","thread":"main","thread_id":4576796096,"mdc":{}}
```