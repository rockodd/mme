// Copyright 2012 Google Inc. All rights reserved.
// Container Version: 1
(function(w,g){w[g]=w[g]||{};})(window,'google_tag_manager');(function(){


var ta=this,wa=function(){var a=YT.Player,b=typeof a;if("object"==b)if(a){if(a instanceof Array)return"array";if(a instanceof Object)return b;var c=Object.prototype.toString.call(a);if("[object Window]"==c)return"object";if("[object Array]"==c||"number"==typeof a.length&&"undefined"!=typeof a.splice&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("splice"))return"array";if("[object Function]"==c||"undefined"!=typeof a.call&&"undefined"!=typeof a.propertyIsEnumerable&&!a.propertyIsEnumerable("call"))return"function"}else return"null";
else if("function"==b&&"undefined"==typeof a.call)return"object";return b},xa=function(a,b){var c=Array.prototype.slice.call(arguments,1);return function(){var b=c.slice();b.push.apply(b,arguments);return a.apply(this,b)}};/*
 jQuery v1.9.1 (c) 2005, 2012 jQuery Foundation, Inc. jquery.org/license. */
var ya=/\[object (Boolean|Number|String|Function|Array|Date|RegExp)\]/,za=function(a){if(null==a)return String(a);var b=ya.exec(Object.prototype.toString.call(Object(a)));return b?b[1].toLowerCase():"object"},Aa=function(a,b){return Object.prototype.hasOwnProperty.call(Object(a),b)},ca=function(a){if(!a||"object"!=za(a)||a.nodeType||a==a.window)return!1;try{if(a.constructor&&!Aa(a,"constructor")&&!Aa(a.constructor.prototype,"isPrototypeOf"))return!1}catch(c){return!1}for(var b in a);return void 0===
b||Aa(a,b)},Ba=function(a,b){var c=b||("array"==za(a)?[]:{}),d;for(d in a)if(Aa(a,d)){var e=a[d];"array"==za(e)?("array"!=za(c[d])&&(c[d]=[]),c[d]=Ba(e,c[d])):ca(e)?(ca(c[d])||(c[d]={}),c[d]=Ba(e,c[d])):c[d]=e}return c};var ha=null,Ca=Math.random(),Da=null,Ea=null,Ga={};var Ia=function(){},H=function(a){return"function"==typeof a},Q=function(a){return"[object Array]"==Object.prototype.toString.call(Object(a))},Ja=function(a){return"number"==za(a)&&!isNaN(a)},Ka=function(a){return/^[0-9]+$/.test(a)},La=function(a,b){if(Array.prototype.indexOf){var c=a.indexOf(b);return"number"==typeof c?c:-1}for(var d=0;d<a.length;d++)if(a[d]===b)return d;return-1},Ma=function(a){return a?a.replace(/^\s+|\s+$/g,""):""},J=function(a){return Math.round(Number(a))||0},ea=function(a){return"false"==
String(a).toLowerCase()?!1:!!a},Na=function(a){var b=[];if(Q(a))for(var c=0;c<a.length;c++)b.push(String(a[c]));return b},B=function(){return new Date},Oa=function(a,b){if(!Ja(a)||!Ja(b)||a>b)a=0,b=2147483647;return Math.round(Math.random()*(b-a)+a)},Pa=function(){this.prefix="gtm.";this.values={}};Pa.prototype.set=function(a,b){this.values[this.prefix+a]=b};Pa.prototype.get=function(a){return this.values[this.prefix+a]};Pa.prototype.contains=function(a){return void 0!==this.get(a)};
var Qa=function(a,b,c){try{return a["11"](a,b||Ia,c||Ia)}catch(d){}return!1},Ra=function(a,b){function c(b,c){a.contains(b)||a.set(b,[]);a.get(b).push(c)}for(var d=Ma(b).split("&"),e=0;e<d.length;e++)if(d[e]){var f=d[e].indexOf("=");0>f?c(d[e],"1"):c(d[e].substring(0,f),d[e].substring(f+1))}},Sa=function(a){var b=a?a.length:0;return 0<b?a[b-1]:""},Ta=function(a){for(var b=0;b<a.length;b++)a[b]()},aa=B().getTime(),da=function(a,b,c){return a&&a.hasOwnProperty(b)?a[b]:c},Ua=function(a,
b,c){a.prototype["gtm_proxy_"+b]=a.prototype[b];a.prototype[b]=c},Va=function(a){return null!==a&&void 0!==a&&void 0!==a.length},ba=function(a,b,c){if(!(b&&c&&Va(a)&&Q(a)&&0!=a.length))return null;for(var d={},e=0;e<a.length;e++)a[e]&&a[e].hasOwnProperty(b)&&a[e].hasOwnProperty(c)&&(d[a[e][b]]=a[e][c]);return d},Wa=function(a,b){0==b?a.Ma=!0:a.complete=!0;var c=a.g;a.i&&(a.i.ka[c]=b);Ga[c]&&(Ga[c].state=b)},Xa=function(a,b){a.sort(function(a,d){return b(a,d)?-1:b(d,a)?1:0})};var A=window,N=document,$a=navigator,w=function(a,b,c){var d=A[a];A[a]=void 0===d||c?b:d;return A[a]},K=function(a,b,c,d){return(d||"http:"!=A.location.protocol?a:b)+c},ab=function(a){var b=N.getElementsByTagName("script")[0]||N.body||N.head;b.parentNode.insertBefore(a,b)},ga=function(a,b){b&&(a.addEventListener?a.onload=b:a.onreadystatechange=function(){a.readyState in{loaded:1,complete:1}&&(a.onreadystatechange=null,b())})},n=function(a,b,c){var d=N.createElement("script");d.type="text/javascript";
d.async=!0;d.src=a;ga(d,b);c&&(d.onerror=c);ab(d)},ma=function(a,b){var c=N.createElement("iframe");c.height="0";c.width="0";c.style.display="none";c.style.visibility="hidden";ab(c);ga(c,b);void 0!==a&&(c.src=a);return c},M=function(a,b,c){var d=new Image(1,1);d.onload=function(){d.onload=null;b&&b()};d.onerror=function(){d.onerror=null;c&&c()};d.src=a},T=function(a,b,c,d){a.addEventListener?a.addEventListener(b,c,!!d):a.attachEvent&&a.attachEvent("on"+b,c)},q=function(a){A.setTimeout(a,0)},O=!1,
ja=[],bb=function(a){if(!O){var b=N.createEventObject,c="complete"==N.readyState,d="interactive"==N.readyState;if(!a||"readystatechange"!=a.type||c||!b&&d){O=!0;for(var e=0;e<ja.length;e++)ja[e]()}}},cb=0,db=function(){if(!O&&140>cb){cb++;try{N.documentElement.doScroll("left"),bb()}catch(a){A.setTimeout(db,50)}}},fb=function(a){var b=N.getElementById(a);if(b&&eb(b,"id")!=a)for(var c=1;c<document.all[a].length;c++)if(eb(document.all[a][c],"id")==a)return document.all[a][c];return b},eb=function(a,
b){return a&&b&&a.attributes&&a.attributes[b]?a.attributes[b].value:null},gb=function(a){return a.target||a.srcElement||{}},na=function(a){var b=N.createElement("div");b.innerHTML="A<div>"+a+"</div>";for(var b=b.lastChild,c=[];b.firstChild;)c.push(b.removeChild(b.firstChild));return c},hb=function(a,b){for(var c={},d=0;d<b.length;d++)c[b[d]]=!0;for(var e=a,d=0;e&&!c[String(e.tagName).toLowerCase()]&&100>d;d++)e=e.parentElement;e&&!c[String(e.tagName).toLowerCase()]&&(e=null);return e},ib=!1,jb=[],
kb=function(){if(!ib){ib=!0;for(var a=0;a<jb.length;a++)jb[a]()}},lb=function(a){a=a||A;var b=a.location.href,c=b.indexOf("#");return 0>c?"":b.substring(c+1)},ka=function(a){window.console&&window.console.log&&window.console.log(a)};var mb=function(a,b,c,d,e){var f,g=(a.protocol.replace(":","")||A.location.protocol.replace(":","")).toLowerCase();switch(b){case "protocol":f=g;break;case "host":f=(a.hostname||A.location.hostname).split(":")[0].toLowerCase();if(c){var k=/^www\d*\./.exec(f);k&&k[0]&&(f=f.substr(k[0].length))}break;case "port":f=String(1*(a.hostname?a.port:A.location.port)||("http"==g?80:"https"==g?443:""));break;case "path":f="/"==a.pathname.substr(0,1)?a.pathname:"/"+a.pathname;var l=f.split("/");0<=La(d||[],l[l.length-
1])&&(l[l.length-1]="");f=l.join("/");break;case "query":f=a.search.replace("?","");if(e)a:{for(var m=f.split("&"),h=0;h<m.length;h++){var p=m[h].split("=");if(decodeURIComponent(p[0]).replace("+"," ")==e){var r=p.slice(1).join("=");f=decodeURIComponent(r).replace("+"," ");break a}}f=void 0}break;case "fragment":f=a.hash.replace("#","");break;default:f=a&&a.href}return f},nb=function(a){var b="";a&&a.href&&(b=a.hash?a.href.replace(a.hash,""):a.href);return b},oa=function(a){var b=N.createElement("a");
a&&(b.href=a);return b};var ra=function(a,b){var c=function(){};c.prototype=a.prototype;var d=new c;a.apply(d,Array.prototype.slice.call(arguments,1));return d};var pa=function(a){var b=["veinteractive.com","ve-interactive.cn"];if(!a)return!1;var c=mb(oa(a),"host");if(!c)return!1;for(var d=0;b&&d<b.length;d++){var e=b[d]&&b[d].toLowerCase();if(e){var f=c.length-e.length;0<f&&"."!=e.charAt(0)&&(f--,e="."+e);if(0<=f&&c.indexOf(e,f)==f)return!0}}return!1};var qa=function(a,b){n("//bat.bing.com/bat.js",a,b)},L=A,fa=function(a,b,c){b&&(void 0===L[a]||c&&!L[a])&&(L[a]=b);return L[a]};var ob=new Pa,pb={},rb={set:function(a,b){Ba(qb(a,b),pb)},get:function(a){return G(a,2)},reset:function(){ob=new Pa;pb={}}},G=function(a,b){if(2==b){for(var c=pb,d=a.split("."),e=0;e<d.length;e++){if(void 0===c[d[e]])return;c=c[d[e]]}return c}return ob.get(a)},qb=function(a,b){for(var c={},d=c,e=a.split("."),f=0;f<e.length-1;f++)d=d[e[f]]={};d[e[e.length-1]]=b;return c};var tb=new RegExp(/^(.*\.)?(google|youtube|blogger|withgoogle)(\.com?)?(\.[a-z]{2})?\.?$/),ub={customPixels:["nonGooglePixels"],html:["customScripts","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],customScripts:["html","customPixels","nonGooglePixels","nonGoogleScripts","nonGoogleIframes"],nonGooglePixels:[],nonGoogleScripts:["nonGooglePixels"],nonGoogleIframes:["nonGooglePixels"]},vb={customPixels:["customScripts","html"],html:["customScripts"],customScripts:["html"],nonGooglePixels:["customPixels",
"customScripts","html","nonGoogleScripts","nonGoogleIframes"],nonGoogleScripts:["customScripts","html"],nonGoogleIframes:["customScripts","html","nonGoogleScripts"]},wb=function(a,b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]),c.push.apply(c,b[a[d]]||[]);return c},xb=function(){var a=G("gtm.whitelist");
var b=a&&wb(Na(a),ub),c=G("gtm.blacklist")||G("tagTypeBlacklist")||[];tb.test(A.location&&A.location.hostname)&&(c=Na(c),c.push("nonGooglePixels","nonGoogleScripts"));var d=c&&wb(Na(c),vb),e={};return function(f){var g=f&&f["11"];if(!g)return!0;if(void 0!==e[g.a])return e[g.a];var k=!0;if(a)a:{if(0>La(b,g.a))if(g.b&&0<g.b.length)for(var l=0;l<g.b.length;l++){if(0>
La(b,g.b[l])){k=!1;break a}}else{k=!1;break a}k=!0}var m=!1;if(c){var h;if(!(h=0<=La(d,g.a)))a:{for(var p=g.b||[],r=new Pa,t=0;t<d.length;t++)r.set(d[t],!0);for(t=0;t<p.length;t++)if(r.get(p[t])){h=!0;break a}h=!1}m=h}var v=!!f[""];return e[g.a]=!k||m||v}};var _c=function(a){return a["19"]};_c.a="c";_c.b=["google"];var R=function(a){var b=N;return yb?b.querySelectorAll(a):null},zb;a:{var Ab=/MSIE +([\d\.]+)/.exec($a.userAgent);if(Ab&&Ab[1]){var Bb=N.documentMode;Bb||(Bb="CSS1Compat"==N.compatMode?parseInt(Ab[1],10):5);if(!Bb||8>=Bb){zb=!1;break a}}zb=!!N.querySelectorAll}var yb=zb;var Cb=void 0,Db="",Eb=0,Fb=void 0,_et=function(a){var b,c=G("gtm.element"),d=G("event"),e=Number(B());if(Cb===c&&Db===d&&Eb>e-250)b=Fb;else{var f;if(c){var g=c.innerText||c.textContent||"";g&&" "!=g&&(g=g.replace(/^[\s\xa0]+|[\s\xa0]+$/g,""));g&&(g=g.replace(/(\xa0+|\s{2,}|\n|\r\t)/g," "));f=g}else f="";Fb=b=f;Cb=c;Db=d}Eb=e;return b?b:a[""]};_et.a="et";_et.b=["google"];var _eu=function(a){var b=String(G("gtm.elementUrl")||a[""]||""),c=oa(b);return b};_eu.a="eu";_eu.b=["google"];var _e=function(){return Ea};_e.a="e";_e.b=["google"];var Gb=/(^|\.)doubleclick\.net$/i,Hb=/^(www\.)?google(\.com?)?(\.[a-z]{2})?$/,Ib=function(){for(var a=String(N.cookie).split(";"),b=[],c=0;c<a.length;c++){var d=a[c].split("="),e=Ma(d[0]);if(e&&"_gaexp"==e){var f=Ma(d.slice(1).join("="));f&&(f=decodeURIComponent(f));b.push(f)}}return b},Jb=function(a,b,c,d){if(Gb.test(N.location.hostname)||"/"==b&&Hb.test(c))return!1;var e="_gaexp="+a+"; ";b&&(e+="path="+b+"; ");d&&(e+="expires="+d.toGMTString()+"; ");c&&(e+="domain="+c+";");var f=N.cookie;N.cookie=
e;return f!=N.cookie||0<=La(Ib(),a)},Kb=function(a){if("none"==a)return 0;0==a.indexOf(".")&&(a=a.substr(1));return a.split(".").length},Lb=function(a){var b=a;b?(1<b.length&&b.lastIndexOf("/")==b.length-1&&(b=b.substr(0,b.length-1)),0!=b.indexOf("/")&&(b="/"+b),a=b):a="/";return"/"==a?1:a.split("/").length};var Mb=function(a,b){this.f=a;this.j=b};Mb.prototype.toString=function(){var a=""+this.f;1<this.j&&(a=a+"-"+this.j);return a};var Nb=function(a,b){this.xa=a;this.Y=b};Nb.prototype.toString=function(){return""+this.Y+"."+this.xa};var Qb=function(a,b){var c=new Ob(null,a,b);Pb(c);return c},Ob=function(a,b,c){this.Fa=Math.floor(B().getTime()/864E5);this.X=b||"auto";this.P=c||"/";var d=Kb(this.X),e=Lb(this.P);this.B=a||new Mb(d,e);this.h=[];this.w=new Pa},Ub=function(a,b,c){b&&(""==c.xa?Rb(a,b):(a.w.contains(b)||a.h.push(b),a.w.set(b,c)))},Vb=function(a,b){for(var c=0;c<b.length;c++)Ub(a,b[c][0],b[c][1])},Rb=function(a,b){var c=La(a.h,b);0<=c&&a.h.splice(c,1);a.w.set(b,void 0)},$b=function(a){for(var b=[],c=0;c<a.h.length;c++){var d=
a.h[c];b.push([d,a.w.get(d)])}return b},ac=function(a){for(var b=0,c=0;c<a.h.length;c++)b=Math.max(b,a.w.get(a.h[c]).Y);return 864E5*b};Ob.prototype.toString=function(){if(0==this.h.length)return"";for(var a=[],b=0;b<this.h.length;b++){var c=this.h[b];a.push(""+c+"."+this.w.get(c).toString())}return"GAX1."+this.B.toString()+"."+a.join("!")};
var bc=function(a,b){for(var c=new Date,d=Lb(a.P),e=[],f=0;f<a.h.length;f++){var g=a.h[f];a.w.get(g).Y<a.Fa&&e.push(g)}for(f=0;f<e.length;f++)Rb(a,e[f]);if(a.h.length>(b||10))return!1;c.setTime(ac(a));if("auto"!=a.X)return Jb(a.toString(),a.P,a.X,c);var k;var l=mb(A.location,"host",!0).split(".");if(4==l.length&&/^[0-9]*$/.exec(l[3]))k=["none"];else{for(var m=[],h=l.length-2;0<=h;h--)m.push(l.slice(h).join("."));m.push("none");k=m}for(var p=0;p<k.length;p++)if("none"!=k[p]&&(a.B=new Mb(Kb(k[p]),d),
Jb(a.toString(),a.P,k[p],c)))return!0;return!1},Pb=function(a){for(var b=a.B.f,c=a.B.j,d=Ib(),e=[],f=0;f<d.length;f++){var g=cc(a,d[f]);g&&e.push(g)}Xa(e,function(a,d){var e=a.B,f=d.B;return e.f==f.f&&e.j==f.j?!1:e.f==b&&e.j==c?!0:f.f==b&&f.j==c?!1:e.f==b?f.f!=b||e.j<f.j:f.f==b?!1:e.j==c?f.f!=b&&(f.j!=c||e.f<f.f):f.j==c?!1:e.f<f.f||e.f==f.f&&e.j<f.j});a.B=0<e.length?e[0].B:new Mb(b,c);for(f=e.length-1;0<=f;f--)Vb(a,$b(e[f]))},cc=function(a,b){var c=b.match(/GAX1\.([^.]+).(.*)/);if(c){var d;a:{var e=
(c[1]||"").split("-");if(!(0==e.length||2<e.length)){var f=Ma(e[0]);if(0!=f.length){var g=2==e.length?Ma(e[1]):"1";if(Ka(f)&&Ka(g)){d=new Mb(J(f),J(g));break a}}}d=void 0}if(d){for(var k=new Ob(d,a.X,a.P),l=(c[2]||"").split("!"),m=0;m<l.length;m++){var h=l[m].split(".");if(3==h.length){if(!Ka(h[1]))return;Ub(k,h[0],new Nb(h[2],J(h[1])))}}return k}}};var _v=function(a){var b=G(a["14"].replace(/\\\./g,"."),a[""]);return void 0!==b?b:a[""]};_v.a="v";_v.b=["google"];var _f=function(a){var b=String(G("gtm.referrer")||N.referrer);if(!b)return b;var c=oa(b);return b};_f.a="f";_f.b=["google"];var sa=function(a){var b=A.location,c;(c=a[""]?a[""]:G("gtm.url"))&&(b=oa(String(c)));var d=b.href,e=d.indexOf("#"),f=0>e?d:d.substr(0,e);a["4"]&&(f=mb(b,a["4"],a[""],a[""],a[""]));return f},_u=sa;_u.a="u";_u.b=["google"];var _eq=function(a){return String(a["2"])==String(a["3"])};_eq.a="eq";_eq.b=["google"];var kc=Math.random(),lc="1.000000">kc;var mc=Ia;var nc=Ia,oc=[],pc=!1,qc=function(a){return A["dataLayer"].push(a)},rc=function(a){var b=!1;return function(){!b&&H(a)&&q(a);b=!0}},xc=function(){for(var a=!1;!pc&&0<oc.length;){pc=!0;var b=oc.shift();if(H(b))try{b.call(rb)}catch(Ha){}else if(Q(b))a:{var c=b;if("string"==za(c[0])){for(var d=c[0].split("."),e=d.pop(),f=c.slice(1),g=pb,k=0;k<d.length;k++){if(void 0===g[d[k]])break a;g=g[d[k]]}try{g[e].apply(g,f)}catch(Ha){}}}else{var l=b,m=void 0;for(m in l)if(l.hasOwnProperty(m)){var h=m,p=l[m];
ob.set(h,p);Ba(qb(h,p),pb)}var r=!1,t=l.event,v=void 0;if(t){v=aa++;Ea=t;if(!l["gtm.uniqueEventId"]){var u=v;ob.set("gtm.uniqueEventId",u);Ba(qb("gtm.uniqueEventId",u),pb)}var z=rc(l.eventCallback),D=l.eventTimeout;D&&A.setTimeout(z,Number(D));r=nc(v,t,z,l.eventReporter)}Da||(Da=l["gtm.start"])&&mc();var E=l,F=v,y=t,C=pb;if(!r){var I=v,S=t;}Ea=null;a=r||a}var W=b,V=pb;wc();pc=!1}return!a};var yc,zc=/(Firefox\D28\D)/g.test($a.userAgent),Ac={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},Bc={nwnc:{},nwc:{},wnc:{},wc:{},wt:null,l:!1},Ic=function(a,b){return function(c){c=c||A.event;var d=gb(c),e=!1;if(3!==c.which||"LINK_CLICK"!=a){"LINK_CLICK"==a&&(d=hb(d,["a","area"]),e=!d||!d.href||Cc(d.href)||2===c.which||null==c.which&&4==c.button||c.ctrlKey||c.shiftKey||c.altKey||!0===c.metaKey);var f="FORM_SUBMIT"==a?Bc:Ac;if(c.defaultPrevented||!1===c.returnValue||c.oa&&c.oa()){if(d){var g={simulateDefault:!1},
k=Dc(f,["wnc","nwnc"]);k&&Ec(a,d,g,f.wt,k)}}else{if(d){var g={},l=!0,m=Dc(f,["wnc","nwnc","nwc","wc"]);(l=Ec(a,d,g,f.wt,m))||(Fc(g.eventReport,f)?b=!0:e=!0);e=e||l||"LINK_CLICK"==a&&zc;g.simulateDefault=!l&&b&&!e;g.simulateDefault&&(e=Hc(d,g)||e,!e&&c.preventDefault&&c.preventDefault());c.returnValue=l||!b||e;return c.returnValue}return!0}}}},Ec=function(a,b,c,d,e){var f=d||2E3,g={"gtm.element":b,"gtm.elementClasses":b.className,"gtm.elementId":b["for"]||eb(b,"id")||"","gtm.elementTarget":b.formTarget||
b.target||""};switch(a){case "LINK_CLICK":g["gtm.triggers"]=e||"";g.event="gtm.linkClick";g["gtm.elementUrl"]=b.href;g.eventTimeout=f;g.eventCallback=Jc(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "FORM_SUBMIT":g["gtm.triggers"]=e||"";g.event="gtm.formSubmit";g["gtm.elementUrl"]=Kc(b);g.eventTimeout=f;g.eventCallback=Lc(b,c);g.eventReporter=function(a){c.eventReport=a};break;case "CLICK":g.event="gtm.click";g["gtm.elementUrl"]=b.formAction||b.action||b.href||b.src||b.code||b.codebase||
"";break;default:return!0}return qc(g)},Kc=function(a){var b=a.action;b&&b.tagName&&(b=a.cloneNode(!1).action);return b},Mc=function(a){var b=a.target;if(!b)switch(String(a.tagName).toLowerCase()){case "a":case "area":case "form":b="_self"}return b},Hc=function(a,b){var c=!1,d=/(iPad|iPhone|iPod)/g.test($a.userAgent),e=Mc(a).toLowerCase();switch(e){case "":case "_self":case "_parent":case "_top":var f;f=(e||"_self").substring(1);b.targetWindow=A.frames&&A.frames[f]||A[f];break;case "_blank":d?(b.simulateDefault=
!1,c=!0):(b.targetWindowName="gtm_autoEvent_"+B().getTime(),b.targetWindow=A.open("",b.targetWindowName));break;default:d&&!A.frames[e]?(b.simulateDefault=!1,c=!0):(A.frames[e]||(b.targetWindowName=e),b.targetWindow=A.frames[e]||A.open("",e))}return c},Jc=function(a,b,c){return function(){b.simulateDefault&&(b.targetWindow?b.targetWindow.location.href=a.href:(c=c||B().getTime(),500>B().getTime()-c&&A.setTimeout(Jc(a,b,c),25)))}},Lc=function(a,b,c){return function(){if(b.simulateDefault)if(b.targetWindow){var d;
b.targetWindowName&&(d=a.target,a.target=b.targetWindowName);N.gtmSubmitFormNow=!0;Nc(a).call(a);b.targetWindowName&&(a.target=d)}else c=c||B().getTime(),500>B().getTime()-c&&A.setTimeout(Lc(a,b,c),25)}},Dc=function(a,b){for(var c=[],d=0;d<b.length;d++){var e=a[b[d]],f;for(f in e)e.hasOwnProperty(f)&&e[f]&&c.push(f)}return c.join(",")},Oc=function(a,b,c,d,e){var f=e;if(!f||"0"==f){if(a.l)return;a.l=!0;f="0"}var g=a.wt;b&&(!g||g>d)&&(a.wt=d);a[b?c?"wc":"wnc":c?"nwc":"nwnc"][f]=!0},Fc=function(a,b){if(b.wnc["0"]||
b.wc["0"])return!0;for(var c=0;c<Pc.length;c++)if(a.passingRules[c]){var d=Pc[c],e=Vc[c],f=e&&e[0]&&e[0][0]||e[1]&&e[1][0];if(f&&"0"!=f&&(b.wc[f]||b.wnc[f]))for(var g=d[1],k=0;k<g.length;k++)if(a.resolvedTags[g[k]])return!0}return!1},Wc=function(a,b,c,d,e){var f,g,k=!1;switch(a){case "CLICK":if(N.gtmHasClickListenerTag)return;N.gtmHasClickListenerTag=!0;f="click";g=function(a){var b=gb(a);b&&Ec("CLICK",b,{},d)};k=!0;break;case "LINK_CLICK":b&&!yc&&(yc=nb(N.location));Oc(Ac,b||!1,c||!1,d,e);if(N.gtmHasLinkClickListenerTag)return;
N.gtmHasLinkClickListenerTag=!0;f="click";g=Ic(a,b||!1);break;case "FORM_SUBMIT":Oc(Bc,b||!1,c||!1,d,e);if(N.gtmHasFormSubmitListenerTag)return;N.gtmHasFormSubmitListenerTag=!0;f="submit";g=Ic(a,b||!1);break;default:return}T(N,f,g,k)},Cc=function(a){if(!yc)return!0;var b=a.indexOf("#");if(0>b)return!1;if(0==b)return!0;var c=oa(a);return yc==nb(c)},Nc=function(a){try{if(a.constructor&&a.constructor.prototype)return a.constructor.prototype.submit}catch(b){}if(a.gtmReplacedFormSubmit)return a.gtmReplacedFormSubmit;
N.gtmFormElementSubmitter||(N.gtmFormElementSubmitter=N.createElement("form"));return N.gtmFormElementSubmitter.submit.call?N.gtmFormElementSubmitter.submit:a.submit};var dc=new String("undefined"),gd=function(a){this.resolve=function(b){for(var c=[],d=0;d<a.length;d++)c.push(a[d]===dc?b:a[d]);return c.join("")}};gd.prototype.toString=function(){return this.resolve("undefined")};gd.prototype.valueOf=gd.prototype.toString;var hd={},id=function(a,b){var c=aa++;hd[c]=[a,b];return c},jd=function(a){var b=a?0:1;return function(a){var d=hd[a];if(d&&H(d[b]))d[b]();hd[a]=void 0}};var kd=String.prototype.trim?function(a){return a.trim()}:function(a){return a.replace(/^[\s\xa0]+|[\s\xa0]+$/g,"")},ld=function(a,b){return a<b?-1:a>b?1:0};var md;a:{var nd=ta.navigator;if(nd){var od=nd.userAgent;if(od){md=od;break a}}md=""}var U=function(a){return-1!=md.indexOf(a)};var pd=U("Opera")||U("OPR"),qd=U("Trident")||U("MSIE"),rd=U("Edge"),sd;if(sd=U("Gecko"))sd=!(-1!=md.toLowerCase().indexOf("webkit")&&!U("Edge"));var td=sd&&!(U("Trident")||U("MSIE"))&&!U("Edge"),ud=-1!=md.toLowerCase().indexOf("webkit")&&!U("Edge");ud&&U("Mobile");U("Macintosh");U("Windows");U("Linux")||U("CrOS");var vd=ta.navigator||null;vd&&(vd.appVersion||"").indexOf("X11");U("Android");!U("iPhone")||U("iPod")||U("iPad");U("iPad");
var wd=function(){var a=md;if(td)return/rv\:([^\);]+)(\)|;)/.exec(a);if(rd)return/Edge\/([\d\.]+)/.exec(a);if(qd)return/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(a);if(ud)return/WebKit\/(\S+)/.exec(a)},xd=function(){var a=ta.document;return a?a.documentMode:void 0},yd=function(){if(pd&&ta.opera){var a;var b=ta.opera.version;try{a=b()}catch(f){a=b}return a}var c="",d=wd();d&&(c=d?d[1]:"");if(qd){var e=xd();if(e>parseFloat(c))return String(e)}return c}(),zd={},Ad=function(a){var b;if(!(b=zd[a])){for(var c=
0,d=kd(String(yd)).split("."),e=kd(String(a)).split("."),f=Math.max(d.length,e.length),g=0;0==c&&g<f;g++){var k=d[g]||"",l=e[g]||"",m=RegExp("(\\d*)(\\D*)","g"),h=RegExp("(\\d*)(\\D*)","g");do{var p=m.exec(k)||["","",""],r=h.exec(l)||["","",""];if(0==p[0].length&&0==r[0].length)break;c=ld(0==p[1].length?0:parseInt(p[1],10),0==r[1].length?0:parseInt(r[1],10))||ld(0==p[2].length,0==r[2].length)||ld(p[2],r[2])}while(0==c)}b=zd[a]=0<=c}return b},Bd=ta.document,Cd=Bd&&qd?xd()||("CSS1Compat"==Bd.compatMode?
parseInt(yd,10):5):void 0;var Dd;if(!(Dd=!td&&!qd)){var Ed;if(Ed=qd)Ed=9<=Cd;Dd=Ed}Dd||td&&Ad("1.9.1");qd&&Ad("9");var Fd=function(a){Fd[" "](a);return a};Fd[" "]=function(){};var la=function(a,b){var c="";qd&&!Gd(a)&&(c='<script>document.domain="'+document.domain+'";\x3c/script>'+c);var d="<!DOCTYPE html><html><head><script>var inDapIF=true;\x3c/script>"+c+"</head><body>"+b+"</body></html>";if(Hd)a.srcdoc=d;else if(Id){var e=a.contentWindow.document;e.open("text/html","replace");e.write(d);e.close()}else Jd(a,d)},Hd=ud&&"srcdoc"in document.createElement("iframe"),Id=td||ud||qd&&Ad(11),Jd=function(a,b){qd&&Ad(7)&&!Ad(10)&&6>Kd()&&Ld(b)&&(b=Md(b));var c=function(){a.contentWindow.goog_content=
b;a.contentWindow.location.replace("javascript:window.goog_content")};qd&&!Gd(a)?Nd(a,c):c()},Kd=function(){var a=navigator.userAgent.match(/Trident\/([0-9]+.[0-9]+)/);return a?parseFloat(a[1]):0},Gd=function(a){try{var b;var c=a.contentWindow;try{var d;if(d=!!c&&null!=c.location.href)b:{try{Fd(c.foo);d=!0;break b}catch(e){}d=!1}b=d}catch(e){b=!1}return b}catch(e){return!1}},Od=0,Nd=function(a,b){var c="goog_rendering_callback"+Od++;window[c]=b;a.src="javascript:'<script>(function() {document.domain = \""+
document.domain+'";var continuation = window.parent.'+c+";window.parent."+c+" = null;continuation();})()\x3c/script>'"},Ld=function(a){for(var b=0;b<a.length;++b)if(127<a.charCodeAt(b))return!0;return!1},Md=function(a){for(var b=unescape(encodeURIComponent(a)),c=Math.floor(b.length/2),d=[],e=0;e<c;++e)d[e]=String.fromCharCode(256*b.charCodeAt(2*e+1)+b.charCodeAt(2*e));1==b.length%2&&(d[c]=b.charAt(b.length-1));return d.join("")};/*
 Copyright (c) 2014 Derek Brans, MIT license https://github.com/krux/postscribe/blob/master/LICENSE. Portions derived from simplehtmlparser, which is licensed under the Apache License, Version 2.0 */

