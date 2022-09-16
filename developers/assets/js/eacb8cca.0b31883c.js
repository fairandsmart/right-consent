"use strict";(self.webpackChunkapi_doc=self.webpackChunkapi_doc||[]).push([[6982],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>h});var a=n(7294);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,o=function(e,t){if(null==e)return{};var n,a,o={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var c=a.createContext({}),l=function(e){var t=a.useContext(c),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=l(e.components);return a.createElement(c.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},u=a.forwardRef((function(e,t){var n=e.components,o=e.mdxType,r=e.originalType,c=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=l(n),h=o,m=u["".concat(c,".").concat(h)]||u[h]||d[h]||r;return n?a.createElement(m,i(i({ref:t},p),{},{components:n})):a.createElement(m,i({ref:t},p))}));function h(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var r=n.length,i=new Array(r);i[0]=u;var s={};for(var c in t)hasOwnProperty.call(t,c)&&(s[c]=t[c]);s.originalType=e,s.mdxType="string"==typeof e?e:o,i[1]=s;for(var l=2;l<r;l++)i[l]=n[l];return a.createElement.apply(null,i)}return a.createElement.apply(null,n)}u.displayName="MDXCreateElement"},643:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var a=n(7462),o=(n(7294),n(3905));const r={},i="Quick Start Guide",s={unversionedId:"getting-started/quick-start-guide",id:"getting-started/quick-start-guide",title:"Quick Start Guide",description:"Welcome to the Right Consents quickstart page!",source:"@site/docs/01-getting-started/101-quick-start-guide.md",sourceDirName:"01-getting-started",slug:"/getting-started/quick-start-guide",permalink:"/developers/docs/getting-started/quick-start-guide",draft:!1,tags:[],version:"current",sidebarPosition:101,frontMatter:{},sidebar:"docSidebar",next:{title:"Global Overview",permalink:"/developers/docs/getting-started/overview"}},c={},l=[{value:"Preconditions",id:"preconditions",level:2},{value:"Get and start the project",id:"get-and-start-the-project",level:2},{value:"Demo data",id:"demo-data",level:2},{value:"Your first consent form",id:"your-first-consent-form",level:2},{value:"Elements selection",id:"elements-selection",level:3},{value:"Customization",id:"customization",level:3},{value:"Context creation",id:"context-creation",level:3},{value:"Consent submission",id:"consent-submission",level:2},{value:"Consent use",id:"consent-use",level:2},{value:"View subject records",id:"view-subject-records",level:3},{value:"Submit consent as operator",id:"submit-consent-as-operator",level:3},{value:"Consents history and receipts",id:"consents-history-and-receipts",level:3},{value:"Search by model",id:"search-by-model",level:3},{value:"What&#39;s next?",id:"whats-next",level:2}],p={toc:l};function d(e){let{components:t,...r}=e;return(0,o.kt)("wrapper",(0,a.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"quick-start-guide"},"Quick Start Guide"),(0,o.kt)("p",null,"Welcome to the Right Consents quickstart page!\nThis guide will explain how to set up a full Right Consents stack with docker-compose, import demo data and use the backoffice to discover the simplicity of Right Consents."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Overview",src:n(4188).Z,width:"1263",height:"266"})),(0,o.kt)("h2",{id:"preconditions"},"Preconditions"),(0,o.kt)("p",null,"To complete this guide, you will need:  "),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"About 15 minutes"),(0,o.kt)("li",{parentName:"ul"},"Git"),(0,o.kt)("li",{parentName:"ul"},"Docker compose")),(0,o.kt)("admonition",{type:"caution"},(0,o.kt)("p",{parentName:"admonition"},"Please ensure you have ",(0,o.kt)("a",{parentName:"p",href:"https://docs.docker.com/compose/install/"},"docker compose")," installed before going on.")),(0,o.kt)("h2",{id:"get-and-start-the-project"},"Get and start the project"),(0,o.kt)("p",null,"All the required components are available as ",(0,o.kt)("strong",{parentName:"p"},"Docker images"),", which is ",(0,o.kt)("em",{parentName:"p"},"de facto")," the easiest way to start a local instance.\nYou can find a ",(0,o.kt)("strong",{parentName:"p"},"ready-to-use Docker compose")," configuration in the Right Consents ",(0,o.kt)("a",{parentName:"p",href:"https://github.com/fairandsmart/right-consents"},"GitHub repository"),".\nClone it using the commands:"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://github.com/fairandsmart/right-consents.git\n$ cd right-consents\n$ docker-compose up #for French use: docker-compose --env-file ./config/fr.env up\n")),(0,o.kt)("p",null,"Wait for everything to start, then you can access the different components:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"URL: ",(0,o.kt)("a",{parentName:"li",href:"http://localhost:4286"},"http://localhost:4286")),(0,o.kt)("li",{parentName:"ul"},"Username: ",(0,o.kt)("inlineCode",{parentName:"li"},"demo@demo.com")),(0,o.kt)("li",{parentName:"ul"},"Password: ",(0,o.kt)("inlineCode",{parentName:"li"},"demo42"))),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Home",src:n(5083).Z,width:"1845",height:"937"})),(0,o.kt)("h2",{id:"demo-data"},"Demo data"),(0,o.kt)("p",null,"Check that the demo models have been successfully imported by going through the Configuration section ",(0,o.kt)("strong",{parentName:"p"},"libraries"),", you should find:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"One model in the Information library"),(0,o.kt)("li",{parentName:"ul"},"Four models in the Processing library"),(0,o.kt)("li",{parentName:"ul"},"Four models in the Preferences library"),(0,o.kt)("li",{parentName:"ul"},"One model in the Emails library")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Home",src:n(4077).Z,width:"1845",height:"937"})),(0,o.kt)("p",null,"This guide will not go in depth about models, but you can check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/models"},(0,o.kt)("strong",{parentName:"a"},"models concept page"))," for more information about them."),(0,o.kt)("h2",{id:"your-first-consent-form"},"Your first consent form"),(0,o.kt)("h3",{id:"elements-selection"},"Elements selection"),(0,o.kt)("p",null,"Click on the Integration section to reach the Collect page.\nThis will give you access to a ",(0,o.kt)("strong",{parentName:"p"},"graphical editor")," which will help you create your first consent form."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Layout",src:n(7051).Z,width:"1845",height:"937"})),(0,o.kt)("p",null,"On the right side of the screen, you should see four ",(0,o.kt)("strong",{parentName:"p"},"libraries"),".\nThe first one holds the ",(0,o.kt)("em",{parentName:"p"},"information")," model, which is selected by default in the central ",(0,o.kt)("strong",{parentName:"p"},"layout"),"."),(0,o.kt)("p",null,"The next two libraries are the ",(0,o.kt)("em",{parentName:"p"},"processing")," and the ",(0,o.kt)("em",{parentName:"p"},"preferences")," libraries.\nDrag and drop two ",(0,o.kt)("em",{parentName:"p"},"processing")," models and one ",(0,o.kt)("em",{parentName:"p"},"preference")," model into the layout.\nYou can modify their order easily, as well as change your mind by simply dragging and dropping model cards back into their own library."),(0,o.kt)("p",null,'Then, click on the "Next" button.'),(0,o.kt)("h3",{id:"customization"},"Customization"),(0,o.kt)("p",null,'This second step shows you a preview of the consent form and allows some customization.\nTo keep this guide simple, we will ignore this step for now, so click on the "Next" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Preview",src:n(1054).Z,width:"1845",height:"937"})),(0,o.kt)("h3",{id:"context-creation"},"Context creation"),(0,o.kt)("p",null,"This last step will allow you to generate a real consent form for one person, identified by the ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/subjects"},(0,o.kt)("strong",{parentName:"a"},"subject"))," field.\nWrite the demo identifier ",(0,o.kt)("inlineCode",{parentName:"p"},"test-subject")," into this field."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Context",src:n(9981).Z,width:"1845",height:"937"})),(0,o.kt)("p",null,"You can ignore the other fields for now (check the ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/transactions"},(0,o.kt)("strong",{parentName:"a"},"consent context documentation")),' for more information).\nFinally, click on the "Get API call URL" button, then copy the URL which appeared.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - URL",src:n(9701).Z,width:"1845",height:"937"})),(0,o.kt)("h2",{id:"consent-submission"},"Consent submission"),(0,o.kt)("p",null,"Open a private window in your browser (or a window in another browser) to ensure you are not logged anymore, for the sake of the demo.\nPaste the URL and your form should appear: you are now authenticated as ",(0,o.kt)("inlineCode",{parentName:"p"},"test-subject")," by the embedded ",(0,o.kt)("strong",{parentName:"p"},"token"),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Consent Form",src:n(2144).Z,width:"1845",height:"937"})),(0,o.kt)("p",null,"Accept one ",(0,o.kt)("em",{parentName:"p"},"processing")," and refuse the other, and select a choice for the ",(0,o.kt)("em",{parentName:"p"},"preference"),', then click on "Submit".'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Consent Transaction",src:n(9575).Z,width:"1845",height:"937"})),(0,o.kt)("p",null,'You should be redirected to the transaction hub, which means your consent has been submitted successfully.\nClick on "View receipt" to access an HTML representation of the ',(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/receipts"},(0,o.kt)("strong",{parentName:"a"},"consent receipt"))," which has been generated from the ",(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/records"},(0,o.kt)("strong",{parentName:"a"},"records")),"."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Consent Receipt",src:n(525).Z,width:"1845",height:"937"})),(0,o.kt)("h2",{id:"consent-use"},"Consent use"),(0,o.kt)("h3",{id:"view-subject-records"},"View subject records"),(0,o.kt)("p",null,"Head back to the admin backoffice and type ",(0,o.kt)("inlineCode",{parentName:"p"},"test-subject")," in the search bar in the top-right corner of the screen."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Search User",src:n(1689).Z,width:"1845",height:"937"})),(0,o.kt)("p",null,"This will give you access to the ",(0,o.kt)("strong",{parentName:"p"},"operator page")," of this subject. You can check that the records are present and valid for each ",(0,o.kt)("em",{parentName:"p"},"processing")," and ",(0,o.kt)("em",{parentName:"p"},"preference")," element."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Operator Page",src:n(5175).Z,width:"1845",height:"937"})),(0,o.kt)("h3",{id:"submit-consent-as-operator"},"Submit consent as operator"),(0,o.kt)("p",null,'Click on the "Actions" button on the line of the refused ',(0,o.kt)("em",{parentName:"p"},"processing"),', then on the "Edit" button.\nSelect "Accept" in the dropdown: a log displays your selection on the right side of the screen.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Operator Submit",src:n(7787).Z,width:"1845",height:"937"})),(0,o.kt)("p",null,'Click on "Save my changes", uncheck the "Notify the user by email" checkbox for now and hit "Save".'),(0,o.kt)("h3",{id:"consents-history-and-receipts"},"Consents history and receipts"),(0,o.kt)("p",null,"Back on the operator page, you should see that both ",(0,o.kt)("em",{parentName:"p"},"processing"),' elements are now marked as valid.\nClick again on the "Actions" button on the line of the previously refused ',(0,o.kt)("em",{parentName:"p"},"processing"),', then on the "History" button.'),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Operator Page History",src:n(8535).Z,width:"1845",height:"937"})),(0,o.kt)("p",null,'There, you can see the records history with their origin - "web form" and "operator" to ensure transparency.\nClick on the "View receipt" button of a line to get the ',(0,o.kt)("a",{parentName:"p",href:"/docs/concepts/receipts"},(0,o.kt)("strong",{parentName:"a"},"PDF receipt")),", which is a legal proof of the end user's consent."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - PDF Receipt",src:n(7968).Z,width:"1845",height:"937"})),(0,o.kt)("h3",{id:"search-by-model"},"Search by model"),(0,o.kt)("p",null,"If you wish to interrogate the database to gather all the subjects who answered to one model, you can dive into the ",(0,o.kt)("strong",{parentName:"p"},"Search page")," in the Integration section."),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"Quick Start Guide - Search Page",src:n(6144).Z,width:"1845",height:"937"})),(0,o.kt)("h2",{id:"whats-next"},"What's next?"),(0,o.kt)("p",null,"Now that you are familiar with using Right Consents, you might be interested in further reads:"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/getting-started/overview"},"Global overview")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/concepts/guide"},"Concepts & Terminology")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/docs/guides/first-consent-form-guide"},"Guides")),(0,o.kt)("li",{parentName:"ul"},(0,o.kt)("a",{parentName:"li",href:"/apiReference"},"API documentation"))))}d.isMDXComponent=!0},9981:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/collect-context-ab1e112dbb4a9e0bb1ab9c48fb1dad16.png"},7051:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/collect-layout-86e357530a4dce07a77b9baf8e4d3d35.png"},1054:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/collect-preview-d7b2ccb365229e11bb031ed7c7f41fc6.png"},9701:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/collect-url-eda40a89736f107f7ebb74a5f01f25d3.png"},4077:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/configuration-processing-8a7a16df98e6518fe72b77168c98e28f.png"},2144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/consent-form-2da91f6dfc90c999441b0ca0348acbfa.png"},525:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/consent-receipt-21f61ad2c736741d4619db422b5dee2b.png"},9575:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/consent-transaction-cf579cbeccfba9f90755951692fe336b.png"},5083:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/home-1a1d636f1391ea053deb258fbfadbe7a.png"},7787:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/operator-log-947e25ad0e6f66114101163e2c138a77.png"},8535:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/operator-page-history-9d6bdec2841910a4452030276450f24c.png"},5175:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/operator-page-5d6f711afda57cf7abe4b7d8fb511813.png"},7968:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/pdf-receipt-6db3e27a5aac518560cadb9fe4ea3546.png"},6144:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/search-page-50fc230d621fb857bf4f93c17c632a63.png"},1689:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/search-user-8437731032bf5fa1383b62aa8ad981c2.png"},4188:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/startserverguide-overview-b9cc039369022b6348b7d5ae366d5541.jpg"}}]);