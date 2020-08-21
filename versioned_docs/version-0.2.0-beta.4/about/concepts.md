---
title: Basic Concepts
description: The fundamental Muta concepts. A great place to start learning about Muta.
---

import Jump from '@site/src/components/Jump';

It's worth getting familiar with the basic concepts that comprise Muta as they
are used throughout the documentation. This knowledge will be helpful as you
proceed and is also cool to brag about amongst friends.

## Basics

### Blockchain Framework

@yejiayu

### Account

An account represents a entity that is able to perform specified set of actions. It can be used to identify individual users and each user can have as many accounts as they would like. 

In Muta, an account designates a pair of public key PubKey and private key PrivKey. The PubKey can be derived to generate various Addresses, which are used to identify users in the network. The PrivKey is used to generate digital signatures to prove that an Address associated with the PrivKey approved of a given transaction.

<Jump to="../../advanced/crypto/">Learn about the cryptography used when creating a Account</Jump>

### Transaction

Transaction is ordered set of commands that makes the state change from the current state to the next state. It can be a funds transfer, a message call or a contract deployment. Transactions are bundled together into a block as a series to be executed as each is defined in the Framework.

<Jump to="../../advanced/transaction-block">Learn more about Transaction in Muta</Jump>

### Block

A block in Muta is composed of a header and an array of transactions. Each block contains a hash of the previous block in header, all the way to the first block in the chain. This is how all the data is protected against modifications. 

Blocks are proposed and produced during consensus by Validators, and then excuted in the Framework. 

<Jump to="../../advanced/transaction-block/">Learn more about Blocks</Jump>

### Node

The muta-chain is made up of many nodes, each of which runs Muta client software. They all have a copy of the entire blockchain data and communicate over the peer-to-peer network with other nodes. 

There are two types of nodes: Validator and sync node. They all do the full synchronization of the blockchain, from the genesis block to the latest best block. The difference between them is that validator participats in consensus while sync node only synchronizes data from listening validator nodes。

### Asset

@Eason

### Service

@yejiayu

## Advanced

### Multisignature

@Eason



