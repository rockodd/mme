if(typeof CE2=="undefined"){CE2={}}CE2.deviceType=function(b){var a=b.toLowerCase();var c,e;var d=0;c=b.indexOf("(");if(c==-1){return 1}c++;if((e=b.indexOf("Android",c))!=-1){e+=8;if(b.length>e&&(d=b.charAt(e))){switch(d){case"2":if(b.indexOf("BNTV",e)!=-1){return 3}if(a.indexOf("nook",e)!=-1){return 3}if(b.indexOf("Kindle",e)!=-1){return 3}if(b.indexOf("Touchpad",e)!=-1){return 3}break;case"3":return 3;case"4":if(b.indexOf("Silk",e)!=-1){return 3}}}if(a.indexOf("tablet",e)!=-1){return 3}if(b.indexOf("Mobi",e)!=-1){return 2}return 3}if((e=b.indexOf("iP",c))!=-1){d=b.charAt(e+2);switch(d){case"a":return 3;case"h":case"o":return 2}}if((e=b.indexOf("BlackBerry",c))!=-1){if(b.indexOf("Tablet",e+10)!=-1){return 3}return 2}if(b.indexOf("Windows Phone",c)!=-1){return 2}if(b.indexOf("BB10",c)!=-1){return 2}if(b.charAt(0)!="M"&&b.indexOf("Opera Mini",c)!=-1){return 2}return 1};if(typeof CE2=="undefined"){CE2={}}CE2.ignoredElements=[];CE2.clickCaptors=[];CE2.d=document;CE2.w=window;CE2.n=navigator;CE2.p={};(function(){var a=CE2.n.userAgent;if(/\bMSIE\b/.test(a)){CE2.ie=1;CE2.ieVersion=parseInt(/MSIE (\d+)\.\d+/.exec(a)[1],10);CE2.ieQuirksMode=(CE2.d.compatMode=="BackCompat")}})();CE2.ignore=function(a){if(!a){return}CE2.ignoredElements.push(a);if(CE2.tracker){CE2.tracker.ignoredElements.push(a)}};CE2.capture=function(a){CE2.clickCaptors.push(a);if(CE2.tracker){CE2.tracker.clickCaptors.push(a)}};CE2.findMatchingSnapshot=function(g,e,d){var c,f,b,a;if(!(g&&g.length)){return}for(f=0;b=g[f++];){c=Math.floor(new Date().getTime()/1000);if(b.e&&b.e<=c){continue}if(d&&!/n/.test(b.o||"")){continue}if(CE2.matchURL(b.u,d||e,b.o,b.d,CE2.n.userAgent)){if(b.s&&b.s>c){CE2.p[b.id]=b}else{if(!a){a=b}}}}return a};CE2.findMatchingLiveSessions=function(e,b){var c,d,a=[];if(!(e&&e.length)){return}for(c=0;d=e[c++];){if(CE2.matchURL(d.u,b,d.o,d.d,CE2.n.userAgent)){a.push(d.id)}}if(a.length){a.sort();return a}};CE2.sameSessions=function(e,c){var f,d;if(!(e&&c)){return false}if(e.length!=c.length){return false}for(f=0,d=e.length;f<d;f++){if(e[f]!=c[f]){return false}}return true};CE2.startTracking=function(b,d){var a,c;if(b){if(CE2.sampleVisit(b)){CE2.testID=b.id;CE2.testVersion=b.v||1}else{if(!d){return}}}if(d){CE2.sessionIDs=d}a=CE2.d.createElement("script");c=CE2.w.location.protocol=="https:"?CE2.TRACKING_SCRIPT_SECURE:CE2.TRACKING_SCRIPT;a.src=c+(b?"?s="+b.id+"&":"?")+"t="+(new Date().getTime());a.type="text/javascript";a.async=true;CE2.d.body.appendChild(a)};CE2.unescape=function(a){try{return decodeURIComponent(a)}catch(b){return unescape(a)}};CE2.qs2obj=function(a,c){if(a==null||/^\s*$/.test(a)){return null}var g={},e=null,f=a.replace(/\+/g," ").split(c||"&"),d,b;for(d=0,b=f.length;d<b;d++){e=f[d].split("=");if(!e[0]){continue}g[CE2.unescape(e[0])]=e[1]==null?null:CE2.unescape(e[1])}return g};CE2.each=function(g,e,b){if(!g){return}var f;if(typeof g.length=="number"&&typeof g.concat=="function"){for(var d=0,a=g.length;d<a;d++){f=g[d];if(e.call(b,f,d)===false){break}}}else{var c;for(c in g){f=g[c];if(f!==Object.prototype[c]){if(e.call(b,f,c)===false){break}}}}};CE2.indexOf=function(a,e,c){var d,b;for(d=c||0,b=a.length;d<b;d++){if(a[d]===e){return d}}return -1};CE2.listen=CE2.addListener=function(c,a,b){if(c.addEventListener){c.addEventListener(a,b,true)}else{c.attachEvent("on"+a,b)}};CE2.removeListener=function(c,a,b){if(c.removeEventListener){c.removeEventListener(a,b,true)}else{c.detachEvent("on"+a,b)}};CE2.userData={};CE2.set=function(a,b){a=parseInt(a,10);if(1<=a&&a<=5){CE2.userData[a]=String(b)}};CE2.click=function(){if(CE2.tracker){return CE2.tracker.click.apply(CE2.tracker,arguments)}};CE2.getBox=function(){};CE2.sampleVisit=function(a){if(a.r==null){return true}if(a.r!==false&&a.r!==true){if(Math.random()>=1/a.r){a.r=false}else{a.r=true}}return a.r};CE2.dontTrack=function(){if(CE2.ie&&typeof CE2.w.external!="undefined"){try{if(CE2.w.external.InPrivateFilteringEnabled()===true){return true}}catch(b){}}var a=CE2.d.doNotTrack||CE2.n.doNotTrack||CE2.n.msDoNotTrack;return(a=="1"||a=="yes")};CE2.cookies=(function(){try{return CE2.qs2obj(document.cookie,/;\s*/g)||{}}catch(a){return{}}})();CE2.parseJSON=function(src){if(typeof JSON!="undefined"&&typeof JSON.parse=="function"){return JSON.parse(src)}else{return eval("("+src+")")}};if(typeof CE2=="undefined"){CE2={}}CE2.re=(function(){var a="[\\s\\u00a0\\u2028\\u2029]+";return{whitespace:new RegExp(a,"g"),strip:new RegExp("^"+a+"|"+a+"$","g"),href:/\bhref="(.*?)"/i}})();CE2.innerText=function(c){var d=typeof c.textContent=="undefined"?"innerText":"textContent",a=c[d].substr(0,1024*16);function b(h,g){var e,f;for(e=0;f=g[e++];){h=h.replace(f[d],"")}return h}a=b(a,c.getElementsByTagName("SCRIPT"));a=b(a,c.getElementsByTagName("NOSCRIPT"));return a};CE2.innerTextName=function(a,b){return CE2.strip(CE2.strip(CE2.innerText(a),true).substr(0,b||100))};CE2.strip=function(b,c){var a=b.replace(CE2.re.strip,"");if(c){return a.replace(CE2.re.whitespace," ")}else{return a}};if(typeof CE2=="undefined"){CE2={}}CE2.READY_STATE_PATTERN=CE2.ie?/complete/:/complete|interactive/;CE2.autoStart=(typeof CE_MANUAL_START=="undefined"||!CE_MANUAL_START);CE2.domReady=(document.readyState&&CE2.READY_STATE_PATTERN.test(document.readyState));CE2.domReadyListeners=[];CE2.onDOMReady=function(a){if(CE2.domReady){return setTimeout(a,1)}CE2.domReadyListeners.push(a)};CE2.domReadySetup=function(){var b=function(d){var e,c;var f=CE2.domReadyListeners;while(f.length>0){f.pop().call()}CE2.domReady=true};if(CE2.domReady){b()}CE2.listen(window,"load",b);if(document.addEventListener){CE2.listen(document,"DOMContentLoaded",b)}if(document.readyState){var a=CE2.READY_STATE_PATTERN;(function(){if(a.test(document.readyState)){b()}else{setTimeout(arguments.callee,10)}})()}};if(CE2.autoStart){CE2.domReadySetup()}if(typeof CE2=="undefined"){CE2={}}CE2.matchURL=function(j,t,k,o,x){var n=/(default|index)($|\..*)/i,m=false,b,A,p,r,y,h,c,d,w,f,g,a,q,z,u,s;if(!(j&&t)){return false}if(o&&CE2.indexOf(o,CE2.deviceType(x))<0){return false}k=k||"";if(/n/.test(k)){return j===t}if(/[re]/.test(k)){try{return new RegExp(j,"i").test(t)}catch(v){return false}}b=new CE2.URI(t.toLowerCase());if(/h/.test(k)&&((j.protocol)!=b.protocol)){return false}p=b.host;A=p.replace(/^www\./,"");d=j.host;w=j.ihost;if(/w/.test(k)&&(p!=d&&p!=w)){return false}if(A!=d.replace(/^www\./,"")&&A!=(w&&w.replace(/^www\./,""))){return false}if(!j.path){f="/"}else{f=j.path}r=b.path;if(f!=r){if(/\//.test(k)){return false}g=f.split("/");y=r.split("/");for(u=0,s=Math.max(g.length,y.length);u<s;u++){if(!g[u]){g[u]=""}if(!y[u]){y[u]=""}if(u==s-1){g[u]=g[u].replace(n,"");y[u]=y[u].replace(n,"")}if(g[u]!=y[u]){return false}}}h=b.qs;z=/\?/.test(k);a=j.qs||"";if((z&&h&&!a)||(!h&&a)){return false}CE2.each(a,function(i,e){if(h[e]!==i){m=true;return false}});if(m){return false}if(z){CE2.each(h,function(i,e){if(i!=a[e]){return(m=true)}});if(m){return false}}q=j.hash||"";c=b.hash||"";z=/#/.test(k);if((z||q)&&q!=c){return false}return true};if(typeof CE2=="undefined"){CE2={}}if(typeof(CE2.URI)=="undefined"){CE2.URI=function(b){this.src=b;this.protocol=this.host=this.port=this.path=this.qs=this.hash=this.query=null;if(b){var a=typeof(b);if(a=="string"){this.initWithString(b)}else{if(a=="object"){this.initWithURI(b)}}}};CE2.URI.pattern=/^\s*([\S]+?:\/\/)?([^\s\/]+?@)?([^:\/\?\#]+)?(\:\d+)?(\/?[^#\?\s]*)?([\?][^#\s]*)?([#]\S+)?/i;CE2.URI.prototype={initWithString:function(h){var g,b,f,a,e,d;var c=CE2.URI.pattern.exec(h);if(!c[1]&&h.charAt(0)!="/"){this.path=CE2.unescape((c[3]||"")+(c[5]||""))}else{if(g=c[1]){this.protocol=g.substr(0,g.indexOf(":"))}this.host=c[3]||null;if(b=c[4]){this.port=Number(b.substr(1))}if(f=c[5]){this.path=CE2.unescape(f)}else{if(this.host){this.path="/"}}}this.query=c[6]&&(c[6]+"").replace("?","");if(a=c[6]){this.qs=CE2.qs2obj(a.substr(1))}if(e=c[7]){this.hash=CE2.unescape(e.substr(1))}},initWithURI:function(a){CE2.each(a,function(c,b){this[b]=c},this)},isAbsolute:function(){return this.isURL()||(this.path&&this.path.charAt(0)=="/")},isURL:function(){return this.protocol&&this.host},getDomain:function(){return this.host&&this.host.replace(/^www\./,"")}}}CE2.userMain=function(){var e=CE2.snapshots,g=CE2.sessions,f=CE2.liveBootstrap||(function(){});if(CE2.dontTrack()){return}CE2.testID=CE2.testVersion=CE2.sessionIDs=null;var d=(function(){var k="!$%&()*+,-.0123456789;<=>?@[]^_`{|}~",j={},h;for(h=0;h<k.length;h++){j[k.charAt(h)]=h.toString(36)}return j})();var b=function(h){return parseInt(h.replace(/./g,function(i){return d[i]}),36)};var c=function(j){var h="",k=/(![^:\/a-z])|([^:\/a-z]{2})|(:[^:\/a-z]{3})|(\/[^:\/a-z]{4})/ig,l=String.fromCharCode,i;while((i=k.exec(j))!=null){if(i[1]||i[2]){h+=l(b(i[0]))}else{if(i[3]){h+=l(b(i[3].substr(1)))}else{if(i[4]){h+=l(b(i[4].substr(1)))}}}}return h};if(typeof c=="function"){if(typeof e=="string"){e=CE2.parseJSON(c(e))}if(typeof g=="string"){g=CE2.parseJSON(c(g))}}var a=function(){try{var j=CE2.w.location.href,i=CE2.findMatchingSnapshot(e,j,typeof CE_SNAPSHOT_NAME=="string"&&CE_SNAPSHOT_NAME),h=CE2.findMatchingLiveSessions(g,j);if(f()){return}if(!(i||h)){CE2.testID=CE2.testVersion=CE2.sessionIDs=null;if(CE2.tracker){CE2.tracker.cleanup();CE2.tracker=null}return}if((i&&i.id!=CE2.testID)||(h&&!CE2.sameSessions(h,CE2.sessionIDs))){CE2.startTracking(i,h);if(CE2.badge){CE2.badge()}}}catch(k){}};a();if(CE2.autoStart){CE2.monitorInterval=setInterval(a,1000)}};if(CE2.autoStart){CE2.onDOMReady(CE2.userMain)}if(typeof CE_READY=="function"){CE2.onDOMReady(CE_READY)}else{if(typeof CE_READY=="object"){CE2.onDOMReady(function(){CE2.each(CE_READY,function(a){if(typeof a=="function"){a()}})})}}CE2.TRACKING_SCRIPT="http://trk.cetrk.com/t.js";CE2.TRACKING_SCRIPT_SECURE="https://s3.amazonaws.com/trk.cetrk.com/t.js";CE2.TRACKING_DEST="http://trk.cetrk.com/";CE2.TRACKING_DEST_SECURE="https://s3.amazonaws.com/trk.cetrk.com/";CE2.uid=187518;CE2.snapshots="%8&4!}%]!}$<%8$2%;$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0&0%?&+$-%|&+&,$-%{&-%@&+&(&&&,$0%|&%%@&&&-&%%]$-&$%?&*%~%^&,%|&%%`!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(!}$,!}%{&&&+&,!}$<!}&&%_%_%^&*&+$.%{&-%@&+&(&&&,$.%]%^!}&6$,!}%|%]!}$<$2$6$9$;$;$7$7$,!}%^!}$<$2$5$5$7$8$5$3$9$1$1$,!}&.!}$<$6&6$,&4!}%]!}$<%8$2%;$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0&0%?&+$-%|&+&,$-%{&-%@&+&(&&&,$0%^&$%?%|&!$-&$%?&*%~%^&,%|&%%`!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(!}$,!}%{&&&+&,!}$<!}&&%_%_%^&*&+$.%{&-%@&+&(&&&,$.%]%^!}&6$,!}%|%]!}$<$2$6$9$;$;$8$4$,!}%^!}$<$2$5$5$7$8$5$3$9$1$1$,!}&.!}$<$6&6$,&4!}%]!}$<%8$2%;$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0&0%?&+$-%|&+&,$-%{&-%@&+&(&&&,$0&+&&%[%|%?&!$-&$%^%]%|%?!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(!}$,!}%{&&&+&,!}$<!}&&%_%_%^&*&+$.%{&-%@&+&(&&&,$.%]%^!}&6$,!}%|%]!}$<$2$6$9$;$;$8$7$,!}%^!}$<$2$5$5$;$4$4$5$9$1$1$,!}&.!}$<$6&6$,&4!}%]!}$<%8$3$,$4%;$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0&(&*%|%[%|&%%`$0&+%?&!%^&+!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(!}$,!}%{&&&+&,!}$<!}&0&0&0$.%{&-%@&+&(&&&,$.%[&&&$!}&6$,!}%|%]!}$<$2$6$7$4$3$4$4$,!}%^!}$<$2$5$5$8$6$2$4$3$1$1$,!}&.!}$<$6&6$,&4!}%]!}$<%8$2%;$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0&(&*%|%[%|&%%`$0&+%?&!%^&+!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(!}$,!}%{&&&+&,!}$<!}&0&0&0$.%{&-%@&+&(&&&,$.%[&&&$!}&6$,!}%|%]!}$<$2$6$7$4$3$4$3$,!}%^!}$<$2$5$5$8$6$2$4$3$1$1$,!}&.!}$<$6&6$,&4!}%]!}$<%8$3$,$4%;$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0&+%?&!%^&+$-&(&*&&%[%^&+&+!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(!}$,!}%{&&&+&,!}$<!}&0&0&0$.%{&-%@&+&(&&&,$.%[&&&$!}&6$,!}%|%]!}$<$2$6$9$3$8$2$;$,!}%^!}$<$2$5$5$9$9$4$9$1$1$1$,!}&.!}$<$6&6$,&4!}%]!}$<%8$2%;$,!}&-!}$<&4!}&(%?&,%{!}$<!}$0&+%?&!%^&+$-&(&*&&%[%^&+&+!}$,!}&(&*&&&,&&%[&&&!!}$<!}%{&,&,&(!}$,!}%{&&&+&,!}$<!}&0&0&0$.%{&-%@&+&(&&&,$.%[&&&$!}&6$,!}%|%]!}$<$2$6$9$3$8$2$5$,!}%^!}$<$2$5$5$9$9$4$9$1$1$1$,!}&.!}$<$6&6%;";CE2.sessions=null;