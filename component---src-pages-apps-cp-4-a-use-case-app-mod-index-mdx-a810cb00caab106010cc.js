(window.webpackJsonp=window.webpackJsonp||[]).push([[9],{"013z":function(t,e,a){"use strict";a("KKXr"),a("pIFo");var r=a("pOBw"),i=a("q1tI"),n=a.n(i),o=a("NmYn"),l=a.n(o),c=a("OKom"),p=a("k4MR"),b=a("TSYQ"),s=a.n(b),u=a("QH2O"),d=a("qKvR"),h=function(t){var e,a=t.title,r=t.tabs,i=void 0===r?[]:r;return Object(d.b)("div",{className:s()(u.pageHeader,(e={},e[u.withTabs]=i.length,e))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},m=a("pEPl"),O=a("BAC9"),g=function(t){var e=t.relativePagePath,a=t.repository,r=m.data.site.siteMetadata.repository,i=a||r,n=i.baseUrl,o=i.subDirectory,l=n+"/edit/"+i.branch+o+"/src/pages"+e;return n?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:l},"Edit this page on GitHub"))):null},f=a("FCXl"),j=(a("Oyvg"),a("Wbzz")),v=a("I8xM");var y=function(t){var e,a;function r(){return t.apply(this,arguments)||this}return a=t,(e=r).prototype=Object.create(a.prototype),e.prototype.constructor=e,e.__proto__=a,r.prototype.render=function(){var t=this.props,e=t.tabs,a=t.slug,r=a.split("/").filter(Boolean).slice(-1)[0],i=e.map((function(t){var e,i=l()(t,{lower:!0}),n=i===r,o=new RegExp(r+"(?!-)"),c=a.replace(o,i);return Object(d.b)("li",{key:t,className:s()((e={},e[v.selectedItem]=n,e),v.listItem)},Object(d.b)(j.Link,{className:v.link,to:""+c},t))}));return Object(d.b)("div",{className:v.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:v.list},i))))))},r}(n.a.Component),w=a("MjG9");e.a=function(t){var e=t.pageContext,a=t.children,i=t.location,n=t.Title,o=e.frontmatter,b=void 0===o?{}:o,s=e.relativePagePath,u=e.titleType,m=b.tabs,O=b.title,j=b.theme,v=b.description,N=b.keywords,x=r.data.site.pathPrefix,k=x?i.pathname.replace(x,""):i.pathname,M=m?k.split("/").filter(Boolean).slice(-1)[0]||l()(m[0],{lower:!0}):"";return Object(d.b)(p.a,{tabs:m,homepage:!1,theme:j,pageTitle:O,pageDescription:v,pageKeywords:N,titleType:u},Object(d.b)(h,{title:n?Object(d.b)(n,null):O,label:"label",tabs:m}),m&&Object(d.b)(y,{slug:k,tabs:m,currentTab:M}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(g,{relativePagePath:s})),Object(d.b)(f.a,{pageContext:e,location:i,slug:k,tabs:m,currentTab:M}),Object(d.b)(c.a,null))}},pEPl:function(t){t.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://ocp43.cloudpak8s.io","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(t){t.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')},"w5/s":function(t,e,a){"use strict";a.r(e),a.d(e,"_frontmatter",(function(){return o})),a.d(e,"default",(function(){return p}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),i=a("013z");a("qKvR");function n(){return(n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var a=arguments[e];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(t[r]=a[r])}return t}).apply(this,arguments)}var o={},l={_frontmatter:o},c=i.a;function p(t){var e=t.components,a=function(t,e){if(null==t)return{};var a,r,i={},n=Object.keys(t);for(r=0;r<n.length;r++)a=n[r],e.indexOf(a)>=0||(i[a]=t[a]);return i}(t,["components"]);return Object(r.b)(c,n({},l,a,{components:e,mdxType:"MDXLayout"}),Object(r.b)("h3",null,"Demos"),Object(r.b)("p",null,"There are several examples of how to run existing applications with the Cloud Pak for Applications.   Most will guide through the process of analyzing an existing WebSphere application, migrating to a Liberty container and deploying on the OpenShift and Cloud Pak.   Listed below are great starting points to showcase this approach:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Tutorial: ",Object(r.b)("a",n({parentName:"li"},{href:"https://www.ibm.com/cloud/garage/dte/tutorial/cloud-enabled-use-case-app-modernization-journey-part-1"}),"App Modernization Journey Part 1 - Evaluation")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications"}),"IBM Cloud Architecture - Application Modernization Examples"),Object(r.b)("ul",{parentName:"li"},Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/liberty"}),"Application Modernization")," - Changing cloud runtime to Liberty and deploy on OpenShift"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/was90"}),"Operational Modernization")," - Maintaining a traditional WebSphere (tWAS) runtime but running within a container on OpenShift"),Object(r.b)("li",{parentName:"ul"},Object(r.b)("a",n({parentName:"li"},{href:"https://github.com/ibm-cloud-architecture/cloudpak-for-applications/tree/spring"}),"Spring Modernization"),"  — Changing older Spring runtime versions to latest and deploying on OpenShift")))))}p.isMDXComponent=!0}}]);
//# sourceMappingURL=component---src-pages-apps-cp-4-a-use-case-app-mod-index-mdx-a810cb00caab106010cc.js.map