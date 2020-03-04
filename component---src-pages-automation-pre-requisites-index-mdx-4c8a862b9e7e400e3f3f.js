(window.webpackJsonp=window.webpackJsonp||[]).push([[22],{"+oyu":function(e,t,n){"use strict";n.r(t),n.d(t,"_frontmatter",(function(){return a})),n.d(t,"default",(function(){return s}));n("91GP"),n("rGqo"),n("yt8O"),n("Btvt"),n("RW0V"),n("q1tI");var r=n("7ljp"),l=n("013z");n("qKvR");function o(){return(o=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var n=arguments[t];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(e[r]=n[r])}return e}).apply(this,arguments)}var a={},c={_frontmatter:a},i=l.a;function s(e){var t=e.components,n=function(e,t){if(null==e)return{};var n,r,l={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,["components"]);return Object(r.b)(i,o({},c,n,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"})),Object(r.b)("h1",null,"make sure there is a space after the - so that the TOC is generated"),Object(r.b)("p",null,"{:toc}"),Object(r.b)("h2",null,"Install"),Object(r.b)("h3",null,"NFS"),Object(r.b)("p",null,"The persistent volumes used by the different Cloud Pak for Automation components in the following chapters are relying on NFS. Before starting the install of any component, it is thus required to set-up an NFS server. An example for how to set-up and verify an NFS server for Redhat 7 can be found ",Object(r.b)("a",o({parentName:"p"},{href:"https://linuxconfig.org/quick-nfs-server-configuration-on-redhat-7-linux"}),"here"),"."),Object(r.b)("h3",null,"Helm"),Object(r.b)("p",null,"The following instructions are extracted from ",Object(r.b)("a",o({parentName:"p"},{href:"https://blog.openshift.com/getting-started-helm-openshift/"}),"here"),"."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Download ",Object(r.b)("inlineCode",{parentName:"li"},"helm")," binaries and install the client only:")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"wget https://get.helm.sh/helm-v2.12.2-linux-386.tar.gz\ntar -zxvf helm-v2.12.2-linux-386.tar.gz\nmv linux-386/helm /usr/local/bin/\nhelm init --client-only\nhelm version\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create an openshift project where the Helm ",Object(r.b)("inlineCode",{parentName:"li"},"tiller")," (the server side) will be installed:")),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"oc new-project tiller\noc project tiller\nexport TILLER_NAMESPACE=tiller\n")),Object(r.b)("p",null,"You can add the ",Object(r.b)("inlineCode",{parentName:"p"},"export TILLER_NAMESPACE=tiller")," to your ",Object(r.b)("inlineCode",{parentName:"p"},"~/.bash_profile")," for instance to avoid exporting in each session."),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install the ",Object(r.b)("inlineCode",{parentName:"li"},"tiller"),":")),Object(r.b)("p",null,"Use the same version of the client in the following command line to have the same version of client and tiller."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'oc process -f https://github.com/openshift/origin/raw/master/examples/helm/tiller-template.yaml -p TILLER_NAMESPACE="${TILLER_NAMESPACE}" -p HELM_VERSION=v2.12.2 | oc create -f -\noc get pods\n# Check pods are running\noc rollout status deployment tiller\nhelm init\nhelm version\n')),Object(r.b)("h2",null,"Prepare"),Object(r.b)("h3",null,"Logging-in to your cluster"),Object(r.b)("h4",null,"IBM Cloud OpenShift cluster"),Object(r.b)("p",null,"Start by loging in to IBM Cloud with the ",Object(r.b)("inlineCode",{parentName:"p"},"ibmcloud login")," or ",Object(r.b)("inlineCode",{parentName:"p"},"ibmcloud login --sso")," command, then select your cluster and login to it."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"ibmcloud oc cluster-config --cluster <your-cluster-name>\noc login \n")),Object(r.b)("h4",null,"On-prem OpenShift cluster"),Object(r.b)("p",null,"Login directly to your cluster:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"oc login -u admin -p admin https://<your-cluster-url>/\n")),Object(r.b)("h3",null,"Accessing the Docker registry"),Object(r.b)("h4",null,"IBM Cloud OpenShift cluster"),Object(r.b)("p",null,"To expose the ",Object(r.b)("inlineCode",{parentName:"p"},"docker-registry.default.svc"),", open a command window, login to OpenShift and run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"kubectl -n default port-forward svc/docker-registry 5000:5000 &\n")),Object(r.b)("p",null,"This is exposing port 5000 on the boot node (wherever this is run). You need to leave the command window open or else the port-forwarding will stop. Be aware of the potential timeout of port forwarding during the images push."),Object(r.b)("h4",null,"On-prem OpenShift cluster"),Object(r.b)("p",null,"To prepare Docker access, edit the ",Object(r.b)("inlineCode",{parentName:"p"},"/etc/docker/daemon.json")," Docker daemon configuration file to include the ",Object(r.b)("inlineCode",{parentName:"p"},'"insecure-registries"')," property, as shown on the example below:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),'{\n  "insecure-registries" : ["docker-registry-default.apps-cp4a-res.rtp.raleigh.ibm.com"]\n}\n')),Object(r.b)("p",null,"Restart docker daemon:"),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"systemctl restart docker\n")),Object(r.b)("h4",null,"OpenShift cluster accessing IBM Cloud image registry"),Object(r.b)("p",null,"You need to use a ",Object(r.b)("inlineCode",{parentName:"p"},"secret")," containing credentials to access IBM Cloud registry. To create this secret you need to generate a key from your IBM Cloud entitlment to access Cloud Pak for Automation docker images."),Object(r.b)("pre",null,Object(r.b)("code",o({parentName:"pre"},{}),"oc create secret docker-registry cp-entitlement --docker-server=cp.icr.io --docker-username=ekey --docker-password=<GENERATED_KEY_FROM_IBM_CLOUD_ENTATLMENT> --docker-email=unused\n")))}s.isMDXComponent=!0},"013z":function(e,t,n){"use strict";n("KKXr"),n("pIFo");var r=n("pOBw"),l=n("q1tI"),o=n.n(l),a=n("NmYn"),c=n.n(a),i=n("OKom"),s=n("k4MR"),b=n("TSYQ"),p=n.n(b),u=n("QH2O"),d=n("qKvR"),m=function(e){var t,n=e.title,r=e.tabs,l=void 0===r?[]:r;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=l.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},n)))))},h=n("pEPl"),O=n("BAC9"),j=function(e){var t=e.relativePagePath,n=e.repository,r=h.data.site.siteMetadata.repository,l=n||r,o=l.baseUrl,a=l.subDirectory,c=o+"/edit/"+l.branch+a+"/src/pages"+t;return o?Object(d.b)("div",{className:"bx--row "+O.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:O.link,href:c},"Edit this page on GitHub"))):null},g=n("FCXl"),f=(n("Oyvg"),n("Wbzz")),v=n("I8xM");var N=function(e){var t,n;function r(){return e.apply(this,arguments)||this}return n=e,(t=r).prototype=Object.create(n.prototype),t.prototype.constructor=t,t.__proto__=n,r.prototype.render=function(){var e=this.props,t=e.tabs,n=e.slug,r=n.split("/").filter(Boolean).slice(-1)[0],l=t.map((function(e){var t,l=c()(e,{lower:!0}),o=l===r,a=new RegExp(r+"(?!-)"),i=n.replace(a,l);return Object(d.b)("li",{key:e,className:p()((t={},t[v.selectedItem]=o,t),v.listItem)},Object(d.b)(f.Link,{className:v.link,to:""+i},e))}));return Object(d.b)("div",{className:v.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:v.list},l))))))},r}(o.a.Component),y=n("MjG9");t.a=function(e){var t=e.pageContext,n=e.children,l=e.location,o=e.Title,a=t.frontmatter,b=void 0===a?{}:a,p=t.relativePagePath,u=t.titleType,h=b.tabs,O=b.title,f=b.theme,v=b.description,w=b.keywords,x=r.data.site.pathPrefix,C=x?l.pathname.replace(x,""):l.pathname,k=h?C.split("/").filter(Boolean).slice(-1)[0]||c()(h[0],{lower:!0}):"";return Object(d.b)(s.a,{tabs:h,homepage:!1,theme:f,pageTitle:O,pageDescription:v,pageKeywords:w,titleType:u},Object(d.b)(m,{title:o?Object(d.b)(o,null):O,label:"label",tabs:h}),h&&Object(d.b)(N,{slug:C,tabs:h,currentTab:k}),Object(d.b)(y.a,{padded:!0},n,Object(d.b)(j,{relativePagePath:p})),Object(d.b)(g.a,{pageContext:t,location:l,slug:C,tabs:h,currentTab:k}),Object(d.b)(i.a,null))}},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://ocp43.cloudpak8s.io","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-automation-pre-requisites-index-mdx-4c8a862b9e7e400e3f3f.js.map