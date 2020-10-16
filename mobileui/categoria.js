/*component-base*/var userAgent=navigator.userAgent||navigator.vendor||window.opera,SO={name:"unknown",code:0};/android/i.test(userAgent)&&(SO.name="Android",SO.class="platform-android",SO.code=1);/iPad|iPhone|iPod/.test(userAgent)&&!window.MSStream&&(SO.name="iOS",SO.class="platform-ios",SO.code=2);/windows phone/i.test(userAgent)&&(SO.name="Windows Phone",SO.class="platform-wp",SO.code=3);SO.class&&document.getElementsByTagName("body").length&&(document.getElementsByTagName("body")[0].className+=" "+SO.class);
/*component-page*/window.PAGE={handePage:100},document.addEventListener("deviceready",function(){document.addEventListener("backbutton",function(e){if(window.disabledBackButton)return e.preventDefault();var t=document.getElementsByClassName("box-block");t.length?(e.preventDefault(),window.backPage(t[t.length-1].id)):navigator.app.exitApp()},!1)},!1),window.dispatch=function(e,t){return(e="function"==typeof e?e:window[e]).apply(this,t||[])},window.openPage=function(e,t,n){if(2===arguments.length&&(n=t),e.indexOf(".html")<0&&(e+=".html"),document.getElementById(e)){var a=document.getElementsByClassName("box-block");if(a[a.length-1].id===document.getElementById(e).id)return!1;document.getElementById(e).parentNode.removeChild(document.getElementById(e))}var s=new XMLHttpRequest;s.onload=function(){if(4==this.readyState){var a=this.responseText;a=a.replace("backPage()","backPage('"+e+"')");var s=document.getElementsByTagName("body")[0];document.getElementsByClassName("body").length&&(s=document.getElementsByClassName("body")[0]);var d=document.createElement("div");d.setAttribute("class","box-block"),d.setAttribute("id",e),d.innerHTML=a,s.appendChild(d),function(){window.PAGE.handePage++;var a="z-index:"+window.PAGE.handePage,s=";transform: translateY(0px);will-change: transform, -webkit-transform, opacity;transition-duration: 280ms;transition-timing-function: cubic-bezier(0.36,0.66,0.04,1);";2===SO.code&&(s=";transform: translateX(0px);transition-duration: 280ms;"),window.disabledOpenPageEffect&&(s=";opacity: 1;top: 0;");var d=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("style");d?d+=" "+a+s:d=a+s,document.getElementById(e).getElementsByClassName("page")[0].setAttribute("style",d),n&&window.dispatch(n,[t]);var o=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("class");o+=" show";var l=function(){setTimeout(function(){document.getElementById(e)&&document.getElementById(e).querySelectorAll(".page").length?i():l()},10)};l();var m=new CustomEvent("openPage",{detail:{page:e}});document.dispatchEvent(m);var i=function(){setTimeout(function(){document.getElementById(e).getElementsByClassName("page")[0].setAttribute("class",o),setTimeout(function(){var t=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("style");t=t.replace(s,""),document.getElementById(e).getElementsByClassName("page")[0].setAttribute("style",t)},280)},100)}}()}},s.open("GET",e+"?cache="+(new Date).getTime(),!0),document.dispatchEvent(new Event("firedCloseMenu")),s.send()},window.backPage=function(e){if(!e){for(var t=document.querySelectorAll(".page.show"),n={zIndex:-1},a=0;a<t.length;a++){var s=Number(t[a].style.zIndex);n.zIndex<s&&(n.zIndex=s,n.element=t[a])}n.zIndex&&(e=n.element.parentElement.id)}document.getElementById(e).getElementsByClassName("page")[0];var d=";transform: translateY(0px);will-change: transform, -webkit-transform, opacity;transition-duration: 280ms;";window.disabledOpenPageEffect&&(d="");var o=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("style");o?o+=" "+d:o=d,document.getElementById(e).getElementsByClassName("page")[0].setAttribute("style",o);var l=document.getElementById(e).getElementsByClassName("page")[0].getAttribute("class");l+=l.replace("show",""),document.getElementById(e).getElementsByClassName("page")[0].setAttribute("class",l);var m=new CustomEvent("backPage",{detail:{page:e}});document.dispatchEvent(m),setTimeout(function(){var t=document.getElementById(e);t.parentElement.removeChild(t)},window.disabledOpenPageEffect?0:280)};
/*component-mobileuijs*/!function(t){if("object"==typeof exports&&"undefined"!=typeof module)module.exports=t();else if("function"==typeof define&&define.amd)define([],t);else{("undefined"!=typeof window?window:"undefined"!=typeof global?global:"undefined"!=typeof self?self:this).superagent=t()}}(function(){return function t(e,r,n){function i(s,a){if(!r[s]){if(!e[s]){var u="function"==typeof require&&require;if(!a&&u)return u(s,!0);if(o)return o(s,!0);var c=new Error("Cannot find module '"+s+"'");throw c.code="MODULE_NOT_FOUND",c}var h=r[s]={exports:{}};e[s][0].call(h.exports,function(t){return i(e[s][1][t]||t)},h,h.exports,t,e,r,n)}return r[s].exports}for(var o="function"==typeof require&&require,s=0;s<n.length;s++)i(n[s]);return i}({1:[function(t,e,r){var n=t("./is-object");e.exports=function(t){return"[object Function]"===(n(t)?Object.prototype.toString.call(t):"")}},{"./is-object":2}],2:[function(t,e,r){e.exports=function(t){return null!==t&&"object"==typeof t}},{}],3:[function(t,e,r){function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}var i=t("./is-object");e.exports=n,n.prototype.clearTimeout=function(){return clearTimeout(this._timer),clearTimeout(this._responseTimeoutTimer),delete this._timer,delete this._responseTimeoutTimer,this},n.prototype.parse=function(t){return this._parser=t,this},n.prototype.responseType=function(t){return this._responseType=t,this},n.prototype.serialize=function(t){return this._serializer=t,this},n.prototype.timeout=function(t){if(!t||"object"!=typeof t)return this._timeout=t,this._responseTimeout=0,this;for(var e in t)switch(e){case"deadline":this._timeout=t.deadline;break;case"response":this._responseTimeout=t.response;break;default:console.warn("Unknown timeout option",e)}return this},n.prototype.retry=function(t){return 0!==arguments.length&&!0!==t||(t=1),t<=0&&(t=0),this._maxRetries=t,this._retries=0,this},n.prototype._retry=function(){return this.clearTimeout(),this.req&&(this.req=null,this.req=this.request()),this._aborted=!1,this.timedout=!1,this._end()},n.prototype.then=function(t,e){if(!this._fullfilledPromise){var r=this;this._endCalled&&console.warn("Warning: superagent request was sent twice, because both .end() and .then() were called. Never call .end() if you use promises"),this._fullfilledPromise=new Promise(function(t,e){r.end(function(r,n){r?e(r):t(n)})})}return this._fullfilledPromise.then(t,e)},n.prototype.catch=function(t){return this.then(void 0,t)},n.prototype.use=function(t){return t(this),this},n.prototype.ok=function(t){if("function"!=typeof t)throw Error("Callback required");return this._okCallback=t,this},n.prototype._isResponseOK=function(t){return!!t&&(this._okCallback?this._okCallback(t):t.status>=200&&t.status<300)},n.prototype.get=function(t){return this._header[t.toLowerCase()]},n.prototype.getHeader=n.prototype.get,n.prototype.set=function(t,e){if(i(t)){for(var r in t)this.set(r,t[r]);return this}return this._header[t.toLowerCase()]=e,this.header[t]=e,this},n.prototype.unset=function(t){return delete this._header[t.toLowerCase()],delete this.header[t],this},n.prototype.field=function(t,e){if(null===t||void 0===t)throw new Error(".field(name, val) name can not be empty");if(this._data&&console.error(".field() can't be used if .send() is used. Please use only .send() or only .field() & .attach()"),i(t)){for(var r in t)this.field(r,t[r]);return this}if(Array.isArray(e)){for(var n in e)this.field(t,e[n]);return this}if(null===e||void 0===e)throw new Error(".field(name, val) val can not be empty");return"boolean"==typeof e&&(e=""+e),this._getFormData().append(t,e),this},n.prototype.abort=function(){return this._aborted?this:(this._aborted=!0,this.xhr&&this.xhr.abort(),this.req&&this.req.abort(),this.clearTimeout(),this.emit("abort"),this)},n.prototype.withCredentials=function(t){return void 0==t&&(t=!0),this._withCredentials=t,this},n.prototype.redirects=function(t){return this._maxRedirects=t,this},n.prototype.toJSON=function(){return{method:this.method,url:this.url,data:this._data,headers:this._header}},n.prototype.send=function(t){var e=i(t),r=this._header["content-type"];if(this._formData&&console.error(".send() can't be used if .attach() or .field() is used. Please use only .send() or only .field() & .attach()"),e&&!this._data)Array.isArray(t)?this._data=[]:this._isHost(t)||(this._data={});else if(t&&this._data&&this._isHost(this._data))throw Error("Can't merge these send calls");if(e&&i(this._data))for(var n in t)this._data[n]=t[n];else"string"==typeof t?(r||this.type("form"),r=this._header["content-type"],this._data="application/x-www-form-urlencoded"==r?this._data?this._data+"&"+t:t:(this._data||"")+t):this._data=t;return!e||this._isHost(t)?this:(r||this.type("json"),this)},n.prototype.sortQuery=function(t){return this._sort=void 0===t||t,this},n.prototype._timeoutError=function(t,e,r){if(!this._aborted){var n=new Error(t+e+"ms exceeded");n.timeout=e,n.code="ECONNABORTED",n.errno=r,this.timedout=!0,this.abort(),this.callback(n)}},n.prototype._setTimeouts=function(){var t=this;this._timeout&&!this._timer&&(this._timer=setTimeout(function(){t._timeoutError("Timeout of ",t._timeout,"ETIME")},this._timeout)),this._responseTimeout&&!this._responseTimeoutTimer&&(this._responseTimeoutTimer=setTimeout(function(){t._timeoutError("Response timeout of ",t._responseTimeout,"ETIMEDOUT")},this._responseTimeout))}},{"./is-object":2}],4:[function(t,e,r){function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}var i=t("./utils");e.exports=n,n.prototype.get=function(t){return this.header[t.toLowerCase()]},n.prototype._setHeaderProperties=function(t){var e=t["content-type"]||"";this.type=i.type(e);var r=i.params(e);for(var n in r)this[n]=r[n];this.links={};try{t.link&&(this.links=i.parseLinks(t.link))}catch(t){}},n.prototype._setStatusProperties=function(t){var e=t/100|0;this.status=this.statusCode=t,this.statusType=e,this.info=1==e,this.ok=2==e,this.redirect=3==e,this.clientError=4==e,this.serverError=5==e,this.error=(4==e||5==e)&&this.toError(),this.accepted=202==t,this.noContent=204==t,this.badRequest=400==t,this.unauthorized=401==t,this.notAcceptable=406==t,this.forbidden=403==t,this.notFound=404==t}},{"./utils":6}],5:[function(t,e,r){var n=["ECONNRESET","ETIMEDOUT","EADDRINFO","ESOCKETTIMEDOUT"];e.exports=function(t,e){return!!(t&&t.code&&~n.indexOf(t.code)||e&&e.status&&e.status>=500||t&&"timeout"in t&&"ECONNABORTED"==t.code||t&&"crossDomain"in t)}},{}],6:[function(t,e,r){r.type=function(t){return t.split(/ *; */).shift()},r.params=function(t){return t.split(/ *; */).reduce(function(t,e){var r=e.split(/ *= */),n=r.shift(),i=r.shift();return n&&i&&(t[n]=i),t},{})},r.parseLinks=function(t){return t.split(/ *, */).reduce(function(t,e){var r=e.split(/ *; */),n=r[0].slice(1,-1);return t[r[1].split(/ *= */)[1].slice(1,-1)]=n,t},{})},r.cleanHeader=function(t,e){return delete t["content-type"],delete t["content-length"],delete t["transfer-encoding"],delete t.host,e&&delete t.cookie,t}},{}],7:[function(t,e,r){function n(t){if(t)return function(t){for(var e in n.prototype)t[e]=n.prototype[e];return t}(t)}void 0!==e&&(e.exports=n),n.prototype.on=n.prototype.addEventListener=function(t,e){return this._callbacks=this._callbacks||{},(this._callbacks["$"+t]=this._callbacks["$"+t]||[]).push(e),this},n.prototype.once=function(t,e){function r(){this.off(t,r),e.apply(this,arguments)}return r.fn=e,this.on(t,r),this},n.prototype.off=n.prototype.removeListener=n.prototype.removeAllListeners=n.prototype.removeEventListener=function(t,e){if(this._callbacks=this._callbacks||{},0==arguments.length)return this._callbacks={},this;var r=this._callbacks["$"+t];if(!r)return this;if(1==arguments.length)return delete this._callbacks["$"+t],this;for(var n,i=0;i<r.length;i++)if((n=r[i])===e||n.fn===e){r.splice(i,1);break}return this},n.prototype.emit=function(t){this._callbacks=this._callbacks||{};var e=[].slice.call(arguments,1),r=this._callbacks["$"+t];if(r)for(var n=0,i=(r=r.slice(0)).length;n<i;++n)r[n].apply(this,e);return this},n.prototype.listeners=function(t){return this._callbacks=this._callbacks||{},this._callbacks["$"+t]||[]},n.prototype.hasListeners=function(t){return!!this.listeners(t).length}},{}],8:[function(t,e,r){function n(t){if(!p(t))return t;var e=[];for(var r in t)i(e,r,t[r]);return e.join("&")}function i(t,e,r){if(null!=r)if(Array.isArray(r))r.forEach(function(r){i(t,e,r)});else if(p(r))for(var n in r)i(t,e+"["+n+"]",r[n]);else t.push(encodeURIComponent(e)+"="+encodeURIComponent(r));else null===r&&t.push(encodeURIComponent(e))}function o(t){for(var e,r,n={},i=t.split("&"),o=0,s=i.length;o<s;++o)e=i[o],-1==(r=e.indexOf("="))?n[decodeURIComponent(e)]="":n[decodeURIComponent(e.slice(0,r))]=decodeURIComponent(e.slice(r+1));return n}function s(t){return/[\/+]json\b/.test(t)}function a(t){this.req=t,this.xhr=this.req.xhr,this.text="HEAD"!=this.req.method&&(""===this.xhr.responseType||"text"===this.xhr.responseType)||void 0===this.xhr.responseType?this.xhr.responseText:null,this.statusText=this.req.xhr.statusText;var e=this.xhr.status;1223===e&&(e=204),this._setStatusProperties(e),this.header=this.headers=function(t){var e,r,n,i,o=t.split(/\r?\n/),s={};o.pop();for(var a=0,u=o.length;a<u;++a)r=o[a],e=r.indexOf(":"),n=r.slice(0,e).toLowerCase(),i=v(r.slice(e+1)),s[n]=i;return s}(this.xhr.getAllResponseHeaders()),this.header["content-type"]=this.xhr.getResponseHeader("content-type"),this._setHeaderProperties(this.header),null===this.text&&t._responseType?this.body=this.xhr.response:this.body="HEAD"!=this.req.method?this._parseBody(this.text?this.text:this.xhr.response):null}function u(t,e){var r=this;this._query=this._query||[],this.method=t,this.url=e,this.header={},this._header={},this.on("end",function(){var t=null,e=null;try{e=new a(r)}catch(e){return t=new Error("Parser is unable to parse the response"),t.parse=!0,t.original=e,r.xhr?(t.rawResponse=void 0===r.xhr.responseType?r.xhr.responseText:r.xhr.response,t.status=r.xhr.status?r.xhr.status:null,t.statusCode=t.status):(t.rawResponse=null,t.status=null),r.callback(t)}r.emit("response",e);var n;try{r._isResponseOK(e)||(n=new Error(e.statusText||"Unsuccessful HTTP response"),n.original=t,n.response=e,n.status=e.status)}catch(t){n=t}n?r.callback(n,e):r.callback(null,e)})}function c(t,e,r){var n=b("DELETE",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}var h;"undefined"!=typeof window?h=window:"undefined"!=typeof self?h=self:(console.warn("Using browser-only version of superagent in non-browser environment"),h=this);var l=t("component-emitter"),d=t("./request-base"),p=t("./is-object"),f=t("./is-function"),y=t("./response-base"),m=t("./should-retry"),b=r=e.exports=function(t,e){return"function"==typeof e?new r.Request("GET",t).end(e):1==arguments.length?new r.Request("GET",t):new r.Request(t,e)};r.Request=u,b.getXHR=function(){if(!(!h.XMLHttpRequest||h.location&&"file:"==h.location.protocol&&h.ActiveXObject))return new XMLHttpRequest;try{return new ActiveXObject("Microsoft.XMLHTTP")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.6.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP.3.0")}catch(t){}try{return new ActiveXObject("Msxml2.XMLHTTP")}catch(t){}throw Error("Browser-only verison of superagent could not find XHR")};var v="".trim?function(t){return t.trim()}:function(t){return t.replace(/(^\s*|\s*$)/g,"")};b.serializeObject=n,b.parseString=o,b.types={html:"text/html",json:"application/json",xml:"application/xml",urlencoded:"application/x-www-form-urlencoded",form:"application/x-www-form-urlencoded","form-data":"application/x-www-form-urlencoded"},b.serialize={"application/x-www-form-urlencoded":n,"application/json":JSON.stringify},b.parse={"application/x-www-form-urlencoded":o,"application/json":JSON.parse},y(a.prototype),a.prototype._parseBody=function(t){var e=b.parse[this.type];return this.req._parser?this.req._parser(this,t):(!e&&s(this.type)&&(e=b.parse["application/json"]),e&&t&&(t.length||t instanceof Object)?e(t):null)},a.prototype.toError=function(){var t=this.req,e=t.method,r=t.url,n="cannot "+e+" "+r+" ("+this.status+")",i=new Error(n);return i.status=this.status,i.method=e,i.url=r,i},b.Response=a,l(u.prototype),d(u.prototype),u.prototype.type=function(t){return this.set("Content-Type",b.types[t]||t),this},u.prototype.accept=function(t){return this.set("Accept",b.types[t]||t),this},u.prototype.auth=function(t,e,r){switch("object"==typeof e&&null!==e&&(r=e),r||(r={type:"function"==typeof btoa?"basic":"auto"}),r.type){case"basic":this.set("Authorization","Basic "+btoa(t+":"+e));break;case"auto":this.username=t,this.password=e;break;case"bearer":this.set("Authorization","Bearer "+t)}return this},u.prototype.query=function(t){return"string"!=typeof t&&(t=n(t)),t&&this._query.push(t),this},u.prototype.attach=function(t,e,r){if(e){if(this._data)throw Error("superagent can't mix .send() and .attach()");this._getFormData().append(t,e,r||e.name)}return this},u.prototype._getFormData=function(){return this._formData||(this._formData=new h.FormData),this._formData},u.prototype.callback=function(t,e){if(this._maxRetries&&this._retries++<this._maxRetries&&m(t,e))return this._retry();var r=this._callback;this.clearTimeout(),t&&(this._maxRetries&&(t.retries=this._retries-1),this.emit("error",t)),r(t,e)},u.prototype.crossDomainError=function(){var t=new Error("Request has been terminated\nPossible causes: the network is offline, Origin is not allowed by Access-Control-Allow-Origin, the page is being unloaded, etc.");t.crossDomain=!0,t.status=this.status,t.method=this.method,t.url=this.url,this.callback(t)},u.prototype.buffer=u.prototype.ca=u.prototype.agent=function(){return console.warn("This is not supported in browser version of superagent"),this},u.prototype.pipe=u.prototype.write=function(){throw Error("Streaming is not supported in browser version of superagent")},u.prototype._appendQueryString=function(){var t=this._query.join("&");if(t&&(this.url+=(this.url.indexOf("?")>=0?"&":"?")+t),this._sort){var e=this.url.indexOf("?");if(e>=0){var r=this.url.substring(e+1).split("&");f(this._sort)?r.sort(this._sort):r.sort(),this.url=this.url.substring(0,e)+"?"+r.join("&")}}},u.prototype._isHost=function(t){return t&&"object"==typeof t&&!Array.isArray(t)&&"[object Object]"!==Object.prototype.toString.call(t)},u.prototype.end=function(t){return this._endCalled&&console.warn("Warning: .end() was called twice. This is not supported in superagent"),this._endCalled=!0,this._callback=t||function(){},this._appendQueryString(),this._end()},u.prototype._end=function(){var t=this,e=this.xhr=b.getXHR(),r=this._formData||this._data;this._setTimeouts(),e.onreadystatechange=function(){var r=e.readyState;if(r>=2&&t._responseTimeoutTimer&&clearTimeout(t._responseTimeoutTimer),4==r){var n;try{n=e.status}catch(t){n=0}if(!n){if(t.timedout||t._aborted)return;return t.crossDomainError()}t.emit("end")}};var n=function(e,r){r.total>0&&(r.percent=r.loaded/r.total*100),r.direction=e,t.emit("progress",r)};if(this.hasListeners("progress"))try{e.onprogress=n.bind(null,"download"),e.upload&&(e.upload.onprogress=n.bind(null,"upload"))}catch(t){}try{this.username&&this.password?e.open(this.method,this.url,!0,this.username,this.password):e.open(this.method,this.url,!0)}catch(t){return this.callback(t)}if(this._withCredentials&&(e.withCredentials=!0),!this._formData&&"GET"!=this.method&&"HEAD"!=this.method&&"string"!=typeof r&&!this._isHost(r)){var i=this._header["content-type"],o=this._serializer||b.serialize[i?i.split(";")[0]:""];!o&&s(i)&&(o=b.serialize["application/json"]),o&&(r=o(r))}for(var a in this.header)null!=this.header[a]&&this.header.hasOwnProperty(a)&&e.setRequestHeader(a,this.header[a]);return this._responseType&&(e.responseType=this._responseType),this.emit("request",this),e.send(void 0!==r?r:null),this},b.get=function(t,e,r){var n=b("GET",t);return"function"==typeof e&&(r=e,e=null),e&&n.query(e),r&&n.end(r),n},b.head=function(t,e,r){var n=b("HEAD",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},b.options=function(t,e,r){var n=b("OPTIONS",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},b.del=c,b.delete=c,b.patch=function(t,e,r){var n=b("PATCH",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},b.post=function(t,e,r){var n=b("POST",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n},b.put=function(t,e,r){var n=b("PUT",t);return"function"==typeof e&&(r=e,e=null),e&&n.send(e),r&&n.end(r),n}},{"./is-function":1,"./is-object":2,"./request-base":3,"./response-base":4,"./should-retry":5,"component-emitter":7}]},{},[8])(8)}),function(){var observerWatchers=[],tokenObserver=0,dataBind=function(){for(var t=document.querySelectorAll("[data]"),e=0;e<t.length;e++)if(t[e].getAttribute("data")&&!t[e].getAttribute("data-binded")){var r=t[e].getAttribute("data");(r=fetchFromObject(window,r))&&(writeElement(t[e],r),t[e].setAttribute("data-binded","mobileui"),dataObserver(t[e].getAttribute("data"),tokenObserver++))}eventLoopBind()};eventLoopBind=function(){setTimeout(function(){dataBind()},100)},reDataBind=function(t){for(var e=fetchFromObject(window,t.dataKey),r=document.querySelectorAll("[data-binded]"),n=0;n<r.length;n++)r[n].getAttribute("data-binded")===t.dataKey&&r[n].parentNode.removeChild(r[n]);r=document.querySelectorAll("[data][data-binded]");for(n=0;n<r.length;n++)r[n].getAttribute("data")===t.dataKey&&writeElement(r[n],e);t.dataValue=copyObj(e)},writeElement=function(elm,data){var bindWriteElement=function(dataObj,index){for(var html=elm.outerHTML,exp=/\${/g;match=exp.exec(html);){var prop=html.slice(match.index+2,html.length).split("}")[0],value=fetchFromObject(dataObj,prop);html=html.replace("${"+prop+"}",value)}index&&(html=html.replace(new RegExp("\\$\\$index","g"),index));for(var functionBind=html.split("$$"),i=1;i<functionBind.length;i++){var prop=functionBind[i].split("{")[1].split(",")[0].split("}")[0],value=fetchFromObject(dataObj,prop),functionName=functionBind[i].split("{")[0],functionReplace=functionBind[i].split("}")[0]+"}",functionInvoke="window.MobileUI."+functionBind[i].split("}")[0].replace(prop,"'"+value+"'").replace("{","(")+")",valueBind=eval(functionInvoke);html=html.replace(new RegExp("\\$\\$"+functionReplace,"g"),valueBind)}var divBind=document.createElement("div");elm.parentNode.insertBefore(divBind,elm),html=html.replace("data=","data-binded="),divBind.outerHTML=html};if(data.constructor===Array)for(var id in data)bindWriteElement(data[id],id);else bindWriteElement(data)},fetchFromObject=function(t,e){if(void 0===t)return console.error("Object for property ",e," is undefined!"),"";var r=e.indexOf(".");return r>-1?fetchFromObject(t[e.substring(0,r)],e.substr(r+1)):t.constructor===String||t.constructor===Number||t.constructor===Boolean||t.constructor===Date?t||"":t[e]?t[e]:""},dispatchEventObserver=function(t){var e=new CustomEvent("dataUpdated",{detail:{dataKey:t.dataKey,dataValue:t.dataValue}});document.dispatchEvent(e)},dataObserver=function(t,e){observerWatchers[e]||(observerWatchers[e]={dataKey:t,dataValue:copyObj(fetchFromObject(window,t))});var r=fetchFromObject(window,observerWatchers[e].dataKey);observerWatchers[e].dataValue.constructor===Array&&observerWatchers[e].dataValue.length!==r.length?(reDataBind(observerWatchers[e]),dispatchEventObserver(observerWatchers[e])):observerWatchers[e].dataValue.constructor===Array&&observerWatchers[e].dataValue.toString()!==r.toString()?(reDataBind(observerWatchers[e]),dispatchEventObserver(observerWatchers[e])):JSON.stringify(observerWatchers[e].dataValue)!==JSON.stringify(r)&&(reDataBind(observerWatchers[e]),dispatchEventObserver(observerWatchers[e])),setTimeout(function(){dataObserver(t,e)},100)},copyObj=function(t){return JSON.parse(JSON.stringify(t))},dataBind(),window.MobileUI={bind:function(){dataBind()},objectByForm:function(t){for(var e=document.getElementById(t),r={},n=e.querySelectorAll("input,textarea,select"),i=0;i<n.length;i++)if(n[i].id&&"checkbox"===n[i].type)r[n[i].id]=n[i].checked;else if(n[i].name&&"radio"===n[i].type){var o=e.querySelector('input[name="'+n[i].name+'"]:checked').value;o&&(r[n[i].name]=o)}else n[i].id&&(r[n[i].id]=n[i].value);return r},disable:function(t){for(var e=document.getElementById(t).querySelectorAll("input,textarea,select,button,a"),r=0;r<e.length;r++)e[r].setAttribute("disabled","disabled")},enable:function(t){for(var e=document.getElementById(t).querySelectorAll("input,textarea,select,button,a"),r=0;r<e.length;r++)e[r].removeAttribute("disabled")},formByObject:function(t,e){for(var r=document.getElementById(t),n=r.querySelectorAll("input,textarea,select"),i=0;i<n.length;i++)if(n[i].id&&"checkbox"===n[i].type)n[i].checked=e[n[i].id];else if(n[i].name&&"radio"===n[i].type){var o=r.querySelector('input[name="'+n[i].name+'"][value="'+e[n[i].name]+'"]');o&&(o.checked=!0)}else n[i].id&&e[n[i].id]&&(n[i].value=e[n[i].id])},clearForm:function(t){for(var e=document.getElementById(t),r=e.querySelectorAll("input,textarea,select"),n=0;n<r.length;n++)if(r[n].id&&r[n].type.indexOf("select")>=0){for(var i=r[n].options,o=0;o<i.length;o++)i[o].defaultSelected&&(r[n].selectedIndex=o,r[n].found=!0);r[n].found||(r[n].selectedIndex=0)}else r[n].id&&"checkbox"===r[n].type?r[n].checked=null!==r[n].getAttribute("checked"):r[n].name&&"radio"===r[n].type?e.querySelector('input[name="'+r[n].name+'"][checked]').checked=!0:r[n].id&&(r[n].value="")},show:function(t){document.getElementById(t).style.display="block"},hide:function(t){document.getElementById(t).style.display="none"},showHide:function(t){null===document.getElementById(t).offsetParent?this.show(t):this.hide(t)},focus:function(t){document.getElementById(t).focus()},formatMoney:function(t,e,r,n){var e=isNaN(e=Math.abs(e))?2:e,r=void 0==r?".":r,n=void 0==n?",":n,i=t<0?"-":"",o=String(parseInt(t=Math.abs(Number(t)||0).toFixed(e))),s=(s=o.length)>3?s%3:0;return i+(s?o.substr(0,s)+n:"")+o.substr(s).replace(/(\d{3})(?=\d)/g,"$1"+n)+(e?r+Math.abs(t-o).toFixed(e).slice(2):"")},ajax:superagent}}();
/*component-button*/document.addEventListener("click",function(e){if(1!==SO.code)return!1;var t=e.target;if("button"!==t.tagName.toLowerCase())return!1;var o=t.getBoundingClientRect(),s=t.querySelector(".ripple");s||((s=document.createElement("span")).className="ripple",s.style.height=s.style.width=Math.max(o.width,o.height)+"px",t.appendChild(s)),s.classList.remove("show");var a=e.pageY-o.top-s.offsetHeight/2-document.body.scrollTop,l=e.pageX-o.left-s.offsetWidth/2-document.body.scrollLeft;return s.style.top=a+"px",s.style.left=l+"px",s.classList.add("show"),!1},!1);
