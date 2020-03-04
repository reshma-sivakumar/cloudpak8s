(window.webpackJsonp=window.webpackJsonp||[]).push([[38],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var r=a("pOBw"),l=a("q1tI"),n=a.n(l),o=a("NmYn"),i=a.n(o),c=a("OKom"),b=a("k4MR"),s=a("TSYQ"),p=a.n(s),u=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,r=e.tabs,l=void 0===r?[]:r;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=l.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},O=a("pEPl"),h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,r=O.data.site.siteMetadata.repository,l=a||r,n=l.baseUrl,o=l.subDirectory,i=n+"/edit/"+l.branch+o+"/src/pages"+t;return n?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:i},"Edit this page on GitHub"))):null},f=a("FCXl"),y=(a("Oyvg"),a("Wbzz")),g=a("I8xM");var N=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=i()(e,{lower:!0}),n=l===r,o=new RegExp(r+"(?!-)"),c=a.replace(o,l);return Object(d.b)("li",{key:e,className:p()((t={},t[g.selectedItem]=n,t),g.listItem)},Object(d.b)(y.Link,{className:g.link,to:""+c},e))}));return Object(d.b)("div",{className:g.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:g.list},l))))))},r}(n.a.Component),v=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,l=e.location,n=e.Title,o=t.frontmatter,s=void 0===o?{}:o,p=t.relativePagePath,u=t.titleType,O=s.tabs,h=s.title,y=s.theme,g=s.description,w=s.keywords,C=r.data.site.pathPrefix,x=C?l.pathname.replace(C,""):l.pathname,k=O?x.split("/").filter(Boolean).slice(-1)[0]||i()(O[0],{lower:!0}):"";return Object(d.b)(b.a,{tabs:O,homepage:!1,theme:y,pageTitle:h,pageDescription:g,pageKeywords:w,titleType:u},Object(d.b)(m,{title:n?Object(d.b)(n,null):h,label:"label",tabs:O}),O&&Object(d.b)(N,{slug:x,tabs:O,currentTab:k}),Object(d.b)(v.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:p})),Object(d.b)(f.a,{pageContext:t,location:l,slug:x,tabs:O,currentTab:k}),Object(d.b)(c.a,null))}},WTdm:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return o})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),l=a("013z");a("qKvR");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var o={},i={_frontmatter:o},c=l.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,l={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(l[a]=e[a]);return l}(e,["components"]);return Object(r.b)(c,n({},i,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("h2",null,"Introduction"),Object(r.b)("p",null,"This page describes all the steps on how to deploy the Integration Cloud Pak to managed openshift on IBM cloud.  This requires a paid IBM Cloud Account with the ability to create Red Hat Open Shift clusters.  It also requires a license for which can be used to deploy the Cloud Pak for Integration."),Object(r.b)("h2",null,"Deploy a managed OpenShift Cluster on IBM Cloud"),Object(r.b)("ol",{start:6},Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Log into your IBM Cloud Account.  From the Dashboard on the Search Bar, enter in ",Object(r.b)("inlineCode",{parentName:"p"},"Cloud Pak for Integration"),".  It will take you to the section where you can create your own cluster.")),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"Follow these steps to deploy Red Hat Open Shift and the Common Services — ",Object(r.b)("a",n({parentName:"p"},{href:"https://cloud.ibm.com/docs/cloud-pak-integration?topic=cloud-pak-integration-getting-started"}),"here"))),Object(r.b)("li",{parentName:"ol"},Object(r.b)("p",{parentName:"li"},"After you complete the installation process it will create some default namespaces as well as apply some general security required to install the cloud pak.  It will also automatically create a ",Object(r.b)("inlineCode",{parentName:"p"},"Pull Secret")," for you that you can use to deploy capabilities.  This secret is called ",Object(r.b)("inlineCode",{parentName:"p"},"ibm-entitlement-key")," and will be referenced multiple times"))),Object(r.b)("h2",null,"Deploy Capabilities"),Object(r.b)("h3",null,"you will want to create the Tracing capability first"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"../deploy-tracing"}),"Tracing")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"../deploy-integration"}),"App Connect")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"../deploy-api-mgmt"}),"API Connect")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"../deploy-queue-manager"}),"MQ")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"../deploy-eventstreams"}),"Event Streams")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"../deploy-fast-file-transfer"}),"Aspera")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"../deploy-secure-gateway"}),"DataPower")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"../deploy-asset-repo"}),"Asset Repository"))))}b.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://ocp43.cloudpak8s.io","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-integration-roks-index-mdx-edcd4f82a2507aac60bf.js.map