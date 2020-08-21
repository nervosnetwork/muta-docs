(window.webpackJsonp=window.webpackJsonp||[]).push([[59],{212:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return c})),r.d(t,"metadata",(function(){return i})),r.d(t,"rightToc",(function(){return p})),r.d(t,"default",(function(){return l}));var n=r(1),o=r(9),a=(r(0),r(349)),c={title:"\u9879\u76ee\u914d\u7f6e"},i={id:"docs_zh/setup/cargo-config",title:"\u9879\u76ee\u914d\u7f6e",description:"Overlord \u63d0\u4f9b\u4e24\u79cd\u51fa\u5757\u903b\u8f91\uff0c\u968f\u673a\u51fa\u5757\u548c\u8f6e\u8be2\u51fa\u5757\u3002\u968f\u673a\u51fa\u5757\u6839\u636e\u8282\u70b9\u7684 `propose_weight` \u4f7f\u7528\u786e\u5b9a\u6027\u968f\u673a\u7b97\u6cd5\u9009\u62e9 leader\uff0c\u6309\u7167 `vote_weight` \u8fdb\u884c\u8ba1\u7968\u3002\u8f6e\u8be2\u51fa\u5757\u8f6e\u6d41\u9009\u62e9 leader\uff0c\u6240\u4ee5\u8fd9\u65f6 `propose_weight` \u662f\u4e0d\u751f\u6548\u7684\u3002\u8f6e\u8be2\u51fa\u5757\u4e5f\u662f\u6309\u7167 `vote_weight` \u8fdb\u884c\u8ba1\u7968\u3002",source:"@site/docs/docs_zh/setup/cargo-config.md",permalink:"/docs/next/docs_zh/setup/cargo-config",editUrl:"https://github.com/nervosnetwork/muta-docs/edit/master/docs/docs_zh/setup/cargo-config.md",version:"next",sidebar:"docs_zh",previous:{title:"\u8282\u70b9\u8fd0\u884c\u914d\u7f6e",permalink:"/docs/next/docs_zh/setup/node-config"},next:{title:"\u591a\u8282\u70b9\u90e8\u7f72\u6307\u5357",permalink:"/docs/next/docs_zh/setup/deploy"}},p=[],u={rightToc:p};function l(e){var t=e.components,r=Object(o.a)(e,["components"]);return Object(a.b)("wrapper",Object(n.a)({},u,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("p",null,"Overlord \u63d0\u4f9b\u4e24\u79cd\u51fa\u5757\u903b\u8f91\uff0c\u968f\u673a\u51fa\u5757\u548c\u8f6e\u8be2\u51fa\u5757\u3002\u968f\u673a\u51fa\u5757\u6839\u636e\u8282\u70b9\u7684 ",Object(a.b)("inlineCode",{parentName:"p"},"propose_weight")," \u4f7f\u7528\u786e\u5b9a\u6027\u968f\u673a\u7b97\u6cd5\u9009\u62e9 leader\uff0c\u6309\u7167 ",Object(a.b)("inlineCode",{parentName:"p"},"vote_weight")," \u8fdb\u884c\u8ba1\u7968\u3002\u8f6e\u8be2\u51fa\u5757\u8f6e\u6d41\u9009\u62e9 leader\uff0c\u6240\u4ee5\u8fd9\u65f6 ",Object(a.b)("inlineCode",{parentName:"p"},"propose_weight")," \u662f\u4e0d\u751f\u6548\u7684\u3002\u8f6e\u8be2\u51fa\u5757\u4e5f\u662f\u6309\u7167 ",Object(a.b)("inlineCode",{parentName:"p"},"vote_weight")," \u8fdb\u884c\u8ba1\u7968\u3002\nMuta \u4e2d\u6709\u968f\u673a\u51fa\u5757\u7279\u6027\u7684\u5f00\u5173\uff0c \u901a\u8fc7 ",Object(a.b)("inlineCode",{parentName:"p"},'features = ["random_leader"]')," \u5f00\u542f\uff0c\u5728 muta-chain \u4e2d\uff0c\u9ed8\u8ba4\u662f\u4f7f\u7528\u968f\u673a\u51fa\u5757\u7684\u3002\u5728\u4f7f\u7528 Muta \u6846\u67b6\u8fdb\u884c\u5f00\u53d1\u7684\u65f6\u5019\uff0c\u5728 ",Object(a.b)("inlineCode",{parentName:"p"},"Cargo.toml")," \u4e2d\u7684 muta \u4f9d\u8d56\u4e2d\u53ef\u4ee5\u9009\u62e9\u51fa\u5757\u65b9\u5f0f\uff1a"),Object(a.b)("pre",null,Object(a.b)("code",Object(n.a)({parentName:"pre"},{className:"language-rust"}),'# \u8f6e\u8be2\u51fa\u5757\nmuta = { git = "https://github.com/nervosnetwork/muta", branch = "master" }\n# \u968f\u673a\u51fa\u5757\nmuta = { git = "https://github.com/nervosnetwork/muta", branch = "master", features = ["random_leader"] }\n')))}l.isMDXComponent=!0},349:function(e,t,r){"use strict";r.d(t,"a",(function(){return s})),r.d(t,"b",(function(){return b}));var n=r(0),o=r.n(n);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function c(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?c(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):c(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var u=o.a.createContext({}),l=function(e){var t=o.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):i({},t,{},e)),r},s=function(e){var t=l(e.components);return o.a.createElement(u.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),s=l(r),m=n,b=s["".concat(c,".").concat(m)]||s[m]||d[m]||a;return r?o.a.createElement(b,i({ref:t},u,{components:r})):o.a.createElement(b,i({ref:t},u))}));function b(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var a=r.length,c=new Array(a);c[0]=m;var i={};for(var p in t)hasOwnProperty.call(t,p)&&(i[p]=t[p]);i.originalType=e,i.mdxType="string"==typeof e?e:n,c[1]=i;for(var u=2;u<a;u++)c[u]=r[u];return o.a.createElement.apply(null,c)}return o.a.createElement.apply(null,r)}m.displayName="MDXCreateElement"}}]);