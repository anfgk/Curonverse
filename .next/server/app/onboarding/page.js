(()=>{var e={};e.id=461,e.ids=[461],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},5975:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>s.a,__next_app__:()=>x,originalPathname:()=>p,pages:()=>c,routeModule:()=>u,tree:()=>d});var r=i(482),n=i(9108),a=i(2563),s=i.n(a),o=i(8300),l={};for(let e in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>o[e]);i.d(t,l);let d=["",{children:["onboarding",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,520)),"/Users/anfgk/Desktop/curonverse/src/app/onboarding/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,2154)),"/Users/anfgk/Desktop/curonverse/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/anfgk/Desktop/curonverse/src/app/onboarding/page.tsx"],p="/onboarding/page",x={require:i,loadChunk:()=>Promise.resolve()},u=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/onboarding/page",pathname:"/onboarding",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9541:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2583,23)),Promise.resolve().then(i.t.bind(i,6840,23)),Promise.resolve().then(i.t.bind(i,8771,23)),Promise.resolve().then(i.t.bind(i,3225,23)),Promise.resolve().then(i.t.bind(i,9295,23)),Promise.resolve().then(i.t.bind(i,3982,23))},84:(e,t,i)=>{Promise.resolve().then(i.bind(i,4257))},3172:(e,t,i)=>{Promise.resolve().then(i.bind(i,9938))},9938:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c});var r=i(5344),n=i(3729),a=i(8428),s=i(5019),o=i(5622),l=i(8553),d=i(9703);function c(){let e=(0,a.useRouter)();return(0,n.useEffect)(()=>{let t=setTimeout(()=>{e.push("/profile")},1e3);return()=>clearTimeout(t)},[e]),(0,r.jsxs)(s.Z,{rocketImageSrc:"/images/rocket.svg",children:[r.jsx(o.Z,{text:"잠시만 기다려주세요.",variant:"subtitle"}),r.jsx(l.Z,{mainText:"감정 로켓 탑승권을",highlightText:"준비",subText:"하고 있어요."}),r.jsx(d.Z,{text:"마음을 가다듬고,",variant:"loading",center:!0}),r.jsx(d.Z,{text:"내가 지닌 다양한 감정들을 떠올려보세요.",variant:"loading",center:!0})]})}},9345:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var r=i(5344),n=i(3729),a=i(9032);let s=a.F4`
  0% { opacity: 0; }
  50% { opacity: 1; }
  80% { opacity: 0.5; }
`,o=a.ZP.div`
  position: absolute;
  width: ${e=>e.size}px;
  height: ${e=>e.size}px;
  background: #f0e0fbb5;
  border-radius: 50%;
  top: ${e=>e.top}%;
  left: ${e=>e.left}%;
  animation: ${s} 2s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
`,l=()=>{let[e,t]=(0,n.useState)([]);return(0,n.useEffect)(()=>{t(Array.from({length:250},()=>({delay:3*Math.random(),top:100*Math.random(),left:100*Math.random(),size:2*Math.random()+1})))},[]),r.jsx(r.Fragment,{children:e.map((e,t)=>r.jsx(o,{delay:e.delay,top:e.top,left:e.left,size:e.size},t))})}},5622:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var r=i(5344),n=i(9032);let a=(0,n.ZP)(({center:e,variant:t,...i})=>r.jsx("div",{...i}))`
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  margin-top: ${e=>"loading"===e.variant?"13px":"44px"};
  margin-left: ${e=>e.center?"0":"20px"};
  display: flex;
  flex-direction: column;
  text-align: ${e=>e.center?"center":"left"};
`,s=({text:e,variant:t="subtitle",center:i=!1})=>r.jsx(a,{variant:t,center:i,children:e})},9703:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var r=i(5344),n=i(9032);let a=n.ZP.div.withConfig({shouldForwardProp:e=>"center"!==e&&"variant"!==e})`
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  margin-top: ${e=>"loading"===e.variant?"13px":"44px"};
  margin-left: ${e=>e.center?"0":"20px"};
  display: flex;
  flex-direction: column;
  text-align: ${e=>e.center?"center":"left"};
`,s=({text:e,variant:t="subtitle",center:i=!1})=>r.jsx(a,{variant:t,center:i,children:e})},8553:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var r=i(5344);i(3729);var n=i(9032);let a=n.ZP.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  margin-left: 20px;
  font-size: 24px;
`,s=n.ZP.div`
  font-weight: 700;
`,o=n.ZP.div`
  font-weight: 400;
  span {
    font-weight: 700;
  }
