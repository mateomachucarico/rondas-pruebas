var u=Object.create;var l=Object.defineProperty,v=Object.defineProperties,w=Object.getOwnPropertyDescriptor,x=Object.getOwnPropertyDescriptors,y=Object.getOwnPropertyNames,p=Object.getOwnPropertySymbols,z=Object.getPrototypeOf,r=Object.prototype.hasOwnProperty,A=Object.prototype.propertyIsEnumerable;var m=(a,b)=>(b=Symbol[a])?b:Symbol.for("Symbol."+a);var q=(a,b,c)=>b in a?l(a,b,{enumerable:!0,configurable:!0,writable:!0,value:c}):a[b]=c,C=(a,b)=>{for(var c in b||={})r.call(b,c)&&q(a,c,b[c]);if(p)for(var c of p(b))A.call(b,c)&&q(a,c,b[c]);return a},D=(a,b)=>v(a,x(b));var E=(a=>typeof require<"u"?require:typeof Proxy<"u"?new Proxy(a,{get:(b,c)=>(typeof require<"u"?require:b)[c]}):a)(function(a){if(typeof require<"u")return require.apply(this,arguments);throw Error('Dynamic require of "'+a+'" is not supported')});var F=(a,b)=>()=>(a&&(b=a(a=0)),b);var G=(a,b)=>()=>(b||a((b={exports:{}}).exports,b),b.exports),H=(a,b)=>{for(var c in b)l(a,c,{get:b[c],enumerable:!0})},s=(a,b,c,g)=>{if(b&&typeof b=="object"||typeof b=="function")for(let e of y(b))!r.call(a,e)&&e!==c&&l(a,e,{get:()=>b[e],enumerable:!(g=w(b,e))||g.enumerable});return a};var I=(a,b,c)=>(c=a!=null?u(z(a)):{},s(b||!a||!a.__esModule?l(c,"default",{value:a,enumerable:!0}):c,a)),J=a=>s(l({},"__esModule",{value:!0}),a);var K=(a,b,c)=>new Promise((g,e)=>{var h=d=>{try{f(c.next(d))}catch(i){e(i)}},j=d=>{try{f(c.throw(d))}catch(i){e(i)}},f=d=>d.done?g(d.value):Promise.resolve(d.value).then(h,j);f((c=c.apply(a,b)).next())}),B=function(a,b){this[0]=a,this[1]=b},L=(a,b,c)=>{var g=(j,f,d,i)=>{try{var n=c[j](f),o=(f=n.value)instanceof B,t=n.done;Promise.resolve(o?f[0]:f).then(k=>o?g(j==="return"?j:"next",f[1]?{done:k.done,value:k.value}:k,d,i):d({value:k,done:t})).catch(k=>g("throw",k,d,i))}catch(k){i(k)}},e=j=>h[j]=f=>new Promise((d,i)=>g(j,f,d,i)),h={};return c=c.apply(a,b),h[m("asyncIterator")]=()=>h,e("next"),e("throw"),e("return"),h};var M=(a,b,c)=>(b=a[m("asyncIterator")])?b.call(a):(a=a[m("iterator")](),b={},c=(g,e)=>(e=a[g])&&(b[g]=h=>new Promise((j,f,d)=>(h=e.call(a,h),d=h.done,Promise.resolve(h.value).then(i=>j({value:i,done:d}),f)))),c("next"),c("return"),b);export{C as a,D as b,E as c,F as d,G as e,H as f,I as g,J as h,K as i,B as j,L as k,M as l};
