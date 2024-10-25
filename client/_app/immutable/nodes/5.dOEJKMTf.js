import{c as V,a as d,t as x,s as I,d as tt}from"../chunks/disclose-version.Jo1o5xe8.js";import{W as N,aK as T,U as q,g as p,aL as et,X as m,$ as F,a0 as H,Y as G,Z as B,aM as at,s as L,al as ot,at as U,_ as A,as as rt}from"../chunks/runtime.D52UDE1N.js";import{e as J,i as Y}from"../chunks/each.CnekBJsF.js";import{i as X}from"../chunks/lifecycle.BvJcSKEV.js";import{l as k,p as h,s as Z,a as st}from"../chunks/props.Cc-KhC3R.js";import{i as D,o as lt}from"../chunks/index-client.CddlMqPw.js";import{c as M}from"../chunks/svelte-component.sNBMpkah.js";import{C as nt,a as it,b as ct,c as dt,d as ut}from"../chunks/card-title.CxQRH5Jh.js";import{s as W,a as mt,I as gt,b as pt}from"../chunks/Icon.CDGSRBC1.js";import{w as ft,t as vt,o as ht,m as _t,c as bt,a as xt,r as yt,g as $t,b as Ct,B as Pt,S as At}from"../chunks/separator.ugzrSYo4.js";import{b as St}from"../chunks/this.DnHOJOWt.js";import{s as wt,a as jt}from"../chunks/store.B-x_QCt1.js";import{w as Mt}from"../chunks/index.DLKTsqLs.js";import{c as Gt}from"../chunks/utils.HgNuwJYh.js";const Vt=(n,t)=>{const a=ft(n),l=(o,e)=>{a.update(r=>{const i=o(r);let f=i;return t&&(f=t({curr:r,next:i})),e==null||e(f),f})};return{...a,update:l,set:o=>{l(()=>o)}}},kt={defaultValue:0,max:100},{name:Ot}=bt("progress"),Rt=n=>{const t={...kt,...n},a=vt(ht(t,"value")),{max:l}=a,c=t.value??Mt(t.defaultValue),o=Vt(c,t==null?void 0:t.onValueChange);return{elements:{root:_t(Ot(),{stores:[o,l],returned:([r,i])=>({value:r,max:i,role:"meter","aria-valuemin":0,"aria-valuemax":i,"aria-valuenow":r,"data-value":r,"data-state":r===null?"indeterminate":r===i?"complete":"loading","data-max":i})})},states:{value:o},options:a}};function Tt(){return{NAME:"progress",PARTS:["root"]}}function Nt(n){const{NAME:t,PARTS:a}=Tt(),l=xt(t,a),c={...Rt(yt(n)),getAttrs:l};return{...c,updateOption:$t(c.options)}}var Bt=x("<div><!></div>");function zt(n,t){const a=k(t,["children","$$slots","$$events","$$legacy"]),l=k(a,["max","value","onValueChange","asChild","el"]);N(t,!1);const c=wt(),o=()=>jt(S,"$root",c),e=at();let r=h(t,"max",24,()=>{}),i=h(t,"value",28,()=>{}),f=h(t,"onValueChange",24,()=>{}),y=h(t,"asChild",8,!1),O=h(t,"el",28,()=>{});const{elements:{root:S},states:{value:w},updateOption:j,getAttrs:z}=Nt({max:r(),defaultValue:i(),onValueChange:({next:u})=>{var s;return(s=f())==null||s(u),i(u),u}}),$=z("root");T(()=>q(i()),()=>{i()!==void 0&&w.set(i())}),T(()=>q(r()),()=>{j("max",r())}),T(()=>o(),()=>{L(e,o())}),T(()=>p(e),()=>{Object.assign(p(e),$)}),et(),X();var C=V(),P=m(C);D(P,y,u=>{var s=V(),v=m(s);W(v,t,"default",{get builder(){return p(e)}}),d(u,s)},u=>{var s=Bt();St(s,g=>O(g),()=>O());let v;var _=F(s);W(_,t,"default",{get builder(){return p(e)}}),H(s),G(()=>v=mt(s,v,{...p(e),...l})),Ct(s,g=>p(e).action(g)),d(u,s)}),d(n,C),B()}const Et=[{completion:100,description:"A cross platform mobile application for playing some of my favorite card games.",github:"https://github.com/Adam-Schlichtmann/cardgames",slug:"cardgames",tags:["React Native","Expo","EAS","Git"],title:"Card Games App"},{completion:25,description:"A iOS mobile application for keeping track of board games. Keep track of your board game stats and see how you compare to your friends.",github:"https://github.com/Adam-Schlichtmann/boardgamehero",slug:"boardgamehero",tags:["Swift","SwiftUI","Firebase","Git","XCode"],title:"Board Game Hero"},{completion:100,description:"A simple boiler plate generation tool. Create reuseable templates for your project and generate them with ease.",github:"https://github.com/Adam-Schlichtmann/boilit",slug:"boilit",tags:["Rust","Cargo","CLI","Git"],title:"Boilit"},{completion:90,description:"A simple list app that can be used for shopping lists, to-do lists, or any other list you can think of.",github:"https://github.com/Adam-Schlichtmann/shopping",slug:"lists",tags:["Ruby on Rails","BootStrap","Git"],title:"Lists"}],It=()=>({data:Et}),ue=Object.freeze(Object.defineProperty({__proto__:null,load:It},Symbol.toStringTag,{value:"Module"}));function Ut(n,t){const a=k(t,["children","$$slots","$$events","$$legacy"]);gt(n,Z({name:"github"},()=>a,{iconNode:[["path",{d:"M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"}],["path",{d:"M9 18c-4.51 2-5-2-7-2"}]],children:(c,o)=>{var e=V(),r=m(e);W(r,t,"default",{}),d(c,e)},$$slots:{default:!0}}))}var Ht=x('<div class="bg-primary h-full w-full flex-1 transition-all"></div>');function Lt(n,t){const a=k(t,["children","$$slots","$$events","$$legacy"]),l=k(a,["class","max","value"]);N(t,!1);let c=h(t,"class",8,void 0),o=h(t,"max",8,100),e=h(t,"value",8,void 0);X();var r=ot(()=>Gt("bg-secondary relative h-4 w-full overflow-hidden rounded-full",c()));zt(n,Z({get class(){return p(r)}},()=>l,{children:(i,f)=>{var y=Ht();G(()=>pt(y,"style",`transform: translateX(-${100-100*(e()??0)/(o()??1)}%)`)),d(i,y)},$$slots:{default:!0}})),B()}var Wt=x("<!> GitHub",1),Xt=x(" <!>",1),Kt=x('<p class="text-sm text-muted-foreground"> </p> <!>',1),qt=x('<!> <div class="my-4 flex flex-row flex-wrap"></div> <!>',1),Ft=x("<!> <!>",1);function Jt(n,t){N(t,!0);let a=rt(100);lt(()=>{const o=setTimeout(()=>{L(a,0),setTimeout(()=>{L(a,st(t.project.completion))},500+Math.random()*500)},500+Math.random()*500);return()=>clearTimeout(o)});var l=V(),c=m(l);M(c,()=>ut,(o,e)=>{e(o,{class:"my-2",children:(r,i)=>{var f=Ft(),y=m(f);M(y,()=>nt,(S,w)=>{w(S,{children:(j,z)=>{var $=V(),C=m($);M(C,()=>it,(P,u)=>{u(P,{class:"flex items-center justify-between text-2xl",children:(s,v)=>{U();var _=Xt(),g=m(_),b=A(g);Pt(b,{get href(){return t.project.github},target:"_blank",variant:"ghost",children:(E,K)=>{var R=Wt(),Q=m(R);Ut(Q,{class:"mr-2 h-4 w-4"}),U(),d(E,R)},$$slots:{default:!0}}),G(()=>I(g,`${t.project.title??""} `)),d(s,_)},$$slots:{default:!0}})}),d(j,$)},$$slots:{default:!0}})});var O=A(y,2);M(O,()=>ct,(S,w)=>{w(S,{children:(j,z)=>{var $=qt(),C=m($);M(C,()=>dt,(s,v)=>{v(s,{class:"text-lg",children:(_,g)=>{U();var b=tt();G(()=>I(b,t.project.description)),d(_,b)},$$slots:{default:!0}})});var P=A(C,2);J(P,21,()=>t.project.tags,Y,(s,v,_)=>{var g=Kt(),b=m(g),E=F(b);H(b);var K=A(b,2);D(K,()=>_<t.project.tags.length-1,R=>{At(R,{class:"mx-4",orientation:"vertical"})}),G(()=>I(E,p(v))),d(s,g)}),H(P);var u=A(P,2);Lt(u,{get value(){return p(a)},max:100,class:"w-[100%]"}),d(j,$)},$$slots:{default:!0}})}),d(r,f)},$$slots:{default:!0}})}),d(n,l),B()}var Yt=x('<h1 class="my-4 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">Projects</h1> <!>',1);function me(n,t){N(t,!1);let a=h(t,"data",8);X();var l=Yt(),c=A(m(l),2);J(c,1,()=>a().data,Y,(o,e)=>{Jt(o,{get project(){return p(e)}})}),d(n,l),B()}export{me as component,ue as universal};
