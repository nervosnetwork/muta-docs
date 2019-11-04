# Getting Started

- [Getting Started](#getting-started)
  - [Install and Run](#install-and-run)
    - [Install Dependencies](#install-dependencies)
      - [MacOS](#macos)
      - [ubuntu](#ubuntu)
      - [centos7](#centos7)
      - [archlinux](#archlinux)
    - [Download Pre-compiled Binary](#download-pre-compiled-binary)
    - [Compile From Source Code](#compile-from-source-code)
      - [Get Source Code](#get-source-code)
      - [Install Rust](#install-rust)
      - [Compile](#compile)
    - [Run Single Node Chain](#run-single-node-chain)
    - [Run Multiple Nodes Chain](#run-multiple-nodes-chain)
  - [Use Docker](#use-docker)
  - [Config Reference](#config-reference)

## Install and Run

This is how you can install muta on your own operating system. If you want to try muta via docker quickly, you can check [use docker](#use-docker) first.

### Install Dependencies

#### MacOS

```
brew install autoconf libtool
```

#### ubuntu

```
apt update
apt install -y git curl openssl cmake pkg-config libssl-dev gcc build-essential clang libclang-dev
```

#### centos7

```
yum install -y centos-release-scl
yum install -y git make gcc-c++ openssl-devel llvm-toolset-7

# enable llvm
scl enable llvm-toolset-7 bash
```

#### archlinux

```
pacman -Sy --noconfirm git gcc pkgconf clang make
```

### Download Pre-compiled Binary
 
We will publish the binary files for some common operating system on [github releases](https://github.com/nervosnetwork/muta/releases). 
If your system is in the list, you can download the file directly.
 
### Compile From Source Code

#### Get Source Code

Get source code via git:

```
git clone https://github.com/nervosnetwork/muta.git
```

Or download the source package on [github releases](https://github.com/nervosnetwork/muta/releases).

#### Install Rust

reference： <https://www.rust-lang.org/tools/install>

```
curl --proto '=https' --tlsv1.2 -sSf https://sh.rustup.rs | sh
```

#### Compile

```
cd /path/to/muta
make prod
```

The compiled binary path is `target/release/muta-chain`.

### Run Single Node Chain

```
cd /path/to/muta

# run muta with default config
# if you downloaded the binary instead of compiling it yourself, you should change the path to your binary path
./target/release/muta-chain

# print help information
$ ./target/release/muta-chain  -h
Muta v0.1.0
Muta Dev <muta@nervos.org>

USAGE:
    muta-chain [OPTIONS]

FLAGS:
    -h, --help       Prints help information
    -V, --version    Prints version information

OPTIONS:
    -c, --config <FILE>     a required file for the configuration [default: ./devtools/chain/config.toml]
    -g, --genesis <FILE>    a required file for the genesis json [default: ./devtools/chain/genesis.json]
```

### Run Multiple Nodes Chain

1. Modify the `config.toml` according to your network topology. Pay attention to the `privkey`, `network` and `verifier_list` part. You can refer the docker-compose config or read the config reference below.
2. Release your binary file, config.toml and genesis.json to you node machines.
3. Start the bootstrap nodes.
4. Start the other nodes.

## Use Docker

```
docker run -it --init -p 8000:8000 nervos/muta

# if you want to keep the chain data, you can mount the data diretory to the host machine
docker run -it --init -p 8000:8000 -v `pwd`/data:/app/devtools/chain/data nervos/muta
```
 
Visit [graphiql](http://localhost:8000/graphiql) to interact with your chain!

 
Use docker compose to run multiple nodes chain:

```
docker-compose -f devtools/docker/dockercompose/docker-compose-bft.yaml up
```

This config start 4 nodes, and the chain data path is `target/data/bft1` ~ `target/data/bft4`.
You can check `docker-compose-bft.yaml` for more details.
 
## Config Reference

The default config sample is located at `./devtools/chain/config.toml`.
There are some comments below.

```toml
# Chain id, the unique identifier of the chain. This field of all nodes of a chain should be the same.
chain_id = "b6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036"  # by sha256(Muta)

# The private key of the node. 
# When connected as the bootstrap node, the public key which the connecting node uses should match this private key.
# When used as validator, the address of this private key should be in the verifier_list.
privkey = "45c56be699dca666191ad3446897e0f480da234da896270202514a0e1a587c3f"

# Where the chain data locates.
data_path = "./devtools/chain/data"

[graphql]
# graphql listen address
listening_address = "0.0.0.0:8000"
# graphql path
graphql_uri = "/graphql"
# graphiql path
graphiql_uri = "/graphiql"

[network]
# p2p listen address
listening_address = "0.0.0.0:1337"

[[network.bootstraps]]
pubkey = "031288a6788678c25952eba8693b2f278f66e2187004b64ac09416d07f83f96d5b"
address = "0.0.0.0:1888"

[mempool]
# The max timeout gap. If current_epoch_id + timeout_gap > timeout field in transaction, the memory pool will reject this transaction.
timeout_gap = 20
# Memory pool size. When the memory pool is full, new transactions will be rejected.
pool_size = 20000
# To increase the performance of memory pool, we broadcast transactions in batches of this number.
broadcast_txs_size = 200
# Max transaction broadcast interval. Even if there are no transactions more than broadcast_txs_size, they will be broadcasted after this interval.
# The unit is ms.
broadcast_txs_interval = 200

[consensus]
cycles_limit = 99999999
cycles_price = 1
# block interval, the unit is ms.
interval = 3000
# verifier address list
verifier_list = [ "10f8389d774afdad8755ef8e629e5a154fddc6325a" ]

[consensus.duration]
# The numerator of the proportion of propose timeout to the epoch interval.
propose_numerator = 24
# The denominator of the proportion of propose timeout to the epoch interval.
propose_denominator = 30
# The numerator of the proportion of prevote timeout to the epoch interval.
prevote_numerator = 6
# The denominator of the proportion of prevote timeout to the epoch interval.
prevote_denominator = 30
# The numerator of the proportion of precommit timeout to the epoch interval.
precommit_numerator = 6
# The denominator of the proportion of precommit timeout to the epoch interval.
precommit_denominator = 30

[executor]
# When set to true, the node will only keep the latest world state.
light = false
```