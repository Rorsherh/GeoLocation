parcelRequire=function(e,r,t,n){var i,o="function"==typeof parcelRequire&&parcelRequire,u="function"==typeof require&&require;function f(t,n){if(!r[t]){if(!e[t]){var i="function"==typeof parcelRequire&&parcelRequire;if(!n&&i)return i(t,!0);if(o)return o(t,!0);if(u&&"string"==typeof t)return u(t);var c=new Error("Cannot find module '"+t+"'");throw c.code="MODULE_NOT_FOUND",c}p.resolve=function(r){return e[t][1][r]||r},p.cache={};var l=r[t]=new f.Module(t);e[t][0].call(l.exports,p,l,l.exports,this)}return r[t].exports;function p(e){return f(p.resolve(e))}}f.isParcelRequire=!0,f.Module=function(e){this.id=e,this.bundle=f,this.exports={}},f.modules=e,f.cache=r,f.parent=o,f.register=function(r,t){e[r]=[function(e,r){r.exports=t},{}]};for(var c=0;c<t.length;c++)try{f(t[c])}catch(e){i||(i=e)}if(t.length){var l=f(t[t.length-1]);"object"==typeof exports&&"undefined"!=typeof module?module.exports=l:"function"==typeof define&&define.amd?define(function(){return l}):n&&(this[n]=l)}if(parcelRequire=f,i)throw i;return f}({"BJnd":[function(require,module,exports) {
"use strict";function e(e){return!!/^(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)$/.test(e)||(alert("You have to enter a valid IP adress"),!1)}Object.defineProperty(exports,"__esModule",{value:!0}),exports.validatIp=e;
},{}],"JBS3":[function(require,module,exports) {
"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),Object.defineProperty(exports,"validatIp",{enumerable:!0,get:function(){return e.validatIp}});var e=require("./validate-ip");
},{"./validate-ip":"BJnd"}],"H99C":[function(require,module,exports) {
"use strict";var e=require("./helpers/index"),t=document.querySelector(".search-bar__input"),n=document.querySelector("button"),o=document.querySelector("#ip"),i=document.querySelector("#location"),r=document.querySelector("#timezone"),c=document.querySelector("#isp");function u(){(0,e.validatIp)(t.value)&&fetch("https://geo.ipify.org/api/v2/country,city?apiKey=at_JyxIPRlZNzlatCwgsUhKhXcfTW1fg&ipAddress=".concat(t.value)).then(function(e){return e.json()}).then(a)}function l(e){"Enter"===e.key&&u()}function a(e){console.log(e),o.innerText=e.ip,i.innerText=e.location.country+" "+e.location.region,r.innerText=e.location.timezone,c.innerText=e.isp}n.addEventListener("click",u),t.addEventListener("keydown",l);
},{"./helpers/index":"JBS3"}]},{},["H99C"], null)
//# sourceMappingURL=/src.0cbd199e.js.map