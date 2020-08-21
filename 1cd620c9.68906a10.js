(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{181:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var r=a(1),n=a(9),b=(a(0),a(349)),c={title:"\u8282\u70b9\u8fd0\u884c\u914d\u7f6e",description:"The fundamental Muta concepts. A great place to start learning about Muta."},l={id:"version-0.2.0-beta.4/docs_zh/setup/node-config",title:"\u8282\u70b9\u8fd0\u884c\u914d\u7f6e",description:"The fundamental Muta concepts. A great place to start learning about Muta.",source:"@site/versioned_docs/version-0.2.0-beta.4/docs_zh/setup/node-config.md",permalink:"/docs/docs_zh/setup/node-config",editUrl:"https://github.com/nervosnetwork/muta-docs/edit/master/versioned_docs/version-0.2.0-beta.4/docs_zh/setup/node-config.md",version:"0.2.0-beta.4",sidebar:"version-0.2.0-beta.4/docs_zh",previous:{title:"\u521b\u4e16\u5757\u914d\u7f6e",permalink:"/docs/docs_zh/setup/genesis-config"},next:{title:"\u9879\u76ee\u914d\u7f6e",permalink:"/docs/docs_zh/setup/cargo-config"}},i=[{value:"Overview",id:"overview",children:[]},{value:"Full list of node running parameters",id:"full-list-of-node-running-parameters",children:[{value:"Local parameters",id:"local-parameters",children:[]},{value:"GraphQL parameters",id:"graphql-parameters",children:[]}]},{value:"Network parameters",id:"network-parameters",children:[]},{value:"Network bootstraps node parameters",id:"network-bootstraps-node-parameters",children:[]},{value:"Mempool parameters",id:"mempool-parameters",children:[]},{value:"Executor parameters",id:"executor-parameters",children:[]},{value:"Logger parameters",id:"logger-parameters",children:[{value:"Rocksdb parameters",id:"rocksdb-parameters",children:[]},{value:"APM parameters",id:"apm-parameters",children:[]}]}],O={rightToc:i};function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(b.b)("wrapper",Object(r.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(b.b)("p",null,"In this section we will understand how to customize node running parameters in ",Object(b.b)("inlineCode",{parentName:"p"},"devtools/chain/genesis.toml")," which only affect individual nodes in a network. Different nodes can set their own parameters depending on their operation environment."),Object(b.b)("h2",{id:"overview"},"Overview"),Object(b.b)("p",null,"Let's take a look at ",Object(b.b)("inlineCode",{parentName:"p"},"devtools/chain/config.toml")," ."),Object(b.b)("pre",null,Object(b.b)("code",Object(r.a)({parentName:"pre"},{}),'# crypto\nprivkey = "0x5ec982173d54d830b6789cbbbe43eaa2853a5ff752d1ebc1b266cf9790314f8a"\n\n# db config\ndata_path = "./devtools/chain/data"\n\n[graphql]\nlistening_address = "0.0.0.0:8000"\ngraphql_uri = "/graphql"\ngraphiql_uri = "/graphiql"\nworkers = 0 # if 0, uses number of available logical cpu as threads count.\nmaxconn = 25000\nmax_payload_size = 1048576\n\n[network]\nlistening_address = "0.0.0.0:1337"\nrpc_timeout = 10\n\n[consensus]\nsync_txs_chunk_size = 5000\n\n[[network.bootstraps]]\npeer_id = "QmTEJkB5QKWsEq37huryZZfVvqBKb54sHnKn9TQcA6j3n9"\naddress = "0.0.0.0:1888"\n\n[mempool]\npool_size = 20000\nbroadcast_txs_size = 200\nbroadcast_txs_interval = 200\n\n[executor]\nlight = false\ntriedb_cache_size = 2000\n\n[logger]\nfilter = "info"\nlog_to_console = true\nconsole_show_file_and_line = false\nlog_path = "logs/"\nlog_to_file = true\nmetrics = true\n# you can specify log level for modules with config below\n# modules_level = { "overlord::state::process" = "debug", core_consensus = "error" }\n\n[rocksdb]\nmax_open_files = 64\n\n# [apm]\n# service_name = "muta"\n# tracing_address = "127.0.0.1:6831"\n# tracing_batch_size = 50\n')),Object(b.b)("p",null,"Let\u2019s go line-by-line and understand what each parameter means."),Object(b.b)("h2",{id:"full-list-of-node-running-parameters"},"Full list of node running parameters"),Object(b.b)("h3",{id:"local-parameters"},"Local parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"privkey")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8282\u70b9\u79c1\u94a5\uff0c\u8282\u70b9\u7684\u552f\u4e00\u6807\u8bc6\uff0c\u5728\u4f5c\u4e3a bootstraps \u8282\u70b9\u65f6\uff0c\u9700\u8981\u7ed9\u51fa\u5730\u5740\u548c\u8be5\u79c1\u94a5\u5bf9\u5e94\u7684\u516c\u94a5\u8ba9\u5176\u4ed6\u8282\u70b9\u8fde\u63a5\uff1b\u5982\u679c\u662f\u51fa\u5757\u8282\u70b9\uff0c\u8be5\u79c1\u94a5\u5bf9\u5e94\u7684\u5730\u5740\u9700\u8981\u5728 consensus verifier_list \u4e2d"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"data_path")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u94fe\u6570\u636e\u6240\u5728\u76ee\u5f55"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"graphql-parameters"},"GraphQL parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"listening_address")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GraphQL \u76d1\u542c\u5730\u5740"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"127.0.0.1:8000"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"graphql_uri")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GraphQL \u670d\u52a1\u8bbf\u95ee\u8def\u5f84"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/graphql"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"graphiql_uri")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"GraphiQL \u8bbf\u95ee\u8def\u5f84"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"/graphiql"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"workers")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5904\u7406 http \u7684\u7ebf\u7a0b\u6570\u91cf\uff0c\u586b 0 \u7684\u8bdd\uff0c\u4f1a\u9ed8\u8ba4\u6309 CPU \u7684\u6838\u6570"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"0"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"maxconn")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u6700\u5927\u8fde\u63a5\u6570"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"25000"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"max_payload_size")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u6bcf\u4e2a\u8bf7\u6c42\u5141\u8bb8\u7684\u6700\u5927 bytes \u6570"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"1048576"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"tls")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u662f\u5426\u5f00\u542f tls"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"none"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"tls.private_key_file_path")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TLS \u8bc1\u4e66\u5bf9\u5e94\u7684\u79c1\u94a5"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"tls.certificate_chain_file_path")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TLS    \u8bc1\u4e66"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h2",{id:"network-parameters"},"Network parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"listening_address")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u94fe p2p \u7f51\u7edc\u76d1\u542c\u5730\u5740"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"rpc_timeout")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"RPC \u8c03\u7528\uff08\u4f8b\u5982\u4ece\u5176\u5b83\u8282\u70b9\u62c9\u4ea4\u6613\uff09\u8d85\u65f6\u65f6\u95f4\uff0c\u5355\u4f4d\u4e3a\u79d2"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"inbound_conn_limit")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8fde\u5165\u7c7b\u578b\u7684\u8fde\u63a5\u5141\u8bb8\u7684\u6700\u5927\u6570\u91cf\uff0c\u8fde\u51fa\u7684\u6700\u5927\u6570\u91cf\u7531\u6700\u5927\u8fde\u63a5\u6570\u51cf\u53bb\u672c\u914d\u7f6e\u9879\u7684\u503c"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"20"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h2",{id:"network-bootstraps-node-parameters"},"Network bootstraps node parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"peer_id")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u4ece\u516c\u94a5\u54c8\u5e0c\u5230 base58 \u7684\u4e00\u4e2a peer id"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"address")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u7f51\u7edc\u5730\u5740"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h2",{id:"mempool-parameters"},"Mempool parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"pool_size")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u4ea4\u6613\u6c60\u5927\u5c0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"broadcast_txs_size")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u4e00\u6b21\u6279\u91cf\u5e7f\u64ad\u7684\u4ea4\u6613\u6570\u91cf"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"broadcast_txs_interval")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u6bcf\u6b21\u5e7f\u64ad\u4ea4\u6613\u7684\u65f6\u95f4\u95f4\u9694\uff0c\u5355\u4f4d ms"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h2",{id:"executor-parameters"},"Executor parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"light")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u8bbe\u4e3a true \u65f6\uff0c\u8282\u70b9\u5c06\u53ea\u4fdd\u5b58\u6700\u65b0\u9ad8\u5ea6\u7684 state"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"triedb_cache_size")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"TrieDB \u7684\u7f13\u5b58\u5927\u5c0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u65e0\u9ed8\u8ba4\u503c\uff0c\u63a8\u83502000"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h2",{id:"logger-parameters"},"Logger parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"filter")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5168\u5c40\u65e5\u5fd7\u7ea7\u522b"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"log_to_console")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u662f\u5426\u8f93\u51fa\u65e5\u5fd7\u5230 console\uff0c\u751f\u4ea7\u73af\u5883\u5efa\u8bae\u8bbe\u4e3a false"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"console_show_file_and_line")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5f53 ",Object(b.b)("inlineCode",{parentName:"td"},"log_to_console")," \u548c\u672c\u914d\u7f6e\u90fd\u7f6e\u4e3a true \u65f6\uff0cconsole \u8f93\u51fa\u7684\u65e5\u5fd7\u91cc\u4f1a\u5305\u542b\u65e5\u5fd7\u6253\u5370\u5904\u7684\u6587\u4ef6\u548c\u884c\u6570\u3002\u672c\u5730\u901a\u8fc7\u65e5\u5fd7\u8c03\u8bd5\u65f6\u6709\u7528\uff0c\u4e00\u822c\u53ef\u4ee5\u8bbe\u4e3a false\u3002"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"log_to_file")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u662f\u5426\u8f93\u51fa\u65e5\u5fd7\u5230\u6587\u4ef6"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"metrics")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u662f\u5426\u8f93\u51fa metrics\u3002logger \u6a21\u5757\u4e2d\u6709\u4e13\u95e8\u7684 metrics \u8f93\u51fa\u51fd\u6570\uff0c\u5982\u6709\u9700\u8981\uff0c\u53ef\u4ee5\u7528\u6765\u8f93\u51fa metrics \u65e5\u5fd7\uff0c\u4e0d\u53d7\u5168\u5c40\u65e5\u5fd7\u7ea7\u522b\u7684\u5f71\u54cd\uff0c\u4e14\u5bf9\u5e94\u7684\u65e5\u5fd7\u4f1a\u8f93\u51fa\u5230\u4e13\u95e8\u7684\u6587\u4ef6\u3002"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"log_path")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u4f1a\u5728\u8be5\u8def\u5f84\u751f\u6210\u4e24\u4e2a\u65e5\u5fd7\u6587\u4ef6\uff1amuta.log \u548c metrics.log\u3002metrics.log\u4e2d\u5305\u542b\u4e86\u4e13\u95e8\u7684 metrics \u65e5\u5fd7\uff0cmuta.log \u4e2d\u5305\u542b\u4e86\u5176\u5b83\u6240\u6709 log \u8f93\u51fa\u3002"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"})),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"rocksdb-parameters"},"Rocksdb parameters"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"max_open_files ")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"rocksdb \u6700\u5927\u6253\u5f00\u6587\u4ef6\u4e2a\u6570\uff0c\u5373 fd"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"64"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))),Object(b.b)("h3",{id:"apm-parameters"},"APM parameters"),Object(b.b)("p",null,"application performace monitor\uff0c\u7528\u4ee5\u76d1\u63a7\u7cfb\u7edf\u5168\u94fe\u8def\u6027\u80fd"),Object(b.b)("table",null,Object(b.b)("thead",{parentName:"table"},Object(b.b)("tr",{parentName:"thead"},Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Parameter"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Description"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"}),"Default"),Object(b.b)("th",Object(r.a)({parentName:"tr"},{align:"left"})))),Object(b.b)("tbody",{parentName:"table"},Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"service_name")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u9700\u8981\u76d1\u63a7\u7684\u670d\u52a1"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'"muta"'),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"tracing_address")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u9700\u8981\u5c06\u76d1\u63a7\u6570\u636e\u63a8\u9001\u81f3\u670d\u52a1\u5668\u7684\u5730\u5740"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),'"127.0.0.1:6831"'),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))),Object(b.b)("tr",{parentName:"tbody"},Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),Object(b.b)("inlineCode",{parentName:"td"},"tracing_batch_size")),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"\u5206\u6279\u63a8\u9001\uff0c\u6bcf\u4e00\u6b21\u5206\u6279\u7684\u5927\u5c0f"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}),"50"),Object(b.b)("td",Object(r.a)({parentName:"tr"},{align:"left"}))))))}j.isMDXComponent=!0},349:function(e,t,a){"use strict";a.d(t,"a",(function(){return p})),a.d(t,"b",(function(){return o}));var r=a(0),n=a.n(r);function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,r)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,r,n=function(e,t){if(null==e)return{};var a,r,n={},b=Object.keys(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);for(r=0;r<b.length;r++)a=b[r],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),j=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},p=function(e){var t=j(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var a=e.components,r=e.mdxType,b=e.originalType,c=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),p=j(a),m=r,o=p["".concat(c,".").concat(m)]||p[m]||d[m]||b;return a?n.a.createElement(o,l({ref:t},O,{components:a})):n.a.createElement(o,l({ref:t},O))}));function o(e,t){var a=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var b=a.length,c=new Array(b);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:r,c[1]=l;for(var O=2;O<b;O++)c[O]=a[O];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);