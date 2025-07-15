(()=>{var t={};t.id=670,t.ids=[670],t.modules={7849:t=>{"use strict";t.exports=require("next/dist/client/components/action-async-storage.external")},2934:t=>{"use strict";t.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:t=>{"use strict";t.exports=require("next/dist/client/components/request-async-storage.external")},4580:t=>{"use strict";t.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:t=>{"use strict";t.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:t=>{"use strict";t.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:t=>{"use strict";t.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:t=>{"use strict";t.exports=require("path")},2781:t=>{"use strict";t.exports=require("stream")},7310:t=>{"use strict";t.exports=require("url")},1628:(t,e,i)=>{"use strict";i.r(e),i.d(e,{GlobalError:()=>n.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>h,tree:()=>d});var r=i(482),a=i(9108),s=i(2563),n=i.n(s),o=i(8300),l={};for(let t in o)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(t)&&(l[t]=()=>o[t]);i.d(e,l);let d=["",{children:["start",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,6266)),"/Users/anfgk/Desktop/curonverse/src/app/start/page.tsx"]}]},{metadata:{icon:[async t=>(await Promise.resolve().then(i.bind(i,3881))).default(t)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,2154)),"/Users/anfgk/Desktop/curonverse/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async t=>(await Promise.resolve().then(i.bind(i,3881))).default(t)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/anfgk/Desktop/curonverse/src/app/start/page.tsx"],p="/start/page",u={require:i,loadChunk:()=>Promise.resolve()},h=new r.AppPageRouteModule({definition:{kind:a.x.APP_PAGE,page:"/start/page",pathname:"/start",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9541:(t,e,i)=>{Promise.resolve().then(i.t.bind(i,2583,23)),Promise.resolve().then(i.t.bind(i,6840,23)),Promise.resolve().then(i.t.bind(i,8771,23)),Promise.resolve().then(i.t.bind(i,3225,23)),Promise.resolve().then(i.t.bind(i,9295,23)),Promise.resolve().then(i.t.bind(i,3982,23))},84:(t,e,i)=>{Promise.resolve().then(i.bind(i,4257))},352:(t,e,i)=>{Promise.resolve().then(i.bind(i,1433))},1433:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>S});var r=i(5344);i(3729);var a=i(8428),s=i(9032),n=i(8553);let o=s.ZP.div`
  display: flex;
  flex-direction: column;
  font-size: 12px;
  padding-top: 12px;
  margin-left: 20px;
  font-weight: bold;
  gap: 4px;
`,l=({firsttext:t,secondtext:e})=>(0,r.jsxs)(o,{children:[r.jsx("div",{children:t}),r.jsx("div",{children:e})]}),d=s.ZP.button`
  width: 335px;
  height: 56px;
  background: #cb59ff;
  border: none;
  border-radius: 10px;
  color: white;
  font-size: 22px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  font-family: "Pretendard";
  margin-bottom: 32px;
  margin-left: 20px;
  &:hover {
    opacity: 0.9;
  }

  &:disabled {
    background-color: #a347cc;
    cursor: not-allowed;
    opacity: 0.7;
  }
`,c=({onClick:t,children:e,disabled:i=!1})=>r.jsx(d,{onClick:t,disabled:i,children:e});var p=i(9345),u=i(9410);let h=s.F4`
  0% {
    transform: translate(-80%, -80%);
  }
  50% {
    transform: translate(-85%, -85%);
  }
  100% {
    transform: translate(-80%, -80%);
  }
`,g=s.F4`
  0% {
    transform: translate(-80%, -80%);
  }
  50% {
    transform: translate(-75%, -75%);
  }
  100% {
    transform: translate(-80%, -80%);
  }
`,x=s.ZP.div`
  width: 100%;
  height: 500px;
  position: relative;
  margin-top: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
`,f=s.ZP.div`
  width: 320px;
  height: 320px;
  position: absolute;
  top: 45%;
  left: 50%;
  transform: translate(-50%, -50%);
  background: radial-gradient(
    circle at center,
    rgba(147, 112, 219, 0.3) 30%,
    rgba(147, 112, 219, 0.1) 50%,
    rgba(147, 112, 219, 0) 70%
  );
  filter: blur(20px);
  z-index: 1;
`,m=(0,s.ZP)(({isLeft:t,delay:e,top:i,left:a,right:s,...n})=>r.jsx(u.default,{...n}))`
  position: absolute;
  width: 35px !important;
  height: 38px !important;
  top: ${t=>t.top};
  left: ${t=>t.left||"auto"};
  right: ${t=>t.right||"auto"};
  animation: ${t=>t.isLeft?h:g} 4s ease-in-out infinite;
  animation-delay: ${t=>t.delay||0}s;
  object-fit: contain;
  z-index: 1;
  opacity: 0.8;
  transition: all 0.3s ease;
  will-change: transform;
`,v=(0,s.ZP)(u.default)`
  width: 280px !important;
  height: 280px !important;
  position: absolute;
  top: 60%;
  left: 73%;
  transform: translate(-50%, -50%);
  animation: ${h} 6s ease-in-out infinite;
  object-fit: contain;
  z-index: 2;
  will-change: transform;
`,b=(0,s.ZP)(u.default)`
  width: 200px !important;
  height: 50px !important;
  position: absolute;
  bottom: 140px;
  left: 50%;
  transform: translateX(-50%);

  object-fit: contain;
  z-index: 1;
  will-change: transform;
`,y=(0,s.ZP)(u.default)`
  width: 80px !important;
  height: 80px !important;
  position: absolute;
  top: 60%;
  right: -10%;
  animation: ${h} 3s ease-in-out infinite;
  animation-delay: 1s;
  object-fit: contain;
  z-index: 1;
  will-change: transform;
`,w=()=>(0,r.jsxs)(x,{children:[r.jsx(f,{}),r.jsx(m,{src:"/images/star1.svg",alt:"star1",width:40,height:40,top:"30%",left:"90%",isLeft:!0,loading:"lazy"}),r.jsx(m,{src:"/images/star2.svg",alt:"star2",width:20,height:20,top:"25%",right:"20%",isLeft:!1,delay:.5,loading:"lazy"}),r.jsx(m,{src:"/images/star3.svg",alt:"star3",width:35,height:38,top:"35%",right:"80%",isLeft:!0,delay:1,loading:"lazy"}),r.jsx(m,{src:"/images/star4.svg",alt:"star4",width:60,height:60,top:"40%",left:"20%",isLeft:!0,delay:1,loading:"lazy"}),r.jsx(m,{src:"/images/star5.svg",alt:"star5",width:35,height:38,top:"60%",right:"75%",isLeft:!0,delay:1,loading:"lazy"}),r.jsx(m,{src:"/images/star6.svg",alt:"star5",width:35,height:38,top:"25%",right:"60%",isLeft:!0,delay:1,loading:"lazy"}),r.jsx(v,{src:"/images/main.svg",alt:"main",width:280,height:280,priority:!0}),r.jsx(y,{src:"/images/rocket.svg",alt:"rocket",width:90,height:90,loading:"lazy"}),r.jsx(b,{src:"/images/maintext.svg",alt:"maintext",width:200,height:50,priority:!0})]});var j=i(5622),P=i(4837);let E=s.ZP.div`
  width: 375px;
  height: 812px;
  background: #0f1227;
  margin: 0 auto;
`,_=s.ZP.div`
  width: 100%;
  height: 100%;
  position: relative;
`;function S(){let t=(0,a.useRouter)();return(0,P.l)({pageType:"OPEN_TEASER",getUserId:()=>{let t=localStorage.getItem("userId");return t?parseInt(t):null}}),(0,r.jsxs)(E,{children:[r.jsx(p.Z,{}),(0,r.jsxs)(_,{children:[r.jsx(j.Z,{text:"어서오세요.",variant:"subtitle"}),r.jsx(n.Z,{mainText:"나의 감정은 현재",highlightText:"어떤 행성",subText:"에 머물고 있을까요?"}),r.jsx(l,{firsttext:"감정을 담는 그릇, 나만의 작은감정",secondtext:"우주 탐색을 시작해보세요."}),r.jsx(w,{}),r.jsx(c,{onClick:()=>{t.push("/onboarding")},children:"탐험 시작하기"})]})]})}},9345:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var r=i(5344),a=i(3729),s=i(9032);let n=s.F4`
  0% { opacity: 0; }
  50% { opacity: 1; }
  80% { opacity: 0.5; }
`,o=s.ZP.div`
  position: absolute;
  width: ${t=>t.size}px;
  height: ${t=>t.size}px;
  background: #f0e0fbb5;
  border-radius: 50%;
  top: ${t=>t.top}%;
  left: ${t=>t.left}%;
  animation: ${n} 2s ease-in-out infinite;
  animation-delay: ${t=>t.delay}s;
`,l=()=>{let[t,e]=(0,a.useState)([]);return(0,a.useEffect)(()=>{e(Array.from({length:250},()=>({delay:3*Math.random(),top:100*Math.random(),left:100*Math.random(),size:2*Math.random()+1})))},[]),r.jsx(r.Fragment,{children:t.map((t,e)=>r.jsx(o,{delay:t.delay,top:t.top,left:t.left,size:t.size},e))})}},5622:(t,e,i)=>{"use strict";i.d(e,{Z:()=>n});var r=i(5344),a=i(9032);let s=(0,a.ZP)(({center:t,variant:e,...i})=>r.jsx("div",{...i}))`
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  margin-top: ${t=>"loading"===t.variant?"13px":"44px"};
  margin-left: ${t=>t.center?"0":"20px"};
  display: flex;
  flex-direction: column;
  text-align: ${t=>t.center?"center":"left"};
`,n=({text:t,variant:e="subtitle",center:i=!1})=>r.jsx(s,{variant:e,center:i,children:t})},8553:(t,e,i)=>{"use strict";i.d(e,{Z:()=>l});var r=i(5344);i(3729);var a=i(9032);let s=a.ZP.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  margin-left: 20px;
  font-size: 24px;
`,n=a.ZP.div`
  font-weight: 700;
`,o=a.ZP.div`
  font-weight: 400;
  span {
    font-weight: 700;
  }
`,l=({mainText:t,subText:e,highlightText:i})=>(0,r.jsxs)(s,{children:[r.jsx(n,{children:t}),(0,r.jsxs)(o,{children:[r.jsx("span",{children:i}),e]})]})},4837:(t,e,i)=>{"use strict";i.d(e,{l:()=>s});var r=i(3729);let a={MBTI_RESULT:1,RHYTHM_RESULT:2,TEMPERATURE_RESULT:3,POEM_SELECT:4,ROUTINE_RECOMMENDATION:5,OPEN_TEASER:6,USER_PROFILE:7,TEST_QUESTIONS:8};function s({pageType:t,getUserId:e}){(0,r.useRef)(null),(0,r.useEffect)(()=>{let i;let r=((i=localStorage.getItem("uuid"))||(i=crypto.randomUUID(),localStorage.setItem("uuid",i)),i),s=e?.()??null,n=a[t],o=Date.now(),l=!1,d=()=>{if(l)return;l=!0;let t=Math.max(1,Math.floor((Date.now()-o)/1e3));if(t<2)return;let e=new Blob([JSON.stringify({userId:s,uuid:r,typeId:n,duration:t})],{type:"application/json"});navigator.sendBeacon("/api/page-visit-log",e)};return window.addEventListener("beforeunload",d),()=>{d(),window.removeEventListener("beforeunload",d)}},[t,e])}},4257:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>o});var r=i(5344),a=i(3729),s=i(8428),n=i(9032);function o({children:t}){let[e]=(0,a.useState)(()=>new n.qH);return(0,s.useServerInsertedHTML)(()=>{let t=e.getStyleElement();return e.instance.clearTag(),r.jsx(r.Fragment,{children:t})}),r.jsx(n.LC,{sheet:e.instance,children:t})}},2154:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>c,metadata:()=>l,viewport:()=>d});var r=i(5036);i(5023);let a=(0,i(6843).createProxy)(String.raw`/Users/anfgk/Desktop/curonverse/src/lib/registry.tsx`),{__esModule:s,$$typeof:n}=a,o=a.default,l={title:"",description:""},d={width:"device-width",initialScale:1,maximumScale:1,userScalable:!1,themeColor:"#0F1227"};function c({children:t}){return r.jsx("html",{lang:"ko",children:r.jsx("body",{className:"antialiased",children:r.jsx(o,{children:r.jsx("main",{children:t})})})})}},6266:(t,e,i)=>{"use strict";i.r(e),i.d(e,{$$typeof:()=>s,__esModule:()=>a,default:()=>n});let r=(0,i(6843).createProxy)(String.raw`/Users/anfgk/Desktop/curonverse/src/app/start/page.tsx`),{__esModule:a,$$typeof:s}=r,n=r.default},3881:(t,e,i)=>{"use strict";i.r(e),i.d(e,{default:()=>a});var r=i(337);let a=t=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",t.params,"favicon.ico")+""}]},5023:()=>{}};var e=require("../../webpack-runtime.js");e.C(t);var i=t=>e(e.s=t),r=e.X(0,[638,678,337,410],()=>i(1628));module.exports=r})();