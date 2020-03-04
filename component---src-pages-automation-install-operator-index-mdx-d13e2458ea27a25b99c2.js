(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{"013z":function(e,t,r){"use strict";r("KKXr"),r("pIFo");var a=r("pOBw"),n=r("q1tI"),o=r.n(n),c=r("NmYn"),p=r.n(c),l=r("OKom"),b=r("k4MR"),i=r("TSYQ"),s=r.n(i),u=r("QH2O"),d=r("qKvR"),O=function(e){var t,r=e.title,a=e.tabs,n=void 0===a?[]:a;return Object(d.b)("div",{className:s()(u.pageHeader,(t={},t[u.withTabs]=n.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},r)))))},j=r("pEPl"),m=r("BAC9"),h=function(e){var t=e.relativePagePath,r=e.repository,a=j.data.site.siteMetadata.repository,n=r||a,o=n.baseUrl,c=n.subDirectory,p=o+"/edit/"+n.branch+c+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+m.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:m.link,href:p},"Edit this page on GitHub"))):null},y=r("FCXl"),N=(r("Oyvg"),r("Wbzz")),f=r("I8xM");var g=function(e){var t,r;function a(){return e.apply(this,arguments)||this}return r=e,(t=a).prototype=Object.create(r.prototype),t.prototype.constructor=t,t.__proto__=r,a.prototype.render=function(){var e=this.props,t=e.tabs,r=e.slug,a=r.split("/").filter(Boolean).slice(-1)[0],n=t.map((function(e){var t,n=p()(e,{lower:!0}),o=n===a,c=new RegExp(a+"(?!-)"),l=r.replace(c,n);return Object(d.b)("li",{key:e,className:s()((t={},t[f.selectedItem]=o,t),f.listItem)},Object(d.b)(N.Link,{className:f.link,to:""+l},e))}));return Object(d.b)("div",{className:f.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:f.list},n))))))},a}(o.a.Component),v=r("MjG9");t.a=function(e){var t=e.pageContext,r=e.children,n=e.location,o=e.Title,c=t.frontmatter,i=void 0===c?{}:c,s=t.relativePagePath,u=t.titleType,j=i.tabs,m=i.title,N=i.theme,f=i.description,C=i.keywords,w=a.data.site.pathPrefix,x=w?n.pathname.replace(w,""):n.pathname,k=j?x.split("/").filter(Boolean).slice(-1)[0]||p()(j[0],{lower:!0}):"";return Object(d.b)(b.a,{tabs:j,homepage:!1,theme:N,pageTitle:m,pageDescription:f,pageKeywords:C,titleType:u},Object(d.b)(O,{title:o?Object(d.b)(o,null):m,label:"label",tabs:j}),j&&Object(d.b)(g,{slug:x,tabs:j,currentTab:k}),Object(d.b)(v.a,{padded:!0},r,Object(d.b)(h,{relativePagePath:s})),Object(d.b)(y.a,{pageContext:t,location:n,slug:x,tabs:j,currentTab:k}),Object(d.b)(l.a,null))}},R5lu:function(e,t,r){"use strict";r.r(t),r.d(t,"_frontmatter",(function(){return c})),r.d(t,"default",(function(){return b}));r("91GP"),r("rGqo"),r("yt8O"),r("Btvt"),r("RW0V"),r("q1tI");var a=r("7ljp"),n=r("013z");r("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e}).apply(this,arguments)}var c={},p={_frontmatter:c},l=n.a;function b(e){var t=e.components,r=function(e,t){if(null==e)return{};var r,a,n={},o=Object.keys(e);for(a=0;a<o.length;a++)r=o[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,["components"]);return Object(a.b)(l,o({},p,r,{components:t,mdxType:"MDXLayout"}),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"})),Object(a.b)("h1",null,"make sure there is a space after the - so that the TOC is generated"),Object(a.b)("p",null,"{:toc}"),Object(a.b)("p",null,"Starting with version 19.0.3, the Cloud Pak for Automation components install is supported by an OCP operator.\nThe install steps for the operator are the following."),Object(a.b)("h3",null,"Create your CP4A project"),Object(a.b)("p",null,"Your CP4A project will contain all the components that are deployed through the operator.\nIn the rest of this documentation, we use ",Object(a.b)("inlineCode",{parentName:"p"},"cp4a")," as the name of our OCP project."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Login to your cluster:")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"oc login -u <admin> -p <password>\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Create the project and add privileges to it. ")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"oc new-project cp4a\noc adm policy add-scc-to-user privileged -z default\n")),Object(a.b)("h3",null,"Prepare the PV and PVC"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"On the NFS server, under the root of an exported directory (look at the ",Object(a.b)("inlineCode",{parentName:"li"},"/etc/export")," file to view the exported directories), create a folder for the JDBC drivers and copy these drivers into it:")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"mkdir /storage/persistentvolumes/operator/jdbc/db2\ncp /opt/ibm/db2/V11.1/java/db2jcc4.jar /nfs/persistentvolumes/operator/jdbc/db2/\ncp /opt/ibm/db2/V11.1/java/db2jcc_license_cu.jar /nfs/persistentvolumes/operator/jdbc/db2/\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Copy this ",Object(a.b)("a",o({parentName:"p"},{href:"/assets/automation/operator/operator-shared-pv.yaml"}),Object(a.b)("inlineCode",{parentName:"a"},"operator-shared-pv.yaml"))," template file to your working directory and update it as needed. In particular, update the ",Object(a.b)("inlineCode",{parentName:"p"},"nfs:path")," and ",Object(a.b)("inlineCode",{parentName:"p"},"nfs:server")," properties to fit your NFS setup.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Deploy the PV:"))),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"$ oc apply -f operator-shared-pv.yaml\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Copy this ",Object(a.b)("a",o({parentName:"p"},{href:"/assets/automation/operator/operator-shared-pvc.yaml"}),Object(a.b)("inlineCode",{parentName:"a"},"operator-shared-pvc.yaml"))," template file to your working directory and update it as needed. In particular, update the ",Object(a.b)("inlineCode",{parentName:"p"},"metadata:namespace")," property.")),Object(a.b)("li",{parentName:"ul"},Object(a.b)("p",{parentName:"li"},"Deploy the PVC:"))),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"$ oc apply -f operator-shared-pvc.yaml\n")),Object(a.b)("h3",null,"Deploy the operator"),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"In your working directory, download the necessary scripts and Kubernetes descriptors:")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"$ git clone https://github.com/icp4a/cert-kubernetes.git\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If you are using local registry, change directory to ",Object(a.b)("inlineCode",{parentName:"li"},"./cert-kubernetes")," and run the ",Object(a.b)("inlineCode",{parentName:"li"},"deployOperator.sh")," script:")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"cd cert-kubernetes/\n./scripts/deployOperator.sh -i $(oc registry info)/cp4a-operator/icp4a-operator:19.0.3\n")),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"If you are using IBM Cloud registry, change directory to ",Object(a.b)("inlineCode",{parentName:"li"},"./cert-kubernetes")," and run the ",Object(a.b)("inlineCode",{parentName:"li"},"deployOperator.sh")," script:")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"cd cert-kubernetes/\n./scripts/deployOperator.sh cp.icr.io/cp/cp4a/icp4a-operator:19.0.3 -p 'cp-entitlement'\n")),Object(a.b)("p",null,"where ",Object(a.b)("inlineCode",{parentName:"p"},"cp-entitlement")," is the name of the secret created to access to the remote registry."),Object(a.b)("ul",null,Object(a.b)("li",{parentName:"ul"},"Verify that the operator is running:")),Object(a.b)("pre",null,Object(a.b)("code",o({parentName:"pre"},{}),"oc get pods\nNAME                                 READY     STATUS    RESTARTS   AGE\nibm-cp4a-operator-7db5cfbb64-mgb2c   2/2       Running   0          5h\n")))}b.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://ocp43.cloudpak8s.io","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-automation-install-operator-index-mdx-d13e2458ea27a25b99c2.js.map