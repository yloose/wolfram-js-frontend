"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[8268],{65124:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>p,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(17624),o=t(4552);const i={env:["Wolfram Kernel"],update:!1},s=void 0,a={id:"frontend/Reference/Decorations/InterpretationBox",title:"InterpretationBox",description:"Make a formatting structure whose interpretation is not based on its appearance",source:"@site/docs/frontend/Reference/Decorations/InterpretationBox.md",sourceDirName:"frontend/Reference/Decorations",slug:"/frontend/Reference/Decorations/InterpretationBox",permalink:"/frontend/Reference/Decorations/InterpretationBox",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171482423e4,frontMatter:{env:["Wolfram Kernel"],update:!1},sidebar:"tutorialSidebar",previous:{title:"Interpretation",permalink:"/frontend/Reference/Decorations/Interpretation"},next:{title:"Ket",permalink:"/frontend/Reference/Decorations/Ket"}},c={},d=[{value:"Applications",id:"applications",level:2},{value:"Dev notes",id:"dev-notes",level:2}];function l(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",p:"p",pre:"pre",strong:"strong",...(0,o.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Make a formatting structure whose interpretation is not based on its appearance"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"InterpretationBox[display_, expr_]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["where ",(0,r.jsx)(n.code,{children:"display"})," will be shown in the output cell, instead of ",(0,r.jsx)(n.code,{children:"expr"}),", keeping ",(0,r.jsx)(n.code,{children:"expr"})," for the evaluation."]}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"display"})," can be any Wolfram Expression wrapped in ",(0,r.jsx)(n.code,{children:"MakeBoxes"})]})}),"\n",(0,r.jsx)(n.admonition,{type:"danger",children:(0,r.jsxs)(n.p,{children:[(0,r.jsx)(n.code,{children:"display"})," must be Boxes, if you want to use regular WL expressions, consider ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/Interpretation",children:"Interpretation"})]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Please see ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/BoxBox",children:"BoxBox"})," and ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"})," for an advanced expression decorations"]})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["See more at ",(0,r.jsx)(n.a,{href:"/frontend/Advanced/Syntax%20sugar/Decorating%20symbols",children:"Decorating symbols"})]})}),"\n",(0,r.jsx)(n.h2,{id:"applications",children:"Applications"}),"\n",(0,r.jsxs)(n.p,{children:["One of the examples is to make some definitions shorter by setting ",(0,r.jsx)(n.code,{children:"UpValues"})," to  ",(0,r.jsx)(n.code,{children:"MakeBoxes"}),", since the last one is recursively applied to everything in the output cell"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"AVeryLongFunction /: MakeBoxes[AVeryLongFunction, StandardForm] := InterpretationBox[MakeBoxes[Ashort, StandardForm], AVeryLongFunction]\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now we can check the result by"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"AVeryLongFunction\n"})}),"\n",(0,r.jsx)(n.p,{children:"if one define also this"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"AVeryLongFunction[expr__] := SpecialList[expr]\n"})}),"\n",(0,r.jsxs)(n.p,{children:["You can use it with the created alias ",(0,r.jsx)(n.code,{children:"Ashort"})]}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.strong,{children:"An expression will not be revealed"})}),"\n",(0,r.jsx)(n.h2,{id:"dev-notes",children:"Dev notes"}),"\n",(0,r.jsxs)(n.p,{children:["This is a wrapper for ",(0,r.jsx)(n.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"})," with a read-only ",(0,r.jsx)(n.a,{href:"/frontend/Reference/GUI/EditorView",children:"EditorView"})," inside."]})]})}function p(e={}){const{wrapper:n}={...(0,o.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>s});var r=t(11504);const o={},i=r.createContext(o);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);