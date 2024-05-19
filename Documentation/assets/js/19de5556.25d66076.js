"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[7224],{93108:(e,n,s)=>{s.r(n),s.d(n,{assets:()=>l,contentTitle:()=>t,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>o});var i=s(17624),d=s(4552);const a={sidebar_position:1,draft:!1},t="Slides",r={id:"frontend/Advanced/Slides/Slides",title:"Slides",description:"You can use pure Markdown, HTML, CSS or WLX languages while making slides",source:"@site/docs/frontend/Advanced/Slides/Slides.md",sourceDirName:"frontend/Advanced/Slides",slug:"/frontend/Advanced/Slides/",permalink:"/frontend/Advanced/Slides/",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1712738293e3,sidebarPosition:1,frontMatter:{sidebar_position:1,draft:!1},sidebar:"tutorialSidebar",previous:{title:"Advanced",permalink:"/category/advanced"},next:{title:"Code highlighting",permalink:"/frontend/Advanced/Slides/embed-wl"}},l={},o=[{value:"Layout",id:"layout",level:2},{value:"Using WLX",id:"using-wlx",level:3},{value:"Images",id:"images",level:2},{value:"Equations",id:"equations",level:2},{value:"Embedding PDF or websites",id:"embedding-pdf-or-websites",level:2},{value:"Transitions and fragments",id:"transitions-and-fragments",level:2},{value:"Events",id:"events",level:3},{value:"WL expressions and data-driven slides",id:"wl-expressions-and-data-driven-slides",level:2},{value:"Pointer",id:"pointer",level:2}];function c(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,d.M)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.h1,{id:"slides",children:"Slides"}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["You can use pure ",(0,i.jsx)(n.strong,{children:"Markdown"}),", ",(0,i.jsx)(n.strong,{children:"HTML"}),", ",(0,i.jsx)(n.strong,{children:"CSS"})," or ",(0,i.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," languages while making slides"]})}),"\n",(0,i.jsxs)(n.p,{children:["This is provided by ",(0,i.jsx)(n.a,{href:"https://github.com/JerryI/wljs-revealjs",children:"wljs-revealjs"}),", that integrates an amazing framework ",(0,i.jsx)(n.a,{href:"https://revealjs.com",children:"RevealJS"})," and ",(0,i.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," language to provide components approach on making presentations as well as adding interactivity to them and basically all features of frontend's cells."]}),"\n",(0,i.jsx)(n.p,{children:"The aim of this approach is to simplify the process of making slides, decouple the content from its appearance and embrace the power of data-driven slides."}),"\n",(0,i.jsx)(n.p,{children:"If you know the basics of Markdown it is already enough to do a lot"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slide\n\n# Title\n\nContent\n"})}),"\n",(0,i.jsx)(n.p,{children:"Slides can be separated in two ways"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["using ",(0,i.jsx)(n.code,{children:"---"})," ",(0,i.jsx)(n.strong,{children:"in the same cell"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slide\n\n# Slide 1\n\n---\n\n# Slide 2\n"})}),"\n",(0,i.jsx)(n.p,{children:"which is super simple, however becomes unreadable on larger slides."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["using ",(0,i.jsx)(n.strong,{children:"separated cells"})]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slide\n\n# Slide 1\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slide\n\n# Slide 2\n"})}),"\n",(0,i.jsxs)(n.p,{children:["and then merge them using ",(0,i.jsx)(n.code,{children:".slides"})," extension"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slides\n\nCould the the final slide. All previous slides will be added before.\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["The position of ",(0,i.jsx)(n.code,{children:".slides"})," cell in the notebook does not play any role."]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["To go fullscreen mode - press ",(0,i.jsx)(n.code,{children:"f"})," key after focusing on the content of a slide"]})}),"\n",(0,i.jsxs)(n.admonition,{type:"tip",children:[(0,i.jsx)(n.p,{children:"Use projector feature"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(5908).c+"",width:"1448",height:"400"})}),(0,i.jsx)(n.p,{children:"to show slides in a separate window"})]}),"\n",(0,i.jsx)(n.h2,{id:"layout",children:"Layout"}),"\n",(0,i.jsxs)(n.p,{children:["It is not opinionated on how you organize the content on the slide. By the default all titles marked as ",(0,i.jsx)(n.code,{children:"#"}),", ",(0,i.jsx)(n.code,{children:"##"})," etc are centered and obtain standard ",(0,i.jsx)(n.code,{children:"h1"}),", ",(0,i.jsx)(n.code,{children:"h2"})," ... HTML tags. All paragraphs are wrapped with ",(0,i.jsx)(n.code,{children:"p"})," behind the scenes."]}),"\n",(0,i.jsxs)(n.p,{children:["If you need two columns, use HTML and any available method to make columns. For instance using ",(0,i.jsx)(n.code,{children:"flex"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.slide\n\n# Title\n\n<div style="display: flex">\n  <div style="width: 50%">\n\n## Subtitle 1\n\nAnd some content\n    \n  </div>\n  <div style="width: 50%">\n\n## Subtitle 2\n\nAnd some content\n    \n  </div>\n</div>\n'})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsx)(n.p,{children:"To use Markdown in HTML, please, add line breaks before and after"})}),"\n",(0,i.jsx)(n.p,{children:"The result looks like this"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(51432).c+"",width:"1144",height:"334"})}),"\n",(0,i.jsxs)(n.admonition,{type:"warning",children:[(0,i.jsxs)(n.p,{children:["In order to mix Markdown with HTML or ",(0,i.jsx)(n.a,{href:"/frontend/Cell%20types/WLX",children:"WLX"})," correctly, remove white spaces from the beginning markdown, i.e."]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:".slide\n\n<div>\n\t# It wont work\n</div>\n"})}),(0,i.jsx)(n.p,{children:"but instead"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:".slide\n\n<div>\n\n# It will work\n\n</div>\n"})})]}),"\n",(0,i.jsx)(n.h3,{id:"using-wlx",children:"Using WLX"}),"\n",(0,i.jsx)(n.p,{children:"Of course one can make a helper function for it"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.wlx\nColumns[Col1_, Col2_] := With[{},\n\t<div style="display: flex">\n\t\t<div style="width: 50%"><Col1/></div>\n\t\t<div style="width: 50%"><Col2/></div>\n\t</div>\t\t\t\t\t\t \n]\n'})}),"\n",(0,i.jsx)(n.p,{children:"and then"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:".slide\n\n# Title\n\n<Columns>\n  <div>\n\t\n## Subtitle 1\n\nAnd some content\n    \n  </div>\n  <div>\n\n## Subtitle 2\n\nAnd some content\n\n  </div>\n</Columns>\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The result will be the same. Additional tags we used ",(0,i.jsx)(n.code,{children:"div"})," are necessary to help WLX to differentiate between the first and the second arguments of ",(0,i.jsx)(n.code,{children:"Columns"})," similar to how ",(0,i.jsx)(n.code,{children:"li"})," and ",(0,i.jsx)(n.code,{children:"ul"})," tags are used to make lists."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["See advanced guide on components by the link ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Slides/components",children:"components"})]})}),"\n",(0,i.jsx)(n.h2,{id:"images",children:"Images"}),"\n",(0,i.jsx)(n.p,{children:"RevealJS uses standard Markdown notations for images"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slide\n\n# Title\n\n![desc](https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg)\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(71900).c+"",width:"1276",height:"630"})}),"\n",(0,i.jsx)(n.p,{children:"You can drag and drop them from anywhere"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(49776).c+"",width:"1024",height:"485"})}),"\n",(0,i.jsx)(n.p,{children:"Local files are also supported"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slide\n\n![local](example.png)\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["A web server will try to locate ",(0,i.jsx)(n.code,{children:"example.png"})," in the directory where the notebook is located. If there is no file, it tries to use it as global path starting from the root folder of a system disk."]})}),"\n",(0,i.jsxs)(n.p,{children:["Regular HTML ",(0,i.jsx)(n.code,{children:"img"})," tag is supported as well. It comes handy if you need to set the size"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:'.slide\n\n<img width="700" src="https://upload.wikimedia.org/wikipedia/en/a/a9/Example.jpg"/>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"equations",children:"Equations"}),"\n",(0,i.jsx)(n.p,{children:"This is provided by well-known KaTeX library. Use it as a normal LaTeX"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slide\n\n$m \\\\mathbf{a} = \\\\mathbf{F}$\n"})}),"\n",(0,i.jsx)(n.admonition,{type:"warning",children:(0,i.jsxs)(n.p,{children:["A single slash notation is reserved originally by WL Kernel, therefore you have to stick to double slashes ",(0,i.jsx)(n.code,{children:"\\\\"})]})}),"\n",(0,i.jsx)(n.p,{children:"or a multiline"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slide\n\n$$\n\\\\begin{bmatrix} \nm \\\\mathbf{a} = \\\\mathbf{F}\n\\\\end{bmatrix}\n$$\n"})}),"\n",(0,i.jsxs)(n.p,{children:["If you need to highlight WL code, or JS, or HTML - see ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Slides/embed-wl",children:"embed-wl"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"embedding-pdf-or-websites",children:"Embedding PDF or websites"}),"\n",(0,i.jsx)(n.p,{children:"We have a full power of HTML. To embed a local PDF document from the folder of your notebook"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:'.slide\n\n<embed width="800" height="500" src="antisymmetry.pdf"/>\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(23004).c+"",width:"1552",height:"1094"})}),"\n",(0,i.jsx)(n.p,{children:"or the whole website"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:'.slide\n\n<iframe width="800" height="500" src="https://chat.openai.com"/>\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(57972).c+"",width:"1548",height:"1096"})}),"\n",(0,i.jsxs)(n.p,{children:["and to make a ",(0,i.jsx)(n.strong,{children:"nicer corners"})]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:'.slide\n\n<iframe style="border: none; border-radius: 4px" width="800" height="500" src="https://chat.openai.com"/>\n'})}),"\n",(0,i.jsx)(n.h2,{id:"transitions-and-fragments",children:"Transitions and fragments"}),"\n",(0,i.jsx)(n.p,{children:"Revealing the content is an art. You can specify some fragments to appear later, or disappear or change the color. RevealJS uses HTML comments in the form"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-html",children:'\x3c!-- .element: class="fragment ACTION" data-fragment-index="INDEX" --\x3e\n'})}),"\n",(0,i.jsx)(n.p,{children:"For example to reveal 1 by 1 in order"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:'.slide\n\n# Slide\n\nFragment disapear \x3c!-- .element: class="fragment fade-out" data-fragment-index="1" --\x3e\n\nFragment appear \x3c!-- .element: class="fragment" data-fragment-index="2" --\x3e\n\nFragment changes the color \x3c!-- .element: class="fragment highlight-red" data-fragment-index="3" --\x3e\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(41072).c+"",width:"600",height:"417"})}),"\n",(0,i.jsxs)(n.p,{children:["See more available transitions at ",(0,i.jsx)(n.a,{href:"https://revealjs.com/fragments/",children:"RevealJS"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Custom transitions are not supported, unless it is made using ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})," using ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Slides/animations",children:"animations"})," approach"]})}),"\n",(0,i.jsx)(n.h3,{id:"events",children:"Events"}),"\n",(0,i.jsxs)(n.p,{children:["To capture the events from a slide (revealing the slide or revealing individual fragments) - use ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Slides/SlideEventListener",children:"SlideEventListener"})]}),"\n",(0,i.jsx)(n.p,{children:"It attaches itself to the slide, where it has been placed"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.slide\n\n# 1st Slide\nNothing\n\n---\n\n# 2nd Slide\nA message pops up\n\nAnother message \x3c!-- .element: class="fragment" data-fragment-index="1" --\x3e\n\n<SlideEventListener Id={"myEvent"}/>\n'})}),"\n",(0,i.jsxs)(n.p,{children:["Before evaluation, you should attach an event handler (",(0,i.jsx)(n.a,{href:"/frontend/Reference/Misc/Events#%60EventHandler%60",children:(0,i.jsx)(n.code,{children:"EventHandler"})}),") to it"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:'EventHandler["myEvent", {\n\t"Slide" -> (Print["Hey there!"]&),\n\t"fragment-1" -> (Print["Hey there from fragment!"]&)\n}]\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The identifier of ",(0,i.jsx)(n.a,{href:"/frontend/Reference/Slides/SlideEventListener",children:"SlideEventListener"})," acts as an event object. There are two patterns on how you can capture certain event"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"Slide"'})," - is fired when a slide has been revealed"]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:'"fragment-INDEX"'})," - is fired when a fragment number ",(0,i.jsx)(n.code,{children:"INDEX"})," has been revealed"]}),"\n"]}),"\n",(0,i.jsx)(n.admonition,{type:"info",children:(0,i.jsxs)(n.p,{children:["To learn more about on how to utilize it for animations and etc, please, read ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Slides/animations",children:"animations"})," section."]})}),"\n",(0,i.jsx)(n.h2,{id:"wl-expressions-and-data-driven-slides",children:"WL expressions and data-driven slides"}),"\n",(0,i.jsxs)(n.p,{children:["This is just a simple demonstration. Using ",(0,i.jsx)(n.a,{href:"../../../../wlx/basics.md",children:"WLX"})," one can directly write and execute any WL expressions on a slide"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"GetTime := TextString[Now];\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slide\n\n# Using WLX\nAllow you to do some cool stuff\n\nYour local time is __<GetTime/>__\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(64552).c+"",width:"1486",height:"498"})}),"\n",(0,i.jsx)(n.p,{children:"Or embed any graphics object"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"Figure = SphericalPlot3D[SphericalHarmonicY[2,0, t,p], {t, 0, Pi}, {p, 0, 2Pi}];\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-jsx",children:'.slide\n\n# Embed some figures\nEven 3D\n\n<div style="text-align: center; display: inline-flex;">\n  <Figure/>\n</div>\n\nTry to move it using your mouse\n'})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(45424).c+"",width:"600",height:"417"})}),"\n",(0,i.jsxs)(n.p,{children:["as well ",(0,i.jsxs)(n.strong,{children:["as some figures plotted from a local ",(0,i.jsx)(n.code,{children:"CSV"})," file"]}),". In the example below we use random list of points to do some simple computations"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-mathematica",children:"pts = RandomReal[10, {100, 2}];\nFigure = ListLinePlot[pts[[Last@FindShortestTour[pts]]], Epilog->{Point[pts]}]\n"})}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-md",children:".slide\n\nCompute and plot the shortest tour through 100 random points:\n\n<Figure/>\n"})}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(52096).c+"",width:"600",height:"417"})}),"\n",(0,i.jsxs)(n.p,{children:["For more advanced stuff see ",(0,i.jsx)(n.a,{href:"/frontend/Advanced/Slides/animations",children:"animations"})]}),"\n",(0,i.jsx)(n.h2,{id:"pointer",children:"Pointer"}),"\n",(0,i.jsxs)(n.p,{children:["Pointer is provided by a separate ",(0,i.jsx)(n.a,{href:"https://github.com/burnpiro/reveal-pointer",children:"plugin"})," used by RevealJS. To toggle it press ",(0,i.jsx)(n.code,{children:"q"})," when the focus is on a slide"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:s(92508).c+"",width:"1496",height:"662"})})]})}function h(e={}){const{wrapper:n}={...(0,d.M)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(c,{...e})}):c(e)}},49776:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Dropfiles-ezgif.com-optipng 1-32a413db0a67bec8b71749c28e5b096a.png"},92508:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Screenshot 2023-11-23 at 14.03.17-fed14e74f6d8fa3355ca4a1cfc59b969.png"},51432:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Screenshot 2023-11-23 at 15.08.20-a41d8f5ca8e4850cfdb668e919cf3e94.png"},71900:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Screenshot 2023-11-23 at 15.21.04-ffa374e124414a984c9b6babfacbc7e5.png"},23004:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Screenshot 2023-11-23 at 16.03.20-76b225a3976d8cb76ff7e998d45c2404.png"},57972:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Screenshot 2023-11-23 at 16.04.51-1717c3891bdaef4f5f4afe40c6a92716.png"},64552:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Screenshot 2023-11-23 at 16.26.27-11fefe385d2760471b0dfb42a9e9b641.png"},5908:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/Screenshot 2024-03-13 at 19.33.58-1f8413b5697212f4b59de1fc904d3507.png"},45424:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/ezgif.com-optimize-2-48839f8ab7d7d5908ceb56c2aeffcec1.gif"},52096:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/ezgif.com-optimize-3-a65fccaae5e93fca56108e3866bbd52a.gif"},41072:(e,n,s)=>{s.d(n,{c:()=>i});const i=s.p+"assets/images/ezgif.com-video-to-gif-2 1-be3d44c39b591255f255beba8184593c.gif"},4552:(e,n,s)=>{s.d(n,{I:()=>r,M:()=>t});var i=s(11504);const d={},a=i.createContext(d);function t(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function r(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:t(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);