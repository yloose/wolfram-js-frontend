"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[8328],{95144:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>m,frontMatter:()=>s,metadata:()=>r,toc:()=>l});var a=n(17624),i=n(4552);const s={sidebar_position:2},o="2. Static decorations",r={id:"frontend/Advanced/Objects/Static decorations",title:"2. Static decorations",description:"One of the feature advantage of Wolfram Mathematica and WLJS Notebook is a multimodal cells with a powerful syntax sugar. A visual representation of an instance of an object makes the programming experience more educative for sure.",source:"@site/docs/frontend/Advanced/Objects/Static decorations.md",sourceDirName:"frontend/Advanced/Objects",slug:"/frontend/Advanced/Objects/Static decorations",permalink:"/frontend/Advanced/Objects/Static decorations",draft:!1,unlisted:!1,tags:[],version:"current",lastUpdatedAt:1716132984e3,sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"1. Creating new type",permalink:"/frontend/Advanced/Objects/Creating new type"},next:{title:"3. Dynamic decorations",permalink:"/frontend/Advanced/Objects/Dynamic decorations"}},c={},l=[{value:"Summary Item",id:"summary-item",level:2},{value:"Custom decorations",id:"custom-decorations",level:2},{value:"Summary Item and Custom decoration",id:"summary-item-and-custom-decoration",level:2},{value:"Javascript decoration",id:"javascript-decoration",level:2},{value:"Animated decoration in Summary Item",id:"animated-decoration-in-summary-item",level:2},{value:"Optimized version",id:"optimized-version",level:3}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",ul:"ul",...(0,i.M)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"2-static-decorations",children:"2. Static decorations"}),"\n",(0,a.jsx)(t.p,{children:"One of the feature advantage of Wolfram Mathematica and WLJS Notebook is a multimodal cells with a powerful syntax sugar. A visual representation of an instance of an object makes the programming experience more educative for sure."}),"\n",(0,a.jsx)(t.h2,{id:"summary-item",children:"Summary Item"}),"\n",(0,a.jsxs)(t.p,{children:["The easiest way of providing a bit more information, but still keeping the actual expression intact is to use ",(0,a.jsx)(t.a,{href:"/frontend/Reference/Decorations/ArrangeSummaryBox",children:"ArrangeSummaryBox"})]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mathematica",children:'StateMachine /: MakeBoxes[s: StateMachine[symbol_Symbol?AssociationQ], form: (StandardForm | TraditionalForm)] := Module[{},\n\tWith[{\n\t\tsummary = {BoxForm`SummaryItem[{"State: ", s["State"]}]}\n\t},\n\t\tBoxForm`ArrangeSummaryBox[\n\t\t\tStateMachine,\n\t\t\ts,\n\t\t\tNone,\n\t\t\tsummary,\n            Null\n\t\t]\n\t]\n] \n'})}),"\n",(0,a.jsx)(t.p,{children:"Here we redefined a standard output form to a decorated summary box, providing the visible state field"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mathematica",children:'StateMachine["State" -> 3]\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(44488).c+"",width:"2162",height:"136"})}),"\n",(0,a.jsxs)(t.admonition,{type:"info",children:[(0,a.jsx)(t.p,{children:"Despite the fact of looking different, you can still work with it normally: setting and getting properties, i.e."}),(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(2124).c+"",width:"2168",height:"224"})}),(0,a.jsx)(t.p,{children:"is 100% valid"})]}),"\n",(0,a.jsx)(t.h2,{id:"custom-decorations",children:"Custom decorations"}),"\n",(0,a.jsxs)(t.p,{children:["One can do all decorations from scratch using ",(0,a.jsx)(t.a,{href:"/frontend/Reference/Graphics/",children:"Graphics"})," for instance"]}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mathematica",children:'StateMachine /: MakeBoxes[s: StateMachine[symbol_Symbol?AssociationQ], form: (StandardForm | TraditionalForm)] := Module[{},\n\tWith[{\n\t\tg = Graphics[{ Opacity[0.5],\n\t\t\tTable[\n\t\t\t\tRotate[{\n                  Hue[i/12.0, 1.0, 0.5],\n                  Rectangle[{-1,-1}, {1,1}]\n                }, i / (s["State"]+1)]\n\t\t\t, {i, 0, 6Pi, Pi}]\n\t\t}, ImageSize->{100,100}, ImagePadding->None]\n\t},\n\t\tViewBox[s, g // CreateFrontEndObject]\n\t]\n] \n'})}),"\n",(0,a.jsx)(t.p,{children:"The result will look like"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mathematica",children:"machine = StateMachine[]\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(55296).c+"",width:"2164",height:"344"})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mathematica",children:"StateMachineChange[machine, 2]\n"})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(79244).c+"",width:"2164",height:"514"})}),"\n",(0,a.jsx)(t.h2,{id:"summary-item-and-custom-decoration",children:"Summary Item and Custom decoration"}),"\n",(0,a.jsx)(t.p,{children:"Why not to merge both leaving the graphics as an icon?"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mathematica",children:'StateMachine /: MakeBoxes[s: StateMachine[symbol_Symbol?AssociationQ], form: (StandardForm | TraditionalForm)] := Module[{},\n\tWith[{\n\t\tsummary = {BoxForm`SummaryItem[{"State: ", s["State"]}]},\n\t\ticon = Graphics[{ Opacity[0.5],\n\t\t\tTable[\n\t\t\t\tRotate[{\n                  Hue[i/12.0, 1.0, 0.5],\n                  Rectangle[{-1,-1}, {1,1}]\n                }, i / (s["State"]+1), {0.,0.}]\n\t\t\t, {i, 0, 6Pi, Pi}]\n\t\t}, ImageSize->{50,50}, AspectRatio->1, ImagePadding->None]\n\t},\n\t\tBoxForm`ArrangeSummaryBox[\n\t\t\tStateMachine,\n\t\t\ts,\n\t\t\ticon,\n\t\t\tsummary,\n            Null\n\t\t]\n\t]\n] \n'})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mathematica",children:'machine = StateMachine["State"->2]\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(6040).c+"",width:"2150",height:"190"})}),"\n",(0,a.jsx)(t.h2,{id:"javascript-decoration",children:"Javascript decoration"}),"\n",(0,a.jsx)(t.p,{children:"There is also an option to use pure Javascript to render an object, let us make our layout much simpler starting with"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mathematica",children:'StateMachine /: MakeBoxes[s: StateMachine[symbol_Symbol?AssociationQ], form: (StandardForm | TraditionalForm)] := Module[{},\n\tViewBox[s, CustomDecorator[s["State"]]]\n] \n'})}),"\n",(0,a.jsxs)(t.p,{children:["Here we mentioned ",(0,a.jsx)(t.code,{children:"CustomDecorator"})," which is going to be our ",(0,a.jsx)(t.a,{href:"/frontend/Advanced/Frontend%20interpretation/WLJS%20Functions",children:"WLJS Function"})]}),"\n",(0,a.jsx)(t.p,{children:"Then, create a new cell"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-js",children:".js\n\ncore.CustomDecorator = async (args, env) => {\n\tconst state = await interpretate(args[0], env);\n\tconst element = env.element;\n\n\telement.classList.add('flex', 'rounded-md', 'p-2');\n\telement.style.border = \"1px solid #999\";\n\telement.style.boxShadow = \"inset 0 2px 4px 0 rgb(0 0 0 / 0.05)\";\n\n    element.style.transitionDuration = '0.8s';\n    element.style.transitionProperty = 'transform';\n\n    setTimeout(() => {\n      element.style.transform = \"rotate(360deg)\";\n    }, 100);\n\n\telement.innerText = state;\n}\n"})}),"\n",(0,a.jsx)(t.p,{children:"The result will be following"}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(47732).c+"",width:"800",height:"80"})}),"\n",(0,a.jsx)(t.h2,{id:"animated-decoration-in-summary-item",children:"Animated decoration in Summary Item"}),"\n",(0,a.jsx)(t.p,{children:"Why not also animate it using Wolfram Language?"}),"\n",(0,a.jsx)(t.p,{children:"Let it be many balls bouncing the walls. Firstly let us make proof of concept"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mathematica",metastring:'title="test"',children:'balls = RandomReal[{-1,1}, {4,2}];\nvelocities = RandomReal[{-1,1}, {4,2}];\n\nEventHandler["animate", Function[Null,\n  {balls, velocities} = Map[With[{\n    v = {If[Abs[#[[1,1]]] >= 1, -1, 1], If[Abs[#[[1, 2]]] >= 1, -1, 1]} #[[2]], \n    p = #[[1]]\n  },\n    {p + 0.2 v, v}\n  ]&, Transpose[{balls, velocities}]] // Transpose;\n]]\n\nGraphics[{PointSize[0.03], Point[balls // Offload], AnimationFrameListener[balls // Offload, "Event"->"animate"]}, PlotRange->{{-1,1}, {-1,1}}, TransitionType->None]\n'})}),"\n",(0,a.jsx)(t.p,{children:"Now we need only to scope our variables and embed it to summary item"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mathematica",children:'StateMachine /: MakeBoxes[s: StateMachine[symbol_Symbol?AssociationQ], form: (StandardForm | TraditionalForm)] := Module[{\n\tballs = RandomReal[{-1,1}, {s["State"],2}],\n\tvelocities = RandomReal[{-1,1}, {s["State"],2}],\n\tanimateEvent = CreateUUID[]\n},\n\n\tEventHandler[animateEvent, Function[Null,\n\t  {balls, velocities} = Map[With[{\n\t    v = {If[Abs[#[[1,1]]] >= 1, -1, 1], If[Abs[#[[1, 2]]] >= 1, -1, 1]} #[[2]], \n\t    p = #[[1]]\n\t  },\n\t    {p + 0.2 v, v}\n\t  ]&, Transpose[{balls, velocities}]] // Transpose;\n\t]];\n\n\tWith[{\n\t\tsummary = {BoxForm`SummaryItem[{"State: ", s["State"]}]},\n\t\ticon = Graphics[{\n\t\t\tPointSize[0.03], Point[balls // Offload],\n\t\t\tAnimationFrameListener[balls // Offload, "Event"->animateEvent]\n\t\t}, \n\t\t\tPlotRange->{{-1,1}, {-1,1}}, \n\t\t\tTransitionType->None, \n\t\t\tImageSize->{50,50}, \n\t\t\tAspectRatio->1, \n\t\t\tImagePadding->None\n\t\t]\n\t},\n\t\tBoxForm`ArrangeSummaryBox[\n\t\t\tStateMachine,\n\t\t\ts,\n\t\t\ticon,\n\t\t\tsummary,\n            Null\n\t\t]\n\t]\n] \n'})}),"\n",(0,a.jsx)(t.p,{children:"Then let us see the result"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mathematica",children:'machine = StateMachine["State"->2]\n'})}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{src:n(65888).c+"",width:"800",height:"142"})}),"\n",(0,a.jsx)(t.p,{children:"If you want to see an optimized version, please, follow below"}),"\n",(0,a.jsx)(t.h3,{id:"optimized-version",children:"Optimized version"}),"\n",(0,a.jsxs)(t.p,{children:["Since it relies on ",(0,a.jsx)(t.a,{href:"/frontend/Reference/Graphics/AnimationFrameListener",children:"AnimationFrameListener"}),", it runs as fast as possible, which might be an issue for a lot of those objects on the screen."]}),"\n",(0,a.jsxs)(t.p,{children:["Just using ",(0,a.jsx)(t.a,{href:"/frontend/Reference/Misc/Async#%60SetInterval%60",children:(0,a.jsx)(t.code,{children:"SetInterval"})})," is not an options, since we need something to remove this timer, when there is no visible widgets."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"/frontend/Reference/Decorations/ArrangeSummaryBox",children:"ArrangeSummaryBox"})," is a wrapper over ",(0,a.jsx)(t.a,{href:"/frontend/Reference/Decorations/ViewBox",children:"ViewBox"}),", which has an event generator. A user can attach ",(0,a.jsx)(t.a,{href:"/frontend/Reference/Misc/Events#%60EventHandler%60",children:(0,a.jsx)(t.code,{children:"EventHandler"})})," to it and check if a widget was destroyed or created."]})}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-mathematica",children:'StateMachine /: MakeBoxes[s: StateMachine[symbol_Symbol?AssociationQ], form: (StandardForm | TraditionalForm)] := Module[{\n\tballs = RandomReal[{-1,1}, {s["State"],2}],\n\tvelocities = RandomReal[{-1,1}, {s["State"],2}],\n\ttask, instances = 0,\n    calculate,\n    controller = CreateUUID[],\n    construct,\n    notebook = EvaluationNotebook[],\n    destruct\n},\n\n\t(* if someone closed notebook *)\n    With[{cloned = EventClone[notebook]},\n      EventHandler[cloned, {"OnClose" -> Function[Null,\n        destruct;\n      ]}];\n    ];\n\n    construct := With[{},\n      task = SetInterval[calculate[], 100];\n    ];\n\n    destruct := With[{},\n      TaskRemove[task];\n    ];\n\n\tEventHandler[controller, {\n\t\t"Mounted" -> Function[Null,\n\n          If[instances === 0, construct];\n          instances = instances + 1;\n\n\t\t],\n\t\t\n\t\t"Destroy" -> Function[Null, \n\t\t\tinstances = instances - 1;\n\t\t\t\n\t        (* unsubscribe when there is no instances *)\n\t        If[instances === 0, destruct];\n          ]\n\t}];\n\n\tcalculate = Function[Null,\n\t  {balls, velocities} = Map[With[{\n\t    v = {If[Abs[#[[1,1]]] >= 1, -1, 1], If[Abs[#[[1, 2]]] >= 1, -1, 1]} #[[2]], \n\t    p = #[[1]]\n\t  },\n\t    {p + 0.2 v, v}\n\t  ]&, Transpose[{balls, velocities}]] // Transpose;\n\t];\n\n\tWith[{\n\t\tsummary = {BoxForm`SummaryItem[{"State: ", s["State"]}]},\n\t\ticon = Graphics[{\n\t\t\tPointSize[0.03], Point[balls // Offload]\n\t\t}, \n\t\t\tPlotRange->{{-1,1}, {-1,1}}, \n\t\t\tTransitionType->"Linear",\n            TransitionDuration -> 100,\n\t\t\tImageSize->{50,50}, \n\t\t\tAspectRatio->1, \n\t\t\tImagePadding->None\n\t\t]\n\t},\n\t\tBoxForm`ArrangeSummaryBox[\n\t\t\tStateMachine,\n\t\t\ts,\n\t\t\ticon,\n\t\t\tsummary,\n            Null,\n\n            "Event" -> controller\n\t\t]\n\t]\n] \n'})}),"\n",(0,a.jsx)(t.p,{children:"The following changes were made"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/frontend/Reference/Misc/Async#%60SetInterval%60",children:(0,a.jsx)(t.code,{children:"SetInterval"})})," drives the calculations with ",(0,a.jsx)(t.code,{children:"100 ms"})," interval"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.a,{href:"/frontend/Reference/Graphics/TransitionDuration",children:"TransitionDuration"})," interpolates the results with ",(0,a.jsx)(t.code,{children:"100 ms"})," window"]}),"\n",(0,a.jsxs)(t.li,{children:["We listen an events of creation and destruction of widgets using ",(0,a.jsx)(t.code,{children:'"Event"'})," option of ",(0,a.jsx)(t.a,{href:"/frontend/Reference/Decorations/ArrangeSummaryBox",children:"ArrangeSummaryBox"})]}),"\n",(0,a.jsx)(t.li,{children:"We remove timers, when there is no visible instances on the screen"}),"\n",(0,a.jsx)(t.li,{children:"We remove timers, when the connection to the notebook was lost (a user closed notebook)"}),"\n"]})]})}function m(e={}){const{wrapper:t}={...(0,i.M)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},47732:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/AniBox video to gif-9bb5493bfdea0447f08ba2013d268b87.gif"},65888:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/BallsDecoration video-7a67dac41ddb8050aebd2f889cf474c0.gif"},44488:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/Screenshot 2024-05-01 at 19.29.27-440a92640b5fa43863359fa7c84168d0.png"},2124:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/Screenshot 2024-05-01 at 19.31.40-b06f2b6f16bbbd50804215c90ccf969f.png"},55296:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/Screenshot 2024-05-01 at 19.50.18-5163eff743b9e1b4aa812bfb9e2fdf6d.png"},79244:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/Screenshot 2024-05-01 at 19.51.05-8e477bfd7c37d1471fc34d644cfa315d.png"},6040:(e,t,n)=>{n.d(t,{c:()=>a});const a=n.p+"assets/images/Screenshot 2024-05-01 at 19.55.18-5d0eefdc8cbf6c1a21b146394ba33042.png"},4552:(e,t,n)=>{n.d(t,{I:()=>r,M:()=>o});var a=n(11504);const i={},s=a.createContext(i);function o(e){const t=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(s.Provider,{value:t},e.children)}}}]);