---
title: Muta 介绍
description: "What is Muta？"
---

Muta 是一个通用的高性能区块链框架，旨在让搭建区块链变得简单和灵活。区块链开发者可以基于 Muta 快速搭建自己的区块链，免去从零构建底层网络、共识机制的繁琐工作，仅需专注于业务功能的开发。

Muta 框架提供了搭建一个分布式区块链网络所需的全部核心组件，包括全新设计的具有高吞吐量和低延迟特性的类 BFT 共识算法「Overlord」、快速稳定的存储、模块化的P2P网络和高性能的交易池等。开发者只需通过开发 Service 来定制链的功能部分，包括治理机制、业务逻辑、甚至是将虚拟机接入区块链。Service 是 Muta 框架中用于扩展的抽象层，每个 Service 完成一个相对独立的功能，单独维护自己的存储和操作接口，类似一个运行在沙盒里的小型状态机，这些 Service 共同组成了链的状态机部分，通过框架接口将状态机接入区块链底层组件，一条专属你的全新链就开发完成了！

## Muta 的适用场景

* Muta 同时适用于公有链和联盟链，开发者可以基于 Muta 定制开发 PoA、PoS 或者 DPoS 链，并且可以使用不同的经济模型和治理模型进行部署。
* 开发者也可以基于 Muta 来开发不同的应用链（例如 DEX 链，支付链），以实现某种特定的业务逻辑。

## 为什么选择 Muta

### 可满足生产环境需求的高性能

* **内置 Overlord 共识算法**。作为新一代 BFT 共识算法，Overlord 由 muta 团队设计并研发，引入了聚合签名降低了消息复杂度，并且解耦状态定序与交易共识，实现了共识和执行的并行，共识效率相比于 PBFT、Tendermint，Hotstuff 等有了跨越性提升。Overlord 代码已在GitHub 开源，目前实测已经能够支持上百个共识节点，满足数千笔每秒的交易处理能力，而且交易延迟不超过数秒，交易上链即不可回滚，这将区块链技术进一步迈向更真实的业务场景提供了有效支撑，即使是最为复杂的金融场景。

* **编程语言采用了 Rust**。Rust 语言强调并秉持零开销抽象的理念，在提供诸多高级语言特性的同时，没有引入额外的开销，性能可以媲美 C++。

* **同时 Muta 核心组件均采用了异步编程来实现**，性能进一步得到大幅度提升。

### 最简单易用的区块链框架

* **仅需专注链的功能开发**。框架已经内置有共识、执行、存储、交易池、网络这些基础模块，开发者仅需要开发 Service 来扩展链的功能。
* **Service 的开发门槛很低**。最初在设计 Service 时，我们就希望降低开发者的开发门槛，让更多对区块链不那么熟悉的开发者也可以快速上手，开发自己的区块链。因此，目前 Service 的开发体验上与开发合约的体验是很相似的，所以说如果你已经熟悉如何开发合约，那么恭喜你，你也已经学会了如何开发 Service。
* **已有的 Service 可以直接拿来复用**。目前 Muta 已经提供了许多常见功能的模块（Service），开发者可以直接使用。例如 Asset Service 可以帮助开发者直接创建原生资产，相比于ERC20 等合约代币更安全，发行也更灵活和便捷。Risc-V Service 可以直接给链添加 Risc-V 虚拟机。更多 Service 可以查看 Service 列表，未来 Muta 框架会提供许多常见功能的 Service。

### 互操作性

* **Muta 在未来也将支持原生的跨链模块**，通过该模块，不仅可以让不同的 Muta 链之间可以跨链，还可以让基于 Muta 开发的区块链可以和 Nervos CKB 实现跨链，享受到基于 PoW 的 CKB 底层所提供的高安全性和最终性。不同链之间资产和数据的高效互通将赋能更广阔的生态。

## 学习路径


<ul class="connected-list">
<li>

### 搭建一条可用的区块链，进行初始的配置，并尝试简单的交互
* [快速开始][getting-started]
* [配置说明][config]
* [部署说明][deploy]
* [Tutorial: 压测链的性能][benchmark-muta]
* [Tutorial: 监控链的运行情况][monitor]

</li>
<li>

### 通过开发 Service 来定制链的功能部分
* [Service 开发指南][service-dev]
* [Service 列表][service-list]
* [Tutorial: 开发一条存证链][poe-chain]
* [Toturial: 开发一个去中心化交易所][dex]

</li>
<li>

### 深入了解 Muta 的模块设计
* [架构设计][arch]
* [Overlord 共识算法][overlord]
* [交易池][mempool]
* [网络][network]
* [存储][storage]

</li>
<li>

### Muta 生态中的工具组件

* [Muta-cli][muta-cli]
* [Muta-sdk-js][sdk-js]
* [Muta-sdk-java][sdk-java]
* [Muta-benchmark][benchmark-tool]

</li>
</ul>

## 贡献 ![PRs](https://img.shields.io/badge/PRs-welcome-brightgreen.svg)

#### 提交 PR

- :fork_and_knife:  Fork 这个项目并 clone 到本地
- :twisted_rightwards_arrows:  新建一个分支: `git checkout -b new-branch`
- :wrench:  增加新特性或者解决一些 bug
- :memo:提交你的修改:   `git commit -am 'Add some feature'`
- :rocket:推送你的分支:   `git push origin new-branch`
- :tada:  提交 Pull Request

#### 提交 Issue

- 点击 [issue](https://github.com/nervosnetwork/muta/issues)。欢迎任何有帮助性的建议:stuck_out_tongue_winking_eye:

#### 翻译文档

如果愿意参与翻译文档，请到未翻译的英文文档页面上方点击 edit on GitHub 可以找到源文件，直接修改源文件，并且提 PR，步骤同上面的 PR 步骤。

## 加入我们!

作为一个创业团队，我们还在不断招募优秀的开发者 :heart:，并且在世界末日到来之前我们会一直招募，前端、后端、区块链开发工程师等等！详情参考[工作描述](https://github.com/zhouyun-zoe/Workflow/issues/3)。

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
[muta-cli]: ../toolchain/muta-cli.md

[benchmark-muta]: ../../../guides/getting-started/benchmark
[monitor]: ../../../guides/getting-started/monitor
