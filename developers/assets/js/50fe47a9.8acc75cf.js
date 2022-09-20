"use strict";(self.webpackChunkapi_doc=self.webpackChunkapi_doc||[]).push([[294],{3905:(e,t,n)=>{n.d(t,{Zo:()=>d,kt:()=>m});var o=n(7294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,o,a=function(e,t){if(null==e)return{};var n,o,a={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=o.createContext({}),c=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},d=function(e){var t=c(e.components);return o.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},u=o.forwardRef((function(e,t){var n=e.components,a=e.mdxType,i=e.originalType,s=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),u=c(n),m=a,h=u["".concat(s,".").concat(m)]||u[m]||p[m]||i;return n?o.createElement(h,r(r({ref:t},d),{},{components:n})):o.createElement(h,r({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=n.length,r=new Array(i);r[0]=u;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l.mdxType="string"==typeof e?e:a,r[1]=l;for(var c=2;c<i;c++)r[c]=n[c];return o.createElement.apply(null,r)}return o.createElement.apply(null,n)}u.displayName="MDXCreateElement"},1870:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>p,frontMatter:()=>i,metadata:()=>l,toc:()=>c});var o=n(7462),a=(n(7294),n(3905));const i={},r="Manage Terms Of Services",l={unversionedId:"guides/manage-tos-mobile-app-guide",id:"guides/manage-tos-mobile-app-guide",title:"Manage Terms Of Services",description:"Learn how to integrate a terms of service consent form in a native Android mobile application using Right Consents backoffice.",source:"@site/docs/03-guides/105-manage-tos-mobile-app-guide.md",sourceDirName:"03-guides",slug:"/guides/manage-tos-mobile-app-guide",permalink:"/developers/docs/guides/manage-tos-mobile-app-guide",draft:!1,tags:[],version:"current",sidebarPosition:105,frontMatter:{},sidebar:"docSidebar",previous:{title:"Collect from existing form",permalink:"/developers/docs/guides/collect-into-form-guide"},next:{title:"Install from Sources",permalink:"/developers/docs/techdoc/full-install-guide"}},s={},c=[{value:"Prerequisites",id:"prerequisites",level:2},{value:"Overview",id:"overview",level:2},{value:"Installation",id:"installation",level:2},{value:"Fair&amp;Smart Docker Environment",id:"fairsmart-docker-environment",level:3},{value:"Keycloak",id:"keycloak",level:3},{value:"Android Studio",id:"android-studio",level:3},{value:"Import the project to Android Studio",id:"import-the-project-to-android-studio",level:3},{value:"Create an Android Emulator",id:"create-an-android-emulator",level:3},{value:"Configuration",id:"configuration",level:2},{value:"Create terms of service",id:"create-terms-of-service",level:3},{value:"Implementation",id:"implementation",level:3},{value:"Run the application",id:"run-the-application",level:3},{value:"Application",id:"application",level:2},{value:"Workflow",id:"workflow",level:3},{value:"Retrieve Consent Records",id:"retrieve-consent-records",level:3}],d={toc:c};function p(e){let{components:t,...i}=e;return(0,a.kt)("wrapper",(0,o.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"manage-terms-of-services"},"Manage Terms Of Services"),(0,a.kt)("p",null,"Learn how to integrate a terms of service ",(0,a.kt)("strong",{parentName:"p"},"consent form")," in a native Android mobile application using Right Consents ",(0,a.kt)("strong",{parentName:"p"},"backoffice"),"."),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Use the knowledge you gain on previous guides"),(0,a.kt)("li",{parentName:"ul"},"Create Terms of service using the backoffice web application and use it in a mobile application")),(0,a.kt)("h2",{id:"prerequisites"},"Prerequisites"),(0,a.kt)("p",null,"To complete this guide you need :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Roughly 45 minutes"),(0,a.kt)("li",{parentName:"ul"},"A running Right Consents environment"),(0,a.kt)("li",{parentName:"ul"},"A complete installation of Android Studio and its dependencies")),(0,a.kt)("h2",{id:"overview"},"Overview"),(0,a.kt)("p",null,"In this guide you will integrate a newly created consent form, including terms of service, in a mobile application."),(0,a.kt)("p",null,"This guide also covers some basic aspects of designing consent form layout by assembling your consent library elements in various way."),(0,a.kt)("h2",{id:"installation"},"Installation"),(0,a.kt)("h3",{id:"fairsmart-docker-environment"},"Fair&Smart Docker Environment"),(0,a.kt)("p",null,"Please make sure to have a running configured stack with all the components needed to run a local instance of Right Consents. The tutorial can be found ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/quick-start-guide"},(0,a.kt)("strong",{parentName:"a"},"here"))),(0,a.kt)("h3",{id:"keycloak"},"Keycloak"),(0,a.kt)("p",null,"In order to enable a redirection back to the application after sign-in/login you will need to modify the keycloak client configuration."),(0,a.kt)("p",null,"First, go to the ",(0,a.kt)("strong",{parentName:"p"},"consent-manager-gui")," client configuration, it can be found ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4285/auth/admin/master/console/#/realms/RightConsents/clients/f047bc78-924d-4db0-bdf9-90b3294a5375"},(0,a.kt)("strong",{parentName:"a"},"here"))),(0,a.kt)("p",null,"On the client page you will see, under the ",(0,a.kt)("strong",{parentName:"p"},"Settings")," section, an input field named ",(0,a.kt)("strong",{parentName:"p"},"Valid Redirect URIs"),". Please make sure to add the following URI"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},"fs://oauthresponse*\n")),(0,a.kt)("h3",{id:"android-studio"},"Android Studio"),(0,a.kt)("p",null,"An up-to-date installation of ",(0,a.kt)("strong",{parentName:"p"},"Android Studio")," is ",(0,a.kt)("strong",{parentName:"p"},"required")," to run the Android application.\nVisit the ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio"},"Android Studio's website")," to complete the installation of the software."),(0,a.kt)("h3",{id:"import-the-project-to-android-studio"},"Import the project to Android Studio"),(0,a.kt)("p",null,"You now have Android Studio up and running."),(0,a.kt)("p",null,"The first step is to download the Android application source code. It can be found on the source repository on ",(0,a.kt)("a",{parentName:"p",href:"https://fairandsmart.github.com"},"GitHub")," or by running the following command in your terminal"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"$ git clone https://gitlab.fairandsmart.tech/opensource/manage-tos-mobile-app-guide.git\n")),(0,a.kt)("p",null,"Import the newly downloaded project into Android Studio, proceed as follows:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"File")," > ",(0,a.kt)("strong",{parentName:"li"},"New")," > ",(0,a.kt)("strong",{parentName:"li"},"Import Project"),"."),(0,a.kt)("li",{parentName:"ul"},"In the window that appears, navigate to the ",(0,a.kt)("strong",{parentName:"li"},"root directory")," of the project you want to import."),(0,a.kt)("li",{parentName:"ul"},"Click ",(0,a.kt)("strong",{parentName:"li"},"OK"),".")),(0,a.kt)("p",null,"Android Studio then opens the project in a new IDE window and indexes its contents. "),(0,a.kt)("h3",{id:"create-an-android-emulator"},"Create an Android Emulator"),(0,a.kt)("p",null,"The project is now imported to Android Studio. You will need a virtual device, called an emulator, to run the Android application locally. Few steps are needed to create it, a complete tutorial is available on the Android Studio website ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run/managing-avds#createavd"},(0,a.kt)("strong",{parentName:"a"},"here")),"."),(0,a.kt)("p",null,"Here is an example of a created emulator in Android studio :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"OS version : ",(0,a.kt)("strong",{parentName:"li"},"Android 11.0")),(0,a.kt)("li",{parentName:"ul"},"Device type : ",(0,a.kt)("strong",{parentName:"li"},"Google Pixel 5")),(0,a.kt)("li",{parentName:"ul"},"Orientation : ",(0,a.kt)("strong",{parentName:"li"},"Portrait"))),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Manage Terms of Service Guide - Configuration",src:n(227).Z,width:"555",height:"1009"})),(0,a.kt)("h2",{id:"configuration"},"Configuration"),(0,a.kt)("p",null,"This guide presents a use case on how to create ",(0,a.kt)("strong",{parentName:"p"},"Terms Of Service")," using the Right Consents community platform and how to implement them to an ",(0,a.kt)("strong",{parentName:"p"},"Android Application")),(0,a.kt)("h3",{id:"create-terms-of-service"},"Create terms of service"),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"}," For the full presentation of the backoffice please visit the ",(0,a.kt)("a",{parentName:"p",href:"../getting-started/quick-start-guide"},"Quick start guide"))),(0,a.kt)("p",null,"Terms of service can be created by using the backoffice interface and initialize a ",(0,a.kt)("strong",{parentName:"p"},"conditions")," data model."),(0,a.kt)("p",null,"To begin, please proceed to the backoffice website localted ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4286"},(0,a.kt)("strong",{parentName:"a"},"here"))," with the following credentials:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Username: ",(0,a.kt)("a",{parentName:"li",href:"mailto:demo@demo.com"},"demo@demo.com")),(0,a.kt)("li",{parentName:"ul"},"Password: demo42")),(0,a.kt)("p",null,"Go to the ",(0,a.kt)("strong",{parentName:"p"},"Terms and Conditions")," library located under the ",(0,a.kt)("strong",{parentName:"p"},"Configuration")," section"),(0,a.kt)("p",null,"In the Configuration section you should be able to open the ",(0,a.kt)("strong",{parentName:"p"},"Terms and Conditions")," sub section and click on the plus in order to create a new one."),(0,a.kt)("p",null,"Choose a relevant name and description for that model (only for internal management). After model creation, a key is allocated to that model (conditions.001) that you'll have to use later as a reference to that model. Then you can populate the model data content. One single model can have multiple version of data content."),(0,a.kt)("p",null,"Exemple of data content: "),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-text"},'- Title: Android application Terms of Service\n- Body: The following Terms of Service\n        Agreement (the "TOS") is a legally binding agreement that shall govern the relationship\n        with our users and others which may interact or interface with the Application and its services\n- Behaviour: Check or Uncheck the box depending on the wanted behaviour\n')),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"For full documentation about Terms Of Service data model please visit the ",(0,a.kt)("a",{parentName:"p",href:"../concepts/models#terms-and-conditions-data-model"},"Consent Elements Doc"))),(0,a.kt)("p",null,"Now you are ready for publishing that version of the conditions model by clicking on 'Save Draft' button and then on the 'Activate' button."),(0,a.kt)("p",null,"By activating the version you will be able to use it for collecting consent. As soon as a consent is collected using that version of the conditions model, you will no longer be able to delete it."),(0,a.kt)("p",null,"Information about model lifecycle is visible in the top of the right panel. You may notice that version 1.0 is active and that a unique serial number has been allocated to that particular version."),(0,a.kt)("p",null,"If you perform modification on that model you will have to activate the next version and a popup will ask you for a Major or Minor release evolution. A Major one will result in considering already collected consent with that conditions to be stalled whereas a Minor one will be compatible with already collected consent but will replace previous one in the next generated consent transaction."),(0,a.kt)("h3",{id:"implementation"},"Implementation"),(0,a.kt)("p",null,"Terms of service are now created, published and activated. You can now use it in this Android Application in just few steps:"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Open the project in Android Studio "),(0,a.kt)("li",{parentName:"ul"},"In the file explorer, locate the file name ",(0,a.kt)("inlineCode",{parentName:"li"},"CmApiConfig.kt")," (Under  ",(0,a.kt)("strong",{parentName:"li"},"app")," > ",(0,a.kt)("strong",{parentName:"li"},"java")," > ",(0,a.kt)("strong",{parentName:"li"},"com.fs.managetosmobileapp")," > ",(0,a.kt)("strong",{parentName:"li"},"config")," folder)"),(0,a.kt)("li",{parentName:"ul"},"Insert the key corresponding to the Terms of Service data model")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-kotlin"},'object ConsentManagerConfig {\n    const val baseUrl = "http://10.0.2.2:4287"\n    const val redirectUri = "fs://tos"\n\n    const val conditionsKey = "conditions.001" <- Key of Terms of Service\n}\n')),(0,a.kt)("h3",{id:"run-the-application"},"Run the application"),(0,a.kt)("p",null,"The application is configured, the consent context including the newly created Terms of Service is implemented. The last thing to do before testing the application is to start the Android Studio emulator created ",(0,a.kt)("a",{parentName:"p",href:"#create-an-android-emulator"},(0,a.kt)("strong",{parentName:"a"},"here"))),(0,a.kt)("p",null,"Please proceed as follows :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"In the toolbar, select ",(0,a.kt)("strong",{parentName:"li"},"app")," from the run configurations drop-down menu."),(0,a.kt)("li",{parentName:"ul"},"From the target device drop-down menu, select the device that you have created."),(0,a.kt)("li",{parentName:"ul"},"Click on the ",(0,a.kt)("strong",{parentName:"li"},"run")," button, symbolized by a green triangle")),(0,a.kt)("p",null,"That's it you have launch the application locally on your emulator."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"To get further informations on how to start an emulator using Android studio, please refer to the official ",(0,a.kt)("a",{parentName:"p",href:"https://developer.android.com/studio/run#basic-build-run"},"website"))),(0,a.kt)("h2",{id:"application"},"Application"),(0,a.kt)("p",null,"The application is now running, the Right Consents Community environment is set. Let's dive in the application workflow and how to generate consent forms that includes the Terms of Service created."),(0,a.kt)("h3",{id:"workflow"},"Workflow"),(0,a.kt)("p",null,"By starting the application, you will initiate the login/sign-up process. The application will open a webview that redirects the user to the Keycloak website. "),(0,a.kt)("p",null,"The user can :"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"Create a new account using his personal information"),(0,a.kt)("li",{parentName:"ul"},"Use an existing account to log in the application")),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Login page - Android Application",src:n(873).Z,width:"373",height:"711"})),(0,a.kt)("p",null,"Once the identification phase done, the application will verify if the connected user as already submitted a consent that includes the Terms of Service. This is done by retrieving the connected user records and checking if the latest submitted consent value is ",(0,a.kt)("strong",{parentName:"p"},"valid")),(0,a.kt)("p",null,"If the user has already submitted a consent, the Main page will be shown (normal behaviour), if not a new non-closable webview will be open showing the corresponding consent page. The user will not be able to return to the main page if the consent is not submitted."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Consent page - Android Application",src:n(9578).Z,width:"374",height:"711"})),(0,a.kt)("p",null,"At any time, the user can access to consent created earlier to review it. A webview similar to the previous one will be shown."),(0,a.kt)("admonition",{type:"info"},(0,a.kt)("p",{parentName:"admonition"},"If the Terms of Service data model is updated with a major version published, the consent will revoked. Consequences are that the application will show the consent form to the user. The user will be unable to access the application if no consent is submitted"),(0,a.kt)("p",{parentName:"admonition"},"To see further information about conditions data model please view the above ",(0,a.kt)("a",{parentName:"p",href:"#create-terms-of-service"},"section"))),(0,a.kt)("p",null,"By retrieving user records the application can also display content accordingly. If a user has accepted or declined the application Terms of Service, a message will be displayed according to the response. Same behaviour for any records that is irrelavant and out of date."),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Main page - Android Application",src:n(1585).Z,width:"350",height:"671"})),(0,a.kt)("h3",{id:"retrieve-consent-records"},"Retrieve Consent Records"),(0,a.kt)("p",null,"The final step, in order to access consents records created using the Android application, go to the ",(0,a.kt)("a",{parentName:"p",href:"http://localhost:4286"},"Back office")," under the page ",(0,a.kt)("strong",{parentName:"p"},"Integration > Search"),"."),(0,a.kt)("p",null,"Here, you can access the consent records generated by users and filter them by entry and value entry like so:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Search consent records - Back office",src:n(7903).Z,width:"475",height:"271"})),(0,a.kt)("p",null,"Then click on search, a list of consent will be displayed on a table."),(0,a.kt)("p",null,"From here you can export all the consent records generated by clicking on the ",(0,a.kt)("strong",{parentName:"p"},"export")," button:"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"Export consent records - Back office",src:n(5109).Z,width:"1922",height:"951"})),(0,a.kt)("p",null,"A .CSV file will be created, containing all the information linked to the user consent record (Record key, Record value, Email Address, ...)."))}p.isMDXComponent=!0},5109:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/existing-form-records-export-a12b21e71771a10e058930de96425ea8.png"},9578:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/managetosguide-consent-5f7b56a125ce81f655da2cd6af220140.png"},227:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/managetosguide-emulator-cd0b88414f7ed959872120b34e6c5dcd.png"},873:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/managetosguide-keycloak-862320ebc42d8e6264a8ac9a8f81da80.png"},1585:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/managetosguide-main-1a00b0cea308de9154b3b851631e888c.png"},7903:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/managetosguide-records-search-55d88bf0b941d014c6fff07ab26eb29d.png"}}]);