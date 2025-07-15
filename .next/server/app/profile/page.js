(()=>{var e={};e.id=178,e.ids=[178],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},3928:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>s.a,__next_app__:()=>u,originalPathname:()=>p,pages:()=>c,routeModule:()=>x,tree:()=>d});var r=i(482),n=i(9108),o=i(2563),s=i.n(o),a=i(8300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);i.d(t,l);let d=["",{children:["profile",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,5648)),"/Users/anfgk/Desktop/curonverse/src/app/profile/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,2154)),"/Users/anfgk/Desktop/curonverse/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/anfgk/Desktop/curonverse/src/app/profile/page.tsx"],p="/profile/page",u={require:i,loadChunk:()=>Promise.resolve()},x=new r.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/profile/page",pathname:"/profile",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},9541:(e,t,i)=>{Promise.resolve().then(i.t.bind(i,2583,23)),Promise.resolve().then(i.t.bind(i,6840,23)),Promise.resolve().then(i.t.bind(i,8771,23)),Promise.resolve().then(i.t.bind(i,3225,23)),Promise.resolve().then(i.t.bind(i,9295,23)),Promise.resolve().then(i.t.bind(i,3982,23))},84:(e,t,i)=>{Promise.resolve().then(i.bind(i,4257))},8534:(e,t,i)=>{Promise.resolve().then(i.bind(i,3720))},3720:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>q});var r=i(5344),n=i(9032),o=i(8553),s=i(3729),a=i(9868);let l=n.ZP.div`
  position: relative;
  width: 334px;
  margin: 12px 20px;
`,d=n.ZP.input`
  width: 100%;
  height: 56px;
  border-radius: 10px;
  background: #4b4b4b;
  border: none;
  color: #ffffff;
  font-size: 16px;
  padding: 0 40px 0 12px;
  font-weight: bold;
  &::placeholder {
    color: #b0b0b0;
  }

  &:focus {
    outline: 1px solid #cb59ff;
  }

  &[type="date"] {
    position: relative;
    color: transparent;

    &::-webkit-calendar-picker-indicator {
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      width: auto;
      height: auto;
      color: transparent;
      background: transparent;
      cursor: pointer;
      z-index: 2;
    }

    &::-webkit-datetime-edit,
    &::-webkit-datetime-edit-fields-wrapper,
    &::-webkit-datetime-edit-text,
    &::-webkit-datetime-edit-month-field,
    &::-webkit-datetime-edit-day-field,
    &::-webkit-datetime-edit-year-field {
      display: none;
      color: transparent;
      background: transparent;
    }

    &::-webkit-inner-spin-button,
    &::-webkit-clear-button {
      display: none;
      -webkit-appearance: none;
    }
  }
`,c=n.ZP.span.withConfig({shouldForwardProp:e=>"isPlaceholder"!==e})`
  position: absolute;
  left: 12px;
  top: 50%;
  transform: translateY(-50%);
  color: ${e=>e.isPlaceholder?"#b0b0b0":"#ffffff"};
  pointer-events: none;
  font-weight: bold;
  z-index: 1;
  font-size: 16px;
`,p=n.ZP.button`
  position: absolute;
  right: 12px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background: #fff;
  border: none;
  border-radius: 50%;
  padding: 0;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #cb59ff;
  z-index: 1;
`,u=n.ZP.div`
  display: flex;
  gap: 12px;
  margin: 12px 20px;
`,x=n.ZP.button.withConfig({shouldForwardProp:e=>"isPlaceholder"!==e&&"isSelected"!==e})`
  flex: 1;
  height: 56px;
  border-radius: 10px;
  color: ${e=>e.isPlaceholder?"#b0b0b0":"#ffffff"};
  background: ${e=>e.isSelected?"#CB59FF":"#4b4b4b"};
  border: none;
  font-size: 16px;
  font-weight: bold;
  cursor: pointer;
  transition: all 0.2s ease;

  &:hover {
    background: ${e=>e.isSelected?"#CB59FF":"#5b5b5b"};
  }
`,f=({placeholder:e="이름을 입력해주세요.",value:t,onChange:i,type:n="text",onFocus:o,onBlur:s})=>{if("gender"===n){let e=e=>{i({target:{value:e}})};return(0,r.jsxs)(u,{children:[r.jsx(x,{isSelected:"MALE"===t,isPlaceholder:!t,onClick:()=>e("MALE"),children:"남성"}),r.jsx(x,{isSelected:"FEMALE"===t,isPlaceholder:!t,onClick:()=>e("FEMALE"),children:"여성"})]})}return(0,r.jsxs)(l,{children:[r.jsx(d,{type:n,value:t,onChange:i,onFocus:o,onBlur:s,placeholder:"text"===n?e:void 0}),"date"===n&&r.jsx(c,{isPlaceholder:!t,children:t?(e=>{if(!e)return"";let t=new Date(e);return`${t.getFullYear()}년 ${t.getMonth()+1}월 ${t.getDate()}일`})(t):"생년월일을 입력해주세요."}),t&&"gender"!==n&&r.jsx(p,{onClick:()=>{i({target:{value:""}})},type:"button",children:r.jsx(a.q5L,{size:14})})]})},h=n.ZP.div`
  display: flex;
  flex-direction: column;
  margin-top: 25px;
  margin-left: 20px;
  font-size: 16px;
`,g=n.ZP.div`
  font-weight: bold;
`,b=({mainText:e})=>r.jsx(h,{children:r.jsx(g,{children:e})}),m=n.ZP.div.withConfig({shouldForwardProp:e=>"isFocused"!==e&&"anyFieldFocused"!==e})`
  position: relative;
  z-index: ${e=>e.$isFocused?2:1};
  transition: opacity 0.3s ease;
  opacity: ${e=>e.$anyFieldFocused?e.$isFocused?1:.5:1};
`,v=n.ZP.div`
  font-size: 12px;
  color: #b0b0b0;
  margin-top: 12px;
  margin-left: 20px;
`,w=({label:e,value:t,type:i="text",placeholder:n,helpText:o,isFocused:s,anyFieldFocused:a,onChange:l,onFocus:d,onBlur:c})=>(0,r.jsxs)(m,{$isFocused:s,$anyFieldFocused:a,children:[r.jsx(b,{mainText:e}),r.jsx(f,{type:i,value:t,onChange:l,onFocus:d,onBlur:c,placeholder:n}),o&&r.jsx(v,{children:o})]});var j=i(5622);let P=n.ZP.div`
  font-size: 12px;
  color: #b0b0b0;
  margin: 12px 20px 0;
`;function y(){return r.jsx(P,{children:"개인정보 수집 및 이용 동의 개인정보 수집 및 이용동의 목적: 쿠론버스 웹앱 진단 서비스 이용 및 데이터 수집을 통한 서비스 지속적인 개선 개인정보 수집 항목: 이름/ 생년월일 동의를 거부할 경우 진단 서비스의 이용이 어렵습니다."})}var F=i(1455),k=i(5217);let E=n.ZP.div`
  display: flex;
  flex-direction: column;
  jsustify-content: space-between;
  height: 100vh;
  position: relative;
`;function S({name:e,gender:t,birthDate:i,focusedField:n,isFormValid:s,handleChange:a,handleFocus:l,handleBlur:d,handleNextClick:c}){return(0,r.jsxs)(E,{children:[r.jsx(j.Z,{text:"프로필 설정",variant:"subtitle"}),r.jsx(o.Z,{mainText:"탑승권에 기입 될",highlightText:"프로필 정보를 입력",subText:"해주세요."}),r.jsx(w,{label:"이름",value:e,onChange:a("name"),onFocus:l("name"),onBlur:d,placeholder:"이름을 입력해주세요.",isFocused:"name"===n,anyFieldFocused:null!==n}),r.jsx(w,{label:"성별",value:t,type:"gender",onChange:a("gender"),onFocus:l("gender"),onBlur:d,isFocused:"gender"===n,anyFieldFocused:null!==n}),r.jsx(w,{label:"생년월일",value:i,type:"date",onChange:a("date"),onFocus:l("date"),onBlur:d,placeholder:"생년월일을 입력해주세요.",helpText:"생년월일은 정확한 감정 진단을 위해 사용돼요.",isFocused:"date"===n,anyFieldFocused:null!==n}),r.jsx(y,{}),r.jsx(F.Z,{children:r.jsx(k.Z,{onClick:c,disabled:!s,variant:"profile"})})]})}var Z=i(8428);let $={getProfile:()=>null,createUser:e=>null},_=n.ZP.div`
  width: 375px;
  height: 812px;
  background: #393939;
  position: relative;
  transition: all 0.3s ease;

  /* 모바일에서 콘텐츠가 잘리지 않도록 오버플로우만 처리 */
  @media (max-width: 360px) {
    width: 100vw;
    height: 100vh;
  }

  ${e=>e.$dimmed&&`
    &::after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background: rgba(0, 0, 0, 0.2);
      pointer-events: none;
    }
  `}
`,C=n.ZP.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100%;
`;function T(){let{name:e,gender:t,birthDate:i,focusedField:n,isFormValid:o,handleChange:a,handleFocus:l,handleBlur:d,handleNextClick:c}=function(){let e=(0,Z.useRouter)(),[t,i]=(0,s.useState)(""),[r,n]=(0,s.useState)(""),[o,a]=(0,s.useState)(""),[l,d]=(0,s.useState)(null),c=""!==t&&""!==r&&""!==o;return{name:t,gender:r,birthDate:o,focusedField:l,isFormValid:c,handleChange:e=>t=>{let r=t.target.value;"name"===e?i(r):"gender"===e?n(r):"date"===e&&a(r)},handleFocus:e=>()=>d(e),handleBlur:()=>d(null),handleNextClick:()=>{c&&($.createUser({name:t,gender:r,birthDate:o})?e.replace("/step"):alert("사용자 정보 저장에 실패했습니다."))}}}();return r.jsx(_,{$dimmed:null!==n,children:r.jsx(C,{children:r.jsx(S,{name:e,gender:t,birthDate:i,focusedField:n,isFormValid:o,handleChange:a,handleFocus:l,handleBlur:d,handleNextClick:c})})})}var M=i(4837);function q(){return(0,M.l)({pageType:"USER_PROFILE",getUserId:()=>{let e=localStorage.getItem("userId");return e?parseInt(e):null}}),r.jsx(T,{})}},5622:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var r=i(5344),n=i(9032);let o=(0,n.ZP)(({center:e,variant:t,...i})=>r.jsx("div",{...i}))`
  font-size: 12px;
  font-weight: bold;
  color: #ffffff;
  margin-top: ${e=>"loading"===e.variant?"13px":"44px"};
  margin-left: ${e=>e.center?"0":"20px"};
  display: flex;
  flex-direction: column;
  text-align: ${e=>e.center?"center":"left"};
