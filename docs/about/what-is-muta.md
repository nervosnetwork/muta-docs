---
title: "What is Muta?"
description: "What is Muta？"
---

Muta is a versatile, high-performance blockchain framework designed to make building blockchains simple and flexible. Blockchain developers can quickly build their own blockchain based on Muta, eliminating the tedious work of building the underlying network and consensus mechanism from scratch and focusing on business functionality.

## Overview

### The basic core component Muta provided

Muta provides all the core components needed to build a distributed blockchain network, including:
 * newly designed consensus algorithm - [**Overlord**][overlord] with high throughput and low latency 
 * fast and stable [**Storage**][storage]
 * modular [**P2P network**][network]
 * and high-performance [**Mempool pool**][mempool]

### Customizable Part

Developers can simply customize the functional parts of the chain by developing [**services**][dev-overview], including governance mechanisms, business logic, and even connecting virtual machines to the blockchain.

[**Service**][dev-overview] is an abstraction layer used to extend the Muta framework, where each Service performs a relatively independent function, maintaining its own storage and operational interfaces, similar to a Small state machine. These services together form the state machine part of the chain and after being connected to the underlying components of the blockchain through the framework interface, a brand new chain exclusive to you is developed!

## Where can Muta be used?

* Muta can be used for both public and federated chains, and developers can develop custom PoA, PoS or DPoS chains based on Muta, and deploy them using different economic and governance models.
* Developers can also develop different app chains (e.g. [DEX chains][dex], payment chains) based on Muta to implement a specific business logic.

## What are the key features of Muta?

### High performance which can meet the demands of the production environment

* **Built-in [Overlord][overlord] Consensus Algorithm**. It introduces aggregated signatures to reduce message complexity, and decouples state sequencing and transaction consensus to achieve parallel consensus and execution, which improves consensus efficiency by leaps and bounds compared with PBFT, Tendermint, Hotstuff, etc. In production test, Overlord has been able to support hundreds of consensus nodes, reaching thousands of transactions per second processing capacity, and the transaction latency is less than a few seconds.

* **Use [Rust][rust] as the programming language**, which emphasizes and upholds the concept of zero-cost abstraction, providing many high-level language features without introducing additional cost and with performance comparable to C++.

* **Asynchronously programming** is widely used in Muta, which brings significant performance improvements.

### Easiest to use

* **Focus only on developing the functionality of the chain**. [Consensus][overlord], [storage][storage], [mempool][mempool] and [network](network) are already built into the framework as foundational modules, so developers only need to develop services to extend the functionality of the chain.

* **Developing a Service is quite easy**. When we originally designed Service, we wanted to lower the development barrier for developers so that more developers who are not as familiar with blockchain can get up to speed quickly and develop their own blockchain. As a result, [developing services][service-dev] is now very similar to develop contracts in terms of experience, so if you're already familiar with how to develop contracts, congratulations, you've also learned how to develop Service.

* **Existing Services can be reused directly**. Muta already provides a number of [services][service-list] with common functionality that can be used directly by developers. For example, the [Asset Service][asset-service] allows developers to create native assets that are safer and more flexible and easier to issue than contract tokens such as ERC20, and the [Risc-V Service][riscv-service] allows developers to add Risc-V virtual machines directly to the chain. More services can be found in the list of services, and the Muta framework will provide many more services with common features in the future.


### Interoperability

* **Muta will also support native cross-chain in the future**, which will not only allow cross-chain communication between different Muta chains, but also allow Muta-based blockchains to communicate with [Nervos CKB][ckb], enjoying the high security and finality provided by the PoW-based layer1 solution. Efficient interoperability of assets and data between the different chains will empower the broader ecosystem.

## Learning Path


<ul class="connected-list">
<li>

### Build your first blockchain, make the initial configuration, and attempt simple interactions
* [Getting Started][getting-started]
* [Configuration][config]
* [Tutorial: Build a multi-node blockchain network][deploy]
* [Tutorial: Benchmark the performance of your chain][benchmark-muta]
* [Tutorial: Visualizing your node using Prometheus and Grafana][monitor]

</li>
<li>

### Customize the functional part of the chain by developing services
* [Service development][service-dev]
* [Service List][service-list]
* [Tutorial: Build a POE blockchain Network][poe-chain]
* [Toturial: Build a DEX chain][dex]

</li>
<li>

### Dive into Muta
* [Architecture][arch]
* [Overlord][overlord]
* [Mempool][mempool]
* [Network][network]
* [Storage][storage]

</li>
<li>

### Toolchain

* [Muta-cli][muta-cli]
* [Muta-sdk-js][sdk-js]
* [Muta-sdk-java][sdk-java]
* [Muta-benchmark][benchmark-tool]

</li>
</ul>

## Contribute ![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

#### Pull Request

- :fork_and_knife:  Fork it!
- :twisted_rightwards_arrows:  Create your branch: `git checkout -b new-branch`
- :wrench:  Make your changes
- :memo:Commit your changes:   `git commit -am 'Add some feature'`
- :rocket:Push to the branch:   `git push origin new-branch`
- :tada:  Submit a pull request

#### Issue

- Submit an [issue][muta-issue]。Any helpful suggestions are welcomed.:stuck_out_tongue_winking_eye:

#### Translation

If you are willing to participate in the translation of the document, please go to the top of the untranslated English document page and click edit on GitHub to find the source file, modify the source file directly, and submit the PR. The steps are the same as the PR step above.

## Join us!

As an entrepreneurial team, we are still recruiting excellent developers :heart:, and we will continue to recruit until the end of the world, front-end, back-end, blockchain development engineers, etc. For more details, please refer to [Job Description][job].

[nervosnetwork]: https://nervos.org
[ckb]: https://github.com/nervosnetwork/ckb
[muta-issue]: https://github.com/nervosnetwork/muta/issues
[job]: https://github.com/zhouyun-zoe/Workflow/issues/3
[rust]: https://www.rust-lang.org/


[concepts]: ../about/concepts.md

[getting-started]: ../setup/getting-started.md
[config]: ../setup/config.md
[genesis-config]: ../setup/genesis-config.md
[node-config]: ../setup/node-config.md
[deploy]: ../deploy/deploy.md

[dev-overview]: ../dev/dev-overview.md
[service-dev]: ../dev/service-dev.md
[poe-chain]: ../dev/poe-chain.md
[dex]: ../dev/dex.md
[service-list]: ../dev/service-list.md

[arch]: ../advanced/arch.md
[overlord]: ../advanced/core/overlord.md
[storage]: ../advanced/core/storage.md
[network]: ../advanced/core/network.md
[mempool]: ../advanced/core/mempool.md
[network]: ../advanced/core/network.md

[sdk-java]: ../toolchain/sdk-java.md
[sdk-js]: ../toolchain/sdk-js.md
[benchmark-tool]: ../toolchain/benchmark-tool
[keypair]: ../toolchain/keypair.md
[muta-cli]: ../toolchain//muta-cli.md

[benchmark-muta]: ../../../guides/getting-started/benchmark
[monitor]: ../../../guides/getting-started/monitor
[muta-cli]: ../../../guides/getting-started/muta-cli


