/*! For license information please see be95d7df.de603da2.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[141],{293:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return c})),t.d(n,"metadata",(function(){return l})),t.d(n,"rightToc",(function(){return s})),t.d(n,"default",(function(){return b}));var a=t(1),o=t(9),r=(t(0),t(349)),i=t(378),c={last_modified_on:"2020-07-13",title:"Deploy a multi-node blockchain network",description:"How to deploy a multi-node blockchain network to your target environment",series_position:2,author_github:"https://github.com/zhouyun-zoe",tags:["type: tutorial","level: easy"]},l={categories:[{name:"getting-started",title:"Getting Started",description:"Take Muta from zero to production in under 30 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Deploy a multi-node blockchain network",description:"How to deploy a multi-node blockchain network to your target environment",permalink:"/guides/getting-started/deploying",readingTime:"9 min read",seriesPosition:2,source:"@site/guides/getting-started/deploying.md",tags:[{label:"type: tutorial",permalink:"/guides/tags/type-tutorial"},{label:"level: easy",permalink:"/guides/tags/level-easy"}],title:"Deploy a multi-node blockchain network",truncated:!1,prevItem:{title:"Hello World. Your First Muta Blockchain.",permalink:"/guides/getting-started/your-first-pipeline"},nextItem:{title:"Benchmark the performance of your chain",permalink:"/guides/getting-started/benchmark"}},s=[{value:"Overview",id:"overview",children:[]},{value:"Generate key-pairs",id:"generate-key-pairs",children:[{value:"Install Muta-keypair",id:"install-muta-keypair",children:[]},{value:"Generate Key-pairs",id:"generate-key-pairs-1",children:[]}]},{value:"Create the Genesis Block",id:"create-the-genesis-block",children:[]},{value:"Config node parameters",id:"config-node-parameters",children:[{value:"Alice configures her node",id:"alice-configures-her-node",children:[]},{value:"Others&#39; configuration",id:"others-configuration",children:[]}]},{value:"Run this network",id:"run-this-network",children:[{value:"Alice Starts her node  first.",id:"alice-starts-her-node--first",children:[]},{value:"Bob, Ben and Bill Join",id:"bob-ben-and-bill-join",children:[]}]},{value:"Next Step",id:"next-step",children:[]}],d={rightToc:s};function b(e){var n=e.components,t=Object(o.a)(e,["components"]);return Object(r.b)("wrapper",Object(a.a)({},d,t,{components:n,mdxType:"MDXLayout"}),Object(r.b)("p",null,"In this tutorial we will learn and practice how to start a blockchain network with a validator set of your choosing using Muta. In this case, we will build a four validators' blockchain running on a single server with a single Muta binary , but the process generalizes to more nodes and more complex deploy environment in a straight-forward manner."),Object(r.b)("h2",{id:"overview"},"Overview"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"This tutorial assumes that you already have Muta compiled on your computer from when you completed the ",Object(r.b)("a",Object(a.a)({parentName:"strong"},{href:"./before-create"}),"Create Your First Muta Chain Tutorial"),".")," If you do not, please install and compile Muta framework first."),Object(r.b)("p",null,"In this case, we will build a blockchain network with four validators (Alice, Bob, Bill and Ben). And Alice will be the bootstrap node. The tutorial is divided into several sections:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Firstly, each participant should generate their own key-pairs."),Object(r.b)("li",{parentName:"ul"},"And then, create the genesis block and config the node."),Object(r.b)("li",{parentName:"ul"},"With custom chain spec distributed to all participants, we will run the bootstraps node firstly, and then start the other node to connect to bootstraps node.")),Object(r.b)(i.a,{headingDepth:3,mdxType:"Steps"},Object(r.b)("ol",null,Object(r.b)("li",null,Object(r.b)("h2",{id:"generate-key-pairs"},"Generate key-pairs"),Object(r.b)("h3",{id:"install-muta-keypair"},"Install Muta-keypair"),Object(r.b)("p",null,"Muta-keypair is a tool the generates keys specifically designed to be used with Muta. Install it by following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"cargo +nightly install --git https://github.com/nervosnetwork/muta.git --bin muta-keypair\n")),Object(r.b)("p",null,"Run the help command\uff0cthen you can see the operation guide:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"$ muta-keypair -h\nmuta_keypair 0.1\nMuta Dev <muta@nervos.org>\na tool to generate keypairs for muta\n\nUSAGE:\n    muta-keypair [OPTIONS]\n\nFLAGS:\n    -h, --help       Prints help information\n    -V, --version    Prints version information\n\nOPTIONS:\n    -c, --common_ref <common_ref>           common_ref for bls signature, it will be randomly generated if not passed\n                                            [default: ]\n    -n, --number <number>                   Number of keypairs to generate [default: 4]\n    -p, --private_keys <private_keys>...    Generate keypairs from a given private key vector\n")),Object(r.b)("p",null,":::note\n",Object(r.b)("inlineCode",{parentName:"p"},"common_ref")," is a required parameter used when generating BLS signature. And all the validators in a same network should share a common ",Object(r.b)("inlineCode",{parentName:"p"},"common_ref"),". So, in here, one option is to let ",Object(r.b)("inlineCode",{parentName:"p"},"bootstraps node")," generating ",Object(r.b)("inlineCode",{parentName:"p"},"common_ref")," first, and then distribute it to the other node. Another option for validators is to consult together to come up with a string used as ",Object(r.b)("inlineCode",{parentName:"p"},"common_ref")," after hex encoding.\n:::"),Object(r.b)("p",null,"In this case, bootstraps node will generate a ",Object(r.b)("inlineCode",{parentName:"p"},"common_ref")," randomly, and then pass it to the other node."),Object(r.b)("h3",{id:"generate-key-pairs-1"},"Generate Key-pairs"),Object(r.b)("p",null,"Alice (bootstraps node) generates her key-pairs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'$ muta-keypair -n 1\n{\n  "common_ref": "0x7446645045376b553041",\n  "keypairs": [\n    {\n      "index": 1,\n      "private_key": "0x5b2041e3f47aaf2d44407d3bdf415a4f55bf377352448c4217393f5c34fe270d",\n      "public_key": "0x0299b6d1ad1961cf7a99b581d103a9f977531f77d67e994bfcd9a7fd82ad230a49",\n      "address": "0x991ce94e75332da2160363d78b73955738d7a3bc",\n      "bls_public_key": "0x04076b9ee33b9ef2c5f6f7bf8507dd2e17c65f8b67bee2ca874dde747ef69d7f18ec927de1adca930da61b071d6075ea10172342d0fb50b977b919ab0e4e8306261002b1ed27990b9d6dded5583b91d8801615baee901ed09a2333fc57770d84c8"\n    }\n  ]\n}\n')),Object(r.b)("p",null,"After Alice passes the ",Object(r.b)("inlineCode",{parentName:"p"},"common_ref")," to Bob, Bill and Ben, they generates his own key-pairs:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'$ muta-keypair -n 3 -c 75695962523835457669\n{\n  "common_ref": "0x75695962523835457669",\n  "keypairs": [\n    {\n      "index": 1,\n      "private_key": "0x28f53779b60e261ba68cdccefcc6a152136df8cb794e067ec76dc5a02c8f2ccf",\n      "public_key": "0x0299b6d1ad1961cf7a99b581d103a9f977531f77d67e994bfcd9a7fd82ad230a49",\n      "address": "0x78ef0eff2fb9f569d86d75d22b69ea8407f6f092",\n      "bls_public_key": "0x0413584a15f1dec552bb12233bf73a886ed49a3f56c68eda080743577005417635c9ac72a528a961a0e14a2df3a50a5c660641f446f629788486d7935d4ad4918035ce884a98bbaaa4c96307a2428729cba694329a693ce60c02e13b039c6a8978"\n    },\n    {\n      "index": 2,\n      "private_key": "0x8b41630934fc7df92a016af88aae477bd173118fb72113f31db8a950230b029f",\n      "public_key": "0x030a1cd0213b86976c9e14c1aa8d0167a50c8a5c929f72fcbeaae35d84afa1c2b7",\n      "address": "0xa55e1261a73116c755291140e427caa0cbb5309e",\n      "bls_public_key": "0x040e7b00b59d37d4d735041ea1b69a55cd7fd80e920b5d70d85d051af6b847c3aec5b412b128f85ad8b4c6bac0561105a80fa8dd5f60cd42c3a2da0fd0b946fa3d761b1d21c569e0958b847da22dec14a132121027006df8c5d4ccf7caf8535f70"\n    },\n    {\n      "index": 3,\n      "private_key": "0x8e065679aa8b1185406c7514343073cd8c1695218925c9b2d5e98c3483d71d81",\n      "public_key": "0x027c805020b226a050c317c68d50cb7b0a7d682b5614e23a61c5c08a722c2d44aa",\n      "address": "0x103252cad4e0380fe57a0c73f549f1ee2c9ea8e8",\n      "bls_public_key": "0x041611b7da94a7fb7a8ff1c802bbf61da689f8d6f974d99466adeb1f47bcaff70470b6f279763abeb0cec5565abcfcb4ce13e79b8c310f0d1b26605b61ac2c04e0efcedbae18e763a86adb7a0e8ed0fcb1dc11fded12583972403815a7aa3dc300"\n    }\n  ]\n}\n')),Object(r.b)("p",null,"From the output we can see, each participant not only has their own keys generated\uff0cbut also possessed their ",Object(r.b)("inlineCode",{parentName:"p"},"bls_public_key"),". Reocord all of these information carellful, we will use it in following steps.")),Object(r.b)("li",null,Object(r.b)("h2",{id:"create-the-genesis-block"},"Create the Genesis Block"),Object(r.b)("p",null,"Now that each participant has their own keys generated, in this part, we will create the genesis block for this chain."),Object(r.b)("p",null,"Alice find ",Object(r.b)("inlineCode",{parentName:"p"},"devtool/chain/genesis.toml")," which contains all the info of genesis block, but it's still filled with default configuration. "),Object(r.b)("p",null,"Pay attention to following three fields:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("strong",{parentName:"li"},"The portion of this file Alice needs to pay attention is the ",Object(r.b)("inlineCode",{parentName:"strong"},"verifier_list"),", in which all the origin validators's info need to be filled.")," "),Object(r.b)("li",{parentName:"ul"},"Since Overlord consensus protocol supports weghted votes, in here, we can also set ",Object(r.b)("inlineCode",{parentName:"li"},"propose_weight")," and ",Object(r.b)("inlineCode",{parentName:"li"},"propose_weight"),". "),Object(r.b)("li",{parentName:"ul"},"And don't forget to modify ",Object(r.b)("inlineCode",{parentName:"li"},"common_ref"),".")),Object(r.b)("p",null,":::note\nMore info of the other parameters in ",Object(r.b)("inlineCode",{parentName:"p"},"genesis.toml")," can be explored in ",Object(r.b)("a",Object(a.a)({parentName:"p"},{href:"./config.md"}),"configuration guide"),".\n:::"),Object(r.b)("p",null,"After knowing that, Alice adds the other nodes' info into ",Object(r.b)("inlineCode",{parentName:"p"},"verifier_list")," , give each validator a weight of 1, modify ",Object(r.b)("inlineCode",{parentName:"p"},"common_ref")," and keep the other fields unchanged. Then the ",Object(r.b)("inlineCode",{parentName:"p"},"genesis.toml")," looks like this:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'timestamp = 0\nprevhash = "0x44915be5b6c20b0678cf05fcddbbaa832e25d7e6ac538784cd5c24de00d47472"\n\n[[services]]\nname = "asset"\npayload = \'\'\'\n{\n    "id": "0xf56924db538e77bb5951eb5ff0d02b88983c49c45eea30e8ae3e7234b311436c",\n    "name": "MutaToken",\n    "symbol": "MT",\n    "supply": 320000011,\n    "issuer": "0xf8389d774afdad8755ef8e629e5a154fddc6325a"\n}\n\'\'\'\n\n[[services]]\nname = "metadata"\npayload = \'\'\'\n{\n    "chain_id": "0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036",\n    "common_ref": "0x7446645045376b553041",\n    "timeout_gap": 20,\n    "cycles_limit": 999999999999,\n    "cycles_price": 1,\n    "interval": 3000,\n    "verifier_list": [\n        {\n            "bls_pub_key": "0x040386a8ac1cce6fd90c31effa628bc8513cbd625c752ca76ade6ff37b97edbdfb97d94caeddd261d9e2fd6b5456aecc100ea730ddee3c94f040a54152ded330a4e409f39bfbc34b286536790fef8bbaf734431679ba6a8d5d6994e557e82306df",\n            "address": "0x12d8baf8c4efb32a7983efac2d8535fe57deb756",\n            "propose_weight": 1,\n            "vote_weight": 1\n        },\n        {\n            "bls_pub_key": "0x040e7b00b59d37d4d735041ea1b69a55cd7fd80e920b5d70d85d051af6b847c3aec5b412b128f85ad8b4c6bac0561105a80fa8dd5f60cd42c3a2da0fd0b946fa3d761b1d21c569e0958b847da22dec14a132121027006df8c5d4ccf7caf8535f70",\n            "address": "0xa55e1261a73116c755291140e427caa0cbb5309e",\n            "propose_weight": 1,\n            "vote_weight": 1\n        },\n        {\n            "bls_pub_key": "0x0413584a15f1dec552bb12233bf73a886ed49a3f56c68eda080743577005417635c9ac72a528a961a0e14a2df3a50a5c660641f446f629788486d7935d4ad4918035ce884a98bbaaa4c96307a2428729cba694329a693ce60c02e13b039c6a8978",\n            "address": "0x78ef0eff2fb9f569d86d75d22b69ea8407f6f092",\n            "propose_weight": 1,\n            "vote_weight": 1\n        },\n        {\n            "bls_pub_key": "0x041611b7da94a7fb7a8ff1c802bbf61da689f8d6f974d99466adeb1f47bcaff70470b6f279763abeb0cec5565abcfcb4ce13e79b8c310f0d1b26605b61ac2c04e0efcedbae18e763a86adb7a0e8ed0fcb1dc11fded12583972403815a7aa3dc300",\n            "address": "0x103252cad4e0380fe57a0c73f549f1ee2c9ea8e8",\n            "propose_weight": 1,\n            "vote_weight": 1\n        }\n    ],\n    "propose_ratio": 15,\n    "prevote_ratio": 10,\n    "precommit_ratio": 10,\n    "brake_ratio": 7,\n    "tx_num_limit": 20000,\n    "max_tx_size": 1024\n}\n\'\'\'\n')),Object(r.b)("p",null,"Finally Alice shares the ",Object(r.b)("inlineCode",{parentName:"p"},"genesis.toml")," with all the other validators in the network. In this case, since these four nodes will run in the same binanry, we can just keep one ",Object(r.b)("inlineCode",{parentName:"p"},"genesis.toml")," file under ",Object(r.b)("inlineCode",{parentName:"p"},"devtool/chain")," directory."),Object(r.b)("p",null,":::note\nIn production environment, it's highly recommended that bootstraps node create the genesis block first and shared the resulting ",Object(r.b)("inlineCode",{parentName:"p"},"genesis.toml")," file with the other validators. Because it's quite easy to get a slightly different genesis block which will break consensus if each participant generates the file themselves.\n:::")),Object(r.b)("li",null,Object(r.b)("h2",{id:"config-node-parameters"},"Config node parameters"),Object(r.b)("p",null,"After creating the genesis block, Each validators need to config the node. Node configuration parameters can be found in ",Object(r.b)("inlineCode",{parentName:"p"},"devtool/chain/config.toml"),"."),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"The fields of this file we need to pay more attention are:")," "),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"privkey"),": private key of this node"),Object(r.b)("li",{parentName:"ul"},"Under ",Object(r.b)("inlineCode",{parentName:"li"},"[network]"),", ",Object(r.b)("inlineCode",{parentName:"li"},'listening_address = "0.0.0.0:1337"')," specifies the address that your node will listen."),Object(r.b)("li",{parentName:"ul"},Object(r.b)("inlineCode",{parentName:"li"},"[[network.bootstraps]]"),", specifies the information of bootstraps node that your node will connect, including the public key and listening address. Bootstrap node can leave this filed empty.")),Object(r.b)("h3",{id:"alice-configures-her-node"},"Alice configures her node"),Object(r.b)("p",null,"After adding required infomation and leaving ",Object(r.b)("inlineCode",{parentName:"p"},"[[network.bootstraps]]")," empty  , ",Object(r.b)("inlineCode",{parentName:"p"},"config.toml")," in Alice's node looks like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'data_path = "./devtools/chain/data/1"\nprivkey = "0x592d6f62cd5c3464d4956ea585ec7007bcf5217eb89cc50bf14eea95f3b09706"\n\n[network]\nlistening_address = "0.0.0.0:1337"\nrpc_timeout = 10\n\n[graphql]\ngraphiql_uri = "/graphiql"\nlistening_address = "0.0.0.0:8000"\ngraphql_uri = "/graphql"\nworkers = 0 # if 0, uses number of available logical cpu as threads count.\nmaxconn = 25000\nmax_payload_size = 1048576\n\n[mempool]\npool_size = 20000\nbroadcast_txs_size = 200\nbroadcast_txs_interval = 200\n\n[executor]\nlight = false\n\n[logger]\nfilter = "info"\nlog_to_console = true\nconsole_show_file_and_line = false\nlog_path = "logs/"\nlog_to_file = true\nmetrics = true\n# you can specify log level for modules with config below\n# modules_level = { "overlord::state::process" = "debug", core_consensus = "error" }\n\n')),Object(r.b)("h3",{id:"others-configuration"},"Others' configuration"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"For Bob:")),Object(r.b)("p",null,"Bob adds his private key, specifies his ",Object(r.b)("inlineCode",{parentName:"p"},"[network]")," and got Alice's infomation to fill into ",Object(r.b)("inlineCode",{parentName:"p"},"[[network.bootstraps]]"),".\n( In this case, we also modifies ",Object(r.b)("inlineCode",{parentName:"p"},"lisening_adress")," under ",Object(r.b)("inlineCode",{parentName:"p"},"[graphql]"),", since these four nodes are on the same server)."),Object(r.b)("p",null,"Then the ",Object(r.b)("inlineCode",{parentName:"p"},"config.toml")," in Bob's node looks like:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'data_path = "./devtools/chain/data/2"\nprivkey = "0x8b41630934fc7df92a016af88aae477bd173118fb72113f31db8a950230b029f"\n\n[network]\nlistening_address = "0.0.0.0:1338"\nrpc_timeout = 10\n\n[[network.bootstraps]]\npubkey = "0x02fa3a27712962a70e3e474363f38661f6a9e56f9cc91efd0d343713d51f3fa355"\naddress = "localhost:1337" # Replace it with your IP\n\n[graphql]\ngraphiql_uri = "/graphiql"\nlistening_address = "0.0.0.0:8001"\ngraphql_uri = "/graphql"\nworkers = 0 # if 0, uses number of available logical cpu as threads count.\nmaxconn = 25000\nmax_payload_size = 1048576\n\n[mempool]\npool_size = 20000\nbroadcast_txs_size = 200\nbroadcast_txs_interval = 200\n\n[executor]\nlight = false\n\n[logger]\nfilter = "info"\nlog_to_console = true\nconsole_show_file_and_line = false\nlog_path = "logs/"\nlog_to_file = true\nmetrics = true\n# you can specify log level for modules with config below\n# modules_level = { "overlord::state::process" = "debug", core_consensus = "error" }\n')),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"For Ben:")),Object(r.b)("details",null,Object(r.b)("summary",null,"(click here to view)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'data_path = "./devtools/chain/data/2"\nprivkey = "0x8b41630934fc7df92a016af88aae477bd173118fb72113f31db8a950230b029f"\n\n[network]\nlistening_address = "0.0.0.0:1339"\nrpc_timeout = 10\n\n[[network.bootstraps]]\npubkey = "0x02fa3a27712962a70e3e474363f38661f6a9e56f9cc91efd0d343713d51f3fa355"\naddress = "localhost:1337" # Replace it with your IP\n\n[graphql]\ngraphiql_uri = "/graphiql"\nlistening_address = "0.0.0.0:8002"\ngraphql_uri = "/graphql"\nworkers = 0 # if 0, uses number of available logical cpu as threads count.\nmaxconn = 25000\nmax_payload_size = 1048576\n\n[mempool]\npool_size = 20000\nbroadcast_txs_size = 200\nbroadcast_txs_interval = 200\n\n[executor]\nlight = false\n\n[logger]\nfilter = "info"\nlog_to_console = true\nconsole_show_file_and_line = false\nlog_path = "logs/"\nlog_to_file = true\nmetrics = true\n# you can specify log level for modules with config below\n# modules_level = { "overlord::state::process" = "debug", core_consensus = "error" }\n'))),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"For Bill:")),Object(r.b)("details",null,Object(r.b)("summary",null,"(click here to view)"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),'data_path = "./devtools/chain/data/2"\nprivkey = "0x8e065679aa8b1185406c7514343073cd8c1695218925c9b2d5e98c3483d71d81"\n\n[network]\nlistening_address = "0.0.0.0:1340"\nrpc_timeout = 10\n\n[[network.bootstraps]]\npubkey = "0x02fa3a27712962a70e3e474363f38661f6a9e56f9cc91efd0d343713d51f3fa355"\naddress = "localhost:1337" # Replace it with your IP\n\n[graphql]\ngraphiql_uri = "/graphiql"\nlistening_address = "0.0.0.0:8003"\ngraphql_uri = "/graphql"\nworkers = 0 # if 0, uses number of available logical cpu as threads count.\nmaxconn = 25000\nmax_payload_size = 1048576\n\n[mempool]\npool_size = 20000\nbroadcast_txs_size = 200\nbroadcast_txs_interval = 200\n\n[executor]\nlight = false\n\n[logger]\nfilter = "info"\nlog_to_console = true\nconsole_show_file_and_line = false\nlog_path = "logs/"\nlog_to_file = true\nmetrics = true\n# you can specify log level for modules with config below\n# modules_level = { "overlord::state::process" = "debug", core_consensus = "error" }\n'))),Object(r.b)("p",null,"In these case , we name the generated file ",Object(r.b)("inlineCode",{parentName:"p"},"config-alice.toml"),", ",Object(r.b)("inlineCode",{parentName:"p"},"config-bob.toml"),", ",Object(r.b)("inlineCode",{parentName:"p"},"config-ben.toml"),", ",Object(r.b)("inlineCode",{parentName:"p"},"config-bill.toml")," under ",Object(r.b)("inlineCode",{parentName:"p"},"devtools/chain"),".")),Object(r.b)("li",null,Object(r.b)("h2",{id:"run-this-network"},"Run this network"),Object(r.b)("p",null,"You've completed all the necessary prep work and you're now ready to launch your chain. We can see these files in our folder:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"- devtools\n  - chain\n    - config-alice.toml\n    - config-bob.toml\n    - config-ben.toml\n    - config-bill.toml\n    - genesis.toml\n")),Object(r.b)("h3",{id:"alice-starts-her-node--first"},"Alice Starts her node  first."),Object(r.b)("p",null,"Alice, as the bootstrap node, starts her node firstly by running following command\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"CONFIG=./devtools/chain/config-alice.toml GENESIS=./devtools/chain/genesis.toml cargo run --example muta-chain --release\n")),Object(r.b)("h3",{id:"bob-ben-and-bill-join"},"Bob, Ben and Bill Join"),Object(r.b)("p",null,"For Bob, run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"CONFIG=./devtools/chain/config-bob.toml GENESIS=./devtools/chain/genesis.toml cargo run --example muta-chain --release\n")),Object(r.b)("p",null,"For Ben, run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"CONFIG=./devtools/chain/config-ben.toml GENESIS=./devtools/chain/genesis.toml cargo run --example muta-chain --release\n")),Object(r.b)("p",null,"For Bill, run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",Object(a.a)({parentName:"pre"},{}),"CONFIG=./devtools/chain/config-bill.toml GENESIS=./devtools/chain/genesis.toml cargo run --example muta-chain --release\n")),Object(r.b)("p",null,"You should see the console outputs something as follows:"),Object(r.b)("p",null,Object(r.b)("img",Object(a.a)({parentName:"p"},{src:"/docs-img/private-network.png",alt:null}))),Object(r.b)("p",null,"Congratulations! You've started your own blockchain!")))),Object(r.b)("h2",{id:"next-step"},"Next Step"),Object(r.b)("p",null,"In this tutorial you've learned to generate your own keypairs, create a genesis block, config your node, and start a multi-node network based on your custom configuration."))}b.isMDXComponent=!0},349:function(e,n,t){"use strict";t.d(n,"a",(function(){return b})),t.d(n,"b",(function(){return f}));var a=t(0),o=t.n(a);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function i(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?i(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):i(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,o=function(e,n){if(null==e)return{};var t,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||(o[t]=e[t]);return o}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)t=r[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(o[t]=e[t])}return o}var s=o.a.createContext({}),d=function(e){var n=o.a.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):c({},n,{},e)),t},b=function(e){var n=d(e.components);return o.a.createElement(s.Provider,{value:n},e.children)},p={inlineCode:"code",wrapper:function(e){var n=e.children;return o.a.createElement(o.a.Fragment,{},n)}},u=Object(a.forwardRef)((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,i=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=d(t),u=a,f=b["".concat(i,".").concat(u)]||b[u]||p[u]||r;return t?o.a.createElement(f,c({ref:n},s,{components:t})):o.a.createElement(f,c({ref:n},s))}));function f(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,i=new Array(r);i[0]=u;var c={};for(var l in n)hasOwnProperty.call(n,l)&&(c[l]=n[l]);c.originalType=e,c.mdxType="string"==typeof e?e:a,i[1]=c;for(var s=2;s<r;s++)i[s]=t[s];return o.a.createElement.apply(null,i)}return o.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},350:function(e,n,t){var a;!function(){"use strict";var t={}.hasOwnProperty;function o(){for(var e=[],n=0;n<arguments.length;n++){var a=arguments[n];if(a){var r=typeof a;if("string"===r||"number"===r)e.push(a);else if(Array.isArray(a)&&a.length){var i=o.apply(null,a);i&&e.push(i)}else if("object"===r)for(var c in a)t.call(a,c)&&a[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(a=function(){return o}.apply(n,[]))||(e.exports=a)}()},368:function(e,n,t){"use strict";var a=t(375),o=t(57);function r(e,n){return n.encode?n.strict?a(e):encodeURIComponent(e):e}n.extract=function(e){return e.split("?")[1]||""},n.parse=function(e,n){var t=function(e){var n;switch(e.arrayFormat){case"index":return function(e,t,a){n=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),n?(void 0===a[e]&&(a[e]={}),a[e][n[1]]=t):a[e]=t};case"bracket":return function(e,t,a){n=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),n?void 0!==a[e]?a[e]=[].concat(a[e],t):a[e]=[t]:a[e]=t};default:return function(e,n,t){void 0!==t[e]?t[e]=[].concat(t[e],n):t[e]=n}}}(n=o({arrayFormat:"none"},n)),a=Object.create(null);return"string"!=typeof e?a:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var n=e.replace(/\+/g," ").split("="),o=n.shift(),r=n.length>0?n.join("="):void 0;r=void 0===r?null:decodeURIComponent(r),t(decodeURIComponent(o),r,a)})),Object.keys(a).sort().reduce((function(e,n){var t=a[n];return Boolean(t)&&"object"==typeof t&&!Array.isArray(t)?e[n]=function e(n){return Array.isArray(n)?n.sort():"object"==typeof n?e(Object.keys(n)).sort((function(e,n){return Number(e)-Number(n)})).map((function(e){return n[e]})):n}(t):e[n]=t,e}),Object.create(null))):a},n.stringify=function(e,n){var t=function(e){switch(e.arrayFormat){case"index":return function(n,t,a){return null===t?[r(n,e),"[",a,"]"].join(""):[r(n,e),"[",r(a,e),"]=",r(t,e)].join("")};case"bracket":return function(n,t){return null===t?r(n,e):[r(n,e),"[]=",r(t,e)].join("")};default:return function(n,t){return null===t?r(n,e):[r(n,e),"=",r(t,e)].join("")}}}(n=o({encode:!0,strict:!0,arrayFormat:"none"},n));return e?Object.keys(e).sort().map((function(a){var o=e[a];if(void 0===o)return"";if(null===o)return r(a,n);if(Array.isArray(o)){var i=[];return o.slice().forEach((function(e){void 0!==e&&i.push(t(a,e,i.length))})),i.join("&")}return r(a,n)+"="+r(o,n)})).filter((function(e){return e.length>0})).join("&"):""}},375:function(e,n,t){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},378:function(e,n,t){"use strict";var a=t(0),o=t.n(a),r=(t(350),t(368)),i=t.n(r);t(137);n.a=function(e){var n=e.children,t=e.headingDepth,r="undefined"!=typeof window?window.location:null,c={title:"Tutorial on "+r+" failed",body:"The tutorial on:\n\n"+r+"\n\nHere's what went wrong:\n\n\x3c!-- Insert command output and details. Thank you for reporting! :) --\x3e"},l="https://github.com/nervosnetwork/muta-docs/issues/new?"+i.a.stringify(c),s=Object(a.useState)(null),d=s[0],b=s[1];return o.a.createElement("div",{className:"steps steps--h"+t},n,!d&&o.a.createElement("div",{className:"steps--feedback"},"How was it? Did this tutorial work?\xa0\xa0",o.a.createElement("span",{className:"button button--sm button--primary",onClick:function(){return b("yes")}},"Yes"),"\xa0\xa0",o.a.createElement("a",{href:l,target:"_blank",className:"button button--sm button--primary"},"No")),"yes"==d&&o.a.createElement("div",{className:"steps--feedback steps--feedback--success"},"Thanks! If you're enjoying Muta please consider ",o.a.createElement("a",{href:"https://github.com/nervosnetwork/muta/",target:"_blank"},"starring our Github repo"),"."))}}}]);