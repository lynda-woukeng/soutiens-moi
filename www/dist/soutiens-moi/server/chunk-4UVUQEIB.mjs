import './polyfills.server.mjs';
var i=(s,n,f)=>typeof f=="function"?f(s,n):typeof f=="string"?s[f]===n[f]:Array.isArray(n)?n.includes(s):s===n,t=(s,n,f)=>s===void 0?!1:Array.isArray(s)?s.some(y=>i(y,n,f)):i(s,n,f);export{i as a,t as b};
