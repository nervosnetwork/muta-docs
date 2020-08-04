---
sidebar_label: Overview
title: Development Overview
---

import Step from '@site/src/components/Step';
import Jump from '@site/src/components/Jump';

In this section, we'll show you how to customize the chain's functionality by developing a Service. Service is the abstraction layer in the Muta framework for extensions, where each Service performs a relatively independent function, maintaining its own storage and operational interfaces, similar to a Small state machine. These services together form the state machine part of the chain and after being connected to the underlying components of the blockchain through the framework interface, a brand new chain exclusive to you is developed!

## Learning Path

<Step headingDepth={3}>
<ol>
<li>

### Read the Service Development Guide
   
This document describes service components and development guidelines.

<Jump to="../service-dev/">View Service Dev Guide</Jump>

</li>
<li>

### Learn more about developing services with reference to existing services.

We provide a number of generic services for reference and use, covering governance, assets, multi-signature and more.

<Jump to="../../dev/service-list/">View Service List</Jump>

</li>
<li>

### Try to develop a simple attestation service to build a POE chain.

In this tutorial, we will take you through the development of a simple certificate of deposit service from scratch and connect to Muta to build a POE chain.

<Jump to="../poe-chain/">Develop A attestation Service</Jump>

</li>
<li>

### Learn to develop more complex applications - decentralized exchanges

<Jump to="../dex/">Build a DEX</Jump>

</li>
</ol>
</Step>

## Built-in Service Declaration

The Muta framework source code currently has four built-in built-in services: Metadata Service, Asset Service, Authorization service and Multi-signature service. The configuration items related to the Metadata Service are necessary to start the chain. The other services are optional and can be configured in the Genesis block according to the developer's needs.

<Jump to="../service-list/">Metadata Service</Jump>

<Jump to="../service-list/">Asset Service</Jump>

<Jump to="../service-list/">Authorization Service</Jump>

<Jump to="../service-list/">Multi-signature Service</Jump>








