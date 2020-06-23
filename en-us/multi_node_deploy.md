# Multi-node Deployment

## Generate public key and private key

```bash
# Install muta-keypair
$ cargo +nightly install --git https://github.com/nervosnetwork/muta.git --bin muta-keypair

$ muta-keypair -h
muta_keypair 0.1
Muta Dev <muta@nervos.org>
a tool to generate keypairs for muta

USAGE:
    muta-keypair [OPTIONS]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -c, --common_ref <common_ref>           common_ref for bls signature, it will be randomly generated if not passed
                                            [default: ]
    -n, --number <number>                   Number of keypairs to generate [default: 4]
    -p, --private_keys <private_keys>...    Generate keypairs from a given private key vector

# Come up with a string together, after encoding it with hexidecimal, use it as common_ref of BLS signature
# Or one guy generates key using muta-keypair, then shares randomly generated common_ref with others 
$ muta-keypair -n 1
{
  "common_ref": "0x37537a3658476b334a71",
  "keypairs": [
    {
      "index": 1,
      "private_key": "0x33e10486adf1b64dbcf9a2c9531ebd78c9c651daf97bd6d2d170b0743f3dd789",
      "public_key": "0x02bccb67683203d8b2157c6c2b36796094dfe86302250eb823c67e93929a7a8265",
      "address": "0x7529ec67eccf908a4ec49d119b5a47e45eeaceba",
      "bls_public_key": "0x0406367be42b1373981cc1e7a65881b7e17931e11a3af54ce7016317f7fb84bd674f9ee2c95ff9833d197c43ca97363322056ed9acee03142c8923a36a39ce339c56dd215d9e262b3df66b4756e476df9cc796d9cc21b59be9e1b2abe9fcbbf6bd"
    }
  ]
}

$ muta-keypair -n 2 -c 37537a3658476b334a71
{
  "common_ref": "0x37537a3658476b334a71",
  "keypairs": [
    {
      "index": 1,
      "private_key": "0x9024ebaef92ce541bbfd2cf55a6c1f8ea797393cb6234db550f84b6526d7b9ab",
      "public_key": "0x02ff12550ee3a923a0c7cc4fc2bea0670ec3057f8a368fb4d375957cdc26e0bce9",
      "address": "0xc2c456378a72ec16a50264e36232ab9654a81b62",
      "bls_public_key": "0x04037457b7c7b88683d2affa5b2a0045bb8816d8f67412490d82fd447cc77b96f04090854a38b39f0d2aedb264a01120350df3bb0acd85abfa8a1462af0512ba14032ffc71099a92ed9cb9d2f4046bafb9438ac97d30890dbf7c5213a81ecd3622"
    },
    {
      "index": 2,
      "private_key": "0xd920025da5817b4fcf83bedd750bd9a39097119cc256dbbe4b8d91bdce806a7f",
      "public_key": "0x02f6947ddaaabc226c596fb3b9596fa11cc8774fc38404506856af39a03e5863dc",
      "address": "0xfa78b72dba80fa7bf3a9dc7ca7845c56e84eeba3",
      "bls_public_key": "0x040a02cbb00c9591fc0bd008edeeca3be1037f3ad542d0fe63b5d6754675a13b7e6882788a3fb50a649d6876d2d0d3d6b911d5368eee96d8868a2b6eb2feb351f9c0ce1b8476f7626a9911fccb8e176b724d0a3414ef951aff323c7878f05b21c1"
    },
  ]
}
```

## Generate genesis block

Example of genesis block below.
Key components need to be discussed:

- common_ref: common_ref used to generate the public key
- verifier_list: inital block producing nodes, need to provide address, bls_pub_key and weight

Other genesis block info can be referred to configuration guide.

After generated genesis block, distribute it to nodes. Each node must use the same genesis block, otherwise they won't be considered on the same chain.

```toml
timestamp = 0
prevhash = "0x44915be5b6c20b0678cf05fcddbbaa832e25d7e6ac538784cd5c24de00d47472"

[[services]]
name = "asset"
payload = '''
{
    "id": "0xf56924db538e77bb5951eb5ff0d02b88983c49c45eea30e8ae3e7234b311436c",
    "name": "Muta Token",
    "symbol": "MT",
    "supply": 1000000000,
    "issuer": "0xf8389d774afdad8755ef8e629e5a154fddc6325a"
}
'''

[[services]]
name = "metadata"
payload = '''
{
    "chain_id": "0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036",
    "common_ref": "0x37537a3658476b334a71",
    "timeout_gap": 20,
    "cycles_limit": 999999999999,
    "cycles_price": 1,
    "interval": 3000,
    "verifier_list": [
        {
            "bls_pub_key": "0x0406367be42b1373981cc1e7a65881b7e17931e11a3af54ce7016317f7fb84bd674f9ee2c95ff9833d197c43ca97363322056ed9acee03142c8923a36a39ce339c56dd215d9e262b3df66b4756e476df9cc796d9cc21b59be9e1b2abe9fcbbf6bd",
            "address": "0x7529ec67eccf908a4ec49d119b5a47e45eeaceba",
            "propose_weight": 1,
            "vote_weight": 1
        },
        {
            "bls_pub_key": "0x04037457b7c7b88683d2affa5b2a0045bb8816d8f67412490d82fd447cc77b96f04090854a38b39f0d2aedb264a01120350df3bb0acd85abfa8a1462af0512ba14032ffc71099a92ed9cb9d2f4046bafb9438ac97d30890dbf7c5213a81ecd3622",
            "address": "0xc2c456378a72ec16a50264e36232ab9654a81b62",
            "propose_weight": 1,
            "vote_weight": 1
        },
        {
            "bls_pub_key": "0x040a02cbb00c9591fc0bd008edeeca3be1037f3ad542d0fe63b5d6754675a13b7e6882788a3fb50a649d6876d2d0d3d6b911d5368eee96d8868a2b6eb2feb351f9c0ce1b8476f7626a9911fccb8e176b724d0a3414ef951aff323c7878f05b21c1",
            "address": "0xfa78b72dba80fa7bf3a9dc7ca7845c56e84eeba3",
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

## Each node has its own config file

Example of chain config:

```
# crypto
privkey = "0x33e10486adf1b64dbcf9a2c9531ebd78c9c651daf97bd6d2d170b0743f3dd789"

# db config
data_path = "./data"

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
pubkey = "0x02ff12550ee3a923a0c7cc4fc2bea0670ec3057f8a368fb4d375957cdc26e0bce9"
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

Pay attention to network related config:

```
# Listening address for network
[network]
listening_address = "0.0.0.0:1337"

# nodes config when bootstrap the chain
[[network.bootstraps]]
pubkey = "0x02ff12550ee3a923a0c7cc4fc2bea0670ec3057f8a368fb4d375957cdc26e0bce9"
address = "44.55.66.77:1337"
```

1 or more nodes can be setup as bootstrap node. `network.bootstraps` can be left empty in bootstrap node. 
Bootstrap nodes need to run first when bootstrap the chain.

Other nodes `network.bootstraps` field should be bootstraps node's chain listening address and public key. They will connect to bootstrap nodes after they start, then transmit through P2P to connect to the entire chain. 

Feel free to modify other node configs, detail can be referred to corresponding chapters. 
