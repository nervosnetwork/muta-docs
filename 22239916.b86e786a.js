/*! For license information please see 22239916.b86e786a.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{173:function(e,t,r){"use strict";r.r(t),r.d(t,"frontMatter",(function(){return s})),r.d(t,"metadata",(function(){return u})),r.d(t,"rightToc",(function(){return l})),r.d(t,"default",(function(){return p}));var n=r(1),i=r(9),o=(r(0),r(278)),a=r(330),c=r(288),s={sidebar_label:"Overview",title:"Development Overview"},u={id:"dev/dev-overview",title:"Development Overview",description:"In this section, we'll show you how to customize the chain's functionality by developing a Service. Service is the abstraction layer in the Muta framework for extensions, where each Service performs a relatively independent function, maintaining its own storage and operational interfaces, similar to a Small state machine. These services together form the state machine part of the chain and after being connected to the underlying components of the blockchain through the framework interface, a brand new chain exclusive to you is developed!",source:"@site/docs/dev/dev-overview.md",permalink:"/docs/dev/dev-overview",editUrl:"https://github.com/nervosnetwork/muta/edit/master/website/docs/dev/dev-overview.md",sidebar_label:"Overview",sidebar:"docs",previous:{title:"Deployment",permalink:"/docs/setup/deploy"},next:{title:"Service Dev Guide",permalink:"/docs/dev/service-dev"}},l=[{value:"Learning Path",id:"learning-path",children:[{value:"Read the Service Development Guide",id:"read-the-service-development-guide",children:[]},{value:"Learn more about developing services with reference to existing services.",id:"learn-more-about-developing-services-with-reference-to-existing-services",children:[]},{value:"Try to develop a simple attestation service to build a POE chain.",id:"try-to-develop-a-simple-attestation-service-to-build-a-poe-chain",children:[]},{value:"Learn to develop more complex applications - decentralized exchanges",id:"learn-to-develop-more-complex-applications---decentralized-exchanges",children:[]}]},{value:"Built-in Service Declaration",id:"built-in-service-declaration",children:[]}],f={rightToc:l};function p(e){var t=e.components,r=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},f,r,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"In this section, we'll show you how to customize the chain's functionality by developing a Service. Service is the abstraction layer in the Muta framework for extensions, where each Service performs a relatively independent function, maintaining its own storage and operational interfaces, similar to a Small state machine. These services together form the state machine part of the chain and after being connected to the underlying components of the blockchain through the framework interface, a brand new chain exclusive to you is developed!"),Object(o.b)("h2",{id:"learning-path"},"Learning Path"),Object(o.b)(a.a,{headingDepth:3,mdxType:"Step"},Object(o.b)("ol",null,Object(o.b)("li",null,Object(o.b)("h3",{id:"read-the-service-development-guide"},"Read the Service Development Guide"),Object(o.b)("p",null,"This document describes service components and development guidelines."),Object(o.b)(c.a,{to:"../service-dev/",mdxType:"Jump"},"View Service Dev Guide")),Object(o.b)("li",null,Object(o.b)("h3",{id:"learn-more-about-developing-services-with-reference-to-existing-services"},"Learn more about developing services with reference to existing services."),Object(o.b)("p",null,"We provide a number of generic services for reference and use, covering governance, assets, multi-signature and more."),Object(o.b)(c.a,{to:"../../dev/service-list/service-list",mdxType:"Jump"},"View Service List")),Object(o.b)("li",null,Object(o.b)("h3",{id:"try-to-develop-a-simple-attestation-service-to-build-a-poe-chain"},"Try to develop a simple attestation service to build a POE chain."),Object(o.b)("p",null,"In this tutorial, we will take you through the development of a attestation service from scratch and connect to Muta to build a POE chain."),Object(o.b)(c.a,{to:"../poe-chain/",mdxType:"Jump"},"Develop a Attestation Service")),Object(o.b)("li",null,Object(o.b)("h3",{id:"learn-to-develop-more-complex-applications---decentralized-exchanges"},"Learn to develop more complex applications - decentralized exchanges"),Object(o.b)(c.a,{to:"../dex/",mdxType:"Jump"},"Build a DEX")))),Object(o.b)("h2",{id:"built-in-service-declaration"},"Built-in Service Declaration"),Object(o.b)("p",null,"The Muta framework source code currently has four built-in built-in services: Metadata Service, Asset Service, Authorization service and Multi-signature service. The configuration items related to the Metadata Service are necessary to start the chain. The other services are optional and can be configured in the Genesis block according to the developer's needs."),Object(o.b)(c.a,{to:"../service-list/metadata-service",mdxType:"Jump"},"Metadata Service"),Object(o.b)(c.a,{to:"../service-list/asset-service",mdxType:"Jump"},"Asset Service"),Object(o.b)(c.a,{to:"../service-list/auth-service",mdxType:"Jump"},"Authorization Service"),Object(o.b)(c.a,{to:"../service-list/multi-sig-service",mdxType:"Jump"},"Multi-signature Service"))}p.isMDXComponent=!0},278:function(e,t,r){"use strict";r.d(t,"a",(function(){return f})),r.d(t,"b",(function(){return d}));var n=r(0),i=r.n(n);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function c(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,i=function(e,t){if(null==e)return{};var r,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||(i[r]=e[r]);return i}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)r=o[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(i[r]=e[r])}return i}var u=i.a.createContext({}),l=function(e){var t=i.a.useContext(u),r=t;return e&&(r="function"==typeof e?e(t):c({},t,{},e)),r},f=function(e){var t=l(e.components);return i.a.createElement(u.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return i.a.createElement(i.a.Fragment,{},t)}},v=Object(n.forwardRef)((function(e,t){var r=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),f=l(r),v=n,d=f["".concat(a,".").concat(v)]||f[v]||p[v]||o;return r?i.a.createElement(d,c({ref:t},u,{components:r})):i.a.createElement(d,c({ref:t},u))}));function d(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var o=r.length,a=new Array(o);a[0]=v;var c={};for(var s in t)hasOwnProperty.call(t,s)&&(c[s]=t[s]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var u=2;u<o;u++)a[u]=r[u];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,r)}v.displayName="MDXCreateElement"},279:function(e,t,r){var n;!function(){"use strict";var r={}.hasOwnProperty;function i(){for(var e=[],t=0;t<arguments.length;t++){var n=arguments[t];if(n){var o=typeof n;if("string"===o||"number"===o)e.push(n);else if(Array.isArray(n)&&n.length){var a=i.apply(null,n);a&&e.push(a)}else if("object"===o)for(var c in n)r.call(n,c)&&n[c]&&e.push(c)}}return e.join(" ")}e.exports?(i.default=i,e.exports=i):void 0===(n=function(){return i}.apply(t,[]))||(e.exports=n)}()},280:function(e,t,r){"use strict";r(54),r(284),r(295);var n=r(0),i=r.n(n),o=r(41),a=r(289),c=r(31),s=r.n(c),u=function(e,t){var r={};for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&t.indexOf(n)<0&&(r[n]=e[n]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(n=Object.getOwnPropertySymbols(e);i<n.length;i++)t.indexOf(n[i])<0&&Object.prototype.propertyIsEnumerable.call(e,n[i])&&(r[n[i]]=e[n[i]])}return r};t.a=function(e){var t,r=e.isNavLink,c=u(e,["isNavLink"]),l=c.to,f=c.href,p=l||f,v=Object(a.a)(p),d=Object(n.useRef)(!1),h=r?o.c:o.b,m=s.a.canUseIntersectionObserver;return Object(n.useEffect)((function(){return!m&&v&&window.docusaurus.prefetch(p),function(){m&&t&&t.disconnect()}}),[p,m,v]),p&&v&&!p.startsWith("#")?i.a.createElement(h,Object.assign({},c,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(e){var r,n;m&&e&&v&&(r=e,n=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){r===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(r),t.disconnect(),n())}))}))).observe(r))},to:p})):i.a.createElement("a",Object.assign({},c,{href:p}))}},282:function(e,t,r){t.f=r(2)},283:function(e,t,r){var n=r(84),i=r(56).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return n(e,i)}},284:function(e,t,r){"use strict";var n=r(12),i=r(28),o=r(290),a="".startsWith;n(n.P+n.F*r(291)("startsWith"),"String",{startsWith:function(e){var t=o(this,e,"startsWith"),r=i(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),n=String(e);return a?a.call(t,n,r):t.slice(r,r+n.length)===n}})},286:function(e,t,r){var n=r(22);e.exports=Array.isArray||function(e){return"Array"==n(e)}},288:function(e,t,r){"use strict";var n=r(0),i=r.n(n),o=r(280),a=r(279),c=r.n(a);r(134);t.a=function(e){var t=e.children,r=e.className,n=e.badge,a=e.leftIcon,s=e.rightIcon,u=e.size,l=e.target,f=e.to,p=c()("jump-to","jump-to--"+u,r),v=i.a.createElement("div",{className:"jump-to--inner"},i.a.createElement("div",{className:"jump-to--inner-2"},a&&i.a.createElement("div",{className:"jump-to--left"},i.a.createElement("i",{className:"feather icon-"+a})),i.a.createElement("div",{className:"jump-to--main"},n?i.a.createElement("span",{className:"badge badge--primary badge--right"},n):"",t),i.a.createElement("div",{className:"jump-to--right"},i.a.createElement("i",{className:"feather icon-"+(s||"chevron-right")+" arrow"}))));return l?i.a.createElement("a",{href:f,target:l,className:p},v):i.a.createElement(o.a,{to:f,className:p},v)}},289:function(e,t,r){"use strict";function n(e){return/^\/(?!\/)/.test(e)}r.d(t,"a",(function(){return n}))},290:function(e,t,r){var n=r(85),i=r(30);e.exports=function(e,t,r){if(n(t))throw TypeError("String#"+r+" doesn't accept regex!");return String(i(e))}},291:function(e,t,r){var n=r(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(r){try{return t[n]=!1,!"/./"[e](t)}catch(i){}}return!0}},292:function(e,t,r){var n=r(39)("meta"),i=r(13),o=r(25),a=r(24).f,c=0,s=Object.isExtensible||function(){return!0},u=!r(14)((function(){return s(Object.preventExtensions({}))})),l=function(e){a(e,n,{value:{i:"O"+ ++c,w:{}}})},f=e.exports={KEY:n,NEED:!1,fastKey:function(e,t){if(!i(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!o(e,n)){if(!s(e))return"F";if(!t)return"E";l(e)}return e[n].i},getWeak:function(e,t){if(!o(e,n)){if(!s(e))return!0;if(!t)return!1;l(e)}return e[n].w},onFreeze:function(e){return u&&f.NEED&&s(e)&&!o(e,n)&&l(e),e}}},293:function(e,t,r){var n=r(52),i=r(53),o=r(26),a=r(77),c=r(25),s=r(83),u=Object.getOwnPropertyDescriptor;t.f=r(10)?u:function(e,t){if(e=o(e),t=a(t,!0),s)try{return u(e,t)}catch(r){}if(c(e,t))return i(!n.f.call(e,t),e[t])}},294:function(e,t,r){"use strict";var n=r(314),i=r(58);function o(e,t){return t.encode?t.strict?n(e):encodeURIComponent(e):e}t.extract=function(e){return e.split("?")[1]||""},t.parse=function(e,t){var r=function(e){var t;switch(e.arrayFormat){case"index":return function(e,r,n){t=/\[(\d*)\]$/.exec(e),e=e.replace(/\[\d*\]$/,""),t?(void 0===n[e]&&(n[e]={}),n[e][t[1]]=r):n[e]=r};case"bracket":return function(e,r,n){t=/(\[\])$/.exec(e),e=e.replace(/\[\]$/,""),t?void 0!==n[e]?n[e]=[].concat(n[e],r):n[e]=[r]:n[e]=r};default:return function(e,t,r){void 0!==r[e]?r[e]=[].concat(r[e],t):r[e]=t}}}(t=i({arrayFormat:"none"},t)),n=Object.create(null);return"string"!=typeof e?n:(e=e.trim().replace(/^(\?|#|&)/,""))?(e.split("&").forEach((function(e){var t=e.replace(/\+/g," ").split("="),i=t.shift(),o=t.length>0?t.join("="):void 0;o=void 0===o?null:decodeURIComponent(o),r(decodeURIComponent(i),o,n)})),Object.keys(n).sort().reduce((function(e,t){var r=n[t];return Boolean(r)&&"object"==typeof r&&!Array.isArray(r)?e[t]=function e(t){return Array.isArray(t)?t.sort():"object"==typeof t?e(Object.keys(t)).sort((function(e,t){return Number(e)-Number(t)})).map((function(e){return t[e]})):t}(r):e[t]=r,e}),Object.create(null))):n},t.stringify=function(e,t){var r=function(e){switch(e.arrayFormat){case"index":return function(t,r,n){return null===r?[o(t,e),"[",n,"]"].join(""):[o(t,e),"[",o(n,e),"]=",o(r,e)].join("")};case"bracket":return function(t,r){return null===r?o(t,e):[o(t,e),"[]=",o(r,e)].join("")};default:return function(t,r){return null===r?o(t,e):[o(t,e),"=",o(r,e)].join("")}}}(t=i({encode:!0,strict:!0,arrayFormat:"none"},t));return e?Object.keys(e).sort().map((function(n){var i=e[n];if(void 0===i)return"";if(null===i)return o(n,t);if(Array.isArray(i)){var a=[];return i.slice().forEach((function(e){void 0!==e&&a.push(r(n,e,a.length))})),a.join("&")}return o(n,t)+"="+o(i,t)})).filter((function(e){return e.length>0})).join("&"):""}},295:function(e,t,r){"use strict";var n=r(5),i=r(25),o=r(10),a=r(12),c=r(15),s=r(292).KEY,u=r(14),l=r(43),f=r(42),p=r(39),v=r(2),d=r(282),h=r(296),m=r(297),b=r(286),y=r(8),g=r(13),O=r(27),w=r(26),j=r(77),S=r(53),x=r(82),E=r(298),P=r(293),T=r(78),N=r(24),k=r(19),D=P.f,A=N.f,I=E.f,M=n.Symbol,F=n.JSON,J=F&&F.stringify,C=v("_hidden"),z=v("toPrimitive"),L={}.propertyIsEnumerable,R=l("symbol-registry"),W=l("symbols"),U=l("op-symbols"),G=Object.prototype,_="function"==typeof M&&!!T.f,B=n.QObject,X=!B||!B.prototype||!B.prototype.findChild,$=o&&u((function(){return 7!=x(A({},"a",{get:function(){return A(this,"a",{value:7}).a}})).a}))?function(e,t,r){var n=D(G,t);n&&delete G[t],A(e,t,r),n&&e!==G&&A(G,t,n)}:A,K=function(e){var t=W[e]=x(M.prototype);return t._k=e,t},V=_&&"symbol"==typeof M.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof M},Y=function(e,t,r){return e===G&&Y(U,t,r),y(e),t=j(t,!0),y(r),i(W,t)?(r.enumerable?(i(e,C)&&e[C][t]&&(e[C][t]=!1),r=x(r,{enumerable:S(0,!1)})):(i(e,C)||A(e,C,S(1,{})),e[C][t]=!0),$(e,t,r)):A(e,t,r)},Q=function(e,t){y(e);for(var r,n=m(t=w(t)),i=0,o=n.length;o>i;)Y(e,r=n[i++],t[r]);return e},q=function(e){var t=L.call(this,e=j(e,!0));return!(this===G&&i(W,e)&&!i(U,e))&&(!(t||!i(this,e)||!i(W,e)||i(this,C)&&this[C][e])||t)},H=function(e,t){if(e=w(e),t=j(t,!0),e!==G||!i(W,t)||i(U,t)){var r=D(e,t);return!r||!i(W,t)||i(e,C)&&e[C][t]||(r.enumerable=!0),r}},Z=function(e){for(var t,r=I(w(e)),n=[],o=0;r.length>o;)i(W,t=r[o++])||t==C||t==s||n.push(t);return n},ee=function(e){for(var t,r=e===G,n=I(r?U:w(e)),o=[],a=0;n.length>a;)!i(W,t=n[a++])||r&&!i(G,t)||o.push(W[t]);return o};_||(c((M=function(){if(this instanceof M)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(r){this===G&&t.call(U,r),i(this,C)&&i(this[C],e)&&(this[C][e]=!1),$(this,e,S(1,r))};return o&&X&&$(G,e,{configurable:!0,set:t}),K(e)}).prototype,"toString",(function(){return this._k})),P.f=H,N.f=Y,r(283).f=E.f=Z,r(52).f=q,T.f=ee,o&&!r(40)&&c(G,"propertyIsEnumerable",q,!0),d.f=function(e){return K(v(e))}),a(a.G+a.W+a.F*!_,{Symbol:M});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),re=0;te.length>re;)v(te[re++]);for(var ne=k(v.store),ie=0;ne.length>ie;)h(ne[ie++]);a(a.S+a.F*!_,"Symbol",{for:function(e){return i(R,e+="")?R[e]:R[e]=M(e)},keyFor:function(e){if(!V(e))throw TypeError(e+" is not a symbol!");for(var t in R)if(R[t]===e)return t},useSetter:function(){X=!0},useSimple:function(){X=!1}}),a(a.S+a.F*!_,"Object",{create:function(e,t){return void 0===t?x(e):Q(x(e),t)},defineProperty:Y,defineProperties:Q,getOwnPropertyDescriptor:H,getOwnPropertyNames:Z,getOwnPropertySymbols:ee});var oe=u((function(){T.f(1)}));a(a.S+a.F*oe,"Object",{getOwnPropertySymbols:function(e){return T.f(O(e))}}),F&&a(a.S+a.F*(!_||u((function(){var e=M();return"[null]"!=J([e])||"{}"!=J({a:e})||"{}"!=J(Object(e))}))),"JSON",{stringify:function(e){for(var t,r,n=[e],i=1;arguments.length>i;)n.push(arguments[i++]);if(r=t=n[1],(g(t)||void 0!==e)&&!V(e))return b(t)||(t=function(e,t){if("function"==typeof r&&(t=r.call(this,e,t)),!V(t))return t}),n[1]=t,J.apply(F,n)}}),M.prototype[z]||r(11)(M.prototype,z,M.prototype.valueOf),f(M,"Symbol"),f(Math,"Math",!0),f(n.JSON,"JSON",!0)},296:function(e,t,r){var n=r(5),i=r(16),o=r(40),a=r(282),c=r(24).f;e.exports=function(e){var t=i.Symbol||(i.Symbol=o?{}:n.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:a.f(e)})}},297:function(e,t,r){var n=r(19),i=r(78),o=r(52);e.exports=function(e){var t=n(e),r=i.f;if(r)for(var a,c=r(e),s=o.f,u=0;c.length>u;)s.call(e,a=c[u++])&&t.push(a);return t}},298:function(e,t,r){var n=r(26),i=r(283).f,o={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==o.call(e)?function(e){try{return i(e)}catch(t){return a.slice()}}(e):i(n(e))}},314:function(e,t,r){"use strict";e.exports=function(e){return encodeURIComponent(e).replace(/[!'()*]/g,(function(e){return"%"+e.charCodeAt(0).toString(16).toUpperCase()}))}},330:function(e,t,r){"use strict";var n=r(0),i=r.n(n);r(279),r(294),r(141);t.a=function(e){var t=e.children,r=e.headingDepth;return"undefined"!=typeof window&&window.location,i.a.createElement("div",{className:"step step--h"+r},t)}}}]);