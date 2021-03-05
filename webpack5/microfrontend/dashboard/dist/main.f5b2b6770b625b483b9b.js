(()=>{var e,t,r,n,o,a,i,l={359:(e,t,r)=>{"use strict";var n=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof HelloWorldApp)return e();r.l("http://localhost:9001/remoteEntry.js",(r=>{if("undefined"!=typeof HelloWorldApp)return e();var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,t(n)}),"HelloWorldApp")})).then((()=>HelloWorldApp))},642:(e,t,r)=>{"use strict";var n=new Error;e.exports=new Promise(((e,t)=>{if("undefined"!=typeof KiwiApp)return e();r.l("http://localhost:9002/remoteEntry.js",(r=>{if("undefined"!=typeof KiwiApp)return e();var o=r&&("load"===r.type?"missing":r.type),a=r&&r.target&&r.target.src;n.message="Loading script failed.\n("+o+": "+a+")",n.name="ScriptExternalLoadError",n.type=o,n.request=a,t(n)}),"KiwiApp")})).then((()=>KiwiApp))}},p={};function s(e){if(p[e])return p[e].exports;var t=p[e]={exports:{}};return l[e](t,t.exports,s),t.exports}s.m=l,t=Object.getPrototypeOf?e=>Object.getPrototypeOf(e):e=>e.__proto__,s.t=function(r,n){if(1&n&&(r=this(r)),8&n)return r;if("object"==typeof r&&r){if(4&n&&r.__esModule)return r;if(16&n&&"function"==typeof r.then)return r}var o=Object.create(null);s.r(o);var a={};e=e||[null,t({}),t([]),t(t)];for(var i=2&n&&r;"object"==typeof i&&!~e.indexOf(i);i=t(i))Object.getOwnPropertyNames(i).forEach((e=>a[e]=()=>r[e]));return a.default=()=>r,s.d(o,a),o},s.d=(e,t)=>{for(var r in t)s.o(t,r)&&!s.o(e,r)&&Object.defineProperty(e,r,{enumerable:!0,get:t[r]})},s.f={},s.e=e=>Promise.all(Object.keys(s.f).reduce(((t,r)=>(s.f[r](e,t),t)),[])),s.u=e=>e+"."+{615:"47aa511442ca8251f89e",811:"7ec5f6cbe4a0c37acc49"}[e]+".js",s.miniCssF=e=>{},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),r={},n="dashboard:",s.l=(e,t,o,a)=>{if(r[e])r[e].push(t);else{var i,l;if(void 0!==o)for(var p=document.getElementsByTagName("script"),f=0;f<p.length;f++){var d=p[f];if(d.getAttribute("src")==e||d.getAttribute("data-webpack")==n+o){i=d;break}}i||(l=!0,(i=document.createElement("script")).charset="utf-8",i.timeout=120,s.nc&&i.setAttribute("nonce",s.nc),i.setAttribute("data-webpack",n+o),i.src=e),r[e]=[t];var u=(t,n)=>{i.onerror=i.onload=null,clearTimeout(c);var o=r[e];if(delete r[e],i.parentNode&&i.parentNode.removeChild(i),o&&o.forEach((e=>e(n))),t)return t(n)},c=setTimeout(u.bind(null,void 0,{type:"timeout",target:i}),12e4);i.onerror=u.bind(null,i.onerror),i.onload=u.bind(null,i.onload),l&&document.head.appendChild(i)}},s.r=e=>{"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o={615:[615],811:[811]},a={615:["default","./KiwiPage",642],811:["default","./HelloWorldPage",359]},s.f.remotes=(e,t)=>{s.o(o,e)&&o[e].forEach((e=>{var r=s.R;r||(r=[]);var n=a[e];if(!(r.indexOf(n)>=0)){if(r.push(n),n.p)return t.push(n.p);var o=t=>{t||(t=new Error("Container missing")),"string"==typeof t.message&&(t.message+='\nwhile loading "'+n[1]+'" from '+n[2]),l[e]=()=>{throw t},n.p=0},i=(e,r,a,i,l,p)=>{try{var s=e(r,a);if(!s||!s.then)return l(s,i,p);var f=s.then((e=>l(e,i)),o);if(!p)return f;t.push(n.p=f)}catch(e){o(e)}},p=(e,t,o)=>i(t.get,n[1],r,0,f,o),f=t=>{n.p=1,l[e]=e=>{e.exports=t()}};i(s,n[2],0,0,((e,t,r)=>e?i(s.I,n[0],0,e,p,r):o()),1)}}))},(()=>{s.S={};var e={},t={};s.I=(r,n)=>{n||(n=[]);var o=t[r];if(o||(o=t[r]={}),!(n.indexOf(o)>=0)){if(n.push(o),e[r])return e[r];s.o(s.S,r)||(s.S[r]={}),s.S[r];var a=e=>{var t=e=>{return t="Initialization of sharing external failed: "+e,"undefined"!=typeof console&&console.warn&&console.warn(t);var t};try{var o=s(e);if(!o)return;var a=e=>e&&e.init&&e.init(s.S[r],n);if(o.then)return i.push(o.then(a,t));var l=a(o);if(l&&l.then)return i.push(l.catch(t))}catch(e){t(e)}},i=[];switch(r){case"default":a(359),a(642)}return i.length?e[r]=Promise.all(i).then((()=>e[r]=1)):e[r]=1}}})(),s.p="http://localhost:9000/",(()=>{var e={179:0};s.f.j=(t,r)=>{e[t]=0};var t=(t,r)=>{for(var n,o,[a,i,l]=r,p=0,f=[];p<a.length;p++)o=a[p],s.o(e,o)&&e[o]&&f.push(e[o][0]),e[o]=0;for(n in i)s.o(i,n)&&(s.m[n]=i[n]);for(l&&l(s),t&&t(r);f.length;)f.shift()()},r=self.webpackChunkdashboard=self.webpackChunkdashboard||[];r.forEach(t.bind(null,0)),r.push=t.bind(null,r.push.bind(r))})(),"/hello-world-page"===(i=window.location.pathname)?s.e(811).then(s.t.bind(s,811,23)).then((function(e){(new(0,e.default)).render()})):"/kiwi-page"===i&&s.e(615).then(s.t.bind(s,615,23)).then((function(e){(new(0,e.default)).render()})),console.log("dashboard")})();