var ae=function(a,b,c,d){var e=b+": "+c+(d?" !important":""),f=document;if(f.createStyleSheet){var g=Yd(f),k=g.rules.length;g.addRule(a,e);return function(){g.removeRule?g.removeRule(k):g.deleteRule(k);g.addRule("x","-",k)}}var l=Zd(a+"{"+e+"}",f);$d(l,f);var m=l.parentNode;return function(){m.removeChild(l)}},be=null,Yd=function(a){if(be)return be;for(var b=a.styleSheets.length-1;0<=b;b--){var c=a.styleSheets[b],d=c.ownerNode;if(d&&d.parentNode&&"HEAD"==d.parentNode.tagName)return be=c}0==a.styleSheets.length&&
a.createStyleSheet();return be=a.styleSheets[0]},Zd=function(a,b){var c=(b||document).createElement("style");void 0!==c.cssText?c.cssText=a:c.innerHTML=a;return c},$d=function(a,b){var c=b||document,d=c.getElementsByTagName("head")[0];d||(d=c.createElement("head"),c.body.parentNode.insertBefore(d,c.body));d.appendChild(a)};var fe={},he=function(a,b,c,d,e){if(!yb)return!1;var f=fe[a];f||(f={id:a,L:[],ba:0,za:null,Ea:!1},fe[a]=f);var g={id:a+":"+f.L.length,Ua:c,Pa:d,K:b,ma:0,ja:e||null,Da:0,aa:!1};f.L.push(g);null===b?(g.aa=!0,c(null)):ge(f);return!0},ie=function(a){var b=ae(a,"visibility","hidden",!0);return function(){H(b)&&b.apply();b=null}},je=function(a,b,c,d,e){var f=ie(b.u);ja.push(f);return he(a,b,function(a,b){c(a,b);f()},d,e)},ge=function(a){for(var b=a.ba;b<a.L.length;b++){var c=a.L[b],d=b==a.ba;if(!c.aa&&
!ke(d,c))break;c.aa&&d&&a.ba++}a.L.length>a.ba&&(a.za||(a.za=A.setTimeout(function(){a.za=null;ge(a)},80)),O||a.Ea||(a.Ea=!0,ja.push(function(){ge(a)})))},ke=function(a,b){var c=[];if(b.K){var d=le(b.K,b.id),e=null;b.ja&&(e=le(b.ja,b.id+"-t"));for(var f=0;f<d.length;f++){var g=d[f],k;if(null!=e&&(k=e.length>f?e[f]:null,!k&&!O&&(null===b.ja.o||b.Da+c.length<b.ja.o)))break;c.push({element:g,tb:k})}}if(!O&&b.Pa&&(!a||null==b.K.o||b.K.o!=b.ma+c.length))return!1;for(var l=0;l<c.length;l++){var m=c[l].element,
h=c[l].tb;b.ma++;me(m,b.id);h&&(b.Da++,me(h,b.id+"-t"));b.Ua(m,h)}if(b.K.o&&b.K.o==b.ma||O)b.aa=!0;return!0},me=function(a,b){a.gtmProgressiveApplied||(a.gtmProgressiveApplied={});a.gtmProgressiveApplied[b]=!0},le=function(a,b){for(var c=R(a.u)||[],d=[],e=0;e<c.length;e++){var f=c[e];if(!f.gtmProgressiveApplied||!f.gtmProgressiveApplied[b]){if(a.A&&!ne(f))break;d.push(f)}}return d},ne=function(a){if(O)return!0;for(;a;){if(a.nextSibling)return!0;a=a.parentNode}return!1};var qe,re;
var Be=function(a){return function(){}},Ce=function(a){return function(){}};var af=function(a){var b=A||ta,c=b.onerror,d=!1;ud&&!Ad("535.3")&&(d=!d);b.onerror=function(b,f,g,k,l){c&&c(b,f,g,k,l);a({message:b,fileName:f,mb:g,Jb:k,error:l});return d}};var xf=44,yf=[],zf=[],Af=[],Bf=new Pa,Cf=[],Z=[],Pc=[],Vc=[],Df=function(){this.D=[]};Df.prototype.set=function(a,b){this.D.push([a,b]);return this};Df.prototype.resolve=function(a,b){for(var c={},d=0;d<this.D.length;d++){var e=Ef(this.D[d][0],a,b),f=Ef(this.D[d][1],a,b);c[e]=f}return c};var Ff=function(a){this.index=a};
Ff.prototype.resolve=function(a,b){var c=Af[this.index];if(c&&!b(c)){var d=c["12"];if(a){if(a.get(d))return;a.set(d,!0)}c=Ef(c,a,b);a&&a.set(d,!1);return Qa(c)}};
var _M=function(a){return new Ff(a)},Gf=function(a){this.resolve=function(b,c){for(var d=[],e=!1,f=0;f<a.length;f++){var g=Ef(yf[a[f]],b,c);g===dc&&(e=!0);d.push(g)}return e?new gd(d):d.join("")}},_T=function(a){return new Gf(arguments)},Hf=function(a){function b(b){for(var d=1;d<a.length;d++)if(a[d]==b)return!0;return!1}this.resolve=
function(c,d){var e=Ef(a[0],c,d);if(a[0]instanceof Ff&&b(8)&&b(16)){if(e===dc)return e;var f="gtm"+aa++;Bf.set(f,e);return'google_tag_manager["GTM-T7FPMN"].macro(\''+f+"')"}for(var e=String(e),g=1;g<a.length;g++)e=X[a[g]](e);return e}},_E=function(a,b){return new Hf(arguments)},If=function(a,b){this.s=a;this.ia=b},_R=function(a,b){return new If(a,b)},Jf=function(a,b){return Ef(a,new Pa,b)},Ef=function(a,b,c){var d=a;if(a instanceof Ff||a instanceof Df||a instanceof Gf||a instanceof Hf)return a.resolve(b,
c);if(!(a instanceof If))if(Q(a))for(var d=[],e=0;e<a.length;e++)d[e]=Ef(a[e],b,c);else if(a&&"object"==typeof a){var d={},f;for(f in a)a.hasOwnProperty(f)&&(d[f]=Ef(a[f],b,c))}return d},Kf=function(a,b){var c=b[a],d=c;if(c instanceof Ff||c instanceof Hf||c instanceof Gf||c instanceof If)d=c;else if(Q(c))for(var d=[],e=0;e<c.length;e++)d[e]=Kf(c[e],b);else if("object"==typeof c){var d=new Df,f;for(f in c)c.hasOwnProperty(f)&&d.set(b[f],Kf(c[f],b))}return d},Mf=function(a,b){for(var c=b?b.split(","):
[],d=0;d<c.length;d++){var e=c[d]=c[d].split(":");0==a&&(e[1]=yf[e[1]]);if(1==a)for(var f=Lf(e[0]),e=c[d]={},g=0;g<f.length;g++){var k=zf[f[g]];e[k[0]]=k[1]}if(2==a)for(g=0;4>g;g++)e[g]=Lf(e[g]);3==a&&(c[d]=yf[e[0]]);if(4==a)for(g=0;2>g;g++)if(e[g]){e[g]=e[g].split(".");for(var l=0;l<e[g].length;l++)e[g][l]=yf[e[g][l]]}else e[g]=[];5==a&&(c[d]=e[0])}return c},Lf=function(a){var b=[];if(!a)return b;for(var c=0,d=0;d<a.length&&c<xf;c+=6,d++){var e=a&&a.charCodeAt(d)||65;if(65!=e){var f=0,f=65<e&&90>=
e?e-65:97<=e&&122>=e?e-97+26:95==e?63:48<=e?e-48+52:62;1&f&&b.push(c);2&f&&b.push(c+1);4&f&&b.push(c+2);8&f&&b.push(c+3);16&f&&b.push(c+4);32&f&&b.push(c+5)}}return b},Nf=function(a,b,c){a.push.apply(a,Mf(b,c))};
var tc=function(){},Vf=function(a){},wc=function(){},Wf=function(a){},Xf=function(a,b){},Yf=function(a,b){},uc=function(a){};var Zf=function(a){var b=this;this.g=a;this.complete=this.Ma=!1;this.ha=[];this.Z=[];this.O=function(){if(b.i&&b.i.event){var a=b.i.event,d=b.g;}b.complete||Ta(b.ha);Wa(b,1)};this.N=function(){if(b.i&&b.i.event){var a=b.i.event,d=b.g;}b.complete||Ta(b.Z);Wa(b,2)};this.v=Ia},$f=function(a,b){a.ha.push(b)},
ag=function(a,b){a.Z.push(b)},bg=function(a){this.F=[];this.ya=[];this.Ga={};this.sa=[];this.M=0;this.Ka={};this.Na={};this.ka={};this.event=a};bg.prototype.addListener=function(a){this.sa.push(a)};
var cg=function(a,b,c,d,e,f){if(!c.complete){a.F[b]=c;void 0==d&&(d=[]);void 0==e&&(e=[]);void 0==f&&(f=[]);d=Q(d)?d.slice():["or",d];e=Q(e)?e.slice():[e];f=Q(f)?f.slice():[f];a.Ga[b]=d;a.Ka[b]=0<e.length;a.Na[b]=0<f.length;a.M++;var g=function(){0<a.M&&a.M--;0<a.M||Ta(a.sa)};$f(c,g);ag(c,g)}},dg=function(a,b,c){a.F[b]&&($f(a.F[b],function(){c(b,!0)}),ag(a.F[b],function(){c(b,!1)}))},eg=function(a,b){var c=!1;return function(d,e){var f;a:{for(var g=0;g<a.length;g++)if(a[g]instanceof If&&a[g].s===
d||a[g]===d){f=g;break a}f=-1}c||0>f||("or"==a[0]?e?(c=!0,b()):(a.splice(f,1),1==a.length&&(c=!0)):e?(a.splice(f,1),1==a.length&&(c=!0,b())):c=!0)}},ig=function(a,b){var c=[],d=!1,e=function(b){var f,g,k=Z[b];if(a.event.c(k)){}else g=fg(k,b,a);if(f=g){var h=gg(b,!0);0<h.length&&e(h[0].s);c.push(f);var l=gg(b,!1);0<l.length&&
e(l[0].s)}else d=!0};e(b);if(!d){for(var f=0;f<c.length;f++){var g=c[f],k=gg(g.g,!0);if(0<k.length){var l=c[f-1],m=hg(g);$f(l,m);0==k[0].ia&&ag(l,m)}var h=gg(g.g,!1);0<h.length&&(m=hg(c[f+1]),$f(g,m),0==h[0].ia&&ag(g,m))}a.ya.push(c)}},gg=function(a,b){var c=b?"":"",d=Z[a],e=void 0===d[c]?[]:d[c];return Q(e)?e:[e]},hg=function(a){return function(){a.v()}},kg=function(a){for(var b={},c=0;c<a.length;c++){var d=a[c],e=[],f=function(a){var b=gg(a,!0);0<b.length&&
f(b[0].s);e.push(a);var c=gg(a,!1);0<c.length&&f(c[0].s)};f(d.g);b[d.g]=e}jg(a,b);return b},jg=function(a,b){for(var c=0;c<a.length;c++){var d=a[c].g,e;for(e in b)if(b.hasOwnProperty(e)&&e!=d&&-1<La(b[e],d)){delete b[d];break}}};var mg=function(a,b){return function(){a["20"]=b.O;a["21"]=b.N;var c=b.g,d=b.i&&b.i.ka[c],e=Ga[c]&&Ga[c].state,f=d?void 0!==d:b.Ma,g=Ga[c]&&Ga[c].firingOption,k=g&&2==g,l=g&&1==g;if((f||e&&0!=e)&&(f||k)&&(k||l))k&&Ga[c]&&1==Ga[c].state||l&&b.i&&1==b.i.ka[c]?b.O():b.N();else{var m=b.i?b.i.event:void 0;a=lg(a,m?m.c:xb());Wa(b,0);if(m){var h=a;Xf(m,c)}Qa(a,b.O,b.N)}}},lg=function(a,b){a=Jf(a,b);return a},fg=function(a,b,c){var d=new Zf(b);d.i=c;$f(d,Be(a));ag(d,Ce(a));d.v=mg(a,d);return d};
var qg=!1,_ua=function(a,b,c){function d(a){var b=[].slice.call(arguments,0);b[0]=p+b[0];A[m()].apply(window,b)}function e(b,c){void 0!==a[c]&&d("set",b,a[c])}function f(a,b){return void 0===b?b:a(b)}function g(a,b){if(b)for(var c in b)b.hasOwnProperty(c)&&d("set",a+c,b[c])}function k(){var b=function(a,b,c){if(!ca(b))return!1;for(var e=da(Object(b),c,[]),f=0;e&&f<e.length;f++)d(a,e[f]);return!!e&&0<e.length},c;a["8"]?
c=G("ecommerce"):a[""]&&(c=a[""].ecommerce);if(!ca(c))return;c=Object(c);var e=da(a["10"],"currencyCode",c.currencyCode);void 0!==e&&d("set","&cu",e);b("ec:addImpression",c,"impressions");if(b("ec:addPromo",c[c.promoClick?"promoClick":"promoView"],"promotions")&&c.promoClick){d("ec:setAction","promo_click",c.promoClick.actionField);return}for(var f="detail checkout checkout_option click add remove purchase refund".split(" "),
g=0;g<f.length;g++){var h=c[f[g]];if(h){b("ec:addProduct",h,"products");d("ec:setAction",f[g],h.actionField);break}}}function l(a,b,c){var d=0;if(void 0!==a)for(var e in a)if(a.hasOwnProperty(e)&&(c&&v[e]||!c&&void 0===v[e])){var f=u[e]?ea(a[e]):a[e];"anonymizeIp"!=e||f||(f=void 0);b[e]=f;d++}return d}w("GoogleAnalyticsObject",a["14"]||"ga",!1);var m=function(){return A.GoogleAnalyticsObject},h=w(m(),function(){var a=A[m()];a.q=
a.q||[];a.q.push(arguments)},!1);h.l=Number(B());var p="",r="";void 0==a[""]?(r="gtm"+aa++,p=r+"."):""!==a[""]&&(r=a[""],p=r+".");var t=!1;var v={name:!0,clientId:!0,sampleRate:!0,siteSpeedSampleRate:!0,alwaysSendReferrer:!0,allowAnchor:!0,allowLinker:!0,cookieName:!0,cookieDomain:!0,cookieExpires:!0,cookiePath:!0,legacyCookieDomain:!0,legacyHistoryImport:!0,storage:!0},u={allowAnchor:!0,
allowLinker:!0,alwaysSendReferrer:!0,anonymizeIp:!0,exFatal:!0,forceSSL:!0,javaEnabled:!0,legacyHistoryImport:!0,nonInteraction:!0,useBeacon:!0};var z={name:r};
l(a["10"],z,!0);h("create",a["0"],z);d("set","&gtm","GTM-T7FPMN");
var D={};l(a["10"],D,!1)&&d("set",D);a["13"]&&d("require","linkid","linkid.js");
d("set","hitCallback",function(){if(H(a[""]))a[""]();else{var c=a["10"],d=c&&c.hitCallback;H(d)&&d()}b()});if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else if(a[""]){}else{a["9"]&&(d("require","ec","ec.js"),k());if(a["7"]&&
!a[""]){var S="_dc_gtm_"+String(a["0"]).replace(/[^A-Za-z0-9-]/g,"");d("require","displayfeatures",void 0,{cookieName:S})}
d("send","pageview");}if(!qg){var V=a["5"]?"u/analytics_debug.js":"analytics.js";qg=!0;n(K("https:","http:","//www.google-analytics.com/"+V,
t),function(){A[m()].loaded||c()},c)}};_ua.a="ua";_ua.b=["google"];var rg,sg;var Bg=function(){var a=[];return function(b,c){if(void 0===a[b]){var d=Cf[b]&&Jf(Cf[b],c),e=d;if(d)if(d[""]&&Q(d["3"]))for(var f=d["3"],e=!1,g=0;!e&&g<f.length;g++)d["3"]=f[g],e=Qa(d);else e=Qa(d);a[b]=[e,d]}return a[b]}},Uf=function(a,b){for(var c=b[0],d=0;d<c.length;d++)if(!a.I(c[d],a.c)[0])return!1;for(var e=b[2],d=0;d<e.length;d++)if(a.I(e[d],a.c)[0])return!1;return!0},Cg=!1,nc=function(a,b,c,d){switch(b){case "gtm.js":if(Cg)return!1;Cg=!0;break;
case "gtm.sync":if(G("gtm.snippet")!=Ca)return!1}G("tagTypeBlacklist");for(var e={id:a,name:b,V:c||Ia,U:Lf(),ga:Lf(),I:Bg(),c:xb()},f=[],g=0;g<Pc.length;g++)if(Uf(e,Pc[g])){f[g]=!0;for(var k=e,l=Pc[g],m=l[1],h=0;h<m.length;h++)k.U[m[h]]=!0;for(var p=l[3],h=0;h<p.length;h++)k.ga[p[h]]=!0}else f[g]=!1;Xf(e);var t=[];
for(var v=0;v<xf;v++)if(e.U[v]&&!e.ga[v])if(e.c(Z[v])){}else{t[v]=Z[v];}e.J=t;for(var u=new bg(e),z=0;z<xf;z++)if(e.U[z]&&!e.ga[z])if(e.c(Z[z])){}else{var D=e.J[z],E=fg(D,z,u);cg(u,z,E,D[""],D[""],D[""]);if(D[""])break}u.addListener(e.V);for(var F=[],y=0;y<u.F.length;y++){var C=u.F[y];if(C){var x=u.Ga[y],I=u.Ka[y],S=u.Na[y];if(0!=x.length||I||S){if(0<x.length)for(var W=eg(x,C.v),V=0;V<x.length;V++)x[V]instanceof If&&x[V].s!=y&&dg(u,x[V].s,W);(I||S)&&ig(u,y)}else F.push(y)}}for(y=0;y<F.length;y++)u.F[F[y]].v();for(y=0;y<u.ya.length;y++){for(var Ha=
u.ya[y],va=Ha,$c=[],Yb=0;Yb<va.length;Yb++){var Zb=va[Yb],Yc=Zb.g,Zc=Ga[Yc],Wb=Zc.firingOption;0!=Wb&&(1==Wb&&void 0!==Zb.i.ka[Yc]||2==Wb&&void 0!==Zc.state)&&$c.push(Zb)}var Xb=kg($c),sb=void 0;for(sb in Xb)if(Xb.hasOwnProperty(sb)){for(var Gc=void 0,Te=void 0,Sb=Xb[sb],Pg=Sb[0],Ue=Sb[Sb.length-1],Ve,ua=0;ua<va.length;ua++){var Tb=va[ua];!Gc&&Tb.g==Pg&&0<ua&&(Gc=va[ua-1]);Tb.g==Ue&&ua<va.length-1&&(Te=va[ua+1]);if(-1<La(Sb,Tb.g))if(Ve=va.splice(ua,1)[0],Tb.g==Ue)break;else ua--}if(Ve){var We=Number(sb),
Y=Gc,Qc=Te;if(Y){var Qg=Y.ha[0],Rg=Y.Z[0],Xe=Y;Xe.ha=[];Xe.Z=[];$f(Y,Qg);ag(Y,Rg)}if(Y&&Qc){var Rc=hg(Qc);$f(Y,Rc);var Sc=gg(Y.g,!1);0<Sc.length&&Sc[0].s!=We&&0==Sc[0].ia&&ag(Y,Rc);var Tc=gg(Qc.g,!0);0<Tc.length&&Tc[0].s!=We&&0==Tc[0].ia&&ag(Y,Rc)}}}0<Ha.length&&Ha[0].v()}0<u.M||Ta(u.sa);d&&H(d)&&d({passingRules:f,resolvedTags:e.J});for(var Ye in e.J)if(e.J.hasOwnProperty(Ye)){var Ze=e.J[Ye],Uc;if(!(Uc=void 0==Ze["12"])){var $e=Ze["12"];Uc=!("function"!=typeof String.prototype.startsWith?0===$e.indexOf("_implicit"):
$e.startsWith("_implicit"))}if(Uc)return!0}return!1};var Dg={macro:function(a){if(Bf.contains(a))return Bf.get(a)}};Dg.dataLayer=rb;Dg.onHtmlSuccess=jd(!0);Dg.onHtmlFailure=jd(!1);Dg.Ya=function(){var a=A.google_tag_manager;a||(a=A.google_tag_manager={});a["GTM-T7FPMN"]||(a["GTM-T7FPMN"]=Dg);ha=a};yf.push.apply(yf,function(){for(var a=[_eq,_e,'_event',_M(0),'gtm.js','1448205_2147479553',_ua,1,true,_c,'GAUA ID','UA-1990066-30',_M(1),false,'cookieDomain','auto',{14:15},'\x26tid',{17:12,14:15},_u,'Page URL','Page Hostname','host','Page Path','path',_f,'Referrer','Event',_v,'Click Element','gtm.element','Click Classes','gtm.elementClasses','Click ID','gtm.elementId','Click Target','gtm.elementTarget','Click URL','gtm.elementUrl',_et,'Click Text'],b=[],c=0;c<a.length;c++)b[c]=Kf(c,a);return b}());Nf(zf,0,"11:0,11:1,12:2,2:3,3:4,11:6,16:7,15:8,11:9,12:10,19:11,0:12,9:13,8:13,18:13,10:16,5:13,6:13,1:18,13:13,7:8,17:7,11:19,12:20,12:21,4:22,12:23,4:24,11:25,12:26,12:27,11:28,12:29,14:30,12:31,14:32,12:33,14:34,12:35,14:36,12:37,14:38,11:39,12:40");Nf(Af,1,"G,Ac,AAAw,AAAQD,AAAQM,AAAAw,CAAAAB,AAAAAO,AAAAAy,AAAAACD,AAAAACM,AAAAACw,AAAAAAAD");Nf(Cf,1,"Z");Nf(Z,1,"gj_P");Nf(Pc,2,"B:B::");Nf(Vc,4,"5:");
for(var Eg=0;Eg<Z.length;Eg++){var Fg=Z[Eg],Gg=1;Fg[""]?Gg=2:Fg[""]&&(Gg=0);Ga[Eg]={firingOption:Gg,state:void 0}}Dg.Ya();
(function(a){})("async");
(function(){var a=w("dataLayer",[],!1),b=w("google_tag_manager",{},!1),b=b["dataLayer"]=b["dataLayer"]||{};ja.push(function(){b.gtmDom||(b.gtmDom=!0,a.push({event:"gtm.dom"}))});jb.push(function(){b.gtmLoad||(b.gtmLoad=!0,a.push({event:"gtm.load"}))});var c=a.push;a.push=function(){var b=[].slice.call(arguments,0);c.apply(a,b);for(oc.push.apply(oc,b);300<this.length;)this.shift();return xc()};oc.push.apply(oc,a.slice(0));q(xc)})();
if("interactive"==N.readyState&&!N.createEventObject||"complete"==N.readyState)bb();else{T(N,"DOMContentLoaded",bb);T(N,"readystatechange",bb);if(N.createEventObject&&N.documentElement.doScroll){var Og=!0;try{Og=!A.frameElement}catch(a){}Og&&db()}T(A,"load",bb)}"complete"===N.readyState?kb():T(A,"load",kb);
(function(a){})("async");(function(){})();var _vs="res_ts:1446129453455000,srv_cl:107213748,ds:live,cv:1";
})()
