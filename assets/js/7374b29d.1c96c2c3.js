"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[775],{26851:function(e,t,n){t.Z=n.p+"assets/images/live-exit-success-41f11b4f7226fc37d2bf281f31a88a01.png"},3905:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return m}});var a=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function r(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?r(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):r(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,a,i=function(e,t){if(null==e)return{};var n,a,i={},r=Object.keys(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);for(a=0;a<r.length;a++)n=r[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var s=a.createContext({}),c=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return a.createElement(s.Provider,{value:t},e.children)},p={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,i=e.mdxType,r=e.originalType,s=e.parentName,u=o(e,["components","mdxType","originalType","parentName"]),d=c(n),m=i,v=d["".concat(s,".").concat(m)]||d[m]||p[m]||r;return n?a.createElement(v,l(l({ref:t},u),{},{components:n})):a.createElement(v,l({ref:t},u))}));function m(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var r=n.length,l=new Array(r);l[0]=d;var o={};for(var s in t)hasOwnProperty.call(t,s)&&(o[s]=t[s]);o.originalType=e,o.mdxType="string"==typeof e?e:i,l[1]=o;for(var c=2;c<r;c++)l[c]=n[c];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},58215:function(e,t,n){var a=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,i=e.className;return a.createElement("div",{role:"tabpanel",hidden:n,className:i},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return d}});var a=n(83117),i=n(67294),r=n(72389),l=n(79443);var o=function(){var e=(0,i.useContext)(l.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},s=n(16681),c=n(86010),u="tabItem_LplD";function p(e){var t,n,r,l=e.lazy,p=e.block,d=e.defaultValue,m=e.values,v=e.groupId,h=e.className,f=i.Children.map(e.children,(function(e){if((0,i.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),g=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,s.lx)(g,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var N=null===d?d:null!=(t=null!=d?d:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(r=f[0])?void 0:r.props.value;if(null!==N&&!g.some((function(e){return e.value===N})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+N+'" but none of its children has the corresponding value. Available values are: '+g.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=o(),y=b.tabGroupChoices,w=b.setTabGroupChoices,x=(0,i.useState)(N),C=x[0],E=x[1],O=[],T=(0,s.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var M=y[v];null!=M&&M!==C&&g.some((function(e){return e.value===M}))&&E(M)}var j=function(e){var t=e.currentTarget,n=O.indexOf(t),a=g[n].value;a!==C&&(T(t),E(a),null!=v&&w(v,a))},_=function(e){var t,n=null;switch(e.key){case"ArrowRight":var a=O.indexOf(e.currentTarget)+1;n=O[a]||O[0];break;case"ArrowLeft":var i=O.indexOf(e.currentTarget)-1;n=O[i]||O[O.length-1]}null==(t=n)||t.focus()};return i.createElement("div",{className:"tabs-container"},i.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":p},h)},g.map((function(e){var t=e.value,n=e.label,r=e.attributes;return i.createElement("li",(0,a.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return O.push(e)},onKeyDown:_,onFocus:j,onClick:j},r,{className:(0,c.Z)("tabs__item",u,null==r?void 0:r.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),l?(0,i.cloneElement)(f.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):i.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,i.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function d(e){var t=(0,r.Z)();return i.createElement(p,(0,a.Z)({key:String(t)},e))}},12846:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return o},contentTitle:function(){return s},metadata:function(){return c},toc:function(){return u},default:function(){return d}});var a=n(83117),i=n(80102),r=(n(67294),n(3905)),l=(n(26396),n(58215),["components"]),o={title:"\u5e26\u770b\u9000\u51fa"},s=void 0,c={unversionedId:"front/live/get-started/live-exit",id:"front/live/get-started/live-exit",title:"\u5e26\u770b\u9000\u51fa",description:"\u5982\u679c\u5305\u542b\u5e26\u770b\u8bed\u8a00\u529f\u80fd\uff0c\u5e26\u770b\u9000\u51fa\u4f1a\u9ed8\u8ba4\u9000\u51fa\u8bed\u97f3\u8fde\u63a5\u3002",source:"@site/docs/front/live/get-started/02.live-exit.md",sourceDirName:"front/live/get-started",slug:"/front/live/get-started/live-exit",permalink:"/docs/front/live/get-started/live-exit",editUrl:"https://github.com/realsee-developer/realsee-developer.github.com/docs/front/live/get-started/02.live-exit.md",tags:[],version:"current",lastUpdatedBy:"solome",lastUpdatedAt:1646224394,formattedLastUpdatedAt:"3/2/2022",sidebarPosition:2,frontMatter:{title:"\u5e26\u770b\u9000\u51fa"},sidebar:"\u5982\u89c6\u5e26\u770b",previous:{title:"\u5e26\u770b\u8fde\u63a5",permalink:"/docs/front/live/get-started/live-connect"},next:{title:"VR\u540c\u5c4f",permalink:"/docs/front/live/get-started/sync-five-state"}},u=[{value:"\u65e0\u6846\u67b6\u793a\u4f8b",id:"\u65e0\u6846\u67b6\u793a\u4f8b",children:[{value:"1\u3001\u8c03\u7528\u9000\u51fa\u65b9\u6cd5",id:"1\u8c03\u7528\u9000\u51fa\u65b9\u6cd5",children:[],level:3},{value:"2\u3001\u76d1\u542c\u623f\u95f4\u5173\u95ed",id:"2\u76d1\u542c\u623f\u95f4\u5173\u95ed",children:[],level:3},{value:"3\u3001\u6210\u529f\u9000\u51fa\u6807\u8bc6",id:"3\u6210\u529f\u9000\u51fa\u6807\u8bc6",children:[],level:3}],level:2},{value:"react \u793a\u4f8b",id:"react-\u793a\u4f8b",children:[{value:"1\u3001\u8c03\u7528\u9000\u51fa\u65b9\u6cd5",id:"1\u8c03\u7528\u9000\u51fa\u65b9\u6cd5-1",children:[],level:3},{value:"2\u3001\u76d1\u542c\u623f\u95f4\u5173\u95ed",id:"2\u76d1\u542c\u623f\u95f4\u5173\u95ed-1",children:[],level:3},{value:"3\u3001\u6210\u529f\u9000\u51fa\u6807\u8bc6",id:"3\u6210\u529f\u9000\u51fa\u6807\u8bc6-1",children:[],level:3}],level:2}],p={toc:u};function d(e){var t=e.components,o=(0,i.Z)(e,l);return(0,r.kt)("wrapper",(0,a.Z)({},p,o,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u5982\u679c\u5305\u542b\u5e26\u770b\u8bed\u8a00\u529f\u80fd\uff0c\u5e26\u770b\u9000\u51fa\u4f1a\u9ed8\u8ba4\u9000\u51fa\u8bed\u97f3\u8fde\u63a5\u3002"))),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u901a\u5e38\u6709\u4e24\u79cd\u60c5\u51b5\u9700\u8981\u5173\u6ce8\u5e26\u770b\u9000\u51fa\uff1a")),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"1\u3001\u7528\u6237\u4e3b\u52a8\u9000\u51fa\u5e26\u770b\u623f\u95f4"),(0,r.kt)("br",null),"\n\u4e3b\u52a8\u9000\u51fa\u623f\u95f4\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"exit()")," \u65b9\u6cd5\u8fdb\u884c\u64cd\u4f5c\uff0c\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"exit()")," \u65b9\u6cd5\u7684\u56de\u8c03\u53ef\u77e5\u5e26\u770b\u662f\u5426\u9000\u51fa\u3002",(0,r.kt)("br",null),"\n\u5176\u4ed6\u56e0\u4e1a\u52a1\u573a\u666f\u9700\u8981\uff0c\u7531\u7a0b\u5e8f\u4e3b\u52a8\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"exit()")," \u89e6\u53d1\u7684\u9000\u51fa\u5e26\u770b\u90fd\u5f52\u4e8e\u7528\u6237\u4e3b\u52a8\u9000\u51fa\u5e26\u770b\u623f\u95f4\u3002")),(0,r.kt)("li",{parentName:"ul"},(0,r.kt)("p",{parentName:"li"},(0,r.kt)("strong",{parentName:"p"},"2\u3001\u5e26\u770b\u623f\u95f4\u88ab\u5173\u95ed"),(0,r.kt)("br",null),"\n\u5e26\u770b\u623f\u95f4\u88ab\u5173\u95ed\u53ef\u901a\u8fc7\u76d1\u542c\u5185\u7f6e\u4e8b\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"builtinEvent")," \uff0c\u5224\u65ad\u8fd4\u56de\u884c\u4e3a\u662f\u5426\u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"RoomClose")," \u7c7b\u578b\uff0c\u83b7\u6089\u5e26\u770b\u662f\u5426\u9000\u51fa\u3002"))),(0,r.kt)("p",null,"\u4e0b\u9762\u9488\u5bf9\u4ee5\u4e0a\u60c5\u51b5\u505a\u8be6\u7ec6\u5f00\u53d1\u8bf4\u660e\u3002"),(0,r.kt)("h2",{id:"\u65e0\u6846\u67b6\u793a\u4f8b"},"\u65e0\u6846\u67b6\u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6b64\u8bf4\u660e\u9ed8\u8ba4\u60a8\u4f7f\u7528\u539f\u751f ",(0,r.kt)("inlineCode",{parentName:"strong"},"js")," | ",(0,r.kt)("inlineCode",{parentName:"strong"},"ts")," \u8fdb\u884c\u5e94\u7528\u5f00\u53d1\u3002")),(0,r.kt)("h3",{id:"1\u8c03\u7528\u9000\u51fa\u65b9\u6cd5"},"1\u3001\u8c03\u7528\u9000\u51fa\u65b9\u6cd5"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"exit()")," \u65b9\u6cd5\uff0c\u64cd\u4f5c\u5e26\u770b\u9000\u51fa\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// \u901a\u8fc7\u7b80\u5355\u7684 `console.log(live)` \uff0c\u786e\u4fdd\u60a8\u7684\u786e\u83b7\u53d6\u5230\u4e86 `live` \u5b9e\u4f8b\u3002\nlive.exit().then(() => {\n    console.log('\u9000\u51fa\u5e26\u770b')\n})\n")),(0,r.kt)("h3",{id:"2\u76d1\u542c\u623f\u95f4\u5173\u95ed"},"2\u3001\u76d1\u542c\u623f\u95f4\u5173\u95ed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"import { BuiltinActionType } from \"@realsee/live/lib/typings/LiveMsg\";\n\nlive.on('builtinEvent', builtinMsg => {\n    if (builtinMsg.action === BuiltinActionType.RoomClose) {\n        // \u5e26\u770b\u623f\u95f4\u5173\u95ed\uff0c\u9000\u51fa\u5e26\u770b\n    }\n})\n")),(0,r.kt)("h3",{id:"3\u6210\u529f\u9000\u51fa\u6807\u8bc6"},"3\u3001\u6210\u529f\u9000\u51fa\u6807\u8bc6"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u60a8\u4e5f\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u5feb\u6377\u67e5\u770b\u5e26\u770b\u662f\u5426\u6210\u529f\u9000\u51fa\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"live-exit-success",src:n(26851).Z})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5982\u679c\u6536\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"BUILTIN_MSG")," \u6307\u4ee4\uff0c\u70b9\u51fb\u67e5\u770b\u8be6\u7ec6\u5185\u5bb9\uff0cdata \u7684\u4e8b\u4ef6\u7c7b\u578b\uff08event_type) \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"room_change"),"\uff0c \u884c\u4e3a\uff08action) \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"close"),", \u5219\u6807\u8bc6\u5e26\u770b\u6210\u529f\u9000\u51fa\u3002"),(0,r.kt)("h2",{id:"react-\u793a\u4f8b"},"react \u793a\u4f8b"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6b64\u8bf4\u660e\u9ed8\u8ba4\u60a8\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"strong"},"react")," \u6846\u67b6\u8fdb\u884c\u5e94\u7528\u5f00\u53d1\u3002")),(0,r.kt)("h3",{id:"1\u8c03\u7528\u9000\u51fa\u65b9\u6cd5-1"},"1\u3001\u8c03\u7528\u9000\u51fa\u65b9\u6cd5"),(0,r.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"useLiveAction")," hook, \u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"exit()")," \u65b9\u6cd5\uff0c\u8fdb\u884c\u5e26\u770b\u9000\u51fa\u3002"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-jsx"},"// highlight-start\nimport { useLiveAction } from './LiveReact'\n// highlight-end\n\nfunction ExitBtn () {\n    \n    // highlight-start\n    const { exit } = useLiveAction()\n    // highlight-end\n    \n    const handleExit = () => {\n        exit().then(() => {\n            console.log('\u9000\u51fa\u5e26\u770b')\n        })\n    }\n    \n    return <button onClick={handleExit}>\u9000\u51fa\u5e26\u770b\u793a\u4f8b\u6309\u94ae</button>\n}\n")),(0,r.kt)("h3",{id:"2\u76d1\u542c\u623f\u95f4\u5173\u95ed-1"},"2\u3001\u76d1\u542c\u623f\u95f4\u5173\u95ed"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"import { BuiltinActionType } from \"@realsee/live/lib/typings/LiveMsg\";\n\nconst { useLiveEventCallback } = liveInstance\n\n\nuseLiveEventCallback(\"builtinEvent\", (builtinMsg) => {\n        switch (builtinMsg.action) {\n            // highlight-start\n            case BuiltinActionType.RoomClose:\n                console.log('__\u5e26\u770b\u623f\u95f4\u5173\u95ed__')\n                break\n            // highlight-end\n            case BuiltinActionType.UserStatus:\n                console.log(builtinMsg.data)\n                console.log('builtinEvent: user state change')\n                break\n            case BuiltinActionType.UserInfo:\n                console.log('builtinEven: user info change')\n                break\n            case BuiltinActionType.UserMicroStatus:\n                console.log('builtinEvent: user micro change')\n                break\n            case BuiltinActionType.UserPermission:\n                console.log('builtinEvent: user permission change')\n                break\n            default:\n                console.log('builtinEvent: \u5176\u4ed6\u4e0d\u5728\u679a\u4e3e\u5185\u7684\u53d8\u66f4\uff01') // debug\n                break\n        }\n    })\n")),(0,r.kt)("h3",{id:"3\u6210\u529f\u9000\u51fa\u6807\u8bc6-1"},"3\u3001\u6210\u529f\u9000\u51fa\u6807\u8bc6"),(0,r.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,r.kt)("div",{parentName:"div",className:"admonition-heading"},(0,r.kt)("h5",{parentName:"div"},(0,r.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,r.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,r.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,r.kt)("div",{parentName:"div",className:"admonition-content"},(0,r.kt)("p",{parentName:"div"},"\u60a8\u4e5f\u53ef\u4ee5\u5728\u63a7\u5236\u53f0\u5feb\u6377\u67e5\u770b\u5e26\u770b\u662f\u5426\u6210\u529f\u9000\u51fa\u3002"))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"live-exit-success",src:n(26851).Z})),(0,r.kt)("p",null,"\u5982\u4e0a\u56fe\u6240\u793a\uff0c\u5982\u679c\u6536\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"BUILTIN_MSG")," \u6307\u4ee4\uff0c\u70b9\u51fb\u67e5\u770b\u8be6\u7ec6\u5185\u5bb9\uff0cdata \u7684\u4e8b\u4ef6\u7c7b\u578b\uff08event_type) \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"room_change"),"\uff0c \u884c\u4e3a\uff08action) \u4e3a ",(0,r.kt)("inlineCode",{parentName:"p"},"close"),", \u5219\u6807\u8bc6\u5e26\u770b\u6210\u529f\u9000\u51fa\u3002"))}d.isMDXComponent=!0}}]);