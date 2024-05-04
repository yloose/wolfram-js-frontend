"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[3092],{99748:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>i,contentTitle:()=>t,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>s});var a=r(17624),c=r(4552);const l={env:["WLJS"],update:!0,package:"wljs-graphics-d3",source:"https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js"},t=void 0,d={id:"frontend/Reference/Graphics/Rectangle",title:"Rectangle",description:"represents a basic rectangle",source:"@site/docs/frontend/Reference/Graphics/Rectangle.md",sourceDirName:"frontend/Reference/Graphics",slug:"/frontend/Reference/Graphics/Rectangle",permalink:"/frontend/Reference/Graphics/Rectangle",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714824230,formattedLastUpdatedAt:"May 4, 2024",frontMatter:{env:["WLJS"],update:!0,package:"wljs-graphics-d3",source:"https://github.com/JerryI/wljs-graphics-d3/blob/dev/src/kernel.js"},sidebar:"tutorialSidebar",previous:{title:"Raster",permalink:"/frontend/Reference/Graphics/Raster"},next:{title:"Rotate",permalink:"/frontend/Reference/Graphics/Rotate"}},i={},s=[{value:"Parameters",id:"parameters",level:2},{value:"<code>RGBColor</code>",id:"rgbcolor",level:3},{value:"<code>EdgeForm</code>",id:"edgeform",level:3},{value:"<code>Opacity</code>",id:"opacity",level:3},{value:"Methods",id:"methods",level:2},{value:"<code>Area</code>",id:"area",level:3},{value:"<code>RegionCentroid</code>",id:"regioncentroid",level:3},{value:"<code>EventHandler</code>",id:"eventhandler",level:3},{value:"Dynamics",id:"dynamics",level:2},{value:"Example",id:"example",level:2}];function o(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",ul:"ul",...(0,c.M)(),...e.components},{Wl:r}=n;return r||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"Rectangle[{xmin_, ymin_}, {xmax_, ymax_}]\n"})}),"\n",(0,a.jsx)(n.p,{children:"represents a basic rectangle"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"Graphics[{Red, Rectangle[{0, 0}], Blue, Rectangle[{0.5, 0.5}]}]\n"})}),"\n",(0,a.jsx)(r,{children:"Graphics[{Red, Rectangle[{0, 0}], Blue, Rectangle[{0.5, 0.5}]}]"}),"\n",(0,a.jsx)(n.h2,{id:"parameters",children:"Parameters"}),"\n",(0,a.jsx)(n.h3,{id:"rgbcolor",children:(0,a.jsx)(n.code,{children:"RGBColor"})}),"\n",(0,a.jsx)(n.p,{children:"filling color"}),"\n",(0,a.jsx)(n.h3,{id:"edgeform",children:(0,a.jsx)(n.code,{children:"EdgeForm"})}),"\n",(0,a.jsx)(n.p,{children:"stroke color"}),"\n",(0,a.jsx)(n.h3,{id:"opacity",children:(0,a.jsx)(n.code,{children:"Opacity"})}),"\n",(0,a.jsx)(n.p,{children:"global opacity of an object"}),"\n",(0,a.jsx)(n.h2,{id:"methods",children:"Methods"}),"\n",(0,a.jsx)(n.h3,{id:"area",children:(0,a.jsx)(n.code,{children:"Area"})}),"\n",(0,a.jsx)(n.p,{children:"Calculates total area (symbolically as well)"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"Area[Rectangle[{x1, y1}, {x2, y2}]]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"regioncentroid",children:(0,a.jsx)(n.code,{children:"RegionCentroid"})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"RegionCentroid[Rectangle[{x1, y1}, {x2, y2}]]\n"})}),"\n",(0,a.jsx)(n.h3,{id:"eventhandler",children:(0,a.jsx)(n.code,{children:"EventHandler"})}),"\n",(0,a.jsxs)(n.p,{children:["One can listen to a several events produced by this primitive using ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Misc/Events#%60EventHandler%60",children:(0,a.jsx)(n.code,{children:"EventHandler"})})]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"EventHandler[t_Rectangle, {event_ -> handler_, ...}]\n"})}),"\n",(0,a.jsxs)(n.p,{children:["where ",(0,a.jsx)(n.code,{children:"event"})," can be"]}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'"mousemove"'})," detects and sends coordinates of a mouse, when it is over this element"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'"drag"'})," makes primitive draggable and emits coordinates"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'"zoom"'})," detects zoom / mouse-wheel"]}),"\n",(0,a.jsxs)(n.li,{children:[(0,a.jsx)(n.code,{children:'"click"'})," detects mouse clicks"]}),"\n"]}),"\n",(0,a.jsx)(n.h2,{id:"dynamics",children:"Dynamics"}),"\n",(0,a.jsxs)(n.p,{children:["It fully supports dynamics. Use ",(0,a.jsx)(n.a,{href:"/frontend/Reference/Interpreter/Offload",children:"Offload"})," on coordinates."]}),"\n",(0,a.jsx)(n.h2,{id:"example",children:"Example"}),"\n",(0,a.jsx)(n.p,{children:"A simple bar chart"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-mathematica",children:"data = RandomReal[{3, 10}, {10, 2}];\n\nGraphics[{\n\tEdgeForm[Black], Blue, \n\tTable[{Blue, Rectangle[{i - .4, 0}, {i, data[[i, 1]]}], \n\tRed, Rectangle[{i + .4, 0}, {i, data[[i, 2]]}]}, {i, 10}]\n}, Frame -> True]\n"})}),"\n",(0,a.jsx)(r,{children:"data = RandomReal[{3, 10}, {10, 2}];Graphics[{EdgeForm[Black], Blue, Table[{Blue, Rectangle[{i - .4, 0}, {i, data[[i, 1]]}], Red, Rectangle[{i + .4, 0}, {i, data[[i, 2]]}]}, {i, 10}]}, Frame -> True]"})]})}function h(e={}){const{wrapper:n}={...(0,c.M)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(o,{...e})}):o(e)}},4552:(e,n,r)=>{r.d(n,{I:()=>d,M:()=>t});var a=r(11504);const c={},l=a.createContext(c);function t(e){const n=a.useContext(l);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function d(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(c):e.components||c:t(e.components),a.createElement(l.Provider,{value:n},e.children)}}}]);