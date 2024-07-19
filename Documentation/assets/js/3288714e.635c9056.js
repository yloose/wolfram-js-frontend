"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[7748],{70200:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var i=t(17624),r=t(4552);const s={env:["Wolfram Kernel"],origin:"https://github.com/JerryI/wljs-inputs",source:"https://github.com/JerryI/wljs-inputs/blob/dev/src/Kernel.wl",package:"wljs-inputs",context:"Notebook`Kernel`Inputs`"},c=void 0,o={id:"frontend/Reference/GUI/InputText",title:"InputText",description:"represents an input-text field and returns EventObject",source:"@site/docs/frontend/Reference/GUI/InputText.md",sourceDirName:"frontend/Reference/GUI",slug:"/frontend/Reference/GUI/InputText",permalink:"/frontend/Reference/GUI/InputText",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1721164787e3,frontMatter:{env:["Wolfram Kernel"],origin:"https://github.com/JerryI/wljs-inputs",source:"https://github.com/JerryI/wljs-inputs/blob/dev/src/Kernel.wl",package:"wljs-inputs",context:"Notebook`Kernel`Inputs`"},sidebar:"tutorialSidebar",previous:{title:"InputTable",permalink:"/frontend/Reference/GUI/InputTable"},next:{title:"Slider",permalink:"/frontend/Reference/GUI/Slider"}},l={},d=[{value:"Event generation",id:"event-generation",level:2},{value:"Options",id:"options",level:2},{value:"<code>&quot;Label&quot;</code>",id:"label",level:3},{value:"<code>&quot;Placeholder&quot;</code>",id:"placeholder",level:3},{value:"<code>&quot;Description&quot;</code>",id:"description",level:3},{value:"<code>&quot;Topic&quot;</code>",id:"topic",level:3},{value:"Example",id:"example",level:2},{value:"Chaining events",id:"chaining-events",level:2},{value:"Dev notes",id:"dev-notes",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",strong:"strong",...(0,r.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"InputText[initial_String, opts___] _EventObject\n"})}),"\n",(0,i.jsxs)(n.p,{children:["represents an input-text field and returns ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Misc/Events#%60EventObject%60",children:(0,i.jsx)(n.code,{children:"EventObject"})})]}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["For dynamic read-only indication use ",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/TextView",children:"TextView"})]})}),"\n",(0,i.jsx)(n.h2,{id:"event-generation",children:"Event generation"}),"\n",(0,i.jsxs)(n.p,{children:["Every-time user changes the content, an event ",(0,i.jsx)(n.strong,{children:"in a form of string"})," will be generated"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'"<current string>"\n'})}),"\n",(0,i.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,i.jsx)(n.h3,{id:"label",children:(0,i.jsx)(n.code,{children:'"Label"'})}),"\n",(0,i.jsx)(n.p,{children:"adds a label at the left side to the input text field"}),"\n",(0,i.jsx)(n.h3,{id:"placeholder",children:(0,i.jsx)(n.code,{children:'"Placeholder"'})}),"\n",(0,i.jsx)(n.p,{children:"Text placeholder"}),"\n",(0,i.jsx)(n.h3,{id:"description",children:(0,i.jsx)(n.code,{children:'"Description"'})}),"\n",(0,i.jsx)(n.p,{children:"adds description field to a widget"}),"\n",(0,i.jsx)(n.h3,{id:"topic",children:(0,i.jsx)(n.code,{children:'"Topic"'})}),"\n",(0,i.jsx)(n.p,{children:"Specifies which topic or pattern of an event is used"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'"Topic" -> name_String\n'})}),"\n",(0,i.jsxs)(n.p,{children:["emits ",(0,i.jsx)(n.code,{children:"name"})," for each time when user types"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'"Topic" -> {oninput_String, onchange_String}\n'})}),"\n",(0,i.jsxs)(n.p,{children:["emits ",(0,i.jsx)(n.code,{children:"oninput"})," when any changes occur, while ",(0,i.jsx)(n.code,{children:"onchange"})," is ",(0,i.jsx)(n.strong,{children:"emitted after"})," the users leaves the field"]}),"\n",(0,i.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,i.jsx)(n.p,{children:"A simple text input"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'text = InputText["Hi"]\nEventHandler[text, Print];\n'})}),"\n",(0,i.jsx)(n.h2,{id:"chaining-events",children:"Chaining events"}),"\n",(0,i.jsx)(n.p,{children:"One can reuse another event"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"InputText[event_EventObject, rest__]\n"})}),"\n",(0,i.jsx)(n.h2,{id:"dev-notes",children:"Dev notes"}),"\n",(0,i.jsxs)(n.p,{children:["This is a wrapper for ",(0,i.jsx)(n.a,{href:"/frontend/Reference/GUI/TextView",children:"TextView"})," view-component"]})]})}function h(e={}){const{wrapper:n}={...(0,r.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(a,{...e})}):a(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>o,M:()=>c});var i=t(11504);const r={},s=i.createContext(r);function c(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);