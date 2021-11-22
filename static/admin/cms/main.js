!function(t){var e={};function n(r){if(e[r])return e[r].exports;var i=e[r]={i:r,l:!1,exports:{}};return t[r].call(i.exports,i,i.exports,n),i.l=!0,i.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var i in t)n.d(r,i,function(e){return t[e]}.bind(null,i));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=55)}([function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return a})),n.d(e,"b",(function(){return v})),n.d(e,"c",(function(){return y})),n.d(e,"d",(function(){return c})),n.d(e,"e",(function(){return E})),n.d(e,"f",(function(){return S})),n.d(e,"g",(function(){return u})),n.d(e,"h",(function(){return h})),n.d(e,"i",(function(){return d})),n.d(e,"j",(function(){return p})),n.d(e,"k",(function(){return l})),n.d(e,"l",(function(){return f})),n.d(e,"m",(function(){return g})),n.d(e,"n",(function(){return m}));var r=n(5),i=function(t){for(var e=[],n=0,r=0;r<t.length;r++){var i=t.charCodeAt(r);i<128?e[n++]=i:i<2048?(e[n++]=i>>6|192,e[n++]=63&i|128):55296==(64512&i)&&r+1<t.length&&56320==(64512&t.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&t.charCodeAt(++r)),e[n++]=i>>18|240,e[n++]=i>>12&63|128,e[n++]=i>>6&63|128,e[n++]=63&i|128):(e[n++]=i>>12|224,e[n++]=i>>6&63|128,e[n++]=63&i|128)}return e},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"==typeof atob,encodeByteArray:function(t,e){if(!Array.isArray(t))throw Error("encodeByteArray takes an array as a parameter");this.init_();for(var n=e?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[],i=0;i<t.length;i+=3){var s=t[i],o=i+1<t.length,a=o?t[i+1]:0,c=i+2<t.length,u=c?t[i+2]:0,l=s>>2,h=(3&s)<<4|a>>4,f=(15&a)<<2|u>>6,d=63&u;c||(d=64,o||(f=64)),r.push(n[l],n[h],n[f],n[d])}return r.join("")},encodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?btoa(t):this.encodeByteArray(i(t),e)},decodeString:function(t,e){return this.HAS_NATIVE_SUPPORT&&!e?atob(t):function(t){for(var e=[],n=0,r=0;n<t.length;){var i=t[n++];if(i<128)e[r++]=String.fromCharCode(i);else if(i>191&&i<224){var s=t[n++];e[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){var o=((7&i)<<18|(63&(s=t[n++]))<<12|(63&(a=t[n++]))<<6|63&t[n++])-65536;e[r++]=String.fromCharCode(55296+(o>>10)),e[r++]=String.fromCharCode(56320+(1023&o))}else{s=t[n++];var a=t[n++];e[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&a)}}return e.join("")}(this.decodeStringToByteArray(t,e))},decodeStringToByteArray:function(t,e){this.init_();for(var n=e?this.charToByteMapWebSafe_:this.charToByteMap_,r=[],i=0;i<t.length;){var s=n[t.charAt(i++)],o=i<t.length?n[t.charAt(i)]:0,a=++i<t.length?n[t.charAt(i)]:64,c=++i<t.length?n[t.charAt(i)]:64;if(++i,null==s||null==o||null==a||null==c)throw Error();var u=s<<2|o>>4;if(r.push(u),64!==a){var l=o<<4&240|a>>2;if(r.push(l),64!==c){var h=a<<6&192|c;r.push(h)}}}return r},init_:function(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(var t=0;t<this.ENCODED_VALS.length;t++)this.byteToCharMap_[t]=this.ENCODED_VALS.charAt(t),this.charToByteMap_[this.byteToCharMap_[t]]=t,this.byteToCharMapWebSafe_[t]=this.ENCODED_VALS_WEBSAFE.charAt(t),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[t]]=t,t>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(t)]=t,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(t)]=t)}}},o=function(t){return function(t){var e=i(t);return s.encodeByteArray(e,!0)}(t).replace(/\./g,"")};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var a=function(){function t(){var t=this;this.reject=function(){},this.resolve=function(){},this.promise=new Promise((function(e,n){t.resolve=e,t.reject=n}))}return t.prototype.wrapCallback=function(t){var e=this;return function(n,r){n?e.reject(n):e.resolve(r),"function"==typeof t&&(e.promise.catch((function(){})),1===t.length?t(n):t(n,r))}},t}();
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function c(t,e){if(t.uid)throw new Error('The "uid" field is no longer supported by mockUserToken. Please use "sub" instead for Firebase Auth User ID.');var n=e||"demo-project",i=t.iat||0,s=t.sub||t.user_id;if(!s)throw new Error("mockUserToken must contain 'sub' or 'user_id' field!");var a=Object(r.a)({iss:"https://securetoken.google.com/"+n,aud:n,iat:i,exp:i+3600,auth_time:i,sub:s,user_id:s,firebase:{sign_in_provider:"custom",identities:{}}},t);return[o(JSON.stringify({alg:"none",type:"JWT"})),o(JSON.stringify(a)),""].join(".")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function u(){return"undefined"!=typeof navigator&&"string"==typeof navigator.userAgent?navigator.userAgent:""}function l(){return"undefined"!=typeof window&&!!(window.cordova||window.phonegap||window.PhoneGap)&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function h(){var t="object"==typeof chrome?chrome.runtime:"object"==typeof browser?browser.runtime:void 0;return"object"==typeof t&&void 0!==t.id}function f(){return"object"==typeof navigator&&"ReactNative"===navigator.product}function d(){return u().indexOf("Electron/")>=0}function p(){var t=u();return t.indexOf("MSIE ")>=0||t.indexOf("Trident/")>=0}function m(){return u().indexOf("MSAppHost/")>=0}function g(){return!function(){try{return"[object process]"===Object.prototype.toString.call(t.process)}catch(t){return!1}}()&&navigator.userAgent.includes("Safari")&&!navigator.userAgent.includes("Chrome")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var y=function(t){function e(n,r,i){var s=t.call(this,r)||this;return s.code=n,s.customData=i,s.name="FirebaseError",Object.setPrototypeOf(s,e.prototype),Error.captureStackTrace&&Error.captureStackTrace(s,v.prototype.create),s}return Object(r.c)(e,t),e}(Error),v=function(){function t(t,e,n){this.service=t,this.serviceName=e,this.errors=n}return t.prototype.create=function(t){for(var e=[],n=1;n<arguments.length;n++)e[n-1]=arguments[n];var r=e[0]||{},i=this.service+"/"+t,s=this.errors[t],o=s?b(s,r):"Error",a=this.serviceName+": "+o+" ("+i+").",c=new y(i,a,r);return c},t}();function b(t,e){return t.replace(w,(function(t,n){var r=e[n];return null!=r?String(r):"<"+n+"?>"}))}var w=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(t,e){if(t===e)return!0;for(var n=Object.keys(t),r=Object.keys(e),i=0,s=n;i<s.length;i++){var o=s[i];if(!r.includes(o))return!1;var a=t[o],c=e[o];if(T(a)&&T(c)){if(!E(a,c))return!1}else if(a!==c)return!1}for(var u=0,l=r;u<l.length;u++){o=l[u];if(!n.includes(o))return!1}return!0}function T(t){return null!==t&&"object"==typeof t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
!function(){function t(){this.chain_=[],this.buf_=[],this.W_=[],this.pad_=[],this.inbuf_=0,this.total_=0,this.blockSize=64,this.pad_[0]=128;for(var t=1;t<this.blockSize;++t)this.pad_[t]=0;this.reset()}t.prototype.reset=function(){this.chain_[0]=1732584193,this.chain_[1]=4023233417,this.chain_[2]=2562383102,this.chain_[3]=271733878,this.chain_[4]=3285377520,this.inbuf_=0,this.total_=0},t.prototype.compress_=function(t,e){e||(e=0);var n=this.W_;if("string"==typeof t)for(var r=0;r<16;r++)n[r]=t.charCodeAt(e)<<24|t.charCodeAt(e+1)<<16|t.charCodeAt(e+2)<<8|t.charCodeAt(e+3),e+=4;else for(r=0;r<16;r++)n[r]=t[e]<<24|t[e+1]<<16|t[e+2]<<8|t[e+3],e+=4;for(r=16;r<80;r++){var i=n[r-3]^n[r-8]^n[r-14]^n[r-16];n[r]=4294967295&(i<<1|i>>>31)}var s,o,a=this.chain_[0],c=this.chain_[1],u=this.chain_[2],l=this.chain_[3],h=this.chain_[4];for(r=0;r<80;r++){r<40?r<20?(s=l^c&(u^l),o=1518500249):(s=c^u^l,o=1859775393):r<60?(s=c&u|l&(c|u),o=2400959708):(s=c^u^l,o=3395469782);i=(a<<5|a>>>27)+s+h+o+n[r]&4294967295;h=l,l=u,u=4294967295&(c<<30|c>>>2),c=a,a=i}this.chain_[0]=this.chain_[0]+a&4294967295,this.chain_[1]=this.chain_[1]+c&4294967295,this.chain_[2]=this.chain_[2]+u&4294967295,this.chain_[3]=this.chain_[3]+l&4294967295,this.chain_[4]=this.chain_[4]+h&4294967295},t.prototype.update=function(t,e){if(null!=t){void 0===e&&(e=t.length);for(var n=e-this.blockSize,r=0,i=this.buf_,s=this.inbuf_;r<e;){if(0===s)for(;r<=n;)this.compress_(t,r),r+=this.blockSize;if("string"==typeof t){for(;r<e;)if(i[s]=t.charCodeAt(r),++r,++s===this.blockSize){this.compress_(i),s=0;break}}else for(;r<e;)if(i[s]=t[r],++r,++s===this.blockSize){this.compress_(i),s=0;break}}this.inbuf_=s,this.total_+=e}},t.prototype.digest=function(){var t=[],e=8*this.total_;this.inbuf_<56?this.update(this.pad_,56-this.inbuf_):this.update(this.pad_,this.blockSize-(this.inbuf_-56));for(var n=this.blockSize-1;n>=56;n--)this.buf_[n]=255&e,e/=256;this.compress_(this.buf_);var r=0;for(n=0;n<5;n++)for(var i=24;i>=0;i-=8)t[r]=this.chain_[n]>>i&255,++r;return t}}();!function(){function t(t,e){var n=this;this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=e,this.task.then((function(){t(n)})).catch((function(t){n.error(t)}))}t.prototype.next=function(t){this.forEachObserver((function(e){e.next(t)}))},t.prototype.error=function(t){this.forEachObserver((function(e){e.error(t)})),this.close(t)},t.prototype.complete=function(){this.forEachObserver((function(t){t.complete()})),this.close()},t.prototype.subscribe=function(t,e,n){var r,i=this;if(void 0===t&&void 0===e&&void 0===n)throw new Error("Missing Observer.");void 0===(r=function(t,e){if("object"!=typeof t||null===t)return!1;for(var n=0,r=e;n<r.length;n++){var i=r[n];if(i in t&&"function"==typeof t[i])return!0}return!1}(t,["next","error","complete"])?t:{next:t,error:e,complete:n}).next&&(r.next=_),void 0===r.error&&(r.error=_),void 0===r.complete&&(r.complete=_);var s=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((function(){try{i.finalError?r.error(i.finalError):r.complete()}catch(t){}})),this.observers.push(r),s},t.prototype.unsubscribeOne=function(t){void 0!==this.observers&&void 0!==this.observers[t]&&(delete this.observers[t],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))},t.prototype.forEachObserver=function(t){if(!this.finalized)for(var e=0;e<this.observers.length;e++)this.sendOne(e,t)},t.prototype.sendOne=function(t,e){var n=this;this.task.then((function(){if(void 0!==n.observers&&void 0!==n.observers[t])try{e(n.observers[t])}catch(t){"undefined"!=typeof console&&console.error&&console.error(t)}}))},t.prototype.close=function(t){var e=this;this.finalized||(this.finalized=!0,void 0!==t&&(this.finalError=t),this.task.then((function(){e.observers=void 0,e.onNoObservers=void 0})))}}();function _(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function S(t){return t&&t._delegate?t._delegate:t}}).call(this,n(22))},function(t,e,n){"use strict";n.d(e,"a",(function(){return v})),n.d(e,"b",(function(){return d})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return p})),n.d(e,"e",(function(){return w})),n.d(e,"f",(function(){return b})),n.d(e,"g",(function(){return E}));var r=n(7),i=n(6),s=n(0);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class o{constructor(t){this.container=t}getPlatformInfoString(){return this.container.getProviders().map(t=>{if(function(t){const e=t.getComponent();return"VERSION"===(null==e?void 0:e.type)}(t)){const e=t.getImmediate();return`${e.library}/${e.version}`}return null}).filter(t=>t).join(" ")}}const a=new i.b("@firebase/app"),c={"@firebase/app":"fire-core","@firebase/app-compat":"fire-core-compat","@firebase/analytics":"fire-analytics","@firebase/analytics-compat":"fire-analytics-compat","@firebase/app-check":"fire-app-check","@firebase/app-check-compat":"fire-app-check-compat","@firebase/auth":"fire-auth","@firebase/auth-compat":"fire-auth-compat","@firebase/database":"fire-rtdb","@firebase/database-compat":"fire-rtdb-compat","@firebase/functions":"fire-fn","@firebase/functions-compat":"fire-fn-compat","@firebase/installations":"fire-iid","@firebase/installations-compat":"fire-iid-compat","@firebase/messaging":"fire-fcm","@firebase/messaging-compat":"fire-fcm-compat","@firebase/performance":"fire-perf","@firebase/performance-compat":"fire-perf-compat","@firebase/remote-config":"fire-rc","@firebase/remote-config-compat":"fire-rc-compat","@firebase/storage":"fire-gcs","@firebase/storage-compat":"fire-gcs-compat","@firebase/firestore":"fire-fst","@firebase/firestore-compat":"fire-fst-compat","fire-js":"fire-js",firebase:"fire-js-all"},u=new Map,l=new Map;function h(t,e){try{t.container.addComponent(e)}catch(n){a.debug(`Component ${e.name} failed to register with FirebaseApp ${t.name}`,n)}}function f(t){const e=t.name;if(l.has(e))return a.debug(`There were multiple attempts to register component ${e}.`),!1;l.set(e,t);for(const e of u.values())h(e,t);return!0}function d(t,e){return t.container.getProvider(e)}function p(t,e,n="[DEFAULT]"){d(t,e).clearInstance(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const m={"no-app":"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()","bad-app-name":"Illegal App name: '{$appName}","duplicate-app":"Firebase App named '{$appName}' already exists with different options or config","app-deleted":"Firebase App named '{$appName}' already deleted","invalid-app-argument":"firebase.{$appName}() takes either no argument or a Firebase App instance.","invalid-log-argument":"First argument to `onLog` must be null or a function."},g=new s.b("app","Firebase",m);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class y{constructor(t,e,n){this._isDeleted=!1,this._options=Object.assign({},t),this._config=Object.assign({},e),this._name=e.name,this._automaticDataCollectionEnabled=e.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.a("app",()=>this,"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(t){this.checkDestroyed(),this._automaticDataCollectionEnabled=t}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(t){this._isDeleted=t}checkDestroyed(){if(this.isDeleted)throw g.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const v="9.0.0";function b(t,e={}){if("object"!=typeof e){e={name:e}}const n=Object.assign({name:"[DEFAULT]",automaticDataCollectionEnabled:!1},e),i=n.name;if("string"!=typeof i||!i)throw g.create("bad-app-name",{appName:String(i)});const o=u.get(i);if(o){if(Object(s.e)(t,o.options)&&Object(s.e)(n,o.config))return o;throw g.create("duplicate-app",{appName:i})}const a=new r.b(i);for(const t of l.values())a.addComponent(t);const c=new y(t,n,a);return u.set(i,c),c}function w(t="[DEFAULT]"){const e=u.get(t);if(!e)throw g.create("no-app",{appName:t});return e}function E(t,e,n){var i;let s=null!==(i=c[t])&&void 0!==i?i:t;n&&(s+="-"+n);const o=s.match(/\s|\//),u=e.match(/\s|\//);if(o||u){const t=[`Unable to register library "${s}" with version "${e}":`];return o&&t.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&u&&t.push("and"),u&&t.push(`version name "${e}" contains illegal characters (whitespace or "/")`),void a.warn(t.join(" "))}f(new r.a(s+"-version",()=>({library:s,version:e}),"VERSION"))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
var T;f(new r.a("platform-logger",t=>new o(t),"PRIVATE")),E("@firebase/app","0.7.0",T),E("fire-js","")},function(t,e,n){"use strict";t.exports=n(25)},function(t,e,n){t.exports=n(44)()},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return ur})),n.d(e,"b",(function(){return hr})),n.d(e,"c",(function(){return lr})),n.d(e,"d",(function(){return dr})),n.d(e,"e",(function(){return fr})),n.d(e,"f",(function(){return pr})),n.d(e,"g",(function(){return mr})),n.d(e,"h",(function(){return ar})),n.d(e,"i",(function(){return cr}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function i(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}var s,o="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof window?window:void 0!==t?t:"undefined"!=typeof self?self:{},a=a||{},c=o||self;function u(){}function l(t){var e=typeof t;return"array"==(e="object"!=e?e:t?Array.isArray(t)?"array":e:"null")||"object"==e&&"number"==typeof t.length}function h(t){var e=typeof t;return"object"==e&&null!=t||"function"==e}var f="closure_uid_"+(1e9*Math.random()>>>0),d=0;function p(t,e,n){return t.call.apply(t.bind,arguments)}function m(t,e,n){if(!t)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),t.apply(e,n)}}return function(){return t.apply(e,arguments)}}function g(t,e,n){return(g=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?p:m).apply(null,arguments)}function y(t,e){var n=Array.prototype.slice.call(arguments,1);return function(){var e=n.slice();return e.push.apply(e,arguments),t.apply(this,e)}}function v(t,e){function n(){}n.prototype=e.prototype,t.Z=e.prototype,t.prototype=new n,t.prototype.constructor=t,t.Vb=function(t,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return e.prototype[n].apply(t,i)}}function b(){this.s=this.s,this.o=this.o}var w={};b.prototype.s=!1,b.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0)){var t=function(t){return Object.prototype.hasOwnProperty.call(t,f)&&t[f]||(t[f]=++d)}(this);delete w[t]}},b.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};var E=Array.prototype.indexOf?function(t,e){return Array.prototype.indexOf.call(t,e,void 0)}:function(t,e){if("string"==typeof t)return"string"!=typeof e||1!=e.length?-1:t.indexOf(e,0);for(var n=0;n<t.length;n++)if(n in t&&t[n]===e)return n;return-1},T=Array.prototype.forEach?function(t,e,n){Array.prototype.forEach.call(t,e,n)}:function(t,e,n){for(var r=t.length,i="string"==typeof t?t.split(""):t,s=0;s<r;s++)s in i&&e.call(n,i[s],s,t)};function _(t){return Array.prototype.concat.apply([],arguments)}function S(t){var e=t.length;if(0<e){for(var n=Array(e),r=0;r<e;r++)n[r]=t[r];return n}return[]}function I(t){return/^[\s\xa0]*$/.test(t)}var A,O=String.prototype.trim?function(t){return t.trim()}:function(t){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(t)[1]};function C(t,e){return-1!=t.indexOf(e)}function k(t,e){return t<e?-1:t>e?1:0}t:{var R=c.navigator;if(R){var N=R.userAgent;if(N){A=N;break t}}A=""}function D(t,e,n){for(var r in t)e.call(n,t[r],r,t)}function x(t){var e={};for(var n in t)e[n]=t[n];return e}var P="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function L(t,e){for(var n,r,i=1;i<arguments.length;i++){for(n in r=arguments[i])t[n]=r[n];for(var s=0;s<P.length;s++)n=P[s],Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}}function j(t){return j[" "](t),t}j[" "]=u;var M,F,U=C(A,"Opera"),V=C(A,"Trident")||C(A,"MSIE"),B=C(A,"Edge"),z=B||V,q=C(A,"Gecko")&&!(C(A.toLowerCase(),"webkit")&&!C(A,"Edge"))&&!(C(A,"Trident")||C(A,"MSIE"))&&!C(A,"Edge"),$=C(A.toLowerCase(),"webkit")&&!C(A,"Edge");function H(){var t=c.document;return t?t.documentMode:void 0}t:{var G="",K=(F=A,q?/rv:([^\);]+)(\)|;)/.exec(F):B?/Edge\/([\d\.]+)/.exec(F):V?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(F):$?/WebKit\/(\S+)/.exec(F):U?/(?:Version)[ \/]?(\S+)/.exec(F):void 0);if(K&&(G=K?K[1]:""),V){var W=H();if(null!=W&&W>parseFloat(G)){M=String(W);break t}}M=G}var Y,Q={};function X(){return function(t){var e=Q;return Object.prototype.hasOwnProperty.call(e,9)?e[9]:e[9]=t(9)}((function(){for(var t=0,e=O(String(M)).split("."),n=O("9").split("."),r=Math.max(e.length,n.length),i=0;0==t&&i<r;i++){var s=e[i]||"",o=n[i]||"";do{if(s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],o=/(\d*)(\D*)(.*)/.exec(o)||["","","",""],0==s[0].length&&0==o[0].length)break;t=k(0==s[1].length?0:parseInt(s[1],10),0==o[1].length?0:parseInt(o[1],10))||k(0==s[2].length,0==o[2].length)||k(s[2],o[2]),s=s[3],o=o[3]}while(0==t)}return 0<=t}))}if(c.document&&V){var J=H();Y=J||(parseInt(M,10)||void 0)}else Y=void 0;var Z=Y,tt=function(){if(!c.addEventListener||!Object.defineProperty)return!1;var t=!1,e=Object.defineProperty({},"passive",{get:function(){t=!0}});try{c.addEventListener("test",u,e),c.removeEventListener("test",u,e)}catch(t){}return t}();function et(t,e){this.type=t,this.g=this.target=e,this.defaultPrevented=!1}function nt(t,e){if(et.call(this,t?t.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,t){var n=this.type=t.type,r=t.changedTouches&&t.changedTouches.length?t.changedTouches[0]:null;if(this.target=t.target||t.srcElement,this.g=e,e=t.relatedTarget){if(q){t:{try{j(e.nodeName);var i=!0;break t}catch(t){}i=!1}i||(e=null)}}else"mouseover"==n?e=t.fromElement:"mouseout"==n&&(e=t.toElement);this.relatedTarget=e,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==t.clientX?t.clientX:t.pageX,this.clientY=void 0!==t.clientY?t.clientY:t.pageY,this.screenX=t.screenX||0,this.screenY=t.screenY||0),this.button=t.button,this.key=t.key||"",this.ctrlKey=t.ctrlKey,this.altKey=t.altKey,this.shiftKey=t.shiftKey,this.metaKey=t.metaKey,this.pointerId=t.pointerId||0,this.pointerType="string"==typeof t.pointerType?t.pointerType:rt[t.pointerType]||"",this.state=t.state,this.i=t,t.defaultPrevented&&nt.Z.h.call(this)}}et.prototype.h=function(){this.defaultPrevented=!0},v(nt,et);var rt={2:"touch",3:"pen",4:"mouse"};nt.prototype.h=function(){nt.Z.h.call(this);var t=this.i;t.preventDefault?t.preventDefault():t.returnValue=!1};var it="closure_listenable_"+(1e6*Math.random()|0),st=0;function ot(t,e,n,r,i){this.listener=t,this.proxy=null,this.src=e,this.type=n,this.capture=!!r,this.ia=i,this.key=++st,this.ca=this.fa=!1}function at(t){t.ca=!0,t.listener=null,t.proxy=null,t.src=null,t.ia=null}function ct(t){this.src=t,this.g={},this.h=0}function ut(t,e){var n=e.type;if(n in t.g){var r,i=t.g[n],s=E(i,e);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(at(e),0==t.g[n].length&&(delete t.g[n],t.h--))}}function lt(t,e,n,r){for(var i=0;i<t.length;++i){var s=t[i];if(!s.ca&&s.listener==e&&s.capture==!!n&&s.ia==r)return i}return-1}ct.prototype.add=function(t,e,n,r,i){var s=t.toString();(t=this.g[s])||(t=this.g[s]=[],this.h++);var o=lt(t,e,r,i);return-1<o?(e=t[o],n||(e.fa=!1)):((e=new ot(e,this.src,s,!!r,i)).fa=n,t.push(e)),e};var ht="closure_lm_"+(1e6*Math.random()|0),ft={};function dt(t,e,n,r,i){if(r&&r.once)return function t(e,n,r,i,s){if(Array.isArray(n)){for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);return null}return r=wt(r),e&&e[it]?e.O(n,r,h(i)?!!i.capture:!!i,s):pt(e,n,r,!0,i,s)}(t,e,n,r,i);if(Array.isArray(e)){for(var s=0;s<e.length;s++)dt(t,e[s],n,r,i);return null}return n=wt(n),t&&t[it]?t.N(e,n,h(r)?!!r.capture:!!r,i):pt(t,e,n,!1,r,i)}function pt(t,e,n,r,i,s){if(!e)throw Error("Invalid event type");var o=h(i)?!!i.capture:!!i,a=vt(t);if(a||(t[ht]=a=new ct(t)),(n=a.add(e,n,r,o,s)).proxy)return n;if(r=function(){var t=yt;return function e(n){return t.call(e.src,e.listener,n)}}(),n.proxy=r,r.src=t,r.listener=n,t.addEventListener)tt||(i=o),void 0===i&&(i=!1),t.addEventListener(e.toString(),r,i);else if(t.attachEvent)t.attachEvent(gt(e.toString()),r);else{if(!t.addListener||!t.removeListener)throw Error("addEventListener and attachEvent are unavailable.");t.addListener(r)}return n}function mt(t){if("number"!=typeof t&&t&&!t.ca){var e=t.src;if(e&&e[it])ut(e.i,t);else{var n=t.type,r=t.proxy;e.removeEventListener?e.removeEventListener(n,r,t.capture):e.detachEvent?e.detachEvent(gt(n),r):e.addListener&&e.removeListener&&e.removeListener(r),(n=vt(e))?(ut(n,t),0==n.h&&(n.src=null,e[ht]=null)):at(t)}}}function gt(t){return t in ft?ft[t]:ft[t]="on"+t}function yt(t,e){if(t.ca)t=!0;else{e=new nt(e,this);var n=t.listener,r=t.ia||t.src;t.fa&&mt(t),t=n.call(r,e)}return t}function vt(t){return(t=t[ht])instanceof ct?t:null}var bt="__closure_events_fn_"+(1e9*Math.random()>>>0);function wt(t){return"function"==typeof t?t:(t[bt]||(t[bt]=function(e){return t.handleEvent(e)}),t[bt])}function Et(){b.call(this),this.i=new ct(this),this.P=this,this.I=null}function Tt(t,e){var n,r=t.I;if(r)for(n=[];r;r=r.I)n.push(r);if(t=t.P,r=e.type||e,"string"==typeof e)e=new et(e,t);else if(e instanceof et)e.target=e.target||t;else{var i=e;L(e=new et(r,t),i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=e.g=n[s];i=_t(o,r,!0,e)&&i}if(i=_t(o=e.g=t,r,!0,e)&&i,i=_t(o,r,!1,e)&&i,n)for(s=0;s<n.length;s++)i=_t(o=e.g=n[s],r,!1,e)&&i}function _t(t,e,n,r){if(!(e=t.i.g[String(e)]))return!0;e=e.concat();for(var i=!0,s=0;s<e.length;++s){var o=e[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,c=o.ia||o.src;o.fa&&ut(t.i,o),i=!1!==a.call(c,r)&&i}}return i&&!r.defaultPrevented}v(Et,b),Et.prototype[it]=!0,Et.prototype.removeEventListener=function(t,e,n,r){!function t(e,n,r,i,s){if(Array.isArray(n))for(var o=0;o<n.length;o++)t(e,n[o],r,i,s);else i=h(i)?!!i.capture:!!i,r=wt(r),e&&e[it]?(e=e.i,(n=String(n).toString())in e.g&&(-1<(r=lt(o=e.g[n],r,i,s))&&(at(o[r]),Array.prototype.splice.call(o,r,1),0==o.length&&(delete e.g[n],e.h--)))):e&&(e=vt(e))&&(n=e.g[n.toString()],e=-1,n&&(e=lt(n,r,i,s)),(r=-1<e?n[e]:null)&&mt(r))}(this,t,e,n,r)},Et.prototype.M=function(){if(Et.Z.M.call(this),this.i){var t,e=this.i;for(t in e.g){for(var n=e.g[t],r=0;r<n.length;r++)at(n[r]);delete e.g[t],e.h--}}this.I=null},Et.prototype.N=function(t,e,n,r){return this.i.add(String(t),e,!1,n,r)},Et.prototype.O=function(t,e,n,r){return this.i.add(String(t),e,!0,n,r)};var St=c.JSON.stringify;function It(){var t=xt,e=null;return t.g&&(e=t.g,t.g=t.g.next,t.g||(t.h=null),e.next=null),e}var At,Ot=function(){function t(){this.h=this.g=null}return t.prototype.add=function(t,e){var n=Ct.get();n.set(t,e),this.h?this.h.next=n:this.g=n,this.h=n},t}(),Ct=new(function(){function t(t,e){this.i=t,this.j=e,this.h=0,this.g=null}return t.prototype.get=function(){var t;return 0<this.h?(this.h--,t=this.g,this.g=t.next,t.next=null):t=this.i(),t},t}())((function(){return new kt}),(function(t){return t.reset()})),kt=function(){function t(){this.next=this.g=this.h=null}return t.prototype.set=function(t,e){this.h=t,this.g=e,this.next=null},t.prototype.reset=function(){this.next=this.g=this.h=null},t}();function Rt(t){c.setTimeout((function(){throw t}),0)}function Nt(t,e){At||function(){var t=c.Promise.resolve(void 0);At=function(){t.then(Pt)}}(),Dt||(At(),Dt=!0),xt.add(t,e)}var Dt=!1,xt=new Ot;function Pt(){for(var t;t=It();){try{t.h.call(t.g)}catch(t){Rt(t)}var e=Ct;e.j(t),100>e.h&&(e.h++,t.next=e.g,e.g=t)}Dt=!1}function Lt(t,e){Et.call(this),this.h=t||1,this.g=e||c,this.j=g(this.kb,this),this.l=Date.now()}function jt(t){t.da=!1,t.S&&(t.g.clearTimeout(t.S),t.S=null)}function Mt(t,e,n){if("function"==typeof t)n&&(t=g(t,n));else{if(!t||"function"!=typeof t.handleEvent)throw Error("Invalid listener argument");t=g(t.handleEvent,t)}return 2147483647<Number(e)?-1:c.setTimeout(t,e||0)}function Ft(t){t.g=Mt((function(){t.g=null,t.i&&(t.i=!1,Ft(t))}),t.j);var e=t.h;t.h=null,t.m.apply(null,e)}v(Lt,Et),(s=Lt.prototype).da=!1,s.S=null,s.kb=function(){if(this.da){var t=Date.now()-this.l;0<t&&t<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-t):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Tt(this,"tick"),this.da&&(jt(this),this.start()))}},s.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},s.M=function(){Lt.Z.M.call(this),jt(this),delete this.g};var Ut=function(t){function e(e,n){var r=t.call(this)||this;return r.m=e,r.j=n,r.h=null,r.i=!1,r.g=null,r}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.l=function(t){this.h=arguments,this.g?this.i=!0:Ft(this)},e.prototype.M=function(){t.prototype.M.call(this),this.g&&(c.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)},e}(b);function Vt(t){b.call(this),this.h=t,this.g={}}v(Vt,b);var Bt=[];function zt(t,e,n,r){Array.isArray(n)||(n&&(Bt[0]=n.toString()),n=Bt);for(var i=0;i<n.length;i++){var s=dt(e,n[i],r||t.handleEvent,!1,t.h||t);if(!s)break;t.g[s.key]=s}}function qt(t){D(t.g,(function(t,e){this.g.hasOwnProperty(e)&&mt(t)}),t),t.g={}}function $t(){this.g=!0}function Ht(t,e,n,r){t.info((function(){return"XMLHTTP TEXT ("+e+"): "+function(t,e){if(!t.g)return e;if(!e)return null;try{var n=JSON.parse(e);if(n)for(t=0;t<n.length;t++)if(Array.isArray(n[t])){var r=n[t];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return St(n)}catch(t){return e}}(t,n)+(r?" "+r:"")}))}Vt.prototype.M=function(){Vt.Z.M.call(this),qt(this)},Vt.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},$t.prototype.Aa=function(){this.g=!1},$t.prototype.info=function(){};var Gt={},Kt=null;function Wt(){return Kt=Kt||new Et}function Yt(t){et.call(this,Gt.Ma,t)}function Qt(t){var e=Wt();Tt(e,new Yt(e,t))}function Xt(t,e){et.call(this,Gt.STAT_EVENT,t),this.stat=e}function Jt(t){var e=Wt();Tt(e,new Xt(e,t))}function Zt(t,e){et.call(this,Gt.Na,t),this.size=e}function te(t,e){if("function"!=typeof t)throw Error("Fn must not be null and must be a function");return c.setTimeout((function(){t()}),e)}Gt.Ma="serverreachability",v(Yt,et),Gt.STAT_EVENT="statevent",v(Xt,et),Gt.Na="timingevent",v(Zt,et);var ee={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},ne={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function re(){}function ie(t){return t.h||(t.h=t.i())}function se(){}re.prototype.h=null;var oe,ae={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function ce(){et.call(this,"d")}function ue(){et.call(this,"c")}function le(){}function he(t,e,n,r){this.l=t,this.j=e,this.m=n,this.X=r||1,this.V=new Vt(this),this.P=de,t=z?125:void 0,this.W=new Lt(t),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new fe}function fe(){this.i=null,this.g="",this.h=!1}v(ce,et),v(ue,et),v(le,re),le.prototype.g=function(){return new XMLHttpRequest},le.prototype.i=function(){return{}},oe=new le;var de=45e3,pe={},me={};function ge(t,e,n){t.K=1,t.v=Ue(xe(e)),t.s=n,t.U=!0,ye(t,null)}function ye(t,e){t.F=Date.now(),Ee(t),t.A=xe(t.v);var n=t.A,r=t.X;Array.isArray(r)||(r=[String(r)]),Je(n.h,"t",r),t.C=0,n=t.l.H,t.h=new fe,t.g=tr(t.l,n?e:null,!t.s),0<t.O&&(t.L=new Ut(g(t.Ia,t,t.g),t.O)),zt(t.V,t.g,"readystatechange",t.gb),e=t.H?x(t.H):{},t.s?(t.u||(t.u="POST"),e["Content-Type"]="application/x-www-form-urlencoded",t.g.ea(t.A,t.u,t.s,e)):(t.u="GET",t.g.ea(t.A,t.u,null,e)),Qt(1),function(t,e,n,r,i,s){t.info((function(){if(t.g)if(s)for(var o="",a=s.split("&"),c=0;c<a.length;c++){var u=a[c].split("=");if(1<u.length){var l=u[0];u=u[1];var h=l.split("_");o=2<=h.length&&"type"==h[1]?o+(l+"=")+u+"&":o+(l+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+e+"\n"+n+"\n"+o}))}(t.j,t.u,t.A,t.m,t.X,t.s)}function ve(t){return!!t.g&&("GET"==t.u&&2!=t.K&&t.l.Ba)}function be(t,e,n){for(var r,i=!0;!t.I&&t.C<n.length;){if((r=we(t,n))==me){4==e&&(t.o=4,Jt(14),i=!1),Ht(t.j,t.m,null,"[Incomplete Response]");break}if(r==pe){t.o=4,Jt(15),Ht(t.j,t.m,n,"[Invalid Chunk]"),i=!1;break}Ht(t.j,t.m,r,null),Ae(t,r)}ve(t)&&r!=me&&r!=pe&&(t.h.g="",t.C=0),4!=e||0!=n.length||t.h.h||(t.o=1,Jt(16),i=!1),t.i=t.i&&i,i?0<n.length&&!t.aa&&(t.aa=!0,(e=t.l).g==t&&e.$&&!e.L&&(e.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),Gn(e),e.L=!0,Jt(11))):(Ht(t.j,t.m,n,"[Invalid Chunked Response]"),Ie(t),Se(t))}function we(t,e){var n=t.C,r=e.indexOf("\n",n);return-1==r?me:(n=Number(e.substring(n,r)),isNaN(n)?pe:(r+=1)+n>e.length?me:(e=e.substr(r,n),t.C=r+n,e))}function Ee(t){t.Y=Date.now()+t.P,Te(t,t.P)}function Te(t,e){if(null!=t.B)throw Error("WatchDog timer not null");t.B=te(g(t.eb,t),e)}function _e(t){t.B&&(c.clearTimeout(t.B),t.B=null)}function Se(t){0==t.l.G||t.I||Yn(t.l,t)}function Ie(t){_e(t);var e=t.L;e&&"function"==typeof e.na&&e.na(),t.L=null,jt(t.W),qt(t.V),t.g&&(e=t.g,t.g=null,e.abort(),e.na())}function Ae(t,e){try{var n=t.l;if(0!=n.G&&(n.g==t||on(n.i,t)))if(n.I=t.N,!t.J&&on(n.i,t)&&3==n.G){try{var r=n.Ca.g.parse(e)}catch(s){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){t:if(!n.u){if(n.g){if(!(n.g.F+3e3<t.F))break t;Wn(n),Mn(n)}Hn(n),Jt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=te(g(n.ab,n),6e3));if(1>=sn(n.i)&&n.ka){try{n.ka()}catch(s){}n.ka=void 0}}else Xn(n,11)}else if((t.J||n.g==t)&&Wn(n),!I(e))for(i=n.Ca.g.parse(e),e=0;e<i.length;e++){var s=i[e];if(n.U=s[0],s=s[1],2==n.G)if("c"==s[0]){n.J=s[1],n.la=s[2];var o=s[3];null!=o&&(n.ma=o,n.h.info("VER="+n.ma));var a=s[4];null!=a&&(n.za=a,n.h.info("SVER="+n.za));var c=s[5];null!=c&&"number"==typeof c&&0<c&&(r=1.5*c,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;var u=t.g;if(u){var l=u.g?u.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(l){var h=r.i;!h.g&&(C(l,"spdy")||C(l,"quic")||C(l,"h2"))&&(h.j=h.l,h.g=new Set,h.h&&(an(h,h.h),h.h=null))}if(r.D){var f=u.g?u.g.getResponseHeader("X-HTTP-Session-Id"):null;f&&(r.sa=f,Fe(r.F,r.D,f))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-t.F,n.h.info("Handshake RTT: "+n.O+"ms"));var d=t;if((r=n).oa=Zn(r,r.H?r.la:null,r.W),d.J){cn(r.i,d);var p=d,m=r.K;m&&p.setTimeout(m),p.B&&(_e(p),Ee(p)),r.g=d}else $n(r);0<n.l.length&&Vn(n)}else"stop"!=s[0]&&"close"!=s[0]||Xn(n,7);else 3==n.G&&("stop"==s[0]||"close"==s[0]?"stop"==s[0]?Xn(n,7):jn(n):"noop"!=s[0]&&n.j&&n.j.wa(s),n.A=0)}Qt(4)}catch(s){}}function Oe(t,e){if(t.forEach&&"function"==typeof t.forEach)t.forEach(e,void 0);else if(l(t)||"string"==typeof t)T(t,e,void 0);else{if(t.T&&"function"==typeof t.T)var n=t.T();else if(t.R&&"function"==typeof t.R)n=void 0;else if(l(t)||"string"==typeof t){n=[];for(var r=t.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,t)n[r++]=i;i=(r=function(t){if(t.R&&"function"==typeof t.R)return t.R();if("string"==typeof t)return t.split("");if(l(t)){for(var e=[],n=t.length,r=0;r<n;r++)e.push(t[r]);return e}for(r in e=[],n=0,t)e[n++]=t[r];return e}(t)).length;for(var s=0;s<i;s++)e.call(void 0,r[s],n&&n[s],t)}}function Ce(t,e){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(t)if(t instanceof Ce)for(n=t.T(),r=0;r<n.length;r++)this.set(n[r],t.get(n[r]));else for(r in t)this.set(r,t[r])}function ke(t){if(t.i!=t.g.length){for(var e=0,n=0;e<t.g.length;){var r=t.g[e];Re(t.h,r)&&(t.g[n++]=r),e++}t.g.length=n}if(t.i!=t.g.length){var i={};for(n=e=0;e<t.g.length;)Re(i,r=t.g[e])||(t.g[n++]=r,i[r]=1),e++;t.g.length=n}}function Re(t,e){return Object.prototype.hasOwnProperty.call(t,e)}(s=he.prototype).setTimeout=function(t){this.P=t},s.gb=function(t){t=t.target;var e=this.L;e&&3==Nn(t)?e.l():this.Ia(t)},s.Ia=function(t){try{if(t==this.g)t:{var e=Nn(this.g),n=this.g.Da(),r=this.g.ba();if(!(3>e)&&(3!=e||z||this.g&&(this.h.h||this.g.ga()||Dn(this.g)))){this.I||4!=e||7==n||Qt(8==n||0>=r?3:2),_e(this);var i=this.g.ba();this.N=i;e:if(ve(this)){var s=Dn(this.g);t="";var o=s.length,a=4==Nn(this.g);if(!this.h.i){if("undefined"==typeof TextDecoder){Ie(this),Se(this);var u="";break e}this.h.i=new c.TextDecoder}for(n=0;n<o;n++)this.h.h=!0,t+=this.h.i.decode(s[n],{stream:a&&n==o-1});s.splice(0,o),this.h.g+=t,this.C=0,u=this.h.g}else u=this.g.ga();if(this.i=200==i,function(t,e,n,r,i,s,o){t.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+e+"\n"+n+"\n"+s+" "+o}))}(this.j,this.u,this.A,this.m,this.X,e,i),this.i){if(this.$&&!this.J){e:{if(this.g){var l,h=this.g;if((l=h.g?h.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!I(l)){var f=l;break e}}f=null}if(!(i=f)){this.i=!1,this.o=3,Jt(12),Ie(this),Se(this);break t}Ht(this.j,this.m,i,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ae(this,i)}this.U?(be(this,e,u),z&&this.i&&3==e&&(zt(this.V,this.W,"tick",this.fb),this.W.start())):(Ht(this.j,this.m,u,null),Ae(this,u)),4==e&&Ie(this),this.i&&!this.I&&(4==e?Yn(this.l,this):(this.i=!1,Ee(this)))}else 400==i&&0<u.indexOf("Unknown SID")?(this.o=3,Jt(12)):(this.o=0,Jt(13)),Ie(this),Se(this)}}}catch(e){}},s.fb=function(){if(this.g){var t=Nn(this.g),e=this.g.ga();this.C<e.length&&(_e(this),be(this,t,e),this.i&&4!=t&&Ee(this))}},s.cancel=function(){this.I=!0,Ie(this)},s.eb=function(){this.B=null;var t=Date.now();0<=t-this.Y?(function(t,e){t.info((function(){return"TIMEOUT: "+e}))}(this.j,this.A),2!=this.K&&(Qt(3),Jt(17)),Ie(this),this.o=2,Se(this)):Te(this,this.Y-t)},(s=Ce.prototype).R=function(){ke(this);for(var t=[],e=0;e<this.g.length;e++)t.push(this.h[this.g[e]]);return t},s.T=function(){return ke(this),this.g.concat()},s.get=function(t,e){return Re(this.h,t)?this.h[t]:e},s.set=function(t,e){Re(this.h,t)||(this.i++,this.g.push(t)),this.h[t]=e},s.forEach=function(t,e){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);t.call(e,s,i,this)}};var Ne=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function De(t,e){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,t instanceof De){this.g=void 0!==e?e:t.g,Pe(this,t.j),this.s=t.s,Le(this,t.i),je(this,t.m),this.l=t.l,e=t.h;var n=new We;n.i=e.i,e.g&&(n.g=new Ce(e.g),n.h=e.h),Me(this,n),this.o=t.o}else t&&(n=String(t).match(Ne))?(this.g=!!e,Pe(this,n[1]||"",!0),this.s=Ve(n[2]||""),Le(this,n[3]||"",!0),je(this,n[4]),this.l=Ve(n[5]||"",!0),Me(this,n[6]||"",!0),this.o=Ve(n[7]||"")):(this.g=!!e,this.h=new We(null,this.g))}function xe(t){return new De(t)}function Pe(t,e,n){t.j=n?Ve(e,!0):e,t.j&&(t.j=t.j.replace(/:$/,""))}function Le(t,e,n){t.i=n?Ve(e,!0):e}function je(t,e){if(e){if(e=Number(e),isNaN(e)||0>e)throw Error("Bad port number "+e);t.m=e}else t.m=null}function Me(t,e,n){e instanceof We?(t.h=e,function(t,e){e&&!t.j&&(Ye(t),t.i=null,t.g.forEach((function(t,e){var n=e.toLowerCase();e!=n&&(Qe(this,e),Je(this,n,t))}),t)),t.j=e}(t.h,t.g)):(n||(e=Be(e,Ge)),t.h=new We(e,t.g))}function Fe(t,e,n){t.h.set(e,n)}function Ue(t){return Fe(t,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),t}function Ve(t,e){return t?e?decodeURI(t.replace(/%25/g,"%2525")):decodeURIComponent(t):""}function Be(t,e,n){return"string"==typeof t?(t=encodeURI(t).replace(e,ze),n&&(t=t.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),t):null}function ze(t){return"%"+((t=t.charCodeAt(0))>>4&15).toString(16)+(15&t).toString(16)}De.prototype.toString=function(){var t=[],e=this.j;e&&t.push(Be(e,qe,!0),":");var n=this.i;return(n||"file"==e)&&(t.push("//"),(e=this.s)&&t.push(Be(e,qe,!0),"@"),t.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),null!=(n=this.m)&&t.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&t.push("/"),t.push(Be(n,"/"==n.charAt(0)?He:$e,!0))),(n=this.h.toString())&&t.push("?",n),(n=this.o)&&t.push("#",Be(n,Ke)),t.join("")};var qe=/[#\/\?@]/g,$e=/[#\?:]/g,He=/[#\?]/g,Ge=/[#\?@]/g,Ke=/#/g;function We(t,e){this.h=this.g=null,this.i=t||null,this.j=!!e}function Ye(t){t.g||(t.g=new Ce,t.h=0,t.i&&function(t,e){if(t){t=t.split("&");for(var n=0;n<t.length;n++){var r=t[n].indexOf("="),i=null;if(0<=r){var s=t[n].substring(0,r);i=t[n].substring(r+1)}else s=t[n];e(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}(t.i,(function(e,n){t.add(decodeURIComponent(e.replace(/\+/g," ")),n)})))}function Qe(t,e){Ye(t),e=Ze(t,e),Re(t.g.h,e)&&(t.i=null,t.h-=t.g.get(e).length,Re((t=t.g).h,e)&&(delete t.h[e],t.i--,t.g.length>2*t.i&&ke(t)))}function Xe(t,e){return Ye(t),e=Ze(t,e),Re(t.g.h,e)}function Je(t,e,n){Qe(t,e),0<n.length&&(t.i=null,t.g.set(Ze(t,e),S(n)),t.h+=n.length)}function Ze(t,e){return e=String(e),t.j&&(e=e.toLowerCase()),e}(s=We.prototype).add=function(t,e){Ye(this),this.i=null,t=Ze(this,t);var n=this.g.get(t);return n||this.g.set(t,n=[]),n.push(e),this.h+=1,this},s.forEach=function(t,e){Ye(this),this.g.forEach((function(n,r){T(n,(function(n){t.call(e,n,r,this)}),this)}),this)},s.T=function(){Ye(this);for(var t=this.g.R(),e=this.g.T(),n=[],r=0;r<e.length;r++)for(var i=t[r],s=0;s<i.length;s++)n.push(e[r]);return n},s.R=function(t){Ye(this);var e=[];if("string"==typeof t)Xe(this,t)&&(e=_(e,this.g.get(Ze(this,t))));else{t=this.g.R();for(var n=0;n<t.length;n++)e=_(e,t[n])}return e},s.set=function(t,e){return Ye(this),this.i=null,Xe(this,t=Ze(this,t))&&(this.h-=this.g.get(t).length),this.g.set(t,[e]),this.h+=1,this},s.get=function(t,e){return t&&0<(t=this.R(t)).length?String(t[0]):e},s.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var t=[],e=this.g.T(),n=0;n<e.length;n++){var r=e[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),t.push(o)}}return this.i=t.join("&")};var tn=function(t,e){this.h=t,this.g=e};function en(t){this.l=t||nn,c.PerformanceNavigationTiming?t=0<(t=c.performance.getEntriesByType("navigation")).length&&("hq"==t[0].nextHopProtocol||"h2"==t[0].nextHopProtocol):t=!!(c.g&&c.g.Ea&&c.g.Ea()&&c.g.Ea().Zb),this.j=t?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var nn=10;function rn(t){return!!t.h||!!t.g&&t.g.size>=t.j}function sn(t){return t.h?1:t.g?t.g.size:0}function on(t,e){return t.h?t.h==e:!!t.g&&t.g.has(e)}function an(t,e){t.g?t.g.add(e):t.h=e}function cn(t,e){t.h&&t.h==e?t.h=null:t.g&&t.g.has(e)&&t.g.delete(e)}function un(t){var e,n;if(null!=t.h)return t.i.concat(t.h.D);if(null!=t.g&&0!==t.g.size){var r=t.i;try{for(var s=i(t.g.values()),o=s.next();!o.done;o=s.next()){var a=o.value;r=r.concat(a.D)}}catch(t){e={error:t}}finally{try{o&&!o.done&&(n=s.return)&&n.call(s)}finally{if(e)throw e.error}}return r}return S(t.i)}function ln(){}function hn(){this.g=new ln}function fn(t,e,n){var r=n||"";try{Oe(t,(function(t,n){var i=t;h(t)&&(i=St(t)),e.push(r+n+"="+encodeURIComponent(i))}))}catch(t){throw e.push(r+"type="+encodeURIComponent("_badmap")),t}}function dn(t,e,n,r,i){try{e.onload=null,e.onerror=null,e.onabort=null,e.ontimeout=null,i(r)}catch(t){}}function pn(t){this.l=t.$b||null,this.j=t.ib||!1}function mn(t,e){Et.call(this),this.D=t,this.u=e,this.m=void 0,this.readyState=gn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}en.prototype.cancel=function(){var t,e;if(this.i=un(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){try{for(var n=i(this.g.values()),r=n.next();!r.done;r=n.next()){r.value.cancel()}}catch(e){t={error:e}}finally{try{r&&!r.done&&(e=n.return)&&e.call(n)}finally{if(t)throw t.error}}this.g.clear()}},ln.prototype.stringify=function(t){return c.JSON.stringify(t,void 0)},ln.prototype.parse=function(t){return c.JSON.parse(t,void 0)},v(pn,re),pn.prototype.g=function(){return new mn(this.l,this.j)},pn.prototype.i=function(t){return function(){return t}}({}),v(mn,Et);var gn=0;function yn(t){t.j.read().then(t.Sa.bind(t)).catch(t.ha.bind(t))}function vn(t){t.readyState=4,t.l=null,t.j=null,t.A=null,bn(t)}function bn(t){t.onreadystatechange&&t.onreadystatechange.call(t)}(s=mn.prototype).open=function(t,e){if(this.readyState!=gn)throw this.abort(),Error("Error reopening a connection");this.C=t,this.B=e,this.readyState=1,bn(this)},s.send=function(t){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;var e={headers:this.v,method:this.C,credentials:this.m,cache:void 0};t&&(e.body=t),(this.D||c).fetch(new Request(this.B,e)).then(this.Va.bind(this),this.ha.bind(this))},s.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,vn(this)),this.readyState=gn},s.Va=function(t){if(this.g&&(this.l=t,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=t.headers,this.readyState=2,bn(this)),this.g&&(this.readyState=3,bn(this),this.g)))if("arraybuffer"===this.responseType)t.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if(void 0!==c.ReadableStream&&"body"in t){if(this.j=t.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;yn(this)}else t.text().then(this.Ua.bind(this),this.ha.bind(this))},s.Sa=function(t){if(this.g){if(this.u&&t.value)this.response.push(t.value);else if(!this.u){var e=t.value?t.value:new Uint8Array(0);(e=this.A.decode(e,{stream:!t.done}))&&(this.response=this.responseText+=e)}t.done?vn(this):bn(this),3==this.readyState&&yn(this)}},s.Ua=function(t){this.g&&(this.response=this.responseText=t,vn(this))},s.Ta=function(t){this.g&&(this.response=t,vn(this))},s.ha=function(){this.g&&vn(this)},s.setRequestHeader=function(t,e){this.v.append(t,e)},s.getResponseHeader=function(t){return this.h&&this.h.get(t.toLowerCase())||""},s.getAllResponseHeaders=function(){if(!this.h)return"";for(var t=[],e=this.h.entries(),n=e.next();!n.done;)n=n.value,t.push(n[0]+": "+n[1]),n=e.next();return t.join("\r\n")},Object.defineProperty(mn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(t){this.m=t?"include":"same-origin"}});var wn=c.JSON.parse;function En(t){Et.call(this),this.headers=new Ce,this.u=t||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Tn,this.K=this.L=!1}v(En,Et);var Tn="",_n=/^https?$/i,Sn=["POST","PUT"];function In(t){return"content-type"==t.toLowerCase()}function An(t,e){t.h=!1,t.g&&(t.l=!0,t.g.abort(),t.l=!1),t.j=e,t.m=5,On(t),kn(t)}function On(t){t.D||(t.D=!0,Tt(t,"complete"),Tt(t,"error"))}function Cn(t){if(t.h&&void 0!==a&&(!t.C[1]||4!=Nn(t)||2!=t.ba()))if(t.v&&4==Nn(t))Mt(t.Fa,0,t);else if(Tt(t,"readystatechange"),4==Nn(t)){t.h=!1;try{var e,n=t.ba();t:switch(n){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var r=!0;break t;default:r=!1}if(!(e=r)){var i;if(i=0===n){var s=String(t.H).match(Ne)[1]||null;if(!s&&c.self&&c.self.location){var o=c.self.location.protocol;s=o.substr(0,o.length-1)}i=!_n.test(s?s.toLowerCase():"")}e=i}if(e)Tt(t,"complete"),Tt(t,"success");else{t.m=6;try{var u=2<Nn(t)?t.g.statusText:""}catch(t){u=""}t.j=u+" ["+t.ba()+"]",On(t)}}finally{kn(t)}}}function kn(t,e){if(t.g){Rn(t);var n=t.g,r=t.C[0]?u:null;t.g=null,t.C=null,e||Tt(t,"ready");try{n.onreadystatechange=r}catch(t){}}}function Rn(t){t.g&&t.K&&(t.g.ontimeout=null),t.A&&(c.clearTimeout(t.A),t.A=null)}function Nn(t){return t.g?t.g.readyState:0}function Dn(t){try{if(!t.g)return null;if("response"in t.g)return t.g.response;switch(t.J){case Tn:case"text":return t.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in t.g)return t.g.mozResponseArrayBuffer}return null}catch(t){return null}}function xn(t,e,n){t:{for(r in n){var r=!1;break t}r=!0}r||(n=function(t){var e="";return D(t,(function(t,n){e+=n,e+=":",e+=t,e+="\r\n"})),e}(n),"string"==typeof t?null!=n&&encodeURIComponent(String(n)):Fe(t,e,n))}function Pn(t,e,n){return n&&n.internalChannelParams&&n.internalChannelParams[t]||e}function Ln(t){this.za=0,this.l=[],this.h=new $t,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=Pn("failFast",!1,t),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=Pn("baseRetryDelayMs",5e3,t),this.$a=Pn("retryDelaySeedMs",1e4,t),this.Ya=Pn("forwardChannelMaxRetries",2,t),this.ra=Pn("forwardChannelRequestTimeoutMs",2e4,t),this.qa=t&&t.xmlHttpFactory||void 0,this.Ba=t&&t.Yb||!1,this.K=void 0,this.H=t&&t.supportsCrossDomainXhr||!1,this.J="",this.i=new en(t&&t.concurrentRequestLimit),this.Ca=new hn,this.ja=t&&t.fastHandshake||!1,this.Ra=t&&t.Wb||!1,t&&t.Aa&&this.h.Aa(),t&&t.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&t&&t.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!t||!1!==t.Xb}function jn(t){if(Fn(t),3==t.G){var e=t.V++,n=xe(t.F);Fe(n,"SID",t.J),Fe(n,"RID",e),Fe(n,"TYPE","terminate"),zn(t,n),(e=new he(t,t.h,e,void 0)).K=2,e.v=Ue(xe(n)),n=!1,c.navigator&&c.navigator.sendBeacon&&(n=c.navigator.sendBeacon(e.v.toString(),"")),!n&&c.Image&&((new Image).src=e.v,n=!0),n||(e.g=tr(e.l,null),e.g.ea(e.v)),e.F=Date.now(),Ee(e)}Jn(t)}function Mn(t){t.g&&(Gn(t),t.g.cancel(),t.g=null)}function Fn(t){Mn(t),t.u&&(c.clearTimeout(t.u),t.u=null),Wn(t),t.i.cancel(),t.m&&("number"==typeof t.m&&c.clearTimeout(t.m),t.m=null)}function Un(t,e){t.l.push(new tn(t.Za++,e)),3==t.G&&Vn(t)}function Vn(t){rn(t.i)||t.m||(t.m=!0,Nt(t.Ha,t),t.C=0)}function Bn(t,e){var n;n=e?e.m:t.V++;var r=xe(t.F);Fe(r,"SID",t.J),Fe(r,"RID",n),Fe(r,"AID",t.U),zn(t,r),t.o&&t.s&&xn(r,t.o,t.s),n=new he(t,t.h,n,t.C+1),null===t.o&&(n.H=t.s),e&&(t.l=e.D.concat(t.l)),e=qn(t,n,1e3),n.setTimeout(Math.round(.5*t.ra)+Math.round(.5*t.ra*Math.random())),an(t.i,n),ge(n,r,e)}function zn(t,e){t.j&&Oe({},(function(t,n){Fe(e,n,t)}))}function qn(t,e,n){n=Math.min(t.l.length,n);var r=t.j?g(t.j.Oa,t.j,t):null;t:for(var i=t.l,s=-1;;){var o=["count="+n];-1==s?0<n?(s=i[0].h,o.push("ofs="+s)):s=0:o.push("ofs="+s);for(var a=!0,c=0;c<n;c++){var u=i[c].h,l=i[c].g;if(0>(u-=s))s=Math.max(0,i[c].h-100),a=!1;else try{fn(l,o,"req"+u+"_")}catch(t){r&&r(l)}}if(a){r=o.join("&");break t}}return t=t.l.splice(0,n),e.D=t,r}function $n(t){t.g||t.u||(t.Y=1,Nt(t.Ga,t),t.A=0)}function Hn(t){return!(t.g||t.u||3<=t.A)&&(t.Y++,t.u=te(g(t.Ga,t),Qn(t,t.A)),t.A++,!0)}function Gn(t){null!=t.B&&(c.clearTimeout(t.B),t.B=null)}function Kn(t){t.g=new he(t,t.h,"rpc",t.Y),null===t.o&&(t.g.H=t.s),t.g.O=0;var e=xe(t.oa);Fe(e,"RID","rpc"),Fe(e,"SID",t.J),Fe(e,"CI",t.N?"0":"1"),Fe(e,"AID",t.U),zn(t,e),Fe(e,"TYPE","xmlhttp"),t.o&&t.s&&xn(e,t.o,t.s),t.K&&t.g.setTimeout(t.K);var n=t.g;t=t.la,n.K=1,n.v=Ue(xe(e)),n.s=null,n.U=!0,ye(n,t)}function Wn(t){null!=t.v&&(c.clearTimeout(t.v),t.v=null)}function Yn(t,e){var n=null;if(t.g==e){Wn(t),Gn(t),t.g=null;var r=2}else{if(!on(t.i,e))return;n=e.D,cn(t.i,e),r=1}if(t.I=e.N,0!=t.G)if(e.i)if(1==r){n=e.s?e.s.length:0,e=Date.now()-e.F;var i=t.C;Tt(r=Wt(),new Zt(r,n,e,i)),Vn(t)}else $n(t);else if(3==(i=e.o)||0==i&&0<t.I||!(1==r&&function(t,e){return!(sn(t.i)>=t.i.j-(t.m?1:0))&&(t.m?(t.l=e.D.concat(t.l),!0):!(1==t.G||2==t.G||t.C>=(t.Xa?0:t.Ya))&&(t.m=te(g(t.Ha,t,e),Qn(t,t.C)),t.C++,!0))}(t,e)||2==r&&Hn(t)))switch(n&&0<n.length&&(e=t.i,e.i=e.i.concat(n)),i){case 1:Xn(t,5);break;case 4:Xn(t,10);break;case 3:Xn(t,6);break;default:Xn(t,2)}}function Qn(t,e){var n=t.Pa+Math.floor(Math.random()*t.$a);return t.j||(n*=2),n*e}function Xn(t,e){if(t.h.info("Error code "+e),2==e){var n=null;t.j&&(n=null);var r=g(t.jb,t);n||(n=new De("//www.google.com/images/cleardot.gif"),c.location&&"http"==c.location.protocol||Pe(n,"https"),Ue(n)),function(t,e){var n=new $t;if(c.Image){var r=new Image;r.onload=y(dn,n,r,"TestLoadImage: loaded",!0,e),r.onerror=y(dn,n,r,"TestLoadImage: error",!1,e),r.onabort=y(dn,n,r,"TestLoadImage: abort",!1,e),r.ontimeout=y(dn,n,r,"TestLoadImage: timeout",!1,e),c.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=t}else e(!1)}(n.toString(),r)}else Jt(2);t.G=0,t.j&&t.j.va(e),Jn(t),Fn(t)}function Jn(t){t.G=0,t.I=-1,t.j&&(0==un(t.i).length&&0==t.l.length||(t.i.i.length=0,S(t.l),t.l.length=0),t.j.ua())}function Zn(t,e,n){var r=function(t){return t instanceof De?xe(t):new De(t,void 0)}(n);if(""!=r.i)e&&Le(r,e+"."+r.i),je(r,r.m);else{var i=c.location;r=function(t,e,n,r){var i=new De(null,void 0);return t&&Pe(i,t),e&&Le(i,e),n&&je(i,n),r&&(i.l=r),i}(i.protocol,e?e+"."+i.hostname:i.hostname,+i.port,n)}return t.aa&&D(t.aa,(function(t,e){Fe(r,e,t)})),e=t.D,n=t.sa,e&&n&&Fe(r,e,n),Fe(r,"VER",t.ma),zn(t,r),r}function tr(t,e,n){if(e&&!t.H)throw Error("Can't create secondary domain capable XhrIo object.");return(e=n&&t.Ba&&!t.qa?new En(new pn({ib:!0})):new En(t.qa)).L=t.H,e}function er(){}function nr(){if(V&&!(10<=Number(Z)))throw Error("Environmental error: no available transport.")}function rr(t,e){Et.call(this),this.g=new Ln(e),this.l=t,this.h=e&&e.messageUrlParams||null,t=e&&e.messageHeaders||null,e&&e.clientProtocolHeaderRequired&&(t?t["X-Client-Protocol"]="webchannel":t={"X-Client-Protocol":"webchannel"}),this.g.s=t,t=e&&e.initMessageHeaders||null,e&&e.messageContentType&&(t?t["X-WebChannel-Content-Type"]=e.messageContentType:t={"X-WebChannel-Content-Type":e.messageContentType}),e&&e.ya&&(t?t["X-WebChannel-Client-Profile"]=e.ya:t={"X-WebChannel-Client-Profile":e.ya}),this.g.P=t,(t=e&&e.httpHeadersOverwriteParam)&&!I(t)&&(this.g.o=t),this.A=e&&e.supportsCrossDomainXhr||!1,this.v=e&&e.sendRawJson||!1,(e=e&&e.httpSessionIdParam)&&!I(e)&&(this.g.D=e,null!==(t=this.h)&&e in t&&(e in(t=this.h)&&delete t[e])),this.j=new or(this)}function ir(t){ce.call(this);var e=t.__sm__;if(e){t:{for(var n in e){t=n;break t}t=void 0}(this.i=t)&&(t=this.i,e=null!==e&&t in e?e[t]:void 0),this.data=e}else this.data=t}function sr(){ue.call(this),this.status=1}function or(t){this.g=t}(s=En.prototype).ea=function(t,e,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+t);e=e?e.toUpperCase():"GET",this.H=t,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():oe.g(),this.C=this.u?ie(this.u):ie(oe),this.g.onreadystatechange=g(this.Fa,this);try{this.F=!0,this.g.open(e,String(t),!0),this.F=!1}catch(t){return void An(this,t)}t=n||"";var i=new Ce(this.headers);r&&Oe(r,(function(t,e){i.set(e,t)})),r=function(t){t:{for(var e=In,n=t.length,r="string"==typeof t?t.split(""):t,i=0;i<n;i++)if(i in r&&e.call(void 0,r[i],i,t)){e=i;break t}e=-1}return 0>e?null:"string"==typeof t?t.charAt(e):t[e]}(i.T()),n=c.FormData&&t instanceof c.FormData,!(0<=E(Sn,e))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(t,e){this.g.setRequestHeader(e,t)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Rn(this),0<this.B&&((this.K=function(t){return V&&X()&&"number"==typeof t.timeout&&void 0!==t.ontimeout}(this.g))?(this.g.timeout=this.B,this.g.ontimeout=g(this.pa,this)):this.A=Mt(this.pa,this.B,this)),this.v=!0,this.g.send(t),this.v=!1}catch(t){An(this,t)}},s.pa=function(){void 0!==a&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Tt(this,"timeout"),this.abort(8))},s.abort=function(t){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=t||7,Tt(this,"complete"),Tt(this,"abort"),kn(this))},s.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),kn(this,!0)),En.Z.M.call(this)},s.Fa=function(){this.s||(this.F||this.v||this.l?Cn(this):this.cb())},s.cb=function(){Cn(this)},s.ba=function(){try{return 2<Nn(this)?this.g.status:-1}catch(t){return-1}},s.ga=function(){try{return this.g?this.g.responseText:""}catch(t){return""}},s.Qa=function(t){if(this.g){var e=this.g.responseText;return t&&0==e.indexOf(t)&&(e=e.substring(t.length)),wn(e)}},s.Da=function(){return this.m},s.La=function(){return"string"==typeof this.j?this.j:String(this.j)},(s=Ln.prototype).ma=8,s.G=1,s.hb=function(t){try{this.h.info("Origin Trials invoked: "+t)}catch(t){}},s.Ha=function(t){if(this.m)if(this.m=null,1==this.G){if(!t){this.V=Math.floor(1e5*Math.random()),t=this.V++;var e=new he(this,this.h,t,void 0),n=this.s;if(this.P&&(n?L(n=x(n),this.P):n=this.P),null===this.o&&(e.H=n),this.ja)t:{for(var r=0,i=0;i<this.l.length;i++){var s=this.l[i];if(void 0===(s="__data__"in s.g&&"string"==typeof(s=s.g.__data__)?s.length:void 0))break;if(4096<(r+=s)){r=i;break t}if(4096===r||i===this.l.length-1){r=i+1;break t}}r=1e3}else r=1e3;r=qn(this,e,r),Fe(i=xe(this.F),"RID",t),Fe(i,"CVER",22),this.D&&Fe(i,"X-HTTP-Session-Id",this.D),zn(this,i),this.o&&n&&xn(i,this.o,n),an(this.i,e),this.Ra&&Fe(i,"TYPE","init"),this.ja?(Fe(i,"$req",r),Fe(i,"SID","null"),e.$=!0,ge(e,i,null)):ge(e,i,r),this.G=2}}else 3==this.G&&(t?Bn(this,t):0==this.l.length||rn(this.i)||Bn(this))},s.Ga=function(){if(this.u=null,Kn(this),this.$&&!(this.L||null==this.g||0>=this.O)){var t=2*this.O;this.h.info("BP detection timer enabled: "+t),this.B=te(g(this.bb,this),t)}},s.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,Jt(10),Mn(this),Kn(this))},s.ab=function(){null!=this.v&&(this.v=null,Mn(this),Hn(this),Jt(19))},s.jb=function(t){t?(this.h.info("Successfully pinged google.com"),Jt(2)):(this.h.info("Failed to ping google.com"),Jt(1))},(s=er.prototype).xa=function(){},s.wa=function(){},s.va=function(){},s.ua=function(){},s.Oa=function(){},nr.prototype.g=function(t,e){return new rr(t,e)},v(rr,Et),rr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var t=this.g,e=this.l,n=this.h||void 0;t.Wa&&(t.h.info("Origin Trials enabled."),Nt(g(t.hb,t,e))),Jt(0),t.W=e,t.aa=n||{},t.N=t.X,t.F=Zn(t,null,t.W),Vn(t)},rr.prototype.close=function(){jn(this.g)},rr.prototype.u=function(t){if("string"==typeof t){var e={};e.__data__=t,Un(this.g,e)}else this.v?((e={}).__data__=St(t),Un(this.g,e)):Un(this.g,t)},rr.prototype.M=function(){this.g.j=null,delete this.j,jn(this.g),delete this.g,rr.Z.M.call(this)},v(ir,ce),v(sr,ue),v(or,er),or.prototype.xa=function(){Tt(this.g,"a")},or.prototype.wa=function(t){Tt(this.g,new ir(t))},or.prototype.va=function(t){Tt(this.g,new sr(t))},or.prototype.ua=function(){Tt(this.g,"b")},nr.prototype.createWebChannel=nr.prototype.g,rr.prototype.send=rr.prototype.u,rr.prototype.open=rr.prototype.m,rr.prototype.close=rr.prototype.close,ee.NO_ERROR=0,ee.TIMEOUT=8,ee.HTTP_ERROR=6,ne.COMPLETE="complete",se.EventType=ae,ae.OPEN="a",ae.CLOSE="b",ae.ERROR="c",ae.MESSAGE="d",Et.prototype.listen=Et.prototype.N,En.prototype.listenOnce=En.prototype.O,En.prototype.getLastError=En.prototype.La,En.prototype.getLastErrorCode=En.prototype.Da,En.prototype.getStatus=En.prototype.ba,En.prototype.getResponseJson=En.prototype.Qa,En.prototype.getResponseText=En.prototype.ga,En.prototype.send=En.prototype.ea;var ar=function(){return new nr},cr=function(){return Wt()},ur=ee,lr=ne,hr=Gt,fr={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},dr=pn,pr=se,mr=En}).call(this,n(22))},function(t,e,n){"use strict";n.d(e,"c",(function(){return i})),n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return o})),n.d(e,"d",(function(){return a})),n.d(e,"g",(function(){return c})),n.d(e,"e",(function(){return u})),n.d(e,"f",(function(){return l}));
/*! *****************************************************************************
Copyright (c) Microsoft Corporation.

Permission to use, copy, modify, and/or distribute this software for any
purpose with or without fee is hereby granted.

THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES WITH
REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF MERCHANTABILITY
AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR ANY SPECIAL, DIRECT,
INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES WHATSOEVER RESULTING FROM
LOSS OF USE, DATA OR PROFITS, WHETHER IN AN ACTION OF CONTRACT, NEGLIGENCE OR
OTHER TORTIOUS ACTION, ARISING OUT OF OR IN CONNECTION WITH THE USE OR
PERFORMANCE OF THIS SOFTWARE.
***************************************************************************** */
var r=function(t,e){return(r=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)Object.prototype.hasOwnProperty.call(e,n)&&(t[n]=e[n])})(t,e)};function i(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Class extends value "+String(e)+" is not a constructor or null");function n(){this.constructor=t}r(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}var s=function(){return(s=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};function o(t,e,n,r){return new(n||(n=Promise))((function(i,s){function o(t){try{c(r.next(t))}catch(t){s(t)}}function a(t){try{c(r.throw(t))}catch(t){s(t)}}function c(t){var e;t.done?i(t.value):(e=t.value,e instanceof n?e:new n((function(t){t(e)}))).then(o,a)}c((r=r.apply(t,e||[])).next())}))}function a(t,e){var n,r,i,s,o={label:0,sent:function(){if(1&i[0])throw i[1];return i[1]},trys:[],ops:[]};return s={next:a(0),throw:a(1),return:a(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function a(s){return function(a){return function(s){if(n)throw new TypeError("Generator is already executing.");for(;o;)try{if(n=1,r&&(i=2&s[0]?r.return:s[0]?r.throw||((i=r.return)&&i.call(r),0):r.next)&&!(i=i.call(r,s[1])).done)return i;switch(r=0,i&&(s=[2&s[0],i.value]),s[0]){case 0:case 1:i=s;break;case 4:return o.label++,{value:s[1],done:!1};case 5:o.label++,r=s[1],s=[0];continue;case 7:s=o.ops.pop(),o.trys.pop();continue;default:if(!(i=o.trys,(i=i.length>0&&i[i.length-1])||6!==s[0]&&2!==s[0])){o=0;continue}if(3===s[0]&&(!i||s[1]>i[0]&&s[1]<i[3])){o.label=s[1];break}if(6===s[0]&&o.label<i[1]){o.label=i[1],i=s;break}if(i&&o.label<i[2]){o.label=i[2],o.ops.push(s);break}i[2]&&o.ops.pop(),o.trys.pop();continue}s=e.call(t,o)}catch(t){s=[6,t],r=0}finally{n=i=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,a])}}}Object.create;function c(t){var e="function"==typeof Symbol&&Symbol.iterator,n=e&&t[e],r=0;if(n)return n.call(t);if(t&&"number"==typeof t.length)return{next:function(){return t&&r>=t.length&&(t=void 0),{value:t&&t[r++],done:!t}}};throw new TypeError(e?"Object is not iterable.":"Symbol.iterator is not defined.")}function u(t,e){var n="function"==typeof Symbol&&t[Symbol.iterator];if(!n)return t;var r,i,s=n.call(t),o=[];try{for(;(void 0===e||e-- >0)&&!(r=s.next()).done;)o.push(r.value)}catch(t){i={error:t}}finally{try{r&&!r.done&&(n=s.return)&&n.call(s)}finally{if(i)throw i.error}}return o}function l(t,e,n){if(n||2===arguments.length)for(var r,i=0,s=e.length;i<s;i++)!r&&i in e||(r||(r=Array.prototype.slice.call(e,0,i)),r[i]=e[i]);return t.concat(r||Array.prototype.slice.call(e))}Object.create},function(t,e,n){"use strict";
/*! *****************************************************************************
Copyright (c) Microsoft Corporation. All rights reserved.
Licensed under the Apache License, Version 2.0 (the "License"); you may not use
this file except in compliance with the License. You may obtain a copy of the
License at http://www.apache.org/licenses/LICENSE-2.0

THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
MERCHANTABLITY OR NON-INFRINGEMENT.

See the Apache Version 2.0 License for specific language governing permissions
and limitations under the License.
***************************************************************************** */
function r(){for(var t=0,e=0,n=arguments.length;e<n;e++)t+=arguments[e].length;var r=Array(t),i=0;for(e=0;e<n;e++)for(var s=arguments[e],o=0,a=s.length;o<a;o++,i++)r[i]=s[o];return r}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var i;n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return h})),n.d(e,"c",(function(){return f})),n.d(e,"d",(function(){return d}));var s,o=[];!function(t){t[t.DEBUG=0]="DEBUG",t[t.VERBOSE=1]="VERBOSE",t[t.INFO=2]="INFO",t[t.WARN=3]="WARN",t[t.ERROR=4]="ERROR",t[t.SILENT=5]="SILENT"}(s||(s={}));var a={debug:s.DEBUG,verbose:s.VERBOSE,info:s.INFO,warn:s.WARN,error:s.ERROR,silent:s.SILENT},c=s.INFO,u=((i={})[s.DEBUG]="log",i[s.VERBOSE]="log",i[s.INFO]="info",i[s.WARN]="warn",i[s.ERROR]="error",i),l=function(t,e){for(var n=[],i=2;i<arguments.length;i++)n[i-2]=arguments[i];if(!(e<t.logLevel)){var s=(new Date).toISOString(),o=u[e];if(!o)throw new Error("Attempted to log a message with an invalid logType (value: "+e+")");console[o].apply(console,r(["["+s+"]  "+t.name+":"],n))}},h=function(){function t(t){this.name=t,this._logLevel=c,this._logHandler=l,this._userLogHandler=null,o.push(this)}return Object.defineProperty(t.prototype,"logLevel",{get:function(){return this._logLevel},set:function(t){if(!(t in s))throw new TypeError('Invalid value "'+t+'" assigned to `logLevel`');this._logLevel=t},enumerable:!1,configurable:!0}),t.prototype.setLogLevel=function(t){this._logLevel="string"==typeof t?a[t]:t},Object.defineProperty(t.prototype,"logHandler",{get:function(){return this._logHandler},set:function(t){if("function"!=typeof t)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=t},enumerable:!1,configurable:!0}),Object.defineProperty(t.prototype,"userLogHandler",{get:function(){return this._userLogHandler},set:function(t){this._userLogHandler=t},enumerable:!1,configurable:!0}),t.prototype.debug=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.DEBUG],t)),this._logHandler.apply(this,r([this,s.DEBUG],t))},t.prototype.log=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.VERBOSE],t)),this._logHandler.apply(this,r([this,s.VERBOSE],t))},t.prototype.info=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.INFO],t)),this._logHandler.apply(this,r([this,s.INFO],t))},t.prototype.warn=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.WARN],t)),this._logHandler.apply(this,r([this,s.WARN],t))},t.prototype.error=function(){for(var t=[],e=0;e<arguments.length;e++)t[e]=arguments[e];this._userLogHandler&&this._userLogHandler.apply(this,r([this,s.ERROR],t)),this._logHandler.apply(this,r([this,s.ERROR],t))},t}();function f(t){o.forEach((function(e){e.setLogLevel(t)}))}function d(t,e){for(var n=function(n){var r=null;e&&e.level&&(r=a[e.level]),n.userLogHandler=null===t?null:function(e,n){for(var i=[],o=2;o<arguments.length;o++)i[o-2]=arguments[o];var a=i.map((function(t){if(null==t)return null;if("string"==typeof t)return t;if("number"==typeof t||"boolean"==typeof t)return t.toString();if(t instanceof Error)return t.message;try{return JSON.stringify(t)}catch(t){return null}})).filter((function(t){return t})).join(" ");n>=(null!=r?r:e.logLevel)&&t({level:s[n].toLowerCase(),message:a,args:i,type:e.name})}},r=0,i=o;r<i.length;r++){n(i[r])}}},function(t,e,n){"use strict";n.d(e,"a",(function(){return s})),n.d(e,"b",(function(){return a}));var r=n(5),i=n(0),s=function(){function t(t,e,n){this.name=t,this.instanceFactory=e,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}return t.prototype.setInstantiationMode=function(t){return this.instantiationMode=t,this},t.prototype.setMultipleInstances=function(t){return this.multipleInstances=t,this},t.prototype.setServiceProps=function(t){return this.serviceProps=t,this},t.prototype.setInstanceCreatedCallback=function(t){return this.onInstanceCreated=t,this},t}(),o=function(){function t(t,e){this.name=t,this.container=e,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}return t.prototype.get=function(t){var e=this.normalizeInstanceIdentifier(t);if(!this.instancesDeferred.has(e)){var n=new i.a;if(this.instancesDeferred.set(e,n),this.isInitialized(e)||this.shouldAutoInitialize())try{var r=this.getOrInitializeService({instanceIdentifier:e});r&&n.resolve(r)}catch(t){}}return this.instancesDeferred.get(e).promise},t.prototype.getImmediate=function(t){var e,n=this.normalizeInstanceIdentifier(null==t?void 0:t.identifier),r=null!==(e=null==t?void 0:t.optional)&&void 0!==e&&e;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error("Service "+this.name+" is not available")}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(t){if(r)return null;throw t}},t.prototype.getComponent=function(){return this.component},t.prototype.setComponent=function(t){var e,n;if(t.name!==this.name)throw Error("Mismatching Component "+t.name+" for Provider "+this.name+".");if(this.component)throw Error("Component for "+this.name+" has already been provided");if(this.component=t,this.shouldAutoInitialize()){if(function(t){return"EAGER"===t.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t))try{this.getOrInitializeService({instanceIdentifier:"[DEFAULT]"})}catch(t){}try{for(var i=Object(r.g)(this.instancesDeferred.entries()),s=i.next();!s.done;s=i.next()){var o=Object(r.e)(s.value,2),a=o[0],c=o[1],u=this.normalizeInstanceIdentifier(a);try{var l=this.getOrInitializeService({instanceIdentifier:u});c.resolve(l)}catch(t){}}}catch(t){e={error:t}}finally{try{s&&!s.done&&(n=i.return)&&n.call(i)}finally{if(e)throw e.error}}}},t.prototype.clearInstance=function(t){void 0===t&&(t="[DEFAULT]"),this.instancesDeferred.delete(t),this.instancesOptions.delete(t),this.instances.delete(t)},t.prototype.delete=function(){return Object(r.b)(this,void 0,void 0,(function(){var t;return Object(r.d)(this,(function(e){switch(e.label){case 0:return t=Array.from(this.instances.values()),[4,Promise.all(Object(r.f)(Object(r.f)([],Object(r.e)(t.filter((function(t){return"INTERNAL"in t})).map((function(t){return t.INTERNAL.delete()})))),Object(r.e)(t.filter((function(t){return"_delete"in t})).map((function(t){return t._delete()})))))];case 1:return e.sent(),[2]}}))}))},t.prototype.isComponentSet=function(){return null!=this.component},t.prototype.isInitialized=function(t){return void 0===t&&(t="[DEFAULT]"),this.instances.has(t)},t.prototype.getOptions=function(t){return void 0===t&&(t="[DEFAULT]"),this.instancesOptions.get(t)||{}},t.prototype.initialize=function(t){var e,n;void 0===t&&(t={});var i=t.options,s=void 0===i?{}:i,o=this.normalizeInstanceIdentifier(t.instanceIdentifier);if(this.isInitialized(o))throw Error(this.name+"("+o+") has already been initialized");if(!this.isComponentSet())throw Error("Component "+this.name+" has not been registered yet");var a=this.getOrInitializeService({instanceIdentifier:o,options:s});try{for(var c=Object(r.g)(this.instancesDeferred.entries()),u=c.next();!u.done;u=c.next()){var l=Object(r.e)(u.value,2),h=l[0],f=l[1];o===this.normalizeInstanceIdentifier(h)&&f.resolve(a)}}catch(t){e={error:t}}finally{try{u&&!u.done&&(n=c.return)&&n.call(c)}finally{if(e)throw e.error}}return a},t.prototype.onInit=function(t,e){var n,r=this.normalizeInstanceIdentifier(e),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(t),this.onInitCallbacks.set(r,i);var s=this.instances.get(r);return s&&t(s,r),function(){i.delete(t)}},t.prototype.invokeOnInitCallbacks=function(t,e){var n,i,s=this.onInitCallbacks.get(e);if(s)try{for(var o=Object(r.g)(s),a=o.next();!a.done;a=o.next()){var c=a.value;try{c(t,e)}catch(t){}}}catch(t){n={error:t}}finally{try{a&&!a.done&&(i=o.return)&&i.call(o)}finally{if(n)throw n.error}}},t.prototype.getOrInitializeService=function(t){var e,n=t.instanceIdentifier,r=t.options,i=void 0===r?{}:r,s=this.instances.get(n);if(!s&&this.component&&(s=this.component.instanceFactory(this.container,{instanceIdentifier:(e=n,"[DEFAULT]"===e?void 0:e),options:i}),this.instances.set(n,s),this.instancesOptions.set(n,i),this.invokeOnInitCallbacks(s,n),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,n,s)}catch(t){}return s||null},t.prototype.normalizeInstanceIdentifier=function(t){return void 0===t&&(t="[DEFAULT]"),this.component?this.component.multipleInstances?t:"[DEFAULT]":t},t.prototype.shouldAutoInitialize=function(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode},t}();var a=function(){function t(t){this.name=t,this.providers=new Map}return t.prototype.addComponent=function(t){var e=this.getProvider(t.name);if(e.isComponentSet())throw new Error("Component "+t.name+" has already been registered with "+this.name);e.setComponent(t)},t.prototype.addOrOverwriteComponent=function(t){this.getProvider(t.name).isComponentSet()&&this.providers.delete(t.name),this.addComponent(t)},t.prototype.getProvider=function(t){if(this.providers.has(t))return this.providers.get(t);var e=new o(t,this);return this.providers.set(t,e),e},t.prototype.getProviders=function(){return Array.from(this.providers.values())},t}()},function(t,e,n){"use strict";var r=n(9),i=n(18),s=(n(12),n(17),Object.prototype.hasOwnProperty),o=n(19),a={key:!0,ref:!0,__self:!0,__source:!0};function c(t){return void 0!==t.ref}function u(t){return void 0!==t.key}var l=function(t,e,n,r,i,s,a){return{$$typeof:o,type:t,key:e,ref:n,props:a,_owner:s}};l.createElement=function(t,e,n){var r,o={},h=null,f=null;if(null!=e)for(r in c(e)&&(f=e.ref),u(e)&&(h=""+e.key),void 0===e.__self?null:e.__self,void 0===e.__source?null:e.__source,e)s.call(e,r)&&!a.hasOwnProperty(r)&&(o[r]=e[r]);var d=arguments.length-2;if(1===d)o.children=n;else if(d>1){for(var p=Array(d),m=0;m<d;m++)p[m]=arguments[m+2];0,o.children=p}if(t&&t.defaultProps){var g=t.defaultProps;for(r in g)void 0===o[r]&&(o[r]=g[r])}return l(t,h,f,0,0,i.current,o)},l.createFactory=function(t){var e=l.createElement.bind(null,t);return e.type=t,e},l.cloneAndReplaceKey=function(t,e){return l(t.type,e,t.ref,t._self,t._source,t._owner,t.props)},l.cloneElement=function(t,e,n){var o,h,f=r({},t.props),d=t.key,p=t.ref,m=(t._self,t._source,t._owner);if(null!=e)for(o in c(e)&&(p=e.ref,m=i.current),u(e)&&(d=""+e.key),t.type&&t.type.defaultProps&&(h=t.type.defaultProps),e)s.call(e,o)&&!a.hasOwnProperty(o)&&(void 0===e[o]&&void 0!==h?f[o]=h[o]:f[o]=e[o]);var g=arguments.length-2;if(1===g)f.children=n;else if(g>1){for(var y=Array(g),v=0;v<g;v++)y[v]=arguments[v+2];f.children=y}return l(t.type,d,p,0,0,m,f)},l.isValidElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===o},t.exports=l},function(t,e,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,a,c=o(t),u=1;u<arguments.length;u++){for(var l in n=Object(arguments[u]))i.call(n,l)&&(c[l]=n[l]);if(r){a=r(n);for(var h=0;h<a.length;h++)s.call(n,a[h])&&(c[a[h]]=n[a[h]])}}return c}},function(t,e,n){"use strict";t.exports=function(t){for(var e=arguments.length-1,n="Minified React error #"+t+"; visit http://facebook.github.io/react/docs/error-decoder.html?invariant="+t,r=0;r<e;r++)n+="&args[]="+encodeURIComponent(arguments[r+1]);n+=" for the full message or use the non-minified dev environment for full errors and additional helpful warnings.";var i=new Error(n);throw i.name="Invariant Violation",i.framesToPop=1,i}},function(t,e,n){"use strict";t.exports=function(t,e,n,r,i,s,o,a){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,s,o,a],l=0;(c=new Error(e.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}},function(t,e,n){"use strict";var r=n(16);t.exports=r},function(t,e,n){"use strict";t.exports=n(49)},function(t,e,n){"use strict";var r=n(10),i=n(9),s=n(15),o=(n(17),n(26));n(11),n(27);function a(t,e,n){this.props=t,this.context=e,this.refs=o,this.updater=n||s}function c(t,e,n){this.props=t,this.context=e,this.refs=o,this.updater=n||s}function u(){}a.prototype.isReactComponent={},a.prototype.setState=function(t,e){"object"!=typeof t&&"function"!=typeof t&&null!=t&&r("85"),this.updater.enqueueSetState(this,t),e&&this.updater.enqueueCallback(this,e,"setState")},a.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this),t&&this.updater.enqueueCallback(this,t,"forceUpdate")},u.prototype=a.prototype,c.prototype=new u,c.prototype.constructor=c,i(c.prototype,a.prototype),c.prototype.isPureReactComponent=!0,t.exports={Component:a,PureComponent:c}},function(t,e,n){"use strict";n(12);var r={isMounted:function(t){return!1},enqueueCallback:function(t,e){},enqueueForceUpdate:function(t){},enqueueReplaceState:function(t,e){},enqueueSetState:function(t,e){}};t.exports=r},function(t,e,n){"use strict";function r(t){return function(){return t}}var i=function(){};i.thatReturns=r,i.thatReturnsFalse=r(!1),i.thatReturnsTrue=r(!0),i.thatReturnsNull=r(null),i.thatReturnsThis=function(){return this},i.thatReturnsArgument=function(t){return t},t.exports=i},function(t,e,n){"use strict";t.exports=!1},function(t,e,n){"use strict";t.exports={current:null}},function(t,e,n){"use strict";var r="function"==typeof Symbol&&Symbol.for&&Symbol.for("react.element")||60103;t.exports=r},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";(function(t){n.d(e,"a",(function(){return Rs})),n.d(e,"b",(function(){return ao})),n.d(e,"c",(function(){return Ns})),n.d(e,"d",(function(){return so})),n.d(e,"e",(function(){return Ls})),n.d(e,"f",(function(){return co})),n.d(e,"g",(function(){return no})),n.d(e,"h",(function(){return to}));var r=n(1),i=n(7),s=n(6),o=n(0),a=n(4);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(t){this.uid=t}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(t){return t.uid===this.uid}}c.UNAUTHENTICATED=new c(null),c.GOOGLE_CREDENTIALS=new c("google-credentials-uid"),c.FIRST_PARTY=new c("first-party-uid"),c.MOCK_USER=new c("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let u="9.0.2";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const l=new s.b("@firebase/firestore");function h(){return l.logLevel}function f(t,...e){if(l.logLevel<=s.a.DEBUG){const n=e.map(m);l.debug(`Firestore (${u}): ${t}`,...n)}}function d(t,...e){if(l.logLevel<=s.a.ERROR){const n=e.map(m);l.error(`Firestore (${u}): ${t}`,...n)}}function p(t,...e){if(l.logLevel<=s.a.WARN){const n=e.map(m);l.warn(`Firestore (${u}): ${t}`,...n)}}function m(t){if("string"==typeof t)return t;try{return e=t,JSON.stringify(e)}catch(e){return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function g(t="Unexpected state"){const e=`FIRESTORE (${u}) INTERNAL ASSERTION FAILED: `+t;throw d(e),new Error(e)}function y(t,e){t||g()}function v(t,e){return t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class w extends Error{constructor(t,e){super(e),this.code=t,this.message=e,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class E{constructor(){this.promise=new Promise((t,e)=>{this.resolve=t,this.reject=e})}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class T{constructor(t,e){this.user=e,this.type="OAuth",this.authHeaders={},this.authHeaders.Authorization="Bearer "+t}}class _{getToken(){return Promise.resolve(null)}invalidateToken(){}start(t,e){t.enqueueRetryable(()=>e(c.UNAUTHENTICATED))}shutdown(){}}class S{constructor(t){this.t=t,this.currentUser=c.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(t,e){let n=this.i;const r=t=>this.i!==n?(n=this.i,e(t)):Promise.resolve();let i=new E;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new E,t.enqueueRetryable(()=>r(this.currentUser))};const s=()=>{const e=i;t.enqueueRetryable(async()=>{await e.promise,await r(this.currentUser)})},o=t=>{f("FirebaseCredentialsProvider","Auth detected"),this.auth=t,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit(t=>o(t)),setTimeout(()=>{if(!this.auth){const t=this.t.getImmediate({optional:!0});t?o(t):(f("FirebaseCredentialsProvider","Auth not yet detected"),i.resolve(),i=new E)}},0),s()}getToken(){const t=this.i,e=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(e).then(e=>this.i!==t?(f("FirebaseCredentialsProvider","getToken aborted due to token change."),this.getToken()):e?(y("string"==typeof e.accessToken),new T(e.accessToken,this.currentUser)):null):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const t=this.auth&&this.auth.getUid();return y(null===t||"string"==typeof t),new c(t)}}class I{constructor(t,e,n){this.h=t,this.l=e,this.m=n,this.type="FirstParty",this.user=c.FIRST_PARTY}get authHeaders(){const t={"X-Goog-AuthUser":this.l},e=this.h.auth.getAuthHeaderValueForFirstParty([]);return e&&(t.Authorization=e),this.m&&(t["X-Goog-Iam-Authorization-Token"]=this.m),t}}class A{constructor(t,e,n){this.h=t,this.l=e,this.m=n}getToken(){return Promise.resolve(new I(this.h,this.l,this.m))}start(t,e){t.enqueueRetryable(()=>e(c.FIRST_PARTY))}shutdown(){}invalidateToken(){}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{constructor(t,e){this.previousValue=t,e&&(e.sequenceNumberHandler=t=>this.g(t),this.p=t=>e.writeSequenceNumber(t))}g(t){return this.previousValue=Math.max(t,this.previousValue),this.previousValue}next(){const t=++this.previousValue;return this.p&&this.p(t),t}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(t){const e="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(t);if(e&&"function"==typeof e.getRandomValues)e.getRandomValues(n);else for(let e=0;e<t;e++)n[e]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */O.T=-1;class k{static I(){const t="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",e=Math.floor(256/t.length)*t.length;let n="";for(;n.length<20;){const r=C(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<e&&(n+=t.charAt(r[i]%t.length))}return n}}function R(t,e){return t<e?-1:t>e?1:0}function N(t,e,n){return t.length===e.length&&t.every((t,r)=>n(t,e[r]))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class D{constructor(t,e){if(this.seconds=t,this.nanoseconds=e,e<0)throw new w(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(e>=1e9)throw new w(b.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+e);if(t<-62135596800)throw new w(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t);if(t>=253402300800)throw new w(b.INVALID_ARGUMENT,"Timestamp seconds out of range: "+t)}static now(){return D.fromMillis(Date.now())}static fromDate(t){return D.fromMillis(t.getTime())}static fromMillis(t){const e=Math.floor(t/1e3),n=Math.floor(1e6*(t-1e3*e));return new D(e,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(t){return this.seconds===t.seconds?R(this.nanoseconds,t.nanoseconds):R(this.seconds,t.seconds)}isEqual(t){return t.seconds===this.seconds&&t.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const t=this.seconds- -62135596800;return String(t).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class x{constructor(t){this.timestamp=t}static fromTimestamp(t){return new x(t)}static min(){return new x(new D(0,0))}compareTo(t){return this.timestamp._compareTo(t.timestamp)}isEqual(t){return this.timestamp.isEqual(t.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(t){let e=0;for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e++;return e}function L(t,e){for(const n in t)Object.prototype.hasOwnProperty.call(t,n)&&e(n,t[n])}function j(t){for(const e in t)if(Object.prototype.hasOwnProperty.call(t,e))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class M{constructor(t,e,n){void 0===e?e=0:e>t.length&&g(),void 0===n?n=t.length-e:n>t.length-e&&g(),this.segments=t,this.offset=e,this.len=n}get length(){return this.len}isEqual(t){return 0===M.comparator(this,t)}child(t){const e=this.segments.slice(this.offset,this.limit());return t instanceof M?t.forEach(t=>{e.push(t)}):e.push(t),this.construct(e)}limit(){return this.offset+this.length}popFirst(t){return t=void 0===t?1:t,this.construct(this.segments,this.offset+t,this.length-t)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(t){return this.segments[this.offset+t]}isEmpty(){return 0===this.length}isPrefixOf(t){if(t.length<this.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}isImmediateParentOf(t){if(this.length+1!==t.length)return!1;for(let e=0;e<this.length;e++)if(this.get(e)!==t.get(e))return!1;return!0}forEach(t){for(let e=this.offset,n=this.limit();e<n;e++)t(this.segments[e])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(t,e){const n=Math.min(t.length,e.length);for(let r=0;r<n;r++){const n=t.get(r),i=e.get(r);if(n<i)return-1;if(n>i)return 1}return t.length<e.length?-1:t.length>e.length?1:0}}class F extends M{construct(t,e,n){return new F(t,e,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...t){const e=[];for(const n of t){if(n.indexOf("//")>=0)throw new w(b.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);e.push(...n.split("/").filter(t=>t.length>0))}return new F(e)}static emptyPath(){return new F([])}}const U=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class V extends M{construct(t,e,n){return new V(t,e,n)}static isValidIdentifier(t){return U.test(t)}canonicalString(){return this.toArray().map(t=>(t=t.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),V.isValidIdentifier(t)||(t="`"+t+"`"),t)).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new V(["__name__"])}static fromServerFormat(t){const e=[];let n="",r=0;const i=()=>{if(0===n.length)throw new w(b.INVALID_ARGUMENT,`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);e.push(n),n=""};let s=!1;for(;r<t.length;){const e=t[r];if("\\"===e){if(r+1===t.length)throw new w(b.INVALID_ARGUMENT,"Path has trailing escape character: "+t);const e=t[r+1];if("\\"!==e&&"."!==e&&"`"!==e)throw new w(b.INVALID_ARGUMENT,"Path has invalid escape sequence: "+t);n+=e,r+=2}else"`"===e?(s=!s,r++):"."!==e||s?(n+=e,r++):(i(),r++)}if(i(),s)throw new w(b.INVALID_ARGUMENT,"Unterminated ` in path: "+t);return new V(e)}static emptyPath(){return new V([])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(t){this.fields=t,t.sort(V.comparator)}covers(t){for(const e of this.fields)if(e.isPrefixOf(t))return!0;return!1}isEqual(t){return N(this.fields,t.fields,(t,e)=>t.isEqual(e))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{constructor(t){this.binaryString=t}static fromBase64String(t){const e=atob(t);return new z(e)}static fromUint8Array(t){const e=function(t){let e="";for(let n=0;n<t.length;++n)e+=String.fromCharCode(t[n]);return e}(t);return new z(e)}toBase64(){return t=this.binaryString,btoa(t);var t}toUint8Array(){return function(t){const e=new Uint8Array(t.length);for(let n=0;n<t.length;n++)e[n]=t.charCodeAt(n);return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(t){return R(this.binaryString,t.binaryString)}isEqual(t){return this.binaryString===t.binaryString}}z.EMPTY_BYTE_STRING=new z("");const q=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function $(t){if(y(!!t),"string"==typeof t){let e=0;const n=q.exec(t);if(y(!!n),n[1]){let t=n[1];t=(t+"000000000").substr(0,9),e=Number(t)}const r=new Date(t);return{seconds:Math.floor(r.getTime()/1e3),nanos:e}}return{seconds:H(t.seconds),nanos:H(t.nanos)}}function H(t){return"number"==typeof t?t:"string"==typeof t?Number(t):0}function G(t){return"string"==typeof t?z.fromBase64String(t):z.fromUint8Array(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function K(t){var e,n;return"server_timestamp"===(null===(n=((null===(e=null==t?void 0:t.mapValue)||void 0===e?void 0:e.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function W(t){const e=$(t.mapValue.fields.__local_write_time__.timestampValue);return new D(e.seconds,e.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t){return null==t}function Q(t){return 0===t&&1/t==-1/0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class X{constructor(t){this.path=t}static fromPath(t){return new X(F.fromString(t))}static fromName(t){return new X(F.fromString(t).popFirst(5))}hasCollectionId(t){return this.path.length>=2&&this.path.get(this.path.length-2)===t}isEqual(t){return null!==t&&0===F.comparator(this.path,t.path)}toString(){return this.path.toString()}static comparator(t,e){return F.comparator(t.path,e.path)}static isDocumentKey(t){return t.length%2==0}static fromSegments(t){return new X(new F(t.slice()))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function J(t){return"nullValue"in t?0:"booleanValue"in t?1:"integerValue"in t||"doubleValue"in t?2:"timestampValue"in t?3:"stringValue"in t?5:"bytesValue"in t?6:"referenceValue"in t?7:"geoPointValue"in t?8:"arrayValue"in t?9:"mapValue"in t?K(t)?4:10:g()}function Z(t,e){const n=J(t);if(n!==J(e))return!1;switch(n){case 0:return!0;case 1:return t.booleanValue===e.booleanValue;case 4:return W(t).isEqual(W(e));case 3:return function(t,e){if("string"==typeof t.timestampValue&&"string"==typeof e.timestampValue&&t.timestampValue.length===e.timestampValue.length)return t.timestampValue===e.timestampValue;const n=$(t.timestampValue),r=$(e.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(t,e);case 5:return t.stringValue===e.stringValue;case 6:return function(t,e){return G(t.bytesValue).isEqual(G(e.bytesValue))}(t,e);case 7:return t.referenceValue===e.referenceValue;case 8:return function(t,e){return H(t.geoPointValue.latitude)===H(e.geoPointValue.latitude)&&H(t.geoPointValue.longitude)===H(e.geoPointValue.longitude)}(t,e);case 2:return function(t,e){if("integerValue"in t&&"integerValue"in e)return H(t.integerValue)===H(e.integerValue);if("doubleValue"in t&&"doubleValue"in e){const n=H(t.doubleValue),r=H(e.doubleValue);return n===r?Q(n)===Q(r):isNaN(n)&&isNaN(r)}return!1}(t,e);case 9:return N(t.arrayValue.values||[],e.arrayValue.values||[],Z);case 10:return function(t,e){const n=t.mapValue.fields||{},r=e.mapValue.fields||{};if(P(n)!==P(r))return!1;for(const t in n)if(n.hasOwnProperty(t)&&(void 0===r[t]||!Z(n[t],r[t])))return!1;return!0}(t,e);default:return g()}}function tt(t,e){return void 0!==(t.values||[]).find(t=>Z(t,e))}function et(t,e){const n=J(t),r=J(e);if(n!==r)return R(n,r);switch(n){case 0:return 0;case 1:return R(t.booleanValue,e.booleanValue);case 2:return function(t,e){const n=H(t.integerValue||t.doubleValue),r=H(e.integerValue||e.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(t,e);case 3:return nt(t.timestampValue,e.timestampValue);case 4:return nt(W(t),W(e));case 5:return R(t.stringValue,e.stringValue);case 6:return function(t,e){const n=G(t),r=G(e);return n.compareTo(r)}(t.bytesValue,e.bytesValue);case 7:return function(t,e){const n=t.split("/"),r=e.split("/");for(let t=0;t<n.length&&t<r.length;t++){const e=R(n[t],r[t]);if(0!==e)return e}return R(n.length,r.length)}(t.referenceValue,e.referenceValue);case 8:return function(t,e){const n=R(H(t.latitude),H(e.latitude));return 0!==n?n:R(H(t.longitude),H(e.longitude))}(t.geoPointValue,e.geoPointValue);case 9:return function(t,e){const n=t.values||[],r=e.values||[];for(let t=0;t<n.length&&t<r.length;++t){const e=et(n[t],r[t]);if(e)return e}return R(n.length,r.length)}(t.arrayValue,e.arrayValue);case 10:return function(t,e){const n=t.fields||{},r=Object.keys(n),i=e.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let t=0;t<r.length&&t<s.length;++t){const e=R(r[t],s[t]);if(0!==e)return e;const o=et(n[r[t]],i[s[t]]);if(0!==o)return o}return R(r.length,s.length)}(t.mapValue,e.mapValue);default:throw g()}}function nt(t,e){if("string"==typeof t&&"string"==typeof e&&t.length===e.length)return R(t,e);const n=$(t),r=$(e),i=R(n.seconds,r.seconds);return 0!==i?i:R(n.nanos,r.nanos)}function rt(t){return function t(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(t){const e=$(t);return`time(${e.seconds},${e.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?G(e.bytesValue).toBase64():"referenceValue"in e?(r=e.referenceValue,X.fromName(r).toString()):"geoPointValue"in e?`geo(${(n=e.geoPointValue).latitude},${n.longitude})`:"arrayValue"in e?function(e){let n="[",r=!0;for(const i of e.values||[])r?r=!1:n+=",",n+=t(i);return n+"]"}(e.arrayValue):"mapValue"in e?function(e){const n=Object.keys(e.fields||{}).sort();let r="{",i=!0;for(const s of n)i?i=!1:r+=",",r+=`${s}:${t(e.fields[s])}`;return r+"}"}(e.mapValue):g();var n,r}(t)}function it(t){return!!t&&"integerValue"in t}function st(t){return!!t&&"arrayValue"in t}function ot(t){return!!t&&"nullValue"in t}function at(t){return!!t&&"doubleValue"in t&&isNaN(Number(t.doubleValue))}function ct(t){return!!t&&"mapValue"in t}function ut(t){if(t.geoPointValue)return{geoPointValue:Object.assign({},t.geoPointValue)};if(t.timestampValue&&"object"==typeof t.timestampValue)return{timestampValue:Object.assign({},t.timestampValue)};if(t.mapValue){const e={mapValue:{fields:{}}};return L(t.mapValue.fields,(t,n)=>e.mapValue.fields[t]=ut(n)),e}if(t.arrayValue){const e={arrayValue:{values:[]}};for(let n=0;n<(t.arrayValue.values||[]).length;++n)e.arrayValue.values[n]=ut(t.arrayValue.values[n]);return e}return Object.assign({},t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class lt{constructor(t){this.value=t}static empty(){return new lt({mapValue:{}})}field(t){if(t.isEmpty())return this.value;{let e=this.value;for(let n=0;n<t.length-1;++n)if(e=(e.mapValue.fields||{})[t.get(n)],!ct(e))return null;return e=(e.mapValue.fields||{})[t.lastSegment()],e||null}}set(t,e){this.getFieldsMap(t.popLast())[t.lastSegment()]=ut(e)}setAll(t){let e=V.emptyPath(),n={},r=[];t.forEach((t,i)=>{if(!e.isImmediateParentOf(i)){const t=this.getFieldsMap(e);this.applyChanges(t,n,r),n={},r=[],e=i.popLast()}t?n[i.lastSegment()]=ut(t):r.push(i.lastSegment())});const i=this.getFieldsMap(e);this.applyChanges(i,n,r)}delete(t){const e=this.field(t.popLast());ct(e)&&e.mapValue.fields&&delete e.mapValue.fields[t.lastSegment()]}isEqual(t){return Z(this.value,t.value)}getFieldsMap(t){let e=this.value;e.mapValue.fields||(e.mapValue={fields:{}});for(let n=0;n<t.length;++n){let r=e.mapValue.fields[t.get(n)];ct(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},e.mapValue.fields[t.get(n)]=r),e=r}return e.mapValue.fields}applyChanges(t,e,n){L(e,(e,n)=>t[e]=n);for(const e of n)delete t[e]}clone(){return new lt(ut(this.value))}}function ht(t){const e=[];return L(t.fields,(t,n)=>{const r=new V([t]);if(ct(n)){const t=ht(n.mapValue).fields;if(0===t.length)e.push(r);else for(const n of t)e.push(r.child(n))}else e.push(r)}),new B(e)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ft{constructor(t,e,n,r,i){this.key=t,this.documentType=e,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(t){return new ft(t,0,x.min(),lt.empty(),0)}static newFoundDocument(t,e,n){return new ft(t,1,e,n,0)}static newNoDocument(t,e){return new ft(t,2,e,lt.empty(),0)}static newUnknownDocument(t,e){return new ft(t,3,e,lt.empty(),2)}convertToFoundDocument(t,e){return this.version=t,this.documentType=1,this.data=e,this.documentState=0,this}convertToNoDocument(t){return this.version=t,this.documentType=2,this.data=lt.empty(),this.documentState=0,this}convertToUnknownDocument(t){return this.version=t,this.documentType=3,this.data=lt.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(t){return t instanceof ft&&this.key.isEqual(t.key)&&this.version.isEqual(t.version)&&this.documentType===t.documentType&&this.documentState===t.documentState&&this.data.isEqual(t.data)}clone(){return new ft(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dt{constructor(t,e=null,n=[],r=[],i=null,s=null,o=null){this.path=t,this.collectionGroup=e,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.A=null}}function pt(t,e=null,n=[],r=[],i=null,s=null,o=null){return new dt(t,e,n,r,i,s,o)}function mt(t){const e=v(t);if(null===e.A){let t=e.path.canonicalString();null!==e.collectionGroup&&(t+="|cg:"+e.collectionGroup),t+="|f:",t+=e.filters.map(t=>function(t){return t.field.canonicalString()+t.op.toString()+rt(t.value)}(t)).join(","),t+="|ob:",t+=e.orderBy.map(t=>function(t){return t.field.canonicalString()+t.dir}(t)).join(","),Y(e.limit)||(t+="|l:",t+=e.limit),e.startAt&&(t+="|lb:",t+=Ct(e.startAt)),e.endAt&&(t+="|ub:",t+=Ct(e.endAt)),e.A=t}return e.A}function gt(t,e){if(t.limit!==e.limit)return!1;if(t.orderBy.length!==e.orderBy.length)return!1;for(let n=0;n<t.orderBy.length;n++)if(!Rt(t.orderBy[n],e.orderBy[n]))return!1;if(t.filters.length!==e.filters.length)return!1;for(let i=0;i<t.filters.length;i++)if(n=t.filters[i],r=e.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Z(n.value,r.value))return!1;var n,r;return t.collectionGroup===e.collectionGroup&&!!t.path.isEqual(e.path)&&!!Dt(t.startAt,e.startAt)&&Dt(t.endAt,e.endAt)}function yt(t){return X.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}class vt extends class{}{constructor(t,e,n){super(),this.field=t,this.op=e,this.value=n}static create(t,e,n){return t.isKeyField()?"in"===e||"not-in"===e?this.R(t,e,n):new bt(t,e,n):"array-contains"===e?new _t(t,n):"in"===e?new St(t,n):"not-in"===e?new It(t,n):"array-contains-any"===e?new At(t,n):new vt(t,e,n)}static R(t,e,n){return"in"===e?new wt(t,n):new Et(t,n)}matches(t){const e=t.data.field(this.field);return"!="===this.op?null!==e&&this.P(et(e,this.value)):null!==e&&J(this.value)===J(e)&&this.P(et(e,this.value))}P(t){switch(this.op){case"<":return t<0;case"<=":return t<=0;case"==":return 0===t;case"!=":return 0!==t;case">":return t>0;case">=":return t>=0;default:return g()}}v(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class bt extends vt{constructor(t,e,n){super(t,e,n),this.key=X.fromName(n.referenceValue)}matches(t){const e=X.comparator(t.key,this.key);return this.P(e)}}class wt extends vt{constructor(t,e){super(t,"in",e),this.keys=Tt("in",e)}matches(t){return this.keys.some(e=>e.isEqual(t.key))}}class Et extends vt{constructor(t,e){super(t,"not-in",e),this.keys=Tt("not-in",e)}matches(t){return!this.keys.some(e=>e.isEqual(t.key))}}function Tt(t,e){var n;return((null===(n=e.arrayValue)||void 0===n?void 0:n.values)||[]).map(t=>X.fromName(t.referenceValue))}class _t extends vt{constructor(t,e){super(t,"array-contains",e)}matches(t){const e=t.data.field(this.field);return st(e)&&tt(e.arrayValue,this.value)}}class St extends vt{constructor(t,e){super(t,"in",e)}matches(t){const e=t.data.field(this.field);return null!==e&&tt(this.value.arrayValue,e)}}class It extends vt{constructor(t,e){super(t,"not-in",e)}matches(t){if(tt(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const e=t.data.field(this.field);return null!==e&&!tt(this.value.arrayValue,e)}}class At extends vt{constructor(t,e){super(t,"array-contains-any",e)}matches(t){const e=t.data.field(this.field);return!(!st(e)||!e.arrayValue.values)&&e.arrayValue.values.some(t=>tt(this.value.arrayValue,t))}}class Ot{constructor(t,e){this.position=t,this.before=e}}function Ct(t){return`${t.before?"b":"a"}:${t.position.map(t=>rt(t)).join(",")}`}class kt{constructor(t,e="asc"){this.field=t,this.dir=e}}function Rt(t,e){return t.dir===e.dir&&t.field.isEqual(e.field)}function Nt(t,e,n){let r=0;for(let i=0;i<t.position.length;i++){const s=e[i],o=t.position[i];if(r=s.field.isKeyField()?X.comparator(X.fromName(o.referenceValue),n.key):et(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return t.before?r<=0:r<0}function Dt(t,e){if(null===t)return null===e;if(null===e)return!1;if(t.before!==e.before||t.position.length!==e.position.length)return!1;for(let n=0;n<t.position.length;n++)if(!Z(t.position[n],e.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xt{constructor(t,e=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=t,this.collectionGroup=e,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.V=null,this.S=null,this.startAt,this.endAt}}function Pt(t,e,n,r,i,s,o,a){return new xt(t,e,n,r,i,s,o,a)}function Lt(t){return new xt(t)}function jt(t){return!Y(t.limit)&&"F"===t.limitType}function Mt(t){return!Y(t.limit)&&"L"===t.limitType}function Ft(t){return t.explicitOrderBy.length>0?t.explicitOrderBy[0].field:null}function Ut(t){for(const e of t.filters)if(e.v())return e.field;return null}function Vt(t){return null!==t.collectionGroup}function Bt(t){const e=v(t);if(null===e.V){e.V=[];const t=Ut(e),n=Ft(e);if(null!==t&&null===n)t.isKeyField()||e.V.push(new kt(t)),e.V.push(new kt(V.keyField(),"asc"));else{let t=!1;for(const n of e.explicitOrderBy)e.V.push(n),n.field.isKeyField()&&(t=!0);if(!t){const t=e.explicitOrderBy.length>0?e.explicitOrderBy[e.explicitOrderBy.length-1].dir:"asc";e.V.push(new kt(V.keyField(),t))}}}return e.V}function zt(t){const e=v(t);if(!e.S)if("F"===e.limitType)e.S=pt(e.path,e.collectionGroup,Bt(e),e.filters,e.limit,e.startAt,e.endAt);else{const t=[];for(const n of Bt(e)){const e="desc"===n.dir?"asc":"desc";t.push(new kt(n.field,e))}const n=e.endAt?new Ot(e.endAt.position,!e.endAt.before):null,r=e.startAt?new Ot(e.startAt.position,!e.startAt.before):null;e.S=pt(e.path,e.collectionGroup,t,e.filters,e.limit,n,r)}return e.S}function qt(t,e,n){return new xt(t.path,t.collectionGroup,t.explicitOrderBy.slice(),t.filters.slice(),e,n,t.startAt,t.endAt)}function $t(t,e){return gt(zt(t),zt(e))&&t.limitType===e.limitType}function Ht(t){return`${mt(zt(t))}|lt:${t.limitType}`}function Gt(t){return`Query(target=${function(t){let e=t.path.canonicalString();return null!==t.collectionGroup&&(e+=" collectionGroup="+t.collectionGroup),t.filters.length>0&&(e+=`, filters: [${t.filters.map(t=>{return`${(e=t).field.canonicalString()} ${e.op} ${rt(e.value)}`;var e}).join(", ")}]`),Y(t.limit)||(e+=", limit: "+t.limit),t.orderBy.length>0&&(e+=`, orderBy: [${t.orderBy.map(t=>function(t){return`${t.field.canonicalString()} (${t.dir})`}(t)).join(", ")}]`),t.startAt&&(e+=", startAt: "+Ct(t.startAt)),t.endAt&&(e+=", endAt: "+Ct(t.endAt)),`Target(${e})`}(zt(t))}; limitType=${t.limitType})`}function Kt(t,e){return e.isFoundDocument()&&function(t,e){const n=e.key.path;return null!==t.collectionGroup?e.key.hasCollectionId(t.collectionGroup)&&t.path.isPrefixOf(n):X.isDocumentKey(t.path)?t.path.isEqual(n):t.path.isImmediateParentOf(n)}(t,e)&&function(t,e){for(const n of t.explicitOrderBy)if(!n.field.isKeyField()&&null===e.data.field(n.field))return!1;return!0}(t,e)&&function(t,e){for(const n of t.filters)if(!n.matches(e))return!1;return!0}(t,e)&&function(t,e){return!(t.startAt&&!Nt(t.startAt,Bt(t),e))&&(!t.endAt||!Nt(t.endAt,Bt(t),e))}(t,e)}function Wt(t){return(e,n)=>{let r=!1;for(const i of Bt(t)){const t=Yt(i,e,n);if(0!==t)return t;r=r||i.field.isKeyField()}return 0}}function Yt(t,e,n){const r=t.field.isKeyField()?X.comparator(e.key,n.key):function(t,e,n){const r=e.data.field(t),i=n.data.field(t);return null!==r&&null!==i?et(r,i):g()}(t.field,e,n);switch(t.dir){case"asc":return r;case"desc":return-1*r;default:return g()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Qt(t,e){if(t.D){if(isNaN(e))return{doubleValue:"NaN"};if(e===1/0)return{doubleValue:"Infinity"};if(e===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Q(e)?"-0":e}}function Xt(t){return{integerValue:""+t}}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jt{constructor(){this._=void 0}}function Zt(t,e,n){return t instanceof ne?function(t,e){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:t.seconds,nanos:t.nanoseconds}}}};return e&&(n.fields.__previous_value__=e),{mapValue:n}}(n,e):t instanceof re?ie(t,e):t instanceof se?oe(t,e):function(t,e){const n=ee(t,e),r=ce(n)+ce(t.C);return it(n)&&it(t.C)?Xt(r):Qt(t.N,r)}(t,e)}function te(t,e,n){return t instanceof re?ie(t,e):t instanceof se?oe(t,e):n}function ee(t,e){return t instanceof ae?it(n=e)||function(t){return!!t&&"doubleValue"in t}(n)?e:{integerValue:0}:null;var n}class ne extends Jt{}class re extends Jt{constructor(t){super(),this.elements=t}}function ie(t,e){const n=ue(e);for(const e of t.elements)n.some(t=>Z(t,e))||n.push(e);return{arrayValue:{values:n}}}class se extends Jt{constructor(t){super(),this.elements=t}}function oe(t,e){let n=ue(e);for(const e of t.elements)n=n.filter(t=>!Z(t,e));return{arrayValue:{values:n}}}class ae extends Jt{constructor(t,e){super(),this.N=t,this.C=e}}function ce(t){return H(t.integerValue||t.doubleValue)}function ue(t){return st(t)&&t.arrayValue.values?t.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class le{constructor(t,e){this.version=t,this.transformResults=e}}class he{constructor(t,e){this.updateTime=t,this.exists=e}static none(){return new he}static exists(t){return new he(void 0,t)}static updateTime(t){return new he(t)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(t){return this.exists===t.exists&&(this.updateTime?!!t.updateTime&&this.updateTime.isEqual(t.updateTime):!t.updateTime)}}function fe(t,e){return void 0!==t.updateTime?e.isFoundDocument()&&e.version.isEqual(t.updateTime):void 0===t.exists||t.exists===e.isFoundDocument()}class de{}function pe(t,e,n){t instanceof be?function(t,e,n){const r=t.value.clone(),i=Te(t.fieldTransforms,e,n.transformResults);r.setAll(i),e.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(t,e,n):t instanceof we?function(t,e,n){if(!fe(t.precondition,e))return void e.convertToUnknownDocument(n.version);const r=Te(t.fieldTransforms,e,n.transformResults),i=e.data;i.setAll(Ee(t)),i.setAll(r),e.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(t,e,n):function(t,e,n){e.convertToNoDocument(n.version).setHasCommittedMutations()}(0,e,n)}function me(t,e,n){t instanceof be?function(t,e,n){if(!fe(t.precondition,e))return;const r=t.value.clone(),i=_e(t.fieldTransforms,n,e);r.setAll(i),e.convertToFoundDocument(ve(e),r).setHasLocalMutations()}(t,e,n):t instanceof we?function(t,e,n){if(!fe(t.precondition,e))return;const r=_e(t.fieldTransforms,n,e),i=e.data;i.setAll(Ee(t)),i.setAll(r),e.convertToFoundDocument(ve(e),i).setHasLocalMutations()}(t,e,n):function(t,e){fe(t.precondition,e)&&e.convertToNoDocument(x.min())}(t,e)}function ge(t,e){let n=null;for(const r of t.fieldTransforms){const t=e.data.field(r.field),i=ee(r.transform,t||null);null!=i&&(null==n&&(n=lt.empty()),n.set(r.field,i))}return n||null}function ye(t,e){return t.type===e.type&&!!t.key.isEqual(e.key)&&!!t.precondition.isEqual(e.precondition)&&!!function(t,e){return void 0===t&&void 0===e||!(!t||!e)&&N(t,e,(t,e)=>function(t,e){return t.field.isEqual(e.field)&&function(t,e){return t instanceof re&&e instanceof re||t instanceof se&&e instanceof se?N(t.elements,e.elements,Z):t instanceof ae&&e instanceof ae?Z(t.C,e.C):t instanceof ne&&e instanceof ne}(t.transform,e.transform)}(t,e))}(t.fieldTransforms,e.fieldTransforms)&&(0===t.type?t.value.isEqual(e.value):1!==t.type||t.data.isEqual(e.data)&&t.fieldMask.isEqual(e.fieldMask))}function ve(t){return t.isFoundDocument()?t.version:x.min()}class be extends de{constructor(t,e,n,r=[]){super(),this.key=t,this.value=e,this.precondition=n,this.fieldTransforms=r,this.type=0}}class we extends de{constructor(t,e,n,r,i=[]){super(),this.key=t,this.data=e,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function Ee(t){const e=new Map;return t.fieldMask.fields.forEach(n=>{if(!n.isEmpty()){const r=t.data.field(n);e.set(n,r)}}),e}function Te(t,e,n){const r=new Map;y(t.length===n.length);for(let i=0;i<n.length;i++){const s=t[i],o=s.transform,a=e.data.field(s.field);r.set(s.field,te(o,a,n[i]))}return r}function _e(t,e,n){const r=new Map;for(const i of t){const t=i.transform,s=n.data.field(i.field);r.set(i.field,Zt(t,s,e))}return r}class Se extends de{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=2,this.fieldTransforms=[]}}class Ie extends de{constructor(t,e){super(),this.key=t,this.precondition=e,this.type=3,this.fieldTransforms=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ae{constructor(t){this.count=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var Oe,Ce;function ke(t){switch(t){case b.OK:return g();case b.CANCELLED:case b.UNKNOWN:case b.DEADLINE_EXCEEDED:case b.RESOURCE_EXHAUSTED:case b.INTERNAL:case b.UNAVAILABLE:case b.UNAUTHENTICATED:return!1;case b.INVALID_ARGUMENT:case b.NOT_FOUND:case b.ALREADY_EXISTS:case b.PERMISSION_DENIED:case b.FAILED_PRECONDITION:case b.ABORTED:case b.OUT_OF_RANGE:case b.UNIMPLEMENTED:case b.DATA_LOSS:return!0;default:return g()}}function Re(t){if(void 0===t)return d("GRPC error has no .code"),b.UNKNOWN;switch(t){case Oe.OK:return b.OK;case Oe.CANCELLED:return b.CANCELLED;case Oe.UNKNOWN:return b.UNKNOWN;case Oe.DEADLINE_EXCEEDED:return b.DEADLINE_EXCEEDED;case Oe.RESOURCE_EXHAUSTED:return b.RESOURCE_EXHAUSTED;case Oe.INTERNAL:return b.INTERNAL;case Oe.UNAVAILABLE:return b.UNAVAILABLE;case Oe.UNAUTHENTICATED:return b.UNAUTHENTICATED;case Oe.INVALID_ARGUMENT:return b.INVALID_ARGUMENT;case Oe.NOT_FOUND:return b.NOT_FOUND;case Oe.ALREADY_EXISTS:return b.ALREADY_EXISTS;case Oe.PERMISSION_DENIED:return b.PERMISSION_DENIED;case Oe.FAILED_PRECONDITION:return b.FAILED_PRECONDITION;case Oe.ABORTED:return b.ABORTED;case Oe.OUT_OF_RANGE:return b.OUT_OF_RANGE;case Oe.UNIMPLEMENTED:return b.UNIMPLEMENTED;case Oe.DATA_LOSS:return b.DATA_LOSS;default:return g()}}(Ce=Oe||(Oe={}))[Ce.OK=0]="OK",Ce[Ce.CANCELLED=1]="CANCELLED",Ce[Ce.UNKNOWN=2]="UNKNOWN",Ce[Ce.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Ce[Ce.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Ce[Ce.NOT_FOUND=5]="NOT_FOUND",Ce[Ce.ALREADY_EXISTS=6]="ALREADY_EXISTS",Ce[Ce.PERMISSION_DENIED=7]="PERMISSION_DENIED",Ce[Ce.UNAUTHENTICATED=16]="UNAUTHENTICATED",Ce[Ce.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Ce[Ce.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Ce[Ce.ABORTED=10]="ABORTED",Ce[Ce.OUT_OF_RANGE=11]="OUT_OF_RANGE",Ce[Ce.UNIMPLEMENTED=12]="UNIMPLEMENTED",Ce[Ce.INTERNAL=13]="INTERNAL",Ce[Ce.UNAVAILABLE=14]="UNAVAILABLE",Ce[Ce.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ne{constructor(t,e){this.comparator=t,this.root=e||xe.EMPTY}insert(t,e){return new Ne(this.comparator,this.root.insert(t,e,this.comparator).copy(null,null,xe.BLACK,null,null))}remove(t){return new Ne(this.comparator,this.root.remove(t,this.comparator).copy(null,null,xe.BLACK,null,null))}get(t){let e=this.root;for(;!e.isEmpty();){const n=this.comparator(t,e.key);if(0===n)return e.value;n<0?e=e.left:n>0&&(e=e.right)}return null}indexOf(t){let e=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(t,n.key);if(0===r)return e+n.left.size;r<0?n=n.left:(e+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(t){return this.root.inorderTraversal(t)}forEach(t){this.inorderTraversal((e,n)=>(t(e,n),!1))}toString(){const t=[];return this.inorderTraversal((e,n)=>(t.push(`${e}:${n}`),!1)),`{${t.join(", ")}}`}reverseTraversal(t){return this.root.reverseTraversal(t)}getIterator(){return new De(this.root,null,this.comparator,!1)}getIteratorFrom(t){return new De(this.root,t,this.comparator,!1)}getReverseIterator(){return new De(this.root,null,this.comparator,!0)}getReverseIteratorFrom(t){return new De(this.root,t,this.comparator,!0)}}class De{constructor(t,e,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!t.isEmpty();)if(i=e?n(t.key,e):1,r&&(i*=-1),i<0)t=this.isReverse?t.left:t.right;else{if(0===i){this.nodeStack.push(t);break}this.nodeStack.push(t),t=this.isReverse?t.right:t.left}}getNext(){let t=this.nodeStack.pop();const e={key:t.key,value:t.value};if(this.isReverse)for(t=t.left;!t.isEmpty();)this.nodeStack.push(t),t=t.right;else for(t=t.right;!t.isEmpty();)this.nodeStack.push(t),t=t.left;return e}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const t=this.nodeStack[this.nodeStack.length-1];return{key:t.key,value:t.value}}}class xe{constructor(t,e,n,r,i){this.key=t,this.value=e,this.color=null!=n?n:xe.RED,this.left=null!=r?r:xe.EMPTY,this.right=null!=i?i:xe.EMPTY,this.size=this.left.size+1+this.right.size}copy(t,e,n,r,i){return new xe(null!=t?t:this.key,null!=e?e:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(t){return this.left.inorderTraversal(t)||t(this.key,this.value)||this.right.inorderTraversal(t)}reverseTraversal(t){return this.right.reverseTraversal(t)||t(this.key,this.value)||this.left.reverseTraversal(t)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(t,e,n){let r=this;const i=n(t,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(t,e,n),null):0===i?r.copy(null,e,null,null,null):r.copy(null,null,null,null,r.right.insert(t,e,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return xe.EMPTY;let t=this;return t.left.isRed()||t.left.left.isRed()||(t=t.moveRedLeft()),t=t.copy(null,null,null,t.left.removeMin(),null),t.fixUp()}remove(t,e){let n,r=this;if(e(t,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(t,e),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===e(t,r.key)){if(r.right.isEmpty())return xe.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(t,e))}return r.fixUp()}isRed(){return this.color}fixUp(){let t=this;return t.right.isRed()&&!t.left.isRed()&&(t=t.rotateLeft()),t.left.isRed()&&t.left.left.isRed()&&(t=t.rotateRight()),t.left.isRed()&&t.right.isRed()&&(t=t.colorFlip()),t}moveRedLeft(){let t=this.colorFlip();return t.right.left.isRed()&&(t=t.copy(null,null,null,null,t.right.rotateRight()),t=t.rotateLeft(),t=t.colorFlip()),t}moveRedRight(){let t=this.colorFlip();return t.left.left.isRed()&&(t=t.rotateRight(),t=t.colorFlip()),t}rotateLeft(){const t=this.copy(null,null,xe.RED,null,this.right.left);return this.right.copy(null,null,this.color,t,null)}rotateRight(){const t=this.copy(null,null,xe.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,t)}colorFlip(){const t=this.left.copy(null,null,!this.left.color,null,null),e=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,t,e)}checkMaxDepth(){const t=this.check();return Math.pow(2,t)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw g();if(this.right.isRed())throw g();const t=this.left.check();if(t!==this.right.check())throw g();return t+(this.isRed()?0:1)}}xe.EMPTY=null,xe.RED=!0,xe.BLACK=!1,xe.EMPTY=new class{constructor(){this.size=0}get key(){throw g()}get value(){throw g()}get color(){throw g()}get left(){throw g()}get right(){throw g()}copy(t,e,n,r,i){return this}insert(t,e,n){return new xe(t,e)}remove(t,e){return this}isEmpty(){return!0}inorderTraversal(t){return!1}reverseTraversal(t){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pe{constructor(t){this.comparator=t,this.data=new Ne(this.comparator)}has(t){return null!==this.data.get(t)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(t){return this.data.indexOf(t)}forEach(t){this.data.inorderTraversal((e,n)=>(t(e),!1))}forEachInRange(t,e){const n=this.data.getIteratorFrom(t[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,t[1])>=0)return;e(r.key)}}forEachWhile(t,e){let n;for(n=void 0!==e?this.data.getIteratorFrom(e):this.data.getIterator();n.hasNext();)if(!t(n.getNext().key))return}firstAfterOrEqual(t){const e=this.data.getIteratorFrom(t);return e.hasNext()?e.getNext().key:null}getIterator(){return new Le(this.data.getIterator())}getIteratorFrom(t){return new Le(this.data.getIteratorFrom(t))}add(t){return this.copy(this.data.remove(t).insert(t,!0))}delete(t){return this.has(t)?this.copy(this.data.remove(t)):this}isEmpty(){return this.data.isEmpty()}unionWith(t){let e=this;return e.size<t.size&&(e=t,t=this),t.forEach(t=>{e=e.add(t)}),e}isEqual(t){if(!(t instanceof Pe))return!1;if(this.size!==t.size)return!1;const e=this.data.getIterator(),n=t.data.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(0!==this.comparator(t,r))return!1}return!0}toArray(){const t=[];return this.forEach(e=>{t.push(e)}),t}toString(){const t=[];return this.forEach(e=>t.push(e)),"SortedSet("+t.toString()+")"}copy(t){const e=new Pe(this.comparator);return e.data=t,e}}class Le{constructor(t){this.iter=t}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const je=new Ne(X.comparator);function Me(){return je}const Fe=new Ne(X.comparator);function Ue(){return Fe}const Ve=new Ne(X.comparator);function Be(){return Ve}const ze=new Pe(X.comparator);function qe(...t){let e=ze;for(const n of t)e=e.add(n);return e}const $e=new Pe(R);function He(){return $e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge{constructor(t,e,n,r,i){this.snapshotVersion=t,this.targetChanges=e,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(t,e){const n=new Map;return n.set(t,Ke.createSynthesizedTargetChangeForCurrentChange(t,e)),new Ge(x.min(),n,He(),Me(),qe())}}class Ke{constructor(t,e,n,r,i){this.resumeToken=t,this.current=e,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(t,e){return new Ke(z.EMPTY_BYTE_STRING,e,qe(),qe(),qe())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class We{constructor(t,e,n,r){this.k=t,this.removedTargetIds=e,this.key=n,this.$=r}}class Ye{constructor(t,e){this.targetId=t,this.O=e}}class Qe{constructor(t,e,n=z.EMPTY_BYTE_STRING,r=null){this.state=t,this.targetIds=e,this.resumeToken=n,this.cause=r}}class Xe{constructor(){this.F=0,this.M=tn(),this.L=z.EMPTY_BYTE_STRING,this.B=!1,this.U=!0}get current(){return this.B}get resumeToken(){return this.L}get q(){return 0!==this.F}get K(){return this.U}j(t){t.approximateByteSize()>0&&(this.U=!0,this.L=t)}W(){let t=qe(),e=qe(),n=qe();return this.M.forEach((r,i)=>{switch(i){case 0:t=t.add(r);break;case 2:e=e.add(r);break;case 1:n=n.add(r);break;default:g()}}),new Ke(this.L,this.B,t,e,n)}G(){this.U=!1,this.M=tn()}H(t,e){this.U=!0,this.M=this.M.insert(t,e)}J(t){this.U=!0,this.M=this.M.remove(t)}Y(){this.F+=1}X(){this.F-=1}Z(){this.U=!0,this.B=!0}}class Je{constructor(t){this.tt=t,this.et=new Map,this.nt=Me(),this.st=Ze(),this.it=new Pe(R)}rt(t){for(const e of t.k)t.$&&t.$.isFoundDocument()?this.ot(e,t.$):this.at(e,t.key,t.$);for(const e of t.removedTargetIds)this.at(e,t.key,t.$)}ct(t){this.forEachTarget(t,e=>{const n=this.ut(e);switch(t.state){case 0:this.ht(e)&&n.j(t.resumeToken);break;case 1:n.X(),n.q||n.G(),n.j(t.resumeToken);break;case 2:n.X(),n.q||this.removeTarget(e);break;case 3:this.ht(e)&&(n.Z(),n.j(t.resumeToken));break;case 4:this.ht(e)&&(this.lt(e),n.j(t.resumeToken));break;default:g()}})}forEachTarget(t,e){t.targetIds.length>0?t.targetIds.forEach(e):this.et.forEach((t,n)=>{this.ht(n)&&e(n)})}ft(t){const e=t.targetId,n=t.O.count,r=this.dt(e);if(r){const t=r.target;if(yt(t))if(0===n){const n=new X(t.path);this.at(e,n,ft.newNoDocument(n,x.min()))}else y(1===n);else this.wt(e)!==n&&(this.lt(e),this.it=this.it.add(e))}}_t(t){const e=new Map;this.et.forEach((n,r)=>{const i=this.dt(r);if(i){if(n.current&&yt(i.target)){const e=new X(i.target.path);null!==this.nt.get(e)||this.gt(r,e)||this.at(r,e,ft.newNoDocument(e,t))}n.K&&(e.set(r,n.W()),n.G())}});let n=qe();this.st.forEach((t,e)=>{let r=!0;e.forEachWhile(t=>{const e=this.dt(t);return!e||2===e.purpose||(r=!1,!1)}),r&&(n=n.add(t))});const r=new Ge(t,e,this.it,this.nt,n);return this.nt=Me(),this.st=Ze(),this.it=new Pe(R),r}ot(t,e){if(!this.ht(t))return;const n=this.gt(t,e.key)?2:0;this.ut(t).H(e.key,n),this.nt=this.nt.insert(e.key,e),this.st=this.st.insert(e.key,this.yt(e.key).add(t))}at(t,e,n){if(!this.ht(t))return;const r=this.ut(t);this.gt(t,e)?r.H(e,1):r.J(e),this.st=this.st.insert(e,this.yt(e).delete(t)),n&&(this.nt=this.nt.insert(e,n))}removeTarget(t){this.et.delete(t)}wt(t){const e=this.ut(t).W();return this.tt.getRemoteKeysForTarget(t).size+e.addedDocuments.size-e.removedDocuments.size}Y(t){this.ut(t).Y()}ut(t){let e=this.et.get(t);return e||(e=new Xe,this.et.set(t,e)),e}yt(t){let e=this.st.get(t);return e||(e=new Pe(R),this.st=this.st.insert(t,e)),e}ht(t){const e=null!==this.dt(t);return e||f("WatchChangeAggregator","Detected inactive target",t),e}dt(t){const e=this.et.get(t);return e&&e.q?null:this.tt.Et(t)}lt(t){this.et.set(t,new Xe),this.tt.getRemoteKeysForTarget(t).forEach(e=>{this.at(t,e,null)})}gt(t,e){return this.tt.getRemoteKeysForTarget(t).has(e)}}function Ze(){return new Ne(X.comparator)}function tn(){return new Ne(X.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const en={asc:"ASCENDING",desc:"DESCENDING"},nn={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};class rn{constructor(t,e){this.databaseId=t,this.D=e}}function sn(t,e){return t.D?`${new Date(1e3*e.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+e.nanoseconds).slice(-9)}Z`:{seconds:""+e.seconds,nanos:e.nanoseconds}}function on(t,e){return t.D?e.toBase64():e.toUint8Array()}function an(t,e){return sn(t,e.toTimestamp())}function cn(t){return y(!!t),x.fromTimestamp(function(t){const e=$(t);return new D(e.seconds,e.nanos)}(t))}function un(t,e){return function(t){return new F(["projects",t.projectId,"databases",t.database])}(t).child("documents").child(e).canonicalString()}function ln(t){const e=F.fromString(t);return y(Nn(e)),e}function hn(t,e){return un(t.databaseId,e.path)}function fn(t,e){const n=ln(e);if(n.get(1)!==t.databaseId.projectId)throw new w(b.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+t.databaseId.projectId);if(n.get(3)!==t.databaseId.database)throw new w(b.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+t.databaseId.database);return new X(gn(n))}function dn(t,e){return un(t.databaseId,e)}function pn(t){const e=ln(t);return 4===e.length?F.emptyPath():gn(e)}function mn(t){return new F(["projects",t.databaseId.projectId,"databases",t.databaseId.database]).canonicalString()}function gn(t){return y(t.length>4&&"documents"===t.get(4)),t.popFirst(5)}function yn(t,e,n){return{name:hn(t,e),fields:n.value.mapValue.fields}}function vn(t,e){let n;if(e instanceof be)n={update:yn(t,e.key,e.value)};else if(e instanceof Se)n={delete:hn(t,e.key)};else if(e instanceof we)n={update:yn(t,e.key,e.data),updateMask:Rn(e.fieldMask)};else{if(!(e instanceof Ie))return g();n={verify:hn(t,e.key)}}return e.fieldTransforms.length>0&&(n.updateTransforms=e.fieldTransforms.map(t=>function(t,e){const n=e.transform;if(n instanceof ne)return{fieldPath:e.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof re)return{fieldPath:e.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof se)return{fieldPath:e.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof ae)return{fieldPath:e.field.canonicalString(),increment:n.C};throw g()}(0,t))),e.precondition.isNone||(n.currentDocument=function(t,e){return void 0!==e.updateTime?{updateTime:an(t,e.updateTime)}:void 0!==e.exists?{exists:e.exists}:g()}(t,e.precondition)),n}function bn(t,e){return{documents:[dn(t,e.path)]}}function wn(t,e){const n={structuredQuery:{}},r=e.path;null!==e.collectionGroup?(n.parent=dn(t,r),n.structuredQuery.from=[{collectionId:e.collectionGroup,allDescendants:!0}]):(n.parent=dn(t,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(t){if(0===t.length)return;const e=t.map(t=>function(t){if("=="===t.op){if(at(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NAN"}};if(ot(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NULL"}}}else if("!="===t.op){if(at(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NOT_NAN"}};if(ot(t.value))return{unaryFilter:{field:An(t.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:An(t.field),op:In(t.op),value:t.value}}}(t));return 1===e.length?e[0]:{compositeFilter:{op:"AND",filters:e}}}(e.filters);i&&(n.structuredQuery.where=i);const s=function(t){if(0!==t.length)return t.map(t=>function(t){return{field:An(t.field),direction:Sn(t.dir)}}(t))}(e.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(t,e){return t.D||Y(e)?e:{value:e}}(t,e.limit);return null!==o&&(n.structuredQuery.limit=o),e.startAt&&(n.structuredQuery.startAt=Tn(e.startAt)),e.endAt&&(n.structuredQuery.endAt=Tn(e.endAt)),n}function En(t){let e=pn(t.parent);const n=t.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){y(1===r);const t=n.from[0];t.allDescendants?i=t.collectionId:e=e.child(t.collectionId)}let s=[];n.where&&(s=function t(e){return e?void 0!==e.unaryFilter?[kn(e)]:void 0!==e.fieldFilter?[Cn(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map(e=>t(e)).reduce((t,e)=>t.concat(e)):g():[]}(n.where));let o=[];n.orderBy&&(o=n.orderBy.map(t=>function(t){return new kt(On(t.field),function(t){switch(t){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(t.direction))}(t)));let a=null;n.limit&&(a=function(t){let e;return e="object"==typeof t?t.value:t,Y(e)?null:e}(n.limit));let c=null;n.startAt&&(c=_n(n.startAt));let u=null;return n.endAt&&(u=_n(n.endAt)),Pt(e,i,o,s,a,"F",c,u)}function Tn(t){return{before:t.before,values:t.position}}function _n(t){const e=!!t.before,n=t.values||[];return new Ot(n,e)}function Sn(t){return en[t]}function In(t){return nn[t]}function An(t){return{fieldPath:t.canonicalString()}}function On(t){return V.fromServerFormat(t.fieldPath)}function Cn(t){return vt.create(On(t.fieldFilter.field),function(t){switch(t){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";case"OPERATOR_UNSPECIFIED":default:return g()}}(t.fieldFilter.op),t.fieldFilter.value)}function kn(t){switch(t.unaryFilter.op){case"IS_NAN":On(t.unaryFilter.field);return vt.create(r.d,"==",{doubleValue:NaN});case"IS_NULL":On(t.unaryFilter.field);return vt.create(r.c,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":On(t.unaryFilter.field);return vt.create(r.g,"!=",{doubleValue:NaN});case"IS_NOT_NULL":On(t.unaryFilter.field);return vt.create(r.a,"!=",{nullValue:"NULL_VALUE"});case"OPERATOR_UNSPECIFIED":default:return g()}}function Rn(t){const e=[];return t.fields.forEach(t=>e.push(t.canonicalString())),{fieldPaths:e}}function Nn(t){return t.length>=4&&"projects"===t.get(0)&&"databases"===t.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Dn(t){let e="";for(let n=0;n<t.length;n++)e.length>0&&(e=Pn(e)),e=xn(t.get(n),e);return Pn(e)}function xn(t,e){let n=e;const r=t.length;for(let e=0;e<r;e++){const r=t.charAt(e);switch(r){case"\0":n+="";break;case"":n+="";break;default:n+=r}}return n}function Pn(t){return t+""}class Ln{constructor(t,e,n){this.ownerId=t,this.allowTabSynchronization=e,this.leaseTimestampMs=n}}Ln.store="owner",Ln.key="owner";class jn{constructor(t,e,n){this.userId=t,this.lastAcknowledgedBatchId=e,this.lastStreamToken=n}}jn.store="mutationQueues",jn.keyPath="userId";class Mn{constructor(t,e,n,r,i){this.userId=t,this.batchId=e,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Mn.store="mutations",Mn.keyPath="batchId",Mn.userMutationsIndex="userMutationsIndex",Mn.userMutationsKeyPath=["userId","batchId"];class Fn{constructor(){}static prefixForUser(t){return[t]}static prefixForPath(t,e){return[t,Dn(e)]}static key(t,e,n){return[t,Dn(e),n]}}Fn.store="documentMutations",Fn.PLACEHOLDER=new Fn;class Un{constructor(t,e,n,r,i,s){this.unknownDocument=t,this.noDocument=e,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Un.store="remoteDocuments",Un.readTimeIndex="readTimeIndex",Un.readTimeIndexPath="readTime",Un.collectionReadTimeIndex="collectionReadTimeIndex",Un.collectionReadTimeIndexPath=["parentPath","readTime"];class Vn{constructor(t){this.byteSize=t}}Vn.store="remoteDocumentGlobal",Vn.key="remoteDocumentGlobalKey";class Bn{constructor(t,e,n,r,i,s,o){this.targetId=t,this.canonicalId=e,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Bn.store="targets",Bn.keyPath="targetId",Bn.queryTargetsIndexName="queryTargetsIndex",Bn.queryTargetsKeyPath=["canonicalId","targetId"];class zn{constructor(t,e,n){this.targetId=t,this.path=e,this.sequenceNumber=n}}zn.store="targetDocuments",zn.keyPath=["targetId","path"],zn.documentTargetsIndex="documentTargetsIndex",zn.documentTargetsKeyPath=["path","targetId"];class qn{constructor(t,e,n,r){this.highestTargetId=t,this.highestListenSequenceNumber=e,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}qn.key="targetGlobalKey",qn.store="targetGlobal";class $n{constructor(t,e){this.collectionId=t,this.parent=e}}$n.store="collectionParents",$n.keyPath=["collectionId","parent"];class Hn{constructor(t,e,n,r){this.clientId=t,this.updateTimeMs=e,this.networkEnabled=n,this.inForeground=r}}Hn.store="clientMetadata",Hn.keyPath="clientId";class Gn{constructor(t,e,n){this.bundleId=t,this.createTime=e,this.version=n}}Gn.store="bundles",Gn.keyPath="bundleId";class Kn{constructor(t,e,n){this.name=t,this.readTime=e,this.bundledQuery=n}}Kn.store="namedQueries",Kn.keyPath="name";jn.store,Mn.store,Fn.store,Un.store,Bn.store,Ln.store,qn.store,zn.store,Hn.store,Vn.store,$n.store,Gn.store,Kn.store;const Wn="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Yn{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(t){this.onCommittedListeners.push(t)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach(t=>t())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Qn{constructor(t){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,t(t=>{this.isDone=!0,this.result=t,this.nextCallback&&this.nextCallback(t)},t=>{this.isDone=!0,this.error=t,this.catchCallback&&this.catchCallback(t)})}catch(t){return this.next(void 0,t)}next(t,e){return this.callbackAttached&&g(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(e,this.error):this.wrapSuccess(t,this.result):new Qn((n,r)=>{this.nextCallback=e=>{this.wrapSuccess(t,e).next(n,r)},this.catchCallback=t=>{this.wrapFailure(e,t).next(n,r)}})}toPromise(){return new Promise((t,e)=>{this.next(t,e)})}wrapUserFunction(t){try{const e=t();return e instanceof Qn?e:Qn.resolve(e)}catch(t){return Qn.reject(t)}}wrapSuccess(t,e){return t?this.wrapUserFunction(()=>t(e)):Qn.resolve(e)}wrapFailure(t,e){return t?this.wrapUserFunction(()=>t(e)):Qn.reject(e)}static resolve(t){return new Qn((e,n)=>{e(t)})}static reject(t){return new Qn((e,n)=>{n(t)})}static waitFor(t){return new Qn((e,n)=>{let r=0,i=0,s=!1;t.forEach(t=>{++r,t.next(()=>{++i,s&&i===r&&e()},t=>n(t))}),s=!0,i===r&&e()})}static or(t){let e=Qn.resolve(!1);for(const n of t)e=e.next(t=>t?Qn.resolve(t):n());return e}static forEach(t,e){const n=[];return t.forEach((t,r)=>{n.push(e.call(this,t,r))}),this.waitFor(n)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Xn(t){return"IndexedDbTransactionError"===t.name}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Jn{constructor(t,e,n,r){this.batchId=t,this.localWriteTime=e,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(t,e){const n=e.mutationResults;for(let e=0;e<this.mutations.length;e++){const r=this.mutations[e];r.key.isEqual(t.key)&&pe(r,t,n[e])}}applyToLocalView(t){for(const e of this.baseMutations)e.key.isEqual(t.key)&&me(e,t,this.localWriteTime);for(const e of this.mutations)e.key.isEqual(t.key)&&me(e,t,this.localWriteTime)}applyToLocalDocumentSet(t){this.mutations.forEach(e=>{const n=t.get(e.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(x.min())})}keys(){return this.mutations.reduce((t,e)=>t.add(e.key),qe())}isEqual(t){return this.batchId===t.batchId&&N(this.mutations,t.mutations,(t,e)=>ye(t,e))&&N(this.baseMutations,t.baseMutations,(t,e)=>ye(t,e))}}class Zn{constructor(t,e,n,r){this.batch=t,this.commitVersion=e,this.mutationResults=n,this.docVersions=r}static from(t,e,n){y(t.mutations.length===n.length);let r=Be();const i=t.mutations;for(let t=0;t<i.length;t++)r=r.insert(i[t].key,n[t].version);return new Zn(t,e,n,r)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tr{constructor(t,e,n,r,i=x.min(),s=x.min(),o=z.EMPTY_BYTE_STRING){this.target=t,this.targetId=e,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(t){return new tr(this.target,this.targetId,this.purpose,t,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(t,e){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,e,this.lastLimboFreeSnapshotVersion,t)}withLastLimboFreeSnapshotVersion(t){return new tr(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,t,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class er{constructor(t){this.Wt=t}}function nr(t){const e=En({parent:t.parent,structuredQuery:t.structuredQuery});return"LAST"===t.limitType?qt(e,e.limit,"L"):e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rr{constructor(){this.Gt=new ir}addToCollectionParentIndex(t,e){return this.Gt.add(e),Qn.resolve()}getCollectionParents(t,e){return Qn.resolve(this.Gt.getEntries(e))}}class ir{constructor(){this.index={}}add(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e]||new Pe(F.comparator),i=!r.has(n);return this.index[e]=r.add(n),i}has(t){const e=t.lastSegment(),n=t.popLast(),r=this.index[e];return r&&r.has(n)}getEntries(t){return(this.index[t]||new Pe(F.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sr{constructor(t,e,n){this.cacheSizeCollectionThreshold=t,this.percentileToCollect=e,this.maximumSequenceNumbersToCollect=n}static withCacheSize(t){return new sr(t,sr.DEFAULT_COLLECTION_PERCENTILE,sr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */sr.DEFAULT_COLLECTION_PERCENTILE=10,sr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,sr.DEFAULT=new sr(41943040,sr.DEFAULT_COLLECTION_PERCENTILE,sr.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),sr.DISABLED=new sr(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class or{constructor(t){this.ne=t}next(){return this.ne+=2,this.ne}static se(){return new or(0)}static ie(){return new or(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function ar(t){if(t.code!==b.FAILED_PRECONDITION||t.message!==Wn)throw t;f("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cr{constructor(t,e){this.mapKeyFn=t,this.equalsFn=e,this.inner={}}get(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0!==n)for(const[e,r]of n)if(this.equalsFn(e,t))return r}has(t){return void 0!==this.get(t)}set(t,e){const n=this.mapKeyFn(t),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],t))return void(r[n]=[t,e]);r.push([t,e])}else this.inner[n]=[[t,e]]}delete(t){const e=this.mapKeyFn(t),n=this.inner[e];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],t))return 1===n.length?delete this.inner[e]:n.splice(r,1),!0;return!1}forEach(t){L(this.inner,(e,n)=>{for(const[e,r]of n)t(e,r)})}isEmpty(){return j(this.inner)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ur{constructor(){this.changes=new cr(t=>t.toString(),(t,e)=>t.isEqual(e)),this.changesApplied=!1}getReadTime(t){const e=this.changes.get(t);return e?e.readTime:x.min()}addEntry(t,e){this.assertNotApplied(),this.changes.set(t.key,{document:t,readTime:e})}removeEntry(t,e=null){this.assertNotApplied(),this.changes.set(t,{document:ft.newInvalidDocument(t),readTime:e})}getEntry(t,e){this.assertNotApplied();const n=this.changes.get(e);return void 0!==n?Qn.resolve(n.document):this.getFromCache(t,e)}getEntries(t,e){return this.getAllFromCache(t,e)}apply(t){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(t)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class lr{constructor(t,e,n){this.He=t,this.In=e,this.Ht=n}An(t,e){return this.In.getAllMutationBatchesAffectingDocumentKey(t,e).next(n=>this.Rn(t,e,n))}Rn(t,e,n){return this.He.getEntry(t,e).next(t=>{for(const e of n)e.applyToLocalView(t);return t})}bn(t,e){t.forEach((t,n)=>{for(const t of e)t.applyToLocalView(n)})}Pn(t,e){return this.He.getEntries(t,e).next(e=>this.vn(t,e).next(()=>e))}vn(t,e){return this.In.getAllMutationBatchesAffectingDocumentKeys(t,e).next(t=>this.bn(e,t))}getDocumentsMatchingQuery(t,e,n){return function(t){return X.isDocumentKey(t.path)&&null===t.collectionGroup&&0===t.filters.length}(e)?this.Vn(t,e.path):Vt(e)?this.Sn(t,e,n):this.Dn(t,e,n)}Vn(t,e){return this.An(t,new X(e)).next(t=>{let e=Ue();return t.isFoundDocument()&&(e=e.insert(t.key,t)),e})}Sn(t,e,n){const r=e.collectionGroup;let i=Ue();return this.Ht.getCollectionParents(t,r).next(s=>Qn.forEach(s,s=>{const o=function(t,e){return new xt(e,null,t.explicitOrderBy.slice(),t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(e,s.child(r));return this.Dn(t,o,n).next(t=>{t.forEach((t,e)=>{i=i.insert(t,e)})})}).next(()=>i))}Dn(t,e,n){let r,i;return this.He.getDocumentsMatchingQuery(t,e,n).next(n=>(r=n,this.In.getAllMutationBatchesAffectingQuery(t,e))).next(e=>(i=e,this.Cn(t,i,r).next(t=>{r=t;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=ft.newInvalidDocument(n),r=r.insert(n,i)),me(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))).next(()=>(r.forEach((t,n)=>{Kt(e,n)||(r=r.remove(t))}),r))}Cn(t,e,n){let r=qe();for(const t of e)for(const e of t.mutations)e instanceof we&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.He.getEntries(t,r).next(t=>(t.forEach((t,e)=>{e.isFoundDocument()&&(i=i.insert(t,e))}),i))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class hr{constructor(t,e,n,r){this.targetId=t,this.fromCache=e,this.Nn=n,this.xn=r}static kn(t,e){let n=qe(),r=qe();for(const t of e.docChanges)switch(t.type){case 0:n=n.add(t.doc.key);break;case 1:r=r.add(t.doc.key)}return new hr(t,e.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fr{$n(t){this.On=t}getDocumentsMatchingQuery(t,e,n,r){return function(t){return 0===t.filters.length&&null===t.limit&&null==t.startAt&&null==t.endAt&&(0===t.explicitOrderBy.length||1===t.explicitOrderBy.length&&t.explicitOrderBy[0].field.isKeyField())}(e)||n.isEqual(x.min())?this.Fn(t,e):this.On.Pn(t,r).next(i=>{const o=this.Mn(e,i);return(jt(e)||Mt(e))&&this.Ln(e.limitType,o,r,n)?this.Fn(t,e):(h()<=s.a.DEBUG&&f("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Gt(e)),this.On.getDocumentsMatchingQuery(t,e,n).next(t=>(o.forEach(e=>{t=t.insert(e.key,e)}),t)))})}Mn(t,e){let n=new Pe(Wt(t));return e.forEach((e,r)=>{Kt(t,r)&&(n=n.add(r))}),n}Ln(t,e,n,r){if(n.size!==e.size)return!0;const i="F"===t?e.last():e.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Fn(t,e){return h()<=s.a.DEBUG&&f("QueryEngine","Using full collection scan to execute query:",Gt(e)),this.On.getDocumentsMatchingQuery(t,e,x.min())}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dr{constructor(t,e,n,r){this.persistence=t,this.Bn=e,this.N=r,this.Un=new Ne(R),this.qn=new cr(t=>mt(t),gt),this.Kn=x.min(),this.In=t.getMutationQueue(n),this.jn=t.getRemoteDocumentCache(),this.ze=t.getTargetCache(),this.Qn=new lr(this.jn,this.In,this.persistence.getIndexManager()),this.Je=t.getBundleCache(),this.Bn.$n(this.Qn)}collectGarbage(t){return this.persistence.runTransaction("Collect garbage","readwrite-primary",e=>t.collect(e,this.Un))}}function pr(t,e,n,r){return new dr(t,e,n,r)}async function mr(t,e){const n=v(t);let r=n.In,i=n.Qn;const s=await n.persistence.runTransaction("Handle user change","readonly",t=>{let s;return n.In.getAllMutationBatches(t).next(o=>(s=o,r=n.persistence.getMutationQueue(e),i=new lr(n.jn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(t))).next(e=>{const n=[],r=[];let o=qe();for(const t of s){n.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}for(const t of e){r.push(t.batchId);for(const e of t.mutations)o=o.add(e.key)}return i.Pn(t,o).next(t=>({Wn:t,removedBatchIds:n,addedBatchIds:r}))})});return n.In=r,n.Qn=i,n.Bn.$n(n.Qn),s}function gr(t){const e=v(t);return e.persistence.runTransaction("Get last remote snapshot version","readonly",t=>e.ze.getLastRemoteSnapshotVersion(t))}function yr(t,e,n,r,i){let s=qe();return n.forEach(t=>s=s.add(t)),e.getEntries(t,s).next(t=>{let s=Me();return n.forEach((n,o)=>{const a=t.get(n),c=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(x.min())?(e.removeEntry(n,c),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(e.addEntry(o,c),s=s.insert(n,o)):f("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)}),s})}function vr(t,e){const n=v(t);return n.persistence.runTransaction("Get next mutation batch","readonly",t=>(void 0===e&&(e=-1),n.In.getNextMutationBatchAfterBatchId(t,e)))}function br(t,e){const n=v(t);return n.persistence.runTransaction("Allocate target","readwrite",t=>{let r;return n.ze.getTargetData(t,e).next(i=>i?(r=i,Qn.resolve(r)):n.ze.allocateTargetId(t).next(i=>(r=new tr(e,i,0,t.currentSequenceNumber),n.ze.addTargetData(t,r).next(()=>r))))}).then(t=>{const r=n.Un.get(t.targetId);return(null===r||t.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.Un=n.Un.insert(t.targetId,t),n.qn.set(e,t.targetId)),t})}async function wr(t,e,n){const r=v(t),i=r.Un.get(e),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,t=>r.persistence.referenceDelegate.removeTarget(t,i))}catch(t){if(!Xn(t))throw t;f("LocalStore",`Failed to update sequence numbers for target ${e}: ${t}`)}r.Un=r.Un.remove(e),r.qn.delete(i.target)}function Er(t,e,n){const r=v(t);let i=x.min(),s=qe();return r.persistence.runTransaction("Execute query","readonly",t=>function(t,e,n){const r=v(t),i=r.qn.get(n);return void 0!==i?Qn.resolve(r.Un.get(i)):r.ze.getTargetData(e,n)}(r,t,zt(e)).next(e=>{if(e)return i=e.lastLimboFreeSnapshotVersion,r.ze.getMatchingKeysForTargetId(t,e.targetId).next(t=>{s=t})}).next(()=>r.Bn.getDocumentsMatchingQuery(t,e,n?i:x.min(),n?s:qe())).next(t=>({documents:t,Gn:s})))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Tr{constructor(t){this.N=t,this.Yn=new Map,this.Xn=new Map}getBundleMetadata(t,e){return Qn.resolve(this.Yn.get(e))}saveBundleMetadata(t,e){var n;return this.Yn.set(e.id,{id:(n=e).id,version:n.version,createTime:cn(n.createTime)}),Qn.resolve()}getNamedQuery(t,e){return Qn.resolve(this.Xn.get(e))}saveNamedQuery(t,e){return this.Xn.set(e.name,function(t){return{name:t.name,query:nr(t.bundledQuery),readTime:cn(t.readTime)}}(e)),Qn.resolve()}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _r{constructor(){this.Zn=new Pe(Sr.ts),this.es=new Pe(Sr.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(t,e){const n=new Sr(t,e);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(t,e){t.forEach(t=>this.addReference(t,e))}removeReference(t,e){this.rs(new Sr(t,e))}os(t,e){t.forEach(t=>this.removeReference(t,e))}cs(t){const e=new X(new F([])),n=new Sr(e,t),r=new Sr(e,t+1),i=[];return this.es.forEachInRange([n,r],t=>{this.rs(t),i.push(t.key)}),i}us(){this.Zn.forEach(t=>this.rs(t))}rs(t){this.Zn=this.Zn.delete(t),this.es=this.es.delete(t)}hs(t){const e=new X(new F([])),n=new Sr(e,t),r=new Sr(e,t+1);let i=qe();return this.es.forEachInRange([n,r],t=>{i=i.add(t.key)}),i}containsKey(t){const e=new Sr(t,0),n=this.Zn.firstAfterOrEqual(e);return null!==n&&t.isEqual(n.key)}}class Sr{constructor(t,e){this.key=t,this.ls=e}static ts(t,e){return X.comparator(t.key,e.key)||R(t.ls,e.ls)}static ns(t,e){return R(t.ls,e.ls)||X.comparator(t.key,e.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ir{constructor(t,e){this.Ht=t,this.referenceDelegate=e,this.In=[],this.fs=1,this.ds=new Pe(Sr.ts)}checkEmpty(t){return Qn.resolve(0===this.In.length)}addMutationBatch(t,e,n,r){const i=this.fs;this.fs++,this.In.length>0&&this.In[this.In.length-1];const s=new Jn(i,e,n,r);this.In.push(s);for(const e of r)this.ds=this.ds.add(new Sr(e.key,i)),this.Ht.addToCollectionParentIndex(t,e.key.path.popLast());return Qn.resolve(s)}lookupMutationBatch(t,e){return Qn.resolve(this.ws(e))}getNextMutationBatchAfterBatchId(t,e){const n=e+1,r=this._s(n),i=r<0?0:r;return Qn.resolve(this.In.length>i?this.In[i]:null)}getHighestUnacknowledgedBatchId(){return Qn.resolve(0===this.In.length?-1:this.fs-1)}getAllMutationBatches(t){return Qn.resolve(this.In.slice())}getAllMutationBatchesAffectingDocumentKey(t,e){const n=new Sr(e,0),r=new Sr(e,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],t=>{const e=this.ws(t.ls);i.push(e)}),Qn.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(t,e){let n=new Pe(R);return e.forEach(t=>{const e=new Sr(t,0),r=new Sr(t,Number.POSITIVE_INFINITY);this.ds.forEachInRange([e,r],t=>{n=n.add(t.ls)})}),Qn.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(t,e){const n=e.path,r=n.length+1;let i=n;X.isDocumentKey(i)||(i=i.child(""));const s=new Sr(new X(i),0);let o=new Pe(R);return this.ds.forEachWhile(t=>{const e=t.key.path;return!!n.isPrefixOf(e)&&(e.length===r&&(o=o.add(t.ls)),!0)},s),Qn.resolve(this.gs(o))}gs(t){const e=[];return t.forEach(t=>{const n=this.ws(t);null!==n&&e.push(n)}),e}removeMutationBatch(t,e){y(0===this.ys(e.batchId,"removed")),this.In.shift();let n=this.ds;return Qn.forEach(e.mutations,r=>{const i=new Sr(r.key,e.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(t,r.key)}).next(()=>{this.ds=n})}te(t){}containsKey(t,e){const n=new Sr(e,0),r=this.ds.firstAfterOrEqual(n);return Qn.resolve(e.isEqual(r&&r.key))}performConsistencyCheck(t){return this.In.length,Qn.resolve()}ys(t,e){return this._s(t)}_s(t){return 0===this.In.length?0:t-this.In[0].batchId}ws(t){const e=this._s(t);return e<0||e>=this.In.length?null:this.In[e]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ar{constructor(t,e){this.Ht=t,this.ps=e,this.docs=new Ne(X.comparator),this.size=0}addEntry(t,e,n){const r=e.key,i=this.docs.get(r),s=i?i.size:0,o=this.ps(e);return this.docs=this.docs.insert(r,{document:e.clone(),size:o,readTime:n}),this.size+=o-s,this.Ht.addToCollectionParentIndex(t,r.path.popLast())}removeEntry(t){const e=this.docs.get(t);e&&(this.docs=this.docs.remove(t),this.size-=e.size)}getEntry(t,e){const n=this.docs.get(e);return Qn.resolve(n?n.document.clone():ft.newInvalidDocument(e))}getEntries(t,e){let n=Me();return e.forEach(t=>{const e=this.docs.get(t);n=n.insert(t,e?e.document.clone():ft.newInvalidDocument(t))}),Qn.resolve(n)}getDocumentsMatchingQuery(t,e,n){let r=Me();const i=new X(e.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:t,value:{document:i,readTime:o}}=s.getNext();if(!e.path.isPrefixOf(t.path))break;o.compareTo(n)<=0||Kt(e,i)&&(r=r.insert(i.key,i.clone()))}return Qn.resolve(r)}Es(t,e){return Qn.forEach(this.docs,t=>e(t))}newChangeBuffer(t){return new Or(this)}getSize(t){return Qn.resolve(this.size)}}class Or extends ur{constructor(t){super(),this.Se=t}applyChanges(t){const e=[];return this.changes.forEach((n,r)=>{r.document.isValidDocument()?e.push(this.Se.addEntry(t,r.document,this.getReadTime(n))):this.Se.removeEntry(n)}),Qn.waitFor(e)}getFromCache(t,e){return this.Se.getEntry(t,e)}getAllFromCache(t,e){return this.Se.getEntries(t,e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cr{constructor(t){this.persistence=t,this.Ts=new cr(t=>mt(t),gt),this.lastRemoteSnapshotVersion=x.min(),this.highestTargetId=0,this.Is=0,this.As=new _r,this.targetCount=0,this.Rs=or.se()}forEachTarget(t,e){return this.Ts.forEach((t,n)=>e(n)),Qn.resolve()}getLastRemoteSnapshotVersion(t){return Qn.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(t){return Qn.resolve(this.Is)}allocateTargetId(t){return this.highestTargetId=this.Rs.next(),Qn.resolve(this.highestTargetId)}setTargetsMetadata(t,e,n){return n&&(this.lastRemoteSnapshotVersion=n),e>this.Is&&(this.Is=e),Qn.resolve()}ae(t){this.Ts.set(t.target,t);const e=t.targetId;e>this.highestTargetId&&(this.Rs=new or(e),this.highestTargetId=e),t.sequenceNumber>this.Is&&(this.Is=t.sequenceNumber)}addTargetData(t,e){return this.ae(e),this.targetCount+=1,Qn.resolve()}updateTargetData(t,e){return this.ae(e),Qn.resolve()}removeTargetData(t,e){return this.Ts.delete(e.target),this.As.cs(e.targetId),this.targetCount-=1,Qn.resolve()}removeTargets(t,e,n){let r=0;const i=[];return this.Ts.forEach((s,o)=>{o.sequenceNumber<=e&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(t,o.targetId)),r++)}),Qn.waitFor(i).next(()=>r)}getTargetCount(t){return Qn.resolve(this.targetCount)}getTargetData(t,e){const n=this.Ts.get(e)||null;return Qn.resolve(n)}addMatchingKeys(t,e,n){return this.As.ss(e,n),Qn.resolve()}removeMatchingKeys(t,e,n){this.As.os(e,n);const r=this.persistence.referenceDelegate,i=[];return r&&e.forEach(e=>{i.push(r.markPotentiallyOrphaned(t,e))}),Qn.waitFor(i)}removeMatchingKeysForTargetId(t,e){return this.As.cs(e),Qn.resolve()}getMatchingKeysForTargetId(t,e){const n=this.As.hs(e);return Qn.resolve(n)}containsKey(t,e){return Qn.resolve(this.As.containsKey(e))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class kr{constructor(t,e){this.bs={},this.Le=new O(0),this.Be=!1,this.Be=!0,this.referenceDelegate=t(this),this.ze=new Cr(this),this.Ht=new rr,this.He=function(t,e){return new Ar(t,e)}(this.Ht,t=>this.referenceDelegate.Ps(t)),this.N=new er(e),this.Je=new Tr(this.N)}start(){return Promise.resolve()}shutdown(){return this.Be=!1,Promise.resolve()}get started(){return this.Be}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Ht}getMutationQueue(t){let e=this.bs[t.toKey()];return e||(e=new Ir(this.Ht,this.referenceDelegate),this.bs[t.toKey()]=e),e}getTargetCache(){return this.ze}getRemoteDocumentCache(){return this.He}getBundleCache(){return this.Je}runTransaction(t,e,n){f("MemoryPersistence","Starting transaction:",t);const r=new Rr(this.Le.next());return this.referenceDelegate.vs(),n(r).next(t=>this.referenceDelegate.Vs(r).next(()=>t)).toPromise().then(t=>(r.raiseOnCommittedEvent(),t))}Ss(t,e){return Qn.or(Object.values(this.bs).map(n=>()=>n.containsKey(t,e)))}}class Rr extends Yn{constructor(t){super(),this.currentSequenceNumber=t}}class Nr{constructor(t){this.persistence=t,this.Ds=new _r,this.Cs=null}static Ns(t){return new Nr(t)}get xs(){if(this.Cs)return this.Cs;throw g()}addReference(t,e,n){return this.Ds.addReference(n,e),this.xs.delete(n.toString()),Qn.resolve()}removeReference(t,e,n){return this.Ds.removeReference(n,e),this.xs.add(n.toString()),Qn.resolve()}markPotentiallyOrphaned(t,e){return this.xs.add(e.toString()),Qn.resolve()}removeTarget(t,e){this.Ds.cs(e.targetId).forEach(t=>this.xs.add(t.toString()));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(t,e.targetId).next(t=>{t.forEach(t=>this.xs.add(t.toString()))}).next(()=>n.removeTargetData(t,e))}vs(){this.Cs=new Set}Vs(t){const e=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Qn.forEach(this.xs,n=>{const r=X.fromPath(n);return this.ks(t,r).next(t=>{t||e.removeEntry(r)})}).next(()=>(this.Cs=null,e.apply(t)))}updateLimboDocument(t,e){return this.ks(t,e).next(t=>{t?this.xs.delete(e.toString()):this.xs.add(e.toString())})}Ps(t){return 0}ks(t,e){return Qn.or([()=>Qn.resolve(this.Ds.containsKey(e)),()=>this.persistence.getTargetCache().containsKey(t,e),()=>this.persistence.Ss(t,e)])}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dr{constructor(){this.activeTargetIds=He()}Fs(t){this.activeTargetIds=this.activeTargetIds.add(t)}Ms(t){this.activeTargetIds=this.activeTargetIds.delete(t)}Os(){const t={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(t)}}class xr{constructor(){this.yi=new Dr,this.pi={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(t){}updateMutationState(t,e,n){}addLocalQueryTarget(t){return this.yi.Fs(t),this.pi[t]||"not-current"}updateQueryState(t,e,n){this.pi[t]=e}removeLocalQueryTarget(t){this.yi.Ms(t)}isLocalQueryTarget(t){return this.yi.activeTargetIds.has(t)}clearQueryState(t){delete this.pi[t]}getAllActiveQueryTargets(){return this.yi.activeTargetIds}isActiveQueryTarget(t){return this.yi.activeTargetIds.has(t)}start(){return this.yi=new Dr,Promise.resolve()}handleUserChange(t,e,n){}setOnlineState(t){}shutdown(){}writeSequenceNumber(t){}notifyBundleLoaded(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pr{Ei(t){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Lr{constructor(){this.Ti=()=>this.Ii(),this.Ai=()=>this.Ri(),this.bi=[],this.Pi()}Ei(t){this.bi.push(t)}shutdown(){window.removeEventListener("online",this.Ti),window.removeEventListener("offline",this.Ai)}Pi(){window.addEventListener("online",this.Ti),window.addEventListener("offline",this.Ai)}Ii(){f("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const t of this.bi)t(0)}Ri(){f("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const t of this.bi)t(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Mr{constructor(t){this.vi=t.vi,this.Vi=t.Vi}Si(t){this.Di=t}Ci(t){this.Ni=t}onMessage(t){this.xi=t}close(){this.Vi()}send(t){this.vi(t)}ki(){this.Di()}$i(t){this.Ni(t)}Oi(t){this.xi(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Fr extends class{constructor(t){this.databaseInfo=t,this.databaseId=t.databaseId;const e=t.ssl?"https":"http";this.Fi=e+"://"+t.host,this.Mi="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Li(t,e,n,r){const i=this.Bi(t,e);f("RestConnection","Sending: ",i,n);const s={};return this.Ui(s,r),this.qi(t,i,s,n).then(t=>(f("RestConnection","Received: ",t),t),e=>{throw p("RestConnection",t+" failed with error: ",e,"url: ",i,"request:",n),e})}Ki(t,e,n,r){return this.Li(t,e,n,r)}Ui(t,e){if(t["X-Goog-Api-Client"]="gl-js/ fire/"+u,t["Content-Type"]="text/plain",this.databaseInfo.appId&&(t["X-Firebase-GMPID"]=this.databaseInfo.appId),e)for(const n in e.authHeaders)e.authHeaders.hasOwnProperty(n)&&(t[n]=e.authHeaders[n])}Bi(t,e){const n=jr[t];return`${this.Fi}/v1/${e}:${n}`}}{constructor(t){super(t),this.forceLongPolling=t.forceLongPolling,this.autoDetectLongPolling=t.autoDetectLongPolling,this.useFetchStreams=t.useFetchStreams}qi(t,e,n,r){return new Promise((i,s)=>{const o=new a.g;o.listenOnce(a.c.COMPLETE,()=>{try{switch(o.getLastErrorCode()){case a.a.NO_ERROR:const e=o.getResponseJson();f("Connection","XHR received:",JSON.stringify(e)),i(e);break;case a.a.TIMEOUT:f("Connection",'RPC "'+t+'" timed out'),s(new w(b.DEADLINE_EXCEEDED,"Request time out"));break;case a.a.HTTP_ERROR:const n=o.getStatus();if(f("Connection",'RPC "'+t+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const t=o.getResponseJson().error;if(t&&t.status&&t.message){const e=function(t){const e=t.toLowerCase().replace(/_/g,"-");return Object.values(b).indexOf(e)>=0?e:b.UNKNOWN}(t.status);s(new w(e,t.message))}else s(new w(b.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new w(b.UNAVAILABLE,"Connection failed."));break;default:g()}}finally{f("Connection",'RPC "'+t+'" completed.')}});const c=JSON.stringify(r);o.send(e,"POST",c,n,15)})}ji(t,e){const n=[this.Fi,"/","google.firestore.v1.Firestore","/",t,"/channel"],r=Object(a.h)(),i=Object(a.i)(),s={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(s.xmlHttpFactory=new a.d({})),this.Ui(s.initMessageHeaders,e),Object(o.k)()||Object(o.l)()||Object(o.i)()||Object(o.j)()||Object(o.n)()||Object(o.h)()||(s.httpHeadersOverwriteParam="$httpHeaders");const c=n.join("");f("Connection","Creating WebChannel: "+c,s);const u=r.createWebChannel(c,s);let l=!1,h=!1;const d=new Mr({vi:t=>{h?f("Connection","Not sending because WebChannel is closed:",t):(l||(f("Connection","Opening WebChannel transport."),u.open(),l=!0),f("Connection","WebChannel sending:",t),u.send(t))},Vi:()=>u.close()}),m=(t,e,n)=>{t.listen(e,t=>{try{n(t)}catch(t){setTimeout(()=>{throw t},0)}})};return m(u,a.f.EventType.OPEN,()=>{h||f("Connection","WebChannel transport opened.")}),m(u,a.f.EventType.CLOSE,()=>{h||(h=!0,f("Connection","WebChannel transport closed"),d.$i())}),m(u,a.f.EventType.ERROR,t=>{h||(h=!0,p("Connection","WebChannel transport errored:",t),d.$i(new w(b.UNAVAILABLE,"The operation could not be completed")))}),m(u,a.f.EventType.MESSAGE,t=>{var e;if(!h){const n=t.data[0];y(!!n);const r=n,i=r.error||(null===(e=r[0])||void 0===e?void 0:e.error);if(i){f("Connection","WebChannel received error:",i);const t=i.status;let e=function(t){const e=Oe[t];if(void 0!==e)return Re(e)}(t),n=i.message;void 0===e&&(e=b.INTERNAL,n="Unknown error status: "+t+" with message "+i.message),h=!0,d.$i(new w(e,n)),u.close()}else f("Connection","WebChannel received:",n),d.Oi(n)}}),m(i,a.b.STAT_EVENT,t=>{t.stat===a.e.PROXY?f("Connection","Detected buffering proxy"):t.stat===a.e.NOPROXY&&f("Connection","Detected no buffering proxy")}),setTimeout(()=>{d.ki()},0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ur(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Vr(t){return new rn(t,!0)}class Br{constructor(t,e,n=1e3,r=1.5,i=6e4){this.Oe=t,this.timerId=e,this.Qi=n,this.Wi=r,this.Gi=i,this.zi=0,this.Hi=null,this.Ji=Date.now(),this.reset()}reset(){this.zi=0}Yi(){this.zi=this.Gi}Xi(t){this.cancel();const e=Math.floor(this.zi+this.Zi()),n=Math.max(0,Date.now()-this.Ji),r=Math.max(0,e-n);r>0&&f("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.zi} ms, delay with jitter: ${e} ms, last attempt: ${n} ms ago)`),this.Hi=this.Oe.enqueueAfterDelay(this.timerId,r,()=>(this.Ji=Date.now(),t())),this.zi*=this.Wi,this.zi<this.Qi&&(this.zi=this.Qi),this.zi>this.Gi&&(this.zi=this.Gi)}tr(){null!==this.Hi&&(this.Hi.skipDelay(),this.Hi=null)}cancel(){null!==this.Hi&&(this.Hi.cancel(),this.Hi=null)}Zi(){return(Math.random()-.5)*this.zi}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class zr{constructor(t,e,n,r,i,s){this.Oe=t,this.er=n,this.nr=r,this.credentialsProvider=i,this.listener=s,this.state=0,this.sr=0,this.ir=null,this.stream=null,this.rr=new Br(t,e)}ar(){return 1===this.state||2===this.state||4===this.state}cr(){return 2===this.state}start(){3!==this.state?this.auth():this.ur()}async stop(){this.ar()&&await this.close(0)}hr(){this.state=0,this.rr.reset()}lr(){this.cr()&&null===this.ir&&(this.ir=this.Oe.enqueueAfterDelay(this.er,6e4,()=>this.dr()))}wr(t){this._r(),this.stream.send(t)}async dr(){if(this.cr())return this.close(0)}_r(){this.ir&&(this.ir.cancel(),this.ir=null)}async close(t,e){this._r(),this.rr.cancel(),this.sr++,3!==t?this.rr.reset():e&&e.code===b.RESOURCE_EXHAUSTED?(d(e.toString()),d("Using maximum backoff delay to prevent overloading the backend."),this.rr.Yi()):e&&e.code===b.UNAUTHENTICATED&&this.credentialsProvider.invalidateToken(),null!==this.stream&&(this.mr(),this.stream.close(),this.stream=null),this.state=t,await this.listener.Ci(e)}mr(){}auth(){this.state=1;const t=this.gr(this.sr),e=this.sr;this.credentialsProvider.getToken().then(t=>{this.sr===e&&this.yr(t)},e=>{t(()=>{const t=new w(b.UNKNOWN,"Fetching auth token failed: "+e.message);return this.pr(t)})})}yr(t){const e=this.gr(this.sr);this.stream=this.Er(t),this.stream.Si(()=>{e(()=>(this.state=2,this.listener.Si()))}),this.stream.Ci(t=>{e(()=>this.pr(t))}),this.stream.onMessage(t=>{e(()=>this.onMessage(t))})}ur(){this.state=4,this.rr.Xi(async()=>{this.state=0,this.start()})}pr(t){return f("PersistentStream","close with error: "+t),this.stream=null,this.close(3,t)}gr(t){return e=>{this.Oe.enqueueAndForget(()=>this.sr===t?e():(f("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve()))}}}class qr extends zr{constructor(t,e,n,r,i){super(t,"listen_stream_connection_backoff","listen_stream_idle",e,n,i),this.N=r}Er(t){return this.nr.ji("Listen",t)}onMessage(t){this.rr.reset();const e=function(t,e){let n;if("targetChange"in e){e.targetChange;const r=function(t){return"NO_CHANGE"===t?0:"ADD"===t?1:"REMOVE"===t?2:"CURRENT"===t?3:"RESET"===t?4:g()}(e.targetChange.targetChangeType||"NO_CHANGE"),i=e.targetChange.targetIds||[],s=function(t,e){return t.D?(y(void 0===e||"string"==typeof e),z.fromBase64String(e||"")):(y(void 0===e||e instanceof Uint8Array),z.fromUint8Array(e||new Uint8Array))}(t,e.targetChange.resumeToken),o=e.targetChange.cause,a=o&&function(t){const e=void 0===t.code?b.UNKNOWN:Re(t.code);return new w(e,t.message||"")}(o);n=new Qe(r,i,s,a||null)}else if("documentChange"in e){e.documentChange;const r=e.documentChange;r.document,r.document.name,r.document.updateTime;const i=fn(t,r.document.name),s=cn(r.document.updateTime),o=new lt({mapValue:{fields:r.document.fields}}),a=ft.newFoundDocument(i,s,o),c=r.targetIds||[],u=r.removedTargetIds||[];n=new We(c,u,a.key,a)}else if("documentDelete"in e){e.documentDelete;const r=e.documentDelete;r.document;const i=fn(t,r.document),s=r.readTime?cn(r.readTime):x.min(),o=ft.newNoDocument(i,s),a=r.removedTargetIds||[];n=new We([],a,o.key,o)}else if("documentRemove"in e){e.documentRemove;const r=e.documentRemove;r.document;const i=fn(t,r.document),s=r.removedTargetIds||[];n=new We([],s,i,null)}else{if(!("filter"in e))return g();{e.filter;const t=e.filter;t.targetId;const r=t.count||0,i=new Ae(r),s=t.targetId;n=new Ye(s,i)}}return n}(this.N,t),n=function(t){if(!("targetChange"in t))return x.min();const e=t.targetChange;return e.targetIds&&e.targetIds.length?x.min():e.readTime?cn(e.readTime):x.min()}(t);return this.listener.Tr(e,n)}Ir(t){const e={};e.database=mn(this.N),e.addTarget=function(t,e){let n;const r=e.target;return n=yt(r)?{documents:bn(t,r)}:{query:wn(t,r)},n.targetId=e.targetId,e.resumeToken.approximateByteSize()>0?n.resumeToken=on(t,e.resumeToken):e.snapshotVersion.compareTo(x.min())>0&&(n.readTime=sn(t,e.snapshotVersion.toTimestamp())),n}(this.N,t);const n=function(t,e){const n=function(t,e){switch(e){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return g()}}(0,e.purpose);return null==n?null:{"goog-listen-tags":n}}(this.N,t);n&&(e.labels=n),this.wr(e)}Ar(t){const e={};e.database=mn(this.N),e.removeTarget=t,this.wr(e)}}class $r extends zr{constructor(t,e,n,r,i){super(t,"write_stream_connection_backoff","write_stream_idle",e,n,i),this.N=r,this.Rr=!1}get br(){return this.Rr}start(){this.Rr=!1,this.lastStreamToken=void 0,super.start()}mr(){this.Rr&&this.Pr([])}Er(t){return this.nr.ji("Write",t)}onMessage(t){if(y(!!t.streamToken),this.lastStreamToken=t.streamToken,this.Rr){this.rr.reset();const e=function(t,e){return t&&t.length>0?(y(void 0!==e),t.map(t=>function(t,e){let n=t.updateTime?cn(t.updateTime):cn(e);return n.isEqual(x.min())&&(n=cn(e)),new le(n,t.transformResults||[])}(t,e))):[]}(t.writeResults,t.commitTime),n=cn(t.commitTime);return this.listener.vr(n,e)}return y(!t.writeResults||0===t.writeResults.length),this.Rr=!0,this.listener.Vr()}Sr(){const t={};t.database=mn(this.N),this.wr(t)}Pr(t){const e={streamToken:this.lastStreamToken,writes:t.map(t=>vn(this.N,t))};this.wr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Hr extends class{}{constructor(t,e,n){super(),this.credentials=t,this.nr=e,this.N=n,this.Dr=!1}Cr(){if(this.Dr)throw new w(b.FAILED_PRECONDITION,"The client has already been terminated.")}Li(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Li(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(b.UNKNOWN,t.toString())})}Ki(t,e,n){return this.Cr(),this.credentials.getToken().then(r=>this.nr.Ki(t,e,n,r)).catch(t=>{throw"FirebaseError"===t.name?(t.code===b.UNAUTHENTICATED&&this.credentials.invalidateToken(),t):new w(b.UNKNOWN,t.toString())})}terminate(){this.Dr=!0}}class Gr{constructor(t,e){this.asyncQueue=t,this.onlineStateHandler=e,this.state="Unknown",this.Nr=0,this.kr=null,this.$r=!0}Or(){0===this.Nr&&(this.Fr("Unknown"),this.kr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,()=>(this.kr=null,this.Mr("Backend didn't respond within 10 seconds."),this.Fr("Offline"),Promise.resolve())))}Lr(t){"Online"===this.state?this.Fr("Unknown"):(this.Nr++,this.Nr>=1&&(this.Br(),this.Mr("Connection failed 1 times. Most recent error: "+t.toString()),this.Fr("Offline")))}set(t){this.Br(),this.Nr=0,"Online"===t&&(this.$r=!1),this.Fr(t)}Fr(t){t!==this.state&&(this.state=t,this.onlineStateHandler(t))}Mr(t){const e=`Could not reach Cloud Firestore backend. ${t}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.$r?(d(e),this.$r=!1):f("OnlineStateTracker",e)}Br(){null!==this.kr&&(this.kr.cancel(),this.kr=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Kr{constructor(t,e,n,r,i){this.localStore=t,this.datastore=e,this.asyncQueue=n,this.remoteSyncer={},this.Ur=[],this.qr=new Map,this.Kr=new Set,this.jr=[],this.Qr=i,this.Qr.Ei(t=>{n.enqueueAndForget(async()=>{ni(this)&&(f("RemoteStore","Restarting streams for network reachability change."),await async function(t){const e=v(t);e.Kr.add(4),await Yr(e),e.Wr.set("Unknown"),e.Kr.delete(4),await Wr(e)}(this))})}),this.Wr=new Gr(n,r)}}async function Wr(t){if(ni(t))for(const e of t.jr)await e(!0)}async function Yr(t){for(const e of t.jr)await e(!1)}function Qr(t,e){const n=v(t);n.qr.has(e.targetId)||(n.qr.set(e.targetId,e),ei(n)?ti(n):bi(n).cr()&&Jr(n,e))}function Xr(t,e){const n=v(t),r=bi(n);n.qr.delete(e),r.cr()&&Zr(n,e),0===n.qr.size&&(r.cr()?r.lr():ni(n)&&n.Wr.set("Unknown"))}function Jr(t,e){t.Gr.Y(e.targetId),bi(t).Ir(e)}function Zr(t,e){t.Gr.Y(e),bi(t).Ar(e)}function ti(t){t.Gr=new Je({getRemoteKeysForTarget:e=>t.remoteSyncer.getRemoteKeysForTarget(e),Et:e=>t.qr.get(e)||null}),bi(t).start(),t.Wr.Or()}function ei(t){return ni(t)&&!bi(t).ar()&&t.qr.size>0}function ni(t){return 0===v(t).Kr.size}function ri(t){t.Gr=void 0}async function ii(t){t.qr.forEach((e,n)=>{Jr(t,e)})}async function si(t,e){ri(t),ei(t)?(t.Wr.Lr(e),ti(t)):t.Wr.set("Unknown")}async function oi(t,e,n){if(t.Wr.set("Online"),e instanceof Qe&&2===e.state&&e.cause)try{await async function(t,e){const n=e.cause;for(const r of e.targetIds)t.qr.has(r)&&(await t.remoteSyncer.rejectListen(r,n),t.qr.delete(r),t.Gr.removeTarget(r))}(t,e)}catch(n){f("RemoteStore","Failed to remove targets %s: %s ",e.targetIds.join(","),n),await ai(t,n)}else if(e instanceof We?t.Gr.rt(e):e instanceof Ye?t.Gr.ft(e):t.Gr.ct(e),!n.isEqual(x.min()))try{const e=await gr(t.localStore);n.compareTo(e)>=0&&await function(t,e){const n=t.Gr._t(e);return n.targetChanges.forEach((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=t.qr.get(r);i&&t.qr.set(r,i.withResumeToken(n.resumeToken,e))}}),n.targetMismatches.forEach(e=>{const n=t.qr.get(e);if(!n)return;t.qr.set(e,n.withResumeToken(z.EMPTY_BYTE_STRING,n.snapshotVersion)),Zr(t,e);const r=new tr(n.target,e,1,n.sequenceNumber);Jr(t,r)}),t.remoteSyncer.applyRemoteEvent(n)}(t,n)}catch(e){f("RemoteStore","Failed to raise snapshot:",e),await ai(t,e)}}async function ai(t,e,n){if(!Xn(e))throw e;t.Kr.add(1),await Yr(t),t.Wr.set("Offline"),n||(n=()=>gr(t.localStore)),t.asyncQueue.enqueueRetryable(async()=>{f("RemoteStore","Retrying IndexedDB access"),await n(),t.Kr.delete(1),await Wr(t)})}function ci(t,e){return e().catch(n=>ai(t,n,e))}async function ui(t){const e=v(t),n=wi(e);let r=e.Ur.length>0?e.Ur[e.Ur.length-1].batchId:-1;for(;li(e);)try{const t=await vr(e.localStore,r);if(null===t){0===e.Ur.length&&n.lr();break}r=t.batchId,hi(e,t)}catch(t){await ai(e,t)}fi(e)&&di(e)}function li(t){return ni(t)&&t.Ur.length<10}function hi(t,e){t.Ur.push(e);const n=wi(t);n.cr()&&n.br&&n.Pr(e.mutations)}function fi(t){return ni(t)&&!wi(t).ar()&&t.Ur.length>0}function di(t){wi(t).start()}async function pi(t){wi(t).Sr()}async function mi(t){const e=wi(t);for(const n of t.Ur)e.Pr(n.mutations)}async function gi(t,e,n){const r=t.Ur.shift(),i=Zn.from(r,e,n);await ci(t,()=>t.remoteSyncer.applySuccessfulWrite(i)),await ui(t)}async function yi(t,e){e&&wi(t).br&&await async function(t,e){if(ke(n=e.code)&&n!==b.ABORTED){const n=t.Ur.shift();wi(t).hr(),await ci(t,()=>t.remoteSyncer.rejectFailedWrite(n.batchId,e)),await ui(t)}var n}(t,e),fi(t)&&di(t)}async function vi(t,e){const n=v(t);e?(n.Kr.delete(2),await Wr(n)):e||(n.Kr.add(2),await Yr(n),n.Wr.set("Unknown"))}function bi(t){return t.zr||(t.zr=function(t,e,n){const r=v(t);return r.Cr(),new qr(e,r.nr,r.credentials,r.N,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(t.datastore,t.asyncQueue,{Si:ii.bind(null,t),Ci:si.bind(null,t),Tr:oi.bind(null,t)}),t.jr.push(async e=>{e?(t.zr.hr(),ei(t)?ti(t):t.Wr.set("Unknown")):(await t.zr.stop(),ri(t))})),t.zr}function wi(t){return t.Hr||(t.Hr=function(t,e,n){const r=v(t);return r.Cr(),new $r(e,r.nr,r.credentials,r.N,n)}(t.datastore,t.asyncQueue,{Si:pi.bind(null,t),Ci:yi.bind(null,t),Vr:mi.bind(null,t),vr:gi.bind(null,t)}),t.jr.push(async e=>{e?(t.Hr.hr(),await ui(t)):(await t.Hr.stop(),t.Ur.length>0&&(f("RemoteStore",`Stopping write stream with ${t.Ur.length} pending writes`),t.Ur=[]))})),t.Hr
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class Ei{constructor(t,e,n,r,i){this.asyncQueue=t,this.timerId=e,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new E,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch(t=>{})}static createAndSchedule(t,e,n,r,i){const s=Date.now()+n,o=new Ei(t,e,s,r,i);return o.start(n),o}start(t){this.timerHandle=setTimeout(()=>this.handleDelayElapsed(),t)}skipDelay(){return this.handleDelayElapsed()}cancel(t){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new w(b.CANCELLED,"Operation cancelled"+(t?": "+t:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget(()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then(t=>this.deferred.resolve(t))):Promise.resolve())}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function Ti(t,e){if(d("AsyncQueue",`${e}: ${t}`),Xn(t))return new w(b.UNAVAILABLE,`${e}: ${t}`);throw t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _i{constructor(t){this.comparator=t?(e,n)=>t(e,n)||X.comparator(e.key,n.key):(t,e)=>X.comparator(t.key,e.key),this.keyedMap=Ue(),this.sortedSet=new Ne(this.comparator)}static emptySet(t){return new _i(t.comparator)}has(t){return null!=this.keyedMap.get(t)}get(t){return this.keyedMap.get(t)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(t){const e=this.keyedMap.get(t);return e?this.sortedSet.indexOf(e):-1}get size(){return this.sortedSet.size}forEach(t){this.sortedSet.inorderTraversal((e,n)=>(t(e),!1))}add(t){const e=this.delete(t.key);return e.copy(e.keyedMap.insert(t.key,t),e.sortedSet.insert(t,null))}delete(t){const e=this.get(t);return e?this.copy(this.keyedMap.remove(t),this.sortedSet.remove(e)):this}isEqual(t){if(!(t instanceof _i))return!1;if(this.size!==t.size)return!1;const e=this.sortedSet.getIterator(),n=t.sortedSet.getIterator();for(;e.hasNext();){const t=e.getNext().key,r=n.getNext().key;if(!t.isEqual(r))return!1}return!0}toString(){const t=[];return this.forEach(e=>{t.push(e.toString())}),0===t.length?"DocumentSet ()":"DocumentSet (\n  "+t.join("  \n")+"\n)"}copy(t,e){const n=new _i;return n.comparator=this.comparator,n.keyedMap=t,n.sortedSet=e,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Si{constructor(){this.Jr=new Ne(X.comparator)}track(t){const e=t.doc.key,n=this.Jr.get(e);n?0!==t.type&&3===n.type?this.Jr=this.Jr.insert(e,t):3===t.type&&1!==n.type?this.Jr=this.Jr.insert(e,{type:n.type,doc:t.doc}):2===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):2===t.type&&0===n.type?this.Jr=this.Jr.insert(e,{type:0,doc:t.doc}):1===t.type&&0===n.type?this.Jr=this.Jr.remove(e):1===t.type&&2===n.type?this.Jr=this.Jr.insert(e,{type:1,doc:n.doc}):0===t.type&&1===n.type?this.Jr=this.Jr.insert(e,{type:2,doc:t.doc}):g():this.Jr=this.Jr.insert(e,t)}Yr(){const t=[];return this.Jr.inorderTraversal((e,n)=>{t.push(n)}),t}}class Ii{constructor(t,e,n,r,i,s,o,a){this.query=t,this.docs=e,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(t,e,n,r){const i=[];return e.forEach(t=>{i.push({type:0,doc:t})}),new Ii(t,e,_i.emptySet(e),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(t){if(!(this.fromCache===t.fromCache&&this.syncStateChanged===t.syncStateChanged&&this.mutatedKeys.isEqual(t.mutatedKeys)&&$t(this.query,t.query)&&this.docs.isEqual(t.docs)&&this.oldDocs.isEqual(t.oldDocs)))return!1;const e=this.docChanges,n=t.docChanges;if(e.length!==n.length)return!1;for(let t=0;t<e.length;t++)if(e[t].type!==n[t].type||!e[t].doc.isEqual(n[t].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ai{constructor(){this.Xr=void 0,this.listeners=[]}}class Oi{constructor(){this.queries=new cr(t=>Ht(t),$t),this.onlineState="Unknown",this.Zr=new Set}}async function Ci(t,e){const n=v(t),r=e.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new Ai),i)try{s.Xr=await n.onListen(r)}catch(t){const n=Ti(t,`Initialization of query '${Gt(e.query)}' failed`);return void e.onError(n)}n.queries.set(r,s),s.listeners.push(e),e.eo(n.onlineState),s.Xr&&e.no(s.Xr)&&Di(n)}async function ki(t,e){const n=v(t),r=e.query;let i=!1;const s=n.queries.get(r);if(s){const t=s.listeners.indexOf(e);t>=0&&(s.listeners.splice(t,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Ri(t,e){const n=v(t);let r=!1;for(const t of e){const e=t.query,i=n.queries.get(e);if(i){for(const e of i.listeners)e.no(t)&&(r=!0);i.Xr=t}}r&&Di(n)}function Ni(t,e,n){const r=v(t),i=r.queries.get(e);if(i)for(const t of i.listeners)t.onError(n);r.queries.delete(e)}function Di(t){t.Zr.forEach(t=>{t.next()})}class xi{constructor(t,e,n){this.query=t,this.so=e,this.io=!1,this.ro=null,this.onlineState="Unknown",this.options=n||{}}no(t){if(!this.options.includeMetadataChanges){const e=[];for(const n of t.docChanges)3!==n.type&&e.push(n);t=new Ii(t.query,t.docs,t.oldDocs,e,t.mutatedKeys,t.fromCache,t.syncStateChanged,!0)}let e=!1;return this.io?this.oo(t)&&(this.so.next(t),e=!0):this.ao(t,this.onlineState)&&(this.co(t),e=!0),this.ro=t,e}onError(t){this.so.error(t)}eo(t){this.onlineState=t;let e=!1;return this.ro&&!this.io&&this.ao(this.ro,t)&&(this.co(this.ro),e=!0),e}ao(t,e){if(!t.fromCache)return!0;const n="Offline"!==e;return!(this.options.uo&&n||t.docs.isEmpty()&&"Offline"!==e)}oo(t){if(t.docChanges.length>0)return!0;const e=this.ro&&this.ro.hasPendingWrites!==t.hasPendingWrites;return!(!t.syncStateChanged&&!e)&&!0===this.options.includeMetadataChanges}co(t){t=Ii.fromInitialDocuments(t.query,t.docs,t.mutatedKeys,t.fromCache),this.io=!0,this.so.next(t)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Pi{constructor(t){this.key=t}}class Li{constructor(t){this.key=t}}class ji{constructor(t,e){this.query=t,this._o=e,this.mo=null,this.current=!1,this.yo=qe(),this.mutatedKeys=qe(),this.po=Wt(t),this.Eo=new _i(this.po)}get To(){return this._o}Io(t,e){const n=e?e.Ao:new Si,r=e?e.Eo:this.Eo;let i=e?e.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=jt(this.query)&&r.size===this.query.limit?r.last():null,c=Mt(this.query)&&r.size===this.query.limit?r.first():null;if(t.inorderTraversal((t,e)=>{const u=r.get(t),l=Kt(this.query,e)?e:null,h=!!u&&this.mutatedKeys.has(u.key),f=!!l&&(l.hasLocalMutations||this.mutatedKeys.has(l.key)&&l.hasCommittedMutations);let d=!1;u&&l?u.data.isEqual(l.data)?h!==f&&(n.track({type:3,doc:l}),d=!0):this.Ro(u,l)||(n.track({type:2,doc:l}),d=!0,(a&&this.po(l,a)>0||c&&this.po(l,c)<0)&&(o=!0)):!u&&l?(n.track({type:0,doc:l}),d=!0):u&&!l&&(n.track({type:1,doc:u}),d=!0,(a||c)&&(o=!0)),d&&(l?(s=s.add(l),i=f?i.add(t):i.delete(t)):(s=s.delete(t),i=i.delete(t)))}),jt(this.query)||Mt(this.query))for(;s.size>this.query.limit;){const t=jt(this.query)?s.last():s.first();s=s.delete(t.key),i=i.delete(t.key),n.track({type:1,doc:t})}return{Eo:s,Ao:n,Ln:o,mutatedKeys:i}}Ro(t,e){return t.hasLocalMutations&&e.hasCommittedMutations&&!e.hasLocalMutations}applyChanges(t,e,n){const r=this.Eo;this.Eo=t.Eo,this.mutatedKeys=t.mutatedKeys;const i=t.Ao.Yr();i.sort((t,e)=>function(t,e){const n=t=>{switch(t){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return g()}};return n(t)-n(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t.type,e.type)||this.po(t.doc,e.doc)),this.bo(n);const s=e?this.Po():[],o=0===this.yo.size&&this.current?1:0,a=o!==this.mo;return this.mo=o,0!==i.length||a?{snapshot:new Ii(this.query,t.Eo,r,i,t.mutatedKeys,0===o,a,!1),vo:s}:{vo:s}}eo(t){return this.current&&"Offline"===t?(this.current=!1,this.applyChanges({Eo:this.Eo,Ao:new Si,mutatedKeys:this.mutatedKeys,Ln:!1},!1)):{vo:[]}}Vo(t){return!this._o.has(t)&&!!this.Eo.has(t)&&!this.Eo.get(t).hasLocalMutations}bo(t){t&&(t.addedDocuments.forEach(t=>this._o=this._o.add(t)),t.modifiedDocuments.forEach(t=>{}),t.removedDocuments.forEach(t=>this._o=this._o.delete(t)),this.current=t.current)}Po(){if(!this.current)return[];const t=this.yo;this.yo=qe(),this.Eo.forEach(t=>{this.Vo(t.key)&&(this.yo=this.yo.add(t.key))});const e=[];return t.forEach(t=>{this.yo.has(t)||e.push(new Li(t))}),this.yo.forEach(n=>{t.has(n)||e.push(new Pi(n))}),e}So(t){this._o=t.Gn,this.yo=qe();const e=this.Io(t.documents);return this.applyChanges(e,!0)}Do(){return Ii.fromInitialDocuments(this.query,this.Eo,this.mutatedKeys,0===this.mo)}}class Mi{constructor(t,e,n){this.query=t,this.targetId=e,this.view=n}}class Fi{constructor(t){this.key=t,this.Co=!1}}class Ui{constructor(t,e,n,r,i,s){this.localStore=t,this.remoteStore=e,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.No={},this.xo=new cr(t=>Ht(t),$t),this.ko=new Map,this.$o=new Set,this.Oo=new Ne(X.comparator),this.Fo=new Map,this.Mo=new _r,this.Lo={},this.Bo=new Map,this.Uo=or.ie(),this.onlineState="Unknown",this.qo=void 0}get isPrimaryClient(){return!0===this.qo}}async function Vi(t,e){const n=is(t);let r,i;const s=n.xo.get(e);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Do();else{const t=await br(n.localStore,zt(e)),s=n.sharedClientState.addLocalQueryTarget(t.targetId);r=t.targetId,i=await Bi(n,e,r,"current"===s),n.isPrimaryClient&&Qr(n.remoteStore,t)}return i}async function Bi(t,e,n,r){t.Ko=(e,n,r)=>async function(t,e,n,r){let i=e.view.Io(n);i.Ln&&(i=await Er(t.localStore,e.query,!1).then(({documents:t})=>e.view.Io(t,i)));const s=r&&r.targetChanges.get(e.targetId),o=e.view.applyChanges(i,t.isPrimaryClient,s);return Ji(t,e.targetId,o.vo),o.snapshot}(t,e,n,r);const i=await Er(t.localStore,e,!0),s=new ji(e,i.Gn),o=s.Io(i.documents),a=Ke.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==t.onlineState),c=s.applyChanges(o,t.isPrimaryClient,a);Ji(t,n,c.vo);const u=new Mi(e,n,s);return t.xo.set(e,u),t.ko.has(n)?t.ko.get(n).push(e):t.ko.set(n,[e]),c.snapshot}async function zi(t,e){const n=v(t),r=n.xo.get(e),i=n.ko.get(r.targetId);if(i.length>1)return n.ko.set(r.targetId,i.filter(t=>!$t(t,e))),void n.xo.delete(e);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await wr(n.localStore,r.targetId,!1).then(()=>{n.sharedClientState.clearQueryState(r.targetId),Xr(n.remoteStore,r.targetId),Qi(n,r.targetId)}).catch(ar)):(Qi(n,r.targetId),await wr(n.localStore,r.targetId,!0))}async function qi(t,e){const n=v(t);try{const t=await function(t,e){const n=v(t),r=e.snapshotVersion;let i=n.Un;return n.persistence.runTransaction("Apply remote event","readwrite-primary",t=>{const s=n.jn.newChangeBuffer({trackRemovals:!0});i=n.Un;const o=[];e.targetChanges.forEach((e,s)=>{const a=i.get(s);if(!a)return;o.push(n.ze.removeMatchingKeys(t,e.removedDocuments,s).next(()=>n.ze.addMatchingKeys(t,e.addedDocuments,s)));const c=e.resumeToken;if(c.approximateByteSize()>0){const u=a.withResumeToken(c,r).withSequenceNumber(t.currentSequenceNumber);i=i.insert(s,u),function(t,e,n){return y(e.resumeToken.approximateByteSize()>0),0===t.resumeToken.approximateByteSize()||(e.snapshotVersion.toMicroseconds()-t.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,u,e)&&o.push(n.ze.updateTargetData(t,u))}});let a=Me();if(e.documentUpdates.forEach((r,i)=>{e.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(t,r))}),o.push(yr(t,s,e.documentUpdates,r,void 0).next(t=>{a=t})),!r.isEqual(x.min())){const e=n.ze.getLastRemoteSnapshotVersion(t).next(e=>n.ze.setTargetsMetadata(t,t.currentSequenceNumber,r));o.push(e)}return Qn.waitFor(o).next(()=>s.apply(t)).next(()=>n.Qn.vn(t,a)).next(()=>a)}).then(t=>(n.Un=i,t))}(n.localStore,e);e.targetChanges.forEach((t,e)=>{const r=n.Fo.get(e);r&&(y(t.addedDocuments.size+t.modifiedDocuments.size+t.removedDocuments.size<=1),t.addedDocuments.size>0?r.Co=!0:t.modifiedDocuments.size>0?y(r.Co):t.removedDocuments.size>0&&(y(r.Co),r.Co=!1))}),await es(n,t,e)}catch(t){await ar(t)}}function $i(t,e,n){const r=v(t);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const t=[];r.xo.forEach((n,r)=>{const i=r.view.eo(e);i.snapshot&&t.push(i.snapshot)}),function(t,e){const n=v(t);n.onlineState=e;let r=!1;n.queries.forEach((t,n)=>{for(const t of n.listeners)t.eo(e)&&(r=!0)}),r&&Di(n)}(r.eventManager,e),t.length&&r.No.Tr(t),r.onlineState=e,r.isPrimaryClient&&r.sharedClientState.setOnlineState(e)}}async function Hi(t,e,n){const r=v(t);r.sharedClientState.updateQueryState(e,"rejected",n);const i=r.Fo.get(e),s=i&&i.key;if(s){let t=new Ne(X.comparator);t=t.insert(s,ft.newNoDocument(s,x.min()));const n=qe().add(s),i=new Ge(x.min(),new Map,new Pe(R),t,n);await qi(r,i),r.Oo=r.Oo.remove(s),r.Fo.delete(e),ts(r)}else await wr(r.localStore,e,!1).then(()=>Qi(r,e,n)).catch(ar)}async function Gi(t,e){const n=v(t),r=e.batch.batchId;try{const t=await function(t,e){const n=v(t);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",t=>{const r=e.batch.keys(),i=n.jn.newChangeBuffer({trackRemovals:!0});return function(t,e,n,r){const i=n.batch,s=i.keys();let o=Qn.resolve();return s.forEach(t=>{o=o.next(()=>r.getEntry(e,t)).next(e=>{const s=n.docVersions.get(t);y(null!==s),e.version.compareTo(s)<0&&(i.applyToRemoteDocument(e,n),e.isValidDocument()&&r.addEntry(e,n.commitVersion))})}),o.next(()=>t.In.removeMutationBatch(e,i))}(n,t,e,i).next(()=>i.apply(t)).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}(n.localStore,e);Yi(n,r,null),Wi(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await es(n,t)}catch(t){await ar(t)}}async function Ki(t,e,n){const r=v(t);try{const t=await function(t,e){const n=v(t);return n.persistence.runTransaction("Reject batch","readwrite-primary",t=>{let r;return n.In.lookupMutationBatch(t,e).next(e=>(y(null!==e),r=e.keys(),n.In.removeMutationBatch(t,e))).next(()=>n.In.performConsistencyCheck(t)).next(()=>n.Qn.Pn(t,r))})}(r.localStore,e);Yi(r,e,n),Wi(r,e),r.sharedClientState.updateMutationState(e,"rejected",n),await es(r,t)}catch(n){await ar(n)}}function Wi(t,e){(t.Bo.get(e)||[]).forEach(t=>{t.resolve()}),t.Bo.delete(e)}function Yi(t,e,n){const r=v(t);let i=r.Lo[r.currentUser.toKey()];if(i){const t=i.get(e);t&&(n?t.reject(n):t.resolve(),i=i.remove(e)),r.Lo[r.currentUser.toKey()]=i}}function Qi(t,e,n=null){t.sharedClientState.removeLocalQueryTarget(e);for(const r of t.ko.get(e))t.xo.delete(r),n&&t.No.jo(r,n);t.ko.delete(e),t.isPrimaryClient&&t.Mo.cs(e).forEach(e=>{t.Mo.containsKey(e)||Xi(t,e)})}function Xi(t,e){t.$o.delete(e.path.canonicalString());const n=t.Oo.get(e);null!==n&&(Xr(t.remoteStore,n),t.Oo=t.Oo.remove(e),t.Fo.delete(n),ts(t))}function Ji(t,e,n){for(const r of n)r instanceof Pi?(t.Mo.addReference(r.key,e),Zi(t,r)):r instanceof Li?(f("SyncEngine","Document no longer in limbo: "+r.key),t.Mo.removeReference(r.key,e),t.Mo.containsKey(r.key)||Xi(t,r.key)):g()}function Zi(t,e){const n=e.key,r=n.path.canonicalString();t.Oo.get(n)||t.$o.has(r)||(f("SyncEngine","New document in limbo: "+n),t.$o.add(r),ts(t))}function ts(t){for(;t.$o.size>0&&t.Oo.size<t.maxConcurrentLimboResolutions;){const e=t.$o.values().next().value;t.$o.delete(e);const n=new X(F.fromString(e)),r=t.Uo.next();t.Fo.set(r,new Fi(n)),t.Oo=t.Oo.insert(n,r),Qr(t.remoteStore,new tr(zt(Lt(n.path)),r,2,O.T))}}async function es(t,e,n){const r=v(t),i=[],s=[],o=[];r.xo.isEmpty()||(r.xo.forEach((t,a)=>{o.push(r.Ko(a,e,n).then(t=>{if(t){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,t.fromCache?"not-current":"current"),i.push(t);const e=hr.kn(a.targetId,t);s.push(e)}}))}),await Promise.all(o),r.No.Tr(i),await async function(t,e){const n=v(t);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",t=>Qn.forEach(e,e=>Qn.forEach(e.Nn,r=>n.persistence.referenceDelegate.addReference(t,e.targetId,r)).next(()=>Qn.forEach(e.xn,r=>n.persistence.referenceDelegate.removeReference(t,e.targetId,r)))))}catch(t){if(!Xn(t))throw t;f("LocalStore","Failed to update sequence numbers: "+t)}for(const t of e){const e=t.targetId;if(!t.fromCache){const t=n.Un.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.Un=n.Un.insert(e,i)}}}(r.localStore,s))}async function ns(t,e){const n=v(t);if(!n.currentUser.isEqual(e)){f("SyncEngine","User change. New user:",e.toKey());const t=await mr(n.localStore,e);n.currentUser=e,function(t,e){t.Bo.forEach(t=>{t.forEach(t=>{t.reject(new w(b.CANCELLED,"'waitForPendingWrites' promise is rejected due to a user change."))})}),t.Bo.clear()}(n),n.sharedClientState.handleUserChange(e,t.removedBatchIds,t.addedBatchIds),await es(n,t.Wn)}}function rs(t,e){const n=v(t),r=n.Fo.get(e);if(r&&r.Co)return qe().add(r.key);{let t=qe();const r=n.ko.get(e);if(!r)return t;for(const e of r){const r=n.xo.get(e);t=t.unionWith(r.view.To)}return t}}function is(t){const e=v(t);return e.remoteStore.remoteSyncer.applyRemoteEvent=qi.bind(null,e),e.remoteStore.remoteSyncer.getRemoteKeysForTarget=rs.bind(null,e),e.remoteStore.remoteSyncer.rejectListen=Hi.bind(null,e),e.No.Tr=Ri.bind(null,e.eventManager),e.No.jo=Ni.bind(null,e.eventManager),e}function ss(t){const e=v(t);return e.remoteStore.remoteSyncer.applySuccessfulWrite=Gi.bind(null,e),e.remoteStore.remoteSyncer.rejectFailedWrite=Ki.bind(null,e),e}class os{constructor(){this.synchronizeTabs=!1}async initialize(t){this.N=Vr(t.databaseInfo.databaseId),this.sharedClientState=this.Wo(t),this.persistence=this.Go(t),await this.persistence.start(),this.gcScheduler=this.zo(t),this.localStore=this.Ho(t)}zo(t){return null}Ho(t){return pr(this.persistence,new fr,t.initialUser,this.N)}Go(t){return new kr(Nr.Ns,this.N)}Wo(t){return new xr}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class as{async initialize(t,e){this.localStore||(this.localStore=t.localStore,this.sharedClientState=t.sharedClientState,this.datastore=this.createDatastore(e),this.remoteStore=this.createRemoteStore(e),this.eventManager=this.createEventManager(e),this.syncEngine=this.createSyncEngine(e,!t.synchronizeTabs),this.sharedClientState.onlineStateHandler=t=>$i(this.syncEngine,t,1),this.remoteStore.remoteSyncer.handleCredentialChange=ns.bind(null,this.syncEngine),await vi(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(t){return new Oi}createDatastore(t){const e=Vr(t.databaseInfo.databaseId),n=(r=t.databaseInfo,new Fr(r));var r;return function(t,e,n){return new Hr(t,e,n)}(t.credentials,n,e)}createRemoteStore(t){return e=this.localStore,n=this.datastore,r=t.asyncQueue,i=t=>$i(this.syncEngine,t,0),s=Lr.bt()?new Lr:new Pr,new Kr(e,n,r,i,s);var e,n,r,i,s}createSyncEngine(t,e){return function(t,e,n,r,i,s,o){const a=new Ui(t,e,n,r,i,s);return o&&(a.qo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,t.initialUser,t.maxConcurrentLimboResolutions,e)}terminate(){return async function(t){const e=v(t);f("RemoteStore","RemoteStore shutting down."),e.Kr.add(5),await Yr(e),e.Qr.shutdown(),e.Wr.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class cs{constructor(t){this.observer=t,this.muted=!1}next(t){this.observer.next&&this.Yo(this.observer.next,t)}error(t){this.observer.error?this.Yo(this.observer.error,t):console.error("Uncaught Error in snapshot listener:",t)}Xo(){this.muted=!0}Yo(t,e){this.muted||setTimeout(()=>{this.muted||t(e)},0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class us{constructor(t,e,n){this.credentials=t,this.asyncQueue=e,this.databaseInfo=n,this.user=c.UNAUTHENTICATED,this.clientId=k.I(),this.credentialListener=()=>Promise.resolve(),this.credentials.start(e,async t=>{f("FirestoreClient","Received user=",t.uid),await this.credentialListener(t),this.user=t})}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,credentials:this.credentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(t){this.credentialListener=t}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new w(b.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const t=new E;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted(async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.credentials.shutdown(),t.resolve()}catch(e){const n=Ti(e,"Failed to shutdown persistence");t.reject(n)}}),t.promise}}async function ls(t,e){t.asyncQueue.verifyOperationInProgress(),f("FirestoreClient","Initializing OfflineComponentProvider");const n=await t.getConfiguration();await e.initialize(n);let r=n.initialUser;t.setCredentialChangeListener(async t=>{r.isEqual(t)||(await mr(e.localStore,t),r=t)}),e.persistence.setDatabaseDeletedListener(()=>t.terminate()),t.offlineComponents=e}async function hs(t,e){t.asyncQueue.verifyOperationInProgress();const n=await fs(t);f("FirestoreClient","Initializing OnlineComponentProvider");const r=await t.getConfiguration();await e.initialize(n,r),t.setCredentialChangeListener(t=>async function(t,e){const n=v(t);n.asyncQueue.verifyOperationInProgress(),f("RemoteStore","RemoteStore received new credentials");const r=ni(n);n.Kr.add(3),await Yr(n),r&&n.Wr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(e),n.Kr.delete(3),await Wr(n)}(e.remoteStore,t)),t.onlineComponents=e}async function fs(t){return t.offlineComponents||(f("FirestoreClient","Using default OfflineComponentProvider"),await ls(t,new os)),t.offlineComponents}async function ds(t){return t.onlineComponents||(f("FirestoreClient","Using default OnlineComponentProvider"),await hs(t,new as)),t.onlineComponents}function ps(t){return ds(t).then(t=>t.syncEngine)}async function ms(t){const e=await ds(t),n=e.eventManager;return n.onListen=Vi.bind(null,e.syncEngine),n.onUnlisten=zi.bind(null,e.syncEngine),n}function gs(t,e,n={}){const r=new E;return t.asyncQueue.enqueueAndForget(async()=>function(t,e,n,r,i){const s=new cs({next:s=>{e.enqueueAndForget(()=>ki(t,o));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new w(b.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new w(b.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:t=>i.reject(t)}),o=new xi(Lt(n.path),s,{includeMetadataChanges:!0,uo:!0});return Ci(t,o)}(await ms(t),t.asyncQueue,e,n,r)),r.promise}class ys{constructor(t,e,n,r,i,s,o,a){this.databaseId=t,this.appId=e,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class vs{constructor(t,e){this.projectId=t,this.database=e||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(t){return t instanceof vs&&t.projectId===this.projectId&&t.database===this.database}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const bs=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ws(t,e,n){if(!n)throw new w(b.INVALID_ARGUMENT,`Function ${t}() cannot be called with an empty ${e}.`)}function Es(t){if(!X.isDocumentKey(t))throw new w(b.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${t} has ${t.length}.`)}function Ts(t){if(X.isDocumentKey(t))throw new w(b.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${t} has ${t.length}.`)}function _s(t){if(void 0===t)return"undefined";if(null===t)return"null";if("string"==typeof t)return t.length>20&&(t=t.substring(0,20)+"..."),JSON.stringify(t);if("number"==typeof t||"boolean"==typeof t)return""+t;if("object"==typeof t){if(t instanceof Array)return"an array";{const e=function(t){if(t.constructor){const e=/function\s+([^\s(]+)\s*\(/.exec(t.constructor.toString());if(e&&e.length>1)return e[1]}return null}(t);return e?`a custom ${e} object`:"an object"}}return"function"==typeof t?"a function":g()}function Ss(t,e){if("_delegate"in t&&(t=t._delegate),!(t instanceof e)){if(e.name===t.constructor.name)throw new w(b.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=_s(t);throw new w(b.INVALID_ARGUMENT,`Expected type '${e.name}', but it was: ${n}`)}}return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Is{constructor(t){var e;if(void 0===t.host){if(void 0!==t.ssl)throw new w(b.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=t.host,this.ssl=null===(e=t.ssl)||void 0===e||e;if(this.credentials=t.credentials,this.ignoreUndefinedProperties=!!t.ignoreUndefinedProperties,void 0===t.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==t.cacheSizeBytes&&t.cacheSizeBytes<1048576)throw new w(b.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=t.cacheSizeBytes}this.experimentalForceLongPolling=!!t.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!t.experimentalAutoDetectLongPolling,this.useFetchStreams=!!t.useFetchStreams,function(t,e,n,r){if(!0===e&&!0===r)throw new w(b.INVALID_ARGUMENT,`${t} and ${n} cannot be used together.`)}("experimentalForceLongPolling",t.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",t.experimentalAutoDetectLongPolling)}isEqual(t){return this.host===t.host&&this.ssl===t.ssl&&this.credentials===t.credentials&&this.cacheSizeBytes===t.cacheSizeBytes&&this.experimentalForceLongPolling===t.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===t.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===t.ignoreUndefinedProperties&&this.useFetchStreams===t.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class As{constructor(t,e){this._credentials=e,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new Is({}),this._settingsFrozen=!1,t instanceof vs?this._databaseId=t:(this._app=t,this._databaseId=function(t){if(!Object.prototype.hasOwnProperty.apply(t.options,["projectId"]))throw new w(b.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new vs(t.options.projectId)}(t))}get app(){if(!this._app)throw new w(b.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(t){if(this._settingsFrozen)throw new w(b.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new Is(t),void 0!==t.credentials&&(this._credentials=function(t){if(!t)return new _;switch(t.type){case"gapi":t.client;return y(!("object"!=typeof r.d||null===r.d||!r.d.auth||!r.d.auth.getAuthHeaderValueForFirstParty)),new A(r.d,t.sessionIndex||"0",t.iamToken||null);case"provider":return t.client;default:throw new w(b.INVALID_ARGUMENT,"makeCredentialsProvider failed due to invalid credential type")}}(t.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(t){const e=bs.get(t);e&&(f("ComponentProvider","Removing Datastore"),bs.delete(t),e.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Os{constructor(t,e,n){this.converter=e,this._key=n,this.type="document",this.firestore=t}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new ks(this.firestore,this.converter,this._key.path.popLast())}withConverter(t){return new Os(this.firestore,t,this._key)}}class Cs{constructor(t,e,n){this.converter=e,this._query=n,this.type="query",this.firestore=t}withConverter(t){return new Cs(this.firestore,t,this._query)}}class ks extends Cs{constructor(t,e,n){super(t,e,Lt(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const t=this._path.popLast();return t.isEmpty()?null:new Os(this.firestore,null,new X(t))}withConverter(t){return new ks(this.firestore,t,this._path)}}function Rs(t,e,...n){if(t=Object(o.f)(t),ws("collection","path",e),t instanceof As){const r=F.fromString(e,...n);return Ts(r),new ks(t,null,r)}{if(!(t instanceof Os||t instanceof ks))throw new w(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Ts(r),new ks(t.firestore,null,r)}}function Ns(t,e,...n){if(t=Object(o.f)(t),1===arguments.length&&(e=k.I()),ws("doc","path",e),t instanceof As){const r=F.fromString(e,...n);return Es(r),new Os(t,null,new X(r))}{if(!(t instanceof Os||t instanceof ks))throw new w(b.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=t._path.child(F.fromString(e,...n));return Es(r),new Os(t.firestore,t instanceof ks?t.converter:null,new X(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ds{constructor(){this.fa=Promise.resolve(),this.da=[],this.wa=!1,this._a=[],this.ma=null,this.ga=!1,this.ya=!1,this.pa=[],this.rr=new Br(this,"async_queue_retry"),this.Ea=()=>{const t=Ur();t&&f("AsyncQueue","Visibility state changed to "+t.visibilityState),this.rr.tr()};const t=Ur();t&&"function"==typeof t.addEventListener&&t.addEventListener("visibilitychange",this.Ea)}get isShuttingDown(){return this.wa}enqueueAndForget(t){this.enqueue(t)}enqueueAndForgetEvenWhileRestricted(t){this.Ta(),this.Ia(t)}enterRestrictedMode(t){if(!this.wa){this.wa=!0,this.ya=t||!1;const e=Ur();e&&"function"==typeof e.removeEventListener&&e.removeEventListener("visibilitychange",this.Ea)}}enqueue(t){if(this.Ta(),this.wa)return new Promise(()=>{});const e=new E;return this.Ia(()=>this.wa&&this.ya?Promise.resolve():(t().then(e.resolve,e.reject),e.promise)).then(()=>e.promise)}enqueueRetryable(t){this.enqueueAndForget(()=>(this.da.push(t),this.Aa()))}async Aa(){if(0!==this.da.length){try{await this.da[0](),this.da.shift(),this.rr.reset()}catch(t){if(!Xn(t))throw t;f("AsyncQueue","Operation failed with retryable error: "+t)}this.da.length>0&&this.rr.Xi(()=>this.Aa())}}Ia(t){const e=this.fa.then(()=>(this.ga=!0,t().catch(t=>{throw this.ma=t,this.ga=!1,d("INTERNAL UNHANDLED ERROR: ",function(t){let e=t.message||"";return t.stack&&(e=t.stack.includes(t.message)?t.stack:t.message+"\n"+t.stack),e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)),t}).then(t=>(this.ga=!1,t))));return this.fa=e,e}enqueueAfterDelay(t,e,n){this.Ta(),this.pa.indexOf(t)>-1&&(e=0);const r=Ei.createAndSchedule(this,t,e,n,t=>this.Ra(t));return this._a.push(r),r}Ta(){this.ma&&g()}verifyOperationInProgress(){}async ba(){let t;do{t=this.fa,await t}while(t!==this.fa)}Pa(t){for(const e of this._a)if(e.timerId===t)return!0;return!1}va(t){return this.ba().then(()=>{this._a.sort((t,e)=>t.targetTimeMs-e.targetTimeMs);for(const e of this._a)if(e.skipDelay(),"all"!==t&&e.timerId===t)break;return this.ba()})}Va(t){this.pa.push(t)}Ra(t){const e=this._a.indexOf(t);this._a.splice(e,1)}}function xs(t){return function(t,e){if("object"!=typeof t||null===t)return!1;const n=t;for(const t of["next","error","complete"])if(t in n&&"function"==typeof n[t])return!0;return!1}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(t)}class Ps extends As{constructor(t,e){super(t,e),this.type="firestore",this._queue=new Ds,this._persistenceKey="name"in t?t.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ms(this),this._firestoreClient.terminate()}}function Ls(t=Object(r.e)()){return Object(r.b)(t,"firestore").getImmediate()}function js(t){return t._firestoreClient||Ms(t),t._firestoreClient.verifyNotTerminated(),t._firestoreClient}function Ms(t){var e;const n=t._freezeSettings(),r=function(t,e,n,r){return new ys(t,e,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(t._databaseId,(null===(e=t._app)||void 0===e?void 0:e.options.appId)||"",t._persistenceKey,n);t._firestoreClient=new us(t._credentials,t._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fs{constructor(...t){for(let e=0;e<t.length;++e)if(0===t[e].length)throw new w(b.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new V(t)}isEqual(t){return this._internalPath.isEqual(t._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Us{constructor(t){this._byteString=t}static fromBase64String(t){try{return new Us(z.fromBase64String(t))}catch(t){throw new w(b.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+t)}}static fromUint8Array(t){return new Us(z.fromUint8Array(t))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(t){return this._byteString.isEqual(t._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Vs{constructor(t,e){if(!isFinite(t)||t<-90||t>90)throw new w(b.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+t);if(!isFinite(e)||e<-180||e>180)throw new w(b.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+e);this._lat=t,this._long=e}get latitude(){return this._lat}get longitude(){return this._long}isEqual(t){return this._lat===t._lat&&this._long===t._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(t){return R(this._lat,t._lat)||R(this._long,t._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Bs=new RegExp("[~\\*/\\[\\]]");function zs(t,e,n){if(e.search(Bs)>=0)throw qs(`Invalid field path (${e}). Paths must not contain '~', '*', '/', '[', or ']'`,t,!1,void 0,n);try{return new Fs(...e.split("."))._internalPath}catch(r){throw qs(`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,t,!1,void 0,n)}}function qs(t,e,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${e}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let c="";return(s||o)&&(c+=" (found",s&&(c+=" in field "+r),o&&(c+=" in document "+i),c+=")"),new w(b.INVALID_ARGUMENT,a+t+c)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class $s{constructor(t,e,n,r,i){this._firestore=t,this._userDataWriter=e,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Os(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const t=new Hs(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(t)}return this._userDataWriter.convertValue(this._document.data.value)}}get(t){if(this._document){const e=this._document.data.field(Gs("DocumentSnapshot.get",t));if(null!==e)return this._userDataWriter.convertValue(e)}}}class Hs extends $s{data(){return super.data()}}function Gs(t,e){return"string"==typeof e?zs(t,e):e instanceof Fs?e._internalPath:e._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ks{constructor(t,e){this.hasPendingWrites=t,this.fromCache=e}isEqual(t){return this.hasPendingWrites===t.hasPendingWrites&&this.fromCache===t.fromCache}}class Ws extends $s{constructor(t,e,n,r,i,s){super(t,e,n,r,s),this._firestore=t,this._firestoreImpl=t,this.metadata=i}exists(){return super.exists()}data(t={}){if(this._document){if(this._converter){const e=new Ys(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(e,t)}return this._userDataWriter.convertValue(this._document.data.value,t.serverTimestamps)}}get(t,e={}){if(this._document){const n=this._document.data.field(Gs("DocumentSnapshot.get",t));if(null!==n)return this._userDataWriter.convertValue(n,e.serverTimestamps)}}}class Ys extends Ws{data(t={}){return super.data(t)}}class Qs{constructor(t,e,n,r){this._firestore=t,this._userDataWriter=e,this._snapshot=r,this.metadata=new Ks(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const t=[];return this.forEach(e=>t.push(e)),t}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(t,e){this._snapshot.docs.forEach(n=>{t.call(e,new Ys(this._firestore,this._userDataWriter,n.key,n,new Ks(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))})}docChanges(t={}){const e=!!t.includeMetadataChanges;if(e&&this._snapshot.excludesMetadataChanges)throw new w(b.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===e||(this._cachedChanges=function(t,e){if(t._snapshot.oldDocs.isEmpty()){let e=0;return t._snapshot.docChanges.map(n=>({type:"added",doc:new Ys(t._firestore,t._userDataWriter,n.doc.key,n.doc,new Ks(t._snapshot.mutatedKeys.has(n.doc.key),t._snapshot.fromCache),t.query.converter),oldIndex:-1,newIndex:e++}))}{let n=t._snapshot.oldDocs;return t._snapshot.docChanges.filter(t=>e||3!==t.type).map(e=>{const r=new Ys(t._firestore,t._userDataWriter,e.doc.key,e.doc,new Ks(t._snapshot.mutatedKeys.has(e.doc.key),t._snapshot.fromCache),t.query.converter);let i=-1,s=-1;return 0!==e.type&&(i=n.indexOf(e.doc.key),n=n.delete(e.doc.key)),1!==e.type&&(n=n.add(e.doc),s=n.indexOf(e.doc.key)),{type:Xs(e.type),doc:r,oldIndex:i,newIndex:s}})}}(this,e),this._cachedChangesIncludeMetadataChanges=e),this._cachedChanges}}function Xs(t){switch(t){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return g()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Js(t){if(Mt(t)&&0===t.explicitOrderBy.length)throw new w(b.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}class Zs{}function to(t,...e){for(const n of e)t=n._apply(t);return t}class eo extends Zs{constructor(t,e){super(),this.Ka=t,this.Wa=e,this.type="orderBy"}_apply(t){const e=function(t,e,n){if(null!==t.startAt)throw new w(b.INVALID_ARGUMENT,"Invalid query. You must not call startAt() or startAfter() before calling orderBy().");if(null!==t.endAt)throw new w(b.INVALID_ARGUMENT,"Invalid query. You must not call endAt() or endBefore() before calling orderBy().");const r=new kt(e,n);return function(t,e){if(null===Ft(t)){const n=Ut(t);null!==n&&ro(t,n,e.field)}}(t,r),r}(t._query,this.Ka,this.Wa);return new Cs(t.firestore,t.converter,function(t,e){const n=t.explicitOrderBy.concat([e]);return new xt(t.path,t.collectionGroup,n,t.filters.slice(),t.limit,t.limitType,t.startAt,t.endAt)}(t._query,e))}}function no(t,e="asc"){const n=e,r=Gs("orderBy",t);return new eo(r,n)}function ro(t,e,n){if(!n.isEqual(e))throw new w(b.INVALID_ARGUMENT,`Invalid query. You have a where filter with an inequality (<, <=, !=, not-in, >, or >=) on field '${e.toString()}' and so you must also use '${e.toString()}' as your first argument to orderBy(), but your first orderBy() is on field '${n.toString()}' instead.`)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class io{convertValue(t,e="none"){switch(J(t)){case 0:return null;case 1:return t.booleanValue;case 2:return H(t.integerValue||t.doubleValue);case 3:return this.convertTimestamp(t.timestampValue);case 4:return this.convertServerTimestamp(t,e);case 5:return t.stringValue;case 6:return this.convertBytes(G(t.bytesValue));case 7:return this.convertReference(t.referenceValue);case 8:return this.convertGeoPoint(t.geoPointValue);case 9:return this.convertArray(t.arrayValue,e);case 10:return this.convertObject(t.mapValue,e);default:throw g()}}convertObject(t,e){const n={};return L(t.fields,(t,r)=>{n[t]=this.convertValue(r,e)}),n}convertGeoPoint(t){return new Vs(H(t.latitude),H(t.longitude))}convertArray(t,e){return(t.values||[]).map(t=>this.convertValue(t,e))}convertServerTimestamp(t,e){switch(e){case"previous":(function t(e){const n=e.mapValue.fields.__previous_value__;return K(n)?t(n):n})(t);return null==r.c?null:this.convertValue(r.c,e);case"estimate":return this.convertTimestamp(W(t));default:return null}}convertTimestamp(t){const e=$(t);return new D(e.seconds,e.nanos)}convertDocumentKey(t,e){const n=F.fromString(t);y(Nn(n));const r=new vs(n.get(1),n.get(3)),i=new X(n.popFirst(5));return r.isEqual(e)||d(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${e.projectId}/${e.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function so(t){t=Ss(t,Os);const e=Ss(t.firestore,Ps);return gs(js(e),t._key).then(n=>lo(e,t,n))}class oo extends io{constructor(t){super(),this.firestore=t}convertBytes(t){return new Us(t)}convertReference(t){const e=this.convertDocumentKey(t,this.firestore._databaseId);return new Os(this.firestore,null,e)}}function ao(t){return uo(Ss(t.firestore,Ps),[new Se(t._key,he.none())])}function co(t,...e){var n,r,i;t=Object(o.f)(t);let s={includeMetadataChanges:!1},a=0;"object"!=typeof e[a]||xs(e[a])||(s=e[a],a++);const c={includeMetadataChanges:s.includeMetadataChanges};if(xs(e[a])){const t=e[a];e[a]=null===(n=t.next)||void 0===n?void 0:n.bind(t),e[a+1]=null===(r=t.error)||void 0===r?void 0:r.bind(t),e[a+2]=null===(i=t.complete)||void 0===i?void 0:i.bind(t)}let u,l,h;if(t instanceof Os)l=Ss(t.firestore,Ps),h=Lt(t._key.path),u={next:n=>{e[a]&&e[a](lo(l,t,n))},error:e[a+1],complete:e[a+2]};else{const n=Ss(t,Cs);l=Ss(n.firestore,Ps),h=n._query;const r=new oo(l);u={next:t=>{e[a]&&e[a](new Qs(l,r,n,t))},error:e[a+1],complete:e[a+2]},Js(t._query)}return function(t,e,n,r){const i=new cs(r),s=new xi(e,i,n);return t.asyncQueue.enqueueAndForget(async()=>Ci(await ms(t),s)),()=>{i.Xo(),t.asyncQueue.enqueueAndForget(async()=>ki(await ms(t),s))}}(js(l),h,c,u)}function uo(t,e){return function(t,e){const n=new E;return t.asyncQueue.enqueueAndForget(async()=>async function(t,e,n){const r=ss(t);try{const t=await function(t,e){const n=v(t),r=D.now(),i=e.reduce((t,e)=>t.add(e.key),qe());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",t=>n.Qn.Pn(t,i).next(i=>{s=i;const o=[];for(const t of e){const e=ge(t,s.get(t.key));null!=e&&o.push(new we(t.key,e,ht(e.value.mapValue),he.exists(!0)))}return n.In.addMutationBatch(t,r,o,e)})).then(t=>(t.applyToLocalDocumentSet(s),{batchId:t.batchId,changes:s}))}(r.localStore,e);r.sharedClientState.addPendingMutation(t.batchId),function(t,e,n){let r=t.Lo[t.currentUser.toKey()];r||(r=new Ne(R)),r=r.insert(e,n),t.Lo[t.currentUser.toKey()]=r}(r,t.batchId,n),await es(r,t.changes),await ui(r.remoteStore)}catch(t){const e=Ti(t,"Failed to persist write");n.reject(e)}}(await ps(t),e,n)),n.promise}(js(t),e)}function lo(t,e,n){const r=n.docs.get(e._key),i=new oo(t);return new Ws(t,i,e._key,r,new Ks(n.hasPendingWrites,n.fromCache),e.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var ho;ho=r.a,u=ho,Object(r.c)(new i.a("firestore",(t,{options:e})=>{const n=t.getProvider("app").getImmediate(),r=new Ps(n,new S(t.getProvider("auth-internal")));return e=Object.assign({useFetchStreams:!0},e),r._setSettings(e),r},"PUBLIC")),Object(r.g)("@firebase/firestore","3.0.2",void 0)}).call(this,n(45))},function(t,e){var n;n=function(){return this}();try{n=n||new Function("return this")()}catch(t){"object"==typeof window&&(n=window)}t.exports=n},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t};function i(t){if(Array.isArray(t)){for(var e=0,n=Array(t.length);e<t.length;e++)n[e]=t[e];return n}return Array.from(t)}var s=e.isSafari=function(){return/^((?!chrome|android).)*safari/i.test(navigator.userAgent)},o=e.isJsons=function(t){return Array.isArray(t)&&t.every((function(t){return"object"===(void 0===t?"undefined":r(t))&&!(t instanceof Array)}))},a=e.isArrays=function(t){return Array.isArray(t)&&t.every((function(t){return Array.isArray(t)}))},c=e.jsonsHeaders=function(t){return Array.from(t.map((function(t){return Object.keys(t)})).reduce((function(t,e){return new Set([].concat(i(t),i(e)))}),[]))},u=e.jsons2arrays=function(t,e){var n=e=e||c(t),r=e;o(e)&&(n=e.map((function(t){return t.label})),r=e.map((function(t){return t.key})));var s=t.map((function(t){return r.map((function(e){return l(e,t)}))}));return[n].concat(i(s))},l=e.getHeaderValue=function(t,e){var n=t.replace(/\[([^\]]+)]/g,".$1").split(".").reduce((function(t,e,n,r){if(void 0!==t[e])return t[e];r.splice(1)}),e);return void 0===n?t in e?e[t]:"":n},h=e.elementOrEmpty=function(t){return t||0===t?t:""},f=e.joiner=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:",",n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:'"';return t.filter((function(t){return t})).map((function(t){return t.map((function(t){return h(t)})).map((function(t){return""+n+t+n})).join(e)})).join("\n")},d=e.arrays2csv=function(t,e,n,r){return f(e?[e].concat(i(t)):t,n,r)},p=e.jsons2csv=function(t,e,n,r){return f(u(t,e),n,r)},m=e.string2csv=function(t,e,n,r){return e?e.join(n)+"\n"+t:t},g=e.toCSV=function(t,e,n,r){if(o(t))return p(t,e,n,r);if(a(t))return d(t,e,n,r);if("string"==typeof t)return m(t,e,n);throw new TypeError('Data should be a "String", "Array of arrays" OR "Array of objects" ')};e.buildURI=function(t,e,n,r,i){var o=g(t,n,r,i),a=s()?"application/csv":"text/csv",c=new Blob([e?"\ufeff":"",o],{type:a}),u="data:"+a+";charset=utf-8,"+(e?"\ufeff":"")+o,l=window.URL||window.webkitURL;return void 0===l.createObjectURL?u:l.createObjectURL(c)}},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.PropsNotForwarded=e.defaultProps=e.propTypes=void 0;var r,i=n(13),s=((r=i)&&r.__esModule,n(51));e.propTypes={data:(0,s.oneOfType)([s.string,s.array]).isRequired,headers:s.array,target:s.string,separator:s.string,filename:s.string,uFEFF:s.bool,onClick:s.func,asyncOnClick:s.bool},e.defaultProps={separator:",",filename:"generatedBy_react-csv.csv",uFEFF:!0,asyncOnClick:!1},e.PropsNotForwarded=["data","headers"]},function(t,e,n){"use strict";var r=n(9),i=n(14),s=n(28),o=n(33),a=n(8),c=n(34),u=n(40),l=n(41),h=n(43),f=a.createElement,d=a.createFactory,p=a.cloneElement,m=r,g={Children:{map:s.map,forEach:s.forEach,count:s.count,toArray:s.toArray,only:h},Component:i.Component,PureComponent:i.PureComponent,createElement:f,cloneElement:p,isValidElement:a.isValidElement,PropTypes:c,createClass:l,createFactory:d,createMixin:function(t){return t},DOM:o,version:u,__spread:m};t.exports=g},function(t,e,n){"use strict";t.exports={}},function(t,e,n){"use strict";t.exports=function(){}},function(t,e,n){"use strict";var r=n(29),i=n(8),s=n(16),o=n(30),a=r.twoArgumentPooler,c=r.fourArgumentPooler,u=/\/+/g;function l(t){return(""+t).replace(u,"$&/")}function h(t,e){this.func=t,this.context=e,this.count=0}function f(t,e,n){var r=t.func,i=t.context;r.call(i,e,t.count++)}function d(t,e,n,r){this.result=t,this.keyPrefix=e,this.func=n,this.context=r,this.count=0}function p(t,e,n){var r=t.result,o=t.keyPrefix,a=t.func,c=t.context,u=a.call(c,e,t.count++);Array.isArray(u)?m(u,r,n,s.thatReturnsArgument):null!=u&&(i.isValidElement(u)&&(u=i.cloneAndReplaceKey(u,o+(!u.key||e&&e.key===u.key?"":l(u.key)+"/")+n)),r.push(u))}function m(t,e,n,r,i){var s="";null!=n&&(s=l(n)+"/");var a=d.getPooled(e,s,r,i);o(t,p,a),d.release(a)}function g(t,e,n){return null}h.prototype.destructor=function(){this.func=null,this.context=null,this.count=0},r.addPoolingTo(h,a),d.prototype.destructor=function(){this.result=null,this.keyPrefix=null,this.func=null,this.context=null,this.count=0},r.addPoolingTo(d,c);var y={forEach:function(t,e,n){if(null==t)return t;var r=h.getPooled(e,n);o(t,f,r),h.release(r)},map:function(t,e,n){if(null==t)return t;var r=[];return m(t,r,null,e,n),r},mapIntoWithKeyPrefixInternal:m,count:function(t,e){return o(t,g,null)},toArray:function(t){var e=[];return m(t,e,null,s.thatReturnsArgument),e}};t.exports=y},function(t,e,n){"use strict";var r=n(10),i=(n(11),function(t){if(this.instancePool.length){var e=this.instancePool.pop();return this.call(e,t),e}return new this(t)}),s=function(t){t instanceof this||r("25"),t.destructor(),this.instancePool.length<this.poolSize&&this.instancePool.push(t)},o=i,a={addPoolingTo:function(t,e){var n=t;return n.instancePool=[],n.getPooled=e||o,n.poolSize||(n.poolSize=10),n.release=s,n},oneArgumentPooler:i,twoArgumentPooler:function(t,e){if(this.instancePool.length){var n=this.instancePool.pop();return this.call(n,t,e),n}return new this(t,e)},threeArgumentPooler:function(t,e,n){if(this.instancePool.length){var r=this.instancePool.pop();return this.call(r,t,e,n),r}return new this(t,e,n)},fourArgumentPooler:function(t,e,n,r){if(this.instancePool.length){var i=this.instancePool.pop();return this.call(i,t,e,n,r),i}return new this(t,e,n,r)}};t.exports=a},function(t,e,n){"use strict";var r=n(10),i=(n(18),n(19)),s=n(31),o=(n(11),n(32));n(12);function a(t,e){return t&&"object"==typeof t&&null!=t.key?o.escape(t.key):e.toString(36)}t.exports=function(t,e,n){return null==t?0:function t(e,n,c,u){var l,h=typeof e;if("undefined"!==h&&"boolean"!==h||(e=null),null===e||"string"===h||"number"===h||"object"===h&&e.$$typeof===i)return c(u,e,""===n?"."+a(e,0):n),1;var f=0,d=""===n?".":n+":";if(Array.isArray(e))for(var p=0;p<e.length;p++)f+=t(l=e[p],d+a(l,p),c,u);else{var m=s(e);if(m){var g,y=m.call(e);if(m!==e.entries)for(var v=0;!(g=y.next()).done;)f+=t(l=g.value,d+a(l,v++),c,u);else for(;!(g=y.next()).done;){var b=g.value;b&&(f+=t(l=b[1],d+o.escape(b[0])+":"+a(l,0),c,u))}}else if("object"===h){var w=String(e);r("31","[object Object]"===w?"object with keys {"+Object.keys(e).join(", ")+"}":w,"")}}return f}(t,"",e,n)}},function(t,e,n){"use strict";var r="function"==typeof Symbol&&Symbol.iterator;t.exports=function(t){var e=t&&(r&&t[r]||t["@@iterator"]);if("function"==typeof e)return e}},function(t,e,n){"use strict";var r={escape:function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,(function(t){return e[t]}))},unescape:function(t){var e={"=0":"=","=2":":"};return(""+("."===t[0]&&"$"===t[1]?t.substring(2):t.substring(1))).replace(/(=0|=2)/g,(function(t){return e[t]}))}};t.exports=r},function(t,e,n){"use strict";var r=n(8).createFactory,i={a:r("a"),abbr:r("abbr"),address:r("address"),area:r("area"),article:r("article"),aside:r("aside"),audio:r("audio"),b:r("b"),base:r("base"),bdi:r("bdi"),bdo:r("bdo"),big:r("big"),blockquote:r("blockquote"),body:r("body"),br:r("br"),button:r("button"),canvas:r("canvas"),caption:r("caption"),cite:r("cite"),code:r("code"),col:r("col"),colgroup:r("colgroup"),data:r("data"),datalist:r("datalist"),dd:r("dd"),del:r("del"),details:r("details"),dfn:r("dfn"),dialog:r("dialog"),div:r("div"),dl:r("dl"),dt:r("dt"),em:r("em"),embed:r("embed"),fieldset:r("fieldset"),figcaption:r("figcaption"),figure:r("figure"),footer:r("footer"),form:r("form"),h1:r("h1"),h2:r("h2"),h3:r("h3"),h4:r("h4"),h5:r("h5"),h6:r("h6"),head:r("head"),header:r("header"),hgroup:r("hgroup"),hr:r("hr"),html:r("html"),i:r("i"),iframe:r("iframe"),img:r("img"),input:r("input"),ins:r("ins"),kbd:r("kbd"),keygen:r("keygen"),label:r("label"),legend:r("legend"),li:r("li"),link:r("link"),main:r("main"),map:r("map"),mark:r("mark"),menu:r("menu"),menuitem:r("menuitem"),meta:r("meta"),meter:r("meter"),nav:r("nav"),noscript:r("noscript"),object:r("object"),ol:r("ol"),optgroup:r("optgroup"),option:r("option"),output:r("output"),p:r("p"),param:r("param"),picture:r("picture"),pre:r("pre"),progress:r("progress"),q:r("q"),rp:r("rp"),rt:r("rt"),ruby:r("ruby"),s:r("s"),samp:r("samp"),script:r("script"),section:r("section"),select:r("select"),small:r("small"),source:r("source"),span:r("span"),strong:r("strong"),style:r("style"),sub:r("sub"),summary:r("summary"),sup:r("sup"),table:r("table"),tbody:r("tbody"),td:r("td"),textarea:r("textarea"),tfoot:r("tfoot"),th:r("th"),thead:r("thead"),time:r("time"),title:r("title"),tr:r("tr"),track:r("track"),u:r("u"),ul:r("ul"),var:r("var"),video:r("video"),wbr:r("wbr"),circle:r("circle"),clipPath:r("clipPath"),defs:r("defs"),ellipse:r("ellipse"),g:r("g"),image:r("image"),line:r("line"),linearGradient:r("linearGradient"),mask:r("mask"),path:r("path"),pattern:r("pattern"),polygon:r("polygon"),polyline:r("polyline"),radialGradient:r("radialGradient"),rect:r("rect"),stop:r("stop"),svg:r("svg"),text:r("text"),tspan:r("tspan")};t.exports=i},function(t,e,n){"use strict";var r=n(8).isValidElement,i=n(35);t.exports=i(r)},function(t,e,n){"use strict";var r=n(36);t.exports=function(t){return r(t,!1)}},function(t,e,n){"use strict";var r=n(37),i=n(9),s=n(20),o=n(39),a=Function.call.bind(Object.prototype.hasOwnProperty);function c(){return null}t.exports=function(t,e){var n="function"==typeof Symbol&&Symbol.iterator;var u={array:d("array"),bool:d("boolean"),func:d("function"),number:d("number"),object:d("object"),string:d("string"),symbol:d("symbol"),any:f(c),arrayOf:function(t){return f((function(e,n,r,i,o){if("function"!=typeof t)return new h("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside arrayOf.");var a=e[n];if(!Array.isArray(a))return new h("Invalid "+i+" `"+o+"` of type `"+m(a)+"` supplied to `"+r+"`, expected an array.");for(var c=0;c<a.length;c++){var u=t(a,c,r,i,o+"["+c+"]",s);if(u instanceof Error)return u}return null}))},element:f((function(e,n,r,i,s){var o=e[n];return t(o)?null:new h("Invalid "+i+" `"+s+"` of type `"+m(o)+"` supplied to `"+r+"`, expected a single ReactElement.")})),elementType:f((function(t,e,n,i,s){var o=t[e];return r.isValidElementType(o)?null:new h("Invalid "+i+" `"+s+"` of type `"+m(o)+"` supplied to `"+n+"`, expected a single ReactElement type.")})),instanceOf:function(t){return f((function(e,n,r,i,s){if(!(e[n]instanceof t)){var o=t.name||"<<anonymous>>";return new h("Invalid "+i+" `"+s+"` of type `"+function(t){if(!t.constructor||!t.constructor.name)return"<<anonymous>>";return t.constructor.name}(e[n])+"` supplied to `"+r+"`, expected instance of `"+o+"`.")}return null}))},node:f((function(t,e,n,r,i){return p(t[e])?null:new h("Invalid "+r+" `"+i+"` supplied to `"+n+"`, expected a ReactNode.")})),objectOf:function(t){return f((function(e,n,r,i,o){if("function"!=typeof t)return new h("Property `"+o+"` of component `"+r+"` has invalid PropType notation inside objectOf.");var c=e[n],u=m(c);if("object"!==u)return new h("Invalid "+i+" `"+o+"` of type `"+u+"` supplied to `"+r+"`, expected an object.");for(var l in c)if(a(c,l)){var f=t(c,l,r,i,o+"."+l,s);if(f instanceof Error)return f}return null}))},oneOf:function(t){if(!Array.isArray(t))return c;return f((function(e,n,r,i,s){for(var o=e[n],a=0;a<t.length;a++)if(l(o,t[a]))return null;var c=JSON.stringify(t,(function(t,e){return"symbol"===g(e)?String(e):e}));return new h("Invalid "+i+" `"+s+"` of value `"+String(o)+"` supplied to `"+r+"`, expected one of "+c+".")}))},oneOfType:function(t){if(!Array.isArray(t))return c;for(var e=0;e<t.length;e++){var n=t[e];if("function"!=typeof n)return y(n),c}return f((function(e,n,r,i,o){for(var a=0;a<t.length;a++){if(null==(0,t[a])(e,n,r,i,o,s))return null}return new h("Invalid "+i+" `"+o+"` supplied to `"+r+"`.")}))},shape:function(t){return f((function(e,n,r,i,o){var a=e[n],c=m(a);if("object"!==c)return new h("Invalid "+i+" `"+o+"` of type `"+c+"` supplied to `"+r+"`, expected `object`.");for(var u in t){var l=t[u];if(l){var f=l(a,u,r,i,o+"."+u,s);if(f)return f}}return null}))},exact:function(t){return f((function(e,n,r,o,a){var c=e[n],u=m(c);if("object"!==u)return new h("Invalid "+o+" `"+a+"` of type `"+u+"` supplied to `"+r+"`, expected `object`.");var l=i({},e[n],t);for(var f in l){var d=t[f];if(!d)return new h("Invalid "+o+" `"+a+"` key `"+f+"` supplied to `"+r+"`.\nBad object: "+JSON.stringify(e[n],null,"  ")+"\nValid keys: "+JSON.stringify(Object.keys(t),null,"  "));var p=d(c,f,r,o,a+"."+f,s);if(p)return p}return null}))}};function l(t,e){return t===e?0!==t||1/t==1/e:t!=t&&e!=e}function h(t){this.message=t,this.stack=""}function f(t){function n(n,r,i,o,a,c,u){if((o=o||"<<anonymous>>",c=c||i,u!==s)&&e){var l=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use `PropTypes.checkPropTypes()` to call them. Read more at http://fb.me/use-check-prop-types");throw l.name="Invariant Violation",l}return null==r[i]?n?null===r[i]?new h("The "+a+" `"+c+"` is marked as required in `"+o+"`, but its value is `null`."):new h("The "+a+" `"+c+"` is marked as required in `"+o+"`, but its value is `undefined`."):null:t(r,i,o,a,c)}var r=n.bind(null,!1);return r.isRequired=n.bind(null,!0),r}function d(t){return f((function(e,n,r,i,s,o){var a=e[n];return m(a)!==t?new h("Invalid "+i+" `"+s+"` of type `"+g(a)+"` supplied to `"+r+"`, expected `"+t+"`."):null}))}function p(e){switch(typeof e){case"number":case"string":case"undefined":return!0;case"boolean":return!e;case"object":if(Array.isArray(e))return e.every(p);if(null===e||t(e))return!0;var r=function(t){var e=t&&(n&&t[n]||t["@@iterator"]);if("function"==typeof e)return e}(e);if(!r)return!1;var i,s=r.call(e);if(r!==e.entries){for(;!(i=s.next()).done;)if(!p(i.value))return!1}else for(;!(i=s.next()).done;){var o=i.value;if(o&&!p(o[1]))return!1}return!0;default:return!1}}function m(t){var e=typeof t;return Array.isArray(t)?"array":t instanceof RegExp?"object":function(t,e){return"symbol"===t||!!e&&("Symbol"===e["@@toStringTag"]||"function"==typeof Symbol&&e instanceof Symbol)}(e,t)?"symbol":e}function g(t){if(null==t)return""+t;var e=m(t);if("object"===e){if(t instanceof Date)return"date";if(t instanceof RegExp)return"regexp"}return e}function y(t){var e=g(t);switch(e){case"array":case"object":return"an "+e;case"boolean":case"date":case"regexp":return"a "+e;default:return e}}return h.prototype=Error.prototype,u.checkPropTypes=o,u.resetWarningCache=o.resetWarningCache,u.PropTypes=u,u}},function(t,e,n){"use strict";t.exports=n(38)},function(t,e,n){"use strict";
/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r="function"==typeof Symbol&&Symbol.for,i=r?Symbol.for("react.element"):60103,s=r?Symbol.for("react.portal"):60106,o=r?Symbol.for("react.fragment"):60107,a=r?Symbol.for("react.strict_mode"):60108,c=r?Symbol.for("react.profiler"):60114,u=r?Symbol.for("react.provider"):60109,l=r?Symbol.for("react.context"):60110,h=r?Symbol.for("react.async_mode"):60111,f=r?Symbol.for("react.concurrent_mode"):60111,d=r?Symbol.for("react.forward_ref"):60112,p=r?Symbol.for("react.suspense"):60113,m=r?Symbol.for("react.suspense_list"):60120,g=r?Symbol.for("react.memo"):60115,y=r?Symbol.for("react.lazy"):60116,v=r?Symbol.for("react.block"):60121,b=r?Symbol.for("react.fundamental"):60117,w=r?Symbol.for("react.responder"):60118,E=r?Symbol.for("react.scope"):60119;function T(t){if("object"==typeof t&&null!==t){var e=t.$$typeof;switch(e){case i:switch(t=t.type){case h:case f:case o:case c:case a:case p:return t;default:switch(t=t&&t.$$typeof){case l:case d:case y:case g:case u:return t;default:return e}}case s:return e}}}function _(t){return T(t)===f}e.AsyncMode=h,e.ConcurrentMode=f,e.ContextConsumer=l,e.ContextProvider=u,e.Element=i,e.ForwardRef=d,e.Fragment=o,e.Lazy=y,e.Memo=g,e.Portal=s,e.Profiler=c,e.StrictMode=a,e.Suspense=p,e.isAsyncMode=function(t){return _(t)||T(t)===h},e.isConcurrentMode=_,e.isContextConsumer=function(t){return T(t)===l},e.isContextProvider=function(t){return T(t)===u},e.isElement=function(t){return"object"==typeof t&&null!==t&&t.$$typeof===i},e.isForwardRef=function(t){return T(t)===d},e.isFragment=function(t){return T(t)===o},e.isLazy=function(t){return T(t)===y},e.isMemo=function(t){return T(t)===g},e.isPortal=function(t){return T(t)===s},e.isProfiler=function(t){return T(t)===c},e.isStrictMode=function(t){return T(t)===a},e.isSuspense=function(t){return T(t)===p},e.isValidElementType=function(t){return"string"==typeof t||"function"==typeof t||t===o||t===f||t===c||t===a||t===p||t===m||"object"==typeof t&&null!==t&&(t.$$typeof===y||t.$$typeof===g||t.$$typeof===u||t.$$typeof===l||t.$$typeof===d||t.$$typeof===b||t.$$typeof===w||t.$$typeof===E||t.$$typeof===v)},e.typeOf=T},function(t,e,n){"use strict";function r(t,e,n,r,i){}r.resetWarningCache=function(){0},t.exports=r},function(t,e,n){"use strict";t.exports="15.7.0"},function(t,e,n){"use strict";var r=n(14).Component,i=n(8).isValidElement,s=n(15),o=n(42);t.exports=o(r,i,s)},function(t,e,n){"use strict";var r=n(9),i={};function s(t,e,n,r,i,s,o,a){if(!t){var c;if(void 0===e)c=new Error("Minified exception occurred; use the non-minified dev environment for the full error message and additional helpful warnings.");else{var u=[n,r,i,s,o,a],l=0;(c=new Error(e.replace(/%s/g,(function(){return u[l++]})))).name="Invariant Violation"}throw c.framesToPop=1,c}}t.exports=function(t,e,n){var o=[],a={mixins:"DEFINE_MANY",statics:"DEFINE_MANY",propTypes:"DEFINE_MANY",contextTypes:"DEFINE_MANY",childContextTypes:"DEFINE_MANY",getDefaultProps:"DEFINE_MANY_MERGED",getInitialState:"DEFINE_MANY_MERGED",getChildContext:"DEFINE_MANY_MERGED",render:"DEFINE_ONCE",componentWillMount:"DEFINE_MANY",componentDidMount:"DEFINE_MANY",componentWillReceiveProps:"DEFINE_MANY",shouldComponentUpdate:"DEFINE_ONCE",componentWillUpdate:"DEFINE_MANY",componentDidUpdate:"DEFINE_MANY",componentWillUnmount:"DEFINE_MANY",UNSAFE_componentWillMount:"DEFINE_MANY",UNSAFE_componentWillReceiveProps:"DEFINE_MANY",UNSAFE_componentWillUpdate:"DEFINE_MANY",updateComponent:"OVERRIDE_BASE"},c={getDerivedStateFromProps:"DEFINE_MANY_MERGED"},u={displayName:function(t,e){t.displayName=e},mixins:function(t,e){if(e)for(var n=0;n<e.length;n++)h(t,e[n])},childContextTypes:function(t,e){t.childContextTypes=r({},t.childContextTypes,e)},contextTypes:function(t,e){t.contextTypes=r({},t.contextTypes,e)},getDefaultProps:function(t,e){t.getDefaultProps?t.getDefaultProps=d(t.getDefaultProps,e):t.getDefaultProps=e},propTypes:function(t,e){t.propTypes=r({},t.propTypes,e)},statics:function(t,e){!function(t,e){if(!e)return;for(var n in e){var r=e[n];if(e.hasOwnProperty(n)){if(s(!(n in u),'ReactClass: You are attempting to define a reserved property, `%s`, that shouldn\'t be on the "statics" key. Define it as an instance property instead; it will still be accessible on the constructor.',n),n in t)return s("DEFINE_MANY_MERGED"===(c.hasOwnProperty(n)?c[n]:null),"ReactClass: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",n),void(t[n]=d(t[n],r));t[n]=r}}}(t,e)},autobind:function(){}};function l(t,e){var n=a.hasOwnProperty(e)?a[e]:null;v.hasOwnProperty(e)&&s("OVERRIDE_BASE"===n,"ReactClassInterface: You are attempting to override `%s` from your class specification. Ensure that your method names do not overlap with React methods.",e),t&&s("DEFINE_MANY"===n||"DEFINE_MANY_MERGED"===n,"ReactClassInterface: You are attempting to define `%s` on your component more than once. This conflict may be due to a mixin.",e)}function h(t,n){if(n){s("function"!=typeof n,"ReactClass: You're attempting to use a component class or function as a mixin. Instead, just use a regular object."),s(!e(n),"ReactClass: You're attempting to use a component as a mixin. Instead, just use a regular object.");var r=t.prototype,i=r.__reactAutoBindPairs;for(var o in n.hasOwnProperty("mixins")&&u.mixins(t,n.mixins),n)if(n.hasOwnProperty(o)&&"mixins"!==o){var c=n[o],h=r.hasOwnProperty(o);if(l(h,o),u.hasOwnProperty(o))u[o](t,c);else{var f=a.hasOwnProperty(o);if("function"==typeof c&&!f&&!h&&!1!==n.autobind)i.push(o,c),r[o]=c;else if(h){var m=a[o];s(f&&("DEFINE_MANY_MERGED"===m||"DEFINE_MANY"===m),"ReactClass: Unexpected spec policy %s for key %s when mixing in component specs.",m,o),"DEFINE_MANY_MERGED"===m?r[o]=d(r[o],c):"DEFINE_MANY"===m&&(r[o]=p(r[o],c))}else r[o]=c}}}else;}function f(t,e){for(var n in s(t&&e&&"object"==typeof t&&"object"==typeof e,"mergeIntoWithNoDuplicateKeys(): Cannot merge non-objects."),e)e.hasOwnProperty(n)&&(s(void 0===t[n],"mergeIntoWithNoDuplicateKeys(): Tried to merge two objects with the same key: `%s`. This conflict may be due to a mixin; in particular, this may be caused by two getInitialState() or getDefaultProps() methods returning objects with clashing keys.",n),t[n]=e[n]);return t}function d(t,e){return function(){var n=t.apply(this,arguments),r=e.apply(this,arguments);if(null==n)return r;if(null==r)return n;var i={};return f(i,n),f(i,r),i}}function p(t,e){return function(){t.apply(this,arguments),e.apply(this,arguments)}}function m(t,e){return e.bind(t)}var g={componentDidMount:function(){this.__isMounted=!0}},y={componentWillUnmount:function(){this.__isMounted=!1}},v={replaceState:function(t,e){this.updater.enqueueReplaceState(this,t,e)},isMounted:function(){return!!this.__isMounted}},b=function(){};return r(b.prototype,t.prototype,v),function(t){var e=function(t,r,o){this.__reactAutoBindPairs.length&&function(t){for(var e=t.__reactAutoBindPairs,n=0;n<e.length;n+=2){var r=e[n],i=e[n+1];t[r]=m(t,i)}}(this),this.props=t,this.context=r,this.refs=i,this.updater=o||n,this.state=null;var a=this.getInitialState?this.getInitialState():null;s("object"==typeof a&&!Array.isArray(a),"%s.getInitialState(): must return an object or null",e.displayName||"ReactCompositeComponent"),this.state=a};for(var r in e.prototype=new b,e.prototype.constructor=e,e.prototype.__reactAutoBindPairs=[],o.forEach(h.bind(null,e)),h(e,g),h(e,t),h(e,y),e.getDefaultProps&&(e.defaultProps=e.getDefaultProps()),s(e.prototype.render,"createClass(...): Class specification must implement a `render` method."),a)e.prototype[r]||(e.prototype[r]=null);return e}}},function(t,e,n){"use strict";var r=n(10),i=n(8);n(11);t.exports=function(t){return i.isValidElement(t)||r("143"),t}},function(t,e,n){"use strict";var r=n(20);function i(){}function s(){}s.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,s,o){if(o!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s,resetWarningCache:i};return n.PropTypes=n,n}},function(t,e){var n,r,i=t.exports={};function s(){throw new Error("setTimeout has not been defined")}function o(){throw new Error("clearTimeout has not been defined")}function a(t){if(n===setTimeout)return setTimeout(t,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(t,0);try{return n(t,0)}catch(e){try{return n.call(null,t,0)}catch(e){return n.call(this,t,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(t){n=s}try{r="function"==typeof clearTimeout?clearTimeout:o}catch(t){r=o}}();var c,u=[],l=!1,h=-1;function f(){l&&c&&(l=!1,c.length?u=c.concat(u):h=-1,u.length&&d())}function d(){if(!l){var t=a(f);l=!0;for(var e=u.length;e;){for(c=u,u=[];++h<e;)c&&c[h].run();h=-1,e=u.length}c=null,l=!1,function(t){if(r===clearTimeout)return clearTimeout(t);if((r===o||!r)&&clearTimeout)return r=clearTimeout,clearTimeout(t);try{r(t)}catch(e){try{return r.call(null,t)}catch(e){return r.call(this,t)}}}(t)}}function p(t,e){this.fun=t,this.array=e}function m(){}i.nextTick=function(t){var e=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)e[n-1]=arguments[n];u.push(new p(t,e)),1!==u.length||l||a(d)},p.prototype.run=function(){this.fun.apply(null,this.array)},i.title="browser",i.browser=!0,i.env={},i.argv=[],i.version="",i.versions={},i.on=m,i.addListener=m,i.once=m,i.off=m,i.removeListener=m,i.removeAllListeners=m,i.emit=m,i.prependListener=m,i.prependOnceListener=m,i.listeners=function(t){return[]},i.binding=function(t){throw new Error("process.binding is not supported")},i.cwd=function(){return"/"},i.chdir=function(t){throw new Error("process.chdir is not supported")},i.umask=function(){return 0}},function(t,e,n){t.exports=n(47)},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.CSVLink=e.CSVDownload=void 0;var r=s(n(48)),i=s(n(54));function s(t){return t&&t.__esModule?t:{default:t}}e.CSVDownload=r.default,e.CSVLink=i.default},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),s=n(13),o=(r=s)&&r.__esModule?r:{default:r},a=n(23),c=n(24);var u=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.state={},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),i(e,[{key:"buildURI",value:function(){return a.buildURI.apply(void 0,arguments)}},{key:"componentDidMount",value:function(){var t=this.props,e=t.data,n=t.headers,r=t.separator,i=t.enclosingCharacter,s=t.uFEFF,o=t.target,a=t.specs,c=t.replace;this.state.page=window.open(this.buildURI(e,s,n,r,i),o,a,c)}},{key:"getWindow",value:function(){return this.state.page}},{key:"render",value:function(){return null}}]),e}(o.default.Component);u.defaultProps=Object.assign(c.defaultProps,{target:"_blank"}),u.propTypes=c.propTypes,e.default=u},function(t,e,n){"use strict";
/** @license React v16.14.0
 * react.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var r=n(50),i="function"==typeof Symbol&&Symbol.for,s=i?Symbol.for("react.element"):60103,o=i?Symbol.for("react.portal"):60106,a=i?Symbol.for("react.fragment"):60107,c=i?Symbol.for("react.strict_mode"):60108,u=i?Symbol.for("react.profiler"):60114,l=i?Symbol.for("react.provider"):60109,h=i?Symbol.for("react.context"):60110,f=i?Symbol.for("react.forward_ref"):60112,d=i?Symbol.for("react.suspense"):60113,p=i?Symbol.for("react.memo"):60115,m=i?Symbol.for("react.lazy"):60116,g="function"==typeof Symbol&&Symbol.iterator;function y(t){for(var e="https://reactjs.org/docs/error-decoder.html?invariant="+t,n=1;n<arguments.length;n++)e+="&args[]="+encodeURIComponent(arguments[n]);return"Minified React error #"+t+"; visit "+e+" for the full message or use the non-minified dev environment for full errors and additional helpful warnings."}var v={isMounted:function(){return!1},enqueueForceUpdate:function(){},enqueueReplaceState:function(){},enqueueSetState:function(){}},b={};function w(t,e,n){this.props=t,this.context=e,this.refs=b,this.updater=n||v}function E(){}function T(t,e,n){this.props=t,this.context=e,this.refs=b,this.updater=n||v}w.prototype.isReactComponent={},w.prototype.setState=function(t,e){if("object"!=typeof t&&"function"!=typeof t&&null!=t)throw Error(y(85));this.updater.enqueueSetState(this,t,e,"setState")},w.prototype.forceUpdate=function(t){this.updater.enqueueForceUpdate(this,t,"forceUpdate")},E.prototype=w.prototype;var _=T.prototype=new E;_.constructor=T,r(_,w.prototype),_.isPureReactComponent=!0;var S={current:null},I=Object.prototype.hasOwnProperty,A={key:!0,ref:!0,__self:!0,__source:!0};function O(t,e,n){var r,i={},o=null,a=null;if(null!=e)for(r in void 0!==e.ref&&(a=e.ref),void 0!==e.key&&(o=""+e.key),e)I.call(e,r)&&!A.hasOwnProperty(r)&&(i[r]=e[r]);var c=arguments.length-2;if(1===c)i.children=n;else if(1<c){for(var u=Array(c),l=0;l<c;l++)u[l]=arguments[l+2];i.children=u}if(t&&t.defaultProps)for(r in c=t.defaultProps)void 0===i[r]&&(i[r]=c[r]);return{$$typeof:s,type:t,key:o,ref:a,props:i,_owner:S.current}}function C(t){return"object"==typeof t&&null!==t&&t.$$typeof===s}var k=/\/+/g,R=[];function N(t,e,n,r){if(R.length){var i=R.pop();return i.result=t,i.keyPrefix=e,i.func=n,i.context=r,i.count=0,i}return{result:t,keyPrefix:e,func:n,context:r,count:0}}function D(t){t.result=null,t.keyPrefix=null,t.func=null,t.context=null,t.count=0,10>R.length&&R.push(t)}function x(t,e,n){return null==t?0:function t(e,n,r,i){var a=typeof e;"undefined"!==a&&"boolean"!==a||(e=null);var c=!1;if(null===e)c=!0;else switch(a){case"string":case"number":c=!0;break;case"object":switch(e.$$typeof){case s:case o:c=!0}}if(c)return r(i,e,""===n?"."+P(e,0):n),1;if(c=0,n=""===n?".":n+":",Array.isArray(e))for(var u=0;u<e.length;u++){var l=n+P(a=e[u],u);c+=t(a,l,r,i)}else if(null===e||"object"!=typeof e?l=null:l="function"==typeof(l=g&&e[g]||e["@@iterator"])?l:null,"function"==typeof l)for(e=l.call(e),u=0;!(a=e.next()).done;)c+=t(a=a.value,l=n+P(a,u++),r,i);else if("object"===a)throw r=""+e,Error(y(31,"[object Object]"===r?"object with keys {"+Object.keys(e).join(", ")+"}":r,""));return c}(t,"",e,n)}function P(t,e){return"object"==typeof t&&null!==t&&null!=t.key?function(t){var e={"=":"=0",":":"=2"};return"$"+(""+t).replace(/[=:]/g,(function(t){return e[t]}))}(t.key):e.toString(36)}function L(t,e){t.func.call(t.context,e,t.count++)}function j(t,e,n){var r=t.result,i=t.keyPrefix;t=t.func.call(t.context,e,t.count++),Array.isArray(t)?M(t,r,n,(function(t){return t})):null!=t&&(C(t)&&(t=function(t,e){return{$$typeof:s,type:t.type,key:e,ref:t.ref,props:t.props,_owner:t._owner}}(t,i+(!t.key||e&&e.key===t.key?"":(""+t.key).replace(k,"$&/")+"/")+n)),r.push(t))}function M(t,e,n,r,i){var s="";null!=n&&(s=(""+n).replace(k,"$&/")+"/"),x(t,j,e=N(e,s,r,i)),D(e)}var F={current:null};function U(){var t=F.current;if(null===t)throw Error(y(321));return t}var V={ReactCurrentDispatcher:F,ReactCurrentBatchConfig:{suspense:null},ReactCurrentOwner:S,IsSomeRendererActing:{current:!1},assign:r};e.Children={map:function(t,e,n){if(null==t)return t;var r=[];return M(t,r,null,e,n),r},forEach:function(t,e,n){if(null==t)return t;x(t,L,e=N(null,null,e,n)),D(e)},count:function(t){return x(t,(function(){return null}),null)},toArray:function(t){var e=[];return M(t,e,null,(function(t){return t})),e},only:function(t){if(!C(t))throw Error(y(143));return t}},e.Component=w,e.Fragment=a,e.Profiler=u,e.PureComponent=T,e.StrictMode=c,e.Suspense=d,e.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED=V,e.cloneElement=function(t,e,n){if(null==t)throw Error(y(267,t));var i=r({},t.props),o=t.key,a=t.ref,c=t._owner;if(null!=e){if(void 0!==e.ref&&(a=e.ref,c=S.current),void 0!==e.key&&(o=""+e.key),t.type&&t.type.defaultProps)var u=t.type.defaultProps;for(l in e)I.call(e,l)&&!A.hasOwnProperty(l)&&(i[l]=void 0===e[l]&&void 0!==u?u[l]:e[l])}var l=arguments.length-2;if(1===l)i.children=n;else if(1<l){u=Array(l);for(var h=0;h<l;h++)u[h]=arguments[h+2];i.children=u}return{$$typeof:s,type:t.type,key:o,ref:a,props:i,_owner:c}},e.createContext=function(t,e){return void 0===e&&(e=null),(t={$$typeof:h,_calculateChangedBits:e,_currentValue:t,_currentValue2:t,_threadCount:0,Provider:null,Consumer:null}).Provider={$$typeof:l,_context:t},t.Consumer=t},e.createElement=O,e.createFactory=function(t){var e=O.bind(null,t);return e.type=t,e},e.createRef=function(){return{current:null}},e.forwardRef=function(t){return{$$typeof:f,render:t}},e.isValidElement=C,e.lazy=function(t){return{$$typeof:m,_ctor:t,_status:-1,_result:null}},e.memo=function(t,e){return{$$typeof:p,type:t,compare:void 0===e?null:e}},e.useCallback=function(t,e){return U().useCallback(t,e)},e.useContext=function(t,e){return U().useContext(t,e)},e.useDebugValue=function(){},e.useEffect=function(t,e){return U().useEffect(t,e)},e.useImperativeHandle=function(t,e,n){return U().useImperativeHandle(t,e,n)},e.useLayoutEffect=function(t,e){return U().useLayoutEffect(t,e)},e.useMemo=function(t,e){return U().useMemo(t,e)},e.useReducer=function(t,e,n){return U().useReducer(t,e,n)},e.useRef=function(t){return U().useRef(t)},e.useState=function(t){return U().useState(t)},e.version="16.14.0"},function(t,e,n){"use strict";
/*
object-assign
(c) Sindre Sorhus
@license MIT
*/var r=Object.getOwnPropertySymbols,i=Object.prototype.hasOwnProperty,s=Object.prototype.propertyIsEnumerable;function o(t){if(null==t)throw new TypeError("Object.assign cannot be called with null or undefined");return Object(t)}t.exports=function(){try{if(!Object.assign)return!1;var t=new String("abc");if(t[5]="de","5"===Object.getOwnPropertyNames(t)[0])return!1;for(var e={},n=0;n<10;n++)e["_"+String.fromCharCode(n)]=n;if("0123456789"!==Object.getOwnPropertyNames(e).map((function(t){return e[t]})).join(""))return!1;var r={};return"abcdefghijklmnopqrst".split("").forEach((function(t){r[t]=t})),"abcdefghijklmnopqrst"===Object.keys(Object.assign({},r)).join("")}catch(t){return!1}}()?Object.assign:function(t,e){for(var n,a,c=o(t),u=1;u<arguments.length;u++){for(var l in n=Object(arguments[u]))i.call(n,l)&&(c[l]=n[l]);if(r){a=r(n);for(var h=0;h<a.length;h++)s.call(n,a[h])&&(c[a[h]]=n[a[h]])}}return c}},function(t,e,n){t.exports=n(52)()},function(t,e,n){"use strict";var r=n(53);function i(){}function s(){}s.resetWarningCache=i,t.exports=function(){function t(t,e,n,i,s,o){if(o!==r){var a=new Error("Calling PropTypes validators directly is not supported by the `prop-types` package. Use PropTypes.checkPropTypes() to call them. Read more at http://fb.me/use-check-prop-types");throw a.name="Invariant Violation",a}}function e(){return t}t.isRequired=t;var n={array:t,bool:t,func:t,number:t,object:t,string:t,symbol:t,any:t,arrayOf:e,element:t,elementType:t,instanceOf:e,node:t,objectOf:e,oneOf:e,oneOfType:e,shape:e,exact:e,checkPropTypes:s,resetWarningCache:i};return n.PropTypes=n,n}},function(t,e,n){"use strict";t.exports="SECRET_DO_NOT_PASS_THIS_OR_YOU_WILL_BE_FIRED"},function(t,e,n){"use strict";Object.defineProperty(e,"__esModule",{value:!0});var r,i=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},s=function(){function t(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}return function(e,n,r){return n&&t(e.prototype,n),r&&t(e,r),e}}(),o=n(13),a=(r=o)&&r.__esModule?r:{default:r},c=n(23),u=n(24);var l=function(t){function e(t){!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,e);var n=function(t,e){if(!t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return!e||"object"!=typeof e&&"function"!=typeof e?t:e}(this,(e.__proto__||Object.getPrototypeOf(e)).call(this,t));return n.buildURI=n.buildURI.bind(n),n.state={href:""},n}return function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function, not "+typeof e);t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,enumerable:!1,writable:!0,configurable:!0}}),e&&(Object.setPrototypeOf?Object.setPrototypeOf(t,e):t.__proto__=e)}(e,t),s(e,[{key:"componentDidMount",value:function(){var t=this.props,e=t.data,n=t.headers,r=t.separator,i=t.uFEFF,s=t.enclosingCharacter;this.setState({href:this.buildURI(e,i,n,r,s)})}},{key:"componentDidUpdate",value:function(t){if(this.props!==t){var e=this.props,n=e.data,r=e.headers,i=e.separator,s=e.uFEFF;this.setState({href:this.buildURI(n,s,r,i)})}}},{key:"buildURI",value:function(){return c.buildURI.apply(void 0,arguments)}},{key:"handleLegacy",value:function(t){if(window.navigator.msSaveOrOpenBlob){t.preventDefault();var e=this.props,n=e.data,r=e.headers,i=e.separator,s=e.filename,o=e.enclosingCharacter,a=e.uFEFF,u=new Blob([a?"\ufeff":"",(0,c.toCSV)(n,r,i,o)]);return window.navigator.msSaveBlob(u,s),!1}}},{key:"handleAsyncClick",value:function(t){var e=this;this.props.onClick(t,(function(n){!1!==n?e.handleLegacy(t):t.preventDefault()}))}},{key:"handleSyncClick",value:function(t){!1===this.props.onClick(t)?t.preventDefault():this.handleLegacy(t)}},{key:"handleClick",value:function(){var t=this;return function(e){if("function"==typeof t.props.onClick)return t.props.asyncOnClick?t.handleAsyncClick(e):t.handleSyncClick(e);t.handleLegacy(e)}}},{key:"render",value:function(){var t=this,e=this.props,n=(e.data,e.headers,e.separator,e.filename),r=(e.uFEFF,e.children),s=(e.onClick,e.asyncOnClick,e.enclosingCharacter,function(t,e){var n={};for(var r in t)e.indexOf(r)>=0||Object.prototype.hasOwnProperty.call(t,r)&&(n[r]=t[r]);return n}(e,["data","headers","separator","filename","uFEFF","children","onClick","asyncOnClick","enclosingCharacter"]));return a.default.createElement("a",i({download:n},s,{ref:function(e){return t.link=e},target:"_self",href:this.state.href,onClick:this.handleClick()}),r)}}]),e}(a.default.Component);l.defaultProps=u.defaultProps,l.propTypes=u.propTypes,e.default=l},function(t,e,n){"use strict";n.r(e);var r=n(2),i=n.n(r),s=n(3),o=function(t,e){return(o=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(t,e){t.__proto__=e}||function(t,e){for(var n in e)e.hasOwnProperty(n)&&(t[n]=e[n])})(t,e)};var a,c,u,l=function(){return(l=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var i in e=arguments[n])Object.prototype.hasOwnProperty.call(e,i)&&(t[i]=e[i]);return t}).apply(this,arguments)};!function(t){t.AUTO="auto",t.START="start",t.CENTER="center",t.END="end"}(a||(a={})),function(t){t.HORIZONTAL="horizontal",t.VERTICAL="vertical"}(c||(c={})),function(t){t.OBSERVED="observed",t.REQUESTED="requested"}(u||(u={}));var h,f,d,p,m,g,y=((h={})[c.VERTICAL]="scrollTop",h[c.HORIZONTAL]="scrollLeft",h),v=((f={})[c.VERTICAL]="height",f[c.HORIZONTAL]="width",f),b=((d={})[c.VERTICAL]="top",d[c.HORIZONTAL]="left",d),w=((p={})[c.VERTICAL]="marginTop",p[c.HORIZONTAL]="marginLeft",p),E=((m={})[c.VERTICAL]="marginBottom",m[c.HORIZONTAL]="marginRight",m),T=function(){function t(t){var e=t.itemCount,n=t.itemSizeGetter,r=t.estimatedItemSize;this.itemSizeGetter=n,this.itemCount=e,this.estimatedItemSize=r,this.itemSizeAndPositionData={},this.lastMeasuredIndex=-1}return t.prototype.updateConfig=function(t){var e=t.itemCount,n=t.itemSizeGetter,r=t.estimatedItemSize;null!=e&&(this.itemCount=e),null!=r&&(this.estimatedItemSize=r),null!=n&&(this.itemSizeGetter=n)},t.prototype.getLastMeasuredIndex=function(){return this.lastMeasuredIndex},t.prototype.getSizeAndPositionForIndex=function(t){if(t<0||t>=this.itemCount)throw Error("Requested index "+t+" is outside of range 0.."+this.itemCount);if(t>this.lastMeasuredIndex){for(var e=this.getSizeAndPositionOfLastMeasuredItem(),n=e.offset+e.size,r=this.lastMeasuredIndex+1;r<=t;r++){var i=this.itemSizeGetter(r);if(null==i||isNaN(i))throw Error("Invalid size returned for index "+r+" of value "+i);this.itemSizeAndPositionData[r]={offset:n,size:i},n+=i}this.lastMeasuredIndex=t}return this.itemSizeAndPositionData[t]},t.prototype.getSizeAndPositionOfLastMeasuredItem=function(){return this.lastMeasuredIndex>=0?this.itemSizeAndPositionData[this.lastMeasuredIndex]:{offset:0,size:0}},t.prototype.getTotalSize=function(){var t=this.getSizeAndPositionOfLastMeasuredItem();return t.offset+t.size+(this.itemCount-this.lastMeasuredIndex-1)*this.estimatedItemSize},t.prototype.getUpdatedOffsetForIndex=function(t){var e=t.align,n=void 0===e?a.START:e,r=t.containerSize,i=t.currentOffset,s=t.targetIndex;if(r<=0)return 0;var o,c=this.getSizeAndPositionForIndex(s),u=c.offset,l=u-r+c.size;switch(n){case a.END:o=l;break;case a.CENTER:o=u-(r-c.size)/2;break;case a.START:o=u;break;default:o=Math.max(l,Math.min(u,i))}var h=this.getTotalSize();return Math.max(0,Math.min(h-r,o))},t.prototype.getVisibleRange=function(t){var e=t.containerSize,n=t.offset,r=t.overscanCount;if(0===this.getTotalSize())return{};var i=n+e,s=this.findNearestItem(n);if(void 0===s)throw Error("Invalid offset "+n+" specified");var o=this.getSizeAndPositionForIndex(s);n=o.offset+o.size;for(var a=s;n<i&&a<this.itemCount-1;)a++,n+=this.getSizeAndPositionForIndex(a).size;return r&&(s=Math.max(0,s-r),a=Math.min(a+r,this.itemCount-1)),{start:s,stop:a}},t.prototype.resetItem=function(t){this.lastMeasuredIndex=Math.min(this.lastMeasuredIndex,t-1)},t.prototype.findNearestItem=function(t){if(isNaN(t))throw Error("Invalid offset "+t+" specified");t=Math.max(0,t);var e=this.getSizeAndPositionOfLastMeasuredItem(),n=Math.max(0,this.lastMeasuredIndex);return e.offset>=t?this.binarySearch({high:n,low:0,offset:t}):this.exponentialSearch({index:n,offset:t})},t.prototype.binarySearch=function(t){for(var e=t.low,n=t.high,r=t.offset,i=0,s=0;e<=n;){if(i=e+Math.floor((n-e)/2),(s=this.getSizeAndPositionForIndex(i).offset)===r)return i;s<r?e=i+1:s>r&&(n=i-1)}return e>0?e-1:0},t.prototype.exponentialSearch=function(t){for(var e=t.index,n=t.offset,r=1;e<this.itemCount&&this.getSizeAndPositionForIndex(e).offset<n;)e+=r,r*=2;return this.binarySearch({high:Math.min(e,this.itemCount-1),low:Math.floor(e/2),offset:n})},t}(),_={overflow:"auto",willChange:"transform",WebkitOverflowScrolling:"touch"},S={position:"relative",width:"100%",minHeight:"100%"},I={position:"absolute",top:0,left:0,width:"100%"},A=l({},I,{position:"sticky"}),O=function(t){function e(){var e=null!==t&&t.apply(this,arguments)||this;return e.itemSizeGetter=function(t){return function(n){return e.getSize(n,t)}},e.sizeAndPositionManager=new T({itemCount:e.props.itemCount,itemSizeGetter:e.itemSizeGetter(e.props.itemSize),estimatedItemSize:e.getEstimatedItemSize()}),e.state={offset:e.props.scrollOffset||null!=e.props.scrollToIndex&&e.getOffsetForIndex(e.props.scrollToIndex)||0,scrollChangeReason:u.REQUESTED},e.styleCache={},e.getRef=function(t){e.rootNode=t},e.handleScroll=function(t){var n=e.props.onScroll,r=e.getNodeOffset();r<0||e.state.offset===r||t.target!==e.rootNode||(e.setState({offset:r,scrollChangeReason:u.OBSERVED}),"function"==typeof n&&n(r,t))},e}return function(t,e){function n(){this.constructor=t}o(t,e),t.prototype=null===e?Object.create(e):(n.prototype=e.prototype,new n)}(e,t),e.prototype.componentDidMount=function(){var t=this.props,e=t.scrollOffset,n=t.scrollToIndex;this.rootNode.addEventListener("scroll",this.handleScroll,{passive:!0}),null!=e?this.scrollTo(e):null!=n&&this.scrollTo(this.getOffsetForIndex(n))},e.prototype.componentWillReceiveProps=function(t){var e=this.props,n=e.estimatedItemSize,r=e.itemCount,i=e.itemSize,s=e.scrollOffset,o=e.scrollToAlignment,a=e.scrollToIndex,c=t.scrollToIndex!==a||t.scrollToAlignment!==o,l=t.itemCount!==r||t.itemSize!==i||t.estimatedItemSize!==n;t.itemSize!==i&&this.sizeAndPositionManager.updateConfig({itemSizeGetter:this.itemSizeGetter(t.itemSize)}),t.itemCount===r&&t.estimatedItemSize===n||this.sizeAndPositionManager.updateConfig({itemCount:t.itemCount,estimatedItemSize:this.getEstimatedItemSize(t)}),l&&this.recomputeSizes(),t.scrollOffset!==s?this.setState({offset:t.scrollOffset||0,scrollChangeReason:u.REQUESTED}):"number"==typeof t.scrollToIndex&&(c||l)&&this.setState({offset:this.getOffsetForIndex(t.scrollToIndex,t.scrollToAlignment,t.itemCount),scrollChangeReason:u.REQUESTED})},e.prototype.componentDidUpdate=function(t,e){var n=this.state,r=n.offset,i=n.scrollChangeReason;e.offset!==r&&i===u.REQUESTED&&this.scrollTo(r)},e.prototype.componentWillUnmount=function(){this.rootNode.removeEventListener("scroll",this.handleScroll)},e.prototype.scrollTo=function(t){var e=this.props.scrollDirection,n=void 0===e?c.VERTICAL:e;this.rootNode[y[n]]=t},e.prototype.getOffsetForIndex=function(t,e,n){void 0===e&&(e=this.props.scrollToAlignment),void 0===n&&(n=this.props.itemCount);var r=this.props.scrollDirection,i=void 0===r?c.VERTICAL:r;return(t<0||t>=n)&&(t=0),this.sizeAndPositionManager.getUpdatedOffsetForIndex({align:e,containerSize:this.props[v[i]],currentOffset:this.state&&this.state.offset||0,targetIndex:t})},e.prototype.recomputeSizes=function(t){void 0===t&&(t=0),this.styleCache={},this.sizeAndPositionManager.resetItem(t)},e.prototype.render=function(){var t,e=this,n=this.props,i=(n.estimatedItemSize,n.height),s=n.overscanCount,o=void 0===s?3:s,a=n.renderItem,u=(n.itemCount,n.itemSize,n.onItemsRendered),h=(n.onScroll,n.scrollDirection),f=void 0===h?c.VERTICAL:h,d=(n.scrollOffset,n.scrollToIndex,n.scrollToAlignment,n.stickyIndices),p=n.style,m=n.width,g=function(t,e){var n={};for(var r in t)Object.prototype.hasOwnProperty.call(t,r)&&e.indexOf(r)<0&&(n[r]=t[r]);if(null!=t&&"function"==typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(t);i<r.length;i++)e.indexOf(r[i])<0&&(n[r[i]]=t[r[i]])}return n}(n,["estimatedItemSize","height","overscanCount","renderItem","itemCount","itemSize","onItemsRendered","onScroll","scrollDirection","scrollOffset","scrollToIndex","scrollToAlignment","stickyIndices","style","width"]),y=this.state.offset,b=this.sizeAndPositionManager.getVisibleRange({containerSize:this.props[v[f]]||0,offset:y,overscanCount:o}),w=b.start,E=b.stop,T=[],I=l({},_,p,{height:i,width:m}),A=l({},S,((t={})[v[f]]=this.sizeAndPositionManager.getTotalSize(),t));if(null!=d&&0!==d.length&&(d.forEach((function(t){return T.push(a({index:t,style:e.getStyle(t,!0)}))})),f===c.HORIZONTAL&&(A.display="flex")),void 0!==w&&void 0!==E){for(var O=w;O<=E;O++)null!=d&&d.includes(O)||T.push(a({index:O,style:this.getStyle(O,!1)}));"function"==typeof u&&u({startIndex:w,stopIndex:E})}return Object(r.createElement)("div",l({ref:this.getRef},g,{style:I}),Object(r.createElement)("div",{style:A},T))},e.prototype.getNodeOffset=function(){var t=this.props.scrollDirection,e=void 0===t?c.VERTICAL:t;return this.rootNode[y[e]]},e.prototype.getEstimatedItemSize=function(t){return void 0===t&&(t=this.props),t.estimatedItemSize||"number"==typeof t.itemSize&&t.itemSize||50},e.prototype.getSize=function(t,e){return"function"==typeof e?e(t):Array.isArray(e)?e[t]:e},e.prototype.getStyle=function(t,e){var n=this.styleCache[t];if(n)return n;var r,i,s=this.props.scrollDirection,o=void 0===s?c.VERTICAL:s,a=this.sizeAndPositionManager.getSizeAndPositionForIndex(t),u=a.size,h=a.offset;return this.styleCache[t]=e?l({},A,((r={})[v[o]]=u,r[w[o]]=h,r[E[o]]=-(h+u),r.zIndex=1,r)):l({},I,((i={})[v[o]]=u,i[b[o]]=h,i))},e.defaultProps={overscanCount:3,scrollDirection:c.VERTICAL,width:"100%"},e.propTypes={estimatedItemSize:s.number,height:Object(s.oneOfType)([s.number,s.string]).isRequired,itemCount:s.number.isRequired,itemSize:Object(s.oneOfType)([s.number,s.array,s.func]).isRequired,onScroll:s.func,onItemsRendered:s.func,overscanCount:s.number,renderItem:s.func.isRequired,scrollOffset:s.number,scrollToIndex:s.number,scrollToAlignment:Object(s.oneOf)([a.AUTO,a.START,a.CENTER,a.END]),scrollDirection:Object(s.oneOf)([c.HORIZONTAL,c.VERTICAL]),stickyIndices:Object(s.arrayOf)(s.number),style:s.object,width:Object(s.oneOfType)([s.number,s.string])},e}(r.PureComponent),C=n(21),k=n(1),R=n(0),N=n(7);!function(t){t[t.NO_ERROR=0]="NO_ERROR",t[t.NETWORK_ERROR=1]="NETWORK_ERROR",t[t.ABORT=2]="ABORT"}(g||(g={}));class D extends R.c{constructor(t,e){super(x(t),`Firebase Storage: ${e} (${x(t)})`),this.customData={serverResponse:null},this._baseMessage=this.message,Object.setPrototypeOf(this,D.prototype)}_codeEquals(t){return x(t)===this.code}get serverResponse(){return this.customData.serverResponse}set serverResponse(t){this.customData.serverResponse=t,this.customData.serverResponse?this.message=`${this._baseMessage}\n${this.customData.serverResponse}`:this.message=this._baseMessage}}function x(t){return"storage/"+t}function P(){return new D("unknown","An unknown error occurred, please check the error payload for server response.")}function L(){return new D("canceled","User canceled the upload/download.")}function j(){return new D("cannot-slice-blob","Cannot slice blob for upload. Please retry the upload.")}function M(t){return new D("invalid-argument",t)}function F(){return new D("app-deleted","The Firebase app was deleted.")}function U(t,e){return new D("invalid-format","String does not match format '"+t+"': "+e)}function V(t){throw new D("internal-error","Internal error: "+t)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class B{constructor(){this.sent_=!1,this.xhr_=new XMLHttpRequest,this.errorCode_=g.NO_ERROR,this.sendPromise_=new Promise(t=>{this.xhr_.addEventListener("abort",()=>{this.errorCode_=g.ABORT,t()}),this.xhr_.addEventListener("error",()=>{this.errorCode_=g.NETWORK_ERROR,t()}),this.xhr_.addEventListener("load",()=>{t()})})}send(t,e,n,r){if(this.sent_)throw V("cannot .send() more than once");if(this.sent_=!0,this.xhr_.open(e,t,!0),void 0!==r)for(const t in r)r.hasOwnProperty(t)&&this.xhr_.setRequestHeader(t,r[t].toString());return void 0!==n?this.xhr_.send(n):this.xhr_.send(),this.sendPromise_}getErrorCode(){if(!this.sent_)throw V("cannot .getErrorCode() before sending");return this.errorCode_}getStatus(){if(!this.sent_)throw V("cannot .getStatus() before sending");try{return this.xhr_.status}catch(t){return-1}}getResponseText(){if(!this.sent_)throw V("cannot .getResponseText() before sending");return this.xhr_.responseText}abort(){this.xhr_.abort()}getResponseHeader(t){return this.xhr_.getResponseHeader(t)}addUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.addEventListener("progress",t)}removeUploadProgressListener(t){null!=this.xhr_.upload&&this.xhr_.upload.removeEventListener("progress",t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class z{createConnection(){return new B}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class q{constructor(t,e){this.bucket=t,this.path_=e}get path(){return this.path_}get isRoot(){return 0===this.path.length}fullServerUrl(){const t=encodeURIComponent;return"/b/"+t(this.bucket)+"/o/"+t(this.path)}bucketOnlyServerUrl(){return"/b/"+encodeURIComponent(this.bucket)+"/o"}static makeFromBucketSpec(t,e){let n;try{n=q.makeFromUrl(t,e)}catch(e){return new q(t,"")}if(""===n.path)return n;throw new D("invalid-default-bucket","Invalid default bucket '"+t+"'.")}static makeFromUrl(t,e){let n=null;const r=new RegExp("^gs://([A-Za-z0-9.\\-_]+)(/(.*))?$","i");function i(t){t.path_=decodeURIComponent(t.path)}const s=e.replace(/[.]/g,"\\."),o=[{regex:r,indices:{bucket:1,path:3},postModify:function(t){"/"===t.path.charAt(t.path.length-1)&&(t.path_=t.path_.slice(0,-1))}},{regex:new RegExp(`^https?://${s}/v[A-Za-z0-9_]+/b/([A-Za-z0-9.\\-_]+)/o(/([^?#]*).*)?$`,"i"),indices:{bucket:1,path:3},postModify:i},{regex:new RegExp(`^https?://${"firebasestorage.googleapis.com"===e?"(?:storage.googleapis.com|storage.cloud.google.com)":e}/([A-Za-z0-9.\\-_]+)/([^?#]*)`,"i"),indices:{bucket:1,path:2},postModify:i}];for(let e=0;e<o.length;e++){const r=o[e],i=r.regex.exec(t);if(i){const t=i[r.indices.bucket];let e=i[r.indices.path];e||(e=""),n=new q(t,e),r.postModify(n);break}}if(null==n)throw function(t){return new D("invalid-url","Invalid URL '"+t+"'.")}(t);return n}}class ${constructor(t){this.promise_=Promise.reject(t)}getPromise(){return this.promise_}cancel(t=!1){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function H(t){return"string"==typeof t||t instanceof String}function G(t){return K()&&t instanceof Blob}function K(){return"undefined"!=typeof Blob}function W(t,e,n,r){if(r<e)throw M(`Invalid value for '${t}'. Expected ${e} or greater.`);if(r>n)throw M(`Invalid value for '${t}'. Expected ${n} or less.`)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Y(t,e,n){let r=e;return null==n&&(r="https://"+e),`${n}://${r}/v0${t}`}function Q(t){const e=encodeURIComponent;let n="?";for(const r in t)if(t.hasOwnProperty(r)){n=n+(e(r)+"="+e(t[r]))+"&"}return n=n.slice(0,-1),n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(t,e,n,r,i,s,o,a,c,u,l){this.pendingConnection_=null,this.backoffId_=null,this.canceled_=!1,this.appDelete_=!1,this.url_=t,this.method_=e,this.headers_=n,this.body_=r,this.successCodes_=i.slice(),this.additionalRetryCodes_=s.slice(),this.callback_=o,this.errorCallback_=a,this.progressCallback_=u,this.timeout_=c,this.pool_=l,this.promise_=new Promise((t,e)=>{this.resolve_=t,this.reject_=e,this.start_()})}start_(){const t=this;function e(e,n){const r=t.resolve_,i=t.reject_,s=n.connection;if(n.wasSuccessCode)try{const e=t.callback_(s,s.getResponseText());void 0!==e?r(e):r()}catch(t){i(t)}else if(null!==s){const e=P();e.serverResponse=s.getResponseText(),t.errorCallback_?i(t.errorCallback_(s,e)):i(e)}else if(n.canceled){i(t.appDelete_?F():L())}else{i(new D("retry-limit-exceeded","Max retry time for operation exceeded, please try again."))}}this.canceled_?e(0,new J(!1,null,!0)):this.backoffId_=function(t,e,n){let r=1,i=null,s=!1,o=0;function a(){return 2===o}let c=!1;function u(...t){c||(c=!0,e.apply(null,t))}function l(e){i=setTimeout(()=>{i=null,t(h,a())},e)}function h(t,...e){if(c)return;if(t)return void u.call(null,t,...e);if(a()||s)return void u.call(null,t,...e);let n;r<64&&(r*=2),1===o?(o=2,n=0):n=1e3*(r+Math.random()),l(n)}let f=!1;function d(t){f||(f=!0,c||(null!==i?(t||(o=2),clearTimeout(i),l(0)):t||(o=1)))}return l(0),setTimeout(()=>{s=!0,d(!0)},n),d}((function(e,n){if(n)return void e(!1,new J(!1,null,!0));const r=t.pool_.createConnection();function i(e){const n=e.loaded,r=e.lengthComputable?e.total:-1;null!==t.progressCallback_&&t.progressCallback_(n,r)}t.pendingConnection_=r,null!==t.progressCallback_&&r.addUploadProgressListener(i),r.send(t.url_,t.method_,t.body_,t.headers_).then(()=>{null!==t.progressCallback_&&r.removeUploadProgressListener(i),t.pendingConnection_=null;const n=r.getErrorCode()===g.NO_ERROR,s=r.getStatus();if(!n||t.isRetryStatusCode_(s)){const t=r.getErrorCode()===g.ABORT;return void e(!1,new J(!1,null,t))}const o=-1!==t.successCodes_.indexOf(s);e(!0,new J(o,r))})}),e,this.timeout_)}getPromise(){return this.promise_}cancel(t){this.canceled_=!0,this.appDelete_=t||!1,null!==this.backoffId_&&(0,this.backoffId_)(!1),null!==this.pendingConnection_&&this.pendingConnection_.abort()}isRetryStatusCode_(t){const e=t>=500&&t<600,n=-1!==[408,429].indexOf(t),r=-1!==this.additionalRetryCodes_.indexOf(t);return e||n||r}}class J{constructor(t,e,n){this.wasSuccessCode=t,this.connection=e,this.canceled=!!n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Z(){return"undefined"!=typeof BlobBuilder?BlobBuilder:"undefined"!=typeof WebKitBlobBuilder?WebKitBlobBuilder:void 0}function tt(...t){const e=Z();if(void 0!==e){const n=new e;for(let e=0;e<t.length;e++)n.append(t[e]);return n.getBlob()}if(K())return new Blob(t);throw new D("unsupported-environment","This browser doesn't seem to support creating Blobs")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const et="raw",nt="base64",rt="base64url",it="data_url";class st{constructor(t,e){this.data=t,this.contentType=e||null}}function ot(t,e){switch(t){case et:return new st(at(e));case nt:case rt:return new st(ct(t,e));case it:return new st(function(t){const e=new ut(t);return e.base64?ct(nt,e.rest):function(t){let e;try{e=decodeURIComponent(t)}catch(t){throw U(it,"Malformed data URL.")}return at(e)}(e.rest)}(e),new ut(e).contentType)}throw P()}function at(t){const e=[];for(let n=0;n<t.length;n++){let r=t.charCodeAt(n);if(r<=127)e.push(r);else if(r<=2047)e.push(192|r>>6,128|63&r);else if(55296==(64512&r)){if(n<t.length-1&&56320==(64512&t.charCodeAt(n+1))){r=65536|(1023&r)<<10|1023&t.charCodeAt(++n),e.push(240|r>>18,128|r>>12&63,128|r>>6&63,128|63&r)}else e.push(239,191,189)}else 56320==(64512&r)?e.push(239,191,189):e.push(224|r>>12,128|r>>6&63,128|63&r)}return new Uint8Array(e)}function ct(t,e){switch(t){case nt:{const n=-1!==e.indexOf("-"),r=-1!==e.indexOf("_");if(n||r){throw U(t,"Invalid character '"+(n?"-":"_")+"' found: is it base64url encoded?")}break}case rt:{const n=-1!==e.indexOf("+"),r=-1!==e.indexOf("/");if(n||r){throw U(t,"Invalid character '"+(n?"+":"/")+"' found: is it base64 encoded?")}e=e.replace(/-/g,"+").replace(/_/g,"/");break}}let n;try{n=atob(e)}catch(e){throw U(t,"Invalid character found")}const r=new Uint8Array(n.length);for(let t=0;t<n.length;t++)r[t]=n.charCodeAt(t);return r}class ut{constructor(t){this.base64=!1,this.contentType=null;const e=t.match(/^data:([^,]+)?,/);if(null===e)throw U(it,"Must be formatted 'data:[<mediatype>][;base64],<data>");const n=e[1]||null;null!=n&&(this.base64=function(t,e){if(!(t.length>=e.length))return!1;return t.substring(t.length-e.length)===e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(n,";base64"),this.contentType=this.base64?n.substring(0,n.length-";base64".length):n),this.rest=t.substring(t.indexOf(",")+1)}}class lt{constructor(t,e){let n=0,r="";G(t)?(this.data_=t,n=t.size,r=t.type):t instanceof ArrayBuffer?(e?this.data_=new Uint8Array(t):(this.data_=new Uint8Array(t.byteLength),this.data_.set(new Uint8Array(t))),n=this.data_.length):t instanceof Uint8Array&&(e?this.data_=t:(this.data_=new Uint8Array(t.length),this.data_.set(t)),n=t.length),this.size_=n,this.type_=r}size(){return this.size_}type(){return this.type_}slice(t,e){if(G(this.data_)){const s=this.data_,o=(r=t,i=e,(n=s).webkitSlice?n.webkitSlice(r,i):n.mozSlice?n.mozSlice(r,i):n.slice?n.slice(r,i):null);return null===o?null:new lt(o)}{const n=new Uint8Array(this.data_.buffer,t,e-t);return new lt(n,!0)}var n,r,i;
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}static getBlob(...t){if(K()){const e=t.map(t=>t instanceof lt?t.data_:t);return new lt(tt.apply(null,e))}{const e=t.map(t=>H(t)?ot(et,t).data:t.data_);let n=0;e.forEach(t=>{n+=t.byteLength});const r=new Uint8Array(n);let i=0;return e.forEach(t=>{for(let e=0;e<t.length;e++)r[i++]=t[e]}),new lt(r,!0)}}uploadData(){return this.data_}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ht(t){let e;try{e=JSON.parse(t)}catch(t){return null}return"object"!=typeof(n=e)||Array.isArray(n)?null:e;var n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ft(t){const e=t.lastIndexOf("/",t.length-2);return-1===e?t:t.slice(e+1)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(t,e){return e}class pt{constructor(t,e,n,r){this.server=t,this.local=e||t,this.writable=!!n,this.xform=r||dt}}let mt=null;function gt(){if(mt)return mt;const t=[];t.push(new pt("bucket")),t.push(new pt("generation")),t.push(new pt("metageneration")),t.push(new pt("name","fullPath",!0));const e=new pt("name");e.xform=function(t,e){return function(t){return!H(t)||t.length<2?t:ft(t)}(e)},t.push(e);const n=new pt("size");return n.xform=function(t,e){return void 0!==e?Number(e):e},t.push(n),t.push(new pt("timeCreated")),t.push(new pt("updated")),t.push(new pt("md5Hash",null,!0)),t.push(new pt("cacheControl",null,!0)),t.push(new pt("contentDisposition",null,!0)),t.push(new pt("contentEncoding",null,!0)),t.push(new pt("contentLanguage",null,!0)),t.push(new pt("contentType",null,!0)),t.push(new pt("metadata","customMetadata",!0)),mt=t,mt}function yt(t,e,n){const r={type:"file"},i=n.length;for(let t=0;t<i;t++){const i=n[t];r[i.local]=i.xform(r,e[i.server])}return function(t,e){Object.defineProperty(t,"ref",{get:function(){const n=t.bucket,r=t.fullPath,i=new q(n,r);return e._makeStorageReference(i)}})}(r,t),r}function vt(t,e,n){const r=ht(e);if(null===r)return null;return yt(t,r,n)}function bt(t,e){const n={},r=e.length;for(let i=0;i<r;i++){const r=e[i];r.writable&&(n[r.server]=t[r.local])}return JSON.stringify(n)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class wt{constructor(t,e,n,r){this.url=t,this.method=e,this.handler=n,this.timeout=r,this.urlParams={},this.headers={},this.body=null,this.errorHandler=null,this.progressCallback=null,this.successCodes=[200],this.additionalRetryCodes=[]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Et(t){if(!t)throw P()}function Tt(t,e){return function(n,r){const i=vt(t,r,e);return Et(null!==i),i}}function _t(t,e){return function(n,r){const i=vt(t,r,e);return Et(null!==i),function(t,e,n,r){const i=ht(e);if(null===i)return null;if(!H(i.downloadTokens))return null;const s=i.downloadTokens;if(0===s.length)return null;const o=encodeURIComponent;return s.split(",").map(e=>{const i=t.bucket,s=t.fullPath;return Y("/b/"+o(i)+"/o/"+o(s),n,r)+Q({alt:"media",token:e})})[0]}(i,r,t.host,t._protocol)}}function St(t){return function(e,n){let r;var i,s;return 401===e.getStatus()?r=e.getResponseText().includes("Firebase App Check token is invalid")?new D("unauthorized-app","This app does not have permission to access Firebase Storage on this project."):new D("unauthenticated","User is not authenticated, please authenticate using Firebase Authentication and try again."):402===e.getStatus()?(s=t.bucket,r=new D("quota-exceeded","Quota for bucket '"+s+"' exceeded, please view quota on https://firebase.google.com/pricing/.")):403===e.getStatus()?(i=t.path,r=new D("unauthorized","User does not have permission to access '"+i+"'.")):r=n,r.serverResponse=n.serverResponse,r}}function It(t){const e=St(t);return function(n,r){let i=e(n,r);var s;return 404===n.getStatus()&&(s=t.path,i=new D("object-not-found","Object '"+s+"' does not exist.")),i.serverResponse=r.serverResponse,i}}function At(t,e,n){const r=Object.assign({},n);return r.fullPath=t.path,r.size=e.size(),r.contentType||(r.contentType=function(t,e){return t&&t.contentType||e&&e.type()||"application/octet-stream"}(null,e)),r}function Ot(t,e,n,r,i){const s=e.bucketOnlyServerUrl(),o={"X-Goog-Upload-Protocol":"multipart"};const a=function(){let t="";for(let e=0;e<2;e++)t+=Math.random().toString().slice(2);return t}();o["Content-Type"]="multipart/related; boundary="+a;const c=At(e,r,i),u="--"+a+"\r\nContent-Type: application/json; charset=utf-8\r\n\r\n"+bt(c,n)+"\r\n--"+a+"\r\nContent-Type: "+c.contentType+"\r\n\r\n",l="\r\n--"+a+"--",h=lt.getBlob(u,r,l);if(null===h)throw j();const f={name:c.fullPath},d=Y(s,t.host,t._protocol),p=t.maxUploadRetryTime,m=new wt(d,"POST",Tt(t,n),p);return m.urlParams=f,m.headers=o,m.body=h.uploadData(),m.errorHandler=St(e),m}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ct{constructor(t,e){this._service=t,this._location=e instanceof q?e:q.makeFromUrl(e,t.host)}toString(){return"gs://"+this._location.bucket+"/"+this._location.path}_newRef(t,e){return new Ct(t,e)}get root(){const t=new q(this._location.bucket,"");return this._newRef(this._service,t)}get bucket(){return this._location.bucket}get fullPath(){return this._location.path}get name(){return ft(this._location.path)}get storage(){return this._service}get parent(){const t=function(t){if(0===t.length)return null;const e=t.lastIndexOf("/");return-1===e?"":t.slice(0,e)}(this._location.path);if(null===t)return null;const e=new q(this._location.bucket,t);return new Ct(this._service,e)}_throwIfRoot(t){if(""===this._location.path)throw function(t){return new D("invalid-root-operation","The operation '"+t+"' cannot be performed on a root reference, create a non-root reference using child, such as .child('file.png').")}(t)}}function kt(t,e,n){t._throwIfRoot("uploadBytes");const r=Ot(t.storage,t._location,gt(),new lt(e,!0),n);return t.storage.makeRequestWithTokens(r).then(t=>t.getPromise()).then(e=>({metadata:e,ref:t}))}async function Rt(t){t._throwIfRoot("getDownloadURL");const e=function(t,e,n){const r=Y(e.fullServerUrl(),t.host,t._protocol),i=t.maxOperationRetryTime,s=new wt(r,"GET",_t(t,n),i);return s.errorHandler=It(e),s}(t.storage,t._location,gt());return(await t.storage.makeRequestWithTokens(e)).getPromise().then(t=>{if(null===t)throw new D("no-download-url","The given file does not have any download URLs.");return t})}async function Nt(t){t._throwIfRoot("deleteObject");const e=function(t,e){const n=Y(e.fullServerUrl(),t.host,t._protocol),r=t.maxOperationRetryTime,i=new wt(n,"DELETE",(function(t,e){}),r);return i.successCodes=[200,204],i.errorHandler=It(e),i}(t.storage,t._location);return(await t.storage.makeRequestWithTokens(e)).getPromise()}function Dt(t,e){const n=function(t,e){const n=e.split("/").filter(t=>t.length>0).join("/");return 0===t.length?n:t+"/"+n}(t._location.path,e),r=new q(t._location.bucket,n);return new Ct(t.storage,r)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function xt(t,e){if(t instanceof jt){const n=t;if(null==n._bucket)throw new D("no-default-bucket","No default bucket found. Did you set the 'storageBucket' property when initializing the app?");const r=new Ct(n,n._bucket);return null!=e?xt(r,e):r}return void 0!==e?Dt(t,e):t}function Pt(t,e){if(e&&/^[A-Za-z]+:\/\//.test(e)){if(t instanceof jt)return new Ct(t,e);throw M("To use ref(service, url), the first argument must be a Storage instance.")}return xt(t,e)}function Lt(t,e){const n=null==e?void 0:e.storageBucket;return null==n?null:q.makeFromBucketSpec(n,t)}class jt{constructor(t,e,n,r,i,s){this.app=t,this._authProvider=e,this._appCheckProvider=n,this._pool=r,this._url=i,this._firebaseVersion=s,this._bucket=null,this._host="firebasestorage.googleapis.com",this._protocol="https",this._appId=null,this._deleted=!1,this._maxOperationRetryTime=12e4,this._maxUploadRetryTime=6e5,this._requests=new Set,this._bucket=null!=i?q.makeFromBucketSpec(i,this._host):Lt(this._host,this.app.options)}get host(){return this._host}set host(t){this._host=t,null!=this._url?this._bucket=q.makeFromBucketSpec(this._url,t):this._bucket=Lt(t,this.app.options)}get maxUploadRetryTime(){return this._maxUploadRetryTime}set maxUploadRetryTime(t){W("time",0,Number.POSITIVE_INFINITY,t),this._maxUploadRetryTime=t}get maxOperationRetryTime(){return this._maxOperationRetryTime}set maxOperationRetryTime(t){W("time",0,Number.POSITIVE_INFINITY,t),this._maxOperationRetryTime=t}async _getAuthToken(){if(this._overrideAuthToken)return this._overrideAuthToken;const t=this._authProvider.getImmediate({optional:!0});if(t){const e=await t.getToken();if(null!==e)return e.accessToken}return null}async _getAppCheckToken(){const t=this._appCheckProvider.getImmediate({optional:!0});if(t){return(await t.getToken()).token}return null}_delete(){return this._deleted||(this._deleted=!0,this._requests.forEach(t=>t.cancel()),this._requests.clear()),Promise.resolve()}_makeStorageReference(t){return new Ct(this,t)}_makeRequest(t,e,n){if(this._deleted)return new $(F());{const r=function(t,e,n,r,i,s){const o=Q(t.urlParams),a=t.url+o,c=Object.assign({},t.headers);return function(t,e){e&&(t["X-Firebase-GMPID"]=e)}(c,e),function(t,e){null!==e&&e.length>0&&(t.Authorization="Firebase "+e)}(c,n),function(t,e){t["X-Firebase-Storage-Version"]="webjs/"+(null!=e?e:"AppManager")}(c,s),function(t,e){null!==e&&(t["X-Firebase-AppCheck"]=e)}(c,r),new X(a,t.method,c,t.body,t.successCodes,t.additionalRetryCodes,t.handler,t.errorHandler,t.timeout,t.progressCallback,i)}(t,this._appId,e,n,this._pool,this._firebaseVersion);return this._requests.add(r),r.getPromise().then(()=>this._requests.delete(r),()=>this._requests.delete(r)),r}}async makeRequestWithTokens(t){const[e,n]=await Promise.all([this._getAuthToken(),this._getAppCheckToken()]);return this._makeRequest(t,e,n)}}function Mt(t,e){return Pt(t=Object(R.f)(t),e)}function Ft(t,{instanceIdentifier:e}){const n=t.getProvider("app").getImmediate(),r=t.getProvider("auth-internal"),i=t.getProvider("app-check-internal");return new jt(n,r,i,new z,e,k.a)}function Ut(t){return(Ut="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Vt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function Bt(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Vt(Object(n),!0).forEach((function(e){Wt(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Vt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function zt(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function qt(t,e){return(qt=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function $t(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=Kt(t);if(e){var i=Kt(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return Ht(this,n)}}function Ht(t,e){if(e&&("object"===Ut(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return Gt(t)}function Gt(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function Kt(t){return(Kt=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function Wt(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}Object(k.c)(new N.a("storage",Ft,"PUBLIC").setMultipleInstances(!0)),Object(k.g)("@firebase/storage","0.8.2");var Yt=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&qt(t,e)}(o,t);var e,n,r,s=$t(o);function o(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),Wt(Gt(e=s.call(this,t)),"state",{db:null,storage:null,walkId:null,markers:[]});var n=t.value||window.location.href.split("_")[1];if(n){e.state=Bt(Bt(Bt({},e.state),window.firebase),{},{walkId:n});var r=Object(C.h)(Object(C.a)(e.state.db,n),Object(C.g)("date","desc"));Object(C.f)(r,(function(t){var n=[];t.docs.forEach((function(t){n.push(Bt({id:t.id},t.data()))})),e.setState((function(t){return Bt(Bt({},t),{},{markers:n})}))}))}return e}return e=o,(n=[{key:"deleteMarker",value:function(t){var e=this,n=t.id,r=Object(C.c)(this.state.db,this.state.walkId,n);Object(C.d)(r).then((function(t){var n,i=t.data();if(i.storagePath){var s=Mt(e.state.storage,i.storagePath);n=s,Nt(n=Object(R.f)(n))}Object(C.b)(r)}))}},{key:"renderImage",value:function(t){var e=this,n=t.marker,r=t.style;return i.a.createElement("div",{key:n.id,style:Bt({width:"300px"},r)},i.a.createElement("button",{onClick:function(t){return confirm("Delete?")&&e.deleteMarker(n)}},"Delete"),i.a.createElement("a",{style:{display:"block",margin:"0 10px"},href:n.image.uri,target:"_blank"},i.a.createElement("img",{style:{maxHeight:600,width:"100%"},src:"".concat(n.image.uri,"?w=300")})))}},{key:"render",value:function(){var t=this;return this.state.markers.length?i.a.createElement(O,{scrollDirection:"horizontal",width:"100%",height:630,itemCount:this.state.markers.length,itemSize:320,renderItem:function(e){var n=e.index,r=e.style;return t.renderImage({marker:t.state.markers[n],style:r})}}):null}}])&&zt(e.prototype,n),r&&zt(e,r),o}(r.Component);function Qt(t){return(Qt="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function Xt(t){return function(t){if(Array.isArray(t))return Jt(t)}(t)||function(t){if("undefined"!=typeof Symbol&&null!=t[Symbol.iterator]||null!=t["@@iterator"])return Array.from(t)}(t)||function(t,e){if(!t)return;if("string"==typeof t)return Jt(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);"Object"===n&&t.constructor&&(n=t.constructor.name);if("Map"===n||"Set"===n)return Array.from(t);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return Jt(t,e)}(t)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function Jt(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}function Zt(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function te(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?Zt(Object(n),!0).forEach((function(e){ae(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):Zt(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function ee(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function ne(t,e){return(ne=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function re(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=oe(t);if(e){var i=oe(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return ie(this,n)}}function ie(t,e){if(e&&("object"===Qt(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return se(t)}function se(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function oe(t){return(oe=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function ae(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var ce=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&ne(t,e)}(o,t);var e,n,r,s=re(o);function o(t){var e;!function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),ae(se(e=s.call(this,t)),"state",{root:null,files:[],uploading:null,value:null});var n=t.config.backend.branch,r=t.entry.get("slug"),i="mp3/".concat(n,"/").concat(r,"/");return e.state=te(te({},e.state),{},{branch:n,slug:r,root:i,value:t.value||""}),e}return e=o,(n=[{key:"handleUpload",value:function(t){var e,n,r,i=this,s=t.target.files[0],o=Mt(window.firebase.storage,this.state.root+s.name);this.setState((function(t){return te(te({},t),{},{uploading:s.name})})),(e=o,n=s,kt(e=Object(R.f)(e),n,r)).then((function(t){(function(t){return Rt(t=Object(R.f)(t))})(t.ref).then((function(t){i.props.onChange(t),i.setState((function(e){return te(te({},e),{},{value:t,uploading:null})}))}))}))}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{style:{border:"2px solid rgb(223, 223, 223)",padding:"1rem"}},"string"==typeof this.state.value?i.a.createElement("div",null,i.a.createElement("div",null,i.a.createElement("audio",{key:this.state.value,controls:!0},i.a.createElement("source",{src:this.state.value,type:"audio/mpeg"}))),i.a.createElement("div",null,i.a.createElement("h3",null,this.state.value?"Choose a different file":"Upload"),i.a.createElement("input",{type:"file",name:"filename",accept:"audio/mpeg",onChange:function(e){return t.handleUpload(e)}})),this.state.uploading?i.a.createElement("div",null,i.a.createElement("b",null,"Uploading: ",this.state.uploading)):null):this.state.value.map((function(t){return i.a.createElement("div",{key:t},i.a.createElement("a",{style:{cursor:"pointer"},onClick:function(){return window.open([].concat(Xt(window.location.href.split("/").slice(0,-1)),[t]).join("/"))}},t))})))}}])&&ee(e.prototype,n),r&&ee(e,r),o}(r.Component),ue=n(46);function le(t){return(le="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(t){return typeof t}:function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t})(t)}function he(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(t);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,r)}return n}function fe(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?he(Object(n),!0).forEach((function(e){be(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):he(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function de(t,e){for(var n=0;n<e.length;n++){var r=e[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(t,r.key,r)}}function pe(t,e){return(pe=Object.setPrototypeOf||function(t,e){return t.__proto__=e,t})(t,e)}function me(t){var e=function(){if("undefined"==typeof Reflect||!Reflect.construct)return!1;if(Reflect.construct.sham)return!1;if("function"==typeof Proxy)return!0;try{return Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],(function(){}))),!0}catch(t){return!1}}();return function(){var n,r=ve(t);if(e){var i=ve(this).constructor;n=Reflect.construct(r,arguments,i)}else n=r.apply(this,arguments);return ge(this,n)}}function ge(t,e){if(e&&("object"===le(e)||"function"==typeof e))return e;if(void 0!==e)throw new TypeError("Derived constructors may only return object or undefined");return ye(t)}function ye(t){if(void 0===t)throw new ReferenceError("this hasn't been initialised - super() hasn't been called");return t}function ve(t){return(ve=Object.setPrototypeOf?Object.getPrototypeOf:function(t){return t.__proto__||Object.getPrototypeOf(t)})(t)}function be(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}var we=function(t){!function(t,e){if("function"!=typeof e&&null!==e)throw new TypeError("Super expression must either be null or a function");t.prototype=Object.create(e&&e.prototype,{constructor:{value:t,writable:!0,configurable:!0}}),e&&pe(t,e)}(o,t);var e,n,r,s=me(o);function o(t){var e;return function(t,e){if(!(t instanceof e))throw new TypeError("Cannot call a class as a function")}(this,o),be(ye(e=s.call(this,t)),"state",{db:null,storage:null,dateStart:null,dateEnd:null,vouchers:null,getDataButton:!0}),e.state=fe(fe({},e.state),window.firebase),e}return e=o,(n=[{key:"handleDownload",value:function(t){var e=this;this.setState({getDataButton:!1}),this.state.dateStart=this.props.entry.getIn(["data","dateStart"]),this.state.dateEnd=this.props.entry.getIn(["data","dateEnd"]);var n="https://europe-west3-thewalks-8f658.cloudfunctions.net/voucherAnalytics?date_start="+this.state.dateStart+"&date_end="+this.state.dateEnd+"&key=tjXUEeTJezSPTK7vgpyDLXYmdqX8ZqkETjlDZg7Pq7ZK9lMBVz6p6h8iJ0mrKA2J";fetch(n).then((function(t){if(!t.ok)throw Error(t.statusText);return t.json()})).then((function(t){return e.setState({vouchers:t.used_vouchers})})).then((function(){return e.setState({getDataButton:!0})})).catch((function(t){console.log(t)}))}},{key:"render",value:function(){var t=this;return i.a.createElement("div",{style:{marginTop:"1rem"}},this.props.entry.getIn(["data","dateStart"])?Array.isArray(this.state.vouchers)?i.a.createElement(ue.CSVLink,{data:this.state.vouchers,separator:";"},"DOWNLOAD CSV DATA"):i.a.createElement("button",{onClick:function(){return t.handleDownload()},disabled:!this.state.getDataButton},"GET DATA"):i.a.createElement("div",null,"SELECT DATES + PUBLISH"))}}])&&de(e.prototype,n),r&&de(e,r),o}(r.Component);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Object(k.g)("firebase","9.0.2","app");var Ee,Te,_e,Se;Ee=window.location.origin+"/.netlify/functions/firebaseAuth",Te=function(t,e){Object(k.f)(e);var n=function(t=Object(k.e)(),e){return t=Object(R.f)(t),Object(k.b)(t,"storage").getImmediate({identifier:e})}(),r=Object(C.e)();window.firebase={storage:n,db:r},CMS.registerWidget("userImages",Yt),CMS.registerWidget("firebaseFile",ce),CMS.registerWidget("voucherAnalytics",we)},(Se=new XMLHttpRequest).open("GET",Ee,!0),Se.setRequestHeader("Authorization","Bearer ".concat(null===(_e=window.netlifyIdentity.currentUser())||void 0===_e?void 0:_e.token.access_token)),Se.responseType="json",Se.onload=function(){var t=Se.status;Te(200===t?null:t,Se.response)},Se.onerror=console.error,Se.send()}]);