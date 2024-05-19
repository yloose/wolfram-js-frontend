"use strict";(self.webpackChunkwlx_docs=self.webpackChunkwlx_docs||[]).push([[1880],{16908:(e,n,i)=>{i.r(n),i.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>o,toc:()=>l});var s=i(17624),t=i(4552);const r={slug:"rtx-intro",title:"Realtime path-tracing",authors:"jerryi",tags:["frontend","graphics"],enableComments:!0},a=void 0,o={permalink:"/blog/rtx-intro",source:"@site/blog/2023-07-20-rtx/index.md",title:"Realtime path-tracing",description:"There is nothing more exciting in programming than designing a graphics application. Thankfully, there is one person on Github Garrett Johnson, who implemented a path-tracing algorithm on top of the well-known THREE.js graphics engine. Moreover, it fully supports features from the original library and can be anytime flipped as a main renderer.",date:"2023-07-20T00:00:00.000Z",tags:[{label:"frontend",permalink:"/blog/tags/frontend"},{label:"graphics",permalink:"/blog/tags/graphics"}],readingTime:2.05,hasTruncateMarker:!0,authors:[{name:"Kirill Vasin",title:"Maintainer",url:"https://github.com/JerryI",imageURL:"https://avatars.githubusercontent.com/u/4111822?s=48&v=4",key:"jerryi"}],frontMatter:{slug:"rtx-intro",title:"Realtime path-tracing",authors:"jerryi",tags:["frontend","graphics"],enableComments:!0},unlisted:!1,prevItem:{title:"Image and Raster were implemented!",permalink:"/blog/imageraster"}},c={authorsImageUrls:[void 0]},l=[{value:"Metallic maze",id:"metallic-maze",level:3},{value:"Torus Knot",id:"torus-knot",level:3},{value:"Limitations",id:"limitations",level:2}];function h(e){const n={a:"a",code:"code",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,t.M)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(53820).c+"",width:"730",height:"581"})}),"\n",(0,s.jsxs)(n.p,{children:["There is nothing more exciting in programming than designing a graphics application. Thankfully, there is one person on Github ",(0,s.jsx)(n.a,{href:"https://github.com/gkjohnson",children:"Garrett Johnson"}),", who implemented a path-tracing algorithm on top of the well-known ",(0,s.jsx)(n.a,{href:"https://threejs.org",children:"THREE.js"})," graphics engine. Moreover, it fully supports features from the original library and can be anytime flipped as a main renderer."]}),"\n",(0,s.jsxs)(n.p,{children:["I hooked up his ",(0,s.jsx)(n.a,{href:"https://github.com/gkjohnson/three-gpu-pathtracer",children:"library"})," to works as a secondary engine for ",(0,s.jsx)(n.code,{children:"Graphics3D"})," function presented in ",(0,s.jsx)(n.a,{href:"https://github.com/JerryI/Mathematica-ThreeJS-graphics-engine",children:"wljs-graphics3d-threejs"})," library. Just pass an option"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'Graphics3D[%, "RTX"->True]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["And it will bake a realtime photorealistic image. It also supports all properties used in traditional rendering, i.e. ",(0,s.jsx)(n.code,{children:"Emissive[]"}),", ",(0,s.jsx)(n.code,{children:"Metallness[]"}),", HDRI map and many more!"]}),"\n",(0,s.jsx)(n.p,{children:"Some classical examples from Wolfram Mathematica"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(37031).c+"",width:"600",height:"370"})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(52644).c+"",width:"600",height:"370"})}),"\n",(0,s.jsxs)(n.p,{children:["You might recognize those examples from ",(0,s.jsx)(n.code,{children:"Graphics3D"})," official documentation page. Here is some other neat pictures produced using the following code"]}),"\n",(0,s.jsx)(n.h3,{id:"metallic-maze",children:"Metallic maze"}),"\n",(0,s.jsxs)(n.p,{children:["This was taken from the discussion ",(0,s.jsx)(n.a,{href:"https://mathematica.stackexchange.com/questions/191047/making-holes-from-maze-generated-graphics3d",children:"here"}),". The maze is made from many polygons, where for the surface ",(0,s.jsx)(n.code,{children:"Metallness[1], Roughness[0]"})," were applied. Since it provides perfect reflection, the overall time for rendering (when the noise has gone) is relatively low."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'showmaze = Uncompress[FromCharacterCode @@ ImageData[Import["https://i.stack.imgur.com/XVJcP.png"], "Byte"]];\nprims = CapsuleShape @@@ Cases[showmaze, _Cylinder, Infinity];\nprims = prims /. {{5., 5., 5.} -> {5.5, 5., 5.}, {1., 1., 1.} -> {1., 0.5, 1.}};\nims = RegionImage[#, {{0.3`, 5.7`}, {0.3`, 5.7`}, {0.3`, 5.7`}}, RasterSize -> 100] & /@ prims;\nim = ImageApply[Max, ims];\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Then, the generated mesh is lit by ",(0,s.jsx)(n.code,{children:"lighting"})," arrays, which contain randomly distributed glowing spheres"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'lighting = Table[{Emissive[RGBColor@@(RandomReal[{0,1}, 3]), 2], Sphere[RandomReal[{1,92}, 3], RandomReal[{1,7}]]}, {i, 1, 30}];\nShow[bmr = ImageMesh[im, Method -> "DualMarchingCubes"], PlotRange -> {{0, 91}, {1, 92}, {0, 91}}][[1]];\nGraphics3D[{lighting, Metalness[0], Roughness[0], %},  "Lighting"->None, ViewProjection->"Perspective", "RTX"->True]\n'})}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(75472).c+"",width:"600",height:"370"})}),"\n",(0,s.jsxs)(n.p,{children:["Despite the complicity of the scene, ",(0,s.jsx)(n.strong,{children:"it renders in real time"})," with an acceptable amount of noise."]}),"\n",(0,s.jsx)(n.h3,{id:"torus-knot",children:"Torus Knot"}),"\n",(0,s.jsxs)(n.p,{children:["This is rather classical example, but uses a glossy surface using ",(0,s.jsx)(n.code,{children:"Roughness[0]"})," lit by two glowing spheres"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-mathematica",children:'KnotData[{"TorusKnot", {3, 5}}][[1]];\nGraphics3D[{{Emissive[Red, 5], Sphere[{0,0,-0.1}, 0.14]}, {Roughness[0],Cyan, %}, {Emissive[RGBColor[{1,1,1}], 5], Sphere[{0,0,0.4}, 0.1]}}, Lighting->None, "RTX"->True]\n'})}),"\n",(0,s.jsx)(n.p,{children:"Here is the result"}),"\n",(0,s.jsx)(n.p,{children:(0,s.jsx)(n.img,{src:i(2976).c+"",width:"600",height:"370"})}),"\n",(0,s.jsx)(n.p,{children:"Looks like a dream..."}),"\n",(0,s.jsx)(n.h2,{id:"limitations",children:"Limitations"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"The dynamic scenes now are not supported, but can be added in theory according to the documentation of the path-rendering library."}),"\n",(0,s.jsx)(n.li,{children:"Requires a dedicated GPU (actually with my Intel UHD integrated graphics it works, but demands an extremely long time to compile shaders to start rendering). However, iPhones, Androids can still handle not very complicated scenes."}),"\n",(0,s.jsx)(n.li,{children:"Safari crashes (Firefox, Chrome, Vivaldi work well)"}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,t.M)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(h,{...e})}):h(e)}},37031:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/IMG_0556-85b0becf695d73e2cfb946df25a41102.png"},53820:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/Screenshot from 2023-07-20 20-04-08-fc3a87dd292f56d7d94708fc81b520d5.png"},75472:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/screenshot(12)-0b834b34f1348e922e429e3a9fa1a24f.png"},2976:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/screenshot(13)-1edbfb5f7e18c746880b3c6208d21d64.png"},52644:(e,n,i)=>{i.d(n,{c:()=>s});const s=i.p+"assets/images/screenshot(8) 1-46ec294f409c46412b802914e2c73de5.png"},4552:(e,n,i)=>{i.d(n,{I:()=>o,M:()=>a});var s=i(11504);const t={},r=s.createContext(t);function a(e){const n=s.useContext(r);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(t):e.components||t:a(e.components),s.createElement(r.Provider,{value:n},e.children)}}}]);