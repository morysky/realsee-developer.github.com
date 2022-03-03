"use strict";(self.webpackChunkrealsee_developer_github_com=self.webpackChunkrealsee_developer_github_com||[]).push([[6728],{42871:function(e,t,r){r.r(t),r.d(t,{frontMatter:function(){return i},contentTitle:function(){return o},metadata:function(){return c},assets:function(){return u},toc:function(){return s},default:function(){return m}});var n=r(83117),a=r(80102),l=(r(67294),r(3905)),p=["components"],i={slug:"quick-start-with-api",title:'\u5982\u89c6 3D \u7a7a\u95f4\u80fd\u529b\u5feb\u901f "\u5c1d\u9c9c"',authors:["Angry-Sparrow"],tags:["realsee","3d","vr"]},o="\u5982\u89c63D\u7a7a\u95f4\u5f00\u53d1\u8005\u5de5\u5177",c={permalink:"/blog/quick-start-with-api",editUrl:"https://github.com/realsee-developer/realsee-developer.github.com/blog/2022-02-23-quick-start-with-api.mdx",source:"@site/blog/2022-02-23-quick-start-with-api.mdx",title:'\u5982\u89c6 3D \u7a7a\u95f4\u80fd\u529b\u5feb\u901f "\u5c1d\u9c9c"',description:"\u670d\u52a1\u7aef\u4f7f\u7528 \u5982\u89c63D\u7a7a\u95f4 API \u8bbf\u95ee\u548c\u7ba1\u7406\u7a7a\u95f4\u6570\u636e\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528 \u5982\u89c63D\u7a7a\u95f4 SDK \u642d\u914d\u7a7a\u95f4\u6570\u636e\u5f00\u53d1\u81ea\u5df1\u76843D\u7a7a\u95f4VR\u5e94\u7528",date:"2022-02-23T00:00:00.000Z",formattedDate:"February 23, 2022",tags:[{label:"realsee",permalink:"/blog/tags/realsee"},{label:"3d",permalink:"/blog/tags/3-d"},{label:"vr",permalink:"/blog/tags/vr"}],readingTime:2.46,truncated:!1,authors:[{name:"\u674e\u854a",title:"Front End Engineer @ Realsee",url:"https://github.com/Angry-Sparrow",imageURL:"https://github.com/Angry-Sparrow.png",key:"Angry-Sparrow"}]},u={authorsImageUrls:[void 0]},s=[{value:"\u4e2a\u4eba\u5c1d\u9c9c",id:"\u4e2a\u4eba\u5c1d\u9c9c",children:[{value:"\u64cd\u4f5c\u524d\u63d0",id:"\u64cd\u4f5c\u524d\u63d0",children:[],level:3},{value:"\u64cd\u4f5c\u6b65\u9aa4",id:"\u64cd\u4f5c\u6b65\u9aa4",children:[],level:3}],level:2},{value:"\u4f01\u4e1a\u7ea7\u63a5\u5165",id:"\u4f01\u4e1a\u7ea7\u63a5\u5165",children:[{value:"\u5b9e\u666fVR",id:"\u5b9e\u666fvr",children:[],level:3},{value:"\u865a\u62dfVR",id:"\u865a\u62dfvr",children:[],level:3}],level:2}],d={toc:s};function m(e){var t=e.components,r=(0,a.Z)(e,p);return(0,l.kt)("wrapper",(0,n.Z)({},d,r,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("p",null,"\u670d\u52a1\u7aef\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"https://developers.realsee.com/docs/#/docs/five/server/README"},"\u5982\u89c63D\u7a7a\u95f4 API")," \u8bbf\u95ee\u548c\u7ba1\u7406\u7a7a\u95f4\u6570\u636e\uff0c\u5ba2\u6237\u7aef\u4f7f\u7528 ",(0,l.kt)("a",{parentName:"p",href:"../docs/front/3d-space/container/app/desc"},"\u5982\u89c63D\u7a7a\u95f4 SDK")," \u642d\u914d\u7a7a\u95f4\u6570\u636e\u5f00\u53d1\u81ea\u5df1\u76843D\u7a7a\u95f4VR\u5e94\u7528"),(0,l.kt)("h2",{id:"\u4e2a\u4eba\u5c1d\u9c9c"},"\u4e2a\u4eba\u5c1d\u9c9c"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"3\u5206\u949f\u8dd1\u901a\u91c7\u96c6\u9884\u89c8\uff08Node\u7248\uff09")),(0,l.kt)("p",null,"\u8be5\u9879\u76ee\u4f1a\u8bf7\u6c42\u5f00\u53d1\u8005\u4e2d\u5fc3API\u63a5\u53e3\uff0c\u4f7f\u7528SDK\u5c55\u793a\u6700\u65b0\u4e00\u6761\u5904\u7406\u5b8c\u6210\u7684VR\u3002"),(0,l.kt)("h3",{id:"\u64cd\u4f5c\u524d\u63d0"},"\u64cd\u4f5c\u524d\u63d0"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"\u60a8\u7684\u673a\u5668\u5df2\u5b89\u88c5 ",(0,l.kt)("a",{parentName:"li",href:"https://nodejs.org/en/"},"Node \u548c npm")),(0,l.kt)("li",{parentName:"ul"},"\u60a8\u65b9\u4fbf\u64cd\u4f5c\u7684\u82f9\u679c\u624b\u673a\uff08\u7528\u4e8e\u5feb\u901f\u62cd\u6444VR\uff09")),(0,l.kt)("h3",{id:"\u64cd\u4f5c\u6b65\u9aa4"},"\u64cd\u4f5c\u6b65\u9aa4"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65"),"\uff1a\u6ce8\u518c/\u767b\u5f55",(0,l.kt)("a",{parentName:"p",href:"https://developers.realsee.com/console"},"\u5982\u89c6\u5f00\u53d1\u8005\u4e2d\u5fc3\u63a7\u5236\u53f0")," \uff0c\u70b9\u51fb",(0,l.kt)("inlineCode",{parentName:"p"},"\u7533\u8bf7\u5bc6\u94a5"),"\uff0c\u83b7\u53d6\u60a8\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Application Id")," \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"Application Secret"),"\n\uff0c\u6b64\u51ed\u8bc1\u5c06\u7528\u4e8e\u8bbf\u95eeAPI\u63a5\u53e3\u83b7\u53d6\u7a7a\u95f4\u6570\u636e"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u6b65"),"\uff1a\u624b\u673a\u5e94\u7528\u5546\u5e97\u641c\u7d22",(0,l.kt)("inlineCode",{parentName:"p"},"\u5982\u89c6VR"),"\uff0c\u5b89\u88c5\u5e76\u767b\u5f55",(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u6b65"),"\u4e2d\u6ce8\u518c/\u767b\u5f55\u7684\u8d26\u53f7"),(0,l.kt)("p",null,"\u7ee7\u7eed\u5728App\u5185\u64cd\u4f5c"),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("inlineCode",{parentName:"li"},"\u6211\u7684")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"\u8eab\u4efd\u9009\u62e9")," - ",(0,l.kt)("inlineCode",{parentName:"li"},"\u4e2a\u4eba"),"\uff08\u9ed8\u8ba4\uff09"),(0,l.kt)("li",{parentName:"ul"},"\u70b9\u51fb\u5e95\u90e8",(0,l.kt)("inlineCode",{parentName:"li"},"\u52a0\u53f7\u6309\u94ae"),"\u521b\u5efa\u9879\u76ee - ",(0,l.kt)("inlineCode",{parentName:"li"},"\u624b\u673a\u62cd"),"\uff08\u6682\u65f6\u4ec5\u652f\u6301iOS\uff09 - \u70b9\u51fb",(0,l.kt)("inlineCode",{parentName:"li"},"\u521b\u5efa\u9879\u76ee")),(0,l.kt)("li",{parentName:"ul"},"\u6309\u7167App\u64cd\u4f5c\u6307\u5f15\u5b8c\u6210\u62cd\u6444\u5e76\u4e0a\u4f20\uff0c\u7b49\u5f85VR\u9879\u76ee\u5904\u7406\u5b8c\u6210\uff08\u6b64\u8fc7\u7a0b\u5927\u81f4\u9700\u8981\u51e0\u5206\u949f\uff09")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e09\u6b65"),"\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"git clone")," \u6216 ",(0,l.kt)("inlineCode",{parentName:"p"},"download zip")," ",(0,l.kt)("a",{parentName:"p",href:"https://github.com/realsee-developer/five-sdk-starter-with-api"},"five-sdk-starter-with-api")),(0,l.kt)("p",null,"\u8fdb\u5165\u4ed3\u5e93\u76ee\u5f55 \u6253\u5f00",(0,l.kt)("inlineCode",{parentName:"p"},"index.js"),"\uff0c\u641c\u7d22",(0,l.kt)("inlineCode",{parentName:"p"},"Your-App-Key"),"\u5b57\u7b26\u4e32\u66ff\u6362\u6210\u7b2c\u4e00\u6b65\u4e2d\u7533\u8bf7\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Application Id"),"\uff0c\u641c\u7d22",(0,l.kt)("inlineCode",{parentName:"p"},"Your-App-Secret"),"\u5b57\u7b26\u4e32\u66ff\u6362\u6210\u7b2c\u4e00\u6b65\u4e2d\u7533\u8bf7\u7684",(0,l.kt)("inlineCode",{parentName:"p"},"Application Secret")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-shell"},"cd five-sdk-starter-with-api\nnpm i\nnpm run start\n# \u60a8\u4f1a\u770b\u5230\u63a7\u5236\u53f0\u8f93\u51fa\uff0c\u6d4f\u89c8\u5668\u6253\u5f00\u4e0b\u9762\u7684\u94fe\u63a5\uff0c\u5efa\u8bae\u4f7f\u7528Chrome\u6d4f\u89c8\u5668\u4fdd\u8bc1\u6700\u4f73\u4f53\u9a8c\n> node index.js\n> serve at http://127.0.0.1:3000\n")),(0,l.kt)("h2",{id:"\u4f01\u4e1a\u7ea7\u63a5\u5165"},"\u4f01\u4e1a\u7ea7\u63a5\u5165"),(0,l.kt)("h3",{id:"\u5b9e\u666fvr"},"\u5b9e\u666fVR"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://realsee.cn/website/product/hardware"},"\u5982\u89c6VR\u626b\u63cf\u8bbe\u5907")," \u91c7\u96c6\u751f\u6210\u5b9e\u666f3D\u7a7a\u95f4 --\x3e ",(0,l.kt)("strong",{parentName:"p"},"\u5982\u89c6\u5f00\u53d1\u8005\u4e2d\u5fc3 API SDK")," \u5c55\u793a"),(0,l.kt)("h3",{id:"\u865a\u62dfvr"},"\u865a\u62dfVR"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://business.realsee.com/"},"\u5982\u89c63D\u8bbe\u8ba1\u5de5\u5177")," \u521b\u5efa\u865a\u62df3D\u7a7a\u95f4 --\x3e ",(0,l.kt)("strong",{parentName:"p"},"\u5982\u89c6\u5f00\u53d1\u8005\u4e2d\u5fc3 API SDK")," \u5c55\u793a"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u4f01\u4e1a\u7ea7\u5b9e\u666f\u7a7a\u95f4\u91c7\u96c6\u3001\u865a\u62df\u7a7a\u95f4\u8bbe\u8ba1\u3001\u52a0\u5de5\u670d\u52a1\u8bf7\u8054\u7cfb",(0,l.kt)("a",{parentName:"p",href:"https://realsee.com/website/business"},"\u5982\u89c6\u5b98\u7f51\u5546\u52a1\u5408\u4f5c"))))}m.isMDXComponent=!0},3905:function(e,t,r){r.d(t,{Zo:function(){return u},kt:function(){return m}});var n=r(67294);function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function p(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r,n,a={},l=Object.keys(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||(a[r]=e[r]);return a}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(n=0;n<l.length;n++)r=l[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}var o=n.createContext({}),c=function(e){var t=n.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):p(p({},t),e)),r},u=function(e){var t=c(e.components);return n.createElement(o.Provider,{value:t},e.children)},s={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},d=n.forwardRef((function(e,t){var r=e.components,a=e.mdxType,l=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),d=c(r),m=a,k=d["".concat(o,".").concat(m)]||d[m]||s[m]||l;return r?n.createElement(k,p(p({ref:t},u),{},{components:r})):n.createElement(k,p({ref:t},u))}));function m(e,t){var r=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var l=r.length,p=new Array(l);p[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i.mdxType="string"==typeof e?e:a,p[1]=i;for(var c=2;c<l;c++)p[c]=r[c];return n.createElement.apply(null,p)}return n.createElement.apply(null,r)}d.displayName="MDXCreateElement"}}]);