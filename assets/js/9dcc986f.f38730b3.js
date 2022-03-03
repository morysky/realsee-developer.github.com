"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[7036],{71871:function(e,n,t){var l=t(67294);n.Z=function(e){var n=e.children,t=e.hidden,a=e.className;return l.createElement("div",{role:"tabpanel",hidden:t,className:a},n)}},95654:function(e,n,t){t.d(n,{Z:function(){return s}});var l=t(83117),a=t(67294),r=t(5730),o=t(54179);var i=function(){var e=(0,a.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=t(22),c=t(86010),p="tabItem_LplD";function d(e){var n,t,r,o=e.lazy,d=e.block,s=e.defaultValue,m=e.values,v=e.groupId,f=e.className,g=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),k=(0,u.lx)(b,(function(e,n){return e.value===n.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===s?s:null!=(n=null!=s?s:null==(t=g.find((function(e){return e.props.default})))?void 0:t.props.value)?n:null==(r=g[0])?void 0:r.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),N=y.tabGroupChoices,P=y.setTabGroupChoices,w=(0,a.useState)(h),E=w[0],T=w[1],O=[],L=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var R=N[v];null!=R&&R!==E&&b.some((function(e){return e.value===R}))&&T(R)}var M=function(e){var n=e.currentTarget,t=O.indexOf(n),l=b[t].value;l!==E&&(L(n),T(l),null!=v&&P(v,l))},x=function(e){var n,t=null;switch(e.key){case"ArrowRight":var l=O.indexOf(e.currentTarget)+1;t=O[l]||O[0];break;case"ArrowLeft":var a=O.indexOf(e.currentTarget)-1;t=O[a]||O[O.length-1]}null==(n=t)||n.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":d},f)},b.map((function(e){var n=e.value,t=e.label,r=e.attributes;return a.createElement("li",(0,l.Z)({role:"tab",tabIndex:E===n?0:-1,"aria-selected":E===n,key:n,ref:function(e){return O.push(e)},onKeyDown:x,onFocus:M,onClick:M},r,{className:(0,c.Z)("tabs__item",p,null==r?void 0:r.className,{"tabs__item--active":E===n})}),null!=t?t:n)}))),o?(0,a.cloneElement)(g.filter((function(e){return e.props.value===E}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==E})}))))}function s(e){var n=(0,r.Z)();return a.createElement(d,(0,l.Z)({key:String(n)},e))}},78510:function(e,n,t){t.d(n,{B:function(){return i}});var l=t(67294),a=t(11614),r=t(88746),o=t(86010);a.Z,r.Z;function i(e){var n=e.name,t=(e.image,e.url),i=e.description;return l.createElement("div",{className:"col col--6 margin-bottom--lg"},l.createElement("div",{className:(0,o.Z)("card")},l.createElement("div",{className:(0,o.Z)("card__image")},l.createElement(r.Z,{to:t})),l.createElement("div",{className:"card__body"},n&&l.createElement("h3",null,n),i&&l.createElement("p",null,i)),l.createElement("div",{className:"card__footer"},l.createElement("div",{className:"button-group button-group--block"},l.createElement(r.Z,{className:"button button--secondary",to:t},l.createElement(a.Z,{id:"playground.tryItButton"},"Try it now!"))))))}},85301:function(e,n,t){t.r(n),t.d(n,{frontMatter:function(){return p},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return f}});var l=t(83117),a=t(80102),r=(t(67294),t(3905)),o=t(95654),i=t(71871),u=t(78510),c=["components"],p={title:"\u6a21\u578b\u5206\u95f4\u6807\u7b7e"},d=void 0,s={unversionedId:"front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin",id:"front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin",title:"\u6a21\u578b\u5206\u95f4\u6807\u7b7e",description:"ModelRoomLabelPlugin",source:"@site/docs/front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel",slug:"/front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin",permalink:"/docs/front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin",editUrl:"https://github.com/realsee-developer/realsee-developer.github.com/docs/front/3d-space/advanced/dnalogel/ModelRoomLabelPlugin.md",tags:[],version:"current",lastUpdatedBy:"solome",lastUpdatedAt:1646224394,formattedLastUpdatedAt:"3/2/2022",frontMatter:{title:"\u6a21\u578b\u5206\u95f4\u6807\u7b7e"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\ud83d\udce6 \u4fef\u89c6\u6a21\u578b\u6237\u578b\u56fe",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/TopviewFloorplanPlugin"},next:{title:"\u529f\u80fd\u63cf\u8ff0",permalink:"/docs/front/3d-space/container/app/desc"}},m=[{value:"<strong>ModelRoomLabelPlugin</strong>",id:"modelroomlabelplugin",children:[],level:2},{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",children:[],level:2},{value:"\u6548\u679c\u5c55\u793a",id:"\u6548\u679c\u5c55\u793a",children:[],level:2},{value:"\u5b89\u88c5\u5f15\u7528",id:"\u5b89\u88c5\u5f15\u7528",children:[],level:2},{value:"\u5f00\u53d1\u6307\u5357",id:"\u5f00\u53d1\u6307\u5357",children:[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",children:[],level:3},{value:"\u8f7d\u5165\u6570\u636e",id:"\u8f7d\u5165\u6570\u636e",children:[],level:3},{value:"\u8282\u70b9\u6302\u8f7d",id:"\u8282\u70b9\u6302\u8f7d",children:[],level:3},{value:"\u6838\u5fc3\u65b9\u6cd5",id:"\u6838\u5fc3\u65b9\u6cd5",children:[],level:3}],level:2}],v={toc:m};function f(e){var n=e.components,t=(0,a.Z)(e,c);return(0,r.kt)("wrapper",(0,l.Z)({},v,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"modelroomlabelplugin"},(0,r.kt)("strong",{parentName:"h2"},"ModelRoomLabelPlugin")),(0,r.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6a21\u578b\u623f\u5c4b\u6807\u7b7e\u63d2\u4ef6")," \u96c6\u6210\u4e86\u4e00\u5957\u80fd\u591f\u5728\u6a21\u578b\u72b6\u6001\u4e0b\u5feb\u901f\u67e5\u770b\u623f\u95f4\u540d\u79f0 & \u5feb\u901f\u8bbf\u95ee\u623f\u95f4\u5168\u666f\u7684\u4ea4\u4e92\u3002"),(0,r.kt)("p",null,"\u8be6\u7ec6\u529f\u80fd\u70b9\u5982\u4e0b\uff1a"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u5728\u6a21\u578b\u6001\u4e0b\uff0c\u7528\u6807\u7b7e\u5c55\u793a\u5bf9\u5e94\u7684\u623f\u5c4b\u540d\u79f0\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5f53\u6807\u7b7e\u6807\u8bb0\u7684\u623f\u95f4\u88ab\u5176\u4ed6\u623f\u5c4b\u6240\u906e\u6321\u65f6\uff0c\u81ea\u52a8\u9690\u85cf\u6b64\u6807\u7b7e\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u79fb\u52a8\u6a21\u578b\u65f6\uff0c\u5bf9\u5e94\u6807\u7b7e\u4e5f\u80fd\u8ddf\u968f\u6a21\u578b\u79fb\u52a8\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u6807\u7b7e\u65f6\uff0c\u4ece\u6a21\u578b\u72b6\u6001\u5207\u6362\u5230\u5168\u666f\uff0c\u5e76\u79fb\u52a8\u5230\u5bf9\u5e94\u7684\u623f\u95f4\u4e2d\u5fc3\u7684\u70b9\u4f4d\u4e0a\u3002"),(0,r.kt)("li",{parentName:"ul"},"\u5207\u6362\u5230\u623f\u95f4\u65f6\uff0c\u76f8\u673a\u89c6\u89d2\u4f1a\u671d\u5411\u623f\u95f4\u4e2d\u5fc3\u3002")),(0,r.kt)("h2",{id:"\u6548\u679c\u5c55\u793a"},"\u6548\u679c\u5c55\u793a"),(0,r.kt)("p",null,"\u70b9\u51fb",(0,r.kt)("strong",{parentName:"p"},"\u7a7a\u95f4\u603b\u89c8"),"\u6309\u94ae\uff0c\u67e5\u770b\u7a7a\u95f4\u603b\u89c8\u6a21\u6001\u4e0b\u7684\u623f\u5c4b\u6807\u7b7e\u6548\u679c\u3002"),(0,r.kt)("div",{className:"docs-vr-normal"},(0,r.kt)("iframe",{className:"docs-vr-iframe",src:"https://modelroomlabelplugin.stackblitz.io"})),(0,r.kt)(u.B,{url:"https://stackblitz.com/edit/modelroomlabelplugin?file=index.tsx",mdxType:"PlaygroundCard"}),(0,r.kt)("h2",{id:"\u5b89\u88c5\u5f15\u7528"},"\u5b89\u88c5\u5f15\u7528"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u8bf7\u6309\u9700\u9009\u62e9 ",(0,r.kt)("inlineCode",{parentName:"strong"},"yarn")," \u6216 ",(0,r.kt)("inlineCode",{parentName:"strong"},"npm")," \u5b89\u88c5\u65b9\u5f0f\uff1a")),(0,r.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,r.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,r.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n")))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u901a\u8fc7 es \u5f15\u7528\uff1a")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-tsx"},'import ModelRoomLabelPlugin from "@realsee/dnalogel/plugins/floorplan/ModelRoomLabelPlugin"\n')),(0,r.kt)("h2",{id:"\u5f00\u53d1\u6307\u5357"},"\u5f00\u53d1\u6307\u5357"),(0,r.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u65b9\u6cd51\uff1a\u5728\u521d\u59cb\u5316 ",(0,r.kt)("inlineCode",{parentName:"p"},"Five")," \u5b9e\u4f8b\u65f6\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"TopviewFloorplanPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { Five } from '@realsee/five'\nimport { ModelRoomLabelPlugin } from \"@realsee/dnalogel\";\n\nconst five = new Five({\n    plugins: [\n        [\n            ModelRoomLabelPlugin,\n            'modelRoomLabel', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n})\n")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u65b9\u6cd52\uff1a\u5728\u521b\u5efa ",(0,r.kt)("inlineCode",{parentName:"p"},"FiveProvider")," \u65f6\uff0c\u5c06 ",(0,r.kt)("inlineCode",{parentName:"p"},"TopviewFloorplanPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},'import { ModelRoomLabelPlugin } from "@realsee/dnalogel";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\n\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [\n            ModelRoomLabelPlugin,\n            \'modelRoomLabel\', // \u81ea\u5b9a\u4e49\u63d2\u4ef6\u540d\u79f0\n            {\n                // \u53c2\u6570\u914d\u7f6e\n            }\n        ]\n    ]\n});\n')),(0,r.kt)("h3",{id:"\u8f7d\u5165\u6570\u636e"},"\u8f7d\u5165\u6570\u636e"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u83b7\u53d6\u63d2\u4ef6\u5b9e\u4f8b,\u5176\u4e2d `topviewFloorplanPlugin` \u662f\u521d\u59cb\u5316\u65f6\u81ea\u5b9a\u4e49\u7684\u540d\u79f0\nconst pluginInstance = five.plugins.modelRoomLabel \n\n// \u8c03\u7528 `load` \u65b9\u6cd5\u8f7d\u5165\u6a21\u578b\u623f\u5c4b\u6807\u7b7e\u6570\u636e\npluginInstance.load(modelRoomLabels)\n")),(0,r.kt)("h3",{id:"\u8282\u70b9\u6302\u8f7d"},"\u8282\u70b9\u6302\u8f7d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"// \u8c03\u7528 appendTo(wrapper: Element) \u65b9\u6cd5\u6302\u8f7d DOM \u8282\u70b9\nfive.plugins.modelRoomLabel.appendTo(wrapper)\n\n\n// \u793a\u4f8b\nReact.useEffect(() => {\n    // plugin-full-screen-container \u5373\u4e3a\u63d0\u524d\u51c6\u5907\u597d\u7684\u6302\u8f7d\u8282\u70b9\n    const wrapper = document.querySelector('.plugin-full-screen-container')\n    if (wrapper) {\n        five.plugins.modelRoomLabelPlugin.appendTo(wrapper)\n    }\n}, [])\n")),(0,r.kt)("h3",{id:"\u6838\u5fc3\u65b9\u6cd5"},"\u6838\u5fc3\u65b9\u6cd5"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"load(data: ModelRoomLabelPluginData)")," \u8f7d\u5165\u63d2\u4ef6\u6570\u636e")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u60a8\u9700\u8981\u624b\u52a8\u8f7d\u5165\u63d2\u4ef6\u6570\u636e\uff0c\u6570\u636e\u6765\u6e90\u8bf7\u9605\u8bfb",(0,r.kt)("a",{parentName:"p",href:"http://developers.realsee.com/docs/#/docs/five/server/README"},"\u5982\u89c6\u5f00\u53d1\u8005\u4e2d\u5fc3\u670d\u52a1\u7aef API"),"\u3002")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("inlineCode",{parentName:"li"},"appendTo(wrapper: Element)")," \u6302\u8f7d DOM \u8282\u70b9")),(0,r.kt)("blockquote",null,(0,r.kt)("p",{parentName:"blockquote"},"\u60a8\u53ef\u4ee5\u5c06\u63d2\u4ef6 DOM \u6a21\u5757\u8f7d\u5165\u60a8\u7684 HTML \u7ed3\u6784\u4e2d\u3002")))}f.isMDXComponent=!0},3905:function(e,n,t){t.d(n,{Zo:function(){return p},kt:function(){return m}});var l=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function r(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);n&&(l=l.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,l)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?r(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):r(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,l,a=function(e,n){if(null==e)return{};var t,l,a={},r=Object.keys(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(l=0;l<r.length;l++)t=r[l],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var u=l.createContext({}),c=function(e){var n=l.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},p=function(e){var n=c(e.components);return l.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return l.createElement(l.Fragment,{},n)}},s=l.forwardRef((function(e,n){var t=e.components,a=e.mdxType,r=e.originalType,u=e.parentName,p=i(e,["components","mdxType","originalType","parentName"]),s=c(t),m=a,v=s["".concat(u,".").concat(m)]||s[m]||d[m]||r;return t?l.createElement(v,o(o({ref:n},p),{},{components:t})):l.createElement(v,o({ref:n},p))}));function m(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var r=t.length,o=new Array(r);o[0]=s;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:a,o[1]=i;for(var c=2;c<r;c++)o[c]=t[c];return l.createElement.apply(null,o)}return l.createElement.apply(null,t)}s.displayName="MDXCreateElement"}}]);