`,s=({text:e,variant:t="subtitle",center:i=!1})=>r.jsx(o,{variant:t,center:i,children:e})},8553:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var r=i(5344);i(3729);var n=i(9032);let o=n.ZP.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  margin-left: 20px;
  font-size: 24px;
`,s=n.ZP.div`
  font-weight: 700;
`,a=n.ZP.div`
  font-weight: 400;
  span {
    font-weight: 700;
  }
`,l=({mainText:e,subText:t,highlightText:i})=>(0,r.jsxs)(o,{children:[r.jsx(s,{children:e}),(0,r.jsxs)(a,{children:[r.jsx("span",{children:i}),t]})]})},1455:(e,t,i)=>{"use strict";i.d(t,{Z:()=>s});var r=i(5344),n=i(9032);i(3729);let o=n.ZP.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  position: relative;
  margin-top: auto ;
  padding: 20px 0;
  @media (max-width: 375px) {
    flex-direction: row;
    justify-content: space-between;
    margin-top: 24px;
  }
`,s=({children:e})=>r.jsx(o,{children:e})},9043:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var r=i(5344);i(3729);var n=i(9757);let o=({children:e})=>r.jsx(n.a1,{children:e})},5217:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var r=i(5344);i(3729);var n=i(4021),o=i(9032),s=i(9757),a=i(9043);let l=o.ZP.div`
  ${s.jq}
  ${({variant:e})=>e}
`,d=({onClick:e,disabled:t=!1,variant:i="step",children:o="다음"})=>(0,r.jsxs)(l,{onClick:t?void 0:e,className:t?"disabled":"",variant:i,children:[r.jsx("span",{children:o}),r.jsx(a.Z,{children:r.jsx(n.Z1Y,{})})]})},9757:(e,t,i)=>{"use strict";i.d(t,{a1:()=>a,jq:()=>s,nj:()=>o});var r=i(9032);let n=r.iv`
  position: relative;
  width: 370px;
  height: 48px;
  color: #ffffff;
  font-size: 16px;
  font-weight: bold;
  display: flex;
  justify-content: space-between;
  cursor: pointer;
  transition: all 0.2s ease;
  &.disabled {
    cursor: not-allowed;
  }

  @media (max-width: 360px) {
    top: 30px;
  }
`,o=r.iv`
  ${n}
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,s=r.iv`
  ${n}
  width: 95%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

`,a=r.ZP.div`
  width: 32px;
  height: 32px;
  background: #ffffff;
  color: #111;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`},4837:(e,t,i)=>{"use strict";i.d(t,{l:()=>o});var r=i(3729);let n={MBTI_RESULT:1,RHYTHM_RESULT:2,TEMPERATURE_RESULT:3,POEM_SELECT:4,ROUTINE_RECOMMENDATION:5,OPEN_TEASER:6,USER_PROFILE:7,TEST_QUESTIONS:8};function o({pageType:e,getUserId:t}){(0,r.useRef)(null),(0,r.useEffect)(()=>{let i;let r=((i=localStorage.getItem("uuid"))||(i=crypto.randomUUID(),localStorage.setItem("uuid",i)),i),o=t?.()??null,s=n[e],a=Date.now(),l=!1,d=()=>{if(l)return;l=!0;let e=Math.max(1,Math.floor((Date.now()-a)/1e3));if(e<2)return;let t=new Blob([JSON.stringify({userId:o,uuid:r,typeId:s,duration:e})],{type:"application/json"});navigator.sendBeacon("/api/page-visit-log",t)};return window.addEventListener("beforeunload",d),()=>{d(),window.removeEventListener("beforeunload",d)}},[e,t])}},4257:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>a});var r=i(5344),n=i(3729),o=i(8428),s=i(9032);function a({children:e}){let[t]=(0,n.useState)(()=>new s.qH);return(0,o.useServerInsertedHTML)(()=>{let e=t.getStyleElement();return t.instance.clearTag(),r.jsx(r.Fragment,{children:e})}),r.jsx(s.LC,{sheet:t.instance,children:e})}},2154:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>c,metadata:()=>l,viewport:()=>d});var r=i(5036);i(5023);let n=(0,i(6843).createProxy)(String.raw`/Users/anfgk/Desktop/curonverse/src/lib/registry.tsx`),{__esModule:o,$$typeof:s}=n,a=n.default,l={title:"",description:""},d={width:"device-width",initialScale:1,maximumScale:1,userScalable:!1,themeColor:"#0F1227"};function c({children:e}){return r.jsx("html",{lang:"ko",children:r.jsx("body",{className:"antialiased",children:r.jsx(a,{children:r.jsx("main",{children:e})})})})}},5648:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>s});let r=(0,i(6843).createProxy)(String.raw`/Users/anfgk/Desktop/curonverse/src/app/profile/page.tsx`),{__esModule:n,$$typeof:o}=r,s=r.default},3881:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>n});var r=i(337);let n=e=>[{type:"image/x-icon",sizes:"16x16",url:(0,r.fillMetadataSegment)(".",e.params,"favicon.ico")+""}]},5023:()=>{}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),r=t.X(0,[638,678,337,15],()=>i(3928));module.exports=r})();