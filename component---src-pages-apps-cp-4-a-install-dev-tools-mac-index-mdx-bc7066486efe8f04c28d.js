(window.webpackJsonp=window.webpackJsonp||[]).push([[3],{"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var o=n("pOBw"),a=n("q1tI"),l=n.n(a),i=n("NmYn"),s=n.n(i),r=n("OKom"),c=n("k4MR"),b=n("TSYQ"),p=n.n(b),u=n("QH2O"),d=n("qKvR"),m=function(e){var t,n=e.title,o=e.tabs,a=void 0===o?[]:o;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=a.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},n)))))},h=n("pEPl"),O=n("BAC9"),g=function(e){var t=e.relativePagePath,n=e.repository,o=h.data.site.siteMetadata.repository,a=n||o,l=a.baseUrl,i=a.subDirectory,s=l+"/edit/"+a.branch+i+"/src/pages"+t;return l?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:s},"Edit this page on GitHub"))):null},j=n("FCXl"),f=(n("Oyvg"),n("Wbzz")),v=n("I8xM");var w=function(e){var t,n;function o(){return e.apply(this,arguments)||this}return n=e,(t=o).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,o.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,o=n.split("/").filter(Boolean).slice(-1)[0],a=t.map((function(e){var t,a=s()(e,{lower:!0}),l=a===o,i=new RegExp(o+"(?!-)"),r=n.replace(i,a);return Object(d.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=l,t),v.listItem)},Object(d.b)(f.Link,{className:v.link,to:""+r},e))}));return Object(d.b)("div",{className:v.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:v.list},a))))))},o}(l.a.Component),N=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,a=e.location,l=e.Title,i=t.frontmatter,b=void 0===i?{}:i,p=t.relativePagePath,u=t.titleType,h=b.tabs,O=b.title,f=b.theme,v=b.description,y=b.keywords,C=o.data.site.pathPrefix,k=C?a.pathname.replace(C,""):a.pathname,x=h?k.split("/").filter(Boolean).slice(-1)[0]||s()(h[0],{lower:!0}):"";return Object(d.b)(c.a,{tabs:h,homepage:!1,theme:f,pageTitle:O,pageDescription:v,pageKeywords:y,titleType:u},Object(d.b)(m,{title:l?Object(d.b)(l,null):O,label:"label",tabs:h}),h&&Object(d.b)(w,{slug:k,tabs:h,currentTab:x}),Object(d.b)(N.a,{padded:!0},n,Object(d.b)(g,{relativePagePath:p})),Object(d.b)(j.a,{pageContext:t,location:a,slug:k,tabs:h,currentTab:x}),Object(d.b)(r.a,null))}},UMAz:function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return i})),n.d(t,"default",(function(){return c}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var o=n("7ljp"),a=n("013z");n("qKvR");function l(){return(l=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o])}return e}).apply(this,arguments)}var i={},s={_frontmatter:i},r=a.a;function c(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,o,a={},l=Object.keys(e);for(o=0;o<l.length;o++)n=l[o],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,["components"]);return Object(o.b)(r,l({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("p",null,"{:toc}"),Object(o.b)("h2",null,"Prerequisites"),Object(o.b)("p",null,"Before beginning these steps you should have:"),Object(o.b)("ol",null,Object(o.b)("li",{parentName:"ol"},"A github account (or Github Enterprise)"),Object(o.b)("li",{parentName:"ol"},"A Dockerhub account (needed to install docker)"),Object(o.b)("li",{parentName:"ol"},"A Red Hat entitled customer account (to install oc)"),Object(o.b)("li",{parentName:"ol"},"An IDE (Eclipse or VS Code to use with Codewind)"),Object(o.b)("li",{parentName:"ol"},"A login for your Openshift Container cluster")),Object(o.b)("h2",null,"Installing Client tools from web pages on the cluster"),Object(o.b)("p",null,"A landing page is created during the install of Cloud Pak for Applications.\nThe landing page is available in the top menu bar and is named Cloud Pak Console.\nThe landing page is also found in the Administrator Console under Networking::Routes and is named icpa-landing in the kabanero namespace.\nThe Cloud Pak Console pages provide the most current installation information about the client tools.\nThis document will also provide links to these tools on the web."),Object(o.b)("p",null,"When the OpenShift cluster is created, a reference page is generated for the OpenShift command line tools. There are several useful links on this page. Get this URL from your administrator."),Object(o.b)("img",{src:"/assets/img/cp4a/command-line-tools.png",alt:"Command Line Tools"}),Object(o.b)("img",{src:"/assets/img/cp4a/command-line-tools-download.png",alt:"Download Command Line Tools"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," You will need to authenticate (login) to your cluster."),Object(o.b)("p",null,"The Cloud Pak Console provides additional information on installing additional development tools.  In the Console page, select the Setup dev tools button and follow instructions in the pop-up."),Object(o.b)("img",{src:"/assets/img/cp4a/dev-tools.png",alt:"Cloud Pak Console"}),Object(o.b)("img",{src:"/assets/img/cp4a/setup-dev-tools.png",alt:"Setup Dev Tools"}),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," You will need to authenticate (login) to your cluster."),Object(o.b)("h2",null,"Command line tools"),Object(o.b)("h4",null,"git"),Object(o.b)("p",null,"On mac ",Object(o.b)("inlineCode",{parentName:"p"},"git")," is installed by default. You may use ",Object(o.b)("inlineCode",{parentName:"p"},"which git")," to validate that it is installed."),Object(o.b)("h3",null,"OpenShift command line interface (oc)"),Object(o.b)("p",null,"Recommend to download from OpenShift cluster using instructions with Setup Dev Tools.\nAlternatively, more information can be found here:\n",Object(o.b)("a",l({parentName:"p"},{href:"https://docs.openshift.com/container-platform/4.2/cli_reference/openshift_cli/getting-started-cli.html"}),"https://docs.openshift.com/container-platform/4.2/cli_reference/openshift_cli/getting-started-cli.html")," "),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," You will need to login using your RedHat customer account."),Object(o.b)("p",null,"oc is also available from ",Object(o.b)("a",l({parentName:"p"},{href:"https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/macosx/"}),"https://mirror.openshift.com/pub/openshift-v4/clients/oc/latest/macosx/")),Object(o.b)("h3",null,"docker"),Object(o.b)("p",null,"Install docker from here:\n",Object(o.b)("a",l({parentName:"p"},{href:"https://docs.docker.com/install/"}),"https://docs.docker.com/install/")),Object(o.b)("p",null,Object(o.b)("strong",{parentName:"p"},"Note:")," You will need to authenticate (login) to docker."),Object(o.b)("h3",null,"appsody"),Object(o.b)("p",null,"Follow the link on the Cloud Pak Console landing page.\nOr use multiple platform installation instructions ",Object(o.b)("inlineCode",{parentName:"p"},"https://appsody.dev/docs/getting-started/installation")),Object(o.b)("h2",null,"IDE: Codewind with Eclipse or VS Code"),Object(o.b)("p",null,"These installations provide shortcuts and commands from within the IDE."),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",l({parentName:"li"},{href:"https://www.eclipse.org/codewind/mdteclipsegettingstarted.html"}),"Eclipse installation")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("a",l({parentName:"li"},{href:"https://www.eclipse.org/codewind/mdt-vsc-getting-started.html"}),"VS Code installation"))))}c.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://ocp43.cloudpak8s.io","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-apps-cp-4-a-install-dev-tools-mac-index-mdx-bc7066486efe8f04c28d.js.map