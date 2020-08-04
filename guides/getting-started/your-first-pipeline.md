---
last_modified_on: "2020-07-13"
title: Hello World. Your First Muta Blockchain.
description: Building your own blockchain with Muta, the "Hello World" of Muta tutorials.
series_position: 1
author_github: https://github.com/yejiayu
tags: ["type: tutorial", "level: easy"]
---

import Step from '@site/src/components/Step';
import Steps from '@site/src/components/Steps';
import Tabs from '@theme/Tabs';
import TabItem from '@theme/TabItem';
import Alert from '@site/src/components/Alert';
import Jump from '@site/src/components/Jump';

In this tutorial, we will launch a Muta chain with default configuration, and interact with it using tools. We will not be going into depth about the intricacies of developing on Muta, but will hopefully satisfy your curiosity so that you will continue this journey.

## Prerequisites

<Step headingDepth={3}>
<ol>
<li>

### Install required dependencies

<Tabs
  block={true}
  defaultValue="macOS"
  values={[
    { label: 'macOS', value: 'macOS', },
    { label: 'ubuntu', value: 'ubuntu', },
    { label: 'centos7', value: 'centos7', },
    { label: 'archlinux', value: 'archlinux', },
  ]
}>
<TabItem value="macOS">  

```
$ brew install autoconf libtool
```

</TabItem>
<TabItem value="ubuntu">

```
$ apt update
$ apt install -y git curl openssl cmake pkg-config libssl-dev gcc build-essential clang libclang-dev
```

</TabItem>
<TabItem value="centos7">

```
$ yum install -y centos-release-scl
$ yum install -y git make gcc-c++ openssl-devel llvm-toolset-7

# 打开 llvm 支持
$ scl enable llvm-toolset-7 bash
```

</TabItem>
<TabItem value="archlinux">

```
$ pacman -Sy --noconfirm git gcc pkgconf clang make
```

</TabItem>
</Tabs>

</li>
<li>

### Install Rust 

Muta uses the Rust programming language. If you’re running macOS, Linux, or another Unix-like OS, we suggest you to install Rust using `rustup`:

```
curl https://sh.rustup.rs -sSf | sh
```

</li>
</ol>
</Step>

Once the prerequisites are installed, you can start to build your Muta Chain.

## Compiling Muta

Firstly, you need to compile the source code.

<Step headingDepth={3}>
<ol>
<li>

### Clone the source code

   ```
   git clone https://github.com/nervosnetwork/muta.git
   ```

</li>
<li>

### Compile the source code
 
   ```
   cd muta 
   cargo build --release --example muta-chain
   ```

<Alert type="info">

Hey, bro, this final compilation can take up to 30 minutes depending on your hardware. Why don't use this time to glance through the [key concept in Muta]().

</Alert>

</li>
</ol>
</Step>

## Configuration

After compiling Muta succeed, before runnning the node, you can custome the blockchain parameters (`genesis.toml` and `config.toml`) which effect the entire chain and network. More information can be found in Configuration guide.

<Jump to="/docs/setup/config/">View Configuration Guide</Jump>

In this case, we’ll leave these parameters on their default settings.

## Deployment

How to deploy your chain really depends on your production need. We provide a guide to show you how to deploy multi-node network.

<Jump to="/docs/setup/deploy/">View Deployment Guide</Jump>

In here, we will show you how to run a single node on localhost.

## Starting your chain

Now that your node has finished all the above work, run the following command to start your local node:

```
cd muta
./target/release/examples/muta-chain
```

Your should see something like this if your node is running successfully:

