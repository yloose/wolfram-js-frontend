"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[7654],{58556:(e,n,a)=>{a.r(n),a.d(n,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>d,metadata:()=>r,toc:()=>l});var t=a(17624),i=a(4552);const s=a.p+"assets/medias/aniamtedLatex-fc59d60897676e2c99ddc7e9b0fb25b9.mov",d={},o=void 0,r={id:"frontend/Advanced/Slides/Animated equations",title:"Animated equations",description:"We use separate engine to animate TeX equations more efficiently. This subsystem is integrated with Fragments, you can combine both if needed.",source:"@site/docs/frontend/Advanced/Slides/Animated equations.md",sourceDirName:"frontend/Advanced/Slides",slug:"/frontend/Advanced/Slides/Animated equations",permalink:"/frontend/Advanced/Slides/Animated equations",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1724587802e3,frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"Widgets",permalink:"/frontend/Advanced/Slides/Widgets"},next:{title:"Backgrounds",permalink:"/frontend/Advanced/Slides/Backgrounds"}},c={},l=[{value:"Options",id:"options",level:2},{value:"Animation Speed (<code>data-eq-speed</code>)",id:"animation-speed-data-eq-speed",level:3},{value:"Color/Color Gradient (<code>data-eq-gradient</code>)",id:"colorcolor-gradient-data-eq-gradient",level:3},{value:"Color Precession (<code>data-eq-color-precess</code>)",id:"color-precession-data-eq-color-precess",level:3},{value:"Fragments",id:"fragments",level:2}];function m(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)(n.p,{children:["We use separate engine to animate TeX equations more efficiently. This subsystem is integrated with ",(0,t.jsx)(n.a,{href:"/frontend/Advanced/Slides/Fragments",children:"Fragments"}),", you can combine both if needed."]}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["This particular technique was developed by ",(0,t.jsx)(n.a,{href:"https://www.cianlm.dev/",children:"Cian Luke Martin"}),", which is basically a post-processing engine for SVGs generated from LaTeX equations"]}),"\n"]}),"\n","\n",(0,t.jsx)("video",{width:"100%",controls:!0,children:(0,t.jsx)("source",{src:s})}),"\n",(0,t.jsx)(n.p,{children:"The minimal example"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tex",children:'.slide\n\n## Animated LaTeX\n\n$$\n\\\\begin{align*}\n\\\\mathbf{E}(t,x) &= \\\\sum_{\\\\omega} \\\\mathbf{E}_0^{\\\\omega} ~ exp\\\\Big( i\\\\omega t - \\\\frac{i\\\\hat{n}(\\\\omega) \\\\omega x}{c}\\\\Big) \\\\\\\\ &= \\\\sum\\\\mathbf{E}_0^{\\\\omega} \\\\colorbox{white}{$exp(-\\\\frac{\\\\alpha x}{2})$} ~exp\\\\Big(i\\\\omega t - \\\\frac{i n \\\\omega x}{c}\\\\Big)\n\\\\end{align*}\n$$ \x3c!-- .element: data-eq-speed="0.1" --\x3e\n'})}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsx)(n.p,{children:"The animation will be applied only if at least one of those attributes is defined"}),(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"data-eq-speed"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"data-eq-gradient"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"data-eq-color-precess"})}),"\n",(0,t.jsx)(n.li,{children:(0,t.jsx)(n.code,{children:"data-eq-delay"})}),"\n"]})]}),"\n",(0,t.jsx)(n.admonition,{type:"note",children:(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.strong,{children:"MathJax"})," is used for producing animated equation instead of a default engine ",(0,t.jsx)(n.strong,{children:"KaTeX"}),". Consider this when writing your equations, there might be some differences in available TeX packages and etc."]})}),"\n",(0,t.jsx)(n.h2,{id:"options",children:"Options"}),"\n",(0,t.jsx)(n.p,{children:(0,t.jsxs)(n.em,{children:["source  ",(0,t.jsx)(n.a,{href:"https://github.com/CianLM/reveal-animated-latex",children:"Github"})]})}),"\n",(0,t.jsxs)(n.h3,{id:"animation-speed-data-eq-speed",children:["Animation Speed (",(0,t.jsx)(n.code,{children:"data-eq-speed"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"The increment of time (in seconds) between each stroke"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tex",children:'.slide\n\n## Animated LaTeX\n\n$$\nm a = F\n$$ \x3c!-- .element: data-eq-speed="0.7" --\x3e\n\n$$\nm a = F\n$$ \x3c!-- .element: data-eq-speed="0.1" --\x3e\n'})}),"\n",(0,t.jsxs)(n.h3,{id:"colorcolor-gradient-data-eq-gradient",children:["Color/Color Gradient (",(0,t.jsx)(n.code,{children:"data-eq-gradient"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"Any number of colors\xa0n\u22651\xa0is accepted (as well as rgb/hex values)"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tex",children:".slide\n\n## Animated LaTeX\n\n$$\nm a = F\n$$ \x3c!-- .element: data-eq-gradient=\"['red', 'gold']\" --\x3e\n"})}),"\n",(0,t.jsxs)(n.h3,{id:"color-precession-data-eq-color-precess",children:["Color Precession (",(0,t.jsx)(n.code,{children:"data-eq-color-precess"}),")"]}),"\n",(0,t.jsx)(n.p,{children:"The gradient precesses in a loop"}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tex",children:".slide\n\n## Animated LaTeX\n\n$$\nm a = F\n$$ \x3c!-- .element: data-eq-gradient=\"['red', 'gold']\" data-eq-color-precess=\"true\" --\x3e\n"})}),"\n",(0,t.jsx)(n.h2,{id:"fragments",children:"Fragments"}),"\n",(0,t.jsxs)(n.p,{children:["One can also combine it with ",(0,t.jsx)(n.a,{href:"/frontend/Advanced/Slides/Fragments",children:"Fragments"})," in the usual way. The only condition is ",(0,t.jsx)(n.code,{children:"fragment"})," class has to be at the same ",(0,t.jsx)(n.code,{children:".element"})," selector as options for animating"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-tex",children:'.slide\n\n## Animated LaTeX\n\n$$\nm a = m g\n$$ \x3c!-- .element: class="fragment" data-eq-speed="0.3" --\x3e\n\n$$\nm a = m g + F_{ext}\n$$ \x3c!-- .element: class="fragment" data-eq-speed="0.3" --\x3e\n'})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(m,{...e})}):m(e)}},4552:(e,n,a)=>{a.d(n,{I:()=>o,M:()=>d});var t=a(11504);const i={},s=t.createContext(i);function d(e){const n=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),t.createElement(s.Provider,{value:n},e.children)}}}]);