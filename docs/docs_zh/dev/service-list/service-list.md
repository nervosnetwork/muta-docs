---
title: Service 列表
---

在本文档里，将列举一些已实现的 Service 示例。包括：

### Muta 官方提供的四个 Built-in Service

* [Metadata Service](https://github.com/nervosnetwork/muta/tree/master/built-in-services/metadata)：支持链的运营方在起链前对链的相关信息进行配置。
* [Asset Service](https://github.com/nervosnetwork/muta/tree/master/built-in-services/asset)：支持用户发行自定义资产，支持转账，查询等操作。
* [Authorization Service](https://github.com/nervosnetwork/muta/tree/master/built-in-services/authorization)：支持第三方逻辑接入mempool，扩展验证交易的功能。
* [MultiSignature Service](https://github.com/nervosnetwork/muta/tree/master/built-in-services/multi-signature)：支持多签。

### Huobichain 特有的四个 Service

Huobichain Service 也都已在 GitHub 开源，参考时请遵循 Huobichain 的开源协议。

* [RISC-V Service](https://github.com/HuobiGroup/huobi-chain/tree/master/services/riscv)：支持用户用 c 语言进行合约的开发。
* [Governance Service](https://github.com/HuobiGroup/huobi-chain/tree/master/services/governance)：支持动态添加、删除节点，以及一些专有的业务逻辑。
* [AdmissionControl Service](https://github.com/HuobiGroup/huobi-chain/tree/master/services/admission_control)：一个接入authorization的实现，提供了一些额外的校验逻辑。
* [kyc Service](https://github.com/HuobiGroup/huobi-chain/tree/master/services/kyc)：一个简单的KYC服务。

### 在该列表添加你的 Service 

更多的 Service 还在继续开发中，您基于 Muta 搭建的区块链开发了哪些 Service？

如果您想要把您开发的 Service 添加到该文档中供其他人参考，点击该文档右侧的 `Edit Document`， 通过提交 Pull Request 来添加相关信息，期待~
