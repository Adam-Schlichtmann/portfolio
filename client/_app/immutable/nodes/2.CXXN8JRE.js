import{c as H,s as w,a as x,t as j}from"../chunks/disclose-version.Jo1o5xe8.js";import{h as g,t as O,W as N,s as m,X as k,$ as v,a0 as u,Y as W,g as i,Z as E,as as p,V as b,_ as A}from"../chunks/runtime.D52UDE1N.js";import{e as L,i as P}from"../chunks/each.CnekBJsF.js";import{i as X}from"../chunks/lifecycle.BvJcSKEV.js";import{a as y,p as Y}from"../chunks/props.Cc-KhC3R.js";import{o as F,i as T}from"../chunks/index-client.CddlMqPw.js";import{t as V,f as Z}from"../chunks/index.DkWgDsMA.js";function q(t,a){var n=t.__className,e=z(a);g&&t.className===e?t.__className=e:(n!==e||g&&t.className!==e)&&(a==null?t.removeAttribute("class"):t.className=e,t.__className=e)}function z(t){return t??""}function B(t,a,n,e=!0){e&&n();for(var s of a)t.addEventListener(s,n);O(()=>{for(var o of a)t.removeEventListener(o,n)})}function M(t,a){B(window,["resize"],()=>a(window[t]))}const C={name:"Adam Schlichtmann",adjectives:["Sr. Software Engineer","Web Developer","Problem Solver","Mobile Developer"]},G=()=>({data:C}),nt=Object.freeze(Object.defineProperty({__proto__:null,load:G},Symbol.toStringTag,{value:"Module"}));var I=j('<div><h3 class="text-xl lg:text-2xl"> </h3></div>');function J(t,a){N(a,!0);let n=p(!1);F(()=>(m(n,!0),()=>m(n,!1)));const e=r=>Math.round(Math.min(r*.8,Math.max(r*.2,Math.random()*r))),s=r=>{const c=Math.random()*r;return Math.random()>.5?-c-300:r+c+300};let o=p(0),d=p(0),_=b(()=>e(i(o))),h=b(()=>e(i(d)));var f=H(),S=k(f);T(S,()=>i(n)&&i(_)>0&&i(h)>0,r=>{var l=I(),c=v(l),D=v(c);u(c),u(l),W(()=>{q(l,`mx-6 my-4 flex ${a.index%2===0?"justify-end":"justify-start"} items-center`),w(D,a.word)}),V(1,l,()=>Z,()=>({delay:400+a.index*200,duration:2e3,x:s(i(o)),y:s(i(d)),opacity:Math.random()*.5})),x(r,l)}),M("innerWidth",r=>m(o,y(r))),M("innerHeight",r=>m(d,y(r))),x(t,f),E()}var K=j('<div><h1 class="text-center text-4xl font-extrabold tracking-tight lg:text-5xl"> </h1> <!></div>');function rt(t,a){N(a,!1);let n=Y(a,"data",8);X();var e=K(),s=v(e),o=v(s);u(s);var d=A(s,2);L(d,1,()=>n().data.adjectives,P,(_,h,f)=>{J(_,{get word(){return i(h)},index:f})}),u(e),W(()=>w(o,n().data.name)),x(t,e),E()}export{rt as component,nt as universal};