import{t as Y,q as j,aw as J,aA as S,ah as k,i as z,am as H,v as A,K as b,b as K,aB as Q,h as _,aC as P,M,l as E,k as N,d as u,J as w,aD as Z,aE as x,a as B,aF as R,aG as I,G as X,aH as ee,aI as te,C as re,f as ae,aJ as ne,c as oe,W as ie,Z as se,Q as ue}from"./runtime.D52UDE1N.js";const F=new Set,C=new Set;function de(e,t,r,i){function n(a){if(i.capture||T.call(t,a),!a.cancelBubble){var o=H,f=A;S(null),k(null);try{return r.call(this,a)}finally{S(o),k(f)}}}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?j(()=>{t.addEventListener(e,n,i)}):t.addEventListener(e,n,i),n}function ye(e,t,r,i,n){var a={capture:i,passive:n},o=de(e,t,r,a);(t===document.body||t===window||t===document)&&Y(()=>{t.removeEventListener(e,o,a)})}function ge(e){for(var t=0;t<e.length;t++)F.add(e[t]);for(var r of C)r(e)}function T(e){var W;var t=this,r=t.ownerDocument,i=e.type,n=((W=e.composedPath)==null?void 0:W.call(e))||[],a=n[0]||e.target,o=0,f=e.__root;if(f){var l=n.indexOf(f);if(l!==-1&&(t===document||t===window)){e.__root=t;return}var m=n.indexOf(t);if(m===-1)return;l<=m&&(o=l)}if(a=n[o]||e.target,a!==t){J(e,"currentTarget",{configurable:!0,get(){return a||r}});var D=H,h=A;S(null),k(null);try{for(var s,d=[];a!==null;){var v=a.assignedSlot||a.parentNode||a.host||null;try{var y=a["__"+i];if(y!==void 0&&!a.disabled)if(z(y)){var[G,...U]=y;G.apply(a,[e,...U])}else y.call(a,e)}catch(L){s?d.push(L):s=L}if(e.cancelBubble||v===t||v===null)break;a=v}if(s){for(let L of d)queueMicrotask(()=>{throw L});throw s}}finally{e.__root=t,delete e.currentTarget,S(D),k(h)}}}let c;function le(){c=void 0}function Ee(e){let t=null,r=_;var i;if(_){for(t=u,c===void 0&&(c=w(document.head));c!==null&&(c.nodeType!==8||c.data!==P);)c=M(c);c===null?E(!1):c=N(M(c))}_||(i=document.head.appendChild(b()));try{K(()=>e(i),Q)}finally{r&&(E(!0),c=u,N(t))}}function $(e){var t=document.createElement("template");return t.innerHTML=e,t.content}function p(e,t){var r=A;r.nodes_start===null&&(r.nodes_start=e,r.nodes_end=t)}function we(e,t){var r=(t&Z)!==0,i=(t&x)!==0,n,a=!e.startsWith("<!>");return()=>{if(_)return p(u,null),u;n===void 0&&(n=$(a?e:"<!>"+e),r||(n=w(n)));var o=i?document.importNode(n,!0):n.cloneNode(!0);if(r){var f=w(o),l=o.lastChild;p(f,l)}else p(o,o);return o}}function Te(e,t,r="svg"){var i=!e.startsWith("<!>"),n=`<${r}>${i?e:"<!>"+e}</${r}>`,a;return()=>{if(_)return p(u,null),u;if(!a){var o=$(n),f=w(o);a=w(f)}var l=a.cloneNode(!0);return p(l,l),l}}function be(e=""){if(!_){var t=b(e+"");return p(t,t),t}var r=u;return r.nodeType!==3&&(r.before(r=b()),N(r)),p(r,r),r}function Ne(){if(_)return p(u,null),u;var e=document.createDocumentFragment(),t=document.createComment(""),r=b();return e.append(t,r),p(t,r),e}function Ae(e,t){if(_){A.nodes_end=u,B();return}e!==null&&e.before(t)}function Le(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const fe=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function Se(e){return fe.includes(e)}const ce={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly"};function ke(e){return e=e.toLowerCase(),ce[e]??e}const _e=["touchstart","touchmove"];function he(e){return _e.includes(e)}let O=!0;function De(e){O=e}function Ie(e,t){var r=t==null?"":typeof t=="object"?t+"":t;r!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=r,e.nodeValue=r==null?"":r+"")}function pe(e,t){return q(e,t)}function Me(e,t){R(),t.intro=t.intro??!1;const r=t.target,i=_,n=u;try{for(var a=w(r);a&&(a.nodeType!==8||a.data!==P);)a=M(a);if(!a)throw I;E(!0),N(a),B();const o=q(e,{...t,anchor:a});if(u===null||u.nodeType!==8||u.data!==X)throw ee(),I;return E(!1),o}catch(o){if(o===I)return t.recover===!1&&te(),R(),re(r),E(!1),pe(e,t);throw o}finally{E(i),N(n),le()}}const g=new Map;function q(e,{target:t,anchor:r,props:i={},events:n,context:a,intro:o=!0}){R();var f=new Set,l=h=>{for(var s=0;s<h.length;s++){var d=h[s];if(!f.has(d)){f.add(d);var v=he(d);t.addEventListener(d,T,{passive:v});var y=g.get(d);y===void 0?(document.addEventListener(d,T,{passive:v}),g.set(d,1)):g.set(d,y+1)}}};l(ae(F)),C.add(l);var m=void 0,D=ne(()=>{var h=r??t.appendChild(b());return oe(()=>{if(a){ie({});var s=ue;s.c=a}n&&(i.$$events=n),_&&p(h,null),O=o,m=e(h,i)||{},O=!0,_&&(A.nodes_end=u),a&&se()}),()=>{var v;for(var s of f){t.removeEventListener(s,T);var d=g.get(s);--d===0?(document.removeEventListener(s,T),g.delete(s)):g.set(s,d)}C.delete(l),V.delete(m),h!==r&&((v=h.parentNode)==null||v.removeChild(h))}});return V.set(m,D),m}let V=new WeakMap;function Re(e){const t=V.get(e);t&&t()}const ve="5";typeof window<"u"&&(window.__svelte||(window.__svelte={v:new Set})).v.add(ve);export{Ae as a,O as b,Ne as c,be as d,p as e,De as f,de as g,Me as h,Le as i,ge as j,Se as k,Te as l,pe as m,ke as n,$ as o,Ee as p,ye as q,Ie as s,we as t,Re as u};