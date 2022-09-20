"use strict";(self.webpackChunkapi_doc=self.webpackChunkapi_doc||[]).push([[759],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>m});var n=r(7294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function s(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),l=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=l(e.components);return n.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(r),m=o,f=u["".concat(c,".").concat(m)]||u[m]||d[m]||a;return r?n.createElement(f,i(i({ref:t},p),{},{components:r})):n.createElement(f,i({ref:t},p))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<a;l++)i[l]=r[l];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},4722:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>s,toc:()=>l});var n=r(7462),o=(r(7294),r(3905));const a={},i="Records",s={unversionedId:"concepts/records",id:"concepts/records",title:"Records",description:"This section will detail the concept and use of records.",source:"@site/docs/02-concepts/203-records.md",sourceDirName:"02-concepts",slug:"/concepts/records",permalink:"/developers/docs/concepts/records",draft:!1,tags:[],version:"current",sidebarPosition:203,frontMatter:{},sidebar:"docSidebar",previous:{title:"Subjects",permalink:"/developers/docs/concepts/subjects"},next:{title:"Receipts",permalink:"/developers/docs/concepts/receipts"}},c={},l=[{value:"Definition",id:"definition",level:2},{value:"Status rules",id:"status-rules",level:2},{value:"Records VS Receipts",id:"records-vs-receipts",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"records"},"Records"),(0,o.kt)("p",null,"This section will detail the concept and use of records."),(0,o.kt)("h2",{id:"definition"},"Definition"),(0,o.kt)("p",null,"A ",(0,o.kt)("strong",{parentName:"p"},"record")," represents the ",(0,o.kt)("strong",{parentName:"p"},"choice")," made at a ",(0,o.kt)("strong",{parentName:"p"},"certain time")," by a ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/subjects"},(0,o.kt)("strong",{parentName:"a"},"subject"))," about an ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/models"},(0,o.kt)("strong",{parentName:"a"},"element model"))," (processing, preference or condition) which may be accompanied by an ",(0,o.kt)("strong",{parentName:"p"},"information")," model and flagged as concerning a specific ",(0,o.kt)("strong",{parentName:"p"},"object"),"."),(0,o.kt)("p",null,"Its reliability is ensured by:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("strong",{parentName:"li"},"integrity")," flag"),(0,o.kt)("li",{parentName:"ul"},"the identifier of the ",(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/transactions"},(0,o.kt)("strong",{parentName:"a"},"transaction"))," through which the record has been created"),(0,o.kt)("li",{parentName:"ul"},"the ",(0,o.kt)("strong",{parentName:"li"},"serials")," of the ",(0,o.kt)("strong",{parentName:"li"},"element model version")," and the eventual ",(0,o.kt)("strong",{parentName:"li"},"information model version"),", which can be used to re-create the exact form that was shown to the subject"),(0,o.kt)("li",{parentName:"ul"},"a database ",(0,o.kt)("strong",{parentName:"li"},"state"),": pending (waiting for confirmation), committed (ready for use), deleted or rolled back (cancelled)"),(0,o.kt)("li",{parentName:"ul"},"a ",(0,o.kt)("strong",{parentName:"li"},"status")," which is determined every time the record is queried, based on eventual new records, models changes or expiration"),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("strong",{parentName:"li"},"origin")," to announce whether the value has been submitted directly by the subject (and by which means), or by an action from an operator or a peer"),(0,o.kt)("li",{parentName:"ul"},"an ",(0,o.kt)("strong",{parentName:"li"},"author")," field and a ",(0,o.kt)("strong",{parentName:"li"},"comment")," field which may be used by operators or peers to explain why they submitted new values for the subject")),(0,o.kt)("h2",{id:"status-rules"},"Status rules"),(0,o.kt)("p",null,"TODO - work in progress"),(0,o.kt)("h2",{id:"records-vs-receipts"},"Records VS Receipts"),(0,o.kt)("p",null,"TODO - work in progress"))}d.isMDXComponent=!0}}]);