import{c as M,a as d,t as x,s as E,d as tt}from"../chunks/disclose-version.DlT7Drtr.js";import{ah as U,aK as T,ag as X,g as p,aL as et,ai as u,am as q,an as z,aj as G,ak as K,aM as at,s as H,A as rt,at as I,al as P,ap as ot}from"../chunks/runtime.BhQpX46-.js";import{e as F,i as J}from"../chunks/each.BBUPR2BA.js";import{i as D,o as st}from"../chunks/index-client.UoTm1emZ.js";import{c as k}from"../chunks/svelte-component.YCGTmXgB.js";import{p as nt}from"../chunks/proxy.B1I-x5zY.js";import{C as lt,a as it,b as ct,c as dt,d as mt}from"../chunks/card-title.OYoShbTt.js";import{s as L,a as ut,I as gt,b as pt}from"../chunks/Icon.CmhFO5rY.js";import{l as V,p as b,s as Q}from"../chunks/props.CkKpgvE0.js";import{w as ft,t as vt,o as ht,m as _t,c as bt,a as xt,r as $t,g as yt,b as Ct,B as At,S as Pt}from"../chunks/separator.C65YV-wu.js";import{i as Y}from"../chunks/lifecycle.C7grkdTb.js";import{b as wt}from"../chunks/this.BYGrzE6K.js";import{s as St,a as jt}from"../chunks/store.mpyTvO6x.js";import{w as kt}from"../chunks/index.BEGD04HM.js";import{c as Gt}from"../chunks/utils.HgNuwJYh.js";const Mt=(s,t)=>{const e=ft(s),n=(l,a)=>{e.update(r=>{const i=l(r);let f=i;return t&&(f=t({curr:r,next:i})),a==null||a(f),f})};return{...e,update:n,set:l=>{n(()=>l)}}},Vt={defaultValue:0,max:100},{name:Rt}=bt("progress"),Nt=s=>{const t={...Vt,...s},e=vt(ht(t,"value")),{max:n}=e,c=t.value??kt(t.defaultValue),l=Mt(c,t==null?void 0:t.onValueChange);return{elements:{root:_t(Rt(),{stores:[l,n],returned:([r,i])=>({value:r,max:i,role:"meter","aria-valuemin":0,"aria-valuemax":i,"aria-valuenow":r,"data-value":r,"data-state":r===null?"indeterminate":r===i?"complete":"loading","data-max":i})})},states:{value:l},options:e}};function Tt(){return{NAME:"progress",PARTS:["root"]}}function Bt(s){const{NAME:t,PARTS:e}=Tt(),n=xt(t,e),c={...Nt($t(s)),getAttrs:n};return{...c,updateOption:yt(c.options)}}var Ot=x("<div><!></div>");function Et(s,t){const e=V(t,["children","$$slots","$$events","$$legacy"]),n=V(e,["max","value","onValueChange","asChild","el"]);U(t,!1);const c=St(),l=()=>jt(w,"$root",c),a=at();let r=b(t,"max",24,()=>{}),i=b(t,"value",28,()=>{}),f=b(t,"onValueChange",24,()=>{}),$=b(t,"asChild",8,!1),R=b(t,"el",28,()=>{});const{elements:{root:w},states:{value:S},updateOption:j,getAttrs:B}=Bt({max:r(),defaultValue:i(),onValueChange:({next:m})=>{var o;return(o=f())==null||o(m),i(m),m}}),y=B("root");T(()=>X(i()),()=>{i()!==void 0&&S.set(i())}),T(()=>X(r()),()=>{j("max",r())}),T(()=>l(),()=>{H(a,l())}),T(()=>p(a),()=>{Object.assign(p(a),y)}),et(),Y();var C=M(),A=u(C);D(A,$,m=>{var o=M(),v=u(o);L(v,t,"default",{get builder(){return p(a)}}),d(m,o)},m=>{var o=Ot();wt(o,g=>R(g),()=>R());let v;var h=q(o);L(h,t,"default",{get builder(){return p(a)}}),z(o),G(()=>v=ut(o,v,{...p(a),...n})),Ct(o,g=>p(a).action(g)),d(m,o)}),d(s,C),K()}function It(s,t){const e=V(t,["children","$$slots","$$events","$$legacy"]);gt(s,Q({name:"github"},()=>e,{iconNode:[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]],children:(c,l)=>{var a=M(),r=u(a);L(r,t,"default",{}),d(c,a)},$$slots:{default:!0}}))}var zt=x('<div class="bg-primary h-full w-full flex-1 transition-all"></div>');function Ht(s,t){const e=V(t,["children","$$slots","$$events","$$legacy"]),n=V(e,["class","max","value"]);U(t,!1);let c=b(t,"class",8,void 0),l=b(t,"max",8,100),a=b(t,"value",8,void 0);Y();var r=rt(()=>Gt("bg-secondary relative h-4 w-full overflow-hidden rounded-full",c()));Et(s,Q({get class(){return p(r)}},()=>n,{children:(i,f)=>{var $=zt();G(()=>pt($,"style",`transform: translateX(-${100-100*(a()??0)/(l()??1)}%)`)),d(i,$)},$$slots:{default:!0}})),K()}var Lt=x("<!> GitHub",1),Ut=x(" <!>",1),Kt=x('<p class="text-sm text-muted-foreground"> </p> <!>',1),Wt=x('<!> <div class="my-4 flex flex-row flex-wrap"></div> <!>',1),Xt=x("<!> <!>",1);function qt(s,t){U(t,!0);let e=ot(100);st(()=>{const l=setTimeout(()=>{H(e,0),setTimeout(()=>{H(e,nt(t.project.completion))},500+Math.random()*500)},500+Math.random()*500);return()=>clearTimeout(l)});var n=M(),c=u(n);k(c,()=>mt,(l,a)=>{a(l,{class:"my-2",children:(r,i)=>{var f=Xt(),$=u(f);k($,()=>lt,(w,S)=>{S(w,{children:(j,B)=>{var y=M(),C=u(y);k(C,()=>it,(A,m)=>{m(A,{class:"flex items-center justify-between text-2xl",children:(o,v)=>{I();var h=Ut(),g=u(h),_=P(g);At(_,{get href(){return t.project.github},target:"_blank",variant:"ghost",children:(O,W)=>{var N=Lt(),Z=u(N);It(Z,{class:"mr-2 h-4 w-4"}),I(),d(O,N)},$$slots:{default:!0}}),G(()=>E(g,`${t.project.title??""} `)),d(o,h)},$$slots:{default:!0}})}),d(j,y)},$$slots:{default:!0}})});var R=P($,2);k(R,()=>ct,(w,S)=>{S(w,{children:(j,B)=>{var y=Wt(),C=u(y);k(C,()=>dt,(o,v)=>{v(o,{class:"text-lg",children:(h,g)=>{I();var _=tt();G(()=>E(_,t.project.description)),d(h,_)},$$slots:{default:!0}})});var A=P(C,2);F(A,21,()=>t.project.tags,J,(o,v,h)=>{var g=Kt(),_=u(g),O=q(_);z(_);var W=P(_,2);D(W,()=>h<t.project.tags.length-1,N=>{Pt(N,{class:"mx-4",orientation:"vertical"})}),G(()=>E(O,p(v))),d(o,g)}),z(A);var m=P(A,2);Ht(m,{get value(){return p(e)},max:100,class:"w-[100%]"}),d(j,y)},$$slots:{default:!0}})}),d(r,f)},$$slots:{default:!0}})}),d(s,n),K()}const Ft=[{completion:100,description:"A cross platform mobile application for playing some of my favorite card games.",github:"https://github.com/Adam-Schlichtmann/cardgames",slug:"cardgames",tags:["React Native","Expo","EAS","Git"],title:"Card Games App"},{completion:25,description:"A iOS mobile application for keeping track of board games. Keep track of your board game stats and see how you compare to your friends.",github:"https://github.com/Adam-Schlichtmann/boardgamehero",slug:"boardgamehero",tags:["Swift","SwiftUI","Firebase","Git","XCode"],title:"Board Game Hero"},{completion:100,description:"A simple boiler plate generation tool. Create reuseable templates for your project and generate them with ease.",github:"https://github.com/Adam-Schlichtmann/boilit",slug:"boilit",tags:["Rust","Cargo","CLI","Git"],title:"Boilit"},{completion:90,description:"A simple list app that can be used for shopping lists, to-do lists, or any other list you can think of.",github:"https://github.com/Adam-Schlichtmann/shopping",slug:"lists",tags:["Ruby on Rails","BootStrap","Git"],title:"Lists"}];var Jt=x('<h1 class="my-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Projects</h1> <!>',1);function me(s){var t=Jt(),e=P(u(t),2);F(e,1,()=>Ft,J,(n,c)=>{qt(n,{get project(){return p(c)}})}),d(s,t)}export{me as component};
