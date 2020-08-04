(window.webpackJsonp=window.webpackJsonp||[]).push([[83],{234:function(e,t,a){"use strict";a.r(t),a.d(t,"frontMatter",(function(){return c})),a.d(t,"metadata",(function(){return l})),a.d(t,"rightToc",(function(){return i})),a.d(t,"default",(function(){return j}));var b=a(1),n=a(9),r=(a(0),a(278)),c={title:"\u521b\u4e16\u5757\u914d\u7f6e",description:"The fundamental Muta concepts. A great place to start learning about Muta."},l={id:"docs_zh/setup/genesis-config",title:"\u521b\u4e16\u5757\u914d\u7f6e",description:"The fundamental Muta concepts. A great place to start learning about Muta.",source:"@site/docs/docs_zh/setup/genesis-config.md",permalink:"/docs/docs_zh/setup/genesis-config",editUrl:"https://github.com/nervosnetwork/muta/edit/master/website/docs/docs_zh/setup/genesis-config.md",sidebar:"docs_zh",previous:{title:"\u914d\u7f6e\u4ecb\u7ecd",permalink:"/docs/docs_zh/setup/config"},next:{title:"\u8282\u70b9\u8fd0\u884c\u914d\u7f6e",permalink:"/docs/docs_zh/setup/node-config"}},i=[{value:"\u6982\u89c8",id:"\u6982\u89c8",children:[]},{value:"\u53c2\u6570\u89e3\u91ca",id:"\u53c2\u6570\u89e3\u91ca",children:[{value:"\u521d\u59cb\u5316\u53c2\u6570",id:"\u521d\u59cb\u5316\u53c2\u6570",children:[]},{value:"Asset service \u53c2\u6570",id:"asset-service-\u53c2\u6570",children:[]},{value:"Metadata service \u53c2\u6570",id:"metadata-service-\u53c2\u6570",children:[]}]}],O={rightToc:i};function j(e){var t=e.components,a=Object(n.a)(e,["components"]);return Object(r.b)("wrapper",Object(b.a)({},O,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("p",null,"\u672c\u6587\u6863\u5c06\u8be6\u7ec6\u4ecb\u7ecd\u5982\u4f55\u914d\u7f6e\u521b\u4e16\u5757\uff0c\u914d\u7f6e\u6587\u4ef6\u4e3a ",Object(r.b)("inlineCode",{parentName:"p"},"devtools/chain/genesis.toml")," \u3002"),Object(r.b)("h2",{id:"\u6982\u89c8"},"\u6982\u89c8"),Object(r.b)("p",null,"\u4e00\u6761\u94fe\u7684\u4e0d\u540c\u8282\u70b9\u7684\u521b\u4e16\u5757\u6587\u4ef6\u5fc5\u987b\u662f\u76f8\u540c\u7684\u3002\u94fe\u4e00\u542f\u52a8\uff0c\u521b\u4e16\u5757\u7684\u8bb8\u591a\u914d\u7f6e\u5c31\u4e0d\u80fd\u6539\u53d8\u4e86\uff0c\u5728\u4e0b\u9762\u7684\u53c2\u6570\u89e3\u91ca\u91cc\uff0c\u6211\u4eec\u4f1a\u5c06\u53ef\u4ee5\u6539\u53d8\u7684\u53c2\u6570\u6807\u6ce8\u4e3a\u201d\u53ef\u5347\u7ea7\u201c\u3002"),Object(r.b)("p",null,"\u8ba9\u6211\u4eec\u5148\u6765\u770b\u4e0b ",Object(r.b)("inlineCode",{parentName:"p"},"devtools/chain/genesis.toml"),"\uff1a"),Object(r.b)("pre",null,Object(r.b)("code",Object(b.a)({parentName:"pre"},{}),'timestamp = 0\nprevhash = "0x44915be5b6c20b0678cf05fcddbbaa832e25d7e6ac538784cd5c24de00d47472"\n\n[[services]]\nname = "asset"\npayload = \'\'\'\n{\n    "id": "0xf56924db538e77bb5951eb5ff0d02b88983c49c45eea30e8ae3e7234b311436c",\n    "name": "MutaToken",\n    "symbol": "MT",\n    "supply": 320000011,\n    "issuer": "0xf8389d774afdad8755ef8e629e5a154fddc6325a"\n}\n\'\'\'\n\n[[services]]\nname = "metadata"\npayload = \'\'\'\n{\n    "chain_id": "0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036",\n    "common_ref": "0x703873635a6b51513451",\n    "timeout_gap": 20,\n    "cycles_limit": 4294967295,\n    "cycles_price": 1,\n    "interval": 3000,\n    "verifier_list": [\n        {\n            "bls_pub_key": "0x04188ef9488c19458a963cc57b567adde7db8f8b6bec392d5cb7b67b0abc1ed6cd966edc451f6ac2ef38079460eb965e890d1f576e4039a20467820237cda753f07a8b8febae1ec052190973a1bcf00690ea8fc0168b3fbbccd1c4e402eda5ef22",\n            "address": "0xf8389d774afdad8755ef8e629e5a154fddc6325a",\n            "propose_weight": 1,\n            "vote_weight": 1\n        }\n    ],\n    "propose_ratio": 15,\n    "prevote_ratio": 10,\n    "precommit_ratio": 10,\n    "brake_ratio": 7,\n    "tx_num_limit": 20000,\n    "max_tx_size": 1024\n}\n\'\'\'\n')),Object(r.b)("h2",{id:"\u53c2\u6570\u89e3\u91ca"},"\u53c2\u6570\u89e3\u91ca"),Object(r.b)("h3",{id:"\u521d\u59cb\u5316\u53c2\u6570"},"\u521d\u59cb\u5316\u53c2\u6570"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570\u540d\u79f0"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570\u89e3\u91ca"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"timestamp")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u521b\u4e16\u5757\u7684\u65f6\u95f4\u6233\uff0c\u53ef\u4ee5\u968f\u610f\u8bbe\u7f6e\uff0c\u914d\u7f6e\u6210 0\uff0c\u6216\u8005\u5f53\u5929 0 \u70b9\u7684\u65f6\u95f4\u90fd\u53ef\u4ee5\u3002"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"0"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"prevhash")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53ef\u4ee5\u968f\u610f\u8bbe\u7f6e\uff0c\u53ea\u4f1a\u5f71\u54cd\u67e5\u8be2\u521b\u4e16\u5757\u65f6\u7684\u5b57\u6bb5\u663e\u793a\u3002"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"0x"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))))),Object(r.b)("h3",{id:"asset-service-\u53c2\u6570"},"Asset service \u53c2\u6570"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570\u540d\u79f0"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570\u89e3\u91ca"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"id")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8d44\u4ea7\u7684\u552f\u4e00 id\uff0c\u5efa\u8bae\u8bbe\u7f6e\u6210 hash \uff0c\u4ee5\u514d\u5728\u4e4b\u540e\u548c\u94fe\u4e0a\u5176\u4ed6\u8d44\u4ea7\u91cd\u590d"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"0"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"name")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8d44\u4ea7\u540d\u5b57"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"0x"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"symbol")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8d44\u4ea7\u7b80\u79f0"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"supply")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8d44\u4ea7\u53d1\u884c\u603b\u91cf"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"issuer")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53d1\u884c\u65b9\u5730\u5740"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))))),Object(r.b)("h3",{id:"metadata-service-\u53c2\u6570"},"Metadata service \u53c2\u6570"),Object(r.b)("table",null,Object(r.b)("thead",{parentName:"table"},Object(r.b)("tr",{parentName:"thead"},Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570\u540d\u79f0"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u53c2\u6570\u89e3\u91ca"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"}),"\u9ed8\u8ba4\u503c"),Object(r.b)("th",Object(b.a)({parentName:"tr"},{align:"left"})))),Object(r.b)("tbody",{parentName:"table"},Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"chain_id")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u94fe\u552f\u4e00 id\uff0c\u5efa\u8bae\u8bbe\u7f6e\u4e3a\u4efb\u610f hash"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"common_ref")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"BLS \u7b7e\u540d\u9700\u8981"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"timeout_gap")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u4ea4\u6613\u6c60\u80fd\u63a5\u53d7\u7684\u6700\u5927\u8d85\u65f6\u5757\u8303\u56f4\u3002\u7528\u6237\u5728\u53d1\u9001\u4ea4\u6613\u7684\u65f6\u5019\uff0c\u9700\u8981\u586b\u5199 ",Object(r.b)("inlineCode",{parentName:"td"},"timeout")," \u5b57\u6bb5\uff0c\u8868\u793a\u5757\u9ad8\u5ea6\u8d85\u8fc7\u8fd9\u4e2a\u503c\u540e\uff0c\u5982\u679c\u8be5\u4ea4\u6613\u8fd8\u6ca1\u6709\u88ab\u6253\u5305\uff0c\u5219\u4ee5\u540e\u90fd\u4e0d\u4f1a\u88ab\u6253\u5305\uff0c\u8fd9\u6837\u53ef\u4ee5\u786e\u4fdd\u4e4b\u524d\u7684\u67d0\u7b14\u4ea4\u6613\u8d85\u65f6\u540e\u4e00\u5b9a\u4f1a\u5931\u8d25\uff0c\u907f\u514d\u7528\u6237\u7684\u4ea4\u6613\u5f88\u957f\u65f6\u95f4\u672a\u88ab\u6253\u5305\u540e\u6362 ",Object(r.b)("inlineCode",{parentName:"td"},"nonce")," \u91cd\u53d1\u4ea4\u6613\uff0c\u7ed3\u679c\u4e24\u7b14\u4ea4\u6613\u90fd\u4e0a\u94fe\u7684\u60c5\u51b5\u3002\u5f53\u7528\u6237\u586b\u5199\u7684 ",Object(r.b)("inlineCode",{parentName:"td"},"timeout")," > ",Object(r.b)("inlineCode",{parentName:"td"},"chain_current_height")," + ",Object(r.b)("inlineCode",{parentName:"td"},"timeout_gap")," \u65f6\uff0c\u4ea4\u6613\u6c60\u4f1a\u62d2\u7edd\u8fd9\u7b14\u4ea4\u6613\u3002\u8003\u8651\u5230\u4e00\u4e9b\u7279\u6b8a\u60c5\u51b5\uff08\u6bd4\u5982\u4e00\u4e9b\u51b7\u94b1\u5305\u5bf9\u4ea4\u6613\u7b7e\u540d\u540e\u8f83\u957f\u65f6\u95f4\u624d\u53d1\u51fa\uff09\uff0c\u8be5\u503c\u53ef\u4ee5\u9002\u5f53\u8c03\u5927"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"20"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"cycles_limit")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"10\u8fdb\u5236\uff0c\u94fe\u7ea7\u522b\u5bf9\u5355\u4e2a\u4ea4\u6613\u53ef\u4ee5\u6d88\u8017\u7684\u6700\u5927 ",Object(r.b)("inlineCode",{parentName:"td"},"cycle")," \u7684\u9650\u5236"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"1000000"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"cycles_price")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6700\u5c0f cycle \u4ef7\u683c\uff0c\u76ee\u524d\u6ca1\u6709\u4f7f\u7528"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"interval")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u51fa\u5757\u95f4\u9694\uff0c\u5355\u4f4d\u4e3a ms\u3002\u5f53\u8bbe\u7f6e\u4e3a 3s \u7684\u65f6\u5019\uff0c\u51fa\u5757\u95f4\u9694\u5e76\u4e0d\u662f\u4e25\u683c\u7684 3s\uff0c\u800c\u662f\u5728 3s \u9644\u8fd1\u6ce2\u52a8\uff0c\u8fd9\u662f\u56e0\u4e3a Overlord \u5171\u8bc6\u5728\u54cd\u5e94\u6027\u4e0a\u7684\u4f18\u5316\u3002\u5f53\u7f51\u7edc\u72b6\u51b5\u8f83\u597d\u7684\u65f6\u5019\uff0c\u4f1a\u5c0f\u4e8e 3s\uff0c\u7f51\u7edc\u60c5\u51b5\u8f83\u5dee\uff0c\u5219\u4f1a\u7565\u5927\u4e8e 3s\u3002"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"3000"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("strong",{parentName:"td"},"verifier_list")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"bls_pub_key")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8282\u70b9\u7684 BLS \u516c\u94a5"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"address")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8282\u70b9\u7684\u5730\u5740"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"})),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"propose_weight")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8282\u70b9\u7684\u51fa\u5757\u6743\u91cd\u3002\u5982\u679c\u6709\u56db\u4e2a\u5171\u8bc6\u8282\u70b9\uff0c\u51fa\u5757\u6743\u91cd\u5206\u522b\u4e3a 1, 2, 3, 4\uff0c\u5219\u7b2c\u4e00\u4e2a\u8282\u70b9\u7684\u51fa\u5757\u6982\u7387\u4e3a 1 / (1 + 2 + 3 + 4)\u3002\u6295\u7968\u6743\u91cd\u7684\u903b\u8f91\u7c7b\u4f3c\u3002"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"vote_weight")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u8282\u70b9\u7684\u6295\u7968\u6743\u91cd"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"1"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"propose_ratio")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"propose \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u51fa\u5757\u65f6\u95f4\u7684\u6bd4\u4f8b\u3002\u4f8b\u5982 propose_ratio \u4e3a 5, interval \u4e3a 3000\uff0c\u5219 propose \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e3a 15 / 10 * 3000 = 4500\uff0c\u5355\u4f4d\u5747\u4e3a\u6beb\u79d2\u3002"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"15"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"prevote_ratio")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"prevote \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u51fa\u5757\u65f6\u95f4\u7684\u6bd4\u4f8b"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"10"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"precommit_ratio")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"precommit \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u51fa\u5757\u65f6\u95f4\u7684\u6bd4\u4f8b"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"10"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"brake_ratio")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"brake \u9636\u6bb5\u7684\u8d85\u65f6\u65f6\u95f4\u4e0e\u51fa\u5757\u65f6\u95f4\u7684\u6bd4\u4f8b"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"7"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"tx_num_limit")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u6bcf\u4e00\u4e2a\u5757\u91cc\u6700\u591a\u53ef\u4ee5\u6253\u5305\u7684\u4ea4\u6613\u6570"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"20000"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))),Object(r.b)("tr",{parentName:"tbody"},Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),Object(r.b)("inlineCode",{parentName:"td"},"max_tx_size")),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"\u5355\u4e2a\u4ea4\u6613\u6700\u5927\u7684\u5b57\u8282\u6570"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}),"1024"),Object(r.b)("td",Object(b.a)({parentName:"tr"},{align:"left"}))))))}j.isMDXComponent=!0},278:function(e,t,a){"use strict";a.d(t,"a",(function(){return d})),a.d(t,"b",(function(){return o}));var b=a(0),n=a.n(b);function r(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function c(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var b=Object.getOwnPropertySymbols(e);t&&(b=b.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,b)}return a}function l(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?c(Object(a),!0).forEach((function(t){r(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):c(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}function i(e,t){if(null==e)return{};var a,b,n=function(e,t){if(null==e)return{};var a,b,n={},r=Object.keys(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||(n[a]=e[a]);return n}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(b=0;b<r.length;b++)a=r[b],t.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(n[a]=e[a])}return n}var O=n.a.createContext({}),j=function(e){var t=n.a.useContext(O),a=t;return e&&(a="function"==typeof e?e(t):l({},t,{},e)),a},d=function(e){var t=j(e.components);return n.a.createElement(O.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return n.a.createElement(n.a.Fragment,{},t)}},m=Object(b.forwardRef)((function(e,t){var a=e.components,b=e.mdxType,r=e.originalType,c=e.parentName,O=i(e,["components","mdxType","originalType","parentName"]),d=j(a),m=b,o=d["".concat(c,".").concat(m)]||d[m]||p[m]||r;return a?n.a.createElement(o,l({ref:t},O,{components:a})):n.a.createElement(o,l({ref:t},O))}));function o(e,t){var a=arguments,b=t&&t.mdxType;if("string"==typeof e||b){var r=a.length,c=new Array(r);c[0]=m;var l={};for(var i in t)hasOwnProperty.call(t,i)&&(l[i]=t[i]);l.originalType=e,l.mdxType="string"==typeof e?e:b,c[1]=l;for(var O=2;O<r;O++)c[O]=a[O];return n.a.createElement.apply(null,c)}return n.a.createElement.apply(null,a)}m.displayName="MDXCreateElement"}}]);