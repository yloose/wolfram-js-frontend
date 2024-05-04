"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[6546],{74260:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>r,metadata:()=>l,toc:()=>c});var o=n(17624),a=n(4552);const r={env:["Wolfram Kernel"],update:null,needsContainer:null,origin:"https://reference.wolfram.com/language/ref/ListCurvePathPlot.html"},i=void 0,l={id:"frontend/Reference/Plotting Functions/ListCurvePathPlot",title:"ListCurvePathPlot",description:"Plots a curve that corresponds to a smooth path through the specified points",source:"@site/docs/frontend/Reference/Plotting Functions/ListCurvePathPlot.md",sourceDirName:"frontend/Reference/Plotting Functions",slug:"/frontend/Reference/Plotting Functions/ListCurvePathPlot",permalink:"/frontend/Reference/Plotting Functions/ListCurvePathPlot",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1714824230,formattedLastUpdatedAt:"May 4, 2024",frontMatter:{env:["Wolfram Kernel"],update:null,needsContainer:null,origin:"https://reference.wolfram.com/language/ref/ListCurvePathPlot.html"},sidebar:"tutorialSidebar",previous:{title:"ListContourPlot",permalink:"/frontend/Reference/Plotting Functions/ListContourPlot"},next:{title:"ListLinePlot",permalink:"/frontend/Reference/Plotting Functions/ListLinePlot"}},s={},c=[{value:"Example",id:"example",level:2},{value:"Neat example",id:"neat-example",level:3}];function d(e){const t={code:"code",h2:"h2",h3:"h3",p:"p",pre:"pre",...(0,a.M)(),...e.components},{Wl:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Wl",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"Plots a curve that corresponds to a smooth path through the specified points"}),"\n",(0,o.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,o.jsx)(t.p,{children:"Randomly sampled points on a circle"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-mathematica",children:"data = Table[{t Cos[t], t Sin[t]}, {t, RandomReal[{0, 2 Pi}, 50]}];\nListCurvePathPlot[data, Epilog->{Opacity[0.5], Line[data]}]\n"})}),"\n",(0,o.jsx)(n,{children:"data = Table[{t Cos[t], t Sin[t]}, {t, RandomReal[{0, 2 Pi}, 50]}];\nListCurvePathPlot[data, Epilog->{Opacity[0.5], Line[data]}]"}),"\n",(0,o.jsx)(t.p,{children:"where the gray lines represent what would a simple line plot show."}),"\n",(0,o.jsx)(t.h3,{id:"neat-example",children:"Neat example"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-mathematica",children:"ListCurvePathPlot[RandomReal[{0, 10}, {2000, 2}]]\n"})}),"\n",(0,o.jsx)(n,{children:"ListCurvePathPlot[RandomReal[{0, 10}, {2000, 2}], ImageSize->500]"})]})}function u(e={}){const{wrapper:t}={...(0,a.M)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},4552:(e,t,n)=>{n.d(t,{I:()=>l,M:()=>i});var o=n(11504);const a={},r=o.createContext(a);function i(e){const t=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),o.createElement(r.Provider,{value:t},e.children)}}}]);