(window.webpackJsonp=window.webpackJsonp||[]).push([[68],{221:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return i})),n.d(t,"metadata",(function(){return a})),n.d(t,"rightToc",(function(){return o})),n.d(t,"default",(function(){return p}));var r=n(1),c=n(9),u=(n(0),n(349)),i={title:"Multi-signature Service"},a={id:"dev/service-list/multi-sig-service",title:"Multi-signature Service",description:"Multi-signature Service \u662f Muta \u7684\u539f\u751f\u591a\u91cd\u7b7e\u540d\u5b9e\u73b0\u3002\u591a\u91cd\u7b7e\u540d\u662f\u4e00\u4e2a\u5730\u5740\u7531\u82e5\u5e72\u4e2a\u8d26\u6237\u6240\u7ec4\u6210\uff0c\u6bcf\u4e00\u4e2a\u5730\u5740\u5bf9\u5e94\u7740\u4e00\u4e2a\u6743\u91cd\u3002\u5f53\u7b7e\u540d\u7684\u6743\u91cd\u4e4b\u548c\u5927\u4e8e\u591a\u7b7e\u8d26\u6237\u7684\u9608\u503c\u7684\u65f6\u5019\uff0c\u5c31\u4ee3\u8868\u4e00\u4e2a\u6709\u6548\u7684\u591a\u91cd\u7b7e\u540d\u3002\u591a\u91cd\u7b7e\u540d\u8d26\u6237\u7684\u7ed3\u6784\u5982\u4e0b\uff1a",source:"@site/docs/dev/service-list/multi-sig-service.md",permalink:"/docs/next/dev/service-list/multi-sig-service",editUrl:"https://github.com/nervosnetwork/muta-docs/edit/master/docs/dev/service-list/multi-sig-service.md",version:"next",sidebar:"docs",previous:{title:"Authorization Service",permalink:"/docs/next/dev/service-list/auth-service"},next:{title:"Develop an attestation service and build a POE chain",permalink:"/docs/next/dev/poe-chain"}},o=[{value:"\u63a5\u53e3",id:"\u63a5\u53e3",children:[]}],s={rightToc:o};function p(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(u.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(u.b)("p",null,"Multi-signature Service \u662f Muta \u7684\u539f\u751f\u591a\u91cd\u7b7e\u540d\u5b9e\u73b0\u3002\u591a\u91cd\u7b7e\u540d\u662f\u4e00\u4e2a\u5730\u5740\u7531\u82e5\u5e72\u4e2a\u8d26\u6237\u6240\u7ec4\u6210\uff0c\u6bcf\u4e00\u4e2a\u5730\u5740\u5bf9\u5e94\u7740\u4e00\u4e2a\u6743\u91cd\u3002\u5f53\u7b7e\u540d\u7684\u6743\u91cd\u4e4b\u548c\u5927\u4e8e\u591a\u7b7e\u8d26\u6237\u7684\u9608\u503c\u7684\u65f6\u5019\uff0c\u5c31\u4ee3\u8868\u4e00\u4e2a\u6709\u6548\u7684\u591a\u91cd\u7b7e\u540d\u3002\u591a\u91cd\u7b7e\u540d\u8d26\u6237\u7684\u7ed3\u6784\u5982\u4e0b\uff1a"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"pub struct MultiSigPermission {\n    pub owner:     Address,\n    pub accounts:  Vec<Account>,\n    pub threshold: u32,\n    pub memo:      String,\n}\n\npub struct Account {\n    pub address:     Address,\n    pub weight:      u8,\n    pub is_multiple: bool,\n}\n")),Object(u.b)("p",null,Object(u.b)("inlineCode",{parentName:"p"},"MultiSigPermission")," \u4e2d\u7684 owner \u5373\u662f\u8d26\u6237\u7684\u7ba1\u7406\u5458\uff0cmemo \u662f\u591a\u7b7e\u8d26\u6237\u7684\u5907\u6ce8\u4fe1\u606f\u3002Muta \u539f\u751f\u591a\u7b7e\u5141\u8bb8\u591a\u7b7e\u5d4c\u5957\uff0c\u6240\u4ee5\u5728 Account \u7ed3\u6784\u4e2d\uff0c\u7528 is_multiple \u8868\u793a\u662f\u5426\u662f\u591a\u7b7e\u8d26\u6237\u3002Muta \u591a\u91cd\u7b7e\u540d\u6709\u4e24\u70b9\u9650\u5236\uff1a"),Object(u.b)("ol",null,Object(u.b)("li",{parentName:"ol"},"\u591a\u7b7e\u5d4c\u5957\u4e0d\u5f97\u8d85\u8fc7 8 \u5c42\u3002"),Object(u.b)("li",{parentName:"ol"},"\u6bcf\u4e00\u7ea7\u8d26\u6237\u7684\u6570\u91cf\u4e0d\u5f97\u8d85\u8fc7 16 \u4e2a\u3002")),Object(u.b)("p",null,"\u4e3a\u4e86\u8ba9\u4ea4\u6613\u7684\u7b7e\u540d\u80fd\u591f\u517c\u5bb9\u591a\u91cd\u7b7e\u540d\uff0c",Object(u.b)("inlineCode",{parentName:"p"},"SignedTransaction")," \u4e2d pubkey \u662f\u6240\u6709\u7684\u7b7e\u540d\u8005\u7684\u516c\u94a5\u6570\u7ec4\u8c03\u7528 ",Object(u.b)("inlineCode",{parentName:"p"},"rlp::encode_list()")," \u5e8f\u5217\u5316\u540e\u7684\uff0csignature \u662f\u7b7e\u540d\u6570\u7ec4\u8c03\u7528 ",Object(u.b)("inlineCode",{parentName:"p"},"rlp::encode_list()")," \u5e8f\u5217\u5316\u540e\u7684\u7ed3\u679c\u3002",Object(u.b)("inlineCode",{parentName:"p"},"RawTransaction")," \u4e2d\u7684 sender \u662f\u591a\u7b7e\u5730\u5740\u6216\u8005\u7b7e\u540d\u8005\u7684\u5730\u5740\u3002"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"pub struct RawTransaction {\n    pub chain_id:     Hash,\n    pub cycles_price: u64,\n    pub cycles_limit: u64,\n    pub nonce:        Hash,\n    pub request:      TransactionRequest,\n    pub timeout:      u64,\n    pub sender:       Address,\n}\n\npub struct TransactionRequest {\n    pub method:       String,\n    pub service_name: String,\n    pub payload:      JsonString,\n}\n\npub struct SignedTransaction {\n    pub raw:       RawTransaction,\n    pub tx_hash:   Hash,\n    pub pubkey:    Bytes,\n    pub signature: Bytes,\n}\n")),Object(u.b)("h2",{id:"\u63a5\u53e3"},"\u63a5\u53e3"),Object(u.b)("p",null,"1.\u521b\u5efa\u591a\u7b7e\u8d26\u6237"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"fn generate_account(&mut self, ctx: ServiceContext, payload: GenerateMultiSigAccountPayload) -> ServiceResponse<GenerateMultiSigAccountResponse>;\n\n// \u53c2\u6570\npub struct GenerateMultiSigAccountPayload {\n    pub owner:            Address,\n    pub autonomy:         bool,\n    pub addr_with_weight: Vec<AddressWithWeight>,\n    pub threshold:        u32,\n    pub memo:             String,\n}\n\npub struct AddressWithWeight {\n    pub address: Address,\n    pub weight:  u8,\n}\n\npub struct GenerateMultiSigAccountResponse {\n    pub address: Address,\n}\n")),Object(u.b)("p",null,"2.\u67e5\u8be2\u591a\u7b7e\u8d26\u6237"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"fn get_account_from_address(&self, _ctx: ServiceContext, payload: GetMultiSigAccountPayload) -> ServiceResponse<GetMultiSigAccountResponse>;\n\n// \u53c2\u6570\npub struct GetMultiSigAccountPayload {\n    pub multi_sig_address: Address,\n}\n\n\npub struct GetMultiSigAccountResponse {\n    pub permission: MultiSigPermission,\n}\n\npub struct MultiSigPermission {\n    pub owner:     Address,\n    pub accounts:  Vec<Account>,\n    pub threshold: u32,\n    pub memo:      String,\n}\n")),Object(u.b)("p",null,"3.\u521b\u5efa\u66f4\u65b0\u591a\u7b7e\u8d26\u6237"),Object(u.b)("pre",null,Object(u.b)("code",Object(r.a)({parentName:"pre"},{className:"language-rust"}),"// \u9700\u8981 admin \u6743\u9650\nfn update_account(&mut self, ctx: ServiceContext, payload: UpdateAccountPayload,) -> ServiceResponse<()>;\n\n// \u53c2\u6570\npub struct UpdateAccountPayload {\n    pub account_address:  Address,\n    pub owner:            Address,\n    pub addr_with_weight: Vec<AddressWithWeight>,\n    pub threshold:        u32,\n    pub memo:             String,\n}\n")))}p.isMDXComponent=!0},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function u(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){u(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},u=Object.keys(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var u=Object.getOwnPropertySymbols(e);for(r=0;r<u.length;r++)n=u[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var s=c.a.createContext({}),p=function(e){var t=c.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a({},t,{},e)),n},l=function(e){var t=p(e.components);return c.a.createElement(s.Provider,{value:t},e.children)},b={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,u=e.originalType,i=e.parentName,s=o(e,["components","mdxType","originalType","parentName"]),l=p(n),d=r,m=l["".concat(i,".").concat(d)]||l[d]||b[d]||u;return n?c.a.createElement(m,a({ref:t},s,{components:n})):c.a.createElement(m,a({ref:t},s))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var u=n.length,i=new Array(u);i[0]=d;var a={};for(var o in t)hasOwnProperty.call(t,o)&&(a[o]=t[o]);a.originalType=e,a.mdxType="string"==typeof e?e:r,i[1]=a;for(var s=2;s<u;s++)i[s]=n[s];return c.a.createElement.apply(null,i)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);