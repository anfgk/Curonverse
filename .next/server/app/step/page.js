(()=>{var e={};e.id=782,e.ids=[782],e.modules={7849:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external")},2934:e=>{"use strict";e.exports=require("next/dist/client/components/action-async-storage.external.js")},5403:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external")},4580:e=>{"use strict";e.exports=require("next/dist/client/components/request-async-storage.external.js")},4749:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external")},5869:e=>{"use strict";e.exports=require("next/dist/client/components/static-generation-async-storage.external.js")},399:e=>{"use strict";e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},1017:e=>{"use strict";e.exports=require("path")},2781:e=>{"use strict";e.exports=require("stream")},7310:e=>{"use strict";e.exports=require("url")},7537:(e,t,i)=>{"use strict";i.r(t),i.d(t,{GlobalError:()=>r.a,__next_app__:()=>h,originalPathname:()=>u,pages:()=>c,routeModule:()=>p,tree:()=>d});var s=i(482),n=i(9108),o=i(2563),r=i.n(o),a=i(8300),l={};for(let e in a)0>["default","tree","pages","GlobalError","originalPathname","__next_app__","routeModule"].indexOf(e)&&(l[e]=()=>a[e]);i.d(t,l);let d=["",{children:["step",{children:["__PAGE__",{},{page:[()=>Promise.resolve().then(i.bind(i,1376)),"/Users/anfgk/Desktop/curonverse/src/app/step/page.tsx"]}]},{metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}]},{layout:[()=>Promise.resolve().then(i.bind(i,2154)),"/Users/anfgk/Desktop/curonverse/src/app/layout.tsx"],"not-found":[()=>Promise.resolve().then(i.t.bind(i,9361,23)),"next/dist/client/components/not-found-error"],metadata:{icon:[async e=>(await Promise.resolve().then(i.bind(i,3881))).default(e)],apple:[],openGraph:[],twitter:[],manifest:void 0}}],c=["/Users/anfgk/Desktop/curonverse/src/app/step/page.tsx"],u="/step/page",h={require:i,loadChunk:()=>Promise.resolve()},p=new s.AppPageRouteModule({definition:{kind:n.x.APP_PAGE,page:"/step/page",pathname:"/step",bundlePath:"",filename:"",appPaths:[]},userland:{loaderTree:d}})},8880:(e,t,i)=>{Promise.resolve().then(i.bind(i,350))},350:(e,t,i)=>{"use strict";i.r(t),i.d(t,{default:()=>J});var s=i(5344),n=i(3729),o=i.n(n),r=i(9120),a=i(9032);let l=a.ZP.div`
  padding: 0 20px 0 20px;
  margin-top: 56px;
`,d=a.ZP.div`
  display: flex;
  gap: 4px;
  width: 100%;
`,c=a.ZP.div.withConfig({shouldForwardProp:e=>!["isActive","isCompleted"].includes(e)})`
  height: 4px;
  flex: 1;
  background: ${e=>e.isCompleted?"#CB59FF":e.isActive?"linear-gradient(to right, #CB59FF 50%, #666666 50%)":"#666666"};
  border-radius: 2px;
  transition: background 0.3s ease;
`,u=({currentStep:e,currentQuestion:t})=>s.jsx(l,{children:s.jsx(d,{children:[1,2,3,4].map(t=>s.jsx(c,{isActive:t===e,isCompleted:t<e},t))})}),h=a.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 41px;
  height: 24px;
  margin-top: 31px;
  margin-left: 20px;
  padding: 14px 8px;
  border-radius: 10px;
  background: #fff;
`,p=a.ZP.span`
  color: #cb59ff;
  font-size: 16px;
  font-weight: bold;
`,m=a.ZP.span`
  color: #111;
  font-size: 16px;
  font-weight: bold;
`,x=({currentStep:e,totalSteps:t})=>(0,s.jsxs)(h,{children:[s.jsx(p,{children:e}),(0,s.jsxs)(m,{children:["/",t]})]});var y=i(8553);let g=a.ZP.div`
  width: 375px;
  background: #393939;
  /* 모바일에서 콘텐츠가 잘리지 않도록 오버플로우만 처리 */
  @media (max-width: 360px) {
    width: 100vw;
  }
`,w=a.ZP.div`
  display: flex;
  flex-direction: column;
  z-index: 1;
  height: 100%;
  padding: 20px 20px;
  gap: 20px;
  @media (max-width: 360px) {
    padding-bottom: 100px;
  }
`;function f({step:e,answeredCount:t,children:i}){return s.jsx(g,{children:(0,s.jsxs)(w,{children:[s.jsx(u,{currentStep:e,currentQuestion:t+((e-1)*3+1)}),s.jsx(x,{currentStep:String(e),totalSteps:"4"}),s.jsx(y.Z,{mainText:"본인의 성향과 가장 가까운",highlightText:"하나를 선택",subText:"해주세요."}),i]})})}let b=a.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin-top: 31px;
`,v=a.ZP.span`
  color: ${e=>(e.$isFocused,"#CB59FF")};
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;
`,j=a.ZP.span`
  color: ${e=>e.$isFocused?"#000":"#fff"};
  font-size: 16px;
  font-weight: bold;
  transition: color 0.3s ease;
`,I=({currentQues:e,totalQues:t,isFocused:i})=>(0,s.jsxs)(b,{children:[s.jsx(v,{$isFocused:i,children:e}),(0,s.jsxs)(j,{$isFocused:i,children:["/",t]})]}),P=a.ZP.div`
  font-size: 20px;
  font-weight: bold;
  color: ${e=>e.$isFocused?"#000":"#fff"};
  padding-top: 12px;
  text-align: center;
  transition: color 0.3s ease;
`,S=a.ZP.div``,k=({text:e,isFocused:t})=>s.jsx(P,{$isFocused:t,children:s.jsx(S,{children:e})});var q=i(9868);let C=a.ZP.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
`,F=a.ZP.div`
  width: ${e=>`${e.$size||36}px`};
  height: ${e=>`${e.$size||36}px`};
  border-radius: 50%;
  background-color: ${e=>e.$isSelected?"#CB59FF":"#C8C8C8"};
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 0 16px;
  cursor: pointer;
  transition: all 0.2s ease;

  svg {
    color: white;
    width: ${e=>`${e.$size?.55*e.$size:20}px`};
    height: ${e=>`${e.$size?.55*e.$size:20}px`};
    opacity: ${e=>e.$isSelected?1:0};
    transition: opacity 0.2s ease;
  }
`,$=a.ZP.span`
  color: ${e=>e.$isFocused?e.$hasAnySelection?e.$isSelected?"#000":"#C8C8C8":"#000":"#C8C8C8"};
  font-size: 12px;
  text-align: center;
  width: 48px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  transition: color 0.3s ease;
  margin-bottom: 18px;
  white-space: pre-line;
  line-height: 1.4;
`,E=({label:e,isSelected:t,onClick:i,onQuestionClick:n,size:o,isFocused:r=!1,hasAnySelection:a=!1})=>(0,s.jsxs)(C,{children:[s.jsx(F,{$isSelected:t,$size:o,onClick:()=>{console.log("CheckBox clicked:",e,"isSelected:",t),i(),n?.()},children:s.jsx(q.UgA,{})}),s.jsx($,{$isFocused:r,$isSelected:t,$hasAnySelection:a,onClick:()=>{n?.()},style:{cursor:"pointer"},children:(e=>{switch(e){case"매우 아니다":return"매우\n아니다";case"매우 그렇다":return"매우\n그렇다";default:return e}})(e)})]});var A=i(1455),Z=i(5217),N=i(4021),H=i(9757),R=i(9043);let U=a.ZP.div`
  ${H.nj}
  ${({variant:e})=>e}
  ${({$hide:e})=>e&&"display: none; !important;"}
`,z=({onClick:e,disabled:t=!1,variant:i="step",children:n="이전",$hide:o=!1})=>(0,s.jsxs)(U,{onClick:()=>{t||e()},className:t?"disabled":"",variant:i,$hide:o,children:[s.jsx(R.Z,{children:s.jsx(N.Wuc,{})}),s.jsx("span",{children:n})]}),T=a.ZP.div`
  width: 336px;
  height: 200px;
  margin: 44px auto 0;
  padding: 5px 24px;
  background: ${e=>e.$isFocused?"#FAFAFA":"transparent"};
  border-radius: 10px;
  transition: all 0.3s ease;
  opacity: ${e=>e.$anyFieldFocused?e.$isFocused?1:.5:1};
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  cursor: pointer;
  scroll-margin-top: 100px;

`,B=a.ZP.div`
  display: flex;
  justify-content: center;
  align-items: center;
  margin: 20px 24px 0;
`;function M({step:e,questions:t,savedAnswers:i,onSaveAnswer:r,onNext:a,onPrev:l}){let[d,c]=o().useState(t.length>0?t[0].id:0);(0,n.useLayoutEffect)(()=>{if(0===t.length)return;let e=t[0].id,i=document.getElementById(`question-${e}`);i&&(c(e),i.scrollIntoView({behavior:"smooth",block:"start"}))},[e,t]);let u=(e,i)=>{console.log("Answer selected:",e,i),r(e,i);let s=t.findIndex(t=>t.id===e),n=t[s+1];console.log("Current index:",s,"Next question:",n),n?(console.log("Moving to next question:",n.id),c(n.id),setTimeout(()=>{c(n.id)},0),setTimeout(()=>{let e=document.getElementById(`question-${n.id}`);e&&e.scrollIntoView({behavior:"smooth",block:"center"})},100)):console.log("No next question available")},h=(e,t)=>{if(t.target.closest(".checkbox-group"))return;c(e);let i=document.getElementById(`question-${e}`);i&&i.scrollIntoView({behavior:"smooth",block:"center"})},p=e=>{c(e);let t=document.getElementById(`question-${e}`);t&&t.scrollIntoView({behavior:"smooth",block:"center"})},m=t.every(e=>void 0!==i[e.id]),x=[{label:"매우 아니다",score:1,size:36},{label:"아니다",score:2,size:32},{label:"보통이다",score:3,size:24},{label:"그렇다",score:4,size:32},{label:"매우 그렇다",score:5,size:36}];return(0,s.jsxs)(s.Fragment,{children:[t.map(e=>{let t=d===e.id;return console.log(`Question ${e.id} focused:`,t,"Current focusedQuestion:",d),(0,s.jsxs)(T,{id:`question-${e.id}`,$isFocused:t,$anyFieldFocused:!!d,onClick:t=>h(e.id,t),children:[s.jsx(I,{currentQues:e.id,totalQues:12,isFocused:t}),s.jsx(k,{text:e.text,isFocused:t}),s.jsx(B,{className:"checkbox-group",children:x.map(n=>s.jsx(E,{label:n.label,isSelected:i[e.id]===n.score,onClick:()=>u(e.id,n.score),onQuestionClick:()=>p(e.id),size:n.size,isFocused:t,hasAnySelection:!!i[e.id]},n.score))})]},e.id)}),(0,s.jsxs)(A.Z,{children:[s.jsx(z,{onClick:l,disabled:0===e,variant:"step",children:1===e?"처음으로":"이전"}),s.jsx(Z.Z,{onClick:a,disabled:!m,variant:"step",children:"다음"})]})]})}var D=i(8428);let _=[{id:1,text:"새로운 사람들과 만나는 것이 즐겁다",dimension:"EI",orderIndex:1},{id:2,text:"혼자 있는 시간이 필요하다",dimension:"EI",orderIndex:2},{id:3,text:"사람들과 함께 있을 때 에너지가 생긴다",dimension:"EI",orderIndex:3},{id:4,text:"구체적이고 실용적인 정보를 선호한다",dimension:"SN",orderIndex:4},{id:5,text:"미래의 가능성과 아이디어에 관심이 많다",dimension:"SN",orderIndex:5},{id:6,text:"경험을 통해 배우는 것을 좋아한다",dimension:"SN",orderIndex:6},{id:7,text:"논리적이고 객관적으로 판단한다",dimension:"TF",orderIndex:7},{id:8,text:"다른 사람의 감정을 고려한다",dimension:"TF",orderIndex:8},{id:9,text:"원칙과 기준에 따라 결정한다",dimension:"TF",orderIndex:9},{id:10,text:"계획을 세우고 그대로 실행한다",dimension:"JP",orderIndex:10},{id:11,text:"유연하고 즉흥적인 것을 선호한다",dimension:"JP",orderIndex:11},{id:12,text:"마감 시간을 지키는 것이 중요하다",dimension:"JP",orderIndex:12}],O={getTestQuestions:async e=>_,submitTest:async e=>null};var Q=i(8815),K=i(5779);let G={EPSA:1,EPSU:2,EPIA:3,EPIU:4,EHSA:5,EHSU:6,EHIA:7,EHIU:8,RPSA:9,RPSU:10,RPIA:11,RPIU:12,RHSA:13,RHSU:14,RHIA:15,RHIU:16},L={"Spark Flame":1,"Warm Flow":2,"Healing Loop":3,"Quiet Sync":4,"Silent Echo":5,"Hidden Pearl":6};function V(){let e=(0,r.A)(),{step:t,answers:i,goNext:o,goPrev:a,saveAnswer:l,isLastStep:d}=function(){let[e,t]=(0,n.useState)(1),[i,s]=(0,n.useState)({});return(0,n.useEffect)(()=>{setTimeout(()=>{let t;switch(e){case 1:default:t="question-1";break;case 2:t="question-4";break;case 3:t="question-7";break;case 4:t="question-10"}let i=document.getElementById(t);i&&i.scrollIntoView({behavior:"smooth",block:"center"})},100)},[e]),{step:e,answers:i,goNext:()=>{t(e=>Math.min(e+1,4))},goPrev:()=>{t(e=>Math.max(e-1,1))},saveAnswer:(e,t,i)=>{s(s=>({...s,[e]:{...s[e],[t]:i}}))},isLastStep:4===e}}(),{questionForm:c}=function(e){let t=(0,D.useRouter)();return{questionForm:async i=>{if(console.log(e,"userId"),!e){alert("사용자 정보가 없습니다."),t.replace("/profile");return}let s=Object.values(i).flatMap(e=>Object.entries(e).map(([e,t])=>({questionId:Number(e),score:t})));try{await O.submitTest({userId:e,type:"emotion",answers:s});let i=function(e){let t={E:0,I:0,S:0,N:0,T:0,F:0,J:0,P:0};e.forEach(e=>{let i=e.questionId,s=e.score;i<=3?1===i||3===i?t.E+=s:t.I+=s:i<=6?4===i||6===i?t.S+=s:t.N+=s:i<=9?7===i||9===i?t.T+=s:t.F+=s:10===i||12===i?t.J+=s:t.P+=s});let i=t.E-t.I,s=t.S-t.N,n=t.T-t.F,o=t.J-t.P,r=[i>0?"E":"I",s>0?"S":"N",n>0?"T":"F",o>0?"J":"P"].join(""),a=function(e){let[t,i,s,n]=e.split("");return("E"===t?"E":"R")+("S"===i?"P":"H")+("T"===s?"S":"I")+("J"===n?"A":"U")}(r),l=K.rs[a]||"Spark Flame";return{mbti:r,scores:t,preferences:{EI:Math.abs(i),SN:Math.abs(s),TF:Math.abs(n),JP:Math.abs(o)},emotionMbti:a,rhythmId:L[l]||1,rhythmName:l}}(s),n=await Q.q.getHealingRoutine({mbtiId:i.rhythmId,rhythmId:i.rhythmId}),o={testResultId:Date.now(),testSessionId:Date.now(),emotionType:function(e){let t={EPSA:"#FF6B35",EPSU:"#E74C3C",EPIA:"#FF8C42",EPIU:"#C0392B",EHSA:"#F39C12",EHSU:"#16A085",EHIA:"#9B59B6",EHIU:"#E91E63",RPSA:"#2C3E50",RPSU:"#34495E",RPIA:"#27AE60",RPIU:"#1ABC9C",RHSA:"#3498DB",RHSU:"#2980B9",RHIA:"#5D6D7E",RHIU:"#F8BBD9"},i=t[e]||t.EPSA;return{id:G[e]||1,code:e,title:`${e} 감정 성향`,description:"감정을 빠르게 표현하고 자기중심으로 해석하며, 즉시 자각하고 정리하는 사람이에요.",color:i,hexCode:i,keywords:["불꽃","직진","선명"].map((e,t)=>({id:t+1,keyword:e,description:"감정이 순간적으로 튀어나오는 뜨거운 에너지에요."}))}}(i.emotionMbti),rhythmId:i.rhythmId,rhythm:i.rhythmName,rhythmAnalysis:K.Lk[i.rhythmName]||"감정 리듬 분석 결과입니다.",rhythmColor:n.data?.rhythmColor||"#FF7448",rhythmColorHex:n.data?.rhythmColorHex||"#FF7448",rhythmDescription:K.Lk[i.rhythmName]||"감정 리듬에 대한 설명입니다.",temperature:36.5,temperatureAnalysis:{temperature:36.5,description:"평균적인 감정 온도입니다.",rhythm:i.rhythmName,state:"안정",temperatureDescription:"감정이 안정적인 상태입니다.",title:"평온한 감정 상태",analysis:["감정이 안정적입니다.","일상적인 감정 상태를 유지하고 있습니다."]},expressionPercentile:50,processingPercentile:50,connectionPercentile:50,awarenessPercentile:50,healingQuote:"감정을 이해하고 받아들이는 것이 중요합니다.",recommendedRoutine:"일상적인 감정 관리 루틴을 추천합니다.",healingKeywords:n.data?.healingKeywords||["안정","평온","균형"],healingRoutines:n.data?[n.data]:[],percentTotal:50,percentGender:50};sessionStorage.setItem("test",JSON.stringify(o)),sessionStorage.setItem("healingRoutine",JSON.stringify(n.data)),t.push("/result")}catch(e){console.error("제출 중 오류 발생:",e),alert("제출에 실패했습니다. 다시 시도해주세요.")}}}}(e?.id||0),[u,h]=(0,n.useState)([]),[p,m]=(0,n.useState)(!0),x=(0,D.useRouter)();(0,n.useEffect)(()=>{e&&(async()=>{let e=await O.getTestQuestions();console.log("Fetched questions:",e),h(e),m(!1)})()},[e]);let y=(0,n.useMemo)(()=>{if(!u||0===u.length)return console.log("No questions available"),{};console.log("Processing questions:",u);let e=u.reduce((e,t,i)=>{let s=Math.floor(i/3)+1;return e[s]||(e[s]=[]),e[s].push(t),e},{});return console.log("Step questions result:",e),e},[u]),g=async()=>{d?await c(i):o()},w=async()=>{1===t?x.push("/start"):a()};return s.jsx(f,{step:t,answeredCount:Object.keys(i).length,children:s.jsx(M,{step:t,questions:y[t]||[],savedAnswers:i[t]||{},onSaveAnswer:(e,i)=>l(t,e,i),onNext:g,onPrev:w})})}var Y=i(4837);function J(){return(0,Y.l)({pageType:"MBTI_RESULT",getUserId:()=>{let e=localStorage.getItem("userId");return e?parseInt(e):null}}),s.jsx(V,{})}},8553:(e,t,i)=>{"use strict";i.d(t,{Z:()=>l});var s=i(5344);i(3729);var n=i(9032);let o=n.ZP.div`
  display: flex;
  flex-direction: column;
  padding-top: 12px;
  margin-left: 20px;
  font-size: 24px;
`,r=n.ZP.div`
  font-weight: 700;
`,a=n.ZP.div`
  font-weight: 400;
  span {
    font-weight: 700;
  }
`,l=({mainText:e,subText:t,highlightText:i})=>(0,s.jsxs)(o,{children:[s.jsx(r,{children:e}),(0,s.jsxs)(a,{children:[s.jsx("span",{children:i}),t]})]})},1455:(e,t,i)=>{"use strict";i.d(t,{Z:()=>r});var s=i(5344),n=i(9032);i(3729);let o=n.ZP.div`
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
`,r=({children:e})=>s.jsx(o,{children:e})},9043:(e,t,i)=>{"use strict";i.d(t,{Z:()=>o});var s=i(5344);i(3729);var n=i(9757);let o=({children:e})=>s.jsx(n.a1,{children:e})},5217:(e,t,i)=>{"use strict";i.d(t,{Z:()=>d});var s=i(5344);i(3729);var n=i(4021),o=i(9032),r=i(9757),a=i(9043);let l=o.ZP.div`
  ${r.jq}
  ${({variant:e})=>e}
`,d=({onClick:e,disabled:t=!1,variant:i="step",children:o="다음"})=>(0,s.jsxs)(l,{onClick:t?void 0:e,className:t?"disabled":"",variant:i,children:[s.jsx("span",{children:o}),s.jsx(a.Z,{children:s.jsx(n.Z1Y,{})})]})},9757:(e,t,i)=>{"use strict";i.d(t,{a1:()=>a,jq:()=>r,nj:()=>o});var s=i(9032);let n=s.iv`
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
`,o=s.iv`
  ${n}
  width: 40%;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 10px;
`,r=s.iv`
  ${n}
  width: 95%;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  gap: 10px;

`,a=s.ZP.div`
  width: 32px;
  height: 32px;
  background: #ffffff;
  color: #111;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
`},8815:(e,t,i)=>{"use strict";i.d(t,{q:()=>n});let s={1:{rhythmId:1,rhythmName:"Spark Flame",rhythmColor:"#FF6B35",rhythmColorHex:"#FF6B35",healingKeywords:["에너지","열정","활력"],recommendedContents:[{title:"에너지 넘치는 운동",link:"https://www.youtube.com/watch?v=dQw4w9WgXcQ",type:"activity",thumbnail:"https://img.youtube.com/vi/dQw4w9WgXcQ/hqdefault.jpg"},{title:"열정적인 음악",link:"https://www.youtube.com/watch?v=9bZkp7q19f0",type:"media",thumbnail:"https://img.youtube.com/vi/9bZkp7q19f0/hqdefault.jpg"},{title:"고강도 인터벌 트레이닝",link:"https://www.youtube.com/watch?v=ml6cT4AZdqI",type:"activity",thumbnail:"https://img.youtube.com/vi/ml6cT4AZdqI/hqdefault.jpg"}]},2:{rhythmId:2,rhythmName:"Warm Flow",rhythmColor:"#F39C12",rhythmColorHex:"#F39C12",healingKeywords:["따뜻함","조화","평온"],recommendedContents:[{title:"따뜻한 차 마시기",link:"https://www.youtube.com/watch?v=8jLOx1hD3_o",type:"activity",thumbnail:"https://img.youtube.com/vi/8jLOx1hD3_o/hqdefault.jpg"},{title:"평온한 명상",link:"https://www.youtube.com/watch?v=inpok4MKVLM",type:"activity",thumbnail:"https://img.youtube.com/vi/inpok4MKVLM/hqdefault.jpg"},{title:"따뜻한 재즈 음악",link:"https://www.youtube.com/watch?v=zqNTltOGh5c",type:"media",thumbnail:"https://img.youtube.com/vi/zqNTltOGh5c/hqdefault.jpg"}]},3:{rhythmId:3,rhythmName:"Healing Loop",rhythmColor:"#9B59B6",rhythmColorHex:"#9B59B6",healingKeywords:["치유","회복","성장"],recommendedContents:[{title:"자기 돌봄 루틴",link:"https://www.youtube.com/watch?v=1ZYbU82GVz4",type:"activity",thumbnail:"https://img.youtube.com/vi/1ZYbU82GVz4/hqdefault.jpg"},{title:"치유 음악",link:"https://www.youtube.com/watch?v=lFcSrYw-ARY",type:"media",thumbnail:"https://img.youtube.com/vi/lFcSrYw-ARY/hqdefault.jpg"},{title:"감정 회복 명상",link:"https://www.youtube.com/watch?v=O-6f5wQXSu8",type:"activity",thumbnail:"https://img.youtube.com/vi/O-6f5wQXSu8/hqdefault.jpg"}]},4:{rhythmId:4,rhythmName:"Quiet Sync",rhythmColor:"#2C3E50",rhythmColorHex:"#2C3E50",healingKeywords:["조용함","동기화","균형"],recommendedContents:[{title:"조용한 독서",link:"https://www.youtube.com/watch?v=7NOSDKb0HlU",type:"activity",thumbnail:"https://img.youtube.com/vi/7NOSDKb0HlU/hqdefault.jpg"},{title:"자연 소리",link:"https://www.youtube.com/watch?v=q76bMs-NwRk",type:"media",thumbnail:"https://img.youtube.com/vi/q76bMs-NwRk/hqdefault.jpg"},{title:"균형 잡기 요가",link:"https://www.youtube.com/watch?v=dAq0u5cX3qM",type:"activity",thumbnail:"https://img.youtube.com/vi/dAq0u5cX3qM/hqdefault.jpg"}]},5:{rhythmId:5,rhythmName:"Silent Echo",rhythmColor:"#34495E",rhythmColorHex:"#34495E",healingKeywords:["침묵","메아리","깊이"],recommendedContents:[{title:"깊은 호흡",link:"https://www.youtube.com/watch?v=8jLOx1hD3_o",type:"activity",thumbnail:"https://img.youtube.com/vi/8jLOx1hD3_o/hqdefault.jpg"},{title:"명상 음악",link:"https://www.youtube.com/watch?v=lFcSrYw-ARY",type:"media",thumbnail:"https://img.youtube.com/vi/lFcSrYw-ARY/hqdefault.jpg"},{title:"침묵 명상",link:"https://www.youtube.com/watch?v=inpok4MKVLM",type:"activity",thumbnail:"https://img.youtube.com/vi/inpok4MKVLM/hqdefault.jpg"}]},6:{rhythmId:6,rhythmName:"Hidden Pearl",rhythmColor:"#3498DB",rhythmColorHex:"#3498DB",healingKeywords:["숨겨진 보물","발견","가치"],recommendedContents:[{title:"자기 발견 활동",link:"https://www.youtube.com/watch?v=1ZYbU82GVz4",type:"activity",thumbnail:"https://img.youtube.com/vi/1ZYbU82GVz4/hqdefault.jpg"},{title:"영감을 주는 음악",link:"https://www.youtube.com/watch?v=zqNTltOGh5c",type:"media",thumbnail:"https://img.youtube.com/vi/zqNTltOGh5c/hqdefault.jpg"},{title:"창의성 발현 활동",link:"https://www.youtube.com/watch?v=7NOSDKb0HlU",type:"activity",thumbnail:"https://img.youtube.com/vi/7NOSDKb0HlU/hqdefault.jpg"}]}},n={async getHealingRoutine(e){if(!e?.rhythmId)throw Error("rhythmId is required and must be a number.");return{statusCode:200,message:"Success",data:s[e.rhythmId]||s[1],timestamp:new Date().toISOString()}}}},1376:(e,t,i)=>{"use strict";i.r(t),i.d(t,{$$typeof:()=>o,__esModule:()=>n,default:()=>r});let s=(0,i(6843).createProxy)(String.raw`/Users/anfgk/Desktop/curonverse/src/app/step/page.tsx`),{__esModule:n,$$typeof:o}=s,r=s.default}};var t=require("../../webpack-runtime.js");t.C(e);var i=e=>t(t.s=e),s=t.X(0,[638,678,337,15,241],()=>i(7537));module.exports=s})();