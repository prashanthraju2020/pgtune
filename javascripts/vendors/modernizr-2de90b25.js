window.Modernizr=function(e,t,n){function r(e){b.cssText=e}function i(e,t){return r(C.join(e+";")+(t||""))}function o(e,t){return typeof e===t}function a(e,t){return!!~(""+e).indexOf(t)}function s(e,t){for(var r in e){var i=e[r];if(!a(i,"-")&&b[i]!==n)return"pfx"==t?i:!0}return!1}function c(e,t,r){for(var i in e){var a=t[e[i]];if(a!==n)return r===!1?e[i]:o(a,"function")?a.bind(r||t):a}return!1}function u(e,t,n){var r=e.charAt(0).toUpperCase()+e.slice(1),i=(e+" "+S.join(r+" ")+r).split(" ");return o(t,"string")||o(t,"undefined")?s(i,t):(i=(e+" "+k.join(r+" ")+r).split(" "),c(i,t,n))}function l(){h.input=function(n){for(var r=0,i=n.length;i>r;r++)B[n[r]]=n[r]in x;return B.list&&(B.list=!!t.createElement("datalist")&&!!e.HTMLDataListElement),B}("autocomplete autofocus list placeholder max min multiple pattern required step".split(" ")),h.inputtypes=function(e){for(var r,i,o,a=0,s=e.length;s>a;a++)x.setAttribute("type",i=e[a]),r="text"!==x.type,r&&(x.value=w,x.style.cssText="position:absolute;visibility:hidden;",/^range$/.test(i)&&x.style.WebkitAppearance!==n?(g.appendChild(x),o=t.defaultView,r=o.getComputedStyle&&"textfield"!==o.getComputedStyle(x,null).WebkitAppearance&&0!==x.offsetHeight,g.removeChild(x)):/^(search|tel)$/.test(i)||(r=/^(url|email)$/.test(i)?x.checkValidity&&x.checkValidity()===!1:x.value!=w)),M[e[a]]=!!r;return M}("search tel url email datetime date month week time datetime-local number range color".split(" "))}var f,d,p="2.8.3",h={},m=!0,g=t.documentElement,v="modernizr",y=t.createElement(v),b=y.style,x=t.createElement("input"),w=":)",_={}.toString,C=" -webkit- -moz- -o- -ms- ".split(" "),T="Webkit Moz O ms",S=T.split(" "),k=T.toLowerCase().split(" "),E={svg:"http://www.w3.org/2000/svg"},N={},M={},B={},A=[],j=A.slice,L=function(e,n,r,i){var o,a,s,c,u=t.createElement("div"),l=t.body,f=l||t.createElement("body");if(parseInt(r,10))for(;r--;)s=t.createElement("div"),s.id=i?i[r]:v+(r+1),u.appendChild(s);return o=["&#173;",'<style id="s',v,'">',e,"</style>"].join(""),u.id=v,(l?u:f).innerHTML+=o,f.appendChild(u),l||(f.style.background="",f.style.overflow="hidden",c=g.style.overflow,g.style.overflow="hidden",g.appendChild(f)),a=n(u,e),l?u.parentNode.removeChild(u):(f.parentNode.removeChild(f),g.style.overflow=c),!!a},z=function(){function e(e,i){i=i||t.createElement(r[e]||"div"),e="on"+e;var a=e in i;return a||(i.setAttribute||(i=t.createElement("div")),i.setAttribute&&i.removeAttribute&&(i.setAttribute(e,""),a=o(i[e],"function"),o(i[e],"undefined")||(i[e]=n),i.removeAttribute(e))),i=null,a}var r={select:"input",change:"input",submit:"form",reset:"form",error:"img",load:"img",abort:"img"};return e}(),D={}.hasOwnProperty;d=o(D,"undefined")||o(D.call,"undefined")?function(e,t){return t in e&&o(e.constructor.prototype[t],"undefined")}:function(e,t){return D.call(e,t)},Function.prototype.bind||(Function.prototype.bind=function(e){var t=this;if("function"!=typeof t)throw new TypeError;var n=j.call(arguments,1),r=function(){if(this instanceof r){var i=function(){};i.prototype=t.prototype;var o=new i,a=t.apply(o,n.concat(j.call(arguments)));return Object(a)===a?a:o}return t.apply(e,n.concat(j.call(arguments)))};return r}),N.flexbox=function(){return u("flexWrap")},N.flexboxlegacy=function(){return u("boxDirection")},N.canvas=function(){var e=t.createElement("canvas");return!!e.getContext&&!!e.getContext("2d")},N.canvastext=function(){return!!h.canvas&&!!o(t.createElement("canvas").getContext("2d").fillText,"function")},N.webgl=function(){return!!e.WebGLRenderingContext},N.touch=function(){var n;return"ontouchstart"in e||e.DocumentTouch&&t instanceof DocumentTouch?n=!0:L(["@media (",C.join("touch-enabled),("),v,")","{#modernizr{top:9px;position:absolute}}"].join(""),function(e){n=9===e.offsetTop}),n},N.geolocation=function(){return"geolocation"in navigator},N.postmessage=function(){return!!e.postMessage},N.websqldatabase=function(){return!!e.openDatabase},N.indexedDB=function(){return!!u("indexedDB",e)},N.hashchange=function(){return z("hashchange",e)&&(t.documentMode===n||t.documentMode>7)},N.history=function(){return!!e.history&&!!history.pushState},N.draganddrop=function(){var e=t.createElement("div");return"draggable"in e||"ondragstart"in e&&"ondrop"in e},N.websockets=function(){return"WebSocket"in e||"MozWebSocket"in e},N.rgba=function(){return r("background-color:rgba(150,255,150,.5)"),a(b.backgroundColor,"rgba")},N.hsla=function(){return r("background-color:hsla(120,40%,100%,.5)"),a(b.backgroundColor,"rgba")||a(b.backgroundColor,"hsla")},N.multiplebgs=function(){return r("background:url(https://),url(https://),red url(https://)"),/(url\s*\(.*?){3}/.test(b.background)},N.backgroundsize=function(){return u("backgroundSize")},N.borderimage=function(){return u("borderImage")},N.borderradius=function(){return u("borderRadius")},N.boxshadow=function(){return u("boxShadow")},N.textshadow=function(){return""===t.createElement("div").style.textShadow},N.opacity=function(){return i("opacity:.55"),/^0.55$/.test(b.opacity)},N.cssanimations=function(){return u("animationName")},N.csscolumns=function(){return u("columnCount")},N.cssgradients=function(){var e="background-image:",t="gradient(linear,left top,right bottom,from(#9f9),to(white));",n="linear-gradient(left top,#9f9, white);";return r((e+"-webkit- ".split(" ").join(t+e)+C.join(n+e)).slice(0,-e.length)),a(b.backgroundImage,"gradient")},N.cssreflections=function(){return u("boxReflect")},N.csstransforms=function(){return!!u("transform")},N.csstransforms3d=function(){var e=!!u("perspective");return e&&"webkitPerspective"in g.style&&L("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}",function(t,n){e=9===t.offsetLeft&&3===t.offsetHeight}),e},N.csstransitions=function(){return u("transition")},N.fontface=function(){var e;return L('@font-face {font-family:"font";src:url("https://")}',function(n,r){var i=t.getElementById("smodernizr"),o=i.sheet||i.styleSheet,a=o?o.cssRules&&o.cssRules[0]?o.cssRules[0].cssText:o.cssText||"":"";e=/src/i.test(a)&&0===a.indexOf(r.split(" ")[0])}),e},N.generatedcontent=function(){var e;return L(["#",v,"{font:0/0 a}#",v,':after{content:"',w,'";visibility:hidden;font:3px/1 a}'].join(""),function(t){e=t.offsetHeight>=3}),e},N.video=function(){var e=t.createElement("video"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('video/ogg; codecs="theora"').replace(/^no$/,""),n.h264=e.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/,""),n.webm=e.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/,""))}catch(r){}return n},N.audio=function(){var e=t.createElement("audio"),n=!1;try{(n=!!e.canPlayType)&&(n=new Boolean(n),n.ogg=e.canPlayType('audio/ogg; codecs="vorbis"').replace(/^no$/,""),n.mp3=e.canPlayType("audio/mpeg;").replace(/^no$/,""),n.wav=e.canPlayType('audio/wav; codecs="1"').replace(/^no$/,""),n.m4a=(e.canPlayType("audio/x-m4a;")||e.canPlayType("audio/aac;")).replace(/^no$/,""))}catch(r){}return n},N.localstorage=function(){try{return localStorage.setItem(v,v),localStorage.removeItem(v),!0}catch(e){return!1}},N.sessionstorage=function(){try{return sessionStorage.setItem(v,v),sessionStorage.removeItem(v),!0}catch(e){return!1}},N.webworkers=function(){return!!e.Worker},N.applicationcache=function(){return!!e.applicationCache},N.svg=function(){return!!t.createElementNS&&!!t.createElementNS(E.svg,"svg").createSVGRect},N.inlinesvg=function(){var e=t.createElement("div");return e.innerHTML="<svg/>",(e.firstChild&&e.firstChild.namespaceURI)==E.svg},N.smil=function(){return!!t.createElementNS&&/SVGAnimate/.test(_.call(t.createElementNS(E.svg,"animate")))},N.svgclippaths=function(){return!!t.createElementNS&&/SVGClipPath/.test(_.call(t.createElementNS(E.svg,"clipPath")))};for(var $ in N)d(N,$)&&(f=$.toLowerCase(),h[f]=N[$](),A.push((h[f]?"":"no-")+f));return h.input||l(),h.addTest=function(e,t){if("object"==typeof e)for(var r in e)d(e,r)&&h.addTest(r,e[r]);else{if(e=e.toLowerCase(),h[e]!==n)return h;t="function"==typeof t?t():t,"undefined"!=typeof m&&m&&(g.className+=" "+(t?"":"no-")+e),h[e]=t}return h},r(""),y=x=null,function(e,t){function n(e,t){var n=e.createElement("p"),r=e.getElementsByTagName("head")[0]||e.documentElement;return n.innerHTML="x<style>"+t+"</style>",r.insertBefore(n.lastChild,r.firstChild)}function r(){var e=y.elements;return"string"==typeof e?e.split(" "):e}function i(e){var t=v[e[m]];return t||(t={},g++,e[m]=g,v[g]=t),t}function o(e,n,r){if(n||(n=t),l)return n.createElement(e);r||(r=i(n));var o;return o=r.cache[e]?r.cache[e].cloneNode():h.test(e)?(r.cache[e]=r.createElem(e)).cloneNode():r.createElem(e),!o.canHaveChildren||p.test(e)||o.tagUrn?o:r.frag.appendChild(o)}function a(e,n){if(e||(e=t),l)return e.createDocumentFragment();n=n||i(e);for(var o=n.frag.cloneNode(),a=0,s=r(),c=s.length;c>a;a++)o.createElement(s[a]);return o}function s(e,t){t.cache||(t.cache={},t.createElem=e.createElement,t.createFrag=e.createDocumentFragment,t.frag=t.createFrag()),e.createElement=function(n){return y.shivMethods?o(n,e,t):t.createElem(n)},e.createDocumentFragment=Function("h,f","return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&("+r().join().replace(/[\w\-]+/g,function(e){return t.createElem(e),t.frag.createElement(e),'c("'+e+'")'})+");return n}")(y,t.frag)}function c(e){e||(e=t);var r=i(e);return y.shivCSS&&!u&&!r.hasCSS&&(r.hasCSS=!!n(e,"article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")),l||s(e,r),e}var u,l,f="3.7.0",d=e.html5||{},p=/^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,h=/^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,m="_html5shiv",g=0,v={};!function(){try{var e=t.createElement("a");e.innerHTML="<xyz></xyz>",u="hidden"in e,l=1==e.childNodes.length||function(){t.createElement("a");var e=t.createDocumentFragment();return"undefined"==typeof e.cloneNode||"undefined"==typeof e.createDocumentFragment||"undefined"==typeof e.createElement}()}catch(n){u=!0,l=!0}}();var y={elements:d.elements||"abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",version:f,shivCSS:d.shivCSS!==!1,supportsUnknownElements:l,shivMethods:d.shivMethods!==!1,type:"default",shivDocument:c,createElement:o,createDocumentFragment:a};e.html5=y,c(t)}(this,t),h._version=p,h._prefixes=C,h._domPrefixes=k,h._cssomPrefixes=S,h.hasEvent=z,h.testProp=function(e){return s([e])},h.testAllProps=u,h.testStyles=L,g.className=g.className.replace(/(^|\s)no-js(\s|$)/,"$1$2")+(m?" js "+A.join(" "):""),h}(this,this.document),function(e,t,n){function r(e){return"[object Function]"==g.call(e)}function i(e){return"string"==typeof e}function o(){}function a(e){return!e||"loaded"==e||"complete"==e||"uninitialized"==e}function s(){var e=v.shift();y=1,e?e.t?h(function(){("c"==e.t?d.injectCss:d.injectJs)(e.s,0,e.a,e.x,e.e,1)},0):(e(),s()):y=0}function c(e,n,r,i,o,c,u){function l(t){if(!p&&a(f.readyState)&&(b.r=p=1,!y&&s(),f.onload=f.onreadystatechange=null,t)){"img"!=e&&h(function(){w.removeChild(f)},50);for(var r in k[n])k[n].hasOwnProperty(r)&&k[n][r].onload()}}var u=u||d.errorTimeout,f=t.createElement(e),p=0,g=0,b={t:r,s:n,e:o,a:c,x:u};1===k[n]&&(g=1,k[n]=[]),"object"==e?f.data=n:(f.src=n,f.type=e),f.width=f.height="0",f.onerror=f.onload=f.onreadystatechange=function(){l.call(this,g)},v.splice(i,0,b),"img"!=e&&(g||2===k[n]?(w.insertBefore(f,x?null:m),h(l,u)):k[n].push(f))}function u(e,t,n,r,o){return y=0,t=t||"j",i(e)?c("c"==t?C:_,e,t,this.i++,n,r,o):(v.splice(this.i++,0,e),1==v.length&&s()),this}function l(){var e=d;return e.loader={load:u,i:0},e}var f,d,p=t.documentElement,h=e.setTimeout,m=t.getElementsByTagName("script")[0],g={}.toString,v=[],y=0,b="MozAppearance"in p.style,x=b&&!!t.createRange().compareNode,w=x?p:m.parentNode,p=e.opera&&"[object Opera]"==g.call(e.opera),p=!!t.attachEvent&&!p,_=b?"object":p?"script":"img",C=p?"script":_,T=Array.isArray||function(e){return"[object Array]"==g.call(e)},S=[],k={},E={timeout:function(e,t){return t.length&&(e.timeout=t[0]),e}};d=function(e){function t(e){var t,n,r,e=e.split("!"),i=S.length,o=e.pop(),a=e.length,o={url:o,origUrl:o,prefixes:e};for(n=0;a>n;n++)r=e[n].split("="),(t=E[r.shift()])&&(o=t(o,r));for(n=0;i>n;n++)o=S[n](o);return o}function a(e,i,o,a,s){var c=t(e),u=c.autoCallback;c.url.split(".").pop().split("?").shift(),c.bypass||(i&&(i=r(i)?i:i[e]||i[a]||i[e.split("/").pop().split("?")[0]]),c.instead?c.instead(e,i,o,a,s):(k[c.url]?c.noexec=!0:k[c.url]=1,o.load(c.url,c.forceCSS||!c.forceJS&&"css"==c.url.split(".").pop().split("?").shift()?"c":n,c.noexec,c.attrs,c.timeout),(r(i)||r(u))&&o.load(function(){l(),i&&i(c.origUrl,s,a),u&&u(c.origUrl,s,a),k[c.url]=2})))}function s(e,t){function n(e,n){if(e){if(i(e))n||(f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}),a(e,f,t,0,u);else if(Object(e)===e)for(c in s=function(){var t,n=0;for(t in e)e.hasOwnProperty(t)&&n++;return n}(),e)e.hasOwnProperty(c)&&(!n&&!--s&&(r(f)?f=function(){var e=[].slice.call(arguments);d.apply(this,e),p()}:f[c]=function(e){return function(){var t=[].slice.call(arguments);e&&e.apply(this,t),p()}}(d[c])),a(e[c],f,t,c,u))}else!n&&p()}var s,c,u=!!e.test,l=e.load||e.both,f=e.callback||o,d=f,p=e.complete||o;n(u?e.yep:e.nope,!!l),l&&n(l)}var c,u,f=this.yepnope.loader;if(i(e))a(e,0,f,0);else if(T(e))for(c=0;c<e.length;c++)u=e[c],i(u)?a(u,0,f,0):T(u)?d(u):Object(u)===u&&s(u,f);else Object(e)===e&&s(e,f)},d.addPrefix=function(e,t){E[e]=t},d.addFilter=function(e){S.push(e)},d.errorTimeout=1e4,null==t.readyState&&t.addEventListener&&(t.readyState="loading",t.addEventListener("DOMContentLoaded",f=function(){t.removeEventListener("DOMContentLoaded",f,0),t.readyState="complete"},0)),e.yepnope=l(),e.yepnope.executeStack=s,e.yepnope.injectJs=function(e,n,r,i,c,u){var l,f,p=t.createElement("script"),i=i||d.errorTimeout;p.src=e;for(f in r)p.setAttribute(f,r[f]);n=u?s:n||o,p.onreadystatechange=p.onload=function(){!l&&a(p.readyState)&&(l=1,n(),p.onload=p.onreadystatechange=null)},h(function(){l||(l=1,n(1))},i),c?p.onload():m.parentNode.insertBefore(p,m)},e.yepnope.injectCss=function(e,n,r,i,a,c){var u,i=t.createElement("link"),n=c?s:n||o;i.href=e,i.rel="stylesheet",i.type="text/css";for(u in r)i.setAttribute(u,r[u]);a||(m.parentNode.insertBefore(i,m),h(n,0))}}(this,document),Modernizr.load=function(){yepnope.apply(window,[].slice.call(arguments,0))};