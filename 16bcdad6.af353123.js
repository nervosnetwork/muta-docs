(window.webpackJsonp=window.webpackJsonp||[]).push([[13],{161:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return o})),n.d(t,"metadata",(function(){return i})),n.d(t,"rightToc",(function(){return l})),n.d(t,"default",(function(){return b}));var r=n(1),c=n(9),a=(n(0),n(278)),o={title:"\u5bc6\u7801\u5b66"},i={id:"docs_zh/advanced/crypto",title:"\u5bc6\u7801\u5b66",description:"Muta \u4f7f\u7528 secp256k1 \u53c2\u6570\u4ee5\u5b9e\u73b0\u692d\u5706\u66f2\u7ebf\u6570\u5b57\u7b7e\u540d\u7b97\u6cd5(ECDSA) \u7684\u529f\u80fd",source:"@site/docs/docs_zh/advanced/crypto.md",permalink:"/docs/docs_zh/advanced/crypto",editUrl:"https://github.com/nervosnetwork/muta/edit/master/website/docs/docs_zh/advanced/crypto.md",sidebar:"docs_zh",previous:{title:"\u5b58\u50a8",permalink:"/docs/docs_zh/advanced/core/storage"},next:{title:"JS SDK",permalink:"/docs/docs_zh/toolchain/sdk-js"}},l=[{value:"\u5982\u4f55\u751f\u6210\u751f\u6210\u5730\u5740",id:"\u5982\u4f55\u751f\u6210\u751f\u6210\u5730\u5740",children:[]},{value:"\u5982\u4f55\u7b7e\u540d\u4ea4\u6613",id:"\u5982\u4f55\u7b7e\u540d\u4ea4\u6613",children:[]}],p={rightToc:l};function b(e){var t=e.components,n=Object(c.a)(e,["components"]);return Object(a.b)("wrapper",Object(r.a)({},p,n,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Muta \u4f7f\u7528 secp256k1 \u53c2\u6570\u4ee5\u5b9e\u73b0\u692d\u5706\u66f2\u7ebf\u6570\u5b57\u7b7e\u540d\u7b97\u6cd5(ECDSA) \u7684\u529f\u80fd"),Object(a.b)("h2",{id:"\u5982\u4f55\u751f\u6210\u751f\u6210\u5730\u5740"},"\u5982\u4f55\u751f\u6210\u751f\u6210\u5730\u5740"),Object(a.b)("p",null,"\u8bb0\u79c1\u94a5 p",Object(a.b)("em",{parentName:"p"},"r"),", \u5bf9\u5e94\u5730\u5740\u51fd\u6570 A(p",Object(a.b)("em",{parentName:"p"},"r"),")\uff0c\u5219\u6709\uff1a"),Object(a.b)("p",null,"A(p",Object(a.b)("em",{parentName:"p"},"r"),") = Bit",Object(a.b)("sub",null,"0..160"),"(Keccak(ECDSAPUBKEY(p",Object(a.b)("em",{parentName:"p"},"r"),")))"),Object(a.b)("p",null,"Muta \u7684\u5730\u5740\u5bf9\u5e94\u6210\u4e00\u4e2a 160bit \u7684\u503c\uff0c\u751f\u6210\u7684\u8fc7\u7a0b\u8be6\u7ec6\u63cf\u8ff0\u4e3a\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u79c1\u94a5 -> \u516c\u94a5\uff1a\u79c1\u94a5\u901a\u8fc7 ECDSA \u516c\u94a5\u751f\u6210\u7b97\u6cd5\u8f6c\u6362\u4e3a\u516c\u94a5"),Object(a.b)("li",{parentName:"ol"},"\u516c\u94a5 -> \u54c8\u5e0c\uff1a\u516c\u94a5\u901a\u8fc7 Keccak \u51fd\u6570\u8f6c\u6362\u54c8\u5e0c\u503c"),Object(a.b)("li",{parentName:"ol"},"\u54c8\u5e0c -> \u5730\u5740\uff1a\u622a\u53d6\u524d 160bit \u54c8\u5e0c\u503c")),Object(a.b)("h2",{id:"\u5982\u4f55\u7b7e\u540d\u4ea4\u6613"},"\u5982\u4f55\u7b7e\u540d\u4ea4\u6613"),Object(a.b)("p",null,"\u8bb0\u79c1\u94a5 p",Object(a.b)("em",{parentName:"p"},"r"),"\uff0c\u5f85\u7b7e\u540d\u6d88\u606f x\uff0c\u5bf9\u5e94\u6709\u7b7e\u540d\u51fd\u6570 S(x)\uff0c\u5219\u6709\uff1a"),Object(a.b)("p",null,"S(x) = ECDSASIGN(Keccak(RLP(x)), p",Object(a.b)("em",{parentName:"p"},"r"),")"),Object(a.b)("p",null,"\u7531\u4e8e\u4f7f\u7528 spec256k1\uff0c\u56e0\u6b64\u7b7e\u540d\u5bf9\u5e94\u6210\u4e00\u4e2a 512bit \u7684\u503c\uff0c\u7b7e\u540d\u8fc7\u7a0b\u6d88\u606f\u63cf\u8ff0\u4e3a\uff1a"),Object(a.b)("ol",null,Object(a.b)("li",{parentName:"ol"},"\u6d88\u606f -> \u5e8f\u5217\u5316\u6d88\u606f\uff1a\u6d88\u606f\u901a\u8fc7 RLP \u5e8f\u5217\u5316\uff0c\u6d88\u606f\u5e8f\u5217\u4e3a",Object(a.b)("ol",{parentName:"li"},Object(a.b)("li",{parentName:"ol"},"chainID"),Object(a.b)("li",{parentName:"ol"},"cyclesLimit"),Object(a.b)("li",{parentName:"ol"},"cyclesPrice"),Object(a.b)("li",{parentName:"ol"},"nonce"),Object(a.b)("li",{parentName:"ol"},"method"),Object(a.b)("li",{parentName:"ol"},"service"),Object(a.b)("li",{parentName:"ol"},"payload"),Object(a.b)("li",{parentName:"ol"},"timeout"))),Object(a.b)("li",{parentName:"ol"},"\u5e8f\u5217\u5316\u6d88\u606f -> \u54c8\u5e0c\uff1a\u5e8f\u5217\u5316\u6d88\u606f\u901a\u8fc7 Keccak \u51fd\u6570\u8f6c\u6362\u54c8\u5e0c\u503c"),Object(a.b)("li",{parentName:"ol"},"\u54c8\u5e0c -> \u7b7e\u540d\uff1a\u54c8\u5e0c\u503c\u901a\u8fc7 ECDSA \u7b7e\u540d\u7b97\u6cd5\u751f\u6210\u7b7e\u540d")),Object(a.b)("p",null,"\u4e0b\u9762\u7684\u4f8b\u5b50\uff0c\u5c06\u4f7f\u7528\u4f2a\u4ee3\u7801\u63cf\u8ff0\u7b7e\u540d\u7684\u8fc7\u7a0b"),Object(a.b)("pre",null,Object(a.b)("code",Object(r.a)({parentName:"pre"},{className:"language-typescript"}),"import { encode as RLPEncode } from 'rlp';\nimport createKeccakHash from 'keccak'\nimport { sign as ECDSASign } from 'scep256k1';\n\nconst tx = [\n  chainId, // '0xb6a4d7da21443f5e816e8700eea87610e6d769657d6b8ec73028457bf2ca4036'\n  cyclesLimit, // '0xffff'\n  cyclesPrice, // '0xffff'\n  nonce, // '0x0000000000000000000000000000000000000000000000000000000000000000'\n  method, // 'a_service_method' \n  service, // 'a_service_name'\n  payload, // 'a_method_payload'\n  timeout, // '0xffff' // => current_block_height + timeout_gap - 1\n];\n\nconst encodedMessage = RLPEncode(tx);\nconst hash = createKeccakHash('keccak256')\n        .update(encodedMessage)\n        .digest();\nconst signature = ECDSASign(hash, privateKey);\n")))}b.isMDXComponent=!0},278:function(e,t,n){"use strict";n.d(t,"a",(function(){return s})),n.d(t,"b",(function(){return m}));var r=n(0),c=n.n(r);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,c=function(e,t){if(null==e)return{};var n,r,c={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(c[n]=e[n]);return c}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(c[n]=e[n])}return c}var p=c.a.createContext({}),b=function(e){var t=c.a.useContext(p),n=t;return e&&(n="function"==typeof e?e(t):i({},t,{},e)),n},s=function(e){var t=b(e.components);return c.a.createElement(p.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return c.a.createElement(c.a.Fragment,{},t)}},d=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,a=e.originalType,o=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),s=b(n),d=r,m=s["".concat(o,".").concat(d)]||s[d]||u[d]||a;return n?c.a.createElement(m,i({ref:t},p,{components:n})):c.a.createElement(m,i({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var a=n.length,o=new Array(a);o[0]=d;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<a;p++)o[p]=n[p];return c.a.createElement.apply(null,o)}return c.a.createElement.apply(null,n)}d.displayName="MDXCreateElement"}}]);