"use strict";(self.webpackChunkapi_doc=self.webpackChunkapi_doc||[]).push([[124],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>f});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=r.createContext({}),p=function(e){var t=r.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(c.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),d=p(n),f=o,u=d["".concat(c,".").concat(f)]||d[f]||m[f]||a;return n?r.createElement(u,s(s({ref:t},l),{},{components:n})):r.createElement(u,s({ref:t},l))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,s=new Array(a);s[0]=d;var i={};for(var c in t)hasOwnProperty.call(t,c)&&(i[c]=t[c]);i.originalType=e,i.mdxType="string"==typeof e?e:o,s[1]=i;for(var p=2;p<a;p++)s[p]=n[p];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},6850:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>s,default:()=>m,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},s="Peers",i={unversionedId:"concepts/peers",id:"concepts/peers",title:"Peers",description:"Definition",source:"@site/docs/02-concepts/206-peers.md",sourceDirName:"02-concepts",slug:"/concepts/peers",permalink:"/developers/docs/concepts/peers",draft:!1,tags:[],version:"current",sidebarPosition:206,frontMatter:{},sidebar:"docSidebar",previous:{title:"Keys",permalink:"/developers/docs/concepts/keys"},next:{title:"Webhooks",permalink:"/developers/docs/concepts/webhooks"}},c={},p=[{value:"Definition",id:"definition",level:2},{value:"Peer transactions",id:"peer-transactions",level:2}],l={toc:p};function m(e){let{components:t,...n}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"peers"},"Peers"),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"peer")," is a ",(0,o.kt)("strong",{parentName:"p"},"partner Consent Manager instance"),".\nNew peers must be registered with their ",(0,o.kt)("strong",{parentName:"p"},"base API URL")," and an ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/keys"},(0,o.kt)("strong",{parentName:"a"},"API key"))," to ensure authentication to it.\nWhen an instance registers another instance as peer, ",(0,o.kt)("strong",{parentName:"p"},"the same process is mirrored")," on the second instance, so that each instance is recognized as a peer by the other (the API key is automatically generated)."),(0,o.kt)("h2",{id:"peer-transactions"},"Peer transactions"),(0,o.kt)("p",null,"Peers are allowed to ",(0,o.kt)("strong",{parentName:"p"},"reference in their Consent Contexts")," ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/models"},(0,o.kt)("strong",{parentName:"a"},"shared models"))," from Consent Manager instances where they are registered as peers.\nThe form generated from such a context will display the main information, then the peer information, followed by the main elements and lastly, the peer elements."),(0,o.kt)("p",null,"Subjects who submit their consent through this form will receive one notification email from the main Consent Manager and one from each peer (if notifications were enabled in the context), each holding a ",(0,o.kt)("strong",{parentName:"p"},"separate receipt")," with data concerning only the elements they own.\n",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/records"},(0,o.kt)("strong",{parentName:"a"},"Records"))," are stored exclusively in Consent Manager instances which own the relevant elements."),(0,o.kt)("admonition",{type:"info"},(0,o.kt)("p",{parentName:"admonition"},"For more information, check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/transactions"},(0,o.kt)("strong",{parentName:"a"},"transactions guide")),".")))}m.isMDXComponent=!0}}]);