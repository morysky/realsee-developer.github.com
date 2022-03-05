"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[1290],{3905:function(e,n,a){a.d(n,{Zo:function(){return c},kt:function(){return m}});var t=a(67294);function r(e,n,a){return n in e?Object.defineProperty(e,n,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[n]=a,e}function l(e,n){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);n&&(t=t.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),a.push.apply(a,t)}return a}function o(e){for(var n=1;n<arguments.length;n++){var a=null!=arguments[n]?arguments[n]:{};n%2?l(Object(a),!0).forEach((function(n){r(e,n,a[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):l(Object(a)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(a,n))}))}return e}function i(e,n){if(null==e)return{};var a,t,r=function(e,n){if(null==e)return{};var a,t,r={},l=Object.keys(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||(r[a]=e[a]);return r}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(t=0;t<l.length;t++)a=l[t],n.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(e,a)&&(r[a]=e[a])}return r}var u=t.createContext({}),p=function(e){var n=t.useContext(u),a=n;return e&&(a="function"==typeof e?e(n):o(o({},n),e)),a},c=function(e){var n=p(e.components);return t.createElement(u.Provider,{value:n},e.children)},d={inlineCode:"code",wrapper:function(e){var n=e.children;return t.createElement(t.Fragment,{},n)}},s=t.forwardRef((function(e,n){var a=e.components,r=e.mdxType,l=e.originalType,u=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),s=p(a),m=r,v=s["".concat(u,".").concat(m)]||s[m]||d[m]||l;return a?t.createElement(v,o(o({ref:n},c),{},{components:a})):t.createElement(v,o({ref:n},c))}));function m(e,n){var a=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var l=a.length,o=new Array(l);o[0]=s;var i={};for(var u in n)hasOwnProperty.call(n,u)&&(i[u]=n[u]);i.originalType=e,i.mdxType="string"==typeof e?e:r,o[1]=i;for(var p=2;p<l;p++)o[p]=a[p];return t.createElement.apply(null,o)}return t.createElement.apply(null,a)}s.displayName="MDXCreateElement"},58215:function(e,n,a){var t=a(67294);n.Z=function(e){var n=e.children,a=e.hidden,r=e.className;return t.createElement("div",{role:"tabpanel",hidden:a,className:r},n)}},26396:function(e,n,a){a.d(n,{Z:function(){return s}});var t=a(83117),r=a(67294),l=a(72389),o=a(79443);var i=function(){var e=(0,r.useContext)(o.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},u=a(16681),p=a(86010),c="tabItem_LplD";function d(e){var n,a,l,o=e.lazy,d=e.block,s=e.defaultValue,m=e.values,v=e.groupId,f=e.className,g=r.Children.map(e.children,(function(e){if((0,r.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),k=null!=m?m:g.map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes}})),b=(0,u.lx)(k,(function(e,n){return e.value===n.value}));if(b.length>0)throw new Error('Docusaurus error: Duplicate values "'+b.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===s?s:null!=(n=null!=s?s:null==(a=g.find((function(e){return e.props.default})))?void 0:a.props.value)?n:null==(l=g[0])?void 0:l.props.value;if(null!==h&&!k.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+k.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var N=i(),y=N.tabGroupChoices,P=N.setTabGroupChoices,E=(0,r.useState)(h),w=E[0],F=E[1],x=[],O=(0,u.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var C=y[v];null!=C&&C!==w&&k.some((function(e){return e.value===C}))&&F(C)}var T=function(e){var n=e.currentTarget,a=x.indexOf(n),t=k[a].value;t!==w&&(O(n),F(t),null!=v&&P(v,t))},R=function(e){var n,a=null;switch(e.key){case"ArrowRight":var t=x.indexOf(e.currentTarget)+1;a=x[t]||x[0];break;case"ArrowLeft":var r=x.indexOf(e.currentTarget)-1;a=x[r]||x[x.length-1]}null==(n=a)||n.focus()};return r.createElement("div",{className:"tabs-container"},r.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,p.Z)("tabs",{"tabs--block":d},f)},k.map((function(e){var n=e.value,a=e.label,l=e.attributes;return r.createElement("li",(0,t.Z)({role:"tab",tabIndex:w===n?0:-1,"aria-selected":w===n,key:n,ref:function(e){return x.push(e)},onKeyDown:R,onFocus:T,onClick:T},l,{className:(0,p.Z)("tabs__item",c,null==l?void 0:l.className,{"tabs__item--active":w===n})}),null!=a?a:n)}))),o?(0,r.cloneElement)(g.filter((function(e){return e.props.value===w}))[0],{className:"margin-vert--md"}):r.createElement("div",{className:"margin-vert--md"},g.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==w})}))))}function s(e){var n=(0,l.Z)();return r.createElement(d,(0,t.Z)({key:String(n)},e))}},86795:function(e,n,a){a.d(n,{B:function(){return i}});var t=a(67294),r=a(95999),l=a(39960),o=a(86010);r.Z,l.Z;function i(e){var n=e.name,a=(e.image,e.url),i=e.description;return t.createElement("div",{className:"col col--6 margin-bottom--lg"},t.createElement("div",{className:(0,o.Z)("card")},t.createElement("div",{className:(0,o.Z)("card__image")},t.createElement(l.Z,{to:a})),t.createElement("div",{className:"card__body"},n&&t.createElement("h3",null,n),i&&t.createElement("p",null,i)),t.createElement("div",{className:"card__footer"},t.createElement("div",{className:"button-group button-group--block"},t.createElement(l.Z,{className:"button button--secondary",to:a},t.createElement(r.Z,{id:"playground.tryItButton"},"Try it now!"))))))}},16240:function(e,n,a){a.r(n),a.d(n,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return s},toc:function(){return m},default:function(){return f}});var t=a(83117),r=a(80102),l=(a(67294),a(3905)),o=a(26396),i=a(58215),u=a(86795),p=["components"],c={title:"\ud83d\udce6 \u5168\u666f\u6237\u578b\u96f7\u8fbe\u56fe"},d=void 0,s={unversionedId:"front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin",id:"front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin",title:"\ud83d\udce6 \u5168\u666f\u6237\u578b\u96f7\u8fbe\u56fe",description:"PanoFloorplanRadarPlugin",source:"@site/docs/front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin.md",sourceDirName:"front/3d-space/advanced/dnalogel/floorplan",slug:"/front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin",editUrl:"https://github.com/realsee-developer/realsee-developer.github.com/docs/front/3d-space/advanced/dnalogel/floorplan/PanoFloorplanRadarPlugin.md",tags:[],version:"current",lastUpdatedBy:"Angry-Sparrow",lastUpdatedAt:1646381929,formattedLastUpdatedAt:"3/4/2022",frontMatter:{title:"\ud83d\udce6 \u5168\u666f\u6237\u578b\u96f7\u8fbe\u56fe"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u6237\u578b\u56fe\u6570\u636e\u83b7\u53d6\ud83c\udf1f",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/getFloorplanData"},next:{title:"\ud83d\udce6 \u6a21\u578b\u6237\u578b\u56fe",permalink:"/docs/front/3d-space/advanced/dnalogel/floorplan/ModelFloorplanPlugin"}},m=[{value:"<strong>PanoFloorplanRadarPlugin</strong>",id:"panofloorplanradarplugin",children:[],level:2},{value:"\u793a\u4f8b\u6548\u679c",id:"\u793a\u4f8b\u6548\u679c",children:[],level:2},{value:"\u529f\u80fd\u8bf4\u660e",id:"\u529f\u80fd\u8bf4\u660e",children:[],level:2},{value:"\u5b89\u88c5\u5f15\u7528",id:"\u5b89\u88c5\u5f15\u7528",children:[],level:2},{value:"\u5f00\u53d1\u6307\u5357",id:"\u5f00\u53d1\u6307\u5357",children:[{value:"\u521d\u59cb\u5316",id:"\u521d\u59cb\u5316",children:[],level:3},{value:"\u8f7d\u5165\u6570\u636e",id:"\u8f7d\u5165\u6570\u636e",children:[],level:3},{value:"\u6838\u5fc3\u65b9\u6cd5",id:"\u6838\u5fc3\u65b9\u6cd5",children:[],level:3},{value:"\u5728\u96f7\u8fbe\u56fe\u4e0a\u5c55\u793a\u989d\u5916\u5185\u5bb9",id:"\u5728\u96f7\u8fbe\u56fe\u4e0a\u5c55\u793a\u989d\u5916\u5185\u5bb9",children:[],level:3},{value:"\u914d\u7f6e\u53c2\u6570",id:"\u914d\u7f6e\u53c2\u6570",children:[],level:3}],level:2},{value:"\u5728\u7ebf\u7ec3\u4e60",id:"\u5728\u7ebf\u7ec3\u4e60",children:[],level:2}],v={toc:m};function f(e){var n=e.components,a=(0,r.Z)(e,p);return(0,l.kt)("wrapper",(0,t.Z)({},v,a,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"panofloorplanradarplugin"},(0,l.kt)("strong",{parentName:"h2"},"PanoFloorplanRadarPlugin")),(0,l.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,l.kt)("div",{parentName:"div",className:"admonition-heading"},(0,l.kt)("h5",{parentName:"div"},(0,l.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,l.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,l.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u6b64\u63d2\u4ef6\u5f3a\u4f9d\u8d56\u4e8e",(0,l.kt)("strong",{parentName:"h5"},"\u6237\u578b\u56fe\u6570\u636e"),"\uff0c\u8bf7\u7387\u5148\u4e86\u89e3\u5982\u4f55\u83b7\u53d6\u6237\u578b\u56fe\u6570\u636e\u3002")),(0,l.kt)("div",{parentName:"div",className:"admonition-content"})),(0,l.kt)("h2",{id:"\u793a\u4f8b\u6548\u679c"},"\u793a\u4f8b\u6548\u679c"),(0,l.kt)("div",{className:"docs-vr-normal"},(0,l.kt)("iframe",{className:"docs-vr-iframe",src:"https://stackblitz.com/edit/panofloorplanradarplugin?embed=1&file=index.tsx&hideExplorer=1&hideNavigation=1&view=preview"})),(0,l.kt)("h2",{id:"\u529f\u80fd\u8bf4\u660e"},"\u529f\u80fd\u8bf4\u660e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5168\u666f\u6237\u578b\u96f7\u8fbe\u56fe\u63d2\u4ef6")," \u63d0\u4f9b\u4e86\u5728\u5168\u666f\u6a21\u5f0f\u4e0b\u5c55\u793a\u4e8c\u7ef4\u6237\u578b\u56fe\u7684\u529f\u80fd\u3002"),(0,l.kt)("p",null,"\u652f\u6301\u7684\u7279\u6027\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},'\u96f7\u8fbe\u6307\u5f15\uff1a\u4ee5"\u96f7\u8fbe"\u56fe\u6807\u7684\u65b9\u5f0f\u5c55\u793a\u5f53\u524d\u70b9\u4f4d\u7684\u4f4d\u7f6e\u548c\u671d\u5411\u3002'),(0,l.kt)("li",{parentName:"ul"},"\u6237\u578b\u56fe\u81ea\u9002\u5e94\u586b\u5145\uff1a\u6700\u5c0f\u8fb9\u5927\u5c0f\u81ea\u52a8\u8ba1\u7b97\uff0c\u4fdd\u969c\u5c55\u793a\u5728 DOM \u5bb9\u5668\u4e2d\u5fc3\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u5168\u666f\u6a21\u5f0f\u4e0b\u8d70\u70b9\u51fa\u73b0\u697c\u5c42\u53d8\u66f4\u65f6\u4f1a\u81ea\u52a8\u5207\u6362\u81f3\u5f53\u524d\u697c\u5c42\u7684\u6237\u578b\u56fe\u3002"),(0,l.kt)("li",{parentName:"ul"},"\u914d\u7f6e ",(0,l.kt)("inlineCode",{parentName:"li"},"hoverEnable")," \u4e3a ",(0,l.kt)("inlineCode",{parentName:"li"},"true")," (\u9ed8\u8ba4\u914d\u7f6e)\u65f6\uff0c\u9f20\u6807 ",(0,l.kt)("inlineCode",{parentName:"li"},"hover")," \u76f8\u5173\u5206\u95f4\u4f1a\u9ad8\u4eae\u3002")),(0,l.kt)("h2",{id:"\u5b89\u88c5\u5f15\u7528"},"\u5b89\u88c5\u5f15\u7528"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u8bf7\u6309\u9700\u9009\u62e9 ",(0,l.kt)("inlineCode",{parentName:"strong"},"yarn")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"strong"},"npm")," \u5b89\u88c5\u65b9\u5f0f\uff1a")),(0,l.kt)(o.Z,{groupId:"npm2yarn",mdxType:"Tabs"},(0,l.kt)(i.Z,{value:"npm",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"npm install @realsee/dnalogel\n"))),(0,l.kt)(i.Z,{value:"yarn",label:"Yarn",mdxType:"TabItem"},(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-bash"},"yarn add @realsee/dnalogel\n")))),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u901a\u8fc7 es \u5f15\u7528\uff1a")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},'import PanoFloorplanRadarPlugin from "@realsee/dnalogel/plugins/floorplan/PanoFloorplanRadarPlugin"\n')),(0,l.kt)("h2",{id:"\u5f00\u53d1\u6307\u5357"},"\u5f00\u53d1\u6307\u5357"),(0,l.kt)("h3",{id:"\u521d\u59cb\u5316"},"\u521d\u59cb\u5316"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u65b9\u6cd51\uff1a\u5728\u521d\u59cb\u5316 ",(0,l.kt)("inlineCode",{parentName:"p"},"Five")," \u5b9e\u4f8b\u7684\u65f6\u5019\uff0c\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"PanoFloorplanRadarPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import Five  from '@realsee/five'\nimport PanoFloorplanRadarPlugin from '@realsee/dnalogel/plugins/floorplan/PanoFloorplanRadarPlugin'\n\n// \u521d\u59cb\u5316 five \u5b9e\u4f8b\nconst five = new Five({\n    plugins: [\n        [PanoFloorplanRadarPlugin, 'panoFloorplanRadar', {\n        //\u521d\u59cb\u5316\u53c2\u6570\n        }]\n    ]\n})\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u65b9\u6cd52\uff1a\u5728\u521b\u5efa FiveProvider \u7ec4\u4ef6\u65f6\u5c06 ",(0,l.kt)("inlineCode",{parentName:"p"},"PanoFloorplanRadarPlugin")," \u914d\u7f6e\u5728\u521d\u59cb\u5316\u63d2\u4ef6\u53c2\u6570\u5373\u53ef\u3002")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"import { createFiveProvider } from '@realsee/five/react'\n\n// \u521b\u5efa FiveProvider \u7ec4\u4ef6\nconst FiveProvider = createFiveProvider({\n    plugins: [\n        [PanoFloorplanRadarPlugin, \"panoFloorplanRadar\", {\n            // \u521d\u59cb\u5316\u53c2\u6570\n        }]\n    ]\n})\n")),(0,l.kt)("h3",{id:"\u8f7d\u5165\u6570\u636e"},"\u8f7d\u5165\u6570\u636e"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u83b7\u53d6\u63d2\u4ef6\u5b9e\u4f8b\nconst pluginInstance = five.plugins.panoFloorplanRadar\n// \u8f7d\u5165\u6570\u636e\npluginInstance.load(floorplanServerData)\n")),(0,l.kt)("h3",{id:"\u6838\u5fc3\u65b9\u6cd5"},"\u6838\u5fc3\u65b9\u6cd5"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"ModelFloorplanPlugin")," \u63d0\u4f9b\u7684\u6838\u5fc3\u65b9\u6cd5\u6709\uff1a"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"load(data: FloorplanServerData)")," \u8f7d\u5165\u6237\u578b\u56fe\u6570\u636e")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u60a8\u9700\u8981\u624b\u52a8\u8f7d\u5165\u6237\u578b\u56fe\u6570\u636e\uff0c","[FloorplanServerData]"," \u7684\u6570\u636e\u6765\u6e90\u8bf7\u9605\u8bfb",(0,l.kt)("a",{parentName:"p",href:"http://developers.realsee.com/docs/#/docs/five/server/README"},"\u5982\u89c6\u5f00\u53d1\u8005\u4e2d\u5fc3\u670d\u52a1\u7aef API"),"\u3002")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"appendTo(wrapper: Element)")," \u6302\u8f7d DOM \u8282\u70b9")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u5c06\u6237\u578b\u56feDOM\u6a21\u5757\u8f7d\u5165\u60a8\u7684 HTML \u7ed3\u6784\u4e2d\u3002")),(0,l.kt)("h3",{id:"\u5728\u96f7\u8fbe\u56fe\u4e0a\u5c55\u793a\u989d\u5916\u5185\u5bb9"},"\u5728\u96f7\u8fbe\u56fe\u4e0a\u5c55\u793a\u989d\u5916\u5185\u5bb9"),(0,l.kt)("p",null,"\u5bf9\u4e8e\u4e00\u4e9b\u4e09\u7ef4\u573a\u666f\u4e2d\u7684\u7269\u4f53\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u96f7\u8fbe\u56fe\u4e0a\u7528\u4e00\u4e9b\u7279\u6b8a\u7684\u56fe\u6807\u8fdb\u884c\u5c55\u793a"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"setExtraObjectsWith3DPositions(data: FloorplanExtraObject3D[])")," \u8bbe\u7f6e\u5728\u6237\u578b\u56fe\u4e0a\u5c55\u793a\u7684\u4e09\u7ef4\u7269\u4f53\u5217\u8868"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4e09\u7ef4\u6570\u636e\u7684\u7ed3\u6784\u5982\u4e0b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"// \u80fd\u591f\u6620\u5c04\u5230\u96f7\u8fbe\u56fe\u4e0a\u7684\u4e09\u7ef4\u7269\u4f53\nexport interface FloorplanExtraObject3D {\n  id: string\n  // [x, y, z]\n  position: number[]\n}\n")),(0,l.kt)("h3",{id:"\u914d\u7f6e\u53c2\u6570"},"\u914d\u7f6e\u53c2\u6570"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"wrapper: string | Element")," \u63d2\u4ef6\u6302\u8f7d\u7684 DOM \u8282\u70b9")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("inlineCode",{parentName:"p"},"hoverEnable?: boolean")," \u5426\u5f00\u542f\u9f20\u6807 ",(0,l.kt)("inlineCode",{parentName:"p"},"hover")," \u9ad8\u4eae\u5206\u95f4"))),(0,l.kt)("p",null,"\u914d\u7f6e\u6837\u4f8b\u53c2\u8003\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"\nimport PanoFloorplanRadarPlugin from '@xxx/dnalogel/plugins/PanoFloorplanRadarPlugin'\nimport { Five, FivePluginInit } from '@realsee/five'\n\nconst five = new Five({\n  plugins: [\n    [\n      PanoFloorplanRadarPlugin,\n      'floorpalnRadar',\n      { \n          wrapper: '.floorplan-radar-wrapper', \n          configs: {\n              hoverEnable: true\n          }\n      }\n    ],\n  ],\n})\n\n")),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u66f4\u591a\u7ec6\u8282\u8bf7\u53c2\u8003 ","[ModelFloorplanPlugin]","\u3002")),(0,l.kt)("h2",{id:"\u5728\u7ebf\u7ec3\u4e60"},"\u5728\u7ebf\u7ec3\u4e60"),(0,l.kt)(u.B,{name:"\ud83d\ude0a\u70b9\u51fb Try it now! \u8bd5\u4e00\u8bd5\u5427\ud83d\ude0a",url:"https://stackblitz.com/edit/panofloorplanradarplugin?file=index.tsx",mdxType:"PlaygroundCard"}))}f.isMDXComponent=!0}}]);