(window.webpackJsonp=window.webpackJsonp||[]).push([[96],{247:function(e,n,t){"use strict";t.r(n),t.d(n,"frontMatter",(function(){return u})),t.d(n,"metadata",(function(){return p})),t.d(n,"rightToc",(function(){return c})),t.d(n,"default",(function(){return b}));var r=t(1),a=t(9),s=(t(0),t(280)),u={title:"Asset Service"},p={id:"docs_zh/dev/service-list/asset-service",title:"Asset Service",description:"Asset service \u662f Huobi Chain \u7684\u5185\u7f6e\u8d44\u4ea7\u6a21\u5757\uff0c\u8d1f\u8d23\u7ba1\u7406\u94fe\u539f\u751f\u8d44\u4ea7\u4ee5\u53ca\u7b2c\u4e09\u65b9\u53d1\u884c\u8d44\u4ea7\u3002",source:"@site/docs/docs_zh/dev/service-list/asset-service.md",permalink:"/docs/docs_zh/dev/service-list/asset-service",editUrl:"https://github.com/nervosnetwork/muta-docs/edit/master/docs/docs_zh/dev/service-list/asset-service.md",sidebar:"docs_zh",previous:{title:"Metadata Service",permalink:"/docs/docs_zh/dev/service-list/metadata-service"},next:{title:"Authorization Service",permalink:"/docs/docs_zh/dev/service-list/auth-service"}},c=[{value:"\u63a5\u53e3",id:"\u63a5\u53e3",children:[]}],o={rightToc:c};function b(e){var n=e.components,t=Object(a.a)(e,["components"]);return Object(s.b)("wrapper",Object(r.a)({},o,t,{components:n,mdxType:"MDXLayout"}),Object(s.b)("p",null,"Asset service \u662f Huobi Chain \u7684\u5185\u7f6e\u8d44\u4ea7\u6a21\u5757\uff0c\u8d1f\u8d23\u7ba1\u7406\u94fe\u539f\u751f\u8d44\u4ea7\u4ee5\u53ca\u7b2c\u4e09\u65b9\u53d1\u884c\u8d44\u4ea7\u3002"),Object(s.b)("ul",null,Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u8d44\u4ea7\u6210\u4e3a\u4e00\u7b49\u516c\u6c11\uff1a\u52a0\u5bc6\u8d44\u4ea7\u4f5c\u4e3a\u533a\u5757\u94fe\u7684\u6838\u5fc3\uff0c\u7406\u5e94\u6210\u4e3a\u4e00\u7b49\u516c\u6c11\u3002Asset \u6a21\u5757\u5229\u7528 Muta \u6846\u67b6\u63d0\u4f9b\u7684 service \u80fd\u529b\uff0c\u4e3a\u6240\u6709\u8d44\u4ea7\u63d0\u4f9b\u94fe\u7ea7\u522b\u7684\u652f\u6301\uff0c\u4e3a\u9762\u5411\u8d44\u4ea7\u7f16\u7a0b\u63d0\u4f9b\u652f\u6301\u3002")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u7b2c\u4e09\u65b9\u53d1\u884c\u8d44\u4ea7\uff1a \u7528\u6237\u53ef\u4ee5\u4f7f\u7528 Asset \u6a21\u5757\u53d1\u884c\u8d44\u4ea7\uff0c\u81ea\u5b9a\u4e49\u8d44\u4ea7\u5c5e\u6027\u548c\u603b\u91cf\u7b49")),Object(s.b)("li",{parentName:"ul"},Object(s.b)("p",{parentName:"li"},"\u8d44\u4ea7\u4e0e\u5408\u7ea6\u4ea4\u4e92\uff1a \u672a\u6765\u53ef\u4ee5\u6253\u901a\u865a\u62df\u673a\u548c\u8d44\u4ea7\u6a21\u5757\uff0c\u4e3a\u8d44\u4ea7\u7684\u5e7f\u6cdb\u4f7f\u7528\u63d0\u4f9b\u652f\u6301"))),Object(s.b)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),Object(s.b)("p",null,"Asset \u6a21\u5757\u91c7\u7528\u7c7b\u4f3c\u4ee5\u592a\u574a ERC-20 \u7684\u63a5\u53e3\u8bbe\u8ba1\uff0c\u4e3b\u8981\u5305\u542b\uff1a"),Object(s.b)("p",null,"1.\u53d1\u884c\u8d44\u4ea7"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"// \u8d44\u4ea7\u6570\u636e\u7ed3\u6784\npub struct Asset {\n    pub id:     Hash,\n    pub name:   String,\n    pub symbol: String,\n    pub admin: Address, // \u8d44\u4ea7\u7684\u7ba1\u7406\u5458\uff0c\u62e5\u6709 mint \u8d44\u4ea7\u7684\u6743\u5229\n    pub supply: u64, // \u53d1\u884c\u91cf\uff1asupply \u4e3a 100\uff0cprecision \u4e3a 1 \u65f6\uff0c\u8868\u793a\u53d1\u884c 10 \u4e2a token\n    pub precision: u64, // \u8d44\u4ea7\u6570\u503c\u7cbe\u5ea6\uff0c1 \u8868\u793a 10 \u7684\u4e00\u6b21\u65b9\uff0c\u4ee5\u6b64\u7c7b\u63a8\n    pub relayable: bool, // \u6807\u8bb0\u8d44\u4ea7\u662f\u5426\u662f relayable \u7684\n}\n\n// \u53d1\u884c\u8d44\u4ea7\u63a5\u53e3\n// \u8d44\u4ea7 ID \u81ea\u52a8\u751f\u6210\uff0c\u786e\u4fdd\u552f\u4e00\nfn create_asset(&mut self, ctx: ServiceContext, payload: CreateAssetPayload) -> ProtocolResult<Asset>;\n\n// \u53d1\u884c\u8d44\u4ea7\u53c2\u6570\npub struct CreateAssetPayload {\n    pub name:       String,\n    pub symbol:     String,\n    pub admin:      Address,\n    pub supply:     u64,\n    pub init_mints: Vec<IssuerWithBalance>, // \u521b\u5efa\u8d44\u4ea7\u65f6\uff0c\u9700\u8981\u540c\u65f6 mint \u64cd\u4f5c\u7684\u8bf7\u6c42\n    pub precision:  u64,\n    pub relayable:  bool,\n}\n")),Object(s.b)("p",null,"2.\u67e5\u8be2\u8d44\u4ea7\u4fe1\u606f"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"// \u67e5\u8be2\u63a5\u53e3\nfn get_asset(&self, ctx: ServiceContext, payload: GetAssetPayload) -> ProtocolResult<Asset>\uff1b\n\n// \u67e5\u8be2\u53c2\u6570\npub struct GetAssetPayload {\n    pub id: Hash, // \u8d44\u4ea7 ID\n}\n")),Object(s.b)("p",null,"3.\u8f6c\u8d26"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),'// \u8f6c\u8d26\u63a5\u53e3\nfn transfer(&mut self, ctx: ServiceContext, payload: TransferPayload) -> ProtocolResult<()>\uff1b\n\n// \u8f6c\u8d26\u53c2\u6570\npub struct TransferPayload {\n    pub asset_id: Hash,\n    pub to:       Address,\n    pub value:    u64,\n    pub memo:     String,\n}\n\n// \u8f6c\u8d26\u4e8b\u4ef6\uff0cname = "TransferAsset"\npub struct TransferEvent {\n    pub asset_id: Hash,\n    pub from:     Address,\n    pub to:       Address,\n    pub value:    u64,\n    pub memo:     String,\n}\n')),Object(s.b)("p",null,"4.\u67e5\u8be2\u4f59\u989d"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"// \u67e5\u8be2\u63a5\u53e3\nfn get_balance(&self, ctx: ServiceContext, payload: GetBalancePayload) -> ProtocolResult<GetBalanceResponse> \n\n// \u67e5\u8be2\u53c2\u6570\npub struct GetBalancePayload {\n    pub asset_id: Hash,\n    pub user:     Address,\n}\n\n// \u8fd4\u56de\u503c\npub struct GetBalanceResponse {\n    pub asset_id: Hash,\n    pub user:     Address,\n    pub balance:  u64,\n}\n")),Object(s.b)("p",null,"5.\u6279\u51c6\u989d\u5ea6"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),'// \u6279\u51c6\u63a5\u53e3\nfn approve(&mut self, ctx: ServiceContext, payload: ApprovePayload) -> ProtocolResult<()>;\n\n// \u6279\u51c6\u53c2\u6570\npub struct ApprovePayload {\n    pub asset_id: Hash,\n    pub to:       Address,\n    pub value:    u64,\n    pub memo:     String,\n}\n\n// \u6279\u51c6\u4e8b\u4ef6\uff0cname = "ApproveAsset"\npub struct ApproveEvent {\n    pub asset_id: Hash,\n    pub grantor:  Address,\n    pub grantee:  Address,\n    pub value:    u64,\n    pub memo:     String,\n}\n')),Object(s.b)("p",null,"6.\u6388\u6743\u8f6c\u8d26"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),'// \u63a5\u53e3\nfn transfer_from(&mut self, ctx: ServiceContext, payload: TransferFromPayload) -> ProtocolResult<()>\uff1b\n\n// \u53c2\u6570\npub struct TransferFromPayload {\n    pub asset_id:  Hash,\n    pub sender:    Address,\n    pub recipient: Address,\n    pub value:     u64,\n    pub memo:      String,\n}\n\n// \u6388\u6743\u8f6c\u8d26\u4e8b\u4ef6\uff0cname = "TransferFrom"\npub struct TransferFromEvent {\n    pub asset_id:  Hash,\n    pub caller:    Address,\n    pub sender:    Address,\n    pub recipient: Address,\n    pub value:     u64,\n    pub memo:      String,\n}\n')),Object(s.b)("p",null,"7.\u67e5\u8be2\u9650\u989d"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"// \u67e5\u8be2\u63a5\u53e3\nfn get_allowance(&self, ctx: ServiceContext, payload: GetAllowancePayload) -> ProtocolResult<GetAllowanceResponse>\uff1b\n\n// \u67e5\u8be2\u53c2\u6570\npub struct GetAllowancePayload {\n    pub asset_id: Hash,\n    pub grantor:  Address,\n    pub grantee:  Address,\n}\n\n// \u8fd4\u56de\u503c\npub struct GetAllowanceResponse {\n    pub asset_id: Hash,\n    pub grantor:  Address,\n    pub grantee:  Address,\n    pub value:    u64,\n}\n")),Object(s.b)("p",null,"8.\u67e5\u8be2\u94fe\u7684\u539f\u751f\u8d44\u4ea7"),Object(s.b)("p",null,"\u94fe\u7684\u539f\u751f\u8d44\u4ea7\u4e3a\u521b\u4e16\u542f\u52a8\u65f6\u53d1\u884c\u7684\u8d44\u4ea7\uff0c\u8d44\u4ea7\u4fe1\u606f\u5199\u5728 ",Object(s.b)("inlineCode",{parentName:"p"},"Asset Service")," \u521b\u4e16\u914d\u7f6e\u6587\u4ef6\u4e2d\u3002"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"// \u67e5\u8be2\u63a5\u53e3\uff1a\u8fd4\u56de\u539f\u751f\u8d44\u4ea7\nfn get_native_asset(&self, ctx: ServiceContext) -> ProtocolResult<Asset>;\n")),Object(s.b)("p",null,"9.mint \u8d44\u4ea7"),Object(s.b)("p",null,"\u53ea\u6709\u5bf9\u5e94 Asset \u7684 admin \u624d\u6709\u6743\u9650 mint \u8d44\u4ea7\u3002"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),'// mint \u63a5\u53e3\nfn mint(&mut self, ctx: ServiceContext, payload: MintAssetPayload) -> ServiceResponse<()>;\n\n// mint \u53c2\u6570\npub struct MintAssetPayload {\n    pub asset_id: Hash,\n    pub to:       Address,\n    pub amount:   u64,\n    pub proof:    Hex,\n    pub memo:     String,\n}\n\n// mint \u4e8b\u4ef6\uff0cname = "MintAsset"\npub struct MintAssetEvent {\n    pub asset_id: Hash,\n    pub to:       Address,\n    pub amount:   u64,\n    pub proof:    Hex,\n    pub memo:     String,\n}\n')),Object(s.b)("p",null,"10.burn \u8d44\u4ea7"),Object(s.b)("p",null,"\u53ea\u6709\u8d44\u4ea7\u7684\u62e5\u6709\u8005\u81ea\u8eab\u53ef\u4ee5 burn \u6389\u81ea\u5df1\u7684\u8d44\u4ea7"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),'// burn \u63a5\u53e3\nfn burn(&mut self, ctx: ServiceContext, payload: BurnAssetPayload) -> ServiceResponse<()>;\n\n// burn \u53c2\u6570\npub struct BurnAssetPayload {\n    pub asset_id: Hash,\n    pub amount:   u64,\n    pub proof:    Hex,\n    pub memo:     String,\n}\n\n// burn \u4e8b\u4ef6\uff0cname = "BurnAsset"\npub struct BurnAssetEvent {\n    pub asset_id: Hash,\n    pub from:     Address,\n    pub amount:   u64,\n    pub proof:    Hex,\n    pub memo:     String,\n}\n')),Object(s.b)("p",null,"11.relay \u8d44\u4ea7"),Object(s.b)("p",null,"relay \u8d44\u4ea7\u548c burn \u8d44\u4ea7\u7c7b\u4f3c\uff0c\u53ea\u6709\u8d44\u4ea7\u62e5\u6709\u8005\u624d\u6709\u6743\u5229\u64cd\u4f5c\uff0c\u4f46\u662f relay \u64cd\u4f5c\u53ea\u80fd\u5728 \u6807\u8bb0\u4e3a relayable \u7684 Asset \u4e0a\u624d\u53ef\u4ee5\u8fdb\u884c\u3002"),Object(s.b)("pre",null,Object(s.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),'// relay \u63a5\u53e3\nfn relay(&mut self, ctx: ServiceContext, payload: RelayAssetPayload) -> ServiceResponse<()>;\n\n// relay \u53c2\u6570\npub struct RelayAssetPayload {\n    pub asset_id: Hash,\n    pub amount:   u64,\n    pub proof:    Hex,\n    pub memo:     String,\n}\n\n// relay \u4e8b\u4ef6\uff0cname = "RelayAsset"\npub struct RelayAssetEvent {\n    pub asset_id: Hash,\n    pub from:     Address,\n    pub amount:   u64,\n    pub proof:    Hex,\n    pub memo:     String,\n}\n')))}b.isMDXComponent=!0},280:function(e,n,t){"use strict";t.d(n,"a",(function(){return l})),t.d(n,"b",(function(){return m}));var r=t(0),a=t.n(r);function s(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function u(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function p(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?u(Object(t),!0).forEach((function(n){s(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):u(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function c(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)t=s[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var o=a.a.createContext({}),b=function(e){var n=a.a.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):p({},n,{},e)),t},l=function(e){var n=b(e.components);return a.a.createElement(o.Provider,{value:n},e.children)},i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.a.createElement(a.a.Fragment,{},n)}},d=Object(r.forwardRef)((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,u=e.parentName,o=c(e,["components","mdxType","originalType","parentName"]),l=b(t),d=r,m=l["".concat(u,".").concat(d)]||l[d]||i[d]||s;return t?a.a.createElement(m,p({ref:n},o,{components:t})):a.a.createElement(m,p({ref:n},o))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,u=new Array(s);u[0]=d;var p={};for(var c in n)hasOwnProperty.call(n,c)&&(p[c]=n[c]);p.originalType=e,p.mdxType="string"==typeof e?e:r,u[1]=p;for(var o=2;o<s;o++)u[o]=t[o];return a.a.createElement.apply(null,u)}return a.a.createElement.apply(null,t)}d.displayName="MDXCreateElement"}}]);