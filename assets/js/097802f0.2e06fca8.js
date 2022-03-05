"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[8133],{3905:function(e,t,n){n.d(t,{Zo:function(){return p},kt:function(){return g}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},p=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},u=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),u=c(n),g=a,d=u["".concat(l,".").concat(g)]||u[g]||m[g]||o;return n?r.createElement(d,i(i({ref:t},p),{},{components:n})):r.createElement(d,i({ref:t},p))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,i=new Array(o);i[0]=u;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s.mdxType="string"==typeof e?e:a,i[1]=s;for(var c=2;c<o;c++)i[c]=n[c];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}u.displayName="MDXCreateElement"},58215:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},26396:function(e,t,n){n.d(t,{Z:function(){return u}});var r=n(83117),a=n(67294),o=n(72389),i=n(79443);var s=function(){var e=(0,a.useContext)(i.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(16681),c=n(86010),p="tabItem_LplD";function m(e){var t,n,o,i=e.lazy,m=e.block,u=e.defaultValue,g=e.values,d=e.groupId,v=e.className,k=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),f=null!=g?g:k.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),h=(0,l.lx)(f,(function(e,t){return e.value===t.value}));if(h.length>0)throw new Error('Docusaurus error: Duplicate values "'+h.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var w=null===u?u:null!=(t=null!=u?u:null==(n=k.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=k[0])?void 0:o.props.value;if(null!==w&&!f.some((function(e){return e.value===w})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+w+'" but none of its children has the corresponding value. Available values are: '+f.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var b=s(),N=b.tabGroupChoices,x=b.setTabGroupChoices,T=(0,a.useState)(w),C=T[0],y=T[1],F=[],j=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=d){var W=N[d];null!=W&&W!==C&&f.some((function(e){return e.value===W}))&&y(W)}var P=function(e){var t=e.currentTarget,n=F.indexOf(t),r=f[n].value;r!==C&&(j(t),y(r),null!=d&&x(d,r))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=F.indexOf(e.currentTarget)+1;n=F[r]||F[0];break;case"ArrowLeft":var a=F.indexOf(e.currentTarget)-1;n=F[a]||F[F.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":m},v)},f.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:C===t?0:-1,"aria-selected":C===t,key:t,ref:function(e){return F.push(e)},onKeyDown:E,onFocus:P,onClick:P},o,{className:(0,c.Z)("tabs__item",p,null==o?void 0:o.className,{"tabs__item--active":C===t})}),null!=n?n:t)}))),i?(0,a.cloneElement)(k.filter((function(e){return e.props.value===C}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},k.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==C})}))))}function u(e){var t=(0,o.Z)();return a.createElement(m,(0,r.Z)({key:String(t)},e))}},55327:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return p},metadata:function(){return m},toc:function(){return u},default:function(){return d}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),i=n(26396),s=n(58215),l=["components"],c={title:"\u6253\u6807\u7b7e"},p=void 0,m={unversionedId:"front/3d-space/handbook/react-hooks/tagging",id:"front/3d-space/handbook/react-hooks/tagging",title:"\u6253\u6807\u7b7e",description:"\u4e0a\u4e00\u7ae0\u56de\u987e: \u4e09\u7ef4\u4e2d\u7684\u70b9",source:"@site/docs/front/3d-space/handbook/react-hooks/5.tagging.md",sourceDirName:"front/3d-space/handbook/react-hooks",slug:"/front/3d-space/handbook/react-hooks/tagging",permalink:"/docs/front/3d-space/handbook/react-hooks/tagging",editUrl:"https://github.com/realsee-developer/realsee-developer.github.com/docs/front/3d-space/handbook/react-hooks/5.tagging.md",tags:[],version:"current",lastUpdatedBy:"solome",lastUpdatedAt:1646224394,formattedLastUpdatedAt:"3/2/2022",sidebarPosition:5,frontMatter:{title:"\u6253\u6807\u7b7e"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9",permalink:"/docs/front/3d-space/handbook/react-hooks/points-in-3d"},next:{title:'\u6a21\u578b"\u5c0f\u7a97"',permalink:"/docs/front/3d-space/advanced/dnalogel/ModelViewPlugin"}},u=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[],level:2},{value:"\u5f00\u53d1\u6253\u6807\u7b7e\u529f\u80fd",id:"\u5f00\u53d1\u6253\u6807\u7b7e\u529f\u80fd",children:[{value:"\u6dfb\u52a0\u6807\u7b7e\u6837\u5f0f",id:"\u6dfb\u52a0\u6807\u7b7e\u6837\u5f0f",children:[],level:3},{value:"useFiveProject2d \u8bf4\u660e",id:"usefiveproject2d-\u8bf4\u660e",children:[],level:3},{value:"\u7f16\u5199 TaggingController",id:"\u7f16\u5199-taggingcontroller",children:[],level:3},{value:"\u4f7f\u7528\u6253\u6807\u7b7e\u7ec4\u4ef6",id:"\u4f7f\u7528\u6253\u6807\u7b7e\u7ec4\u4ef6",children:[],level:3}],level:2}],g={toc:u};function d(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},g,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u4e0a\u4e00\u7ae0\u56de\u987e: \u4e09\u7ef4\u4e2d\u7684\u70b9")," ",(0,o.kt)("br",null),"\n\u4f60\u4e86\u89e3 Five SDK \u7684\u4e8b\u4ef6\u7cfb\u7edf\uff0c\u5e76\u4e14\u53ea\u662f\u4e86\u5c0f\u5e94\u7528\uff0c\u901a\u8fc7\u70b9\u51fb\u4e8b\u4ef6\u83b7\u53d6\u5230\u70b9\u7684\u4e09\u7ef4\u4f4d\u7f6e\u3002")),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u672c\u7ae0\u4f60\u53ef\u4ee5\u5b66\u4e60\u5230")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u5728\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u8bbe\u7f6e\u6807\u7b7e\u3002"))),(0,o.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"src/5.tagging"),"\uff09\u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,o.kt)("strong",{parentName:"p"},"html")," \u6587\u4ef6 \u4ee5\u53ca ",(0,o.kt)("strong",{parentName:"p"},"jsx")," \u6216 ",(0,o.kt)("strong",{parentName:"p"},"tsx")," \u6587\u4ef6\u3002\n\u643a\u5e26\u7740\u4e0a\u4e00\u7ae0\u7684 ",(0,o.kt)("strong",{parentName:"p"},"State")," \u4ee3\u7801\uff0c\u592a\u8fc7\u4e8e\u7e41\u7410\uff0c\u90a3\u6211\u4eec\u4ece ",(0,o.kt)("strong",{parentName:"p"},"\u5c55\u793a\u4e09\u7ef4\u7a7a\u95f4")," \u7ae0\u7684\u5185\u5bb9\u7684\u57fa\u7840\u5f00\u53d1\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/5.tagging/index.html"',title:'"src/5.tagging/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>\u6253\u6807\u7b7e | Tagging</title>\n  <style>\n    * { margin: 0; padding: 0; }\n    html, body #app { width: 100%; height: 100%; overflow: hidden; }\n  </style>\n</head>\n<body>\n  <div id="app"></div>\n  <script type="module" src="./index"><\/script>\n</body>\n</html>\n')),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/src/5.tagging/useFetchWork.js"',title:'"src/src/5.tagging/useFetchWork.js"'},'import { useState, useEffect } from "react";\nimport { parseWork } from "@realsee/five";\n\n/**\n * React Hook: \u901a\u8fc7 work.json \u7684\u5730\u5740 \u83b7\u53d6 work \u5bf9\u8c61\n * @param url work.json \u7684\u6570\u636e\u5730\u5740\n * @returns work \u5bf9\u8c61\uff0c\u5982\u679c\u83b7\u53d6\u4e2d\uff0c\u8fd4\u56de null\n */\n function useFetchWork(url) {\n  const [work, setWork] = useState(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then(response => response.text())\n      .then(text => setWork(parseWork(text)));\n  },[url]);\n  return work;\n}\n\nexport { useFetchWork };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/src/5.tagging/useWindowDimensions.js"',title:'"src/src/5.tagging/useWindowDimensions.js"'},'import { useState, useEffect } from "react";\n\n/**\n * \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\n function getWindowDimensions() {\n  return { width: window.innerWidth, height: window.innerHeight };\n}\n\n/**\n * React Hook: \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\nfunction useWindowDimensions() {\n  const [size, setSize] = useState(getWindowDimensions);\n  useEffect(() => {\n    const listener = () => setSize(getWindowDimensions());\n    window.addEventListener("resize", listener, false);\n    return () => window.removeEventListener("resize", listener, false);\n  });\n  return size;\n}\n\nexport { useWindowDimensions };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/src/5.tagging/ModeController.jsx"',title:'"src/src/5.tagging/ModeController.jsx"'},'import React from "react";\nimport { Five } from "@realsee/five";\nimport { useFiveCurrentState } from "@realsee/five/react";\nimport BottomNavigation from "@mui/material/BottomNavigation";\nimport BottomNavigationAction from "@mui/material/BottomNavigationAction";\nimport Paper from "@mui/material/Paper";\nimport DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";\nimport ViewInArIcon from "@mui/icons-material/ViewInAr";\n\n/**\n * React Component: \u6a21\u6001\u63a7\u5236\n */\nconst ModeController = () => {\n  const [state, setState] = useFiveCurrentState();\n  return <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>\n    <BottomNavigation\n      showLabels\n      value={state.mode}\n      onChange={(_, newValue) => {\n        setState({ mode: newValue });\n      }}\n    >\n      <BottomNavigationAction label="\u5168\u666f\u6f2b\u6e38" icon={<DirectionsWalkIcon/>} value={Five.Mode.Panorama}/>\n      <BottomNavigationAction label="\u7a7a\u95f4\u603b\u89c8" icon={<ViewInArIcon/>} value={Five.Mode.Floorplan}/>\n    </BottomNavigation>\n  </Paper>;\n}\n\nexport { ModeController };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/src/5.tagging/App.jsx"',title:'"src/src/5.tagging/App.jsx"'},'import React from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return work && <FiveProvider initialWork={work}>\n    <FiveCanvas {...size}/>\n    <ModeController/>\n  </FiveProvider>;\n};\n\nexport { App };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/src/5.tagging/index.jsx"',title:'"src/src/5.tagging/index.jsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n'))),(0,o.kt)(s.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/src/5.tagging/useFetchWork.ts"',title:'"src/src/5.tagging/useFetchWork.ts"'},'import { useState, useEffect } from "react";\nimport { Work, parseWork } from "@realsee/five";\n\n/**\n * React Hook: \u901a\u8fc7 work.json \u7684\u5730\u5740 \u83b7\u53d6 work \u5bf9\u8c61\n * @param url work.json \u7684\u6570\u636e\u5730\u5740\n * @returns work \u5bf9\u8c61\uff0c\u5982\u679c\u83b7\u53d6\u4e2d\uff0c\u8fd4\u56de null\n */\n function useFetchWork(url: string) {\n  const [work, setWork] = useState<Work | null>(null);\n  useEffect(() => {\n    setWork(null);\n    fetch(url)\n      .then(response => response.text())\n      .then(text => setWork(parseWork(text)));\n  },[url]);\n  return work;\n}\n\nexport { useFetchWork };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/src/5.tagging/useWindowDimensions.ts"',title:'"src/src/5.tagging/useWindowDimensions.ts"'},'import { useState, useEffect } from "react";\n\n/**\n * \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\n function getWindowDimensions() {\n  return { width: window.innerWidth, height: window.innerHeight };\n}\n\n/**\n * React Hook: \u83b7\u53d6\u5f53\u524d\u7a97\u53e3\u7684\u5c3a\u5bf8\n */\nfunction useWindowDimensions() {\n  const [size, setSize] = useState(getWindowDimensions);\n  useEffect(() => {\n    const listener = () => setSize(getWindowDimensions());\n    window.addEventListener("resize", listener, false);\n    return () => window.removeEventListener("resize", listener, false);\n  });\n  return size;\n}\n\nexport { useWindowDimensions };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/src/5.tagging/ModeController.tsx"',title:'"src/src/5.tagging/ModeController.tsx"'},'import React, { FC } from "react";\nimport { Five, Mode } from "@realsee/five";\nimport { useFiveCurrentState } from "@realsee/five/react";\nimport BottomNavigation from "@mui/material/BottomNavigation";\nimport BottomNavigationAction from "@mui/material/BottomNavigationAction";\nimport Paper from "@mui/material/Paper";\nimport DirectionsWalkIcon from "@mui/icons-material/DirectionsWalk";\nimport ViewInArIcon from "@mui/icons-material/ViewInAr";\n\n/**\n * React Component: \u6a21\u6001\u63a7\u5236\n */\nconst ModeController: FC = () => {\n  const [state, setState] = useFiveCurrentState();\n  return <Paper sx={{ position: "fixed", bottom: 0, left: 0, right: 0 }}>\n    <BottomNavigation\n      showLabels\n      value={state.mode}\n      onChange={(_, newValue: Mode) => {\n        setState({ mode: newValue });\n      }}\n    >\n      <BottomNavigationAction label="\u5168\u666f\u6f2b\u6e38" icon={<DirectionsWalkIcon/>} value={Five.Mode.Panorama}/>\n      <BottomNavigationAction label="\u7a7a\u95f4\u603b\u89c8" icon={<ViewInArIcon/>} value={Five.Mode.Floorplan}/>\n    </BottomNavigation>\n  </Paper>;\n}\n\nexport { ModeController };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/src/5.tagging/App.tsx"',title:'"src/src/5.tagging/App.tsx"'},'import React, { FC } from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App: FC = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return work && <FiveProvider initialWork={work}>\n    <FiveCanvas {...size}/>\n  </FiveProvider>;\n};\n\nexport { App };\n')),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/src/5.tagging/index.tsx"',title:'"src/src/5.tagging/index.tsx"'},'import React from "react";\nimport ReactDOM from "react-dom";\nimport { App } from "./App";\n\nReactDOM.render(<App/>, document.querySelector("#app"));\n\nexport {};\n')))),(0,o.kt)("p",null,"\u542f\u52a8\u670d\u52a1 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev"),'\u3002 \u5e76\u8df3\u8f6c\u5230\u5f53\u524d\u9875\u9762 "http://localhost:3000/src/5.tagging"\u3002'),(0,o.kt)("div",{className:"admonition admonition-info alert alert--info"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8bf7\u67e5\u770b\u4f60\u7684\u63a7\u5236\u53f0\uff0c\u7aef\u53e3\u53f7\u4f1a\u56e0\u4e3a\u4f60\u7684\u914d\u7f6e\u4ee5\u53ca\u5f53\u524d\u7aef\u53e3\u5360\u7528\u60c5\u51b5\u53d8\u66f4\uff0c\u8bf7\u5df2\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u4e3a\u51c6\u3002\n\u5982\u679c\u4f60\u4f7f\u7528\u5176\u4ed6\u5f00\u53d1\u6784\u5efa\u5de5\u5177\uff0c\u8bf7\u6309\u7167\u81ea\u5df1\u7684\u5f00\u53d1\u6784\u5efa\u5de5\u5177\u7684\u8981\u6c42\u542f\u52a8\u670d\u52a1\u3002"))),(0,o.kt)("h2",{id:"\u5f00\u53d1\u6253\u6807\u7b7e\u529f\u80fd"},"\u5f00\u53d1\u6253\u6807\u7b7e\u529f\u80fd"),(0,o.kt)("h3",{id:"\u6dfb\u52a0\u6807\u7b7e\u6837\u5f0f"},"\u6dfb\u52a0\u6807\u7b7e\u6837\u5f0f"),(0,o.kt)("p",null,"\u5728 ",(0,o.kt)("strong",{parentName:"p"},"html")," \u6587\u4ef6\u4e2d\u6dfb\u52a0\u6807\u7b7e\u6837\u5f0f\u3002"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u6837\u5f0f\u5e76\u975e\u662f\u5fc5\u987b\u7684\uff0c\u53ea\u662f\u4e3a\u4e86\u6807\u7b7e\u597d\u770b\u4e00\u4e9b\u3002")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/5.tagging/index.html"',title:'"src/5.tagging/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>\u6253\u6807\u7b7e | Tagging</title>\n  <style>\n    * { margin: 0; padding: 0; }\n    html, body #app { width: 100%; height: 100%; overflow: hidden; }\n    /* highlight-start */\n    .tag { position: absolute; width: 0; height: 0; transform: translateZ(0); }\n    .tag-pannel { position: absolute; width: 100px; min-height: 20px; transform: translate(-50%, 0); left: 50%; bottom: 10px; background: #333; color: #fff; border-radius: 2px; text-align: center; line-height: 20px; padding: 8px; font-size: 14px;}\n    .tag-pannel:after { content: ""; display: block; position: absolute; width: 10px; height: 10px; left: 50%; bottom: -5px; transform: translate(-50%, 0) rotate(45deg); background: #333; pointer-events: none; }\n    /* highlight-end */\n  </style>\n</head>\n<body>\n  <div id="app"></div>\n  <script type="module" src="./index"><\/script>\n</body>\n</html>\n')),(0,o.kt)("h3",{id:"usefiveproject2d-\u8bf4\u660e"},"useFiveProject2d \u8bf4\u660e"),(0,o.kt)("p",null,"\u672c\u7ae0\u4f1a\u4f7f\u7528\u5230 ",(0,o.kt)("a",{parentName:"p",href:"https://unpkg.com/@realsee/five/docs/modules/react.html#useFiveProject2d"},(0,o.kt)("inlineCode",{parentName:"a"},"useFiveProject2d"))," \u65b9\u6cd5\u3002\u4ed6\u53ef\u4ee5\u5c06\u4e09\u7ef4\u7684\u5750\u6807\u5bf9\u5e94\u5230\u4e8c\u7ef4\u5c4f\u5e55\u3002"),(0,o.kt)("p",null,(0,o.kt)("inlineCode",{parentName:"p"},"useFiveProject2d(vector: THREE.Vector3, testModel: boolean): THREE.Vector2 | null")),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5c06\u4e00\u4e2a\u4e09\u7ef4\u5750\u6807\u4f20\u5165\u53ef\u4ee5\u5f97\u5230\u4e00\u4e2a\u5c4f\u5e55\u4e8c\u7ef4\u5750\u6807, \u539f\u70b9\u5728\u5de6\u4e0a, \u5355\u4f4d\u4e3a\u50cf\u7d20\u3002\u53ef\u4ee5\u4f5c\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},'{ left: returnValue.x + "px", top: returnValue.y + "px" }')," \u7b49\u65b9\u5f0f\u4f7f\u7528\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u5982\u679c\u4e09\u7ef4\u5750\u6807\u65e0\u6cd5\u8ba1\u7b97\u5230\u5c4f\u5e55\u4e2d\uff08\u6bd4\u5982\u5728\u80cc\u540e\u6216\u8005\u88ab\u906e\u6321\uff09\uff0c\u5219\u8fd4\u56de ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),";"),(0,o.kt)("li",{parentName:"ol"},"\u7b2c\u4e8c\u4e2a\u53c2\u6570 ",(0,o.kt)("strong",{parentName:"li"},"testModel")," \u4e3a\u662f\u5426\u8ba1\u7b97\u6a21\u578b\u78b0\u649e\uff0c\u5373\u88ab\u6a21\u578b\u906e\u6321\u7684\u5750\u6807\u662f\u5426\u4e3a ",(0,o.kt)("inlineCode",{parentName:"li"},"null"),"\u3002")),(0,o.kt)("h3",{id:"\u7f16\u5199-taggingcontroller"},"\u7f16\u5199 TaggingController"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u6dfb\u52a0\u4e00\u4e2a ",(0,o.kt)("strong",{parentName:"li"},"TaggingController")," \u6587\u4ef6\uff0c\u7528\u4e8e\u7f16\u5199\u7ec4\u4ef6"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"tags")," React state \u5b58\u50a8\u6807\u7b7e\u4f4d\u7f6e\u548c\u6587\u5b57\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 ",(0,o.kt)("inlineCode",{parentName:"li"},"newTag")," React state \u5b58\u50a8\u5f53\u524d\u65b0\u5efa\u7684\u6807\u7b7e\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u76d1\u542c five \u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"intersectionOnModelUpdate")," \u4e8b\u4ef6\uff0c\u5c06\u65b0\u5efa\u4e2d\u7684\u6807\u7b7e\u653e\u5728\u5728\u9f20\u6807\u7684\u4f4d\u7f6e\u3002"),(0,o.kt)("li",{parentName:"ol"},"\u901a\u8fc7 \u6807\u7b7e\u8c03\u7528  ",(0,o.kt)("strong",{parentName:"li"},"useFiveProject2d")," \u4ea7\u751f\u7684 ",(0,o.kt)("inlineCode",{parentName:"li"},"project2d")," \u65b9\u6cd5\uff08",(0,o.kt)("inlineCode",{parentName:"li"},"tagElement")," \u65b9\u6cd5\u4e2d\uff09\u83b7\u53d6\u5c4f\u5e55\u753b\u5e03\u5750\u6807\uff0c\u7136\u540e\u901a\u8fc7\u6539\u53d8\u6837\u5f0f\uff0c\u6e32\u67d3\u51fa\u6765\u3002")),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/5.tagging/TaggingController.jsx"',title:'"src/5.tagging/TaggingController.jsx"'},'import React, { useState, useCallback } from "react";\nimport { useFiveEventCallback, useFiveProject2d } from "@realsee/five/react";\nimport Button from "@mui/material/Button";\nimport Paper from "@mui/material/Paper";\n\n/**\n * React Component: \u6253\u6807\u7b7e\n */\nconst TaggingController = () => {\n  const project2d = useFiveProject2d();\n\n  const [tags, setTags] = useState([]);\n  const [newTag, setNewTag] = useState(null);\n\n  const tagElement = useCallback((tag, key) => {\n    const position = tag.position && project2d(tag.position, true);\n    const style = position ? { left: position.x, top: position.y } : { display: "none" };\n    return <div className="tag" style={style} key={key}>\n      <div className="tag-pannel"><span className="tag-content">{tag.label}</span></div>\n    </div>\n  }, []);\n\n  const addTag = useCallback(() => {\n    setNewTag({ label: window.prompt("\u6dfb\u52a0\u6807\u7b7e", "") || "\u672a\u547d\u540d" });\n  }, []);\n\n  useFiveEventCallback("intersectionOnModelUpdate", intersect => {\n    if (newTag) setNewTag({ position: intersect.point, label: newTag.label });\n  }, [newTag]);\n\n  useFiveEventCallback("wantsTapGesture", raycaster => {\n    if (newTag && newTag.position) {\n      setTags(tags => tags.concat(newTag));\n      setNewTag(null);\n      return false;\n    }\n  }, [newTag]);\n\n  return <React.Fragment>\n    <Paper sx={{ position: "fixed", top: 10, left: 10 }}>\n      <Button onClick={addTag}>\u6253\u6807\u7b7e</Button>\n    </Paper>\n    {newTag && tagElement(newTag)}\n    {tags.map((tag, index) => tagElement(tag, index))}\n  </React.Fragment>;\n};\n\nexport { TaggingController };\n'))),(0,o.kt)(s.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/5.tagging/TaggingController.tsx"',title:'"src/5.tagging/TaggingController.tsx"'},'import * as THREE from "three";\nimport React, { FC, useState, useCallback } from "react";\nimport { useFiveEventCallback, useFiveProject2d } from "@realsee/five/react";\nimport Button from "@mui/material/Button";\nimport Paper from "@mui/material/Paper";\n\n/**\n * React Component: \u6253\u6807\u7b7e\n */\nconst TaggingController: FC = () => {\n  type Tag = { position?: THREE.Vector3, label: string };\n  const project2d = useFiveProject2d();\n\n  const [tags, setTags] = useState<Tag[]>([]);\n  const [newTag, setNewTag] = useState<Tag | null>(null);\n\n  const tagElement = useCallback((tag, key?: number | string) => {\n    const position = tag.position && project2d(tag.position, true);\n    const style = position ? { left: position.x, top: position.y } : { display: "none" };\n    return <div className="tag" style={style} key={key}>\n      <div className="tag-pannel"><span className="tag-content">{tag.label}</span></div>\n    </div>\n  }, []);\n\n  const addTag = useCallback(() => {\n    setNewTag({ label: window.prompt("\u6dfb\u52a0\u6807\u7b7e", "") || "\u672a\u547d\u540d" });\n  }, []);\n\n  useFiveEventCallback("intersectionOnModelUpdate", intersect => {\n    if (newTag) setNewTag({ position: intersect.point, label: newTag.label });\n  }, [newTag]);\n\n  useFiveEventCallback("wantsTapGesture", raycaster => {\n    if (newTag && newTag.position) {\n      setTags(tags => tags.concat(newTag));\n      setNewTag(null);\n      return false;\n    }\n  }, [newTag]);\n\n  return <React.Fragment>\n    <Paper sx={{ position: "fixed", top: 10, left: 10 }}>\n      <Button onClick={addTag}>\u6253\u6807\u7b7e</Button>\n    </Paper>\n    {newTag && tagElement(newTag)}\n    {tags.map((tag, index) => tagElement(tag, index))}\n  </React.Fragment>;\n};\n\nexport { TaggingController };\n')))),(0,o.kt)("h3",{id:"\u4f7f\u7528\u6253\u6807\u7b7e\u7ec4\u4ef6"},"\u4f7f\u7528\u6253\u6807\u7b7e\u7ec4\u4ef6"),(0,o.kt)("p",null,"\u63d2\u5165\u5230 ",(0,o.kt)("strong",{parentName:"p"},"App")," \u6587\u4ef6\u7684 ",(0,o.kt)("strong",{parentName:"p"},"FiveProvider")," \u4e2d"),(0,o.kt)(i.Z,{mdxType:"Tabs"},(0,o.kt)(s.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-jsx",metastring:'title="src/5.tagging/App.jsx"',title:'"src/5.tagging/App.jsx"'},'import React from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\n// highlight-start\nimport { TaggingController } from "./TaggingController";\n// highlight-end\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return work && <FiveProvider initialWork={work}>\n    <FiveCanvas {...size}/>\n    <ModeController/>\n    // highlight-start\n    <TaggingController/>\n    // highlight-end\n  </FiveProvider>;\n};\n\nexport { App };\n'))),(0,o.kt)(s.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-tsx",metastring:'title="src/5.tagging/App.tsx"',title:'"src/5.tagging/App.tsx"'},'import React, { FC } from "react";\nimport { createFiveProvider, FiveCanvas } from "@realsee/five/react";\nimport { useFetchWork } from "./useFetchWork";\nimport { useWindowDimensions } from "./useWindowDimensions";\nimport { ModeController } from "./ModeController";\n// highlight-start\nimport { TaggingController } from "./TaggingController";\n// highlight-end\n\n/** work.json \u7684\u6570\u636e URL */\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst FiveProvider = createFiveProvider();\nconst App: FC = () => {\n  const work = useFetchWork(workURL);\n  const size = useWindowDimensions();\n  return work && <FiveProvider initialWork={work}>\n    <FiveCanvas {...size}/>\n    <ModeController/>\n    // highlight-start\n    <TaggingController/>\n    // highlight-end\n  </FiveProvider>;\n};\n\nexport { App };\n')))),(0,o.kt)("p",null,"\u56de\u5230\u4f60\u7684\u6d4f\u89c8\u5668\u67e5\u770b\uff0c\u4f1a\u53d1\u73b0\u4f60\u7684\u9875\u9762\u5de6\u4e0a\u89d2\u51fa\u73b0\u6253\u6807\u7b7e\u6309\u94ae\uff0c\u70b9\u51fb\uff0c\u586b\u5199\u6807\u7b7e\u540d\u79f0\u540e\uff0c\u79fb\u52a8\u9f20\u6807\uff0c\u5728\u4f60\u9700\u8981\u7684\u4f4d\u7f6e\u70b9\u51fb\uff0c\u7136\u540e\u653e\u7f6e\u6807\u7b7e\u5373\u53ef\u3002"),(0,o.kt)("p",null,"\u55ef\uff0c\u786e\u5b9e\u662f\u4e00\u4e2a\u5b9e\u7528\u7684\u529f\u80fd\ud83e\udd73 \u3002"))}d.isMDXComponent=!0}}]);