import{b as j,h as w,a as ee,i as ae,f as X,H as re,j as F,k,l as b,d as H,o as P,c as Q,p as ne,I as L,v as G,w as J,x as y,y as fe,m as le,z as K,A as O,B as ie,C as se,D as ue,F as te,G as ve,J as _e,K as de,L as W,q as ce,M as oe,N as he}from"./runtime.D52UDE1N.js";let R=null;function Te(f){R=f}function xe(f,e){return e}function Ee(f,e,a,t){for(var v=[],_=e.length,s=0;s<_;s++)ie(e[s].e,v,!0);var p=_>0&&v.length===0&&a!==null;if(p){var E=a.parentNode;se(E),E.append(a),t.clear(),C(f,e[0].prev,e[_-1].next)}ue(v,()=>{for(var h=0;h<_;h++){var c=e[h];p||(t.delete(c.k),C(f,c.prev,c.next)),te(c.e,!p)}})}function Ce(f,e,a,t,v,_=null){var s=f,p={flags:e,items:new Map,first:null},E=(e&W)!==0;if(E){var h=f;s=w?k(_e(h)):h.appendChild(de())}w&&ee();var c=null,n=!1;j(()=>{var d=a(),i=ae(d)?d:d==null?[]:X(d),u=i.length;if(n&&u===0)return;n=u===0;let o=!1;if(w){var I=s.data===re;I!==(u===0)&&(s=F(),k(s),b(!1),o=!0)}if(w){for(var T=null,A,r=0;r<u;r++){if(H.nodeType===8&&H.data===ve){s=H,o=!0,b(!1);break}var l=i[r],D=t(l,r);A=Z(H,p,T,null,l,D,r,v,e),p.items.set(D,A),T=A}u>0&&k(F())}w||pe(i,p,s,v,e,t),_!==null&&(u===0?c?P(c):c=Q(()=>_(s)):c!==null&&ne(c,()=>{c=null})),o&&b(!0),a()}),w&&(s=H)}function pe(f,e,a,t,v,_){var q,B,V,Y;var s=(v&he)!==0,p=(v&(y|O))!==0,E=f.length,h=e.items,c=e.first,n=c,d,i=null,u,o=[],I=[],T,A,r,l;if(s)for(l=0;l<E;l+=1)T=f[l],A=_(T,l),r=h.get(A),r!==void 0&&((q=r.a)==null||q.measure(),(u??(u=new Set)).add(r));for(l=0;l<E;l+=1){if(T=f[l],A=_(T,l),r=h.get(A),r===void 0){var D=n?n.e.nodes_start:a;i=Z(D,e,i,i===null?e.first:i.next,T,A,l,t,v),h.set(A,i),o=[],I=[],n=i.next;continue}if(p&&Ae(r,T,l,v),r.e.f&L&&(P(r.e),s&&((B=r.a)==null||B.unfix(),(u??(u=new Set)).delete(r))),r!==n){if(d!==void 0&&d.has(r)){if(o.length<I.length){var M=I[0],x;i=M.prev;var m=o[0],S=o[o.length-1];for(x=0;x<o.length;x+=1)U(o[x],M,a);for(x=0;x<I.length;x+=1)d.delete(I[x]);C(e,m.prev,S.next),C(e,i,m),C(e,S,M),n=M,i=S,l-=1,o=[],I=[]}else d.delete(r),U(r,n,a),C(e,r.prev,r.next),C(e,r,i===null?e.first:i.next),C(e,i,r),i=r;continue}for(o=[],I=[];n!==null&&n.k!==A;)n.e.f&L||(d??(d=new Set)).add(n),I.push(n),n=n.next;if(n===null)continue;r=n}o.push(r),i=r,n=r.next}if(n!==null||d!==void 0){for(var N=d===void 0?[]:X(d);n!==null;)n.e.f&L||N.push(n),n=n.next;var g=N.length;if(g>0){var $=v&W&&E===0?a:null;if(s){for(l=0;l<g;l+=1)(V=N[l].a)==null||V.measure();for(l=0;l<g;l+=1)(Y=N[l].a)==null||Y.fix()}Ee(e,N,$,h)}}s&&ce(()=>{var z;if(u!==void 0)for(r of u)(z=r.a)==null||z.apply()}),G.first=e.first&&e.first.e,G.last=i&&i.e}function Ae(f,e,a,t){t&y&&J(f.v,e),t&O?J(f.i,a):f.i=a}function Z(f,e,a,t,v,_,s,p,E){var h=R;try{var c=(E&y)!==0,n=(E&fe)===0,d=c?n?le(v):K(v):v,i=E&O?K(s):s,u={i,v:d,k:_,a:null,e:null,prev:a,next:t};return R=u,u.e=Q(()=>p(f,d,i),w),u.e.prev=a&&a.e,u.e.next=t&&t.e,a===null?e.first=u:(a.next=u,a.e.next=u.e),t!==null&&(t.prev=u,t.e.prev=u.e),u}finally{R=h}}function U(f,e,a){for(var t=f.next?f.next.e.nodes_start:a,v=e?e.e.nodes_start:a,_=f.e.nodes_start;_!==t;){var s=oe(_);v.before(_),_=s}}function C(f,e,a){e===null?f.first=a:(e.next=a,e.e.next=a&&a.e),a!==null&&(a.prev=e,a.e.prev=e&&e.e)}export{R as c,Ce as e,xe as i,Te as s};