---
title: 开发概览
---

import Step from '@site/src/components/Step';
import Jump from '@site/src/components/Jump';

在该章节，我们将为你详细介绍如何通过开发 Service 对链的功能进行定制。Service 是 Muta 框架中用于扩展的抽象层，每个 Service 完成一个相对独立的功能，单独维护自己的存储和操作接口，类似一个运行在沙盒里的小型状态机，这些 Service 共同组成了链的状态机部分，通过框架接口将状态机接入区块链底层组件，一条专属你的全新链就开发完成了！

## 学习路径

<Step headingDepth={3}>
<ol>
<li>

### 阅读 Service 开发指南
   
该文档主要介绍了 Service 的组成和开发指南

<Jump to="../service-dev/">View Service Dev Guide</Jump>

</li>
<li>

### 参考目前已有的 Service，进一步学习如何开发 Service

我们提供了许多通用的 Service 可供参考和使用，涉及治理，资产，多签等等。

<Jump to="../../dev/service-list/">View Service List</Jump>

</li>
<li>

### 尝试开发一个简单 attestation（存证）Service，搭建一条存证链

在该教程中，我们将带你从头开发一个简单的存证 Service，并且接入 Muta，进而搭建一条存证链。

<Jump to="../poe-chain/">Develop A attestation Service</Jump>

</li>
<li>

### 学习开发更为复杂的应用 - 去中心化交易所

<Jump to="../dex/">Build a DEX</Jump>

</li>
</ol>
</Step>

## 内置 Service 说明

目前 Muta 框架源代码目前内置了四个 built-in Service：Metadata Service、Asset Service、Authorization service 和 Multi-signature service。编译完成，起链之前，对链进行配置的时候。Metadata Service 相关的配置项为起链所必须的配置项。 其他 Service 为可选配置，开发者可以根据实际需求决定是否要在创世块中进行配置。

<Jump to="../../service-list/metadata-service/">Metadata Service</Jump>

<Jump to="../../service-list/asset-service/">Asset Service</Jump>

<Jump to="../../service-list/auth-service/">Authorization Service</Jump>

<Jump to="../../service-list/multi-sig-service/">Multi-signature Service</Jump>








