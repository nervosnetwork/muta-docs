/*! For license information please see ac743589.f09ca86b.js.LICENSE.txt */
(window.webpackJsonp=window.webpackJsonp||[]).push([[125],{278:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return u})),n.d(t,"rightToc",(function(){return s})),n.d(t,"default",(function(){return l}));var r=n(1),o=n(9),i=(n(0),n(349)),a=n(357),c={last_modified_on:"2020-04-01",$schema:"/.meta/.schemas/guides.json",title:"Next Steps",description:"Where to go after the basics",series_position:5,author_github:"https://github.com/zhouyun-zoe",tags:["type: post","level: easy"],hide_pagination:!0},u={categories:[{name:"getting-started",title:"Getting Started",description:"Take Muta from zero to production in under 30 minutes.",permalink:"/guides/getting-started"}],coverLabel:"Next Steps",description:"Where to go after the basics",permalink:"/guides/getting-started/next-steps",readingTime:"1 min read",seriesPosition:5,source:"@site/guides/getting-started/next-steps.md",tags:[{label:"type: post",permalink:"/guides/tags/type-post"},{label:"level: easy",permalink:"/guides/tags/level-easy"}],title:"Next Steps",truncated:!1,prevItem:{title:"Visualizing your node using Prometheus and Grafana",permalink:"/guides/getting-started/monitoring"},nextItem:{title:"Service Tutorial",permalink:"/guides/advanced/service-demo"}},s=[],f={rightToc:s};function l(e){var t=e.components,n=Object(o.a)(e,["components"]);return Object(i.b)("wrapper",Object(r.a)({},f,n,{components:t,mdxType:"MDXLayout"}),Object(i.b)("p",null,"You've completed the getting started series! You should understand the basic\nfundamentals to deploy and run Muta in most environments. If you\nwant to extract the full potential of Muta then proceed to the\n",Object(i.b)("a",Object(r.a)({parentName:"p"},{href:"/guides/advanced/"}),"advanced guides"),". We recommend the following to get you\nstarted:"),Object(i.b)(a.a,{to:"/guides/advanced/service-demo/",leftIcon:"book",mdxType:"Jump"},"How to wirte a service"),Object(i.b)(a.a,{to:"/guides/advanced/poe-chain/",leftIcon:"book",mdxType:"Jump"},"Build a POE blockchain"))}l.isMDXComponent=!0},349:function(e,t,n){"use strict";n.d(t,"a",(function(){return l})),n.d(t,"b",(function(){return d}));var r=n(0),o=n.n(r);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function u(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=o.a.createContext({}),f=function(e){var t=o.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c({},t,{},e)),n},l=function(e){var t=f(e.components);return o.a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.a.createElement(o.a.Fragment,{},t)}},m=Object(r.forwardRef)((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,a=e.parentName,s=u(e,["components","mdxType","originalType","parentName"]),l=f(n),m=r,d=l["".concat(a,".").concat(m)]||l[m]||p[m]||i;return n?o.a.createElement(d,c({ref:t},s,{components:n})):o.a.createElement(d,c({ref:t},s))}));function d(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=m;var c={};for(var u in t)hasOwnProperty.call(t,u)&&(c[u]=t[u]);c.originalType=e,c.mdxType="string"==typeof e?e:r,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return o.a.createElement.apply(null,a)}return o.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"},350:function(e,t,n){var r;!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var e=[],t=0;t<arguments.length;t++){var r=arguments[t];if(r){var i=typeof r;if("string"===i||"number"===i)e.push(r);else if(Array.isArray(r)&&r.length){var a=o.apply(null,r);a&&e.push(a)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&e.push(c)}}return e.join(" ")}e.exports?(o.default=o,e.exports=o):void 0===(r=function(){return o}.apply(t,[]))||(e.exports=r)}()},351:function(e,t,n){"use strict";n(54),n(355),n(363);var r=n(0),o=n.n(r),i=n(41),a=n(358),c=n(17),u=n.n(c),s=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var o=0;for(r=Object.getOwnPropertySymbols(e);o<r.length;o++)t.indexOf(r[o])<0&&Object.prototype.propertyIsEnumerable.call(e,r[o])&&(n[r[o]]=e[r[o]])}return n};t.a=function(e){var t,n=e.isNavLink,c=s(e,["isNavLink"]),f=c.to,l=c.href,p=f||l,m=Object(a.a)(p),d=Object(r.useRef)(!1),y=n?i.c:i.b,g=u.a.canUseIntersectionObserver;return Object(r.useEffect)((function(){return!g&&m&&window.docusaurus.prefetch(p),function(){g&&t&&t.disconnect()}}),[p,g,m]),p&&m&&!p.startsWith("#")?o.a.createElement(y,Object.assign({},c,{onMouseEnter:function(){d.current||(window.docusaurus.preload(p),d.current=!0)},innerRef:function(e){var n,r;g&&e&&m&&(n=e,r=function(){window.docusaurus.prefetch(p)},(t=new window.IntersectionObserver((function(e){e.forEach((function(e){n===e.target&&(e.isIntersecting||e.intersectionRatio>0)&&(t.unobserve(n),t.disconnect(),r())}))}))).observe(n))},to:p})):o.a.createElement("a",Object.assign({},c,{href:p}))}},353:function(e,t,n){t.f=n(2)},354:function(e,t,n){var r=n(82),o=n(55).concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,o)}},355:function(e,t,n){"use strict";var r=n(12),o=n(30),i=n(359),a="".startsWith;r(r.P+r.F*n(360)("startsWith"),"String",{startsWith:function(e){var t=i(this,e,"startsWith"),n=o(Math.min(arguments.length>1?arguments[1]:void 0,t.length)),r=String(e);return a?a.call(t,r,n):t.slice(n,n+r.length)===r}})},356:function(e,t,n){var r=n(23);e.exports=Array.isArray||function(e){return"Array"==r(e)}},357:function(e,t,n){"use strict";var r=n(0),o=n.n(r),i=n(351),a=n(350),c=n.n(a);n(132);t.a=function(e){var t=e.children,n=e.className,r=e.badge,a=e.leftIcon,u=e.rightIcon,s=e.size,f=e.target,l=e.to,p=c()("jump-to","jump-to--"+s,n),m=o.a.createElement("div",{className:"jump-to--inner"},o.a.createElement("div",{className:"jump-to--inner-2"},a&&o.a.createElement("div",{className:"jump-to--left"},o.a.createElement("i",{className:"feather icon-"+a})),o.a.createElement("div",{className:"jump-to--main"},r?o.a.createElement("span",{className:"badge badge--primary badge--right"},r):"",t),o.a.createElement("div",{className:"jump-to--right"},o.a.createElement("i",{className:"feather icon-"+(u||"chevron-right")+" arrow"}))));return f?o.a.createElement("a",{href:l,target:f,className:p},m):o.a.createElement(i.a,{to:l,className:p},m)}},358:function(e,t,n){"use strict";function r(e){return/^\/(?!\/)/.test(e)}n.d(t,"a",(function(){return r}))},359:function(e,t,n){var r=n(83),o=n(31);e.exports=function(e,t,n){if(r(t))throw TypeError("String#"+n+" doesn't accept regex!");return String(o(e))}},360:function(e,t,n){var r=n(2)("match");e.exports=function(e){var t=/./;try{"/./"[e](t)}catch(n){try{return t[r]=!1,!"/./"[e](t)}catch(o){}}return!0}},361:function(e,t,n){var r=n(39)("meta"),o=n(13),i=n(27),a=n(26).f,c=0,u=Object.isExtensible||function(){return!0},s=!n(14)((function(){return u(Object.preventExtensions({}))})),f=function(e){a(e,r,{value:{i:"O"+ ++c,w:{}}})},l=e.exports={KEY:r,NEED:!1,fastKey:function(e,t){if(!o(e))return"symbol"==typeof e?e:("string"==typeof e?"S":"P")+e;if(!i(e,r)){if(!u(e))return"F";if(!t)return"E";f(e)}return e[r].i},getWeak:function(e,t){if(!i(e,r)){if(!u(e))return!0;if(!t)return!1;f(e)}return e[r].w},onFreeze:function(e){return s&&l.NEED&&u(e)&&!i(e,r)&&f(e),e}}},362:function(e,t,n){var r=n(52),o=n(53),i=n(28),a=n(77),c=n(27),u=n(81),s=Object.getOwnPropertyDescriptor;t.f=n(10)?s:function(e,t){if(e=i(e),t=a(t,!0),u)try{return s(e,t)}catch(n){}if(c(e,t))return o(!r.f.call(e,t),e[t])}},363:function(e,t,n){"use strict";var r=n(5),o=n(27),i=n(10),a=n(12),c=n(15),u=n(361).KEY,s=n(14),f=n(43),l=n(42),p=n(39),m=n(2),d=n(353),y=n(364),g=n(365),b=n(356),h=n(8),v=n(13),O=n(29),w=n(28),j=n(77),E=n(53),S=n(80),P=n(366),x=n(362),N=n(78),k=n(26),T=n(21),I=x.f,D=k.f,M=P.f,W=r.Symbol,F=r.JSON,_=F&&F.stringify,J=m("_hidden"),A=m("toPrimitive"),C={}.propertyIsEnumerable,z=f("symbol-registry"),L=f("symbols"),R=f("op-symbols"),Y=Object.prototype,G="function"==typeof W&&!!N.f,K=r.QObject,X=!K||!K.prototype||!K.prototype.findChild,B=i&&s((function(){return 7!=S(D({},"a",{get:function(){return D(this,"a",{value:7}).a}})).a}))?function(e,t,n){var r=I(Y,t);r&&delete Y[t],D(e,t,n),r&&e!==Y&&D(Y,t,r)}:D,H=function(e){var t=L[e]=S(W.prototype);return t._k=e,t},Q=G&&"symbol"==typeof W.iterator?function(e){return"symbol"==typeof e}:function(e){return e instanceof W},U=function(e,t,n){return e===Y&&U(R,t,n),h(e),t=j(t,!0),h(n),o(L,t)?(n.enumerable?(o(e,J)&&e[J][t]&&(e[J][t]=!1),n=S(n,{enumerable:E(0,!1)})):(o(e,J)||D(e,J,E(1,{})),e[J][t]=!0),B(e,t,n)):D(e,t,n)},V=function(e,t){h(e);for(var n,r=g(t=w(t)),o=0,i=r.length;i>o;)U(e,n=r[o++],t[n]);return e},$=function(e){var t=C.call(this,e=j(e,!0));return!(this===Y&&o(L,e)&&!o(R,e))&&(!(t||!o(this,e)||!o(L,e)||o(this,J)&&this[J][e])||t)},q=function(e,t){if(e=w(e),t=j(t,!0),e!==Y||!o(L,t)||o(R,t)){var n=I(e,t);return!n||!o(L,t)||o(e,J)&&e[J][t]||(n.enumerable=!0),n}},Z=function(e){for(var t,n=M(w(e)),r=[],i=0;n.length>i;)o(L,t=n[i++])||t==J||t==u||r.push(t);return r},ee=function(e){for(var t,n=e===Y,r=M(n?R:w(e)),i=[],a=0;r.length>a;)!o(L,t=r[a++])||n&&!o(Y,t)||i.push(L[t]);return i};G||(c((W=function(){if(this instanceof W)throw TypeError("Symbol is not a constructor!");var e=p(arguments.length>0?arguments[0]:void 0),t=function(n){this===Y&&t.call(R,n),o(this,J)&&o(this[J],e)&&(this[J][e]=!1),B(this,e,E(1,n))};return i&&X&&B(Y,e,{configurable:!0,set:t}),H(e)}).prototype,"toString",(function(){return this._k})),x.f=q,k.f=U,n(354).f=P.f=Z,n(52).f=$,N.f=ee,i&&!n(40)&&c(Y,"propertyIsEnumerable",$,!0),d.f=function(e){return H(m(e))}),a(a.G+a.W+a.F*!G,{Symbol:W});for(var te="hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables".split(","),ne=0;te.length>ne;)m(te[ne++]);for(var re=T(m.store),oe=0;re.length>oe;)y(re[oe++]);a(a.S+a.F*!G,"Symbol",{for:function(e){return o(z,e+="")?z[e]:z[e]=W(e)},keyFor:function(e){if(!Q(e))throw TypeError(e+" is not a symbol!");for(var t in z)if(z[t]===e)return t},useSetter:function(){X=!0},useSimple:function(){X=!1}}),a(a.S+a.F*!G,"Object",{create:function(e,t){return void 0===t?S(e):V(S(e),t)},defineProperty:U,defineProperties:V,getOwnPropertyDescriptor:q,getOwnPropertyNames:Z,getOwnPropertySymbols:ee});var ie=s((function(){N.f(1)}));a(a.S+a.F*ie,"Object",{getOwnPropertySymbols:function(e){return N.f(O(e))}}),F&&a(a.S+a.F*(!G||s((function(){var e=W();return"[null]"!=_([e])||"{}"!=_({a:e})||"{}"!=_(Object(e))}))),"JSON",{stringify:function(e){for(var t,n,r=[e],o=1;arguments.length>o;)r.push(arguments[o++]);if(n=t=r[1],(v(t)||void 0!==e)&&!Q(e))return b(t)||(t=function(e,t){if("function"==typeof n&&(t=n.call(this,e,t)),!Q(t))return t}),r[1]=t,_.apply(F,r)}}),W.prototype[A]||n(11)(W.prototype,A,W.prototype.valueOf),l(W,"Symbol"),l(Math,"Math",!0),l(r.JSON,"JSON",!0)},364:function(e,t,n){var r=n(5),o=n(16),i=n(40),a=n(353),c=n(26).f;e.exports=function(e){var t=o.Symbol||(o.Symbol=i?{}:r.Symbol||{});"_"==e.charAt(0)||e in t||c(t,e,{value:a.f(e)})}},365:function(e,t,n){var r=n(21),o=n(78),i=n(52);e.exports=function(e){var t=r(e),n=o.f;if(n)for(var a,c=n(e),u=i.f,s=0;c.length>s;)u.call(e,a=c[s++])&&t.push(a);return t}},366:function(e,t,n){var r=n(28),o=n(354).f,i={}.toString,a="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[];e.exports.f=function(e){return a&&"[object Window]"==i.call(e)?function(e){try{return o(e)}catch(t){return a.slice()}}(e):o(r(e))}}}]);