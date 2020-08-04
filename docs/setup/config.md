---
title: Configuration
sidebar_label: hidden
description: Configuring a blockchain
---

import Jump from '@site/src/components/Jump';

The parameters of a blockchain are configured after [compiling the chain][getting-started#compile], and before [starting the chain][getting-started#starting-your-chain].

Parameters are set in the `devtools/chain/genesis.toml` and `devtools/chain/config.toml`.

## Genesis Configuration

`genesis.toml` is about genesis parameters which are global to a blockchain, and most of which are critical to that blockchain’s consensus. Once the blockchain is initialized, most of these parameters cannot be changed. However, a small number can be updated using the metadata service and are marked as Upgradable below. All the nodes in a blockchain network should share the same `genesis.toml`.

<Jump to="../genesis-config/">View Genesis Configuration</Jump>

## Node Configuration

`config.toml` is about node running parameters which only affect individual nodes in a network. Different nodes can set their own parameters depending on their operation environment.

<Jump to="../node-config/">View Node Configuration</Jump>

[getting-started#compile]: ../getting-started#compiling-muta
[getting-started#starting-your-chain]: ../getting-started#starting-your-chain