(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{"013z":function(e,t,a){"use strict";a("KKXr"),a("pIFo");var r=a("pOBw"),o=a("q1tI"),n=a.n(o),l=a("NmYn"),c=a.n(l),i=a("OKom"),b=a("k4MR"),s=a("TSYQ"),p=a.n(s),u=a("QH2O"),d=a("qKvR"),m=function(e){var t,a=e.title,r=e.tabs,o=void 0===r?[]:r;return Object(d.b)("div",{className:p()(u.pageHeader,(t={},t[u.withTabs]=o.length,t))},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12"},Object(d.b)("h1",{id:"page-title",className:u.text},a)))))},O=a("pEPl"),h=a("BAC9"),j=function(e){var t=e.relativePagePath,a=e.repository,r=O.data.site.siteMetadata.repository,o=a||r,n=o.baseUrl,l=o.subDirectory,c=n+"/edit/"+o.branch+l+"/src/pages"+t;return n?Object(d.b)("div",{className:"bx--row "+h.row},Object(d.b)("div",{className:"bx--col"},Object(d.b)("a",{className:h.link,href:c},"Edit this page on GitHub"))):null},g=a("FCXl"),f=(a("Oyvg"),a("Wbzz")),N=a("I8xM");var y=function(e){var t,a;function r(){return e.apply(this,arguments)||this}return a=e,(t=r).prototype=Object.create(a.prototype),t.prototype.constructor=t,t.__proto__=a,r.prototype.render=function(){var e=this.props,t=e.tabs,a=e.slug,r=a.split("/").filter(Boolean).slice(-1)[0],o=t.map((function(e){var t,o=c()(e,{lower:!0}),n=o===r,l=new RegExp(r+"(?!-)"),i=a.replace(l,o);return Object(d.b)("li",{key:e,className:p()((t={},t[N.selectedItem]=n,t),N.listItem)},Object(d.b)(f.Link,{className:N.link,to:""+i},e))}));return Object(d.b)("div",{className:N.tabsContainer},Object(d.b)("div",{className:"bx--grid"},Object(d.b)("div",{className:"bx--row"},Object(d.b)("div",{className:"bx--col-lg-12 bx--col-no-gutter"},Object(d.b)("nav",null,Object(d.b)("ul",{className:N.list},o))))))},r}(n.a.Component),w=a("MjG9");t.a=function(e){var t=e.pageContext,a=e.children,o=e.location,n=e.Title,l=t.frontmatter,s=void 0===l?{}:l,p=t.relativePagePath,u=t.titleType,O=s.tabs,h=s.title,f=s.theme,N=s.description,v=s.keywords,D=r.data.site.pathPrefix,k=D?o.pathname.replace(D,""):o.pathname,C=O?k.split("/").filter(Boolean).slice(-1)[0]||c()(O[0],{lower:!0}):"";return Object(d.b)(b.a,{tabs:O,homepage:!1,theme:f,pageTitle:h,pageDescription:N,pageKeywords:v,titleType:u},Object(d.b)(m,{title:n?Object(d.b)(n,null):h,label:"label",tabs:O}),O&&Object(d.b)(y,{slug:k,tabs:O,currentTab:C}),Object(d.b)(w.a,{padded:!0},a,Object(d.b)(j,{relativePagePath:p})),Object(d.b)(g.a,{pageContext:t,location:o,slug:k,tabs:O,currentTab:C}),Object(d.b)(i.a,null))}},VWlB:function(e,t,a){"use strict";a.r(t),a.d(t,"_frontmatter",(function(){return l})),a.d(t,"default",(function(){return b}));a("91GP"),a("rGqo"),a("yt8O"),a("Btvt"),a("RW0V"),a("q1tI");var r=a("7ljp"),o=a("013z");a("qKvR");function n(){return(n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var a=arguments[t];for(var r in a)Object.prototype.hasOwnProperty.call(a,r)&&(e[r]=a[r])}return e}).apply(this,arguments)}var l={},c={_frontmatter:l},i=o.a;function b(e){var t=e.components,a=function(e,t){if(null==e)return{};var a,r,o={},n=Object.keys(e);for(r=0;r<n.length;r++)a=n[r],t.indexOf(a)>=0||(o[a]=e[a]);return o}(e,["components"]);return Object(r.b)(i,n({},c,a,{components:t,mdxType:"MDXLayout"}),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"})),Object(r.b)("h1",null,"make sure there is a space after the - so that the TOC is generated"),Object(r.b)("p",null,"{:toc}"),Object(r.b)("p",null,Object(r.b)("strong",{parentName:"p"},"(19.0.3 UPDATE NEEDED)")),Object(r.b)("h3",null,"Required services"),Object(r.b)("p",null,"Before installing Operational Decision Manager (ODM), you should have the following pre-requisites in place:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Have privileged access to your DB2 database server. "),Object(r.b)("li",{parentName:"ul"},"Optionally, have access to your LDAP directory server.")),Object(r.b)("p",null,"See the ",Object(r.b)("a",n({parentName:"p"},{href:"/content/automation/shared-services"}),"Shared services")," chapter for details on DB2 or LDAP installation, if needed."),Object(r.b)("h3",null,"Download the ODM PPA"),Object(r.b)("p",null,"Download the following PPA from ",Object(r.b)("a",n({parentName:"p"},{href:"https://www.ibm.com/software/passportadvantage"}),"IBM Passport Advantage")," to your working-directory:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("em",{parentName:"li"},"IBM Cloud Pak for Automation v19.0.1 - Operational Decision Manager for Certified Kubernetes Multiplatform Multilingual (CC223ML)"))),Object(r.b)("p",null,"The downloaded archive should be named ",Object(r.b)("inlineCode",{parentName:"p"},"ICP4A19.0.1-odm.tgz"),"."),Object(r.b)("h3",null,"Log in to you OCP cluster"),Object(r.b)("p",null,"See the ",Object(r.b)("a",n({parentName:"p"},{href:"/content/automation/pre-requisites"}),"Prerequisites")," chapter for details on logging in to your OCP cluster."),Object(r.b)("h3",null,"Create the ODM project"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Create a new OpenShift project for ODM with your desired name, e.g. ",Object(r.b)("inlineCode",{parentName:"li"},"odmproject"),":")),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"oc new-project odmproject\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Make sure you are working from your newly created ODM project, then grant the tiller server ",Object(r.b)("inlineCode",{parentName:"li"},"edit")," access to current project:")),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),'oc project odmproject\noc adm policy add-role-to-user edit "system:serviceaccount:tiller:tiller"\n')),Object(r.b)("h3",null,"Update the SCC"),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"oc adm policy add-scc-to-user privileged -z default\n")),Object(r.b)("h3",null,"Push the ODM images to the registry"),Object(r.b)("p",null,"If you are installing ODM for the managed cloud, and you are logged in as root, do the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Login to the Docker registry:")),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"docker login -u $(oc whoami) -p $(oc whoami -t) docker-registry.default.svc:5000\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Download the ",Object(r.b)("inlineCode",{parentName:"li"},"loadimages.sh")," script to your working directory:")),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"wget https://raw.githubusercontent.com/icp4a/cert-kubernetes/19.0.1/scripts/loadimages.sh\nchmod +x loadimages.sh\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Load the images:")),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"./loadimages.sh -p ICP4A19.0.1-odm.tgz -r docker-registry.default.svc:5000/odmproject\n")),Object(r.b)("p",null,"To complete above steps, make sure that the port forwarding is properly addressed, see the ",Object(r.b)("a",n({parentName:"p"},{href:"/content/automation/pre-requisites"}),"Pre-requisites")," chapter for details on the docker registry port forwarding. Otherwise, you might not be able to login to the docker registry, or face timeout during the image push."),Object(r.b)("p",null,"If you are installing ODM for on-prem OCP, and not logged in root, do the following:"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Login to the Docker registry:")),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"oc -n default get route\n# search for route to docker-registry\nsudo docker login -u $(oc whoami) -p $(oc whoami -t) <route_to_docker_registry>\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Download the ",Object(r.b)("inlineCode",{parentName:"li"},"loadimages.sh")," script to your working directory:")),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"wget https://raw.githubusercontent.com/icp4a/cert-kubernetes/19.0.1/scripts/loadimages.sh\nchmod +x loadimages.sh\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Load the images:")),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"sudo ./loadimages.sh -p ICP4A19.0.1-odm.tgz -r <route_to_docker_registry>/odmproject\n")),Object(r.b)("h3",null,"Create the ODM database"),Object(r.b)("p",null,"The below step is assumed that external DB2 database is used, if internal database or other types of external databases are used, please refer to the related product documentation."),Object(r.b)("p",null,"Log in to the server machine running your DB2 instance, and run the following commands:"),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"su - db2inst1\ndb2 create database odmdb automatic storage yes  using codeset UTF-8 territory US pagesize 32768;\ndb2 connect to odmdb\ndb2 list applications\n")),Object(r.b)("h3",null,"Create secrets"),Object(r.b)("h4",null,"Create an LDAP secret"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Download the ",Object(r.b)("a",n({parentName:"p"},{href:"/assets/automation/odm/ldap-configurations.xml"}),Object(r.b)("inlineCode",{parentName:"a"},"ldap-configurations.xml"))," and ",Object(r.b)("a",n({parentName:"p"},{href:"/assets/automation/odm/webSecurity.xml"}),Object(r.b)("inlineCode",{parentName:"a"},"webSecurity.xml"))," files to your working directory.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Update the ",Object(r.b)("inlineCode",{parentName:"p"},"ldap-configurations.xml")," and ",Object(r.b)("inlineCode",{parentName:"p"},"webSecurity.xml")," file to replace the ldap host with the public IP address of your LDAP server.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"If needed, you might also update the access info within ",Object(r.b)("inlineCode",{parentName:"p"},"webSecurity.xml")," file, e.g. to add additional user or group. For the details on how to configure the access info, please refer to the related ",Object(r.b)("a",n({parentName:"p"},{href:"https://www.ibm.com/support/knowledgecenter/en/SSYHZ8_19.0.x/com.ibm.dba.install/k8s_topics/tsk_config_user_access.html"}),"ODM knowledge center section"),".")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Run the following command:"))),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"oc create secret generic odm-prod-release-odm-ldap --from-file=ldap-configurations.xml --from-file=webSecurity.xml --type=Opaque\n")),Object(r.b)("h4",null,"Create a BAI Event secret"),Object(r.b)("p",null,"If you plan to use BAI, download the ",Object(r.b)("a",n({parentName:"p"},{href:"/assets/automation/odm/plugin-configuration.properties"}),Object(r.b)("inlineCode",{parentName:"a"},"plugin-configuration.properties"))," file to your working directory and make sure that your BAI Kafka server name is same as the one in ",Object(r.b)("inlineCode",{parentName:"p"},"plugin-configuration.properties"),", then run the following command:"),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"oc create secret generic odm-prod-release-odm-bai-event --from-file=plugin-configuration.properties\n")),Object(r.b)("h3",null,"Install the ODM components"),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Download the ",Object(r.b)("a",n({parentName:"p"},{href:"/assets/automation/odm/values.yaml"}),"values.yaml")," file to your working directory and update the DB configuration parameters under ",Object(r.b)("inlineCode",{parentName:"p"},"externalDatabase")," to match your configuration, in particular the IP address for the ",Object(r.b)("inlineCode",{parentName:"p"},"serverName")," and the ",Object(r.b)("inlineCode",{parentName:"p"},"password")," for the DB admin account.")),Object(r.b)("li",{parentName:"ul"},Object(r.b)("p",{parentName:"li"},"Download the Helm chart to your working directory:"))),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"wget https://github.com/icp4a/cert-kubernetes/raw/19.0.1/ODM/helm-charts/ibm-odm-prod-2.2.0.tgz\n")),Object(r.b)("ul",null,Object(r.b)("li",{parentName:"ul"},"Install the Helm chart:")),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"helm install ibm-odm-prod-2.2.0.tgz --name odm-prod-release --namespace odmproject -f values.yaml\n")),Object(r.b)("h3",null,"Expose the ODM services"),Object(r.b)("p",null,"Download the ",Object(r.b)("a",n({parentName:"p"},{href:"/assets/automation/odm/route.yaml"}),"route.yaml")," file to your working directory and run the command:"),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"oc create -f route.yaml\n")),Object(r.b)("p",null,"To retrieve the ODM services URLs, open the ",Object(r.b)("inlineCode",{parentName:"p"},"services")," section on the OCP cluster console, select the desired ODM service, such as ",Object(r.b)("inlineCode",{parentName:"p"},"odm-decisioncenter")," and go to the detail page to find the URL. The link will look like:"),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"https://odm-prod-release-odm-decisioncenter-odmproject.cp4a-ocp-6550a99fb8cff23207ccecc2183787a9-0001.us-south.containers.appdomain.cloud/decisioncenter\n")),Object(r.b)("h3",null,"Uninstall"),Object(r.b)("p",null,"If needed, run the following steps to uninstall ODM:"),Object(r.b)("pre",null,Object(r.b)("code",n({parentName:"pre"},{}),"helm delete odm-prod-release --purge\noc delete secret odm-prod-release-odm-ldap\noc delete secret odm-prod-release-odm-bai-event\noc delete -f route.yaml\n")),Object(r.b)("p",null,"Please note that if this Uninstall is permanent, you might want to clean the related DB2 tables that have been created. For this, please refer to the related ",Object(r.b)("a",n({parentName:"p"},{href:"./shared-services.md"}),"Shared services")," section for details."))}b.isMDXComponent=!0},pEPl:function(e){e.exports=JSON.parse('{"data":{"site":{"siteMetadata":{"repository":{"baseUrl":"https://ocp43.cloudpak8s.io","subDirectory":"/","branch":"master"}}}}}')},pOBw:function(e){e.exports=JSON.parse('{"data":{"site":{"pathPrefix":""}}}')}}]);
//# sourceMappingURL=component---src-pages-automation-install-odm-index-mdx-690a12b1e7f5e16839db.js.map