"use strict";(self.webpackChunkapi_doc=self.webpackChunkapi_doc||[]).push([[995],{3905:(e,t,n)=>{n.d(t,{Zo:()=>l,kt:()=>m});var r=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function c(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var s=r.createContext({}),p=function(e){var t=r.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):c(c({},t),e)),n},l=function(e){var t=p(e.components);return r.createElement(s.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),f=p(n),m=o,d=f["".concat(s,".").concat(m)]||f[m]||u[m]||a;return n?r.createElement(d,c(c({ref:t},l),{},{components:n})):r.createElement(d,c({ref:t},l))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,c=new Array(a);c[0]=f;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i.mdxType="string"==typeof e?e:o,c[1]=i;for(var p=2;p<a;p++)c[p]=n[p];return r.createElement.apply(null,c)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},8385:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>c,default:()=>u,frontMatter:()=>a,metadata:()=>i,toc:()=>p});var r=n(7462),o=(n(7294),n(3905));const a={},c="Receipts",i={unversionedId:"concepts/receipts",id:"concepts/receipts",title:"Receipts",description:"Definition",source:"@site/docs/02-concepts/204-receipts.md",sourceDirName:"02-concepts",slug:"/concepts/receipts",permalink:"/developers/docs/concepts/receipts",draft:!1,tags:[],version:"current",sidebarPosition:204,frontMatter:{},sidebar:"docSidebar",previous:{title:"Records",permalink:"/developers/docs/concepts/records"},next:{title:"Keys",permalink:"/developers/docs/concepts/keys"}},s={},p=[{value:"Definition",id:"definition",level:2},{value:"Access",id:"access",level:2}],l={toc:p};function u(e){let{components:t,...a}=e;return(0,o.kt)("wrapper",(0,r.Z)({},l,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"receipts"},"Receipts"),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"Receipts are ",(0,o.kt)("strong",{parentName:"p"},"files")," created each time a ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/subjects"},(0,o.kt)("strong",{parentName:"a"},"subject"))," submits their consent and choices about a given ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/transactions"},(0,o.kt)("strong",{parentName:"a"},"context")),".\nThey are stored in the easy-to-process ",(0,o.kt)("strong",{parentName:"p"},"XML")," format, but can also be generated in a more human-readable format (namely ",(0,o.kt)("strong",{parentName:"p"},"PDF"),")."),(0,o.kt)("p",null,"They can act as ",(0,o.kt)("strong",{parentName:"p"},"proof of consent")," as they hold all the necessary information:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"the subject identifier"),(0,o.kt)("li",{parentName:"ul"},"the language used"),(0,o.kt)("li",{parentName:"ul"},"the collection method"),(0,o.kt)("li",{parentName:"ul"},"the collection and expiration time"),(0,o.kt)("li",{parentName:"ul"},"the receipt identifier"),(0,o.kt)("li",{parentName:"ul"},"the exact content of each element (processing, preferences, terms & conditions) which was shown to the subject"),(0,o.kt)("li",{parentName:"ul"},"the subject's choice about each element"),(0,o.kt)("li",{parentName:"ul"},"the name of the data controller"),(0,o.kt)("li",{parentName:"ul"},"a link to the privacy policy"),(0,o.kt)("li",{parentName:"ul"},"a QR code allowing the subject to change their choices (if possible)")),(0,o.kt)("h2",{id:"access"},"Access"),(0,o.kt)("p",null,"If you wish so, you can configure your contexts so that subjects will receive a ",(0,o.kt)("strong",{parentName:"p"},"PDF receipt by email")," upon consent submission.\nThey can then freely dispose of these proofs."),(0,o.kt)("p",null,"All receipts are also accessible via the ",(0,o.kt)("strong",{parentName:"p"},"operator backoffice")," and, of course, through the ",(0,o.kt)("strong",{parentName:"p"},"API"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Receipts Guide - Operator View",src:n(3351).Z,width:"775",height:"321"})))}u.isMDXComponent=!0},3351:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/operator-receipt-b36ae87647fa1ac368ebc4f6957e1b11.png"}}]);