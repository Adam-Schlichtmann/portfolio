import{c as $,a as d,s as g,t as b}from"../chunks/disclose-version.DlT7Drtr.js";import{ai as x,ah as S,s as _,am as p,an as n,al as c,g as v,aj as A,ak as L,ap as G,z as y}from"../chunks/runtime.BhQpX46-.js";import{e as N,i as j}from"../chunks/each.BBUPR2BA.js";import{i as I}from"../chunks/lifecycle.C7grkdTb.js";import{o as R,i as T}from"../chunks/index-client.UoTm1emZ.js";import{t as W,s as B}from"../chunks/index.CGKe912v.js";import{I as D,s as M}from"../chunks/Icon.CmhFO5rY.js";import{l as O,s as P}from"../chunks/props.CkKpgvE0.js";const u={name:"Adam Schlichtmann",elevator:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet, consectetur adipiscing elit.",skills:[{name:"TypeScript",level:4},{name:"Node.js",level:3},{name:"React Native",level:4},{name:"Expo",level:4},{name:"EAS",level:4},{name:"Git",level:4},{name:"Rust",level:2},{name:"Go",level:2},{name:"Docker",level:3}].sort((t,e)=>e.level===t.level?t.name<e.name?-1:1:e.level-t.level)};function U(t,e){const s=O(e,["children","$$slots","$$events","$$legacy"]);D(t,P({name:"star"},()=>s,{iconNode:[["polygon",{points:"12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"}]],children:(o,i)=>{var a=$(),r=x(a);M(r,e,"default",{}),d(o,a)},$$slots:{default:!0}}))}var q=b('<div class="my-2 flex flex-row justify-between"><h5 class="text-m mr-4"> </h5> <div class="flex flex-row"></div></div>');function C(t,e){S(e,!0);let s=G(!1);R(()=>(_(s,!0),()=>_(s,!1)));var l=$(),o=x(l);T(o,()=>v(s),i=>{var a=q(),r=p(a),f=p(r);n(r);var m=c(r,2);N(m,20,()=>({length:5}),j,(w,H,k)=>{var z=y(()=>k<=e.skill.level?"fill-primary":"fill-background stroke-primary"),E=y(()=>k<=e.skill.level?0:1);U(w,{get class(){return v(z)},get strokeWidth(){return v(E)}})}),n(m),n(a),A(()=>g(f,e.skill.name)),W(1,a,()=>B,()=>({delay:400+e.index*200,duration:2e3,axis:"x"})),d(i,a)}),d(t,l),L()}var F=b('<h1 class="my-2 scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">About</h1> <h1 class="text-xl"> </h1> <p class="text-m my-4"> </p> <!>',1);function te(t,e){S(e,!1),I();var s=F(),l=c(x(s),2),o=p(l);n(l);var i=c(l,2),a=p(i);n(i);var r=c(i,2);N(r,1,()=>u.skills,j,(f,m,h)=>{C(f,{get skill(){return v(m)},index:h})}),A(()=>{g(o,u.name),g(a,u.elevator)}),d(t,s),L()}export{te as component};