"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[7972],{42020:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>L,contentTitle:()=>V,default:()=>E,frontMatter:()=>S,metadata:()=>T,toc:()=>W});var r=t(17624),a=t(4552),s=t(11504),l=t(65456),o=t(53943),i=t(55592),c=t(95288),u=t(10632),d=t(27128),h=t(21148);function p(e){return s.Children.toArray(e).filter((e=>"\n"!==e)).map((e=>{if(!e||(0,s.isValidElement)(e)&&function(e){const{props:n}=e;return!!n&&"object"==typeof n&&"value"in n}(e))return e;throw new Error(`Docusaurus error: Bad <Tabs> child <${"string"==typeof e.type?e.type:e.type.name}>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.`)}))?.filter(Boolean)??[]}function m(e){const{values:n,children:t}=e;return(0,s.useMemo)((()=>{const e=n??function(e){return p(e).map((e=>{let{props:{value:n,label:t,attributes:r,default:a}}=e;return{value:n,label:t,attributes:r,default:a}}))}(t);return function(e){const n=(0,d.w)(e,((e,n)=>e.value===n.value));if(n.length>0)throw new Error(`Docusaurus error: Duplicate values "${n.map((e=>e.value)).join(", ")}" found in <Tabs>. Every value needs to be unique.`)}(e),e}),[n,t])}function f(e){let{value:n,tabValues:t}=e;return t.some((e=>e.value===n))}function b(e){let{queryString:n=!1,groupId:t}=e;const r=(0,i.Uz)(),a=function(e){let{queryString:n=!1,groupId:t}=e;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return t??null}({queryString:n,groupId:t});return[(0,u._M)(a),(0,s.useCallback)((e=>{if(!a)return;const n=new URLSearchParams(r.location.search);n.set(a,e),r.replace({...r.location,search:n.toString()})}),[a,r])]}function x(e){const{defaultValue:n,queryString:t=!1,groupId:r}=e,a=m(e),[l,o]=(0,s.useState)((()=>function(e){let{defaultValue:n,tabValues:t}=e;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:t}))throw new Error(`Docusaurus error: The <Tabs> has a defaultValue "${n}" but none of its children has the corresponding value. Available values are: ${t.map((e=>e.value)).join(", ")}. If you intend to show no default tab, use defaultValue={null} instead.`);return n}const r=t.find((e=>e.default))??t[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:n,tabValues:a}))),[i,u]=b({queryString:t,groupId:r}),[d,p]=function(e){let{groupId:n}=e;const t=function(e){return e?`docusaurus.tab.${e}`:null}(n),[r,a]=(0,h.IN)(t);return[r,(0,s.useCallback)((e=>{t&&a.set(e)}),[t,a])]}({groupId:r}),x=(()=>{const e=i??d;return f({value:e,tabValues:a})?e:null})();(0,c.c)((()=>{x&&o(x)}),[x]);return{selectedValue:l,selectValue:(0,s.useCallback)((e=>{if(!f({value:e,tabValues:a}))throw new Error(`Can't select invalid tab value=${e}`);o(e),u(e),p(e)}),[u,p,a]),tabValues:a}}var g=t(93664);const w={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};function j(e){let{className:n,block:t,selectedValue:a,selectValue:s,tabValues:i}=e;const c=[],{blockElementScrollPositionUntilNextRender:u}=(0,o.MV)(),d=e=>{const n=e.currentTarget,t=c.indexOf(n),r=i[t].value;r!==a&&(u(n),s(r))},h=e=>{let n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":{const t=c.indexOf(e.currentTarget)+1;n=c[t]??c[0];break}case"ArrowLeft":{const t=c.indexOf(e.currentTarget)-1;n=c[t]??c[c.length-1];break}}n?.focus()};return(0,r.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,l.c)("tabs",{"tabs--block":t},n),children:i.map((e=>{let{value:n,label:t,attributes:s}=e;return(0,r.jsx)("li",{role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:e=>c.push(e),onKeyDown:h,onClick:d,...s,className:(0,l.c)("tabs__item",w.tabItem,s?.className,{"tabs__item--active":a===n}),children:t??n},n)}))})}function v(e){let{lazy:n,children:t,selectedValue:a}=e;const l=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){const e=l.find((e=>e.props.value===a));return e?(0,s.cloneElement)(e,{className:"margin-top--md"}):null}return(0,r.jsx)("div",{className:"margin-top--md",children:l.map(((e,n)=>(0,s.cloneElement)(e,{key:n,hidden:e.props.value!==a})))})}function y(e){const n=x(e);return(0,r.jsxs)("div",{className:(0,l.c)("tabs-container",w.tabList),children:[(0,r.jsx)(j,{...e,...n}),(0,r.jsx)(v,{...e,...n})]})}function k(e){const n=(0,g.c)();return(0,r.jsx)(y,{...e,children:p(e.children)},String(n))}const I={tabItem:"tabItem_Ymn6"};function N(e){let{children:n,hidden:t,className:a}=e;return(0,r.jsx)("div",{role:"tabpanel",className:(0,l.c)(I.tabItem,a),hidden:t,children:n})}const S={sidebar_position:1,enableComments:!0,sidebar_class_name:"green",slug:"/"},V="Quick start",T={id:"frontend/instruction",title:"Quick start",description:"Wolfram Language Notebook requires  wolframscript (see Freeware Wolfram Engine or Wolfram Kernel) installed on your PC/Mac. This application will check all paths and ask to locate a Wolfram executable if nothing is found.",source:"@site/docs/frontend/instruction.md",sourceDirName:"frontend",slug:"/",permalink:"/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1713106386,formattedLastUpdatedAt:"Apr 14, 2024",sidebarPosition:1,frontMatter:{sidebar_position:1,enableComments:!0,sidebar_class_name:"green",slug:"/"},sidebar:"tutorialSidebar",next:{title:"Overview",permalink:"/frontend/Overview"}},L={},W=[{value:"Desktop application",id:"desktop-application",level:2},{value:"Server application",id:"server-application",level:2}];function _(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",h1:"h1",h2:"h2",img:"img",li:"li",math:"math",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,a.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.h1,{id:"quick-start",children:"Quick start"}),"\n",(0,r.jsxs)(n.p,{children:["Wolfram Language Notebook ",(0,r.jsxs)(n.strong,{children:["requires  ",(0,r.jsx)(n.code,{children:"wolframscript"})," (see Freeware ",(0,r.jsx)(n.a,{href:"https://www.wolfram.com/engine/",children:"Wolfram Engine"})," or Wolfram Kernel)"]})," installed on your PC/Mac. This application will check all paths and ask to locate a Wolfram executable if nothing is found."]}),"\n",(0,r.jsx)(n.admonition,{type:"warning",children:(0,r.jsxs)(n.p,{children:["Works only with Wolfram Engine ",(0,r.jsxs)(n.span,{className:"katex",children:[(0,r.jsx)(n.span,{className:"katex-mathml",children:(0,r.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,r.jsxs)(n.semantics,{children:[(0,r.jsx)(n.mrow,{children:(0,r.jsx)(n.mo,{children:"\u2265"})}),(0,r.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\geq"})]})})}),(0,r.jsx)(n.span,{className:"katex-html","aria-hidden":"true",children:(0,r.jsxs)(n.span,{className:"base",children:[(0,r.jsx)(n.span,{className:"strut",style:{height:"0.7719em",verticalAlign:"-0.136em"}}),(0,r.jsx)(n.span,{className:"mrel",children:"\u2265"})]})})]})," ",(0,r.jsx)(n.strong,{children:"13.0.0"}),". The version ",(0,r.jsx)(n.strong,{children:"13.3.X"})," is more preferable."]})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(80020).c+"",width:"2228",height:"1236"})}),"\n",(0,r.jsx)("h2",{style:{"text-align":"center"},children:(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"/frontend/Overview",children:"Overview \ud83d\ude80"})})}),"\n",(0,r.jsx)(n.p,{children:"There are two ways you can choose from"}),"\n","\n","\n",(0,r.jsx)(n.h2,{id:"desktop-application",children:"Desktop application"}),"\n",(0,r.jsxs)(n.p,{children:["Notebook interface is shipped as an Electron application, which is cross-platform and has most benefits of a native desktop app. ",(0,r.jsx)(n.strong,{children:"This is the easiest way"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases",children:"Releases"})}),"\n",(0,r.jsxs)(k,{defaultValue:"Windows",values:[{label:"Windows",value:"Windows"},{label:"Linux",value:"Linux"},{label:"Mac",value:"Mac"}],children:[(0,r.jsx)(N,{value:"Windows",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases/download/2.2.9/WLJS.Notebook.Setup.2.2.9.exe",children:"Windows"})}),"\n"]})}),(0,r.jsx)(N,{value:"Linux",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases/download/2.2.9/wljs-notebook_2.2.9_amd64.deb",children:"Linux (Deb)"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases/download/2.2.9/WLJS.Notebook-2.2.9.AppImage",children:"Linux (AppImage)"})}),"\n"]})}),(0,r.jsx)(N,{value:"Mac",children:(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases/download/2.2.9/WLJS.Notebook-2.2.9-arm64.dmg",children:"M1"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.a,{href:"https://github.com/JerryI/wolfram-js-frontend/releases/download/2.2.9/WLJS.Notebook-2.2.9.dmg",children:"Intel"})}),"\n"]})})]}),"\n",(0,r.jsx)(n.p,{children:"It comes with a launcher, that takes care about all updates, files extension association and etc."}),"\n",(0,r.jsx)(n.h2,{id:"server-application",children:"Server application"}),"\n",(0,r.jsxs)(n.p,{children:["Since this is a web-based application, you can also run on a server. User interface is  reachable from any modern browser. Clone a master branch and run ",(0,r.jsx)(n.code,{children:"wolframscript"})]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/JerryI/wolfram-js-frontend\ncd wolfram-js-frontend\nwolframscript -f Scripts/start.wls\n"})}),"\n",(0,r.jsx)(n.p,{children:"It will take some time to download all core plugins, after that you can start using it by opening your browser"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"...\nOpen http://127.0.0.1:20560 in your browser\n"})})]})}function E(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(_,{...e})}):_(e)}},80020:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/light-4d5e0aaa9bc5372d8b3976ccd3af469a.png"},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>l});var r=t(11504);const a={},s=r.createContext(a);function l(e){const n=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:l(e.components),r.createElement(s.Provider,{value:n},e.children)}}}]);