```log

[2020-06-29T15:59:36.263061+08:00 INFO overlord::timer] Overlord: timer set Precommit event height 151, round 0, block hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c", lock round Some(0) timer
[2020-06-29T15:59:36.263095+08:00 INFO overlord::state::process] Overlord: state receive Precommit vote event height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"
[2020-06-29T15:59:36.266089+08:00 INFO overlord::state::process] Overlord: state round 0, Precommit vote pool length 1
[2020-06-29T15:59:36.266148+08:00 INFO overlord::state::process] Overlord: state aggregate signatures height 151, round 0, voters ["f8389d774afdad8755ef8e629e5a154fddc6325a"]
[2020-06-29T15:59:36.266288+08:00 INFO overlord::state::process] Overlord: state broadcast a Precommit QC, height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"
[2020-06-29T15:59:36.266409+08:00 INFO overlord::state::process] Overlord: state trigger SMR Precommit QC height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"
[2020-06-29T15:59:36.266510+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by precommit QC hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c" qc round 0 from State, height 151, round 0
[2020-06-29T15:59:36.266577+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw Commit event hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c" event
[2020-06-29T15:59:36.266666+08:00 INFO overlord::state::process] Overlord: state receive commit event height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"
[2020-06-29T15:59:36.267090+08:00 INFO core_consensus::engine] [consensus]: validator of height 152 is [bls public key "04188ef9", address "0xf8389d774afdad8755ef8e629e5a154fddc6325a", propose weight 1, vote weight 1]
[2020-06-29T15:59:36.267354+08:00 INFO core_mempool] [core_mempool]: flush mempool with 0 tx_hashes
[2020-06-29T15:59:36.267737+08:00 INFO core_consensus::adapter] [consensus-adapter]: exec transactions cost 762.582µs transactions len 0
[2020-06-29T15:59:36.267854+08:00 INFO overlord::state::process] Overlord: achieve consensus in height 151, costs 1 round 14.371511ms time
[2020-06-29T15:59:36.267885+08:00 INFO core_consensus::adapter] [consensus-adapter]: save receipts cost 56.179µs receipts len 0
[2020-06-29T15:59:36.267955+08:00 INFO core_consensus::status] update_by_executed: info exec height 151, cycles used 0, state root 0xdd0b5a5e75cca4143baec4be1b7d22906e62538da760e1f22655c1d0006903b7, receipt root 0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421, confirm root 0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421
[2020-06-29T15:59:36.268010+08:00 INFO core_consensus::status] update_by_executed: current status latest_committed_height 151, exec height 150, current_hash 0x94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c, latest_committed_state_root 0xdd0b5a5e75cca4143baec4be1b7d22906e62538da760e1f22655c1d0006903b7 list state root [], list receipt root [], list confirm root [], list cycle used []
[2020-06-29T15:59:39.254042+08:00 INFO overlord::state::process] Overlord: state goto new height 152
[2020-06-29T15:59:39.254798+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by new height 152
[2020-06-29T15:59:39.255410+08:00 INFO overlord::smr::state_machine] Overlord: SMR goto new height: 152
[2020-06-29T15:59:39.255838+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw New round 0 event, lock round None, lock proposal None event
[2020-06-29T15:59:39.255987+08:00 INFO overlord::timer] Overlord: timer set New round 0 event, lock round None, lock proposal None timer
[2020-06-29T15:59:39.256148+08:00 INFO overlord::state::process] Overlord: state goto new round 0
[2020-06-29T15:59:39.256357+08:00 INFO overlord::state::process] Overlord: state self become leader, height 152, round 0
[2020-06-29T15:59:39.256489+08:00 INFO core_mempool] [core_mempool]: 0 txs in map and 0 txs in queue while package
[2020-06-29T15:59:39.256693+08:00 INFO overlord::state::process] Overlord: state broadcast a signed proposal height 152, round 0, hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763" and trigger SMR
[2020-06-29T15:59:39.259548+08:00 INFO core_consensus::engine] [consensus-engine]: check block cost 742ns
[2020-06-29T15:59:39.259607+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by a proposal hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763", from State, height 152, round 0
[2020-06-29T15:59:39.259638+08:00 INFO core_consensus::engine] [consensus-engine]: get txs cost 9.017µs
[2020-06-29T15:59:39.259690+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw Prevote event height 152, round 0, block hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763", lock round None event
[2020-06-29T15:59:39.259800+08:00 INFO overlord::timer] Overlord: timer set Prevote event height 152, round 0, block hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763", lock round None timer
[2020-06-29T15:59:39.259899+08:00 INFO overlord::state::process] Overlord: state receive Prevote vote event height 152, round 0, hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763"
[2020-06-29T15:59:39.260005+08:00 INFO core_consensus::engine] [consensus-engine]: write wal cost 268.058µs order_hashes_len 0
```
If the number after `height` is increasing, your blockchain is producing new blocks and reaching consensus about the state they describe!

## Interacting with your chain

You can use GraphiQL or Muta-cli to interact with your chain.

### Using GraphiQL

By default, the chain exposes the GraphQL interface on port 8000 for users to interact with the chain. Open http://127.0.0.1:8000/graphiql, and you will see:

![](./static/graphiql.png)

