"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[2108],{60424:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>a,toc:()=>d});var r=t(17624),s=t(4552);const i={env:["Wolfram Kernel"],update:null,origin:"https://github.com/JerryI/wljs-editor/tree/main",needsContainer:null},o=void 0,a={id:"frontend/Reference/Decorations/Style",title:"Style",description:"Styling box used as a decoration for an arbitrary Wolfram Expressions",source:"@site/docs/frontend/Reference/Decorations/Style.md",sourceDirName:"frontend/Reference/Decorations",slug:"/frontend/Reference/Decorations/Style",permalink:"/frontend/Reference/Decorations/Style",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:171250686e4,frontMatter:{env:["Wolfram Kernel"],update:null,origin:"https://github.com/JerryI/wljs-editor/tree/main",needsContainer:null},sidebar:"tutorialSidebar",previous:{title:"StandardForm",permalink:"/frontend/Reference/Decorations/StandardForm"},next:{title:"TableForm",permalink:"/frontend/Reference/Decorations/TableForm"}},c={},d=[{value:"Options",id:"options",level:2},{value:"Directives",id:"directives",level:2},{value:"Example",id:"example",level:2}];function l(e){const n={admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,s.M)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"Styling box used as a decoration for an arbitrary Wolfram Expressions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"Style[expr_, opts__]\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsx)(n.p,{children:"Expressions are editable"})}),"\n",(0,r.jsxs)(n.p,{children:["The argument ",(0,r.jsx)(n.code,{children:"opts"})," contains directives for the formatted output."]}),"\n",(0,r.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Background"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"FontFamily"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"FontSize"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"directives",children:"Directives"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"_Integer"})," font size"]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.code,{children:"_RGBColor"})," font color"]}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Bold"})}),"\n",(0,r.jsx)(n.li,{children:(0,r.jsx)(n.code,{children:"Italic"})}),"\n"]}),"\n",(0,r.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"Style[1, Background->Yellow]\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(46964).c+"",width:"1728",height:"206"})}),"\n",(0,r.jsx)(n.p,{children:"For pure string options are much richer"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'Style["ddd", Background->LightBlue, FontFamily->"Monospace", Bold, Red, Italic,  20]\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(64988).c+"",width:"1842",height:"156"})}),"\n",(0,r.jsx)(n.p,{children:"Hamlet's soliloquy, with repeated words successively has more contrast background"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:'With[{data = ExampleData[{"Text", "ToBeOrNotToBe"}, "Words"]}, \n  Take[MapIndexed[Style[#, 4 Count[Take[data, First[#2]], #]] &, data], 100]\n]\n'})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(29664).c+"",width:"1720",height:"488"})}),"\n",(0,r.jsx)(n.p,{children:"Or for a regular expressions"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-mathematica",children:"Style[(*FB[*)((1)(*,*)/(*,*)((*SqB[*)Sqrt[2](*]SqB*)))(*]FB*), 18, Red]\n"})}),"\n",(0,r.jsx)(n.p,{children:(0,r.jsx)(n.img,{src:t(39204).c+"",width:"1654",height:"354"})})]})}function h(e={}){const{wrapper:n}={...(0,s.M)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},46964:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/Screenshot 2024-03-27 at 21.18.47-15c251adcaa38a91ed225776709e7640.png"},64988:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/Screenshot 2024-04-03 at 20.45.35-6cca92d0959f8005d927f537908fdf8b.png"},29664:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/Screenshot 2024-04-07 at 17.59.26-e27787100c71af9b9fc0be0a23ef44a7.png"},39204:(e,n,t)=>{t.d(n,{c:()=>r});const r=t.p+"assets/images/Screenshot 2024-04-07 at 18.00.06-bf6e9d66da262156d783e69abb777d10.png"},4552:(e,n,t)=>{t.d(n,{I:()=>a,M:()=>o});var r=t(11504);const s={},i=r.createContext(s);function o(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:o(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);