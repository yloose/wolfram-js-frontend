"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[9048],{67428:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>l,toc:()=>o});var s=t(17624),i=t(4552);const a={},r=void 0,l={id:"frontend/Advanced/Snippets/AI Assistant",title:"AI Assistant",description:"Tips",source:"@site/docs/frontend/Advanced/Snippets/AI Assistant.md",sourceDirName:"frontend/Advanced/Snippets",slug:"/frontend/Advanced/Snippets/AI Assistant",permalink:"/frontend/Advanced/Snippets/AI Assistant",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1713980226,formattedLastUpdatedAt:"Apr 24, 2024",frontMatter:{},sidebar:"tutorialSidebar",previous:{title:"3. Dynamic decorations",permalink:"/frontend/Advanced/Objects/Dynamic decorations"},next:{title:"Decorating symbols",permalink:"/frontend/Advanced/Syntax sugar/Decorating symbols"}},c={},o=[{value:"Tips",id:"tips",level:2},{value:"Ask to fix any errors",id:"ask-to-fix-any-errors",level:3},{value:"Say &quot;do it&quot; in a single message",id:"say-do-it-in-a-single-message",level:3},{value:"Mention &quot;current cell&quot; or &quot;in my cell&quot;",id:"mention-current-cell-or-in-my-cell",level:3},{value:"Ask to print a new cell one",id:"ask-to-print-a-new-cell-one",level:3},{value:"Note on cell types",id:"note-on-cell-types",level:2},{value:"Prompt examples",id:"prompt-examples",level:2},{value:"Fixing errors",id:"fixing-errors",level:3},{value:"Fixing grammar",id:"fixing-grammar",level:3},{value:"Helping with Dynamics",id:"helping-with-dynamics",level:3},{value:"Make <em>something</em>",id:"make-something",level:3},{value:"Asking to write an entire program",id:"asking-to-write-an-entire-program",level:3},{value:"Describe the code",id:"describe-the-code",level:3},{value:"Restart session",id:"restart-session",level:3}];function d(e){const n={a:"a",admonition:"admonition",annotation:"annotation",code:"code",em:"em",h2:"h2",h3:"h3",img:"img",li:"li",math:"math",mermaid:"mermaid",mn:"mn",mo:"mo",mrow:"mrow",p:"p",pre:"pre",semantics:"semantics",span:"span",strong:"strong",ul:"ul",...(0,i.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"tips",children:"Tips"}),"\n",(0,s.jsx)(n.h3,{id:"ask-to-fix-any-errors",children:"Ask to fix any errors"}),"\n",(0,s.jsxs)(n.p,{children:["When your cursor is inside a cell (no matter ",(0,s.jsx)(n.em,{children:"javascript"}),", ",(0,s.jsx)(n.em,{children:"wolfram language"})," or whatever), AI can have an access to it. Ask it to fix errors."]}),"\n",(0,s.jsx)(n.h3,{id:"say-do-it-in-a-single-message",children:'Say "do it" in a single message'}),"\n",(0,s.jsx)(n.p,{children:"if assistant hesitates to apply changes to your cell and prints changes to a chat"}),"\n",(0,s.jsx)(n.h3,{id:"mention-current-cell-or-in-my-cell",children:'Mention "current cell" or "in my cell"'}),"\n",(0,s.jsx)(n.p,{children:"to force AI assistant to check the current cell, where the cursor is located rather than a context of a chat"}),"\n",(0,s.jsx)(n.h3,{id:"ask-to-print-a-new-cell-one",children:"Ask to print a new cell one"}),"\n",(0,s.jsx)(n.p,{children:"if your assistant shows a code example or solution in the chat, but not to the notebook"}),"\n",(0,s.jsx)(n.h2,{id:"note-on-cell-types",children:"Note on cell types"}),"\n",(0,s.jsx)(n.p,{children:"An assistant is aware of being in a notebook environment. The following cell types are described well in the initial system prompt"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/frontend/Cell%20types/Wolfram%20Language",children:"Wolfram Language"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/frontend/Cell%20types/Javascript",children:"Javascript"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/frontend/Cell%20types/HTML",children:"HTML"})}),"\n",(0,s.jsx)(n.li,{children:(0,s.jsx)(n.a,{href:"/frontend/Cell%20types/Slides",children:"Slides"})}),"\n",(0,s.jsx)(n.li,{children:"Mermaid diagrams"}),"\n"]}),"\n",(0,s.jsxs)(n.p,{children:["We also include the differences between Wolfram Mathematica and WLJS Notebook to the initial prompt including ",(0,s.jsx)(n.a,{href:"/frontend/Dynamics",children:"Dynamics"}),", ",(0,s.jsx)(n.a,{href:"/frontend/Reference/GUI/InputButton",children:"InputButton"}),", ",(0,s.jsx)(n.a,{href:"/frontend/Reference/GUI/InputRange",children:"InputRange"}),", ",(0,s.jsx)(n.a,{href:"/frontend/Reference/Plotting%20Functions/ManipulatePlot",children:"ManipulatePlot"})," and some of the ",(0,s.jsx)(n.a,{href:"/frontend/Reference/Misc/Events",children:"Events"})," system features."]}),"\n",(0,s.jsx)(n.admonition,{type:"warning",children:(0,s.jsxs)(n.p,{children:["An initial prompt costs ",(0,s.jsxs)(n.span,{className:"katex",children:[(0,s.jsx)(n.span,{className:"katex-mathml",children:(0,s.jsx)(n.math,{xmlns:"http://www.w3.org/1998/Math/MathML",children:(0,s.jsxs)(n.semantics,{children:[(0,s.jsxs)(n.mrow,{children:[(0,s.jsx)(n.mo,{children:"\u223c"}),(0,s.jsx)(n.mn,{children:"3500"})]}),(0,s.jsx)(n.annotation,{encoding:"application/x-tex",children:"\\sim 3500"})]})})}),(0,s.jsxs)(n.span,{className:"katex-html","aria-hidden":"true",children:[(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.3669em"}}),(0,s.jsx)(n.span,{className:"mrel",children:"\u223c"}),(0,s.jsx)(n.span,{className:"mspace",style:{marginRight:"0.2778em"}})]}),(0,s.jsxs)(n.span,{className:"base",children:[(0,s.jsx)(n.span,{className:"strut",style:{height:"0.6444em"}}),(0,s.jsx)(n.span,{className:"mord",children:"3500"})]})]})]})," tokens. You can disable it in the settings, but the quality of assistance will drop drastically."]})}),"\n",(0,s.jsx)(n.h2,{id:"prompt-examples",children:"Prompt examples"}),"\n",(0,s.jsx)(n.p,{children:"Here is a few typical examples"}),"\n",(0,s.jsx)(n.h3,{id:"fixing-errors",children:"Fixing errors"}),"\n",(0,s.jsx)(n.p,{children:"For instance you typed something"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",metastring:'title="cell"',children:"Plot[x, {x,0,1,0.1}]\n\n               ^^^\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Then, keeping your cursor in the cell, ",(0,s.jsx)(n.strong,{children:"open command palette"})," by ",(0,s.jsx)(n.code,{children:"Cmd/Ctrl+P"})," and typing"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"fix my errors\n"})}),"\n",(0,s.jsxs)(n.p,{children:["or if an assistant hesitates to make changes, write in addition ",(0,s.jsx)(n.code,{children:"apply changes"})," or ",(0,s.jsx)(n.code,{children:"fix it in my cell"})]}),"\n",(0,s.jsx)(n.admonition,{type:"note",children:(0,s.jsx)(n.p,{children:"Assistant can help you with any kind of used languages. Make sure that your cursor inside the correct cell"})}),"\n",(0,s.jsx)(n.h3,{id:"fixing-grammar",children:"Fixing grammar"}),"\n",(0,s.jsx)(n.p,{children:"Simply ask"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"fix my grammar in the current cell\n"})}),"\n",(0,s.jsx)(n.p,{children:"and then if it does not apply changes to the current cell - ask as well"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"apply changes\n"})}),"\n",(0,s.jsx)(n.h3,{id:"helping-with-dynamics",children:"Helping with Dynamics"}),"\n",(0,s.jsx)(n.p,{children:"An assistant is aware of new libraries used here. For example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"make an dynamic example, where a green ball follows your cursor on a 2d graph\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",metastring:'title="sample output"',children:'pt = {0.,0.};\n\nGraphics[{\n  White, EventHandler[Rectangle[{-10,-10}, {10,10}], {\n    "mousemove" -> Function[pos,\n        pt = pos\n    ]\n  }],\n  Green, Disk[pt // Offload, 0.5]\n}, PlotRange -> {{-10, 10}, {-10, 10}}]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(96782).c+"",width:"642",height:"456"})}),"\n",(0,s.jsxs)(n.h3,{id:"make-something",children:["Make ",(0,s.jsx)(n.em,{children:"something"})]}),"\n",(0,s.jsx)(n.p,{children:"Ask directly from the command palette what you want"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:'language-title="prompt"',children:"make an example slide\n"})}),"\n",(0,s.jsxs)(n.p,{children:["it will print a new ",(0,s.jsx)(n.a,{href:"/frontend/Cell%20types/Slides",children:"Slides"})," cell"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-jsx",metastring:'title="sample output"',children:".slide\n# Welcome to the Presentation\n\nThis slide introduces you to the world of presentations in notebooks.\n\n---\n\n# The Power of Slides\n\nSlides can convey complex ideas succinctly and engagingly.\n\n---\n\n# Thank You!\n\nWe hope you found this introduction useful.\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(81016).c+"",width:"1004",height:"796"})}),"\n",(0,s.jsxs)(n.p,{children:["Or ",(0,s.jsx)(n.strong,{children:"to write Javascript code example"})]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:'language-title="prompt"',children:"write some javascript example with animation\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sample output"',children:".js\nlet canvas = document.createElement('canvas');\ncanvas.width = 200;\ncanvas.height = 200;\nlet ctx = canvas.getContext('2d');\n\nlet posX = 0;\nlet speed = 2;\n\nfunction draw() {\n  ctx.clearRect(0, 0, canvas.width, canvas.height);\n  ctx.fillStyle = 'red';\n  ctx.fillRect(posX, 75, 50, 50);\n  posX += speed;\n  if (posX > canvas.width || posX < 0) speed *= -1;\n}\n\nlet animFrame;\nfunction animate() {\n  draw();\n  animFrame = requestAnimationFrame(animate);\n}\n\nanimate();\n\nthis.ondestroy = () => {\n    cancelAnimationFrame(animFrame);\n};\n\nreturn canvas;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(65608).c+"",width:"642",height:"456"})}),"\n",(0,s.jsx)(n.p,{children:"Or HTML"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"show me example with HTML language. Print it to a new cell\n"})}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-html",metastring:'title="sample output"',children:'.html\n<div>\n    <h1 class="text-2xl font-bold">My First Heading</h1>\n    <p>This is a paragraph in a div element.</p>\n</div>\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(1308).c+"",width:"1044",height:"154"})}),"\n",(0,s.jsx)(n.p,{children:"Or mermaid diagram"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"write a mermaid flow-type diagram with the following data: Frontend, which is connected to Backend using Websockets and on the backend Wolfram Language server is running\n"})}),"\n",(0,s.jsx)(n.mermaid,{value:"graph TD\n    Frontend --\x3e|Websockets| Backend\n    Backend --\x3e|Runs on| WolframLanguageServer[Wolfram Language server]"}),"\n",(0,s.jsx)(n.h3,{id:"asking-to-write-an-entire-program",children:"Asking to write an entire program"}),"\n",(0,s.jsx)(n.p,{children:"Quite often it is quite risky, but with more popular languages like Javascript it can work very well. For example"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"how to capture data from webcam in Javascript and draw it to canvas. Print it to a new cell\n"})}),"\n",(0,s.jsx)(n.p,{children:"which produces a fully working code"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",metastring:'title="sample output"',children:".js\n// First, create elements for the video and canvas\nconst video = document.createElement('video');\nconst canvas = document.createElement('canvas');\nconst context = canvas.getContext('2d');\n\n// Set video constraints\ncanvas.width = 640;\ncanvas.height = 480;\n\n// Use getUserMedia to access the webcam\nif(navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {\n    navigator.mediaDevices.getUserMedia({ video: true })\n        .then(function(stream) {\n            video.srcObject = stream;\n            video.play();\n        })\n        .catch(function(error) {\n            console.log(\"Error accessing webcam: \", error);\n        });\n}\n\n// Draw the video frame to the canvas\ndocument.body.appendChild(video);\nvideo.addEventListener('play', function() {\n    (function draw() {\n        context.drawImage(video, 0, 0, canvas.width, canvas.height);\n        requestAnimationFrame(draw);\n    })();\n});\n\n// Return the canvas element to be rendered\nreturn canvas;\n"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:t(31444).c+"",width:"2212",height:"1184"})}),"\n",(0,s.jsxs)(n.admonition,{type:"warning",children:[(0,s.jsx)(n.p,{children:"This code does not stop even if you remove a cell. Please ask AI in addition"}),(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"please modify it so that when i remove a cell it will also stop streaming\n"})})]}),"\n",(0,s.jsx)(n.h3,{id:"describe-the-code",children:"Describe the code"}),"\n",(0,s.jsx)(n.p,{children:"For example asking"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"describe the code in the current cell\n"})}),"\n",(0,s.jsx)(n.p,{children:"will give a rich description generated by AI, that you can also ask to print to a next cell in Markdown format."}),"\n",(0,s.jsx)(n.h3,{id:"restart-session",children:"Restart session"}),"\n",(0,s.jsx)(n.p,{children:"If you need to flush the session, simply type in the chat window"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"reset chat\n"})})]})}function h(e={}){const{wrapper:n}={...(0,i.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},96782:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/MovingBall video to gif-e82d5ce7b26dc5b88dc3849c1ea427c2.gif"},65608:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/MovingRectJs video-77e5b64027c89501a5e8d0633e185ca1.gif"},81016:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/Screenshot 2024-04-20 at 21.34.20-b381323808bb39e282be1960ef57dd90.png"},1308:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/Screenshot 2024-04-20 at 21.44.25-4d40a7c9ba25ea99fadcb69472aaef72.png"},31444:(e,n,t)=>{t.d(n,{c:()=>s});const s=t.p+"assets/images/Screenshot 2024-04-20 at 22.25.27-a89e5a90a19b0b3bdabf156699b46409.png"},4552:(e,n,t)=>{t.d(n,{I:()=>l,M:()=>r});var s=t(11504);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);