Enter the GraphQL statement on the left and click the execute button in the middle to see the execution result on the right. Click Docs on the right to view the interface documentation. For more GraphQL usage, please refer to [Official Document](https://graphql.org/).

### Using muta-cli

Muta-cli is an command line tool used to interacting with Muta.

<Steps headingDepth={3}>
<ol>
<li>

#### Install muta-cli firstly

```
$ npm install -g muta-cli@0.2.0-dev.2
```

</li>
<li>

#### Enter interactive mode and query the blockheight and blockheader

```
$ muta-cli repl
> await client.getLatestBlockHeight()
2081
> await client.getBlock('0x1'){
  header: {
    chainId: '0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036',
    confirmRoot: [],
    cyclesUsed: [],
    execHeight: '0x0000000000000000',
    height: '0x0000000000000001',
    orderRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
    orderSignedTransactionsHash: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
    prevHash: '0xeef97d023ef645af469ae67be3e308bd23ebff305fc79ed972941db2f5318e52',
    proof: {
      bitmap: '0x',
      blockHash: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',
      height: '0x0000000000000000',
      round: '0x0000000000000000',
      signature: '0x'
    },
    proposer: '0xf8389d774afdad8755ef8e629e5a154fddc6325a',
    receiptRoot: [],
    stateRoot: '0xf72a09eb2e79c3c5195401a3efc61c8d0a195f9a00b8579495b29cbfa054382a',
    timestamp: '0x0000017352d8b65a',
    validatorVersion: '0x0000000000000000',
    validators: [ [Object] ]
  },
  orderedTxHashes: [],
  hash: '0x43e1dfe5d78ee5b74b1c321f80ebee3c9c424d4354f12035276cc40aa8452315'
}
```

</li>
<li>

#### Issue an asset

```
$ muta-cli repl
> const MT = await as.write.create_asset({name: 'Muta Token', supply: 1000000000, symbol: 'MT'})
{
  txHash: '0x78f05d81d56b5ebc8e3b3e4b76dd0928e963d5c0e53c14003ef135ef3b63b33a',
  height: '0x0000000000000738',
  cyclesUsed: '0x0000000000005208',
  events: [
    {
      data: '{"id":"0x7d7d6c2445f8938e0dfba6f6c16ac431798908ad02e363c44aa8c8a961840af0","name":"Muta ' +
        'Token","symbol":"MT","supply":1000000000,"issuer":"0x9881aac16b9cc6386bd222bc365be07ee375e842"}',
      service: 'asset'
    }
  ],
  stateRoot: '0x37024b87295d339f9e3763f0f02d5f91e94c602e72cfea9455ed75627eebe979',
  response: {
    serviceName: 'asset',
    method: 'create_asset',
    response: {
      code: '0x0000000000000000',
      errorMessage: '',
      succeedData: [Object]
    }
  }
}
```

</li>
<li>

#### Transfer asset

```
$ muta-cli repl
> const asset_id = MT.response.response.succeedData.id

# 发行者即为发交易的账户地址
> account.address
'0x9d1d1bb11c44500603971a245f55a23f65148eee'

# 查询发行者余额
> await client.queryService({serviceName: 'asset', method: 'get_balance', payload: JSON.stringify({asset_id: asset_id, user: account.address})})
{ 
  isError: false,
  ret: '{"asset_id":"0xe8c2c6606030bc93da018cec5e6400845489b471527d507357b3316ae884a3f3","user":"0x9d1d1bb11c44500603971a245f55a23f65148eee","balance":1000000000}' 
}

# 转账
> const to = accounts[1].address;

> await as.write.transfer({asset_id: asset_id, to, value: 100});
{
  txHash: '0xffa7e55465695b6f50617c4abb472fb55142577dcd9f2069fef02d28b1b7f8f5',
  height: '0x000000000000074f',
  cyclesUsed: '0x0000000000005208',
  events: [
    {
      data: '{"asset_id":"0x7d7d6c2445f8938e0dfba6f6c16ac431798908ad02e363c44aa8c8a961840af0","from":"0x9881aac16b9cc6386bd222bc365be07ee375e842","to":"0x46a31f791466ba6a13ccddf9c180ff2ee5a60564","value":100}',
      service: 'asset'
    }
  ],
  stateRoot: '0x8348541d8e36e07cec6db6e2728f0c185370fbfa309799447286849064590722',
  response: {
    serviceName: 'asset',
    method: 'transfer',
    response: { code: '0x0000000000000000', errorMessage: '', succeedData: {} }
  }
}

# 查看转账结果
> await client.queryService({ serviceName: 'asset', method: 'get_balance', payload: JSON.stringify({asset_id: asset_id, user: account.address})})
{
  code: '0x0000000000000000',
  errorMessage: '',
  succeedData: '{"asset_id":"0x7d7d6c2445f8938e0dfba6f6c16ac431798908ad02e363c44aa8c8a961840af0","user":"0x9881aac16b9cc6386bd222bc365be07ee375e842","balance":999999900}'
}

> await client.queryService({ serviceName: 'asset', method: 'get_balance', payload: JSON.stringify({asset_id: asset_id, user: to})})
{
  code: '0x0000000000000000',
  errorMessage: '',
  succeedData: '{"asset_id":"0x7d7d6c2445f8938e0dfba6f6c16ac431798908ad02e363c44aa8c8a961840af0","user":"0x46a31f791466ba6a13ccddf9c180ff2ee5a60564","balance":100}'
}
```

</li>
</ol>
</Steps>

## Next Step

You have launched a working Muta-based blockchain, and issues a new token on your chain. We hope you'll continue learning about Muta.

Your next step may be:

* Decentralize your network with more nodes in the Start a Private Network tutorial.

<Jump to="/docs/setup/config/">View Deploy a Multi-node Tutorial</Jump>

* Add custom functionality in the Build a dApp tutorial.

<Jump to="/docs/setup/config/">View Service Guide</Jump>

If you experienced any issues with this tutorial or want to provide feedback, feel free to open a GitHub issue or reach out on Discord.