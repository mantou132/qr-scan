!function(t){function e(e){for(var n,i,o=e[0],r=e[1],a=0,h=[];a<o.length;a++)i=o[a],Object.prototype.hasOwnProperty.call(s,i)&&s[i]&&h.push(s[i][0]),s[i]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);for(d&&d(e);h.length;)h.shift()()}var n={},s={1:0};var i={};var o={2:function(){return{"./index.js":{__wbindgen_throw:function(t,e){return n[1].exports.__wbindgen_throw(t,e)}}}}};function r(e){if(n[e])return n[e].exports;var s=n[e]={i:e,l:!1,exports:{}};return t[e].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.e=function(t){var e=[],n=s[t];if(0!==n)if(n)e.push(n[2]);else{var a=new Promise((function(e,i){n=s[t]=[e,i]}));e.push(n[2]=a);var h,l=document.createElement("script");l.charset="utf-8",l.timeout=120,r.nc&&l.setAttribute("nonce",r.nc),l.src=function(t){return r.p+""+t+".bundle."+{0:"07c6ace51cf6128c1b58"}[t]+".js"}(t);var d=new Error;h=function(e){l.onerror=l.onload=null,clearTimeout(c);var n=s[t];if(0!==n){if(n){var i=e&&("load"===e.type?"missing":e.type),o=e&&e.target&&e.target.src;d.message="Loading chunk "+t+" failed.\n("+i+": "+o+")",d.name="ChunkLoadError",d.type=i,d.request=o,n[1](d)}s[t]=void 0}};var c=setTimeout((function(){h({type:"timeout",target:l})}),12e4);l.onerror=l.onload=h,document.head.appendChild(l)}return({0:[2]}[t]||[]).forEach((function(t){var n=i[t];if(n)e.push(n);else{var s,a=o[t](),h=fetch(r.p+""+{2:"1e73ad11f83438d715b9"}[t]+".module.wasm");if(a instanceof Promise&&"function"==typeof WebAssembly.compileStreaming)s=Promise.all([WebAssembly.compileStreaming(h),a]).then((function(t){return WebAssembly.instantiate(t[0],t[1])}));else if("function"==typeof WebAssembly.instantiateStreaming)s=WebAssembly.instantiateStreaming(h,a);else{s=h.then((function(t){return t.arrayBuffer()})).then((function(t){return WebAssembly.instantiate(t,a)}))}e.push(i[t]=s.then((function(e){return r.w[t]=(e.instance||e).exports})))}})),Promise.all(e)},r.m=t,r.c=n,r.d=function(t,e,n){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},r.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var s in t)r.d(n,s,function(e){return t[e]}.bind(null,s));return n},r.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="",r.oe=function(t){throw console.error(t),t},r.w={};var a=window.webpackJsonp=window.webpackJsonp||[],h=a.push.bind(a);a.push=e,a=a.slice();for(var l=0;l<a.length;l++)e(a[l]);var d=h;r(r.s=0)}([function(t,e,n){"use strict";var s,i;n.r(e);const o=new Set;function r(t){o.size||window.queueMicrotask(()=>{o.forEach(t=>t()),o.clear()}),o.delete(t),o.add(t)}class a extends Image{constructor(){super(),this.currentId=0,this.count=0,this.pool=new Map,Object.setPrototypeOf(this,a.prototype)}add(t){this.pool.size||this.dispatchEvent(new CustomEvent("start")),this.pool.set(this.count,t),this.count+=1}get(){const t=this.pool.get(this.currentId);return t&&(this.pool.delete(this.currentId),this.currentId+=1,this.pool.size||this.dispatchEvent(new CustomEvent("end"))),t}}var h;!function(t){t.LOCALSTORAGE="localStorage",t.SESSIONSTORAGE="sessionStorage"}(h||(h={}));class l{constructor(){this[s]={},this[i]={}}}s=h.LOCALSTORAGE,i=h.SESSIONSTORAGE;class d{constructor(){this.cache=new l}get(t,e){if(t in this.cache[e])return this.cache[e][t];const n=window[e].getItem(t);if(n)try{const s=JSON.parse(n);return this.cache[e][t]=s,s}catch(n){window[e].removeItem(t)}}getLocal(t){return this.get(t,h.LOCALSTORAGE)}getSession(t){return this.get(t,h.SESSIONSTORAGE)}set(t,e,n){return this.cache[n][t]=e,window[n].setItem(t,JSON.stringify(e))}setLocal(t,e){return this.set(t,e,h.LOCALSTORAGE)}setSession(t,e){return this.set(t,e,h.SESSIONSTORAGE)}}class c extends URLSearchParams{constructor(t){if(t instanceof c)return t;super(t),Object.setPrototypeOf(this,c.prototype)}concat(t){let e;e="string"==typeof t?Object.fromEntries(new URLSearchParams(t).entries()):t,Object.keys(e).forEach(t=>{this.append(t,e[t])})}toString(){const t=super.toString();return t?`?${t}`:""}toJSON(){return this.toString()}}new WeakMap;function u(){}const p="gem@storeHandlesKey";function f(t){const e=t;return Object.defineProperty(e,p,{enumerable:!1,value:new Set,writable:!0}),e}function m(t,e){Object.assign(t,e),t[p].forEach(t=>{r(t)})}const g=f({list:[{}],currentIndex:0}),v=new WeakMap,w=new WeakMap,_=new WeakMap;function y(t,e,n,s){if(t.$key)throw new Error("`$key` is not allowed");if(t.$open)throw new Error("`$open` is not allowed");if(t.$close)throw new Error("`$close` is not allowed");if(t.$shouldClose)throw new Error("`$shouldClose` is not allowed");const i=Object.assign(Object.assign({},t),{$key:Date.now()+performance.now(),$open:!!e,$close:!!n,$shouldClose:!!s});return v.set(i,e),w.set(i,n),_.set(i,s),i}let b="",x={historyState:g,get basePath(){return b},set basePath(t){const{list:e,currentIndex:n}=g;e[n].path=window.location.pathname.replace(new RegExp(`^${t}`),""),m(g,{}),b=t},get location(){const{list:t,currentIndex:e}=g,n=t[e];return{get query(){return new c(n.query)},hash:n.hash,path:n.path,state:n.state,title:n.title}},forward(){window.history.forward()},back(){window.history.back()},push(t){const{path:e="",open:n,close:s,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.title||"",h=y(t.data||{},n,s,i);window.history.pushState(h,a,x.basePath+e+new c(o)+r);const{list:l,currentIndex:d}=g;r!==l[d].hash&&window.dispatchEvent(new CustomEvent("hashchange"));const u=l.slice(0,d+1).concat({state:h,title:a,path:e,query:o,hash:r});m(g,{list:u,currentIndex:u.length-1})},pushWithoutCloseHandle(t){const{list:e,currentIndex:n}=g,{state:s}=e[n];if(s.$close){const e=w.get(s);e&&e(),x.replace(t)}else x.push(t)},pushState(t){const{list:e,currentIndex:n}=g,{path:s,query:i,hash:o}=e[n];x.push(Object.assign({path:s,query:i,hash:o},t))},replace(t){const{path:e="",open:n,close:s,shouldClose:i}=t,o=t.query||"",r=t.hash||"",a=t.data||{},h=t.title||"",l=y(a,n,s,i);window.history.replaceState(l,h,x.basePath+e+new c(o)+r);const{list:d,currentIndex:u}=g;r!==d[u].hash&&window.dispatchEvent(new CustomEvent("hashchange")),d.splice(u,1,{state:l,title:h,path:e,query:o,hash:r}),m(g,{list:d})},replaceState(t){const{list:e,currentIndex:n}=g,{path:s,query:i,hash:o}=e[n];x.replace(Object.assign({path:s,query:i,hash:o},t))}};if(!!window.__gemHistory){const t=(x=window.__gemHistory).basePath;Object.defineProperty(x,"basePath",{get:()=>t,set(){throw new Error("已经有其他环境使用 gem , 会共享 history 对象，禁止再修改 history 对象")}})}else{if(window.__gemHistory=x,window.history.state)window.history.state.$close&&x.back();else{const{pathname:t,search:e,hash:n}=window.location;x.replace({path:t,query:e,hash:n})}const t=new d,e="gem@historyStateList";m(g,t.getSession(e)),window.addEventListener("unload",()=>{t.setSession(e,g)});let n=!1;window.addEventListener("popstate",t=>{if(!t.state||!t.state.$key)return;if(n)return void(n=!1);const{list:e,currentIndex:s}=g,{state:i}=e[s],o=e.findIndex(({state:e})=>e.$key===t.state.$key);if(-1===o)return;const{state:r}=e[o];if(o>s&&r.$open){const t=v.get(r);t&&t()}else if(i.$close){const t=w.get(i),e=_.get(i);if(e&&!e())return n=!0,void x.forward();t?t():(n=!0,x.back())}m(g,{currentIndex:o})})}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const E=new WeakMap,S=t=>(...e)=>{const n=t(...e);return E.set(n,!0),n},N=t=>"function"==typeof t&&E.has(t),A=void 0!==window.customElements&&void 0!==window.customElements.polyfillWrapFlushCallback,O=(t,e,n=null,s=null)=>{for(;e!==n;){const n=e.nextSibling;t.insertBefore(e,s),e=n}},C=(t,e,n=null)=>{for(;e!==n;){const n=e.nextSibling;t.removeChild(e),e=n}},P={},T={},M=`{{lit-${String(Math.random()).slice(2)}}}`,V=`\x3c!--${M}--\x3e`,k=new RegExp(`${M}|${V}`),$="$lit$";class L{constructor(t,e){this.parts=[],this.element=e;const n=[],s=[],i=document.createTreeWalker(e.content,133,null,!1);let o=0,r=-1,a=0;const{strings:h,values:{length:l}}=t;for(;a<l;){const t=i.nextNode();if(null!==t){if(r++,1===t.nodeType){if(t.hasAttributes()){const e=t.attributes,{length:n}=e;let s=0;for(let t=0;t<n;t++)j(e[t].name,$)&&s++;for(;s-- >0;){const e=h[a],n=W.exec(e)[2],s=n.toLowerCase()+$,i=t.getAttribute(s);t.removeAttribute(s);const o=i.split(k);this.parts.push({type:"attribute",index:r,name:n,strings:o}),a+=o.length-1}}"TEMPLATE"===t.tagName&&(s.push(t),i.currentNode=t.content)}else if(3===t.nodeType){const e=t.data;if(e.indexOf(M)>=0){const s=t.parentNode,i=e.split(k),o=i.length-1;for(let e=0;e<o;e++){let n,o=i[e];if(""===o)n=R();else{const t=W.exec(o);null!==t&&j(t[2],$)&&(o=o.slice(0,t.index)+t[1]+t[2].slice(0,-$.length)+t[3]),n=document.createTextNode(o)}s.insertBefore(n,t),this.parts.push({type:"node",index:++r})}""===i[o]?(s.insertBefore(R(),t),n.push(t)):t.data=i[o],a+=o}}else if(8===t.nodeType)if(t.data===M){const e=t.parentNode;null!==t.previousSibling&&r!==o||(r++,e.insertBefore(R(),t)),o=r,this.parts.push({type:"node",index:r}),null===t.nextSibling?t.data="":(n.push(t),r--),a++}else{let e=-1;for(;-1!==(e=t.data.indexOf(M,e+1));)this.parts.push({type:"node",index:-1}),a++}}else i.currentNode=s.pop()}for(const t of n)t.parentNode.removeChild(t)}}const j=(t,e)=>{const n=t.length-e.length;return n>=0&&t.slice(n)===e},I=t=>-1!==t.index,R=()=>document.createComment(""),W=/([ \x09\x0a\x0c\x0d])([^\0-\x1F\x7F-\x9F "'>=/]+)([ \x09\x0a\x0c\x0d]*=[ \x09\x0a\x0c\x0d]*(?:[^ \x09\x0a\x0c\x0d"'`<>=]*|"[^"]*|'[^']*))$/;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
class q{constructor(t,e,n){this.__parts=[],this.template=t,this.processor=e,this.options=n}update(t){let e=0;for(const n of this.__parts)void 0!==n&&n.setValue(t[e]),e++;for(const t of this.__parts)void 0!==t&&t.commit()}_clone(){const t=A?this.template.element.content.cloneNode(!0):document.importNode(this.template.element.content,!0),e=[],n=this.template.parts,s=document.createTreeWalker(t,133,null,!1);let i,o=0,r=0,a=s.nextNode();for(;o<n.length;)if(i=n[o],I(i)){for(;r<i.index;)r++,"TEMPLATE"===a.nodeName&&(e.push(a),s.currentNode=a.content),null===(a=s.nextNode())&&(s.currentNode=e.pop(),a=s.nextNode());if("node"===i.type){const t=this.processor.handleTextExpression(this.options);t.insertAfterNode(a.previousSibling),this.__parts.push(t)}else this.__parts.push(...this.processor.handleAttributeExpressions(a,i.name,i.strings,this.options));o++}else this.__parts.push(void 0),o++;return A&&(document.adoptNode(t),customElements.upgrade(t)),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const H=` ${M} `;class U{constructor(t,e,n,s){this.strings=t,this.values=e,this.type=n,this.processor=s}getHTML(){const t=this.strings.length-1;let e="",n=!1;for(let s=0;s<t;s++){const t=this.strings[s],i=t.lastIndexOf("\x3c!--");n=(i>-1||n)&&-1===t.indexOf("--\x3e",i+1);const o=W.exec(t);e+=null===o?t+(n?H:V):t.substr(0,o.index)+o[1]+o[2]+$+o[3]+M}return e+=this.strings[t]}getTemplateElement(){const t=document.createElement("template");return t.innerHTML=this.getHTML(),t}}class D extends U{getHTML(){return`<svg>${super.getHTML()}</svg>`}getTemplateElement(){const t=super.getTemplateElement(),e=t.content,n=e.firstChild;return e.removeChild(n),O(e,n.firstChild),t}}
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const F=t=>null===t||!("object"==typeof t||"function"==typeof t),B=t=>Array.isArray(t)||!(!t||!t[Symbol.iterator]);class G{constructor(t,e,n){this.dirty=!0,this.element=t,this.name=e,this.strings=n,this.parts=[];for(let t=0;t<n.length-1;t++)this.parts[t]=this._createPart()}_createPart(){return new J(this)}_getValue(){const t=this.strings,e=t.length-1;let n="";for(let s=0;s<e;s++){n+=t[s];const e=this.parts[s];if(void 0!==e){const t=e.value;if(F(t)||!B(t))n+="string"==typeof t?t:String(t);else for(const e of t)n+="string"==typeof e?e:String(e)}}return n+=t[e]}commit(){this.dirty&&(this.dirty=!1,this.element.setAttribute(this.name,this._getValue()))}}class J{constructor(t){this.value=void 0,this.committer=t}setValue(t){t===P||F(t)&&t===this.value||(this.value=t,N(t)||(this.committer.dirty=!0))}commit(){for(;N(this.value);){const t=this.value;this.value=P,t(this)}this.value!==P&&this.committer.commit()}}class Q{constructor(t){this.value=void 0,this.__pendingValue=void 0,this.options=t}appendInto(t){this.startNode=t.appendChild(R()),this.endNode=t.appendChild(R())}insertAfterNode(t){this.startNode=t,this.endNode=t.nextSibling}appendIntoPart(t){t.__insert(this.startNode=R()),t.__insert(this.endNode=R())}insertAfterPart(t){t.__insert(this.startNode=R()),this.endNode=t.endNode,t.endNode=this.startNode}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=P,t(this)}const t=this.__pendingValue;t!==P&&(F(t)?t!==this.value&&this.__commitText(t):t instanceof U?this.__commitTemplateResult(t):t instanceof Node?this.__commitNode(t):B(t)?this.__commitIterable(t):t===T?(this.value=T,this.clear()):this.__commitText(t))}__insert(t){this.endNode.parentNode.insertBefore(t,this.endNode)}__commitNode(t){this.value!==t&&(this.clear(),this.__insert(t),this.value=t)}__commitText(t){const e=this.startNode.nextSibling,n="string"==typeof(t=null==t?"":t)?t:String(t);e===this.endNode.previousSibling&&3===e.nodeType?e.data=n:this.__commitNode(document.createTextNode(n)),this.value=t}__commitTemplateResult(t){const e=this.options.templateFactory(t);if(this.value instanceof q&&this.value.template===e)this.value.update(t.values);else{const n=new q(e,t.processor,this.options),s=n._clone();n.update(t.values),this.__commitNode(s),this.value=n}}__commitIterable(t){Array.isArray(this.value)||(this.value=[],this.clear());const e=this.value;let n,s=0;for(const i of t)void 0===(n=e[s])&&(n=new Q(this.options),e.push(n),0===s?n.appendIntoPart(this):n.insertAfterPart(e[s-1])),n.setValue(i),n.commit(),s++;s<e.length&&(e.length=s,this.clear(n&&n.endNode))}clear(t=this.startNode){C(this.startNode.parentNode,t.nextSibling,this.endNode)}}class z{constructor(t,e,n){if(this.value=void 0,this.__pendingValue=void 0,2!==n.length||""!==n[0]||""!==n[1])throw new Error("Boolean attributes can only contain a single expression");this.element=t,this.name=e,this.strings=n}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=P,t(this)}if(this.__pendingValue===P)return;const t=!!this.__pendingValue;this.value!==t&&(t?this.element.setAttribute(this.name,""):this.element.removeAttribute(this.name),this.value=t),this.__pendingValue=P}}class K extends G{constructor(t,e,n){super(t,e,n),this.single=2===n.length&&""===n[0]&&""===n[1]}_createPart(){return new Z(this)}_getValue(){return this.single?this.parts[0].value:super._getValue()}commit(){this.dirty&&(this.dirty=!1,this.element[this.name]=this._getValue())}}class Z extends J{}let X=!1;try{const t={get capture(){return X=!0,!1}};window.addEventListener("test",t,t),window.removeEventListener("test",t,t)}catch(t){}class Y{constructor(t,e,n){this.value=void 0,this.__pendingValue=void 0,this.element=t,this.eventName=e,this.eventContext=n,this.__boundHandleEvent=t=>this.handleEvent(t)}setValue(t){this.__pendingValue=t}commit(){for(;N(this.__pendingValue);){const t=this.__pendingValue;this.__pendingValue=P,t(this)}if(this.__pendingValue===P)return;const t=this.__pendingValue,e=this.value,n=null==t||null!=e&&(t.capture!==e.capture||t.once!==e.once||t.passive!==e.passive),s=null!=t&&(null==e||n);n&&this.element.removeEventListener(this.eventName,this.__boundHandleEvent,this.__options),s&&(this.__options=tt(t),this.element.addEventListener(this.eventName,this.__boundHandleEvent,this.__options)),this.value=t,this.__pendingValue=P}handleEvent(t){"function"==typeof this.value?this.value.call(this.eventContext||this.element,t):this.value.handleEvent(t)}}const tt=t=>t&&(X?{capture:t.capture,passive:t.passive,once:t.once}:t.capture);
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */const et=new class{handleAttributeExpressions(t,e,n,s){const i=e[0];if("."===i){return new K(t,e.slice(1),n).parts}return"@"===i?[new Y(t,e.slice(1),s.eventContext)]:"?"===i?[new z(t,e.slice(1),n)]:new G(t,e,n).parts}handleTextExpression(t){return new Q(t)}};
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */function nt(t){let e=st.get(t.type);void 0===e&&(e={stringsArray:new WeakMap,keyString:new Map},st.set(t.type,e));let n=e.stringsArray.get(t.strings);if(void 0!==n)return n;const s=t.strings.join(M);return void 0===(n=e.keyString.get(s))&&(n=new L(t,t.getTemplateElement()),e.keyString.set(s,n)),e.stringsArray.set(t.strings,n),n}const st=new Map,it=new WeakMap;
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
/**
 * @license
 * Copyright (c) 2017 The Polymer Project Authors. All rights reserved.
 * This code may only be used under the BSD style license found at
 * http://polymer.github.io/LICENSE.txt
 * The complete set of authors may be found at
 * http://polymer.github.io/AUTHORS.txt
 * The complete set of contributors may be found at
 * http://polymer.github.io/CONTRIBUTORS.txt
 * Code distributed by Google as part of the polymer project is also
 * subject to an additional IP rights grant found at
 * http://polymer.github.io/PATENTS.txt
 */
(window.litHtmlVersions||(window.litHtmlVersions=[])).push("1.1.2");const ot=(t,e)=>{const n=t.startNode.parentNode,s=void 0===e?t.endNode:e.startNode,i=n.insertBefore(R(),s);n.insertBefore(R(),s);const o=new Q(t.options);return o.insertAfterNode(i),o},rt=(t,e)=>(t.setValue(e),t.commit(),t),at=(t,e,n)=>{const s=t.startNode.parentNode,i=n?n.startNode:t.endNode,o=e.endNode.nextSibling;o!==i&&O(s,e.startNode,o,i)},ht=t=>{C(t.startNode.parentNode,t.startNode,t.endNode.nextSibling)},lt=(t,e,n)=>{const s=new Map;for(let i=e;i<=n;i++)s.set(t[i],i);return s},dt=new WeakMap,ct=new WeakMap,ut=S((t,e,n)=>{let s;return void 0===n?n=e:void 0!==e&&(s=e),e=>{if(!(e instanceof Q))throw new Error("repeat can only be used in text bindings");const i=dt.get(e)||[],o=ct.get(e)||[],r=[],a=[],h=[];let l,d,c=0;for(const e of t)h[c]=s?s(e,c):c,a[c]=n(e,c),c++;let u=0,p=i.length-1,f=0,m=a.length-1;for(;u<=p&&f<=m;)if(null===i[u])u++;else if(null===i[p])p--;else if(o[u]===h[f])r[f]=rt(i[u],a[f]),u++,f++;else if(o[p]===h[m])r[m]=rt(i[p],a[m]),p--,m--;else if(o[u]===h[m])r[m]=rt(i[u],a[m]),at(e,i[u],r[m+1]),u++,m--;else if(o[p]===h[f])r[f]=rt(i[p],a[f]),at(e,i[p],i[u]),p--,f++;else if(void 0===l&&(l=lt(h,f,m),d=lt(o,u,p)),l.has(o[u]))if(l.has(o[p])){const t=d.get(h[f]),n=void 0!==t?i[t]:null;if(null===n){const t=ot(e,i[u]);rt(t,a[f]),r[f]=t}else r[f]=rt(n,a[f]),at(e,n,i[u]),i[t]=null;f++}else ht(i[p]),p--;else ht(i[u]),u++;for(;f<=m;){const t=ot(e,r[m+1]);rt(t,a[f]),r[f++]=t}for(;u<=p;){const t=i[u++];null!==t&&ht(t)}dt.set(e,r),ct.set(e,h)}}),pt=new WeakMap,ft=S((t,e)=>n=>{const s=pt.get(n);if(Array.isArray(t)){if(Array.isArray(s)&&s.length===t.length&&t.every((t,e)=>t===s[e]))return}else if(s===t&&(void 0!==t||pt.has(n)))return;n.setValue(e()),pt.set(n,Array.isArray(t)?Array.from(t):t)}),mt=S(t=>e=>{if(void 0===t&&e instanceof J){if(t!==e.value){const t=e.committer.name;e.committer.element.removeAttribute(t)}}else e.setValue(t)});let gt={html:(t,...e)=>new U(t,e,"html",et),svg:(t,...e)=>new D(t,e,"svg",et),render:(t,e,n)=>{let s=it.get(e);void 0===s&&(C(e,e.firstChild),it.set(e,s=new Q(Object.assign({templateFactory:nt},n))),s.appendInto(e)),s.setValue(t),s.commit()},directive:S,repeat:ut,guard:ft,ifDefined:mt};window.__litHtml?gt=window.__litHtml:window.__litHtml=gt;const{html:vt,svg:wt,render:_t,directive:yt,repeat:bt,guard:xt,ifDefined:Et}=gt;class St extends HTMLElement{constructor(t=!0){super(),this.setState=this.setState.bind(this),this.willMount=this.willMount.bind(this),this.render=this.render.bind(this),this.mounted=this.mounted.bind(this),this.shouldUpdate=this.shouldUpdate.bind(this),this.__update=this.__update.bind(this),this.updated=this.updated.bind(this),this.attributeChanged=this.attributeChanged.bind(this),this.propertyChanged=this.propertyChanged.bind(this),this.unmounted=this.unmounted.bind(this),this.__renderRoot=t?this.attachShadow({mode:"open"}):this;const{observedAttributes:e,observedPropertys:n,defineEvents:s,observedStores:i,adoptedStyleSheets:o}=new.target;e&&e.forEach(t=>{const e=function(t){return t.replace(/-(.)/g,(t,e)=>e.toUpperCase())}(t);if("function"==typeof this[e])throw"Don't use attribute with the same name as native methods";void 0===this[e]&&Object.defineProperty(this,e,{configurable:!0,get(){return this.getAttribute(t)||""},set(e){null===e?this.removeAttribute(t):this.setAttribute(t,e)}})}),n&&n.forEach(t=>{this.__connectProperty(t,!1)}),s&&s.forEach(t=>{this.__connectProperty(t,!0),this[t]=u}),i&&i.forEach(t=>{if(!t[p])throw new Error("`observedStores` only support store module");!function(t,e){t[p].add(e)}(t,this.__update)}),o&&(this.shadowRoot?this.shadowRoot.adoptedStyleSheets=o:document.adoptedStyleSheets=document.adoptedStyleSheets.concat(o))}__connectProperty(t,e=!1){if(t in this)return;let n=this[t];Object.defineProperty(this,t,{configurable:!0,get:()=>n,set(s){if(s!==n){if(e){if(s.isEventHandle)throw"Don't assign a wrapped event handler";(n=e=>{const n=new CustomEvent(t.toLowerCase(),{detail:e});this.dispatchEvent(n),s(n)}).isEventHandle=!0}else n=s;this.__isMounted&&(this.propertyChanged(t,n,s),r(this.__update))}}})}setState(t){Object.assign(this.state,t),r(this.__update)}willMount(){}render(){return vt`
      <slot></slot>
    `}mounted(){}shouldUpdate(){return!0}__update(){this.__isMounted&&this.shouldUpdate()&&(_t(this.render(),this.__renderRoot),this.updated())}update(){this.__update()}updated(){}propertyChanged(t,e,n){}attributeChanged(t,e,n){}unmounted(){}attributeChangedCallback(t,e,n){this.__isMounted&&(this.attributeChanged(t,e,n),r(this.__update))}disconnectedCallback(){const t=this.constructor;t.observedStores&&t.observedStores.forEach(t=>{!function(t,e){t[p].delete(e)}(t,this.__update)}),this.unmounted(),this.__isMounted=!1}}class Nt extends St{connectedCallback(){this.willMount(),_t(this.render(),this.__renderRoot),this.mounted(),this.__isMounted=!0}}const At=new a;let Ot=!1;const Ct=()=>{window.requestAnimationFrame((function t(e){const n=At.get();n&&(n(),performance.now()-e<16)?t(e):Ot&&Ct()}))};At.addEventListener("start",()=>{Ot=!0,Ct()}),At.addEventListener("end",()=>Ot=!1);const Pt=customElements.define.bind(customElements);function Tt(t,e){const n=t.constructor;n.observedAttributes||(n.observedAttributes=[]),n.observedAttributes.push(e.replace(/[A-Z]/g,t=>"-"+t.toLowerCase()))}function Mt(t,e){const n=t.constructor;n.defineEvents||(n.defineEvents=[]),n.defineEvents.push(e)}customElements.define=function(t,e,n){customElements.get(t)||Pt(t,e,n)};var Vt=function(t,e,n,s){var i,o=arguments.length,r=o<3?e:null===s?s=Object.getOwnPropertyDescriptor(e,n):s;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)r=Reflect.decorate(t,e,n,s);else for(var a=t.length-1;a>=0;a--)(i=t[a])&&(r=(o<3?i(r):o>3?i(e,n,r):i(e,n))||r);return o>3&&r&&Object.defineProperty(e,n,r),r},kt=function(t,e,n,s){return new(n||(n=Promise))((function(i,o){function r(t){try{h(s.next(t))}catch(t){o(t)}}function a(t){try{h(s.throw(t))}catch(t){o(t)}}function h(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(r,a)}h((s=s.apply(t,e||[])).next())}))};let $t=class extends Nt{constructor(t,e){super(),this._timer=0,this.state={x:0,y:0,width:0,height:0},this.detect=t=>kt(this,void 0,void 0,(function*(){if(!this.width&&!this.height)throw new Error("`width` or `height` does not exist");const{QrDetector:e}=yield n.e(0).then(n.bind(null,1));return e.new(Number(this.width),Number(this.height)).detect(new Uint8Array(t.data))})),this.init=()=>kt(this,void 0,void 0,(function*(){var t;if(!this.width&&!this.height)return;const{QrDetector:e}=yield n.e(0).then(n.bind(null,1)),s=yield navigator.mediaDevices.getUserMedia({video:{facingMode:"user"}});let i;i=this.videoElement?this.videoElement:document.createElement("video");const o=document.createElement("canvas"),r=null===(t=o)||void 0===t?void 0:t.getContext("2d");if(!r)throw new Error("canvas context error");i.srcObject=s,yield i.play();const a=Number(this.width),h=Number(this.height),l=(i.videoWidth-a)/2,d=(i.videoHeight-h)/2,c=i.clientWidth/i.videoWidth;this.setState({x:l*c,y:d*c,width:a*c,height:h*c}),o.width=a,o.height=h;const u=e.new(a,h),p=()=>kt(this,void 0,void 0,(function*(){try{r.drawImage(i,l,d,a,h,0,0,a,h);const t=r.getImageData(0,0,a,h).data,e=u.detect(new Uint8Array(t));this.detected(e),e&&this.valid(e)&&this.success(e)}finally{this._timer=requestAnimationFrame(p)}}));this._timer=requestAnimationFrame(p)})),this.mounted=this.init,this.render=()=>vt`
    <style>
      :host {
        position: relative;
        display: block;
      }
      .bound {
        position: absolute;
        outline: 2px solid;
        width: ${this.state.width}px;
        height: ${this.state.height}px;
        left: ${this.state.x}px;
        top: ${this.state.y}px;
      }
      [hidden] {
        display: none;
      }
    </style>
    <slot name="video"></slot>
    <div ?hidden=${!this.bound} part="bound" class="bound"></div>
  `,t&&(this.width=String(t)),e&&(this.height=String(e))}get videoElement(){var t,e;return null===(e=(null===(t=this.shadowRoot)||void 0===t?void 0:t.querySelector("slot[name=video]")).assignedElements())||void 0===e?void 0:e[0]}valid(t){let e=this.type;switch(e||t.startsWith("http")&&(e="url"),e){case"url":try{return new URL(t),!0}catch(t){return!1}default:return!0}}attributeChanged(){cancelAnimationFrame(this._timer),this.init()}};var Lt;Vt([Tt],$t.prototype,"width",void 0),Vt([Tt],$t.prototype,"height",void 0),Vt([Tt],$t.prototype,"type",void 0),Vt([Tt],$t.prototype,"bound",void 0),Vt([Mt],$t.prototype,"success",void 0),Vt([Mt],$t.prototype,"detected",void 0),$t=Vt([(Lt="qr-scan",function(t){customElements.define(Lt,t)})],$t);const jt=t=>{_t(vt`
      <style>
        body {
          font-family: 'Ropa Sans', sans-serif;
        }
        main {
          margin: auto;
          width: 640px;
        }
        qr-scan {
          height: 360px;
          margin-bottom: 30px;
        }
        video {
          width: 100%;
          height: 100%;
        }
        p {
          background-color: #eee;
          padding: 30px;
        }
      </style>
      <main>
        <h1>${"自定义元素 <qr-scan>，使用 wasm"}</h1>
        <a href="https://cozmo.github.io/jsQR/" target="_blank">jsQR 版本</a>
        <qr-scan width="1200" height="620" bound="true" @detected=${t=>jt(t.detail)}>
          <video slot="video"></video>
        </qr-scan>
        <p>${t||"No QR code detected."}</p>
      </main>
    `,document.body)};jt("")}]);
//# sourceMappingURL=bundle.4fce0b2f6d39e1e92b83.js.map