(window.webpackJsonp=window.webpackJsonp||[]).push([[73],{225:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return d}));var n=a(1),r=a(9),b=(a(0),a(278)),c={title:"Node Configuration",description:"The fundamental Muta concepts. A great place to start learning about Muta."},l={id:"setup/node-config",title:"Node Configuration",description:"The fundamental Muta concepts. A great place to start learning about Muta.",source:"@site/docs/setup/node-config.md",permalink:"/docs/setup/node-config",editUrl:"https://github.com/nervosnetwork/muta/edit/master/website/docs/setup/node-config.md",sidebar:"docs",previous:{title:"Genesis Configuration",permalink:"/docs/setup/genesis-config"},next:{title:"Deployment",permalink:"/docs/setup/deploy"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Full list of node running parameters",id:"full-list-of-node-running-parameters",children:[{value:"Local parameters",id:"local-parameters",children:[]},{value:"GraphQL parameters",id:"graphql-parameters",children:[]},{value:"Network parameters",id:"network-parameters",children:[]},{value:"Consensus parameters",id:"consensus-parameters",children:[]},{value:"Network bootstraps node parameters",id:"network-bootstraps-node-parameters",children:[]},{value:"Mempool parameters",id:"mempool-parameters",children:[]},{value:"Executor parameters",id:"executor-parameters",children:[]},{value:"Logger parameters",id:"logger-parameters",children:[]},{value:"Rocksdb parameters",id:"rocksdb-parameters",children:[]}]},{value:"Log sample",id:"log-sample",children:[]}],o={rightToc:i};function d(e){var t=e.components,a=Object(r.a)(e,["components"]);return Object(b.b)("wrapper",Object(n.a)({},o,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"In this section we will understand how to customize node running parameters in ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nervosnetwork/muta/blob/master/devtools/chain/config.toml"}),Object(b.b)("inlineCode",{parentName:"a"},"devtools/chain/config.toml"))," which only affect individual nodes in a network. Different nodes can set their own parameters depending on their operation environment."),Object(b.b)("h2",{id:"overview"},"Overview"),Object(b.b)("p",null,"Let's take a look at ",Object(b.b)("a",Object(n.a)({parentName:"p"},{href:"https://github.com/nervosnetwork/muta/blob/master/devtools/chain/config.toml"}),Object(b.b)("inlineCode",{parentName:"a"},"devtools/chain/config.toml")),"."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),'# crypto\nprivkey = "0x5ec982173d54d830b6789cbbbe43eaa2853a5ff752d1ebc1b266cf9790314f8a"\n\n# db config\ndata_path = "./devtools/chain/data"\n\n[graphql]\nlistening_address = "0.0.0.0:8000"\ngraphql_uri = "/graphql"\ngraphiql_uri = "/graphiql"\nworkers = 0 # if 0, uses number of available logical cpu as threads count.\nmaxconn = 25000\nmax_payload_size = 1048576\n\n[network]\nlistening_address = "0.0.0.0:1337"\nrpc_timeout = 10\ninbound_conn_limit = 20\n\n[consensus]\nsync_txs_chunk_size = 5000\n\n[[network.bootstraps]]\npeer_id = "QmTEJkB5QKWsEq37huryZZfVvqBKb54sHnKn9TQcA6j3n9"\naddress = "0.0.0.0:1888"\n\n[mempool]\npool_size = 20000\nbroadcast_txs_size = 200\nbroadcast_txs_interval = 200\n\n[executor]\nlight = false\n\n[logger]\nfilter = "info"\nlog_to_console = true\nconsole_show_file_and_line = false\nlog_path = "logs/"\nlog_to_file = true\nmetrics = true\n# you can specify log level for modules with config below\n# modules_level = { "overlord::state::process" = "debug", core_consensus = "error" }\n\n[rocksdb]\nmax_open_files = 64\n\n# [apm]\n# service_name = "muta"\n# tracing_address = "127.0.0.1:6831"\n# tracing_batch_size = 50\n')),Object(b.b)("p",null,"Let\u2019s go line-by-line and understand what each parameter means."),Object(b.b)("h2",{id:"full-list-of-node-running-parameters"},"Full list of node running parameters"),Object(b.b)("h3",{id:"local-parameters"},"Local parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"privkey")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Private key of the node, also the only identifier of the node, used when bootstraps the node. In order for other nodes to connect, it needs to expose address and corresponding public key. If it's a block producing node, its address needs to be included in consensus ",Object(b.b)("inlineCode",{parentName:"td"},"verifier_list")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"data_path")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"where chain data is stored"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"graphql-parameters"},"GraphQL parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"listening_address")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"listening address of GraphQL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"graphql_uri")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL to access GraphQL service"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"graphiql_uri")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"URL to access GraphiQL"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"workers")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number of thread to handle http request. If 0 is entered, will default use number of CPU core"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"0"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"maxconn")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"max number of connection"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"25000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"max_payload_size")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Size of transaction after serialization, maximum limit in bytes"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"1048576"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"network-parameters"},"Network parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"listening_address")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"listening address of the chain"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"rpc_timeout")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"timeout of RPC call (Ex: pull transaction from other nodes), measured in second"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"10"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"inbound_conn_limit")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum number of connections allowed for incoming connections and the maximum number of outgoing connections is the maximum number of connections minus the value of this configuration item."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"20"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"consensus-parameters"},"Consensus parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"sync_txs_chunk_size")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"Get transactions from the remote end in batches during synchronization, number of transactions per batch"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"network-bootstraps-node-parameters"},"Network bootstraps node parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"peer_id")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"node id, calculated from the public key"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"address")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"network address"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"mempool-parameters"},"Mempool parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"pool_size")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"size of mempool"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"2000"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"broadcast_txs_size")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"number of transaction in one broadcast"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"200"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"broadcast_txs_interval")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"interval between each broadcast, measured in millisecond"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"200"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"executor-parameters"},"Executor parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"light")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"when set to true, node will only keep the state of latest block hight"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"false"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"logger-parameters"},"Logger parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"log level globally"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),'"info"'),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"log_to_console")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"whether output the log to console, it's recommended to set to false in production"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"console_show_file_and_line")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"when ",Object(b.b)("inlineCode",{parentName:"td"},"log_to_console")," and ",Object(b.b)("inlineCode",{parentName:"td"},"console_show_file_and_line")," are both true, log will include file and number of lines"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"false"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"log_to_file")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"whether output log to file"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"metrics")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"whether output metrics. There are metric functions which is independent from global log level in logger module, and if it's needed, it can be used to output metrics to specific files."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"true"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"rocksdb-parameters"},"Rocksdb parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(n.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"max_open_files ")),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"The maximum value of file descriptors (FD) allowed to be opened by rocksdb."),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}),"64"),Object(b.b)("td",Object(n.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h2",{id:"log-sample"},"Log sample"),Object(b.b)("p",null,"All logs are in json format, each message is a nested json structure."),Object(b.b)("pre",null,Object(b.b)("code",Object(n.a)({parentName:"pre"},{}),'$ tail logs/muta.log -n 1\n{"time":"2020-02-12T17:11:04.187149+08:00","message":"update_after_exec cache: height 2, exec height 0, prev_hash 0x039d2f399864dba72c5b0f26ec989cba9bdcb9fca23ce48c8bc8c4398cb2ad0b,latest_state_root 0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772 state root [0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772], receipt root [], confirm root [], cycle used []","module_path":"core_consensus::status","file":"/Users/huwenchao/.cargo/git/checkouts/muta-cad92efdb84944c1/34d052a/core/consensus/src/status.rs","line":114,"level":"INFO","target":"core_consensus::status","thread":"main","thread_id":4576796096,"mdc":{}}\n\n$ tail logs/metrics.log -n 1\n{"time":"2020-02-12T17:11:04.187240+08:00","message":"{\\"timestamp\\":1581498664187,\\"event_name\\":\\"update_exec_info\\",\\"event_type\\":\\"custom\\",\\"tag\\":{\\"confirm_root\\":\\"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\\",\\"exec_height\\":1,\\"receipt_root\\":\\"0x56e81f171bcc55a6ff8345e692c0f86e5b48e01b996cadc001622fb5e363b421\\",\\"state_root\\":\\"0xde37f62c1121e283ad52fe5b3e260c899f03d42da29fdfe08e82655185d9b772\\"},\\"metadata\\":{\\"address\\":\\"0xf8389d774afdad8755ef8e629e5a154fddc6325a\\",\\"v\\":\\"0.3.0\\"}}","module_path":"core_consensus::trace","file":"/Users/huwenchao/.cargo/git/checkouts/muta-cad92efdb84944c1/34d052a/core/consensus/src/trace.rs","line":24,"level":"TRACE","target":"metrics","thread":"main","thread_id":4576796096,"mdc":{}}\n')))}d.isMDXComponent=!0},278:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return j}));var n=a(0),r=a.n(n);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,n,r=function(e,t){if(null==e)return{};var a,n,r={},b=Object.keys(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||(r[a]=e[a]);return r}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(n=0;n<b.length;n++)a=b[n],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var o=r.a.createContext({}),d=function(e){var t=r.a.useContext(o),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=d(e.components);return r.a.createElement(o.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.a.createElement(r.a.Fragment,{},t)}},O=Object(n.forwardRef)((function(e,t){var a=e.components,n=e.mdxType,b=e.originalType,c=e.parentName,o=i(e,["components","mdxType","originalType","parentName"]),p=d(a),O=n,j=p["".concat(c,".").concat(O)]||p[O]||m[O]||b;return a?r.a.createElement(j,l({ref:t},o,{components:a})):r.a.createElement(j,l({ref:t},o))}));function j(e,t){var a=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var b=a.length,c=new Array(b);c[0]=O;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:n,c[1]=l;for(var o=2;o<b;o++)c[o]=a[o];return r.a.createElement.apply(null,c)}return r.a.createElement.apply(null,a)}O.displayName="MDXCreateElement"}}]);