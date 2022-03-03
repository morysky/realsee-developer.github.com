"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[9221],{71871:function(e,t,n){var r=n(67294);t.Z=function(e){var t=e.children,n=e.hidden,a=e.className;return r.createElement("div",{role:"tabpanel",hidden:n,className:a},t)}},95654:function(e,t,n){n.d(t,{Z:function(){return p}});var r=n(83117),a=n(67294),o=n(5730),s=n(54179);var i=function(){var e=(0,a.useContext)(s.Z);if(null==e)throw new Error('"useUserPreferencesContext" is used outside of "Layout" component.');return e},l=n(22),c=n(86010),d="tabItem_LplD";function u(e){var t,n,o,s=e.lazy,u=e.block,p=e.defaultValue,m=e.values,v=e.groupId,g=e.className,f=a.Children.map(e.children,(function(e){if((0,a.isValidElement)(e)&&void 0!==e.props.value)return e;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})),b=null!=m?m:f.map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes}})),k=(0,l.lx)(b,(function(e,t){return e.value===t.value}));if(k.length>0)throw new Error('Docusaurus error: Duplicate values "'+k.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.');var h=null===p?p:null!=(t=null!=p?p:null==(n=f.find((function(e){return e.props.default})))?void 0:n.props.value)?t:null==(o=f[0])?void 0:o.props.value;if(null!==h&&!b.some((function(e){return e.value===h})))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+h+'" but none of its children has the corresponding value. Available values are: '+b.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");var y=i(),N=y.tabGroupChoices,w=y.setTabGroupChoices,x=(0,a.useState)(h),j=x[0],S=x[1],R=[],L=(0,l.o5)().blockElementScrollPositionUntilNextRender;if(null!=v){var T=N[v];null!=T&&T!==j&&b.some((function(e){return e.value===T}))&&S(T)}var B=function(e){var t=e.currentTarget,n=R.indexOf(t),r=b[n].value;r!==j&&(L(t),S(r),null!=v&&w(v,r))},E=function(e){var t,n=null;switch(e.key){case"ArrowRight":var r=R.indexOf(e.currentTarget)+1;n=R[r]||R[0];break;case"ArrowLeft":var a=R.indexOf(e.currentTarget)-1;n=R[a]||R[R.length-1]}null==(t=n)||t.focus()};return a.createElement("div",{className:"tabs-container"},a.createElement("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,c.Z)("tabs",{"tabs--block":u},g)},b.map((function(e){var t=e.value,n=e.label,o=e.attributes;return a.createElement("li",(0,r.Z)({role:"tab",tabIndex:j===t?0:-1,"aria-selected":j===t,key:t,ref:function(e){return R.push(e)},onKeyDown:E,onFocus:B,onClick:B},o,{className:(0,c.Z)("tabs__item",d,null==o?void 0:o.className,{"tabs__item--active":j===t})}),null!=n?n:t)}))),s?(0,a.cloneElement)(f.filter((function(e){return e.props.value===j}))[0],{className:"margin-vert--md"}):a.createElement("div",{className:"margin-vert--md"},f.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==j})}))))}function p(e){var t=(0,o.Z)();return a.createElement(u,(0,r.Z)({key:String(t)},e))}},64416:function(e,t,n){n.r(t),n.d(t,{frontMatter:function(){return c},contentTitle:function(){return d},metadata:function(){return u},toc:function(){return p},default:function(){return v}});var r=n(83117),a=n(80102),o=(n(67294),n(3905)),s=n(95654),i=n(71871),l=["components"],c={title:"\u72b6\u6001\u5f55\u5236"},d=void 0,u={unversionedId:"front/3d-space/handbook/no-framework/recording-state",id:"front/3d-space/handbook/no-framework/recording-state",title:"\u72b6\u6001\u5f55\u5236",description:"\u4e0a\u4e00\u7ae0\u56de\u987e: \u6539\u53d8\u89c6\u89d2",source:"@site/docs/front/3d-space/handbook/no-framework/3.recording-state.md",sourceDirName:"front/3d-space/handbook/no-framework",slug:"/front/3d-space/handbook/no-framework/recording-state",permalink:"/docs/front/3d-space/handbook/no-framework/recording-state",editUrl:"https://github.com/realsee-developer/realsee-developer.github.com/docs/front/3d-space/handbook/no-framework/3.recording-state.md",tags:[],version:"current",lastUpdatedBy:"solome",lastUpdatedAt:1646224394,formattedLastUpdatedAt:"3/2/2022",sidebarPosition:3,frontMatter:{title:"\u72b6\u6001\u5f55\u5236"},sidebar:"\u4e09\u7ef4\u7a7a\u95f4",previous:{title:"\u6539\u53d8\u89c6\u89d2",permalink:"/docs/front/3d-space/handbook/no-framework/knowing-state"},next:{title:"\u4e09\u7ef4\u7a7a\u95f4\u4e2d\u7684\u70b9",permalink:"/docs/front/3d-space/handbook/no-framework/points-in-3d"}},p=[{value:"\u51c6\u5907\u5de5\u4f5c",id:"\u51c6\u5907\u5de5\u4f5c",children:[],level:2},{value:"\u5f55\u5236 / \u56de\u653e",id:"\u5f55\u5236--\u56de\u653e",children:[{value:"\u6784\u5efa \u5f55\u5236\u529f\u80fd UI",id:"\u6784\u5efa-\u5f55\u5236\u529f\u80fd-ui",children:[],level:3},{value:"\u7f16\u5199 <strong>Recorder</strong> \u7c7b",id:"\u7f16\u5199-recorder-\u7c7b",children:[],level:3},{value:"\u7f16\u5199\u5f55\u5236\u903b\u8f91",id:"\u7f16\u5199\u5f55\u5236\u903b\u8f91",children:[],level:3}],level:2},{value:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230",id:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230",children:[],level:2}],m={toc:p};function v(e){var t=e.components,n=(0,a.Z)(e,l);return(0,o.kt)("wrapper",(0,r.Z)({},m,n,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},(0,o.kt)("strong",{parentName:"p"},"\u4e0a\u4e00\u7ae0\u56de\u987e: \u6539\u53d8\u89c6\u89d2")," ",(0,o.kt)("br",null)),(0,o.kt)("ul",{parentName:"blockquote"},(0,o.kt)("li",{parentName:"ul"},"\u4f60\u4e86\u89e3\u4ec0\u4e48\u662f ",(0,o.kt)("strong",{parentName:"li"},"State"),", \u4ee5\u53ca\u5982\u4f55\u83b7\u53d6\u548c\u4fee\u6539\u3002",(0,o.kt)("br",null)),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"li"},"State")," \u5b8c\u6210\u4e86\u81ea\u52a8\u73af\u89c6\u7684\u529f\u80fd\u3002"))),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u672c\u7ae0\u4f60\u53ef\u4ee5\u5b66\u4e60\u5230")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"li"},"State")," \u5b8c\u6210\u7528\u6237\u64cd\u4f5c\u7684\u5f55\u5236\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"li"},"State")," \u8fd8\u539f\u7528\u6237\u64cd\u4f5c\u753b\u9762\u3002")))),(0,o.kt)("h2",{id:"\u51c6\u5907\u5de5\u4f5c"},"\u51c6\u5907\u5de5\u4f5c"),(0,o.kt)("p",null,"\u548c\u4e0a\u4e00\u7ae0\u8282\u4e00\u6837\uff0c\u6211\u4eec\u65b0\u5efa\u4e00\u4e2a\u76ee\u5f55\uff08",(0,o.kt)("inlineCode",{parentName:"p"},"src/3.recording-state"),"\uff09\u4ee5\u53ca\u5bf9\u5e94\u7684 ",(0,o.kt)("strong",{parentName:"p"},"html")," \u6587\u4ef6 \u4ee5\u53ca ",(0,o.kt)("strong",{parentName:"p"},"jsx")," \u6216 ",(0,o.kt)("strong",{parentName:"p"},"tsx")," \u6587\u4ef6\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"js")," \u6216 ",(0,o.kt)("strong",{parentName:"p"},"ts")," \u6587\u4ef6\u53ef\u4ee5\u5148\u62f7\u8d1d\u4e0a\u4e00\u7ae0\u8282\u7684\u5185\u5bb9\u3002"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/3.recording-state/index.html"',title:'"src/3.recording-state/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>\u6539\u53d8\u89c6\u89d2 | Knowing state</title>\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet">\n  <style>\n    html, body, #app { width: 100%; height: 100%; overflow: hidden; }\n  </style>\n</head>\n<body>\n  <div id="app"></div>\n  \x3c!-- \u6a21\u5f0f\u5207\u6362 --\x3e\n  <nav class="navbar fixed-bottom navbar-light bg-light">\n    <div class="container-fluid justify-content-center">\n      <div class="btn-group">\n        <button class="btn btn-primary active js-Panorama">\u5168\u666f\u6f2b\u6e38</button>\n        <button class="btn btn-primary js-Floorplan">\u7a7a\u95f4\u603b\u89c8</button>\n      </div>\n    </div>\n  </nav>\n  \x3c!-- \u73af\u89c6 --\x3e\n  <div class="card position-fixed m-2 top-0 end-0">\n    <button class="btn btn-light js-lookAround-start"><i class="bi bi-arrow-repeat"></i></button>\n    <button class="btn btn-light js-lookAround-stop d-none"><i class="bi bi-pause"></i></button>\n  </div>\n  <script type="module" src="./index"><\/script>\n</body>\n</html>\n')),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/3.recording-state/index.js"',title:'"src/3.recording-state/index.js"'},'import { Five, parseWork } from "@realsee/five";\n\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst five = new Five();\n\nfive.appendTo(document.querySelector("#app"));\n\nfetch(workURL).then(res => res.json()).then((json) => {\n  const work = parseWork(json);\n  five.load(work);\n});\n\nwindow.addEventListener("resize", () => five.refresh(), false);\n\n{// === \u6a21\u5f0f\u5207\u6362 ===\n  const buttons = {\n    "Panorama": document.querySelector(".js-Panorama"),\n    "Floorplan": document.querySelector(".js-Floorplan")\n  };\n\n  for (const [modeName, element] of Object.entries(buttons)) {\n    element.addEventListener("click", () => {\n      five.setState({ mode: modeName });\n    }, false);\n  }\n\n  five.on("stateChange", state => {\n    for (const [modeName, element] of Object.entries(buttons)) {\n      if (modeName === state.mode) {\n        element.classList.add("active");\n      } else {\n        element.classList.remove("active");\n      }\n    };\n  });\n}\n\n{ // === \u73af\u89c6 ===\n  let timer;\n  const startButton = document.querySelector(".js-lookAround-start");\n  const stopButton = document.querySelector(".js-lookAround-stop");\n  startButton.addEventListener("click", () => {\n    window.clearInterval(timer);\n    timer = window.setInterval(() => {\n      five.setState({ longitude: five.state.longitude + Math.PI / 360 })\n    }, 16);\n    startButton.classList.add("d-none");\n    stopButton.classList.remove("d-none");\n  }, false);\n  stopButton.addEventListener("click", () => {\n    window.clearInterval(timer);\n    startButton.classList.remove("d-none");\n    stopButton.classList.add("d-none");\n  }, false);\n}\n\nexport {};\n'))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/3.recording-state/index.ts"',title:'"src/3.recording-state/index.ts"'},'import { Five, Mode, parseWork } from "@realsee/five";\n\nconst workURL = "https://vrlab-public.ljcdn.com/release/static/image/release/five/work-sample/07bdc58f413bc5494f05c7cbb5cbdce4/work.json";\n\nconst five = new Five();\n\nfive.appendTo(document.querySelector("#app")!);\n\nfetch(workURL).then(res => res.json()).then((json) => {\n  const work = parseWork(json);\n  five.load(work);\n});\n\nwindow.addEventListener("resize", () => five.refresh(), false);\n\n{// === \u6a21\u5f0f\u5207\u6362 ===\n  const buttons: Partial<Record<Mode, Element>> = {\n    "Panorama": document.querySelector(".js-Panorama")!,\n    "Floorplan": document.querySelector(".js-Floorplan")!\n  };\n\n  for (const [modeName, element] of Object.entries(buttons)) {\n    element.addEventListener("click", () => {\n      five.setState({ mode: modeName as Mode });\n    }, false);\n  }\n\n  five.on("stateChange", state => {\n    for (const [modeName, element] of Object.entries(buttons)) {\n      if (modeName === state.mode) {\n        element.classList.add("active");\n      } else {\n        element.classList.remove("active");\n      }\n    };\n  });\n}\n\n{ // === \u73af\u89c6 ===\n  let timer: number | undefined;\n  const startButton = document.querySelector(".js-lookAround-start")!;\n  const stopButton = document.querySelector(".js-lookAround-stop")!;\n  startButton.addEventListener("click", () => {\n    window.clearInterval(timer);\n    timer = window.setInterval(() => {\n      five.setState({ longitude: five.state.longitude + Math.PI / 360 })\n    }, 16);\n    startButton.classList.add("d-none");\n    stopButton.classList.remove("d-none");\n  }, false);\n  stopButton.addEventListener("click", () => {\n    window.clearInterval(timer);\n    startButton.classList.remove("d-none");\n    stopButton.classList.add("d-none");\n  }, false);\n}\n\nexport {};\n')))),(0,o.kt)("p",null,"\u542f\u52a8\u670d\u52a1 ",(0,o.kt)("inlineCode",{parentName:"p"},"npm run dev"),'\u3002 \u5e76\u8df3\u8f6c\u5230\u5f53\u524d\u9875\u9762 "http://localhost:3000/src/3.recording-state"\u3002'),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"tip")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("p",{parentName:"div"},"\u8bf7\u67e5\u770b\u4f60\u7684\u63a7\u5236\u53f0\uff0c\u7aef\u53e3\u53f7\u4f1a\u56e0\u4e3a\u4f60\u7684\u914d\u7f6e\u4ee5\u53ca\u5f53\u524d\u7aef\u53e3\u5360\u7528\u60c5\u51b5\u53d8\u66f4\uff0c\u8bf7\u5df2\u63a7\u5236\u53f0\u8f93\u51fa\u7684\u4e3a\u51c6\u3002",(0,o.kt)("br",{parentName:"p"}),"\n","\u5982\u679c\u4f60\u4f7f\u7528\u5176\u4ed6\u5f00\u53d1\u6784\u5efa\u5de5\u5177\uff0c\u8bf7\u6309\u7167\u81ea\u5df1\u7684\u5f00\u53d1\u6784\u5efa\u5de5\u5177\u7684\u8981\u6c42\u542f\u52a8\u670d\u52a1\u3002"))),(0,o.kt)("h2",{id:"\u5f55\u5236--\u56de\u653e"},"\u5f55\u5236 / \u56de\u653e"),(0,o.kt)("blockquote",null,(0,o.kt)("p",{parentName:"blockquote"},"\u8fd9\u7ae0\u6211\u4eec\u7ee7\u7eed\u901a\u8fc7 ",(0,o.kt)("strong",{parentName:"p"},"State")," \u6765\u5b8c\u6210\u4e00\u4e2a\u6709\u610f\u601d\u7684\u5e94\u7528\u3002\n\u672c\u7ae0\u6211\u4eec\u4f1a\u5b8c\u6210\u8fd9\u6837\u7684\u4e00\u4e2a\u5e94\u7528\uff0c\u8bb0\u5f55\u7528\u6237\u5728\u9875\u9762\u4e0a\u53d1\u751f\u7684 ",(0,o.kt)("strong",{parentName:"p"},"State"),"\uff0c\u5e76\u4e14\u53ef\u4ee5\u56de\u653e\u8fd9\u4e9b\u64cd\u4f5c\u3002",(0,o.kt)("br",null))),(0,o.kt)("h3",{id:"\u6784\u5efa-\u5f55\u5236\u529f\u80fd-ui"},"\u6784\u5efa \u5f55\u5236\u529f\u80fd UI"),(0,o.kt)("p",null,"\u6211\u4eec\u5728\u9875\u9762\u5de6\u4e0a\u89d2\u6dfb\u52a0 UI \u6309\u94ae\uff0c\u6211\u4eec\u8bbe\u8ba1\u4e86\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f00\u59cb\u5f55\u5236\u6309\u94ae"),(0,o.kt)("li",{parentName:"ul"},"\u505c\u6b62\u5f55\u5236\u6309\u94ae"),(0,o.kt)("li",{parentName:"ul"},"\u56de\u653e\u6309\u94ae")),(0,o.kt)("p",null,"\u4ee5\u53ca\u4e24\u4e2a\u72b6\u6001\uff1a"),(0,o.kt)("ul",null,(0,o.kt)("li",{parentName:"ul"},"\u5f55\u5236\u4e2d"),(0,o.kt)("li",{parentName:"ul"},"\u56de\u653e\u4e2d")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-html",metastring:'title="src/3.recording-state/index.html"',title:'"src/3.recording-state/index.html"'},'<!DOCTYPE html>\n<html lang="en">\n<head>\n  <meta charset="UTF-8">\n  <meta http-equiv="X-UA-Compatible" content="IE=edge">\n  <link rel="icon" href="data:;base64,iVBORw0KGgo=">\n  <meta name="viewport" content="width=device-width, initial-scale=1.0">\n  <title>\u72b6\u6001\u5f55\u5236 | Recording state</title>\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.1/dist/css/bootstrap.min.css" rel="stylesheet" crossorigin="anonymous">\n  <link href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css" rel="stylesheet">\n  <style>\n    html, body, #app { width: 100%; height: 100%; overflow: hidden; }\n  </style>\n</head>\n<body>\n  <div id="app"></div>\n  \x3c!-- \u6a21\u5f0f\u5207\u6362 --\x3e\n  <nav class="navbar fixed-bottom navbar-light bg-light">\n    <div class="container-fluid justify-content-center">\n      <div class="btn-group">\n        <button class="btn btn-primary active js-Panorama">\u5168\u666f\u6f2b\u6e38</button>\n        <button class="btn btn-primary js-Floorplan">\u7a7a\u95f4\u603b\u89c8</button>\n      </div>\n    </div>\n  </nav>\n  \x3c!-- \u73af\u89c6 --\x3e\n  <div class="card position-fixed m-2 top-0 end-0">\n    <button class="btn btn-light js-lookAround-start"><i class="bi bi-arrow-repeat"></i></button>\n    <button class="btn btn-light js-lookAround-stop d-none"><i class="bi bi-pause"></i></button>\n  </div>\n  \x3c!-- highlight-start --\x3e\n  \x3c!-- \u5f55\u5236 --\x3e\n  <div class="card position-fixed m-2 top-0 start-0">\n    <div class="btn-group align-items-center">\n      <button class="btn btn-light js-recording-start"><i class="bi bi-record-fill"></i></button>\n      <button class="btn btn-light js-recording-stop d-none"><i class="bi bi-stop-fill"></i></button>\n      <button class="btn btn-light js-recording-play"><i class="bi bi-play-fill"></i></button>\n      <p class="badge bg-primary m-2 js-state-recording d-none">\u5f55\u5236\u4e2d</p>\n      <p class="badge bg-primary m-2 js-state-playing d-none">\u64ad\u653e\u4e2d</p>\n    </div>\n  </div>\n  \x3c!-- highlight-end --\x3e\n  <script type="module" src="./index"><\/script>\n</body>\n</html>\n')),(0,o.kt)("h3",{id:"\u7f16\u5199-recorder-\u7c7b"},"\u7f16\u5199 ",(0,o.kt)("strong",{parentName:"h3"},"Recorder")," \u7c7b"),(0,o.kt)("p",null,"\u9996\u5148\uff0c\u6211\u4eec\u9700\u8981\u7f16\u5199 ",(0,o.kt)("strong",{parentName:"p"},"Recorder")," \u7c7b\uff0c\u6765\u652f\u6301\u8bb0\u5f55\u548c\u56de\u653e\u3002\n",(0,o.kt)("strong",{parentName:"p"},"Recorder")," \u7c7b \u5e76\u975e ",(0,o.kt)("strong",{parentName:"p"},"Five")," \u7684\u5185\u5bb9\uff0c\u53ea\u662f\u4e3a\u4e86\u8fbe\u6210\u672c\u7ae0\u7684\u6548\u679c\u7f16\u5199\u7684\u3002"),(0,o.kt)("ol",null,(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 ",(0,o.kt)("strong",{parentName:"li"},"startRecording / endRecording")," \u65b9\u6cd5\uff0c\u7528\u4e8e\u5f00\u59cb\u5f55\u5236\u548c\u7ed3\u675f\u5f55\u5236\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 ",(0,o.kt)("strong",{parentName:"li"},"record(state: State)")," \u65b9\u6cd5\uff0c\u8bb0\u5f55\u5f55\u5236\u5185\u5bb9\u3002\u8bb0\u5f55 ",(0,o.kt)("strong",{parentName:"li"},"startRecording / endRecording")," \u4e4b\u95f4\u7684\u5185\u5bb9\uff1b"),(0,o.kt)("li",{parentName:"ol"},"\u5b9e\u73b0 ",(0,o.kt)("strong",{parentName:"li"},"play(callback)")," \u65b9\u6cd5\uff0c\u7528\u4e8e\u56de\u653e\uff0c\u8c03\u7528 play \u4e4b\u540e\uff0c\u4f1a\u5b89\u88c5 ",(0,o.kt)("strong",{parentName:"li"},"record")," \u7684\u5185\u5bb9\uff0c\u4f9d\u6b21\u8c03\u7528 ",(0,o.kt)("strong",{parentName:"li"},"callback")," \u65b9\u6cd5\uff0c\u56de\u653e ",(0,o.kt)("strong",{parentName:"li"},"State"),"\u3002")),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/3.recording-state/recorder.js"',title:'"src/3.recording-state/recorder.js"'},"/**\n * \u5f55\u5236\u7c7b\n */\nclass Recorder {\n  constructor() {\n    this.startTime = 0;\n    this.records = null;\n  }\n  /**\n   * \u662f\u5426\u5df2\u5f55\u5236\n   */\n  hasRecords() {\n    return this.records !== null;\n  }\n  /**\n   * \u5f55\u5236\u5173\u952e\u5e27\n   * @param state five \u7684 state\n   * @returns\n   */\n  record(state) {\n    if (this.records === null) return;\n    this.records.push({\n      state: Object.assign({}, state),\n      time: Date.now() - this.startTime\n    });\n  }\n  /**\n   * \u5f00\u59cb\u5f55\u5236\n   */\n  startRecording() {\n    this.startTime = Date.now();\n    this.records = [];\n  }\n  /**\n   * \u7ed3\u675f\u5f55\u5236\n   */\n  endRecording() {\n    this.startTime = 0;\n  }\n  /**\n   * \u56de\u653e\u5f55\u5236\n   * @param callback \u5173\u952e\u5e27\u56de\u8c03\n   * @returns \u5f53\u524d\u662f\u5426\u6709\u5f55\u5236\n   */\n  play(callback) {\n    if (this.records === null || this.records.length === 0) return false;\n    const records = this.records.slice();\n    const keyframe = keyIndex => {\n      const current = records[keyIndex];\n      const next = records[keyIndex + 1];\n      callback(current.state, next === undefined);\n      if (next) {\n        const delay = next.time - current.time;\n        setTimeout(() => keyframe(keyIndex + 1), delay);\n      }\n    }\n    keyframe(0);\n    return true;\n  }\n}\n\nexport { Recorder };\n"))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/3.recording-state/recorder.ts"',title:'"src/3.recording-state/recorder.ts"'},'import { State } from "@realsee/five";\n\n/**\n * \u5f55\u5236\u7c7b\n */\nclass Recorder {\n  private records: { state: State, time: number }[] | null = null;\n  private startTime: number;\n  constructor() {\n    this.startTime = 0;\n    this.records = null;\n  }\n  /**\n   * \u662f\u5426\u5df2\u5f55\u5236\n   */\n  hasRecords() {\n    return this.records !== null;\n  }\n  /**\n   * \u5f55\u5236\u5173\u952e\u5e27\n   * @param state five \u7684 state\n   * @returns\n   */\n  record(state: State) {\n    if (this.records === null) return;\n    this.records.push({\n      state: Object.assign({}, state),\n      time: Date.now() - this.startTime\n    });\n  }\n  /**\n   * \u5f00\u59cb\u5f55\u5236\n   */\n  startRecording() {\n    this.startTime = Date.now();\n    this.records = [];\n  }\n  /**\n   * \u7ed3\u675f\u5f55\u5236\n   */\n  endRecording() {\n    this.startTime = 0;\n  }\n  /**\n   * \u56de\u653e\u5f55\u5236\n   * @param callback \u5173\u952e\u5e27\u56de\u8c03\n   * @returns \u5f53\u524d\u662f\u5426\u6709\u5f55\u5236\n   */\n  play(callback: (state: State, isFinal: boolean) => void) {\n    if (this.records === null || this.records.length === 0) return false;\n    const records = this.records.slice();\n    const keyframe = (keyIndex: number) => {\n      const current = records[keyIndex];\n      const next = records[keyIndex + 1];\n      callback(current.state, next === undefined);\n      if (next) {\n        const delay = next.time - current.time;\n        setTimeout(() => keyframe(keyIndex + 1), delay);\n      }\n    }\n    keyframe(0);\n    return true;\n  }\n}\n\nexport { Recorder };\n')))),(0,o.kt)("h3",{id:"\u7f16\u5199\u5f55\u5236\u903b\u8f91"},"\u7f16\u5199\u5f55\u5236\u903b\u8f91"),(0,o.kt)("p",null,"\u5728\u4e0a\u4e00\u7ae0\u7684 ",(0,o.kt)("strong",{parentName:"p"},"\u73af\u89c6")," \u7684\u4ee3\u7801\u540e\u8ffd\u52a0\uff1a"),(0,o.kt)(s.Z,{mdxType:"Tabs"},(0,o.kt)(i.Z,{value:"JavaScript",label:"JavaScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="src/3.recording-state/index.js"',title:'"src/3.recording-state/index.js"'},'{ //=== \u5f55\u5236 ===\n  const recorder = new Recorder();\n  const startRecordingButton = document.querySelector(".js-recording-start");\n  const stopRecordingButton = document.querySelector(".js-recording-stop");\n  const playRecordingButton = document.querySelector(".js-recording-play");\n  const recordingState = document.querySelector(".js-state-recording");\n  const playingState = document.querySelector(".js-state-playing");\n\n  five.on("stateChange", state => {\n    if (recordingState.classList.contains("d-none")) return;\n    recorder.record(state);\n  });\n\n  startRecordingButton.addEventListener("click", () => {\n    recorder.startRecording();\n    startRecordingButton.classList.add("d-none");\n    stopRecordingButton.classList.remove("d-none");\n    playRecordingButton.classList.add("d-none");\n    recordingState.classList.remove("d-none");\n    playingState.classList.add("d-none");\n  }, false);\n\n  stopRecordingButton.addEventListener("click", () => {\n    recorder.endRecording();\n    startRecordingButton.classList.remove("d-none");\n    stopRecordingButton.classList.add("d-none");\n    playRecordingButton.classList.remove("d-none");\n    recordingState.classList.add("d-none");\n    playingState.classList.add("d-none");\n  }, false);\n\n  playRecordingButton.addEventListener("click", () => {\n    const hasReocrd = recorder.play((state, isFinal) => {\n      five.setState(state);\n      if (isFinal) {\n        startRecordingButton.classList.remove("d-none");\n        stopRecordingButton.classList.add("d-none");\n        playRecordingButton.classList.remove("d-none");\n        recordingState.classList.add("d-none");\n        playingState.classList.add("d-none");\n      }\n    });\n    if (hasReocrd) {\n      startRecordingButton.classList.add("d-none");\n      stopRecordingButton.classList.add("d-none");\n      playRecordingButton.classList.add("d-none");\n      recordingState.classList.add("d-none");\n      playingState.classList.remove("d-none");\n    }\n  }, false);\n}\n'))),(0,o.kt)(i.Z,{value:"TypeScript",label:"TypeScript",mdxType:"TabItem"},(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-ts",metastring:'title="src/3.recording-state/index.ts"',title:'"src/3.recording-state/index.ts"'},'{ //=== \u5f55\u5236 ===\n  const recorder = new Recorder();\n  const startRecordingButton = document.querySelector(".js-recording-start")!;\n  const stopRecordingButton = document.querySelector(".js-recording-stop")!;\n  const playRecordingButton = document.querySelector(".js-recording-play")!;\n  const recordingState = document.querySelector(".js-state-recording")!;\n  const playingState = document.querySelector(".js-state-playing")!;\n\n  five.on("stateChange", state => {\n    if (recordingState.classList.contains("d-none")) return;\n    recorder.record(state);\n  });\n\n  startRecordingButton.addEventListener("click", () => {\n    recorder.startRecording();\n    startRecordingButton.classList.add("d-none");\n    stopRecordingButton.classList.remove("d-none");\n    playRecordingButton.classList.add("d-none");\n    recordingState.classList.remove("d-none");\n    playingState.classList.add("d-none");\n  }, false);\n\n  stopRecordingButton.addEventListener("click", () => {\n    recorder.endRecording();\n    startRecordingButton.classList.remove("d-none");\n    stopRecordingButton.classList.add("d-none");\n    playRecordingButton.classList.remove("d-none");\n    recordingState.classList.add("d-none");\n    playingState.classList.add("d-none");\n  }, false);\n\n  playRecordingButton.addEventListener("click", () => {\n    const hasReocrd = recorder.play((state, isFinal) => {\n      five.setState(state);\n      if (isFinal) {\n        startRecordingButton.classList.remove("d-none");\n        stopRecordingButton.classList.add("d-none");\n        playRecordingButton.classList.remove("d-none");\n        recordingState.classList.add("d-none");\n        playingState.classList.add("d-none");\n      }\n    });\n    if (hasReocrd) {\n      startRecordingButton.classList.add("d-none");\n      stopRecordingButton.classList.add("d-none");\n      playRecordingButton.classList.add("d-none");\n      recordingState.classList.add("d-none");\n      playingState.classList.remove("d-none");\n    }\n  }, false);\n}\n')))),(0,o.kt)("p",null,"\u56de\u5230\u4f60\u7684\u6d4f\u89c8\u5668\u67e5\u770b\uff0c\u4f1a\u53d1\u73b0\u4f60\u7684\u9875\u9762\u5de6\u4e0a\u89d2\u51fa\u73b0\u4e00\u4e2a\u5f55\u5236\u548c\u64ad\u653e\u6309\u94ae\u3002\u8bd5\u8bd5\u529f\u80fd\u662f\u4e0d\u662f\u7b26\u5408\u9884\u671f\u3002"),(0,o.kt)("p",null,"\u771f\u5389\u5bb3\uff0c\u4f60\u4ee5\u53ca\u53ef\u4ee5\u7f16\u5199\u90a3\u4e48\u590d\u6742\u7684\u7a0b\u5e8f\u4e86\ud83e\udd73 \u3002"),(0,o.kt)("h2",{id:"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230"},"\u4e0b\u4e00\u7ae0\u8282\u4f60\u4f1a\u5b66\u5230"),(0,o.kt)("div",{className:"admonition admonition-tip alert alert--success"},(0,o.kt)("div",{parentName:"div",className:"admonition-heading"},(0,o.kt)("h5",{parentName:"div"},(0,o.kt)("span",{parentName:"h5",className:"admonition-icon"},(0,o.kt)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"12",height:"16",viewBox:"0 0 12 16"},(0,o.kt)("path",{parentName:"svg",fillRule:"evenodd",d:"M6.5 0C3.48 0 1 2.19 1 5c0 .92.55 2.25 1 3 1.34 2.25 1.78 2.78 2 4v1h5v-1c.22-1.22.66-1.75 2-4 .45-.75 1-2.08 1-3 0-2.81-2.48-5-5.5-5zm3.64 7.48c-.25.44-.47.8-.67 1.11-.86 1.41-1.25 2.06-1.45 3.23-.02.05-.02.11-.02.17H5c0-.06 0-.13-.02-.17-.2-1.17-.59-1.83-1.45-3.23-.2-.31-.42-.67-.67-1.11C2.44 6.78 2 5.65 2 5c0-2.2 2.02-4 4.5-4 1.22 0 2.36.42 3.22 1.19C10.55 2.94 11 3.94 11 5c0 .66-.44 1.78-.86 2.48zM4 14h5c-.23 1.14-1.3 2-2.5 2s-2.27-.86-2.5-2z"}))),"\u4e0b\u4e00\u7ae0\u6211\u4eec\u9700\u8981\u548c\u4e09\u7ef4\u7a7a\u95f4\u7684\u6a21\u578b\u6253\u4ea4\u9053\u4e86")),(0,o.kt)("div",{parentName:"div",className:"admonition-content"},(0,o.kt)("ul",{parentName:"div"},(0,o.kt)("li",{parentName:"ul"},"\u4e86\u89e3 Five SDK \u7684\u624b\u52bf\u4ea4\u4e92\u7cfb\u7edf\u3002"),(0,o.kt)("li",{parentName:"ul"},"\u83b7\u53d6\u5230\u70b9\u7684\u4e09\u7ef4\u4f4d\u7f6e\u3002")))))}v.isMDXComponent=!0},3905:function(e,t,n){n.d(t,{Zo:function(){return d},kt:function(){return m}});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var l=r.createContext({}),c=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},d=function(e){var t=c(e.components);return r.createElement(l.Provider,{value:t},e.children)},u={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),p=c(n),m=a,v=p["".concat(l,".").concat(m)]||p[m]||u[m]||o;return n?r.createElement(v,s(s({ref:t},d),{},{components:n})):r.createElement(v,s({ref:t},d))}));function m(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,s=new Array(o);s[0]=p;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:a,s[1]=i;for(var c=2;c<o;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"}}]);