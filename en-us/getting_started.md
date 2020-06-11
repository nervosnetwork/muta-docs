# Muta Quick Start

<details>
  <summary><strong>Table of Contents</strong></summary>

- [Muta Quick Start](#muta-%e5%85%a5%e9%97%a8)
  - [Installation and run](#%e5%ae%89%e8%a3%85%e5%92%8c%e8%bf%90%e8%a1%8c)
    - [Install dependency](#%e5%ae%89%e8%a3%85%e4%be%9d%e8%b5%96)
      - [MacOS](#macos)
      - [ubuntu](#ubuntu)
      - [centos7](#centos7)
      - [archlinux](#archlinux)
    - [Download pre-compiled binary file](#%e7%9b%b4%e6%8e%a5%e4%b8%8b%e8%bd%bd%e9%a2%84%e7%bc%96%e8%af%91%e7%9a%84%e4%ba%8c%e8%bf%9b%e5%88%b6%e6%96%87%e4%bb%b6)
    - [Compile from source](#%e4%bb%8e%e6%ba%90%e7%a0%81%e7%bc%96%e8%af%91)
      - [Get the source code](#%e8%8e%b7%e5%8f%96%e6%ba%90%e7%a0%81)
      - [Install RUST](#%e5%ae%89%e8%a3%85-rust)
      - [Compile](#%e7%bc%96%e8%af%91)
    - [Run a single node](#%e8%bf%90%e8%a1%8c%e5%8d%95%e8%8a%82%e7%82%b9)
  - [Interact with the blockchain](#%e4%b8%8e%e9%93%be%e8%bf%9b%e8%a1%8c%e4%ba%a4%e4%ba%92)
    - [Use GraphiQL to interact with the blockchain](#%e4%bd%bf%e7%94%a8-graphiql-%e4%b8%8e%e9%93%be%e8%bf%9b%e8%a1%8c%e4%ba%a4%e4%ba%92)
    - [Use muta-cli to interact with the blockchain](#%e4%bd%bf%e7%94%a8-muta-cli-%e4%b8%8e%e9%93%be%e8%bf%9b%e8%a1%8c%e4%ba%a4%e4%ba%92)
  - [How to use it](#%e4%bd%bf%e7%94%a8%e7%a4%ba%e4%be%8b)
  - [Deploy multi-node blockchain locally with docker](#%e4%bd%bf%e7%94%a8-docker-%e6%9c%ac%e5%9c%b0%e9%83%a8%e7%bd%b2%e5%a4%9a%e8%8a%82%e7%82%b9%e9%93%be)

  </details>

## Installation and run

### Install dependency

<!-- tabs:start -->

#### **MacOS**

```
$ brew install autoconf libtool
```

#### **ubuntu**

```
$ apt update
$ apt install -y git curl openssl cmake pkg-config libssl-dev gcc build-essential clang libclang-dev
```

#### **centos7**

```
$ yum install -y centos-release-scl
$ yum install -y git make gcc-c++ openssl-devel llvm-toolset-7

# Turn on llvm support
$ scl enable llvm-toolset-7 bash
```

#### **archlinux**

```
$ pacman -Sy --noconfirm git gcc pkgconf clang make
```

<!-- tabs:end -->

### Download pre-compiled binary file

We use [github releases](https://github.com/nervosnetwork/muta/releases) to publish pre-compiled binary files for common OS, feel free to check it out to see if your OS is already there.

### Compile from source

#### Get the source code

Download it with git：

```
$ git clone https://github.com/nervosnetwork/muta.git
```

You can also go to [github releases](https://github.com/nervosnetwork/muta/releases) to download compressed source code and decompress yourself.

#### Install RUST

On Unix like systems, run `curl https://sh.rustup.rs -sSf | sh` ; on Windows, download and run [rustup-init.exe](https://static.rust-lang.org/rustup/dist/i686-pc-windows-gnu/rustup-init.exe).

#### Compile

```
$ cd /path/to/muta
$ cargo build --release --example muta-chain
```

Binaries after compilation is located at `target/release/examples/muta-chain`.

### Run a single node 

```
$ cd /path/to/muta

# Run muta by default configuration
# If you download binary, please replace path in below accordingly
$ ./target/release/examples/muta-chain
```

## Interact with the blockchain

Blockchain exposes GraphQL interface at port 8000 by default for users to interact with it.

### Use GraphiQL to interact with the blockchain

Go to <http://127.0.0.1:8000/graphiql> and you are expected to see below:

![](./static/graphiql.png)

Enter GraphQL query on the left, click execute in the middle, you should see the outcome on the right.

Click Docs on the right to find instructions on graphQL interface. More GraphQL documents at [official doc](https://graphql.org/)。

### Use muta-cli to interact with the blockchain

We build an interactive commend line using [muta-sdk](./js_sdk) and nodejs so you can interact with muta easily.

```bash
$ npm install -g muta-cli

$ muta-cli repl
> await client.getLatestBlockHeight()
2081
> await client.getBlock('0x1')
{
  header: {
    chainId: '0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036',
    confirmRoot: [],
    cyclesUsed: [],
    height: '0000000000000001',
    execHeight: '0000000000000000',
    orderRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
    preHash: '0x12471b0157af0cc1869361160e651cd6670614fea7fc6834d79bb2699555a0a9',
    proposer: '0xf8389d774afdad8755ef8e629e5a154fddc6325a',
    receiptRoot: [],
    stateRoot: '0xf6ec46b4b663a73a3786c27b75d595f9d8e879964faf340c702d078c4d457875',
    timestamp: '000000005e5a06f5',
    validatorVersion: '0000000000000000',
    proof: {
      bitmap: '',
      blockHash: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
      height: '0000000000000000',
      round: '0000000000000000',
      signature: ''
    },
    validators: [ [Object] ]
  },
  orderedTxHashes: [],
  hash: '0x9c77d286a1b4c77f45c910b73996f1ca66bc55e046917864b7652aa31e686ac2'
}
```

This REPL is encapsulated based on node.js, technically you can use any statement that follow node.js syntax.

Some environment variables to make development easier:
- `muta_sdk`: which is muta-sdk library, you can refer to [muta-sdk 文档](https://nervosnetwork.github.io/muta-sdk-js/) for more usage.
- `muta`: instance of muta blockchain
- `client`: GraphQL client to call on the chain
- `wallet`: wallet inferred by the seed phrase (randomly generated by default)
- `accounts`: 20 accounts inferred by the wallet

## How to use it

Use muta-cli to interact with the chain for some common operations.

```bash
$ muta-cli repl
# basic operations with the chain
> await client.getLatestBlockHeight()
2081

> client.getBlock('0x1')
{
  header: {
    chainId: '0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036',
    confirmRoot: [],
    cyclesUsed: [],
    height: '0000000000000001',
    execHeight: '0000000000000000',
    orderRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
    preHash: '0x12471b0157af0cc1869361160e651cd6670614fea7fc6834d79bb2699555a0a9',
    proposer: '0xf8389d774afdad8755ef8e629e5a154fddc6325a',
    receiptRoot: [],
    stateRoot: '0xf6ec46b4b663a73a3786c27b75d595f9d8e879964faf340c702d078c4d457875',
    timestamp: '000000005e5a06f5',
    validatorVersion: '0000000000000000',
    proof: {
      bitmap: '',
      blockHash: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
      height: '0000000000000000',
      round: '0000000000000000',
      signature: ''
    },
    validators: [ [Object] ]
  },
  orderedTxHashes: [],
  hash: '0x9c77d286a1b4c77f45c910b73996f1ca66bc55e046917864b7652aa31e686ac2'
}

# asset service operation
> const account = accounts[0]

> const service = new muta_sdk.AssetService(client, account)

# Issue a new asset
> MT = await service.create_asset({name: 'Muta Token', supply: 1000000000, symbol: 'MT'})
{
  txHash: '0x8510b5da8c54fb7d5b3de83b13a65188e55102a830a1653ab6c839f3fe326530',
  height: '0000000000000026',
  cyclesUsed: '0000000000005208',
  events: [
    {
      data: '{"id":"0xfdd1609dfa84a04bc2074d9a8a6a4fab13ada36c2cb9570810f997b44d5b8074","name":"Muta Token","symbol":"MT","supply":1000000000,"issuer":"0x45f74b60a96160352267f2e4fcdcb92ddea304b1"}',
      service: 'asset'
    }
  ],
  stateRoot: '0x51e2ad9e08aea6cd34f2c170c79b5eca46485bfe8d95f39e73dc2c709a7b6209',
  response: {
    serviceName: 'asset',
    method: 'create_asset',
    ret: {
      id: '0xfdd1609dfa84a04bc2074d9a8a6a4fab13ada36c2cb9570810f997b44d5b8074',
      name: 'Muta Token',
      symbol: 'MT',
      supply: 1000000000,
      issuer: '0x45f74b60a96160352267f2e4fcdcb92ddea304b1'
    },
    isError: false
  }
}

> asset_id = MT.response.ret.id

# Issuer of the asset is the sender of the transaction 
> account.address
'0x9d1d1bb11c44500603971a245f55a23f65148eee'

# Query issuer balance
> await client.queryService({serviceName: 'asset', method: 'get_balance', payload: JSON.stringify({asset_id: asset_id, user: account.address})})
{ 
  isError: false,
  ret: '{"asset_id":"0xe8c2c6606030bc93da018cec5e6400845489b471527d507357b3316ae884a3f3","user":"0x9d1d1bb11c44500603971a245f55a23f65148eee","balance":1000000000}' 
}

# Transfer
> const to = accounts[1].address;

> await service.transfer({asset_id: asset_id, to, value: 100});
{
  txHash: '0xfb595feb517dc5d5f8fb23b75f382e67b76fae028d1fd0d72030a20985ac5586',
  height: '0x000000000000010d',
  cyclesUsed: '0x0000000000005208',
  events: [
    {
      data: '{"asset_id":"0x5d83b24f012f1e5c1619dc3224de580989f3f518797fdf2845448a85aa06fecd","from":"0xbc4a5e33118de98ffddb6bc192d91a18dafbef22","to":"0x75c64d4b7373e28fbf4e13a81f5c7b309c2f35d6","value":100}',
      service: 'asset'
    }
  ],
  stateRoot: '0x83ac204808f0aa3b93d4061b8e27ca75c2e71791fd716378e162c0fb97f1fc1b',
  response: { serviceName: 'asset', method: 'transfer', ret: '', isError: false }
}

# View transfer outcome
> await client.queryService({ serviceName: 'asset', method: 'get_balance', payload: JSON.stringify({asset_id: asset_id, user: account.address})})
{ 
  isError: false,
  ret: '{"asset_id":"0xe8c2c6606030bc93da018cec5e6400845489b471527d507357b3316ae884a3f3","user":"0x9d1d1bb11c44500603971a245f55a23f65148eee","balance":999999900}' 
}

> await client.queryService({ serviceName: 'asset', method: 'get_balance', payload: JSON.stringify({asset_id: asset_id, user: to})})
{ 
  isError: false,
  ret: '{"asset_id":"0xe8c2c6606030bc93da018cec5e6400845489b471527d507357b3316ae884a3f3","user":"0x9b13a4625e63b0c475c4a6f5dabb761d1c315f2b","balance":100}' 
}

# On chain management
> admin = muta_sdk.Muta.account.fromPrivateKey('0x2b672bb959fa7a852d7259b129b65aee9c83b39f427d6f7bded1f58c4c9310c2')

> admin.address
'0xcff1002107105460941f797828f468667aa1a2db'

> metadata_raw = await client.queryService({serviceName: 'metadata', method: 'get_metadata', payload: ''})
{
  chain_id: '0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036',
  common_ref: '0x703873635a6b51513451',
  timeout_gap: 20,
  cycles_limit: 1000000,
  cycles_price: 1,
  interval: 3000,
  verifier_list: [
    {
      bls_pub_key: '0x04188ef9488c19458a963cc57b567adde7db8f8b6bec392d5cb7b67b0abc1ed6cd966edc451f6ac2ef38079460eb965e890d1f576e4039a20467820237cda753f07a8b8febae1ec052190973a1bcf00690ea8fc0168b3fbbccd1c4e402eda5ef22',
      address: '0xf8389d774afdad8755ef8e629e5a154fddc6325a',
      propose_weight: 1,
      vote_weight: 1
    }
  ],
  propose_ratio: 15,
  prevote_ratio: 10,
  precommit_ratio: 10,
  brake_ratio: 7,
  tx_num_limit: 20000,
  max_tx_size: 1024
}
```

## Deploy multi-node blockchain locally with docker

You need to install [docker](https://www.docker.com/) first.

1. Build docker images

```bash
cd /path/to/muta

make docker-build
```

2. Run docker compose to spin up the chain

```bash
docker compose -f devtools/docker/dockercompose/bft-4-node.yaml up
```

Docker compose starts 4 consensus nodes, expose GraphQL local port 8001, 8002, 8003 and 8004. You can check node configuration at `devtools/docker/dockercompose`.
