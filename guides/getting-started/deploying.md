---
last_modified_on: "2020-07-13"
title: Deploy a multi-node blockchain network
description: How to deploy a multi-node blockchain network to your target environment
series_position: 2
author_github: https://github.com/zhouyun-zoe
tags: ["type: tutorial", "level: easy"]
---

import Steps from '@site/src/components/Steps';

In this tutorial we will learn and practice how to start a blockchain network with a validator set of your choosing using Muta. In this case, we will build a four validators' blockchain running on a single server with a single Muta binary , but the process generalizes to more nodes and more complex deploy environment in a straight-forward manner.

## Overview

**This tutorial assumes that you already have Muta compiled on your computer from when you completed the [Create Your First Muta Chain Tutorial](./before-create).** If you do not, please install and compile Muta framework first.

In this case, we will build a blockchain network with four validators (Alice, Bob, Bill and Ben). And Alice will be the bootstrap node. The tutorial is divided into several sections:

* Firstly, each participant should generate their own key-pairs.
* And then, create the genesis block and config the node.
* With custom chain spec distributed to all participants, we will run the bootstraps node firstly, and then start the other node to connect to bootstraps node.

<Steps
 headingDepth={3}>
<ol>
<li>

## Generate key-pairs

### Install Muta-keypair

Muta-keypair is a tool the generates keys specifically designed to be used with Muta. Install it by following command:

```
cargo +nightly install --git https://github.com/nervosnetwork/muta.git --bin muta-keypair
```

Run the help command，then you can see the operation guide:

```
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
```

:::note
`common_ref` is a required parameter used when generating BLS signature. And all the validators in a same network should share a common `common_ref`. So, in here, one option is to let `bootstraps node` generating `common_ref` first, and then distribute it to the other node. Another option for validators is to consult together to come up with a string used as `common_ref` after hex encoding. 
:::

In this case, bootstraps node will generate a `common_ref` randomly, and then pass it to the other node.

### Generate Key-pairs

Alice (bootstraps node) generates her key-pairs:

```
$ muta-keypair -n 1
{
  "common_ref": "0x7446645045376b553041",
  "keypairs": [
    {
      "index": 1,
      "private_key": "0x5b2041e3f47aaf2d44407d3bdf415a4f55bf377352448c4217393f5c34fe270d",
      "public_key": "0x0299b6d1ad1961cf7a99b581d103a9f977531f77d67e994bfcd9a7fd82ad230a49",
      "address": "0x991ce94e75332da2160363d78b73955738d7a3bc",
      "bls_public_key": "0x04076b9ee33b9ef2c5f6f7bf8507dd2e17c65f8b67bee2ca874dde747ef69d7f18ec927de1adca930da61b071d6075ea10172342d0fb50b977b919ab0e4e8306261002b1ed27990b9d6dded5583b91d8801615baee901ed09a2333fc57770d84c8"
    }
  ]
}
```

After Alice passes the `common_ref` to Bob, Bill and Ben, they generates his own key-pairs:

```
$ muta-keypair -n 3 -c 75695962523835457669
{
  "common_ref": "0x75695962523835457669",
  "keypairs": [
    {
      "index": 1,
      "private_key": "0x28f53779b60e261ba68cdccefcc6a152136df8cb794e067ec76dc5a02c8f2ccf",
      "public_key": "0x0299b6d1ad1961cf7a99b581d103a9f977531f77d67e994bfcd9a7fd82ad230a49",
      "address": "0x78ef0eff2fb9f569d86d75d22b69ea8407f6f092",
      "bls_public_key": "0x0413584a15f1dec552bb12233bf73a886ed49a3f56c68eda080743577005417635c9ac72a528a961a0e14a2df3a50a5c660641f446f629788486d7935d4ad4918035ce884a98bbaaa4c96307a2428729cba694329a693ce60c02e13b039c6a8978"
    },
    {
      "index": 2,
      "private_key": "0x8b41630934fc7df92a016af88aae477bd173118fb72113f31db8a950230b029f",
      "public_key": "0x030a1cd0213b86976c9e14c1aa8d0167a50c8a5c929f72fcbeaae35d84afa1c2b7",
      "address": "0xa55e1261a73116c755291140e427caa0cbb5309e",
      "bls_public_key": "0x040e7b00b59d37d4d735041ea1b69a55cd7fd80e920b5d70d85d051af6b847c3aec5b412b128f85ad8b4c6bac0561105a80fa8dd5f60cd42c3a2da0fd0b946fa3d761b1d21c569e0958b847da22dec14a132121027006df8c5d4ccf7caf8535f70"
    },
    {
      "index": 3,
      "private_key": "0x8e065679aa8b1185406c7514343073cd8c1695218925c9b2d5e98c3483d71d81",
      "public_key": "0x027c805020b226a050c317c68d50cb7b0a7d682b5614e23a61c5c08a722c2d44aa",
      "address": "0x103252cad4e0380fe57a0c73f549f1ee2c9ea8e8",
      "bls_public_key": "0x041611b7da94a7fb7a8ff1c802bbf61da689f8d6f974d99466adeb1f47bcaff70470b6f279763abeb0cec5565abcfcb4ce13e79b8c310f0d1b26605b61ac2c04e0efcedbae18e763a86adb7a0e8ed0fcb1dc11fded12583972403815a7aa3dc300"
    }
  ]
}
```

