---
title: 基本概念
description: The fundamental Muta concepts. A great place to start learning about Muta.
---

import Jump from '@site/src/components/Jump';

这个文档将带你熟悉一下 Muta 里的一些基本概念，这将有助于你后续的使用和探索。

## 基本概念

### 区块链框架

@yejiayu

### 账户

帐户标识了一个能够执行一系列操作的个体。每个用户可以拥有多个帐户。在 Muta 中，账户指定了一对公钥 PubKey 和私钥 PrivKey，PubKey 可以衍生出各种地址，用来标识网络中不同的个体。PrivKey 用于生成数字签名，以证明与 PrivKey 相关联的地址认可某项交易。

<Jump to="/docs/advanced/crypto/">Muta 中使用到的密码学算法</Jump>

### 交易

交易是一组有序的命令，可以是关于资产的发行、转移，或者合约的部署。交易打包被执行后，链的世界状态将被改变。

<Jump to="/docs/advanced/key-concept/tx">Muta 中的交易</Jump>

### 区块

区块里存储了交易数据的相关信息，包括交易的内容和账户余额的变化。交易会在 Muta 的共识模块中被打包成块，并进行共识，共识后的区块将在执行模块中被执行。

<Jump to="/docs/advanced/block-structure/"> Muta 中的区块结构</Jump>

### 节点

区块链网络一般是由多个节点构成，每个节点都运行了 Muta 客户端。它们都拥有整个区块链数据的副本，并通过点对点网络与其他节点进行通信。

由于客户端配置的不同，节点可以分两种：共识节点和同步节点。他们都同步区块链的所有数据，不同之处在于共识节点会参与共识，而同步节点仅负责从监听的共识节点那里同步数据。

### 资产

@Eason

### Service

@yejiayu

## 高级概念

### 多重签名

@Eason



