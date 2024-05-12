import{B as q}from"../browser-polyfill.js";import{r as ie,t as le,c as re,a as ue,T as _e,S as m,_ as ve,i as L,C as me,b as $,d as U,I as pe,e as B,f as O,D as ge,g as ye}from"../general.js";import{a as de,s as Te,_ as fe,B as he,T as De,u as be,b as ke,c as Oe,F as we,d as Ie,e as Z,f as K,g as H,h as j,o as F,i as ee,j as te,k as Re,l as Ee}from"../dark.js";import{d as M,r as k,o as c,c as h,a as e,n as se,b as A,t as T,u as t,e as E,w as x,f as Se,g as $e,v as Pe,T as Ae,p as z,h as G,_ as V,i as W,j as Me,k as N,l as Ve,m as S,F as Y,q as ae,s as w,x as Ce,y as Be}from"../i18n.js";import{M as Fe}from"../messages.js";const xe="/light-mode.svg",Le="/dark-mode.svg",We="/dashboard.svg",Ne="/settings.svg";var Ue=36e5;function oe(l,s){ie(2,arguments);var a=le(s);return de(l,a*Ue)}function P(l,s){ie(2,arguments);var a=le(s);return de(l,a*1e3)}function ne(){return Te(Date.now())}const Ke=l=>(z("data-v-677b5a4c"),l=l(),G(),l),He={class:"expander"},je={class:"d-inline-block"},qe=Ke(()=>e("polyline",{points:"12,2 20,10 28,2","stroke-width":"3",fill:"none"},null,-1)),Ye=[qe],ze={class:"header"},Ge={class:"expander-body"},Qe={name:"Expander"},Xe=M({...Qe,props:{day:{},time:{}},setup(l){const s=k();return(a,r)=>(c(),h("div",He,[e("div",{class:se(["expander-trigger",s.value?"active":"beforeBorder"]),onClick:r[0]||(r[0]=v=>s.value=!s.value)},[e("div",je,[(c(),h("svg",{class:se(["expander-trigger-Icon",{open:s.value}]),width:"40",height:"12",stroke:"cornflowerblue"},Ye,2))]),e("div",ze,[A(T(a.day)+" ",1),e("span",null,T(t(re)(a.time)),1)])],2),E(Ae,{name:"leftToRight"},{default:x(()=>[Se(e("div",Ge,[$e(a.$slots,"default",{},void 0,!0)],512),[[Pe,s.value]])]),_:3})]))}});const Je=V(Xe,[["__scopeId","data-v-677b5a4c"]]),Ze=l=>(z("data-v-bce2236d"),l=l(),G(),l),et={key:0,class:"no-data"},tt=Ze(()=>e("img",{height:"55",src:Ie},null,-1)),st=[tt],at={key:1},ot={key:1},nt={class:"no-data"},it=["onClick"],lt={key:2},rt={class:"date-block"},dt=["onClick"],ct=["value"],ut={class:"stats-block block"},_t={class:"header"},vt={class:"ml-20 mr-20 by-days-chart"},mt={name:"TabList"},pt=M({...mt,setup(l){const{t:s}=W(),a=k(),r=k(),v=k(),i=k(),p=ue(),b=Me(()=>a.value!=null?a.value.days.length:0);async function g(D,u){const y=await be(D,u);y!=null&&(a.value=y,y.days.length==0&&y.summaryTime==0?v.value=!0:v.value=!1),r.value=!1}async function o(D){var _,n;i.value=D;const u=(_=i.value)==null?void 0:_[0],y=(n=i.value)==null?void 0:n[1];await g(u,y)}N(async()=>{var y,_;r.value=!0,i.value=_e;const D=(y=i.value)==null?void 0:y[0],u=(_=i.value)==null?void 0:_[1];await g(D,u)});async function d(){var _,n,f;const D=(_=i.value)==null?void 0:_[0],u=(n=i.value)==null?void 0:n[1],y=await ke((f=a.value)==null?void 0:f.days);Oe(y,we.CSV,`websites_${D.toLocaleDateString()}-${u.toLocaleDateString()}.csv`)}return(D,u)=>{var _;const y=Ve("VueDatePicker");return r.value?(c(),h("div",et,st)):(c(),h("div",at,[b.value==null||b.value==0&&!v.value?(c(),S(fe,{key:0})):v.value?(c(),h("div",ot,[e("div",nt,[A(T(t(s)("noDataForPeriod.message"))+" ",1),E(y,{range:"","enable-time-picker":!1,class:"date-picker",modelValue:i.value,"onUpdate:modelValue":[u[0]||(u[0]=n=>i.value=n),o],"preset-ranges":t(p)},{yearly:x(({label:n,range:f,presetDateRange:I})=>[e("span",{onClick:R=>I(f)},T(n),9,it)]),_:1},8,["modelValue","preset-ranges"])])])):(c(),h("div",lt,[e("div",rt,[E(y,{range:"","enable-time-picker":!1,class:"date-picker",modelValue:i.value,"onUpdate:modelValue":[u[1]||(u[1]=n=>i.value=n),o],"preset-ranges":t(p)},{yearly:x(({label:n,range:f,presetDateRange:I})=>[e("span",{onClick:R=>I(f)},T(n),9,dt)]),_:1},8,["modelValue","preset-ranges"]),e("input",{type:"button",value:t(s)("exportToCsv.message"),onClick:u[2]||(u[2]=n=>d())},null,8,ct)]),e("div",ut,[e("div",_t,T(t(s)("averageTimeByDays.message")),1),e("p",null,T(t(re)(a.value.averageTime)),1)]),e("div",vt,[E(he,{data:a.value},null,8,["data"])]),e("div",null,[(c(!0),h(Y,null,ae((_=a.value)==null?void 0:_.days,(n,f)=>(c(),S(Je,{key:f,day:n.day,time:n.time},{default:x(()=>[(c(!0),h(Y,null,ae(n.tabs,(I,R)=>(c(),S(De,{key:R,item:I,summaryTimeForWholeDay:n.time},null,8,["item","summaryTimeForWholeDay"]))),128))]),_:2},1032,["day","time"]))),128))])]))]))}}});const gt=V(pt,[["__scopeId","data-v-bce2236d"]]),yt={key:0,class:"review-block"},Tt=["value"],ft={name:"Review"},ht=M({...ft,setup(l){const{t:s}=W(),a=L(),r=12,v=2,i=5,p=k();N(async()=>{if(p.value=!1,await a.getValue(m.REVIEW_DATE)==null){let d=await a.getValue(m.REVIEW_PROMPT_AT);d==null?await a.saveValue(m.REVIEW_PROMPT_AT,Z(oe(ne(),r),v).toString()):(d=new Date(d),d<new Date&&(p.value=!0))}});async function b(){p.value=!1,await a.saveValue(m.REVIEW_PROMPT_AT,Z(oe(ne(),r),i).toString())}async function g(){window.open(me,"_blank"),await a.saveValue(m.REVIEW_DATE,new Date().toString())}return(o,d)=>p.value?(c(),h("div",yt,[e("p",null,T(t(s)("enjoyAndReview.message")),1),e("img",{height:"15",src:ve,onClick:d[0]||(d[0]=D=>b())}),e("input",{type:"button",value:t(s)("enjoyAndReview.description"),onClick:d[1]||(d[1]=D=>g())},null,8,Tt)])):w("",!0)}});const Dt=V(ht,[["__scopeId","data-v-7e8d72eb"]]);async function bt(){const l="src/offscreen.html",s=q.runtime.getURL(l);await chrome.offscreen.hasDocument()||await chrome.offscreen.createDocument({url:s,reasons:["AUDIO_PLAYBACK"],justification:"Play audio sounds"})}async function kt(){let l;(_=>{_.work="WORK",_.rest="REST",_.finished="FINISH"})(l||(l={}));function s(_){let n;for(let f=1;f<=g;f++){let I=_=="WORK"?f-1:f;const R=p*I,X=(b+1)*(f-1),ce=P(i,R+X);n=P(i,R+X+p);const J=o>=ce&&(P(o,-1)<=n||o<=n);if(J)return{period:_,isTargetPeriod:J,isTargetPeriodFinishedNow:U(P(o,-1),n)||U(o,n)}}return{period:"FINISH",isTargetPeriod:!1,isTargetPeriodFinishedNow:!1}}async function a(_){function n(){switch(_){case"WORK":return m.POMODORO_AUDIO_AFTER_WORK;case"REST":return m.POMODORO_AUDIO_AFTER_REST;case"FINISH":return m.POMODORO_AUDIO_AFTER_FINISHED}}const f=await r.getValue(n());await bt(),await q.runtime.sendMessage({message:Fe.PlayAudio,sound:f,offscreen:!0})}const r=L();if(!await $.getInstance().getSetting(m.IS_POMODORO_ENABLED))return;const i=new Date(await $.getInstance().getSetting(m.POMODORO_START_TIME)),p=await $.getInstance().getSetting(m.POMODORO_INTERVAL_WORK),b=await $.getInstance().getSetting(m.POMODORO_INTERVAL_REST),g=await $.getInstance().getSetting(m.POMODORO_FREQUENCY),o=new Date,d=P(i,p*g+b*g),D=await q.tabs.query({active:!0});if(o>=d){U(o,d)&&await a("FINISH"),await r.saveValue(m.IS_POMODORO_ENABLED,!1),await r.saveValue(m.POMODORO_START_TIME,null),await K({tabId:D[0].id,text:null,color:H.none,icon:j.default});return}let u=s("WORK");const y=u.isTargetPeriod;return y?await K({tabId:D[0].id,text:null,color:H.none,icon:j.pomodoroWorkingTime}):(u=s("REST"),u.isTargetPeriod&&await K({tabId:D[0].id,text:null,color:H.none,icon:j.pomodoroRestTime})),u.isTargetPeriodFinishedNow&&await a(u.period),{isWork:y}}const Ot={key:0,class:"pomodoro-popup-block"},wt={key:0},It={key:1},Rt=["value"],Et={name:"PomodoroInfo"},St=M({...Et,setup(l){const{t:s}=W(),a=L(),r=k(),v=k();return N(async()=>{var i;r.value=await a.getValue(m.IS_POMODORO_ENABLED,pe),v.value=(i=await kt())==null?void 0:i.isWork}),(i,p)=>r.value?(c(),h("div",Ot,[e("p",null,T(t(s)("pomodoroIsEnabled.message")),1),v.value?(c(),h("span",wt,T(t(s)("pomodoroWork.message")),1)):w("",!0),v.value?w("",!0):(c(),h("span",It,T(t(s)("pomodoroRest.message")),1)),e("input",{type:"button",value:t(s)("pomodoroSettings.message"),onClick:p[0]||(p[0]=b=>t(F)(t(B).Pomodoro))},null,8,Rt)])):w("",!0)}});const $t=V(St,[["__scopeId","data-v-9dbdf296"]]),C=l=>(z("data-v-1e47be00"),l=l(),G(),l),Pt={class:"headerBlock"},At=C(()=>e("div",{class:"d-inline-block"},[e("img",{class:"logo",height:"30",src:ye}),e("p",{class:"header"},"Web Activity Time Tracker")],-1)),Mt={class:"icons-block"},Vt=C(()=>e("img",{src:Re,height:"22"},null,-1)),Ct=C(()=>e("img",{height:"22",src:We},null,-1)),Bt=C(()=>e("img",{height:"22",src:Ne},null,-1)),Ft={class:"tabs"},xt={title:"Today"},Lt={for:"todayTab",role:"button"},Wt={title:"All The Time"},Nt={for:"allTimeTab",role:"button"},Ut={title:"By Days"},Kt={for:"byDaysTab",role:"button"},Ht=C(()=>e("div",{class:"slider"},[e("div",{class:"indicator"})],-1)),jt={class:"content"},qt={id:"todayTabList"},Yt={id:"summary"},zt={id:"byDaysTabList"},Gt=M({__name:"Popup",setup(l){const{t:s}=W(),a=L(),r=k(),v=k();N(async()=>{r.value=O.Today,v.value=await a.getValue(m.DARK_MODE,ge),v.value&&ee(v.value)});function i(g){r.value=g}async function p(g){await a.saveValue(m.DARK_MODE,g),v.value=g,ee(g),b()}function b(){const g=r.value;r.value=void 0,setTimeout(()=>{r.value=g},50)}return(g,o)=>(c(),h(Y,null,[e("div",Pt,[At,e("div",Mt,[v.value==!0?(c(),h("img",{key:0,class:"dark-mode-icon",height:"25",src:xe,title:"Disable Dark Mode",onClick:o[0]||(o[0]=d=>p(!1))})):w("",!0),v.value==!1?(c(),h("img",{key:1,class:"dark-mode-icon",title:"Enable Dark Mode",height:"25",src:Le,onClick:o[1]||(o[1]=d=>p(!0))})):w("",!0),e("a",{onClick:o[2]||(o[2]=d=>t(F)(t(B).Pomodoro))},[A(T(t(s)("pomodoroMode.message")),1),Vt]),e("a",{class:"filter",onClick:o[3]||(o[3]=d=>t(F)(t(B).Dashboard))},[A(T(t(s)("dashboard.message")),1),Ct]),e("a",{class:"filter",onClick:o[4]||(o[4]=d=>t(F)(t(B).GeneralSettings))},[A(T(t(s)("settings.message")),1),Bt])])]),e("div",Ft,[e("input",{type:"radio",id:"todayTab",name:"tab-control",checked:"",onChange:o[5]||(o[5]=d=>i(t(O).Today))},null,32),e("input",{type:"radio",id:"allTimeTab",name:"tab-control",onChange:o[6]||(o[6]=d=>i(t(O).All))},null,32),e("input",{type:"radio",id:"byDaysTab",name:"tab-control",onChange:o[7]||(o[7]=d=>i(t(O).ByDays))},null,32),e("ul",null,[e("li",xt,[e("label",Lt,[e("span",null,T(t(s)("today.message")),1)])]),e("li",Wt,[e("label",Nt,[e("span",null,T(t(s)("allTime.message")),1)])]),e("li",Ut,[e("label",Kt,[e("span",null,T(t(s)("byDays.message")),1)])])]),Ht,e("div",jt,[e("section",qt,[r.value==t(O).Today?(c(),S(te,{key:0,type:t(O).Today,showAllStats:!1},null,8,["type"])):w("",!0)]),e("section",Yt,[r.value==t(O).All?(c(),S(te,{key:0,type:t(O).All,showAllStats:!0},null,8,["type"])):w("",!0)]),e("section",zt,[r.value==t(O).ByDays?(c(),S(gt,{key:0})):w("",!0)])])]),E($t),E(Dt)],64))}});const Qt=V(Gt,[["__scopeId","data-v-1e47be00"]]),Q=Ce(Qt);Q.component("VueDatePicker",Ee);Q.use(Be);Q.mount("body");