From the output we can see, each participant not only has their own keys generated，but also possessed their `bls_public_key`. Reocord all of these information carellful, we will use it in following steps.

</li>
<li>

## Create the Genesis Block

Now that each participant has their own keys generated, in this part, we will create the genesis block for this chain.

Alice find `devtool/chain/genesis.toml` which contains all the info of genesis block, but it's still filled with default configuration. 

Pay attention to following three fields:

* **The portion of this file Alice needs to pay attention is the `verifier_list`, in which all the origin validators's info need to be filled.** 
* Since Overlord consensus protocol supports weghted votes, in here, we can also set `propose_weight` and `propose_weight`. 
* And don't forget to modify `common_ref`.

:::note
More info of the other parameters in `genesis.toml` can be explored in [configuration guide](./config.md). 
:::

After knowing that, Alice adds the other nodes' info into `verifier_list` , give each validator a weight of 1, modify `common_ref` and keep the other fields unchanged. Then the `genesis.toml` looks like this:

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
    "common_ref": "0x7446645045376b553041",
    "timeout_gap": 20,
    "cycles_limit": 999999999999,
    "cycles_price": 1,
    "interval": 3000,
    "verifier_list": [
        {
            "bls_pub_key": "0x040386a8ac1cce6fd90c31effa628bc8513cbd625c752ca76ade6ff37b97edbdfb97d94caeddd261d9e2fd6b5456aecc100ea730ddee3c94f040a54152ded330a4e409f39bfbc34b286536790fef8bbaf734431679ba6a8d5d6994e557e82306df",
            "address": "0x12d8baf8c4efb32a7983efac2d8535fe57deb756",
            "propose_weight": 1,
            "vote_weight": 1
        },
        {
            "bls_pub_key": "0x040e7b00b59d37d4d735041ea1b69a55cd7fd80e920b5d70d85d051af6b847c3aec5b412b128f85ad8b4c6bac0561105a80fa8dd5f60cd42c3a2da0fd0b946fa3d761b1d21c569e0958b847da22dec14a132121027006df8c5d4ccf7caf8535f70",
            "address": "0xa55e1261a73116c755291140e427caa0cbb5309e",
            "propose_weight": 1,
            "vote_weight": 1
        },
        {
            "bls_pub_key": "0x0413584a15f1dec552bb12233bf73a886ed49a3f56c68eda080743577005417635c9ac72a528a961a0e14a2df3a50a5c660641f446f629788486d7935d4ad4918035ce884a98bbaaa4c96307a2428729cba694329a693ce60c02e13b039c6a8978",
            "address": "0x78ef0eff2fb9f569d86d75d22b69ea8407f6f092",
            "propose_weight": 1,
            "vote_weight": 1
        },
        {
            "bls_pub_key": "0x041611b7da94a7fb7a8ff1c802bbf61da689f8d6f974d99466adeb1f47bcaff70470b6f279763abeb0cec5565abcfcb4ce13e79b8c310f0d1b26605b61ac2c04e0efcedbae18e763a86adb7a0e8ed0fcb1dc11fded12583972403815a7aa3dc300",
            "address": "0x103252cad4e0380fe57a0c73f549f1ee2c9ea8e8",
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

Finally Alice shares the `genesis.toml` with all the other validators in the network. In this case, since these four nodes will run in the same binanry, we can just keep one `genesis.toml` file under `devtool/chain` directory.

:::note
In production environment, it's highly recommended that bootstraps node create the genesis block first and shared the resulting `genesis.toml` file with the other validators. Because it's quite easy to get a slightly different genesis block which will break consensus if each participant generates the file themselves.
:::

</li>
<li>

## Config node parameters

After creating the genesis block, Each validators need to config the node. Node configuration parameters can be found in `devtool/chain/config.toml`.

**The fields of this file we need to pay more attention are:** 

* `privkey`: private key of this node
* Under `[network]`, `listening_address = "0.0.0.0:1337"` specifies the address that your node will listen.
* `[[network.bootstraps]]`, specifies the information of bootstraps node that your node will connect, including the public key and listening address. Bootstrap node can leave this filed empty.


### Alice configures her node 

After adding required infomation and leaving `[[network.bootstraps]]` empty  , `config.toml` in Alice's node looks like:

```
data_path = "./devtools/chain/data/1"
privkey = "0x592d6f62cd5c3464d4956ea585ec7007bcf5217eb89cc50bf14eea95f3b09706"

[network]
listening_address = "0.0.0.0:1337"
rpc_timeout = 10

[graphql]
graphiql_uri = "/graphiql"
listening_address = "0.0.0.0:8000"
graphql_uri = "/graphql"
workers = 0 # if 0, uses number of available logical cpu as threads count.
maxconn = 25000
max_payload_size = 1048576

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

### Others' configuration

**For Bob:**

Bob adds his private key, specifies his `[network]` and got Alice's infomation to fill into `[[network.bootstraps]]`. 
( In this case, we also modifies `lisening_adress` under `[graphql]`, since these four nodes are on the same server).

Then the `config.toml` in Bob's node looks like:

```
data_path = "./devtools/chain/data/2"
privkey = "0x8b41630934fc7df92a016af88aae477bd173118fb72113f31db8a950230b029f"

[network]
listening_address = "0.0.0.0:1338"
rpc_timeout = 10

[[network.bootstraps]]
pubkey = "0x02fa3a27712962a70e3e474363f38661f6a9e56f9cc91efd0d343713d51f3fa355"
address = "localhost:1337" # Replace it with your IP

[graphql]
graphiql_uri = "/graphiql"
listening_address = "0.0.0.0:8001"
graphql_uri = "/graphql"
workers = 0 # if 0, uses number of available logical cpu as threads count.
maxconn = 25000
max_payload_size = 1048576

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

**For Ben:**

<details>
<summary>(click here to view)</summary>

```
data_path = "./devtools/chain/data/2"
privkey = "0x8b41630934fc7df92a016af88aae477bd173118fb72113f31db8a950230b029f"

[network]
listening_address = "0.0.0.0:1339"
rpc_timeout = 10

[[network.bootstraps]]
pubkey = "0x02fa3a27712962a70e3e474363f38661f6a9e56f9cc91efd0d343713d51f3fa355"
address = "localhost:1337" # Replace it with your IP

[graphql]
graphiql_uri = "/graphiql"
listening_address = "0.0.0.0:8002"
graphql_uri = "/graphql"
workers = 0 # if 0, uses number of available logical cpu as threads count.
maxconn = 25000
max_payload_size = 1048576

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

</details>

**For Bill:**

<details>
<summary>(click here to view)</summary>

```
data_path = "./devtools/chain/data/2"
privkey = "0x8e065679aa8b1185406c7514343073cd8c1695218925c9b2d5e98c3483d71d81"

[network]
listening_address = "0.0.0.0:1340"
rpc_timeout = 10

[[network.bootstraps]]
pubkey = "0x02fa3a27712962a70e3e474363f38661f6a9e56f9cc91efd0d343713d51f3fa355"
address = "localhost:1337" # Replace it with your IP

[graphql]
graphiql_uri = "/graphiql"
listening_address = "0.0.0.0:8003"
graphql_uri = "/graphql"
workers = 0 # if 0, uses number of available logical cpu as threads count.
maxconn = 25000
max_payload_size = 1048576

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

</details>

In these case , we name the generated file `config-alice.toml`, `config-bob.toml`, `config-ben.toml`, `config-bill.toml` under `devtools/chain`.

</li>
<li>

## Run this network
You've completed all the necessary prep work and you're now ready to launch your chain. We can see these files in our folder:

```
- devtools
  - chain
    - config-alice.toml
    - config-bob.toml
    - config-ben.toml
    - config-bill.toml
    - genesis.toml
```

### Alice Starts her node  first.

Alice, as the bootstrap node, starts her node firstly by running following command：

```
CONFIG=./devtools/chain/config-alice.toml GENESIS=./devtools/chain/genesis.toml cargo run --example muta-chain --release
```

### Bob, Ben and Bill Join

For Bob, run the following command:

```
CONFIG=./devtools/chain/config-bob.toml GENESIS=./devtools/chain/genesis.toml cargo run --example muta-chain --release
```

For Ben, run the following command:

```
CONFIG=./devtools/chain/config-ben.toml GENESIS=./devtools/chain/genesis.toml cargo run --example muta-chain --release
```

For Bill, run the following command:

```
CONFIG=./devtools/chain/config-bill.toml GENESIS=./devtools/chain/genesis.toml cargo run --example muta-chain --release
```

You should see the console outputs something as follows:

![](/static/img/private-network.png)

Congratulations! You've started your own blockchain!

</li>
</ol>
</Steps>

## Next Step

In this tutorial you've learned to generate your own keypairs, create a genesis block, config your node, and start a multi-node network based on your custom configuration.

Your next step may be: