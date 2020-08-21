/*! For license information please see c3aca6da.2e457876.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[145],{297:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return b})),n.d(t,"metadata",(function(){return f})),n.d(t,"rightToc",(function(){return p})),n.d(t,"default",(function(){return m}));var r=n(1),a=n(9),c=(n(0),n(349)),o=n(379),i=n(378),s=n(384),l=n(385),u=n(372),d=n(357),b={title:"\u5feb\u901f\u5f00\u59cb",description:'Building your own blockchain with Muta, the "Hello World" of Muta tutorials.'},f={id:"docs_zh/setup/getting-started",title:"\u5feb\u901f\u5f00\u59cb",description:'Building your own blockchain with Muta, the "Hello World" of Muta tutorials.',source:"@site/docs/docs_zh/setup/getting-started.md",permalink:"/docs/next/docs_zh/setup/getting-started",editUrl:"https://github.com/nervosnetwork/muta-docs/edit/master/docs/docs_zh/setup/getting-started.md",version:"next",sidebar:"docs_zh",previous:{title:"\u57fa\u672c\u6982\u5ff5",permalink:"/docs/next/docs_zh/about/concepts"},next:{title:"\u914d\u7f6e\u4ecb\u7ecd",permalink:"/docs/next/docs_zh/setup/config"}},p=[{value:"Prerequisites",id:"prerequisites",children:[{value:"Install required dependencies",id:"install-required-dependencies",children:[]},{value:"Install Rust",id:"install-rust",children:[]}]},{value:"Compiling Muta",id:"compiling-muta",children:[{value:"Clone the source code",id:"clone-the-source-code",children:[]},{value:"Compile the source code",id:"compile-the-source-code",children:[]}]},{value:"Configuration",id:"configuration",children:[]},{value:"Deployment",id:"deployment",children:[]},{value:"Starting your chain",id:"starting-your-chain",children:[]},{value:"Interacting with your chain",id:"interacting-with-your-chain",children:[{value:"Using GraphiQL",id:"using-graphiql",children:[]},{value:"Using muta-cli",id:"using-muta-cli",children:[]}]},{value:"Next Step",id:"next-step",children:[]}],h={rightToc:p};function m(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(c.b)("wrapper",Object(r.a)({},h,n,{components:t,mdxType:"MDXLayout"}),Object(c.b)("p",null,"In this tutorial, we will launch a Muta chain with default configuration, and interact with it using tools. We will not be going into depth about the intricacies of developing on Muta, but will hopefully satisfy your curiosity so that you will continue this journey."),Object(c.b)("h2",{id:"prerequisites"},"Prerequisites"),Object(c.b)(o.a,{headingDepth:3,mdxType:"Step"},Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("h3",{id:"install-required-dependencies"},"Install required dependencies"),Object(c.b)(s.a,{block:!0,defaultValue:"macOS",values:[{label:"macOS",value:"macOS"},{label:"ubuntu",value:"ubuntu"},{label:"centos7",value:"centos7"},{label:"archlinux",value:"archlinux"}],mdxType:"Tabs"},Object(c.b)(l.a,{value:"macOS",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ brew install autoconf libtool openssl \n"))),Object(c.b)(l.a,{value:"ubuntu",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ apt update\n$ apt install -y git curl openssl cmake pkg-config libssl-dev gcc build-essential clang libclang-dev\n"))),Object(c.b)(l.a,{value:"centos7",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ yum install -y centos-release-scl\n$ yum install -y git make gcc-c++ openssl-devel llvm-toolset-7\n\n# \u6253\u5f00 llvm \u652f\u6301\n$ scl enable llvm-toolset-7 bash\n"))),Object(c.b)(l.a,{value:"archlinux",mdxType:"TabItem"},Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ pacman -Sy --noconfirm git gcc pkgconf clang make\n"))))),Object(c.b)("li",null,Object(c.b)("h3",{id:"install-rust"},"Install Rust"),Object(c.b)("p",null,"Muta uses the Rust programming language. If you\u2019re running macOS, Linux, or another Unix-like OS, we suggest you to install Rust using ",Object(c.b)("inlineCode",{parentName:"p"},"rustup"),":"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"curl https://sh.rustup.rs -sSf | sh\n"))))),Object(c.b)("p",null,"Once the prerequisites are installed, you can start to build your Muta Chain."),Object(c.b)("h2",{id:"compiling-muta"},"Compiling Muta"),Object(c.b)("p",null,"Firstly, you need to compile the source code."),Object(c.b)(o.a,{headingDepth:3,mdxType:"Step"},Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("h3",{id:"clone-the-source-code"},"Clone the source code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"git clone https://github.com/nervosnetwork/muta.git\n"))),Object(c.b)("li",null,Object(c.b)("h3",{id:"compile-the-source-code"},"Compile the source code"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"cd muta \ncargo build --release --example muta-chain\n")),Object(c.b)(u.a,{type:"info",mdxType:"Alert"},Object(c.b)("p",null,"Hey, bro, this final compilation can take up to 30 minutes depending on your hardware. Why don't use this time to glance through the ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:""}),"key concept in Muta"),"."))))),Object(c.b)("h2",{id:"configuration"},"Configuration"),Object(c.b)("p",null,"After compiling Muta succeed, before runnning the node, you can custome the blockchain parameters (",Object(c.b)("inlineCode",{parentName:"p"},"genesis.toml")," and ",Object(c.b)("inlineCode",{parentName:"p"},"config.toml"),") which effect the entire chain and network. More information can be found in Configuration guide."),Object(c.b)(d.a,{to:"../config/",mdxType:"Jump"},"View Configuration Guide"),Object(c.b)("p",null,"In this case, we\u2019ll leave these parameters on their default settings."),Object(c.b)("h2",{id:"deployment"},"Deployment"),Object(c.b)("p",null,"How to deploy your chain really depends on your production need. We provide a guide to show you how to deploy multi-node network."),Object(c.b)(d.a,{to:"../deploy/",mdxType:"Jump"},"View Deployment Guide"),Object(c.b)("p",null,"In here, we will show you how to run a single node on localhost."),Object(c.b)("h2",{id:"starting-your-chain"},"Starting your chain"),Object(c.b)("p",null,"Now that your node has finished all the above work, run the following command to start your local node:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"cd muta\n./target/release/examples/muta-chain\n")),Object(c.b)("p",null,"Your should see something like this if your node is running successfully:"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{className:"language-log"}),'\n[2020-06-29T15:59:36.263061+08:00 INFO overlord::timer] Overlord: timer set Precommit event height 151, round 0, block hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c", lock round Some(0) timer\n[2020-06-29T15:59:36.263095+08:00 INFO overlord::state::process] Overlord: state receive Precommit vote event height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"\n[2020-06-29T15:59:36.266089+08:00 INFO overlord::state::process] Overlord: state round 0, Precommit vote pool length 1\n[2020-06-29T15:59:36.266148+08:00 INFO overlord::state::process] Overlord: state aggregate signatures height 151, round 0, voters ["f8389d774afdad8755ef8e629e5a154fddc6325a"]\n[2020-06-29T15:59:36.266288+08:00 INFO overlord::state::process] Overlord: state broadcast a Precommit QC, height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"\n[2020-06-29T15:59:36.266409+08:00 INFO overlord::state::process] Overlord: state trigger SMR Precommit QC height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"\n[2020-06-29T15:59:36.266510+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by precommit QC hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c" qc round 0 from State, height 151, round 0\n[2020-06-29T15:59:36.266577+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw Commit event hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c" event\n[2020-06-29T15:59:36.266666+08:00 INFO overlord::state::process] Overlord: state receive commit event height 151, round 0, hash "94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c"\n[2020-06-29T15:59:36.267090+08:00 INFO core_consensus::engine] [consensus]: validator of height 152 is [bls public key "04188ef9", address "0xf8389d774afdad8755ef8e629e5a154fddc6325a", propose weight 1, vote weight 1]\n[2020-06-29T15:59:36.267354+08:00 INFO core_mempool] [core_mempool]: flush mempool with 0 tx_hashes\n[2020-06-29T15:59:36.267737+08:00 INFO core_consensus::adapter] [consensus-adapter]: exec transactions cost 762.582\xb5s transactions len 0\n[2020-06-29T15:59:36.267854+08:00 INFO overlord::state::process] Overlord: achieve consensus in height 151, costs 1 round 14.371511ms time\n[2020-06-29T15:59:36.267885+08:00 INFO core_consensus::adapter] [consensus-adapter]: save receipts cost 56.179\xb5s receipts len 0\n[2020-06-29T15:59:36.267955+08:00 INFO core_consensus::status] update_by_executed: info exec height 151, cycles used 0, state root 0xdd0b5a5e75cca4143baec4be1b7d22906e62538da760e1f22655c1d0006903b7, receipt root 0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421, confirm root 0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\n[2020-06-29T15:59:36.268010+08:00 INFO core_consensus::status] update_by_executed: current status latest_committed_height 151, exec height 150, current_hash 0x94dedbc47bcc95031af8001e5f40f9521c1871c6bacd8c983e6444bd23c9eb7c, latest_committed_state_root 0xdd0b5a5e75cca4143baec4be1b7d22906e62538da760e1f22655c1d0006903b7 list state root [], list receipt root [], list confirm root [], list cycle used []\n[2020-06-29T15:59:39.254042+08:00 INFO overlord::state::process] Overlord: state goto new height 152\n[2020-06-29T15:59:39.254798+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by new height 152\n[2020-06-29T15:59:39.255410+08:00 INFO overlord::smr::state_machine] Overlord: SMR goto new height: 152\n[2020-06-29T15:59:39.255838+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw New round 0 event, lock round None, lock proposal None event\n[2020-06-29T15:59:39.255987+08:00 INFO overlord::timer] Overlord: timer set New round 0 event, lock round None, lock proposal None timer\n[2020-06-29T15:59:39.256148+08:00 INFO overlord::state::process] Overlord: state goto new round 0\n[2020-06-29T15:59:39.256357+08:00 INFO overlord::state::process] Overlord: state self become leader, height 152, round 0\n[2020-06-29T15:59:39.256489+08:00 INFO core_mempool] [core_mempool]: 0 txs in map and 0 txs in queue while package\n[2020-06-29T15:59:39.256693+08:00 INFO overlord::state::process] Overlord: state broadcast a signed proposal height 152, round 0, hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763" and trigger SMR\n[2020-06-29T15:59:39.259548+08:00 INFO core_consensus::engine] [consensus-engine]: check block cost 742ns\n[2020-06-29T15:59:39.259607+08:00 INFO overlord::smr::state_machine] Overlord: SMR triggered by a proposal hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763", from State, height 152, round 0\n[2020-06-29T15:59:39.259638+08:00 INFO core_consensus::engine] [consensus-engine]: get txs cost 9.017\xb5s\n[2020-06-29T15:59:39.259690+08:00 INFO overlord::smr::state_machine] Overlord: SMR throw Prevote event height 152, round 0, block hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763", lock round None event\n[2020-06-29T15:59:39.259800+08:00 INFO overlord::timer] Overlord: timer set Prevote event height 152, round 0, block hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763", lock round None timer\n[2020-06-29T15:59:39.259899+08:00 INFO overlord::state::process] Overlord: state receive Prevote vote event height 152, round 0, hash "87dfcb327358cedd89825f71935aa28c3ac6cb31bde0c13698af103b6e6f2763"\n[2020-06-29T15:59:39.260005+08:00 INFO core_consensus::engine] [consensus-engine]: write wal cost 268.058\xb5s order_hashes_len 0\n')),Object(c.b)("p",null,"If the number after ",Object(c.b)("inlineCode",{parentName:"p"},"height")," is increasing, your blockchain is producing new blocks and reaching consensus about the state they describe!"),Object(c.b)("h2",{id:"interacting-with-your-chain"},"Interacting with your chain"),Object(c.b)("p",null,"You can use GraphiQL or Muta-cli to interact with your chain."),Object(c.b)("h3",{id:"using-graphiql"},"Using GraphiQL"),Object(c.b)("p",null,"By default, the chain exposes the GraphQL interface on port 8000 for users to interact with the chain. Open ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"http://127.0.0.1:8000/graphiql"}),"http://127.0.0.1:8000/graphiql"),", and you will see:"),Object(c.b)("p",null,Object(c.b)("img",Object(r.a)({parentName:"p"},{src:"/docs-img/graphiql.png",alt:null}))),Object(c.b)("p",null,"Enter the GraphQL statement on the left and click the execute button in the middle to see the execution result on the right. Click Docs on the right to view the interface documentation. For more GraphQL usage, please refer to ",Object(c.b)("a",Object(r.a)({parentName:"p"},{href:"https://graphql.org/"}),"Official Document"),"."),Object(c.b)("h3",{id:"using-muta-cli"},"Using muta-cli"),Object(c.b)("p",null,"Muta-cli is an command line tool used to interacting with Muta."),Object(c.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(c.b)("ol",null,Object(c.b)("li",null,Object(c.b)("h4",{id:"install-muta-cli-firstly"},"Install muta-cli firstly"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ npm install -g muta-cli@0.2.0-dev.2\n"))),Object(c.b)("li",null,Object(c.b)("h4",{id:"enter-interactive-mode-and-query-the-blockheight-and-blockheader"},"Enter interactive mode and query the blockheight and blockheader"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ muta-cli repl\n> await client.getLatestBlockHeight()\n2081\n> await client.getBlock('0x1'){\n  header: {\n    chainId: '0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036',\n    confirmRoot: [],\n    cyclesUsed: [],\n    execHeight: '0x0000000000000000',\n    height: '0x0000000000000001',\n    orderRoot: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',\n    orderSignedTransactionsHash: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',\n    prevHash: '0xeef97d023ef645af469ae67be3e308bd23ebff305fc79ed972941db2f5318e52',\n    proof: {\n      bitmap: '0x',\n      blockHash: '0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421',\n      height: '0x0000000000000000',\n      round: '0x0000000000000000',\n      signature: '0x'\n    },\n    proposer: '0xf8389d774afdad8755ef8e629e5a154fddc6325a',\n    receiptRoot: [],\n    stateRoot: '0xf72a09eb2e79c3c5195401a3efc61c8d0a195f9a00b8579495b29cbfa054382a',\n    timestamp: '0x0000017352d8b65a',\n    validatorVersion: '0x0000000000000000',\n    validators: [ [Object] ]\n  },\n  orderedTxHashes: [],\n  hash: '0x43e1dfe5d78ee5b74b1c321f80ebee3c9c424d4354f12035276cc40aa8452315'\n}\n"))),Object(c.b)("li",null,Object(c.b)("h4",{id:"issue-an-asset"},"Issue an asset"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ muta-cli repl\n> const MT = await as.write.create_asset({name: 'Muta Token', supply: 1000000000, symbol: 'MT'})\n{\n  txHash: '0x78f05d81d56b5ebc8e3b3e4b76dd0928e963d5c0e53c14003ef135ef3b63b33a',\n  height: '0x0000000000000738',\n  cyclesUsed: '0x0000000000005208',\n  events: [\n    {\n      data: '{\"id\":\"0x7d7d6c2445f8938e0dfba6f6c16ac431798908ad02e363c44aa8c8a961840af0\",\"name\":\"Muta ' +\n        'Token\",\"symbol\":\"MT\",\"supply\":1000000000,\"issuer\":\"0x9881aac16b9cc6386bd222bc365be07ee375e842\"}',\n      service: 'asset'\n    }\n  ],\n  stateRoot: '0x37024b87295d339f9e3763f0f02d5f91e94c602e72cfea9455ed75627eebe979',\n  response: {\n    serviceName: 'asset',\n    method: 'create_asset',\n    response: {\n      code: '0x0000000000000000',\n      errorMessage: '',\n      succeedData: [Object]\n    }\n  }\n}\n"))),Object(c.b)("li",null,Object(c.b)("h4",{id:"transfer-asset"},"Transfer asset"),Object(c.b)("pre",null,Object(c.b)("code",Object(r.a)({parentName:"pre"},{}),"$ muta-cli repl\n> const asset_id = MT.response.response.succeedData.id\n\n# \u53d1\u884c\u8005\u5373\u4e3a\u53d1\u4ea4\u6613\u7684\u8d26\u6237\u5730\u5740\n> account.address\n'0x9d1d1bb11c44500603971a245f55a23f65148eee'\n\n# \u67e5\u8be2\u53d1\u884c\u8005\u4f59\u989d\n> await client.queryService({serviceName: 'asset', method: 'get_balance', payload: JSON.stringify({asset_id: asset_id, user: account.address})})\n{ \n  isError: false,\n  ret: '{\"asset_id\":\"0xe8c2c6606030bc93da018cec5e6400845489b471527d507357b3316ae884a3f3\",\"user\":\"0x9d1d1bb11c44500603971a245f55a23f65148eee\",\"balance\":1000000000}' \n}\n\n# \u8f6c\u8d26\n> const to = accounts[1].address;\n\n> await as.write.transfer({asset_id: asset_id, to, value: 100});\n{\n  txHash: '0xffa7e55465695b6f50617c4abb472fb55142577dcd9f2069fef02d28b1b7f8f5',\n  height: '0x000000000000074f',\n  cyclesUsed: '0x0000000000005208',\n  events: [\n    {\n      data: '{\"asset_id\":\"0x7d7d6c2445f8938e0dfba6f6c16ac431798908ad02e363c44aa8c8a961840af0\",\"from\":\"0x9881aac16b9cc6386bd222bc365be07ee375e842\",\"to\":\"0x46a31f791466ba6a13ccddf9c180ff2ee5a60564\",\"value\":100}',\n      service: 'asset'\n    }\n  ],\n  stateRoot: '0x8348541d8e36e07cec6db6e2728f0c185370fbfa309799447286849064590722',\n  response: {\n    serviceName: 'asset',\n    method: 'transfer',\n    response: { code: '0x0000000000000000', errorMessage: '', succeedData: {} }\n  }\n}\n\n# \u67e5\u770b\u8f6c\u8d26\u7ed3\u679c\n> await client.queryService({ serviceName: 'asset', method: 'get_balance', payload: JSON.stringify({asset_id: asset_id, user: account.address})})\n{\n  code: '0x0000000000000000',\n  errorMessage: '',\n  succeedData: '{\"asset_id\":\"0x7d7d6c2445f8938e0dfba6f6c16ac431798908ad02e363c44aa8c8a961840af0\",\"user\":\"0x9881aac16b9cc6386bd222bc365be07ee375e842\",\"balance\":999999900}'\n}\n\n> await client.queryService({ serviceName: 'asset', method: 'get_balance', payload: JSON.stringify({asset_id: asset_id, user: to})})\n{\n  code: '0x0000000000000000',\n  errorMessage: '',\n  succeedData: '{\"asset_id\":\"0x7d7d6c2445f8938e0dfba6f6c16ac431798908ad02e363c44aa8c8a961840af0\",\"user\":\"0x46a31f791466ba6a13ccddf9c180ff2ee5a60564\",\"balance\":100}'\n}\n"))))),Object(c.b)("h2",{id:"next-step"},"Next Step"),Object(c.b)("p",null,"You have launched a working Muta-based blockchain, and issues a new token on your chain. We hope you'll continue learning about Muta."),Object(c.b)("p",null,"Your next step may be:"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Decentralize your network with more nodes in the Start a Private Network tutorial.")),Object(c.b)(d.a,{to:"../config/",mdxType:"Jump"},"View Deploy a Multi-node Tutorial"),Object(c.b)("ul",null,Object(c.b)("li",{parentName:"ul"},"Add custom functionality in the Build a dApp tutorial.")),Object(c.b)(d.a,{to:"../config/",mdxType:"Jump"},"View Service Guide"),Object(c.b)("p",null,"If you experienced any issues with this tutorial or want to provide feedback, feel free to open a GitHub issue or reach out on Discord."))}m.isMDXComponent=!0},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return d})),n.d(t,"b",(function(){return p}));var r=n(0),a=n.n(r);function c(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){c(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},c=Object.keys(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(r=0;r<c.length;r++)n=c[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=a.a.createContext({}),u=function(e){var t=a.a.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},d=function(e){var t=u(e.components);return a.a.createElement(l.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},f=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),d=u(n),f=r,p=d["".concat(o,".").concat(f)]||d[f]||b[f]||c;return n?a.a.createElement(p,i({ref:t},l,{components:n})):a.a.createElement(p,i({ref:t},l))}));function p(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var c=n.length,o=new Array(c);o[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var l=2;l<c;l++)o[l]=n[l];return a.a.createElement.apply(null,o)}return a.a.createElement.apply(null,n)}f.displayName="MDXCreateElement"},350:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function a(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var c=typeof r;if("string"===c||"number"===c)e.push(r);else if(Array.isArray(r)&&r.length){var o=a.apply(null,r);o&&e.push(o)}else if("object"===c)for(var i in r)n.call(r,i)&&r[i]&&e.push(i)}}return e.join(" ")}e.exports?(a.default=a,e.exports=a):void 0===(r=function(){return a}.apply(t,[]))||(e.exports=r)}()},351:function(e,t,n){"use strict";n(54),n(355),n(363);var r=n(0),a=n.n(r),c=n(41),o=n(358),i=n(17),s=n.n(i),l=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(r=Object.getOwnPropertySymbols(e);a<r.length;a++)t.indexOf(r[a])<0&&Object.prototype.propertyIsEnumerable.call(e,r[a])&&(n[r[a]]=e[r[a]])}return n};t.a=function(e){var t,n=e.isNavLink,i=l(e,["isNavLink"]),u=i.to,d=i.href,b=u||d,f=Object(o.a)(b),p=Object(r.useRef)(!1),h=n?c.c:c.b,m=s.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!m&&f&&window.docusaurus.prefetch(b),function(){m&&t&&t.disconnect()}}),[b,m,f]),b&&f&&!b.startsWith("#")?a.a.createElement(h,Object.assign({},i,{onMouseEnter:function(){p.current||(window.docusaurus.preload(b),p.current=!0)},innerRef:function(e){var n,r;m&&e&&f&&(n=e,r=function(){window.docusaurus.prefetch(b)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:b})):a.a.createElement("a",Object.assign({},i,{href:b}))}},353:function(e,t,n){t.f=n(2)},354:function(e,t,n){var r=n(82),a=n(55).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,a)}},355:function(e,t,n){"use strict";var r=n(12),a=n(30),c=n(359),o="".startsWith;r(r.P+r.F*n(360)("startsWith"),"String",{startsWith:function(e){var t=c(this,e,"startsWith"),n=a(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return o?o.call(t,r,n):t.slice(n,n+r.length)===r}})},356:function(e,t,n){var r=n(23);e.exports=Array.isArray||function(e){return"Array"==r(e)}},357:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=n(351),o=n(350),i=n.n(o);n(132);t.a=function(e){var t=e.children,n=e.className,r=e.badge,o=e.leftIcon,s=e.rightIcon,l=e.size,u=e.target,d=e.to,b=i()("jump-to","jump-to--"+l,n),f=a.a.createElement("div",{className:"jump-to--inner"},a.a.createElement("div",{className:"jump-to--inner-2"},o&&a.a.createElement("div",{className:"jump-to--left"},a.a.createElement("i",{className:"feather icon-"+o})),a.a.createElement("div",{className:"jump-to--main"},r?a.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),a.a.createElement("div",{className:"jump-to--right"},a.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return u?a.a.createElement("a",{href:d,target:u,className:b},f):a.a.createElement(c.a,{to:d,className:b},f)}},358:function(e,t,n){"use strict";function r(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return r}))},359:function(e,t,n){var r=n(83),a=n(31);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(a(e))}},360:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(a){}}return!0}},361:function(e,t,n){var r=n(39)("meta"),a=n(13),c=n(27),o=n(26).f,i=0,s=Object.isExtensible||function(){return!0},l=!n(14)((function(){return s(Object.preventExtensions({}))})),u=function(e){o(e,r,{value:{i:"O"+ ++i,w:{}}})},d=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!a(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!c(e,r)){if(!s(e))return"F";if(!t)return"E";u(e)}return e[r].i},getWeak:function(e,t){if(!c(e,r)){if(!s(e))return!0;if(!t)return!1;u(e)}return e[r].w},onFreeze:function(e){return l&&d.NEED&&s(e)&&!c(e,r)&&u(e),e}}},362:function(e,t,n){var r=n(52),a=n(53),c=n(28),o=n(77),i=n(27),s=n(81),l=Object.getOwnPropertyDescriptor;t.f=n(10)?l:function(e,t){if(e=c(e),t=o(t,!0),s)try{return l(e,t)}catch(n){}if(i(e,t))return a(!r.f.call(e,t),e[t])}},363:function(e,t,n){"use strict";var r=n(5),a=n(27),c=n(10),o=n(12),i=n(15),s=n(361).KEY,l=n(14),u=n(43),d=n(42),b=n(39),f=n(2),p=n(353),h=n(364),m=n(365),g=n(356),v=n(8),O=n(13),y=n(29),j=n(28),w=n(77),x=n(53),N=n(80),k=n(366),T=n(362),S=n(78),I=n(26),_=n(21),E=T.f,F=I.f,M=k.f,P=r.Symbol,C=r.JSON,D=C&&C.stringify,R=f("_hidden"),q=f("toPrimitive"),A={}.propertyIsEnumerable,G=u("symbol-registry"),H=u("symbols"),V=u("op-symbols"),z=Object.prototype,W="function"==typeof P&&!!S.f,J=r.QObject,L=!J||!J.prototype||!J.prototype.findChild,$=c&&l((function(){return 7!=N(F({},"a",{get:function(){return F(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=E(z,t);r&&delete z[t],F(e,t,n),r&&e!==z&&F(z,t,r)}:F,Q=function(e){var t=H[e]=N(P.prototype);return t._k=e,t},U=W&&"symbol"==typeof P.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof P},K=function(e,t,n){return e===z&&K(V,t,n),v(e),t=w(t,!0),v(n),a(H,t)?(n.enumerable?(a(e,R)&&e[R][t]&&(e[R][t]=!1),n=N(n,{enumerable:x(0,!1)})):(a(e,R)||F(e,R,x(1,{})),e[R][t]=!0),$(e,t,n)):F(e,t,n)},B=function(e,t){v(e);for(var n,r=m(t=j(t)),a=0,c=r.length;c>a;)K(e,n=r[a++],t[n]);return e},Y=function(e){var t=A.call(this,e=w(e,!0));return!(this===z&&a(H,e)&&!a(V,e))&&(!(t||!a(this,e)||!a(H,e)||a(this,R)&&this[R][e])||t)},X=function(e,t){if(e=j(e),t=w(t,!0),e!==z||!a(H,t)||a(V,t)){var n=E(e,t);return!n||!a(H,t)||a(e,R)&&e[R][t]||(n.enumerable=!0),n}},Z=function(e){for(var t,n=M(j(e)),r=[],c=0;n.length>c;)a(H,t=n[c++])||t==R||t==s||r.push(t);return r},ee=function(e){for(var t,n=e===z,r=M(n?V:j(e)),c=[],o=0;r.length>o;)!a(H,t=r[o++])||n&&!a(z,t)||c.push(H[t]);return c};W||(i((P=function(){if(this instanceof P)throw TypeError("Symbol is not a constructor!");var e=b(arguments.length>0?arguments[0]:void 0),t=function(n){this===z&&t.call(V,n),a(this,R)&&a(this[R],e)&&(this[R][e]=!1),$(this,e,x(1,n))};return c&&L&&$(z,e,{configurable:!0,set:t}),Q(e)}).prototype,"toString",(function(){return this._k})),T.f=X,I.f=K,n(354).f=k.f=Z,n(52).f=Y,S.f=ee,c&&!n(40)&&i(z,"propertyIsEnumerable",Y,!0),p.f=function(e){return Q(f(e))}),o(o.G+o.W+o.F*!W,{Symbol:P});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;te.length>ne;)f(te[ne++]);for(var re=_(f.store),ae=0;re.length>ae;)h(re[ae++]);o(o.S+o.F*!W,"Symbol",{for:function(e){return a(G,e+="")?G[e]:G[e]=P(e)},keyFor:function(e){if(!U(e))throw TypeError(e+" is not a symbol!");for(var t in G)if(G[t]===e)return t},useSetter:function(){L=!0},useSimple:function(){L=!1}}),o(o.S+o.F*!W,"Object",{create:function(e,t){return void 0===t?N(e):B(N(e),t)},defineProperty:K,defineProperties:B,getOwnPropertyDescriptor:X,getOwnPropertyNames:Z,getOwnPropertySymbols:ee});var ce=l((function(){S.f(1)}));o(o.S+o.F*ce,"Object",{getOwnPropertySymbols:function(e){return S.f(y(e))}}),C&&o(o.S+o.F*(!W||l((function(){var e=P();return"[null]"!=D([e])||"{}"!=D({a:e})||"{}"!=D(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,r=[e],a=1;arguments.length>a;)r.push(arguments[a++]);if(n=t=r[1],(O(t)||void 0!==e)&&!U(e))return g(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!U(t))return t}),r[1]=t,D.apply(C,r)}}),P.prototype[q]||n(11)(P.prototype,q,P.prototype.valueOf),d(P,"Symbol"),d(Math,"Math",!0),d(r.JSON,"JSON",!0)},364:function(e,t,n){var r=n(5),a=n(16),c=n(40),o=n(353),i=n(26).f;e.exports=function(e){var t=a.Symbol||(a.Symbol=c?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||i(t,e,{value:o.f(e)})}},365:function(e,t,n){var r=n(21),a=n(78),c=n(52);e.exports=function(e){var t=r(e),n=a.f;if(n)for(var o,i=n(e),s=c.f,l=0;i.length>l;)s.call(e,o=i[l++])&&t.push(o);return t}},366:function(e,t,n){var r=n(28),a=n(354).f,c={}.toString,o="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return o&&"[object Window]"==c.call(e)?function(e){try{return a(e)}catch(t){return o.slice()}}(e):a(r(e))}},367:function(e,t,n){"use strict";var r=n(12),a=n(387)(5),c=!0;"find"in[]&&Array(1).find((function(){c=!1})),r(r.P+r.F*c,"Array",{find:function(e){return a(this,e,arguments.length>1?arguments[1]:void 0)}}),n(86)("find")},372:function(e,t,n){"use strict";n(376);var r=n(0),a=n.n(r),c=n(350),o=n.n(c);n(136);t.a=function(e){var t=e.children,n=e.className,r=e.fill,c=e.icon,i=e.rounded,s=e.type,l=null;switch(s){case"danger":l="alert-triangle";break;case"success":l="check-circle";break;case"warning":l="alert-triangle";break;default:l="info"}return a.a.createElement("div",{className:o()(n,"alert","alert--"+s,{"alert--fill":r,"alert--icon":!1!==c,"alert--rounded":!0===i}),role:"alert"},!1!==c&&a.a.createElement("i",{className:o()("feather","icon-"+(c||l))}),t)}},378:function(e,t,n){"use strict";var r=n(0),a=n.n(r),c=(n(350),n(368)),o=n.n(c);n(137);t.a=function(e){var t=e.children,n=e.headingDepth,c="undefined"!=typeof window?window.location:null,i={title:"Tutorial on "+c+" failed",body:"The tutorial on:\n\n"+c+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},s="https://github.com/nervosnetwork/muta-docs/issues/new?"+o.a.stringify(i),l=Object(r.useState)(null),u=l[0],d=l[1];return a.a.createElement("div",{className:"steps steps--h"+n},t,!u&&a.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",a.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return d("yes")}},"Yes"),"\xa0\xa0",a.a.createElement("a",{href:s,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==u&&a.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Muta please consider ",a.a.createElement("a",{href:"https://github.com/nervosnetwork/muta/",target:"_blank"},"starring our Github repo"),"."))}},379:function(e,t,n){"use strict";var r=n(0),a=n.n(r);n(350),n(368),n(138);t.a=function(e){var t=e.children,n=e.headingDepth;return"undefined"!=typeof window&&window.location,a.a.createElement("div",{className:"step step--h"+n},t)}},384:function(e,t,n){"use strict";var r=n(1),a=(n(400),n(367),n(56),n(32),n(24),n(22),n(0)),c=n.n(a),o=n(404),i=n(350),s=n.n(i),l=n(368),u=n.n(l),d=n(406),b=37,f=39;function p(e){var t=e.block,n=e.centered,r=e.changeSelectedValue,a=e.className,o=e.handleKeydown,i=e.style,l=e.values,u=e.selectedValue,d=e.tabRefs;return c.a.createElement("div",{className:n?"tabs--centered":null},c.a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:s()("tabs",a,{"tabs--block":t}),style:i},l.map((function(e){var t=e.value,n=e.label;return c.a.createElement("li",{role:"tab",tabIndex:"0","aria-selected":u===t,className:s()("tab-item",{"tab-item--active":u===t}),key:t,ref:function(e){return d.push(e)},onKeyDown:function(e){return o(d,e.target,e)},onFocus:function(){return r(t)},onClick:function(){return r(t)}},n)}))))}function h(e){var t=e.placeholder,n=e.selectedValue,r=e.changeSelectedValue,a=e.size,i=e.values,s=i;if(s[0].group){var l=_.groupBy(s,"group");s=Object.keys(l).map((function(e){return{label:e,options:l[e]}}))}return c.a.createElement(o.a,{className:"react-select-container react-select--"+a,classNamePrefix:"react-select",options:s,isClearable:n,placeholder:t,value:i.find((function(e){return e.value==n})),onChange:function(e){return r(e?e.value:null)}})}t.a=function(e){e.block,e.centered;var t=e.children,n=e.defaultValue,o=e.groupId,i=e.label,s=e.placeholder,l=e.select,m=e.size,g=(e.style,e.values),v=e.urlKey,O=Object(d.a)(),y=O.tabGroupChoices,j=O.setTabGroupChoices,w=Object(a.useState)(n),x=w[0],N=w[1];if(null!=o){var k=y[o];null!=k&&k!==x&&N(k)}var T=function(e){N(e),null!=o&&j(o,e)},S=[],I=function(e,t,n){switch(n.keyCode){case f:!function(e,t){var n=e.indexOf(t)+1;e[n]?e[n].focus():e[0].focus()}(e,t);break;case b:!function(e,t){var n=e.indexOf(t)-1;e[n]?e[n].focus():e[e.length-1].focus()}(e,t)}};return Object(a.useEffect)((function(){if("undefined"!=typeof window&&window.location&&v){var e=u.a.parse(window.location.search);e[v]&&N(e[v])}}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement("div",{className:"margin-bottom--"+(m||"md")},i&&c.a.createElement("div",{className:"margin-vert--sm"},i),g.length>1&&(l?c.a.createElement(h,Object(r.a)({changeSelectedValue:T,handleKeydown:I,placeholder:s,selectedValue:x,size:m,tabRefs:S},e)):c.a.createElement(p,Object(r.a)({changeSelectedValue:T,handleKeydown:I,selectedValue:x,tabRefs:S},e)))),a.Children.toArray(t).filter((function(e){return e.props.value===x}))[0])}},385:function(e,t,n){"use strict";var r=n(0),a=n.n(r);t.a=function(e){return a.a.createElement(a.a.Fragment,null,e.children)}},387:function(e,t,n){var r=n(33),a=n(60),c=n(29),o=n(30),i=n(388);e.exports=function(e,t){var n=1==e,s=2==e,l=3==e,u=4==e,d=6==e,b=5==e||d,f=t||i;return function(t,i,p){for(var h,m,g=c(t),v=a(g),O=r(i,p,3),y=o(v.length),j=0,w=n?f(t,y):s?f(t,0):void 0;y>j;j++)if((b||j in v)&&(m=O(h=v[j],j,g),e))if(n)w[j]=m;else if(m)switch(e){case 3:return!0;case 5:return h;case 6:return j;case 2:w.push(h)}else if(u)return!1;return d?-1:l||u?u:w}}},388:function(e,t,n){var r=n(389);e.exports=function(e,t){return new(r(e))(t)}},389:function(e,t,n){var r=n(13),a=n(356),c=n(2)("species");e.exports=function(e){var t;return a(e)&&("function"!=typeof(t=e.constructor)||t!==Array&&!a(t.prototype)||(t=void 0),r(t)&&null===(t=t[c])&&(t=void 0)),void 0===t?Array:t}},405:function(e,t,n){"use strict";var r=n(0),a=Object(r.createContext)({tabGroupChoices:{},setTabGroupChoices:function(){}});t.a=a}}]);