`,l=({mainText:e,subText:t,highlightText:i})=>(0,r.jsxs)(a,{children:[r.jsx(s,{children:e}),(0,r.jsxs)(o,{children:[r.jsx("span",{children:i}),t]})]})},5019:(e,t,i)=>{"use strict";i.d(t,{Z:()=>y});var r=i(5344),n=i(3729),a=i.n(n),s=i(9032),o=i(9410);let l=s.F4`
  0% { opacity: 0; }
  50% { opacity: 1; }
  80% { opacity: 0.5; }
`,d=s.ZP.div`
  width: 375px;
  height: 812px;
  background: #0f1227;
  // position: fixed;
  overflow: scroll;
  margin: 0 auto;

  /* 모바일에서 콘텐츠가 잘리지 않도록 오버플로우만 처리 */
  @media (max-width: 375px) {
    width: 100vw;
  }

  @media (max-height: 812px) {
    height: 100vh;
  }
`,c=s.ZP.div`
  width: 100%;
  height: 100%;
  position: relative;
  display: flex;
  flex-direction: column;
`,p=(0,s.ZP)(o.default)`
  margin-top: 100px;
  width: 86px !important;
  height: 86px !important;
  animation: ${l} 2s ease-in-out infinite;
  display: block;
  margin-left: auto;
  margin-right: auto;

  /* 모바일에서 로켓 이미지 크기 조정 */
  @media (max-width: 375px) {
    margin-top: 60px;
    width: 70px !important;
    height: 70px !important;
  }

  @media (max-height: 812px) {
    margin-top: 60px;
    width: 70px !important;
    height: 70px !important;
  }
`,x=s.ZP.div`
  display: flex;
  flex-direction: column;
`;var u=i(9345);let m=s.F4`
  0%, 80%, 100% { 
    transform: scale(0) translateZ(0);
  } 
  40% { 
    transform: scale(1) translateZ(0);
  }
`,h=s.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 40px;
  gap: 8px;
  will-change: transform;
`,g=s.ZP.div`
  width: 12px;
  height: 12px;
  background-color: ${e=>e.color};
  opacity: ${e=>e.opacity};
  border-radius: 50%;
  display: inline-block;
  animation: ${m} 1.4s ease-in-out infinite;
  animation-delay: ${e=>e.delay}s;
  will-change: transform;
  transform: translateZ(0);
`,f=(0,n.memo)(()=>r.jsx(h,{children:[{color:"#CB59FF",opacity:.5},{color:"#CB59FF",opacity:.6},{color:"#CB59FF",opacity:.7},{color:"#CB59FF",opacity:.8},{color:"#CB59FF",opacity:1}].map((e,t)=>r.jsx(g,{delay:.2*t,color:e.color,opacity:e.opacity},t))}));f.displayName="LoadingSpinner";var v=i(9703);let y=({children:e,showRocket:t=!0,showSpinner:i=!0,rocketImageSrc:n="/images/rocket.svg",showTextContainer:s=!0,subText:o,title:l})=>(0,r.jsxs)(d,{children:[r.jsx(u.Z,{}),(0,r.jsxs)(c,{children:[s&&e?r.jsx(r.Fragment,{children:a().Children.map(e,e=>a().isValidElement(e)&&e.type!==v.Z?e:null)}):e,o,l,t&&r.jsx(p,{src:n,alt:"Rocket",width:86,height:86,priority:!0}),r.jsx(x,{children:a().Children.map(e,e=>a().isValidElement(e)&&e.type===v.Z?e:null)}),i&&r.jsx(f,{})]})]})},4257:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>o});var r=i(5344),n=i(3729),a=i(8428),s=i(9032);function o({children:e}){let[t]=(0,n.useState)(()=>new s.qH);return(0,a.useServerInsertedHTML)(()=>{let e=t.getStyleElement();return t.instance.clearTag(),r.jsx(r.Fragment,{children:e})}),r.jsx(s.LC,{sheet:t.instance,children:e})}},2154:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c,metadata:()=>l,viewport:()=>d});var r=i(5036);i(5023);let n=(0,i(6843).createProxy)(String.raw`/Users/anfgk/Desktop/curonverse/src/lib/registry.tsx`),{__esModule:a,$$typeof:s}=n,o=n.default,l={title:"",description:""},d={width:"device-width",initialScale:1,maximumScale:1,userScalable:!1,themeColor:"#0F1227"};function c({children:e}){return r.jsx("html",{lang:"ko",children:r.jsx("body",{className:"antialiased",children:r.jsx(o,{children:r.jsx("main",{children:e})})})})}},520:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>a,__esModule:()=>n,default:()=>s});let r=(0,i(6843).createProxy)(String.raw`/Users/anfgk/Desktop/curonverse/src/app/onboarding/page.tsx`),{__esModule:n,$$typeof:a}=r,s=r.default},3881:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var r=i(337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[638,678,337,410],()=>i(5975));module.exports=r})();