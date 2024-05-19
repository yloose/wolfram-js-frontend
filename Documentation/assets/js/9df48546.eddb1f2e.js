"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[3448],{73704:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>r,metadata:()=>t,toc:()=>l});var s=i(17624),a=i(4552);const r={draft:!1},c=void 0,t={id:"frontend/Advanced/Dynamics/Performance tips",title:"Performance tips",description:"Performance tips",source:"@site/docs/frontend/Advanced/Dynamics/Performance tips.md",sourceDirName:"frontend/Advanced/Dynamics",slug:"/frontend/Advanced/Dynamics/Performance tips",permalink:"/frontend/Advanced/Dynamics/Performance tips",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1712263022e3,frontMatter:{draft:!1},sidebar:"tutorialSidebar",previous:{title:"Offloading calculations",permalink:"/frontend/Advanced/Dynamics/Offloading calculations"},next:{title:"Prototyping",permalink:"/frontend/Advanced/Dynamics/Prototyping"}},o={},l=[{value:"Performance tips",id:"performance-tips",level:2},{value:"All load to Kernel",id:"all-load-to-kernel",level:3},{value:"Using frontend",id:"using-frontend",level:3},{value:"Naive approach 1",id:"naive-approach-1",level:5},{value:"Naive approach 2",id:"naive-approach-2",level:5},{value:"Optimized version",id:"optimized-version",level:5},{value:"If duplicating is unavoidable",id:"if-duplicating-is-unavoidable",level:3},{value:"Possible pitfall with <code>With</code>",id:"possible-pitfall-with-with",level:3},{value:"Numeric arrays",id:"numeric-arrays",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h5:"h5",img:"img",p:"p",pre:"pre",strong:"strong",...(0,a.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"performance-tips",children:"Performance tips"}),"\n",(0,s.jsxs)(n.p,{children:["You can explicitly choose what will be interpreted on the frontend or backend. We have a few possibilities for our function inside ",(0,s.jsx)(n.code,{children:"Line"})," expression"]}),"\n",(0,s.jsx)(n.h3,{id:"all-load-to-kernel",children:"All load to Kernel"}),"\n",(0,s.jsx)(n.p,{children:"For this one need to change code to"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"EventHandler[InputRange[0,4,0.1], Function[data, \n\tlines = With[{y = data}, \n\t\tTable[{Cos[x], Sin[y x]}, {x,0,2Pi, 0.01}]\n\t]\n]];\n% // EventFire (* just to initialize *)\n"})}),"\n",(0,s.jsxs)(n.p,{children:["The last line manually fires an event to initialize symbol ",(0,s.jsx)(n.code,{children:"lines"}),". Then for the output we can write"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"Graphics[{Cyan, Line[lines // Offload]}]\n"})}),"\n",(0,s.jsx)(n.p,{children:"One can illustrate this binding as on a picture below"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(51588).c+"",width:"434",height:"173"})}),"\n",(0,s.jsx)(n.h3,{id:"using-frontend",children:"Using frontend"}),"\n",(0,s.jsxs)(n.p,{children:["One can move an entire ",(0,s.jsx)(n.code,{children:"Table"})," to the browser's side. Let's discard our changes we made to"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"EventHandler[InputRange[0,4,0.1], Function[data, \n\tv = data\n]];\n% // EventFire\n"})}),"\n",(0,s.jsx)(n.h5,{id:"naive-approach-1",children:"Naive approach 1"}),"\n",(0,s.jsx)(n.p,{children:"The obvious solution for output could be"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"Graphics[{Cyan, Line[\n\tTable[{Cos[x], Sin[Offload[v] x]}, {x,0,2$Pi$, 0.1}]\n]}]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["That will be ",(0,s.jsx)(n.strong,{children:"a horrible solution"})," \ud83d\udc4e\ud83c\udffc"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(90252).c+"",width:"806",height:"246"})}),"\n",(0,s.jsxs)(n.p,{children:["Imagine, each time ",(0,s.jsx)(n.code,{children:"Table"})," iterator ",(0,s.jsx)(n.code,{children:"x"})," goes through the range of values, it creates a sublist of ",(0,s.jsx)(n.code,{children:"Sin"})," and ",(0,s.jsx)(n.code,{children:"Cos"})," functions, that contains dynamic variable ",(0,s.jsx)(n.code,{children:"v"}),".  Then you end up with many instances of ",(0,s.jsx)(n.code,{children:"v"}),"."]}),"\n",(0,s.jsxs)(n.admonition,{type:"danger",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"Line[Table[Expression[Offload[symbol]], {i, 10}]]\n"})}),(0,s.jsxs)(n.p,{children:["Creates ",(0,s.jsx)(n.code,{children:"10"})," instances of ",(0,s.jsx)(n.code,{children:"symbol"}),". ",(0,s.jsx)(n.code,{children:"Line"})," function will be called ",(0,s.jsx)(n.strong,{children:"10"})," times on each update of ",(0,s.jsx)(n.code,{children:"symbol"}),"!"]})]}),"\n",(0,s.jsx)(n.admonition,{type:"danger",children:(0,s.jsxs)(n.p,{children:["Do not put dynamic symbols inside large ",(0,s.jsx)(n.code,{children:"Table"}),". Try to minimize the number of its copies made."]})}),"\n",(0,s.jsx)(n.h5,{id:"naive-approach-2",children:"Naive approach 2"}),"\n",(0,s.jsx)(n.p,{children:"Ok lets try to improve a bit"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"Graphics[{Cyan, Line[\n\tTable[{Cos[x], Sin[v x]}, {x,0,2Pi, 0.1}] // Offload\n]}]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This is also ",(0,s.jsx)(n.strong,{children:"horrible"})," \ud83d\udc4e\ud83c\udffc  Symbol ",(0,s.jsx)(n.code,{children:"Table"})," does the same thing being executed on ",(0,s.jsx)(n.strong,{children:"browser's side as well"})]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(77069).c+"",width:"806",height:"360"})}),"\n",(0,s.jsx)(n.h5,{id:"optimized-version",children:"Optimized version"}),"\n",(0,s.jsxs)(n.p,{children:["One can minimize the number of instances to just 1 using ",(0,s.jsx)(n.code,{children:"With"}),", as it was shown in the example above"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"Graphics[{Cyan, Line[\n\tWith[{y = v}, \n\t\tTable[{Cos[x], Sin[y x]}, {x,0,2Pi, 0.01}]\n\t] // Offload\n  ]\n}]\n"})}),"\n",(0,s.jsxs)(n.p,{children:["This ",(0,s.jsx)(n.strong,{children:"will save up a lot of resources"})," \ud83d\udc4d\ud83c\udffc"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(25400).c+"",width:"806",height:"388"})}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"Line[With[{y = symbol}, Table[AnyExpression[y], {i, 10}]]]\n"})}),(0,s.jsxs)(n.p,{children:["Creates only 1 instance of ",(0,s.jsx)(n.code,{children:"symbol"}),". A ",(0,s.jsx)(n.code,{children:"Line"})," function will be called ",(0,s.jsx)(n.strong,{children:"1"})," time per update of a ",(0,s.jsx)(n.code,{children:"symbol"}),"."]})]}),"\n",(0,s.jsxs)(n.admonition,{type:"tip",children:[(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"Line[symbol//Offload], ... Line[symbol//Offload]\n"})}),(0,s.jsxs)(n.p,{children:["This is ok, each ",(0,s.jsx)(n.code,{children:"Line"})," is bounded to its own ",(0,s.jsx)(n.code,{children:"symbol"})," instance. Therefore on update of ",(0,s.jsx)(n.code,{children:"symbol"}),", each ",(0,s.jsx)(n.code,{children:"Line"})," expression will be reevaluated once."]})]}),"\n",(0,s.jsx)(n.h3,{id:"if-duplicating-is-unavoidable",children:"If duplicating is unavoidable"}),"\n",(0,s.jsxs)(n.p,{children:["If you have to update two properties of a dynamic expression such as ",(0,s.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/GraphicsComplex",children:"GraphicsComplex"})," which are ",(0,s.jsx)(n.code,{children:"VertexColors"})," and list of vertices for this example, it is unavoidable to use two ",(0,s.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"})," s there"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'GraphicsComplex[vertices // Offload, {Polygon[triangles]}, "VertexColors"->Offload[colors]]\n'})}),"\n",(0,s.jsx)(n.p,{children:"then if later in the code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"vertices = ...;\ncolors = ...;\n"})}),"\n",(0,s.jsxs)(n.p,{children:["will cause the reevaluation of ",(0,s.jsx)(n.a,{href:"/frontend/Reference/Graphics3D/GraphicsComplex",children:"GraphicsComplex"})," ",(0,s.jsx)(n.strong,{children:"two times"})," for the same set of data. However, there is a way on how to suppress the second one using options of ",(0,s.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'GraphicsComplex[vertices // Offload, {Polygon[triangles]}, "VertexColors"->Offload[colors, "Static"->True]]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Here ",(0,s.jsx)(n.code,{children:"colors"})," ",(0,s.jsx)(n.strong,{children:"will not be bounded to"})," ",(0,s.jsx)(n.code,{children:"GraphicsComplex"}),". That results in ",(0,s.jsx)(n.strong,{children:"only a single reevaluation"})," per updates of ",(0,s.jsx)(n.code,{children:"colors"})," and ",(0,s.jsx)(n.code,{children:"vertices"}),". However a new values is going to be read anyway once ",(0,s.jsx)(n.code,{children:"vertices"})," has been updated."]}),"\n",(0,s.jsxs)(n.h3,{id:"possible-pitfall-with-with",children:["Possible pitfall with ",(0,s.jsx)(n.code,{children:"With"})]}),"\n",(0,s.jsxs)(n.p,{children:["There might be temptation to wrap ",(0,s.jsx)(n.code,{children:"Line"})," expression inside ",(0,s.jsx)(n.code,{children:"With"})," as well, like that"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"Graphics[{Cyan, With[{y = v}, \n\tLine[\n\t\tTable[{Cos[x], Sin[y x]}, {x,0,2Pi, 0.01}]\n\t]\n] // Offload}]\n"})}),"\n",(0,s.jsxs)(n.p,{children:[(0,s.jsx)(n.strong,{children:"This will not work at all"})," \ud83d\udc4e\ud83c\udffc because the binding will occur between ",(0,s.jsx)(n.code,{children:"Graphics"})," and ",(0,s.jsx)(n.code,{children:"v"})," objects"]}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(97648).c+"",width:"773",height:"388"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"Think about an onion from the Shrek movie"})}),"\n",(0,s.jsx)(n.h2,{id:"numeric-arrays",children:"Numeric arrays"}),"\n",(0,s.jsxs)(n.p,{children:["When it goes to transfer any points as nested lists, it is better to wrap them into ",(0,s.jsx)(n.code,{children:"NumericArray"}),". It tells WLJS Interpreter on the browser, that we can expect only numbers or lists of numbers, there which reduces the load while parsing them."]}),"\n",(0,s.jsxs)(n.p,{children:["For example - ",(0,s.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"dynamic"})," symbols"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"(* every update *)\nsymbol = someFunctionThatReturnsList\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"20 FPS"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(65256).c+"",width:"600",height:"376"})}),"\n",(0,s.jsxs)(n.p,{children:["then using ",(0,s.jsx)(n.code,{children:"NumericArray"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:"(* every update *)\nsymbol = NumericArray[someFunctionThatReturnsList]\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.em,{children:"~40 FPS"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(74704).c+"",width:"600",height:"376"})})]})}function h(e={}){const{wrapper:n}={...(0,a.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},65256:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/No Numeric Array-d536f089bbb96027dbb6f9e553d2ad28.gif"},74704:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/NumericArray video-78168ba367ec3234e74be058af7ba4ea.gif"},51588:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/dynEx1.excalidraw-515f578e91df9a75e892122da5ef3f68.svg"},90252:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/dynEx2.excalidraw-fed62bc73e874b4f01527b4053db2eb5.svg"},77069:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/dynEx3.excalidraw-24bca3989528b40d91907ea5f9631431.svg"},25400:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/dynEx4.excalidraw-021e439e911cbe6b419ae7724cf8f9f7.svg"},97648:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/dynEx5.excalidraw-bdd264bc0acfa8fcadd2a9a4eb3215c9.svg"},4552:(e,n,i)=>{i.d(n,{I:()=>t,M:()=>c});var s=i(11504);const a={},r=s.createContext(a);function c(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function t(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:c(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);