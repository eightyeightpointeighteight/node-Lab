"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/blurhash";
exports.ids = ["vendor-chunks/blurhash"];
exports.modules = {

/***/ "(rsc)/./node_modules/blurhash/dist/index.mjs":
/*!**********************************************!*\
  !*** ./node_modules/blurhash/dist/index.mjs ***!
  \**********************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   ValidationError: () => (/* binding */ d),\n/* harmony export */   decode: () => (/* binding */ j),\n/* harmony export */   encode: () => (/* binding */ S),\n/* harmony export */   isBlurhashValid: () => (/* binding */ N)\n/* harmony export */ });\nvar q=[\"0\",\"1\",\"2\",\"3\",\"4\",\"5\",\"6\",\"7\",\"8\",\"9\",\"A\",\"B\",\"C\",\"D\",\"E\",\"F\",\"G\",\"H\",\"I\",\"J\",\"K\",\"L\",\"M\",\"N\",\"O\",\"P\",\"Q\",\"R\",\"S\",\"T\",\"U\",\"V\",\"W\",\"X\",\"Y\",\"Z\",\"a\",\"b\",\"c\",\"d\",\"e\",\"f\",\"g\",\"h\",\"i\",\"j\",\"k\",\"l\",\"m\",\"n\",\"o\",\"p\",\"q\",\"r\",\"s\",\"t\",\"u\",\"v\",\"w\",\"x\",\"y\",\"z\",\"#\",\"$\",\"%\",\"*\",\"+\",\",\",\"-\",\".\",\":\",\";\",\"=\",\"?\",\"@\",\"[\",\"]\",\"^\",\"_\",\"{\",\"|\",\"}\",\"~\"],x=t=>{let e=0;for(let r=0;r<t.length;r++){let n=t[r],l=q.indexOf(n);e=e*83+l}return e},p=(t,e)=>{var r=\"\";for(let n=1;n<=e;n++){let l=Math.floor(t)/Math.pow(83,e-n)%83;r+=q[Math.floor(l)]}return r};var f=t=>{let e=t/255;return e<=.04045?e/12.92:Math.pow((e+.055)/1.055,2.4)},h=t=>{let e=Math.max(0,Math.min(1,t));return e<=.0031308?Math.trunc(e*12.92*255+.5):Math.trunc((1.055*Math.pow(e,.4166666666666667)-.055)*255+.5)},F=t=>t<0?-1:1,M=(t,e)=>F(t)*Math.pow(Math.abs(t),e);var d=class extends Error{constructor(e){super(e),this.name=\"ValidationError\",this.message=e}};var C=t=>{if(!t||t.length<6)throw new d(\"The blurhash string must be at least 6 characters\");let e=x(t[0]),r=Math.floor(e/9)+1,n=e%9+1;if(t.length!==4+2*n*r)throw new d(`blurhash length mismatch: length is ${t.length} but it should be ${4+2*n*r}`)},N=t=>{try{C(t)}catch(e){return{result:!1,errorReason:e.message}}return{result:!0}},z=t=>{let e=t>>16,r=t>>8&255,n=t&255;return[f(e),f(r),f(n)]},L=(t,e)=>{let r=Math.floor(t/361),n=Math.floor(t/19)%19,l=t%19;return[M((r-9)/9,2)*e,M((n-9)/9,2)*e,M((l-9)/9,2)*e]},U=(t,e,r,n)=>{C(t),n=n|1;let l=x(t[0]),m=Math.floor(l/9)+1,b=l%9+1,i=(x(t[1])+1)/166,u=new Array(b*m);for(let o=0;o<u.length;o++)if(o===0){let a=x(t.substring(2,6));u[o]=z(a)}else{let a=x(t.substring(4+o*2,6+o*2));u[o]=L(a,i*n)}let c=e*4,s=new Uint8ClampedArray(c*r);for(let o=0;o<r;o++)for(let a=0;a<e;a++){let y=0,B=0,R=0;for(let w=0;w<m;w++)for(let P=0;P<b;P++){let G=Math.cos(Math.PI*a*P/e)*Math.cos(Math.PI*o*w/r),T=u[P+w*b];y+=T[0]*G,B+=T[1]*G,R+=T[2]*G}let V=h(y),I=h(B),E=h(R);s[4*a+0+o*c]=V,s[4*a+1+o*c]=I,s[4*a+2+o*c]=E,s[4*a+3+o*c]=255}return s},j=U;var A=4,D=(t,e,r,n)=>{let l=0,m=0,b=0,g=e*A;for(let u=0;u<e;u++){let c=A*u;for(let s=0;s<r;s++){let o=c+s*g,a=n(u,s);l+=a*f(t[o]),m+=a*f(t[o+1]),b+=a*f(t[o+2])}}let i=1/(e*r);return[l*i,m*i,b*i]},$=t=>{let e=h(t[0]),r=h(t[1]),n=h(t[2]);return(e<<16)+(r<<8)+n},H=(t,e)=>{let r=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[0]/e,.5)*9+9.5)))),n=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[1]/e,.5)*9+9.5)))),l=Math.floor(Math.max(0,Math.min(18,Math.floor(M(t[2]/e,.5)*9+9.5))));return r*19*19+n*19+l},O=(t,e,r,n,l)=>{if(n<1||n>9||l<1||l>9)throw new d(\"BlurHash must have between 1 and 9 components\");if(e*r*4!==t.length)throw new d(\"Width and height must match the pixels array\");let m=[];for(let s=0;s<l;s++)for(let o=0;o<n;o++){let a=o==0&&s==0?1:2,y=D(t,e,r,(B,R)=>a*Math.cos(Math.PI*o*B/e)*Math.cos(Math.PI*s*R/r));m.push(y)}let b=m[0],g=m.slice(1),i=\"\",u=n-1+(l-1)*9;i+=p(u,1);let c;if(g.length>0){let s=Math.max(...g.map(a=>Math.max(...a))),o=Math.floor(Math.max(0,Math.min(82,Math.floor(s*166-.5))));c=(o+1)/166,i+=p(o,1)}else c=1,i+=p(0,1);return i+=p($(b),4),g.forEach(s=>{i+=p(H(s,c),2)}),i},S=O;\n//# sourceMappingURL=index.mjs.map//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHJzYykvLi9ub2RlX21vZHVsZXMvYmx1cmhhc2gvZGlzdC9pbmRleC5tanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUFBLHFTQUFxUyxnQ0FBZ0MsUUFBUSxhQUFhLFFBQVEsWUFBWSxXQUFXLEtBQUssMEJBQTBCLFNBQVMsU0FBUyxXQUFXLFNBQVMsWUFBWSxLQUFLLEtBQUssd0NBQXdDLG9CQUFvQixVQUFVLFVBQVUsWUFBWSxzREFBc0QsT0FBTyxnQ0FBZ0MsNEdBQTRHLHFEQUFxRCwwQkFBMEIsZUFBZSxzREFBc0QsVUFBVSxtRkFBbUYsMENBQTBDLHlFQUF5RSxVQUFVLG1CQUFtQixRQUFRLEdBQUcsT0FBTyxJQUFJLEtBQUssU0FBUyxPQUFPLGlDQUFpQyxPQUFPLFdBQVcsT0FBTywrQkFBK0IsdUJBQXVCLFdBQVcscURBQXFELHFEQUFxRCxlQUFlLFdBQVcsNkVBQTZFLFlBQVksV0FBVyxjQUFjLDBCQUEwQixVQUFVLEtBQUssa0NBQWtDLGNBQWMsdUNBQXVDLFlBQVksSUFBSSxnQkFBZ0IsSUFBSSxLQUFLLGdCQUFnQixZQUFZLElBQUksZ0JBQWdCLElBQUksS0FBSyxpRUFBaUUsOEJBQThCLHlCQUF5Qiw4REFBOEQsU0FBUyxLQUFLLHNCQUFzQixzQkFBc0IsWUFBWSxJQUFJLEtBQUssVUFBVSxZQUFZLElBQUksS0FBSyxxQkFBcUIsNENBQTRDLGNBQWMsb0JBQW9CLE9BQU8sa0NBQWtDLHVCQUF1QixXQUFXLHNOQUFzTixzQkFBc0IsaUJBQWlCLG1GQUFtRixnRkFBZ0YsU0FBUyxZQUFZLElBQUksZ0JBQWdCLElBQUksS0FBSyx5RkFBeUYsVUFBVSwyQ0FBMkMsVUFBVSxNQUFNLGVBQWUsd0dBQXdHLHNCQUFzQixtQkFBbUIsa0NBQWtDLGVBQWUsSUFBSSxLQUErRTtBQUM5bEciLCJzb3VyY2VzIjpbIi9Vc2Vycy9hbmRyZXdmaXJtYW4vRGV2L25vZGVMYWIvbm9kZV9tb2R1bGVzL2JsdXJoYXNoL2Rpc3QvaW5kZXgubWpzIl0sInNvdXJjZXNDb250ZW50IjpbInZhciBxPVtcIjBcIixcIjFcIixcIjJcIixcIjNcIixcIjRcIixcIjVcIixcIjZcIixcIjdcIixcIjhcIixcIjlcIixcIkFcIixcIkJcIixcIkNcIixcIkRcIixcIkVcIixcIkZcIixcIkdcIixcIkhcIixcIklcIixcIkpcIixcIktcIixcIkxcIixcIk1cIixcIk5cIixcIk9cIixcIlBcIixcIlFcIixcIlJcIixcIlNcIixcIlRcIixcIlVcIixcIlZcIixcIldcIixcIlhcIixcIllcIixcIlpcIixcImFcIixcImJcIixcImNcIixcImRcIixcImVcIixcImZcIixcImdcIixcImhcIixcImlcIixcImpcIixcImtcIixcImxcIixcIm1cIixcIm5cIixcIm9cIixcInBcIixcInFcIixcInJcIixcInNcIixcInRcIixcInVcIixcInZcIixcIndcIixcInhcIixcInlcIixcInpcIixcIiNcIixcIiRcIixcIiVcIixcIipcIixcIitcIixcIixcIixcIi1cIixcIi5cIixcIjpcIixcIjtcIixcIj1cIixcIj9cIixcIkBcIixcIltcIixcIl1cIixcIl5cIixcIl9cIixcIntcIixcInxcIixcIn1cIixcIn5cIl0seD10PT57bGV0IGU9MDtmb3IobGV0IHI9MDtyPHQubGVuZ3RoO3IrKyl7bGV0IG49dFtyXSxsPXEuaW5kZXhPZihuKTtlPWUqODMrbH1yZXR1cm4gZX0scD0odCxlKT0+e3ZhciByPVwiXCI7Zm9yKGxldCBuPTE7bjw9ZTtuKyspe2xldCBsPU1hdGguZmxvb3IodCkvTWF0aC5wb3coODMsZS1uKSU4MztyKz1xW01hdGguZmxvb3IobCldfXJldHVybiByfTt2YXIgZj10PT57bGV0IGU9dC8yNTU7cmV0dXJuIGU8PS4wNDA0NT9lLzEyLjkyOk1hdGgucG93KChlKy4wNTUpLzEuMDU1LDIuNCl9LGg9dD0+e2xldCBlPU1hdGgubWF4KDAsTWF0aC5taW4oMSx0KSk7cmV0dXJuIGU8PS4wMDMxMzA4P01hdGgudHJ1bmMoZSoxMi45MioyNTUrLjUpOk1hdGgudHJ1bmMoKDEuMDU1Kk1hdGgucG93KGUsLjQxNjY2NjY2NjY2NjY2NjcpLS4wNTUpKjI1NSsuNSl9LEY9dD0+dDwwPy0xOjEsTT0odCxlKT0+Rih0KSpNYXRoLnBvdyhNYXRoLmFicyh0KSxlKTt2YXIgZD1jbGFzcyBleHRlbmRzIEVycm9ye2NvbnN0cnVjdG9yKGUpe3N1cGVyKGUpLHRoaXMubmFtZT1cIlZhbGlkYXRpb25FcnJvclwiLHRoaXMubWVzc2FnZT1lfX07dmFyIEM9dD0+e2lmKCF0fHx0Lmxlbmd0aDw2KXRocm93IG5ldyBkKFwiVGhlIGJsdXJoYXNoIHN0cmluZyBtdXN0IGJlIGF0IGxlYXN0IDYgY2hhcmFjdGVyc1wiKTtsZXQgZT14KHRbMF0pLHI9TWF0aC5mbG9vcihlLzkpKzEsbj1lJTkrMTtpZih0Lmxlbmd0aCE9PTQrMipuKnIpdGhyb3cgbmV3IGQoYGJsdXJoYXNoIGxlbmd0aCBtaXNtYXRjaDogbGVuZ3RoIGlzICR7dC5sZW5ndGh9IGJ1dCBpdCBzaG91bGQgYmUgJHs0KzIqbipyfWApfSxOPXQ9Pnt0cnl7Qyh0KX1jYXRjaChlKXtyZXR1cm57cmVzdWx0OiExLGVycm9yUmVhc29uOmUubWVzc2FnZX19cmV0dXJue3Jlc3VsdDohMH19LHo9dD0+e2xldCBlPXQ+PjE2LHI9dD4+OCYyNTUsbj10JjI1NTtyZXR1cm5bZihlKSxmKHIpLGYobildfSxMPSh0LGUpPT57bGV0IHI9TWF0aC5mbG9vcih0LzM2MSksbj1NYXRoLmZsb29yKHQvMTkpJTE5LGw9dCUxOTtyZXR1cm5bTSgoci05KS85LDIpKmUsTSgobi05KS85LDIpKmUsTSgobC05KS85LDIpKmVdfSxVPSh0LGUscixuKT0+e0ModCksbj1ufDE7bGV0IGw9eCh0WzBdKSxtPU1hdGguZmxvb3IobC85KSsxLGI9bCU5KzEsaT0oeCh0WzFdKSsxKS8xNjYsdT1uZXcgQXJyYXkoYiptKTtmb3IobGV0IG89MDtvPHUubGVuZ3RoO28rKylpZihvPT09MCl7bGV0IGE9eCh0LnN1YnN0cmluZygyLDYpKTt1W29dPXooYSl9ZWxzZXtsZXQgYT14KHQuc3Vic3RyaW5nKDQrbyoyLDYrbyoyKSk7dVtvXT1MKGEsaSpuKX1sZXQgYz1lKjQscz1uZXcgVWludDhDbGFtcGVkQXJyYXkoYypyKTtmb3IobGV0IG89MDtvPHI7bysrKWZvcihsZXQgYT0wO2E8ZTthKyspe2xldCB5PTAsQj0wLFI9MDtmb3IobGV0IHc9MDt3PG07dysrKWZvcihsZXQgUD0wO1A8YjtQKyspe2xldCBHPU1hdGguY29zKE1hdGguUEkqYSpQL2UpKk1hdGguY29zKE1hdGguUEkqbyp3L3IpLFQ9dVtQK3cqYl07eSs9VFswXSpHLEIrPVRbMV0qRyxSKz1UWzJdKkd9bGV0IFY9aCh5KSxJPWgoQiksRT1oKFIpO3NbNCphKzArbypjXT1WLHNbNCphKzErbypjXT1JLHNbNCphKzIrbypjXT1FLHNbNCphKzMrbypjXT0yNTV9cmV0dXJuIHN9LGo9VTt2YXIgQT00LEQ9KHQsZSxyLG4pPT57bGV0IGw9MCxtPTAsYj0wLGc9ZSpBO2ZvcihsZXQgdT0wO3U8ZTt1Kyspe2xldCBjPUEqdTtmb3IobGV0IHM9MDtzPHI7cysrKXtsZXQgbz1jK3MqZyxhPW4odSxzKTtsKz1hKmYodFtvXSksbSs9YSpmKHRbbysxXSksYis9YSpmKHRbbysyXSl9fWxldCBpPTEvKGUqcik7cmV0dXJuW2wqaSxtKmksYippXX0sJD10PT57bGV0IGU9aCh0WzBdKSxyPWgodFsxXSksbj1oKHRbMl0pO3JldHVybihlPDwxNikrKHI8PDgpK259LEg9KHQsZSk9PntsZXQgcj1NYXRoLmZsb29yKE1hdGgubWF4KDAsTWF0aC5taW4oMTgsTWF0aC5mbG9vcihNKHRbMF0vZSwuNSkqOSs5LjUpKSkpLG49TWF0aC5mbG9vcihNYXRoLm1heCgwLE1hdGgubWluKDE4LE1hdGguZmxvb3IoTSh0WzFdL2UsLjUpKjkrOS41KSkpKSxsPU1hdGguZmxvb3IoTWF0aC5tYXgoMCxNYXRoLm1pbigxOCxNYXRoLmZsb29yKE0odFsyXS9lLC41KSo5KzkuNSkpKSk7cmV0dXJuIHIqMTkqMTkrbioxOStsfSxPPSh0LGUscixuLGwpPT57aWYobjwxfHxuPjl8fGw8MXx8bD45KXRocm93IG5ldyBkKFwiQmx1ckhhc2ggbXVzdCBoYXZlIGJldHdlZW4gMSBhbmQgOSBjb21wb25lbnRzXCIpO2lmKGUqcio0IT09dC5sZW5ndGgpdGhyb3cgbmV3IGQoXCJXaWR0aCBhbmQgaGVpZ2h0IG11c3QgbWF0Y2ggdGhlIHBpeGVscyBhcnJheVwiKTtsZXQgbT1bXTtmb3IobGV0IHM9MDtzPGw7cysrKWZvcihsZXQgbz0wO288bjtvKyspe2xldCBhPW89PTAmJnM9PTA/MToyLHk9RCh0LGUsciwoQixSKT0+YSpNYXRoLmNvcyhNYXRoLlBJKm8qQi9lKSpNYXRoLmNvcyhNYXRoLlBJKnMqUi9yKSk7bS5wdXNoKHkpfWxldCBiPW1bMF0sZz1tLnNsaWNlKDEpLGk9XCJcIix1PW4tMSsobC0xKSo5O2krPXAodSwxKTtsZXQgYztpZihnLmxlbmd0aD4wKXtsZXQgcz1NYXRoLm1heCguLi5nLm1hcChhPT5NYXRoLm1heCguLi5hKSkpLG89TWF0aC5mbG9vcihNYXRoLm1heCgwLE1hdGgubWluKDgyLE1hdGguZmxvb3IocyoxNjYtLjUpKSkpO2M9KG8rMSkvMTY2LGkrPXAobywxKX1lbHNlIGM9MSxpKz1wKDAsMSk7cmV0dXJuIGkrPXAoJChiKSw0KSxnLmZvckVhY2gocz0+e2krPXAoSChzLGMpLDIpfSksaX0sUz1PO2V4cG9ydHtkIGFzIFZhbGlkYXRpb25FcnJvcixqIGFzIGRlY29kZSxTIGFzIGVuY29kZSxOIGFzIGlzQmx1cmhhc2hWYWxpZH07XG4vLyMgc291cmNlTWFwcGluZ1VSTD1pbmRleC5tanMubWFwIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(rsc)/./node_modules/blurhash/dist/index.mjs\n");

/***/ })

};
;