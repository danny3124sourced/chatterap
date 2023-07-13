import{j as f,R as qt,r as S,T as st,B as oe,u as ie,G as Te,F as Ae,a as ze,b as Pe,M as Ye,C as Le}from"./index-98068710.js";import{T as Xe,a as _e}from"./index.esm-151940a2.js";import{c as Kt}from"./url-c3cb67a6.js";const Fe=({children:t,className:e})=>f.jsx("article",{className:` ${e} bg-white-100 shadow-md shadow-black-900`,children:t});function Ve(t){if(t.sheet)return t.sheet;for(var e=0;e<document.styleSheets.length;e++)if(document.styleSheets[e].ownerNode===t)return document.styleSheets[e]}function Be(t){var e=document.createElement("style");return e.setAttribute("data-emotion",t.key),t.nonce!==void 0&&e.setAttribute("nonce",t.nonce),e.appendChild(document.createTextNode("")),e.setAttribute("data-s",""),e}var We=function(){function t(r){var n=this;this._insertTag=function(a){var s;n.tags.length===0?n.insertionPoint?s=n.insertionPoint.nextSibling:n.prepend?s=n.container.firstChild:s=n.before:s=n.tags[n.tags.length-1].nextSibling,n.container.insertBefore(a,s),n.tags.push(a)},this.isSpeedy=r.speedy===void 0?!0:r.speedy,this.tags=[],this.ctr=0,this.nonce=r.nonce,this.key=r.key,this.container=r.container,this.prepend=r.prepend,this.insertionPoint=r.insertionPoint,this.before=null}var e=t.prototype;return e.hydrate=function(n){n.forEach(this._insertTag)},e.insert=function(n){this.ctr%(this.isSpeedy?65e3:1)===0&&this._insertTag(Be(this));var a=this.tags[this.tags.length-1];if(this.isSpeedy){var s=Ve(a);try{s.insertRule(n,s.cssRules.length)}catch{}}else a.appendChild(document.createTextNode(n));this.ctr++},e.flush=function(){this.tags.forEach(function(n){return n.parentNode&&n.parentNode.removeChild(n)}),this.tags=[],this.ctr=0},t}(),R="-ms-",nt="-moz-",h="-webkit-",ce="comm",Pt="rule",Yt="decl",De="@import",fe="@keyframes",Ge="@layer",Ue=Math.abs,ot=String.fromCharCode,He=Object.assign;function qe(t,e){return M(t,0)^45?(((e<<2^M(t,0))<<2^M(t,1))<<2^M(t,2))<<2^M(t,3):0}function le(t){return t.trim()}function Ke(t,e){return(t=e.exec(t))?t[0]:t}function y(t,e,r){return t.replace(e,r)}function Mt(t,e){return t.indexOf(e)}function M(t,e){return t.charCodeAt(e)|0}function H(t,e,r){return t.slice(e,r)}function _(t){return t.length}function Lt(t){return t.length}function J(t,e){return e.push(t),t}function Ze(t,e){return t.map(e).join("")}var it=1,D=1,de=0,T=0,j=0,G="";function ct(t,e,r,n,a,s,i){return{value:t,root:e,parent:r,type:n,props:a,children:s,line:it,column:D,length:i,return:""}}function U(t,e){return He(ct("",null,null,"",null,null,0),t,{length:-t.length},e)}function Je(){return j}function Qe(){return j=T>0?M(G,--T):0,D--,j===10&&(D=1,it--),j}function A(){return j=T<de?M(G,T++):0,D++,j===10&&(D=1,it++),j}function V(){return M(G,T)}function tt(){return T}function Z(t,e){return H(G,t,e)}function q(t){switch(t){case 0:case 9:case 10:case 13:case 32:return 5;case 33:case 43:case 44:case 47:case 62:case 64:case 126:case 59:case 123:case 125:return 4;case 58:return 3;case 34:case 39:case 40:case 91:return 2;case 41:case 93:return 1}return 0}function ue(t){return it=D=1,de=_(G=t),T=0,[]}function me(t){return G="",t}function et(t){return le(Z(T-1,Rt(t===91?t+2:t===40?t+1:t)))}function tr(t){for(;(j=V())&&j<33;)A();return q(t)>2||q(j)>3?"":" "}function er(t,e){for(;--e&&A()&&!(j<48||j>102||j>57&&j<65||j>70&&j<97););return Z(t,tt()+(e<6&&V()==32&&A()==32))}function Rt(t){for(;A();)switch(j){case t:return T;case 34:case 39:t!==34&&t!==39&&Rt(j);break;case 40:t===41&&Rt(t);break;case 92:A();break}return T}function rr(t,e){for(;A()&&t+j!==47+10;)if(t+j===42+42&&V()===47)break;return"/*"+Z(e,T-1)+"*"+ot(t===47?t:A())}function nr(t){for(;!q(V());)A();return Z(t,T)}function ar(t){return me(rt("",null,null,null,[""],t=ue(t),0,[0],t))}function rt(t,e,r,n,a,s,i,c,l){for(var u=0,m=0,p=i,C=0,I=0,$=0,d=1,O=1,v=1,g=0,k="",Y=a,L=s,X=n,w=k;O;)switch($=g,g=A()){case 40:if($!=108&&M(w,p-1)==58){Mt(w+=y(et(g),"&","&\f"),"&\f")!=-1&&(v=-1);break}case 34:case 39:case 91:w+=et(g);break;case 9:case 10:case 13:case 32:w+=tr($);break;case 92:w+=er(tt()-1,7);continue;case 47:switch(V()){case 42:case 47:J(sr(rr(A(),tt()),e,r),l);break;default:w+="/"}break;case 123*d:c[u++]=_(w)*v;case 125*d:case 59:case 0:switch(g){case 0:case 125:O=0;case 59+m:v==-1&&(w=y(w,/\f/g,"")),I>0&&_(w)-p&&J(I>32?Jt(w+";",n,r,p-1):Jt(y(w," ","")+";",n,r,p-2),l);break;case 59:w+=";";default:if(J(X=Zt(w,e,r,u,m,a,c,k,Y=[],L=[],p),s),g===123)if(m===0)rt(w,e,X,X,Y,s,p,c,L);else switch(C===99&&M(w,3)===110?100:C){case 100:case 108:case 109:case 115:rt(t,X,X,n&&J(Zt(t,X,X,0,0,a,c,k,a,Y=[],p),L),a,L,p,c,n?Y:L);break;default:rt(w,X,X,X,[""],L,0,c,L)}}u=m=I=0,d=v=1,k=w="",p=i;break;case 58:p=1+_(w),I=$;default:if(d<1){if(g==123)--d;else if(g==125&&d++==0&&Qe()==125)continue}switch(w+=ot(g),g*d){case 38:v=m>0?1:(w+="\f",-1);break;case 44:c[u++]=(_(w)-1)*v,v=1;break;case 64:V()===45&&(w+=et(A())),C=V(),m=p=_(k=w+=nr(tt())),g++;break;case 45:$===45&&_(w)==2&&(d=0)}}return s}function Zt(t,e,r,n,a,s,i,c,l,u,m){for(var p=a-1,C=a===0?s:[""],I=Lt(C),$=0,d=0,O=0;$<n;++$)for(var v=0,g=H(t,p+1,p=Ue(d=i[$])),k=t;v<I;++v)(k=le(d>0?C[v]+" "+g:y(g,/&\f/g,C[v])))&&(l[O++]=k);return ct(t,e,r,a===0?Pt:c,l,u,m)}function sr(t,e,r){return ct(t,e,r,ce,ot(Je()),H(t,2,-2),0)}function Jt(t,e,r,n){return ct(t,e,r,Yt,H(t,0,n),H(t,n+1,-1),n)}function W(t,e){for(var r="",n=Lt(t),a=0;a<n;a++)r+=e(t[a],a,t,e)||"";return r}function or(t,e,r,n){switch(t.type){case Ge:if(t.children.length)break;case De:case Yt:return t.return=t.return||t.value;case ce:return"";case fe:return t.return=t.value+"{"+W(t.children,n)+"}";case Pt:t.value=t.props.join(",")}return _(r=W(t.children,n))?t.return=t.value+"{"+r+"}":""}function ir(t){var e=Lt(t);return function(r,n,a,s){for(var i="",c=0;c<e;c++)i+=t[c](r,n,a,s)||"";return i}}function cr(t){return function(e){e.root||(e=e.return)&&t(e)}}function fr(t){var e=Object.create(null);return function(r){return e[r]===void 0&&(e[r]=t(r)),e[r]}}var lr=function(e,r,n){for(var a=0,s=0;a=s,s=V(),a===38&&s===12&&(r[n]=1),!q(s);)A();return Z(e,T)},dr=function(e,r){var n=-1,a=44;do switch(q(a)){case 0:a===38&&V()===12&&(r[n]=1),e[n]+=lr(T-1,r,n);break;case 2:e[n]+=et(a);break;case 4:if(a===44){e[++n]=V()===58?"&\f":"",r[n]=e[n].length;break}default:e[n]+=ot(a)}while(a=A());return e},ur=function(e,r){return me(dr(ue(e),r))},Qt=new WeakMap,mr=function(e){if(!(e.type!=="rule"||!e.parent||e.length<1)){for(var r=e.value,n=e.parent,a=e.column===n.column&&e.line===n.line;n.type!=="rule";)if(n=n.parent,!n)return;if(!(e.props.length===1&&r.charCodeAt(0)!==58&&!Qt.get(n))&&!a){Qt.set(e,!0);for(var s=[],i=ur(r,s),c=n.props,l=0,u=0;l<i.length;l++)for(var m=0;m<c.length;m++,u++)e.props[u]=s[l]?i[l].replace(/&\f/g,c[m]):c[m]+" "+i[l]}}},pr=function(e){if(e.type==="decl"){var r=e.value;r.charCodeAt(0)===108&&r.charCodeAt(2)===98&&(e.return="",e.value="")}};function pe(t,e){switch(qe(t,e)){case 5103:return h+"print-"+t+t;case 5737:case 4201:case 3177:case 3433:case 1641:case 4457:case 2921:case 5572:case 6356:case 5844:case 3191:case 6645:case 3005:case 6391:case 5879:case 5623:case 6135:case 4599:case 4855:case 4215:case 6389:case 5109:case 5365:case 5621:case 3829:return h+t+t;case 5349:case 4246:case 4810:case 6968:case 2756:return h+t+nt+t+R+t+t;case 6828:case 4268:return h+t+R+t+t;case 6165:return h+t+R+"flex-"+t+t;case 5187:return h+t+y(t,/(\w+).+(:[^]+)/,h+"box-$1$2"+R+"flex-$1$2")+t;case 5443:return h+t+R+"flex-item-"+y(t,/flex-|-self/,"")+t;case 4675:return h+t+R+"flex-line-pack"+y(t,/align-content|flex-|-self/,"")+t;case 5548:return h+t+R+y(t,"shrink","negative")+t;case 5292:return h+t+R+y(t,"basis","preferred-size")+t;case 6060:return h+"box-"+y(t,"-grow","")+h+t+R+y(t,"grow","positive")+t;case 4554:return h+y(t,/([^-])(transform)/g,"$1"+h+"$2")+t;case 6187:return y(y(y(t,/(zoom-|grab)/,h+"$1"),/(image-set)/,h+"$1"),t,"")+t;case 5495:case 3959:return y(t,/(image-set\([^]*)/,h+"$1$`$1");case 4968:return y(y(t,/(.+:)(flex-)?(.*)/,h+"box-pack:$3"+R+"flex-pack:$3"),/s.+-b[^;]+/,"justify")+h+t+t;case 4095:case 3583:case 4068:case 2532:return y(t,/(.+)-inline(.+)/,h+"$1$2")+t;case 8116:case 7059:case 5753:case 5535:case 5445:case 5701:case 4933:case 4677:case 5533:case 5789:case 5021:case 4765:if(_(t)-1-e>6)switch(M(t,e+1)){case 109:if(M(t,e+4)!==45)break;case 102:return y(t,/(.+:)(.+)-([^]+)/,"$1"+h+"$2-$3$1"+nt+(M(t,e+3)==108?"$3":"$2-$3"))+t;case 115:return~Mt(t,"stretch")?pe(y(t,"stretch","fill-available"),e)+t:t}break;case 4949:if(M(t,e+1)!==115)break;case 6444:switch(M(t,_(t)-3-(~Mt(t,"!important")&&10))){case 107:return y(t,":",":"+h)+t;case 101:return y(t,/(.+:)([^;!]+)(;|!.+)?/,"$1"+h+(M(t,14)===45?"inline-":"")+"box$3$1"+h+"$2$3$1"+R+"$2box$3")+t}break;case 5936:switch(M(t,e+11)){case 114:return h+t+R+y(t,/[svh]\w+-[tblr]{2}/,"tb")+t;case 108:return h+t+R+y(t,/[svh]\w+-[tblr]{2}/,"tb-rl")+t;case 45:return h+t+R+y(t,/[svh]\w+-[tblr]{2}/,"lr")+t}return h+t+R+t+t}return t}var hr=function(e,r,n,a){if(e.length>-1&&!e.return)switch(e.type){case Yt:e.return=pe(e.value,e.length);break;case fe:return W([U(e,{value:y(e.value,"@","@"+h)})],a);case Pt:if(e.length)return Ze(e.props,function(s){switch(Ke(s,/(::plac\w+|:read-\w+)/)){case":read-only":case":read-write":return W([U(e,{props:[y(s,/:(read-\w+)/,":"+nt+"$1")]})],a);case"::placeholder":return W([U(e,{props:[y(s,/:(plac\w+)/,":"+h+"input-$1")]}),U(e,{props:[y(s,/:(plac\w+)/,":"+nt+"$1")]}),U(e,{props:[y(s,/:(plac\w+)/,R+"input-$1")]})],a)}return""})}},yr=[hr],gr=function(e){var r=e.key;if(r==="css"){var n=document.querySelectorAll("style[data-emotion]:not([data-s])");Array.prototype.forEach.call(n,function(d){var O=d.getAttribute("data-emotion");O.indexOf(" ")!==-1&&(document.head.appendChild(d),d.setAttribute("data-s",""))})}var a=e.stylisPlugins||yr,s={},i,c=[];i=e.container||document.head,Array.prototype.forEach.call(document.querySelectorAll('style[data-emotion^="'+r+' "]'),function(d){for(var O=d.getAttribute("data-emotion").split(" "),v=1;v<O.length;v++)s[O[v]]=!0;c.push(d)});var l,u=[mr,pr];{var m,p=[or,cr(function(d){m.insert(d)})],C=ir(u.concat(a,p)),I=function(O){return W(ar(O),C)};l=function(O,v,g,k){m=g,I(O?O+"{"+v.styles+"}":v.styles),k&&($.inserted[v.name]=!0)}}var $={key:r,sheet:new We({key:r,container:i,nonce:e.nonce,speedy:e.speedy,prepend:e.prepend,insertionPoint:e.insertionPoint}),nonce:e.nonce,inserted:s,registered:{},insert:l};return $.sheet.hydrate(c),$},he={exports:{}},b={};/** @license React v16.13.1
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var N=typeof Symbol=="function"&&Symbol.for,Xt=N?Symbol.for("react.element"):60103,_t=N?Symbol.for("react.portal"):60106,ft=N?Symbol.for("react.fragment"):60107,lt=N?Symbol.for("react.strict_mode"):60108,dt=N?Symbol.for("react.profiler"):60114,ut=N?Symbol.for("react.provider"):60109,mt=N?Symbol.for("react.context"):60110,Ft=N?Symbol.for("react.async_mode"):60111,pt=N?Symbol.for("react.concurrent_mode"):60111,ht=N?Symbol.for("react.forward_ref"):60112,yt=N?Symbol.for("react.suspense"):60113,br=N?Symbol.for("react.suspense_list"):60120,gt=N?Symbol.for("react.memo"):60115,bt=N?Symbol.for("react.lazy"):60116,xr=N?Symbol.for("react.block"):60121,vr=N?Symbol.for("react.fundamental"):60117,wr=N?Symbol.for("react.responder"):60118,Sr=N?Symbol.for("react.scope"):60119;function z(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Xt:switch(t=t.type,t){case Ft:case pt:case ft:case dt:case lt:case yt:return t;default:switch(t=t&&t.$$typeof,t){case mt:case ht:case bt:case gt:case ut:return t;default:return e}}case _t:return e}}}function ye(t){return z(t)===pt}b.AsyncMode=Ft;b.ConcurrentMode=pt;b.ContextConsumer=mt;b.ContextProvider=ut;b.Element=Xt;b.ForwardRef=ht;b.Fragment=ft;b.Lazy=bt;b.Memo=gt;b.Portal=_t;b.Profiler=dt;b.StrictMode=lt;b.Suspense=yt;b.isAsyncMode=function(t){return ye(t)||z(t)===Ft};b.isConcurrentMode=ye;b.isContextConsumer=function(t){return z(t)===mt};b.isContextProvider=function(t){return z(t)===ut};b.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Xt};b.isForwardRef=function(t){return z(t)===ht};b.isFragment=function(t){return z(t)===ft};b.isLazy=function(t){return z(t)===bt};b.isMemo=function(t){return z(t)===gt};b.isPortal=function(t){return z(t)===_t};b.isProfiler=function(t){return z(t)===dt};b.isStrictMode=function(t){return z(t)===lt};b.isSuspense=function(t){return z(t)===yt};b.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===ft||t===pt||t===dt||t===lt||t===yt||t===br||typeof t=="object"&&t!==null&&(t.$$typeof===bt||t.$$typeof===gt||t.$$typeof===ut||t.$$typeof===mt||t.$$typeof===ht||t.$$typeof===vr||t.$$typeof===wr||t.$$typeof===Sr||t.$$typeof===xr)};b.typeOf=z;he.exports=b;var $r=he.exports,ge=$r,Cr={$$typeof:!0,render:!0,defaultProps:!0,displayName:!0,propTypes:!0},kr={$$typeof:!0,compare:!0,defaultProps:!0,displayName:!0,propTypes:!0,type:!0},be={};be[ge.ForwardRef]=Cr;be[ge.Memo]=kr;var Or=!0;function xe(t,e,r){var n="";return r.split(" ").forEach(function(a){t[a]!==void 0?e.push(t[a]+";"):n+=a+" "}),n}var Vt=function(e,r,n){var a=e.key+"-"+r.name;(n===!1||Or===!1)&&e.registered[a]===void 0&&(e.registered[a]=r.styles)},ve=function(e,r,n){Vt(e,r,n);var a=e.key+"-"+r.name;if(e.inserted[r.name]===void 0){var s=r;do e.insert(r===s?"."+a:"",s,e.sheet,!0),s=s.next;while(s!==void 0)}};function jr(t){for(var e=0,r,n=0,a=t.length;a>=4;++n,a-=4)r=t.charCodeAt(n)&255|(t.charCodeAt(++n)&255)<<8|(t.charCodeAt(++n)&255)<<16|(t.charCodeAt(++n)&255)<<24,r=(r&65535)*1540483477+((r>>>16)*59797<<16),r^=r>>>24,e=(r&65535)*1540483477+((r>>>16)*59797<<16)^(e&65535)*1540483477+((e>>>16)*59797<<16);switch(a){case 3:e^=(t.charCodeAt(n+2)&255)<<16;case 2:e^=(t.charCodeAt(n+1)&255)<<8;case 1:e^=t.charCodeAt(n)&255,e=(e&65535)*1540483477+((e>>>16)*59797<<16)}return e^=e>>>13,e=(e&65535)*1540483477+((e>>>16)*59797<<16),((e^e>>>15)>>>0).toString(36)}var Er={animationIterationCount:1,aspectRatio:1,borderImageOutset:1,borderImageSlice:1,borderImageWidth:1,boxFlex:1,boxFlexGroup:1,boxOrdinalGroup:1,columnCount:1,columns:1,flex:1,flexGrow:1,flexPositive:1,flexShrink:1,flexNegative:1,flexOrder:1,gridRow:1,gridRowEnd:1,gridRowSpan:1,gridRowStart:1,gridColumn:1,gridColumnEnd:1,gridColumnSpan:1,gridColumnStart:1,msGridRow:1,msGridRowSpan:1,msGridColumn:1,msGridColumnSpan:1,fontWeight:1,lineHeight:1,opacity:1,order:1,orphans:1,tabSize:1,widows:1,zIndex:1,zoom:1,WebkitLineClamp:1,fillOpacity:1,floodOpacity:1,stopOpacity:1,strokeDasharray:1,strokeDashoffset:1,strokeMiterlimit:1,strokeOpacity:1,strokeWidth:1},Nr=/[A-Z]|^ms/g,Ir=/_EMO_([^_]+?)_([^]*?)_EMO_/g,we=function(e){return e.charCodeAt(1)===45},te=function(e){return e!=null&&typeof e!="boolean"},Nt=fr(function(t){return we(t)?t:t.replace(Nr,"-$&").toLowerCase()}),ee=function(e,r){switch(e){case"animation":case"animationName":if(typeof r=="string")return r.replace(Ir,function(n,a,s){return F={name:a,styles:s,next:F},a})}return Er[e]!==1&&!we(e)&&typeof r=="number"&&r!==0?r+"px":r};function K(t,e,r){if(r==null)return"";if(r.__emotion_styles!==void 0)return r;switch(typeof r){case"boolean":return"";case"object":{if(r.anim===1)return F={name:r.name,styles:r.styles,next:F},r.name;if(r.styles!==void 0){var n=r.next;if(n!==void 0)for(;n!==void 0;)F={name:n.name,styles:n.styles,next:F},n=n.next;var a=r.styles+";";return a}return Mr(t,e,r)}case"function":{if(t!==void 0){var s=F,i=r(t);return F=s,K(t,e,i)}break}}if(e==null)return r;var c=e[r];return c!==void 0?c:r}function Mr(t,e,r){var n="";if(Array.isArray(r))for(var a=0;a<r.length;a++)n+=K(t,e,r[a])+";";else for(var s in r){var i=r[s];if(typeof i!="object")e!=null&&e[i]!==void 0?n+=s+"{"+e[i]+"}":te(i)&&(n+=Nt(s)+":"+ee(s,i)+";");else if(Array.isArray(i)&&typeof i[0]=="string"&&(e==null||e[i[0]]===void 0))for(var c=0;c<i.length;c++)te(i[c])&&(n+=Nt(s)+":"+ee(s,i[c])+";");else{var l=K(t,e,i);switch(s){case"animation":case"animationName":{n+=Nt(s)+":"+l+";";break}default:n+=s+"{"+l+"}"}}}return n}var re=/label:\s*([^\s;\n{]+)\s*(;|$)/g,F,Bt=function(e,r,n){if(e.length===1&&typeof e[0]=="object"&&e[0]!==null&&e[0].styles!==void 0)return e[0];var a=!0,s="";F=void 0;var i=e[0];i==null||i.raw===void 0?(a=!1,s+=K(n,r,i)):s+=i[0];for(var c=1;c<e.length;c++)s+=K(n,r,e[c]),a&&(s+=i[c]);re.lastIndex=0;for(var l="",u;(u=re.exec(s))!==null;)l+="-"+u[1];var m=jr(s)+l;return{name:m,styles:s,next:F}},Rr=function(e){return e()},Tr=qt["useInsertionEffect"]?qt["useInsertionEffect"]:!1,Se=Tr||Rr,Wt={}.hasOwnProperty,$e=S.createContext(typeof HTMLElement<"u"?gr({key:"css"}):null);$e.Provider;var Ce=function(e){return S.forwardRef(function(r,n){var a=S.useContext($e);return e(r,a,n)})},ke=S.createContext({}),Tt="__EMOTION_TYPE_PLEASE_DO_NOT_USE__",Ar=function(e,r){var n={};for(var a in r)Wt.call(r,a)&&(n[a]=r[a]);return n[Tt]=e,n},zr=function(e){var r=e.cache,n=e.serialized,a=e.isStringTag;return Vt(r,n,a),Se(function(){return ve(r,n,a)}),null},Pr=Ce(function(t,e,r){var n=t.css;typeof n=="string"&&e.registered[n]!==void 0&&(n=e.registered[n]);var a=t[Tt],s=[n],i="";typeof t.className=="string"?i=xe(e.registered,s,t.className):t.className!=null&&(i=t.className+" ");var c=Bt(s,void 0,S.useContext(ke));i+=e.key+"-"+c.name;var l={};for(var u in t)Wt.call(t,u)&&u!=="css"&&u!==Tt&&(l[u]=t[u]);return l.ref=r,l.className=i,S.createElement(S.Fragment,null,S.createElement(zr,{cache:e,serialized:c,isStringTag:typeof a=="string"}),S.createElement(a,l))}),Yr=Pr;function Oe(){for(var t=arguments.length,e=new Array(t),r=0;r<t;r++)e[r]=arguments[r];return Bt(e)}var o=function(){var e=Oe.apply(void 0,arguments),r="animation-"+e.name;return{name:r,styles:"@keyframes "+r+"{"+e.styles+"}",anim:1,toString:function(){return"_EMO_"+this.name+"_"+this.styles+"_EMO_"}}},Lr=function t(e){for(var r=e.length,n=0,a="";n<r;n++){var s=e[n];if(s!=null){var i=void 0;switch(typeof s){case"boolean":break;case"object":{if(Array.isArray(s))i=t(s);else{i="";for(var c in s)s[c]&&c&&(i&&(i+=" "),i+=c)}break}default:i=s}i&&(a&&(a+=" "),a+=i)}}return a};function Xr(t,e,r){var n=[],a=xe(t,n,r);return n.length<2?r:a+e(n)}var _r=function(e){var r=e.cache,n=e.serializedArr;return Se(function(){for(var a=0;a<n.length;a++)ve(r,n[a],!1)}),null},It=Ce(function(t,e){var r=!1,n=[],a=function(){for(var u=arguments.length,m=new Array(u),p=0;p<u;p++)m[p]=arguments[p];var C=Bt(m,e.registered);return n.push(C),Vt(e,C,!1),e.key+"-"+C.name},s=function(){for(var u=arguments.length,m=new Array(u),p=0;p<u;p++)m[p]=arguments[p];return Xr(e.registered,a,Lr(m))},i={css:a,cx:s,theme:S.useContext(ke)},c=t.children(i);return r=!0,S.createElement(S.Fragment,null,S.createElement(_r,{cache:e,serializedArr:n}),c)});function At(){return At=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var r=arguments[e];for(var n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n])}return t},At.apply(this,arguments)}function Fr(t,e){if(t==null)return{};var r={},n=Object.keys(t),a,s;for(s=0;s<n.length;s++)a=n[s],!(e.indexOf(a)>=0)&&(r[a]=t[a]);return r}const zt=new Map,Q=new WeakMap;let ne=0,Vr;function Br(t){return t?(Q.has(t)||(ne+=1,Q.set(t,ne.toString())),Q.get(t)):"0"}function Wr(t){return Object.keys(t).sort().filter(e=>t[e]!==void 0).map(e=>`${e}_${e==="root"?Br(t.root):t[e]}`).toString()}function Dr(t){let e=Wr(t),r=zt.get(e);if(!r){const n=new Map;let a;const s=new IntersectionObserver(i=>{i.forEach(c=>{var l;const u=c.isIntersecting&&a.some(m=>c.intersectionRatio>=m);t.trackVisibility&&typeof c.isVisible>"u"&&(c.isVisible=u),(l=n.get(c.target))==null||l.forEach(m=>{m(u,c)})})},t);a=s.thresholds||(Array.isArray(t.threshold)?t.threshold:[t.threshold||0]),r={id:e,observer:s,elements:n},zt.set(e,r)}return r}function je(t,e,r={},n=Vr){if(typeof window.IntersectionObserver>"u"&&n!==void 0){const l=t.getBoundingClientRect();return e(n,{isIntersecting:n,target:t,intersectionRatio:typeof r.threshold=="number"?r.threshold:0,time:0,boundingClientRect:l,intersectionRect:l,rootBounds:l}),()=>{}}const{id:a,observer:s,elements:i}=Dr(r);let c=i.get(t)||[];return i.has(t)||i.set(t,c),c.push(e),s.observe(t),function(){c.splice(c.indexOf(e),1),c.length===0&&(i.delete(t),s.unobserve(t)),i.size===0&&(s.disconnect(),zt.delete(a))}}const Gr=["children","as","triggerOnce","threshold","root","rootMargin","onChange","skip","trackVisibility","delay","initialInView","fallbackInView"];function ae(t){return typeof t.children!="function"}class se extends S.Component{constructor(e){super(e),this.node=null,this._unobserveCb=null,this.handleNode=r=>{this.node&&(this.unobserve(),!r&&!this.props.triggerOnce&&!this.props.skip&&this.setState({inView:!!this.props.initialInView,entry:void 0})),this.node=r||null,this.observeNode()},this.handleChange=(r,n)=>{r&&this.props.triggerOnce&&this.unobserve(),ae(this.props)||this.setState({inView:r,entry:n}),this.props.onChange&&this.props.onChange(r,n)},this.state={inView:!!e.initialInView,entry:void 0}}componentDidUpdate(e){(e.rootMargin!==this.props.rootMargin||e.root!==this.props.root||e.threshold!==this.props.threshold||e.skip!==this.props.skip||e.trackVisibility!==this.props.trackVisibility||e.delay!==this.props.delay)&&(this.unobserve(),this.observeNode())}componentWillUnmount(){this.unobserve(),this.node=null}observeNode(){if(!this.node||this.props.skip)return;const{threshold:e,root:r,rootMargin:n,trackVisibility:a,delay:s,fallbackInView:i}=this.props;this._unobserveCb=je(this.node,this.handleChange,{threshold:e,root:r,rootMargin:n,trackVisibility:a,delay:s},i)}unobserve(){this._unobserveCb&&(this._unobserveCb(),this._unobserveCb=null)}render(){if(!ae(this.props)){const{inView:s,entry:i}=this.state;return this.props.children({inView:s,entry:i,ref:this.handleNode})}const e=this.props,{children:r,as:n}=e,a=Fr(e,Gr);return S.createElement(n||"div",At({ref:this.handleNode},a),r)}}function Ee({threshold:t,delay:e,trackVisibility:r,rootMargin:n,root:a,triggerOnce:s,skip:i,initialInView:c,fallbackInView:l,onChange:u}={}){var m;const[p,C]=S.useState(null),I=S.useRef(),[$,d]=S.useState({inView:!!c,entry:void 0});I.current=u,S.useEffect(()=>{if(i||!p)return;let k;return k=je(p,(Y,L)=>{d({inView:Y,entry:L}),I.current&&I.current(Y,L),L.isIntersecting&&s&&k&&(k(),k=void 0)},{root:a,rootMargin:n,threshold:t,trackVisibility:r,delay:e},l),()=>{k&&k()}},[Array.isArray(t)?t.toString():t,p,a,n,s,i,r,l,e]);const O=(m=$.entry)==null?void 0:m.target,v=S.useRef();!p&&O&&!s&&!i&&v.current!==O&&(v.current=O,d({inView:!!c,entry:void 0}));const g=[C,$.inView,$.entry];return g.ref=g[0],g.inView=g[1],g.entry=g[2],g}var Ne={exports:{}},x={};/**
 * @license React
 * react-is.production.min.js
 *
 * Copyright (c) Facebook, Inc. and its affiliates.
 *
 * This source code is licensed under the MIT license found in the
 * LICENSE file in the root directory of this source tree.
 */var Dt=Symbol.for("react.element"),Gt=Symbol.for("react.portal"),xt=Symbol.for("react.fragment"),vt=Symbol.for("react.strict_mode"),wt=Symbol.for("react.profiler"),St=Symbol.for("react.provider"),$t=Symbol.for("react.context"),Ur=Symbol.for("react.server_context"),Ct=Symbol.for("react.forward_ref"),kt=Symbol.for("react.suspense"),Ot=Symbol.for("react.suspense_list"),jt=Symbol.for("react.memo"),Et=Symbol.for("react.lazy"),Hr=Symbol.for("react.offscreen"),Ie;Ie=Symbol.for("react.module.reference");function P(t){if(typeof t=="object"&&t!==null){var e=t.$$typeof;switch(e){case Dt:switch(t=t.type,t){case xt:case wt:case vt:case kt:case Ot:return t;default:switch(t=t&&t.$$typeof,t){case Ur:case $t:case Ct:case Et:case jt:case St:return t;default:return e}}case Gt:return e}}}x.ContextConsumer=$t;x.ContextProvider=St;x.Element=Dt;x.ForwardRef=Ct;x.Fragment=xt;x.Lazy=Et;x.Memo=jt;x.Portal=Gt;x.Profiler=wt;x.StrictMode=vt;x.Suspense=kt;x.SuspenseList=Ot;x.isAsyncMode=function(){return!1};x.isConcurrentMode=function(){return!1};x.isContextConsumer=function(t){return P(t)===$t};x.isContextProvider=function(t){return P(t)===St};x.isElement=function(t){return typeof t=="object"&&t!==null&&t.$$typeof===Dt};x.isForwardRef=function(t){return P(t)===Ct};x.isFragment=function(t){return P(t)===xt};x.isLazy=function(t){return P(t)===Et};x.isMemo=function(t){return P(t)===jt};x.isPortal=function(t){return P(t)===Gt};x.isProfiler=function(t){return P(t)===wt};x.isStrictMode=function(t){return P(t)===vt};x.isSuspense=function(t){return P(t)===kt};x.isSuspenseList=function(t){return P(t)===Ot};x.isValidElementType=function(t){return typeof t=="string"||typeof t=="function"||t===xt||t===wt||t===vt||t===kt||t===Ot||t===Hr||typeof t=="object"&&t!==null&&(t.$$typeof===Et||t.$$typeof===jt||t.$$typeof===St||t.$$typeof===$t||t.$$typeof===Ct||t.$$typeof===Ie||t.getModuleId!==void 0)};x.typeOf=P;Ne.exports=x;var qr=Ne.exports,Kr=f.Fragment;function E(t,e,r){return Wt.call(e,"css")?f.jsx(Yr,Ar(t,e),r):f.jsx(t,e,r)}o`
  from,
  20%,
  53%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0);
  }

  40%,
  43% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -30px, 0) scaleY(1.1);
  }

  70% {
    animation-timing-function: cubic-bezier(0.755, 0.05, 0.855, 0.06);
    transform: translate3d(0, -15px, 0) scaleY(1.05);
  }

  80% {
    transition-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
    transform: translate3d(0, 0, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -4px, 0) scaleY(1.02);
  }
`;o`
  from,
  50%,
  to {
    opacity: 1;
  }

  25%,
  75% {
    opacity: 0;
  }
`;o`
  0% {
    transform: translateX(0);
  }

  6.5% {
    transform: translateX(-6px) rotateY(-9deg);
  }

  18.5% {
    transform: translateX(5px) rotateY(7deg);
  }

  31.5% {
    transform: translateX(-3px) rotateY(-5deg);
  }

  43.5% {
    transform: translateX(2px) rotateY(3deg);
  }

  50% {
    transform: translateX(0);
  }
`;o`
  0% {
    transform: scale(1);
  }

  14% {
    transform: scale(1.3);
  }

  28% {
    transform: scale(1);
  }

  42% {
    transform: scale(1.3);
  }

  70% {
    transform: scale(1);
  }
`;o`
  from,
  11.1%,
  to {
    transform: translate3d(0, 0, 0);
  }

  22.2% {
    transform: skewX(-12.5deg) skewY(-12.5deg);
  }

  33.3% {
    transform: skewX(6.25deg) skewY(6.25deg);
  }

  44.4% {
    transform: skewX(-3.125deg) skewY(-3.125deg);
  }

  55.5% {
    transform: skewX(1.5625deg) skewY(1.5625deg);
  }

  66.6% {
    transform: skewX(-0.78125deg) skewY(-0.78125deg);
  }

  77.7% {
    transform: skewX(0.390625deg) skewY(0.390625deg);
  }

  88.8% {
    transform: skewX(-0.1953125deg) skewY(-0.1953125deg);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  50% {
    transform: scale3d(1.05, 1.05, 1.05);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  30% {
    transform: scale3d(1.25, 0.75, 1);
  }

  40% {
    transform: scale3d(0.75, 1.25, 1);
  }

  50% {
    transform: scale3d(1.15, 0.85, 1);
  }

  65% {
    transform: scale3d(0.95, 1.05, 1);
  }

  75% {
    transform: scale3d(1.05, 0.95, 1);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(-10px, 0, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(10px, 0, 0);
  }
`;o`
  from,
  to {
    transform: translate3d(0, 0, 0);
  }

  10%,
  30%,
  50%,
  70%,
  90% {
    transform: translate3d(0, -10px, 0);
  }

  20%,
  40%,
  60%,
  80% {
    transform: translate3d(0, 10px, 0);
  }
`;o`
  20% {
    transform: rotate3d(0, 0, 1, 15deg);
  }

  40% {
    transform: rotate3d(0, 0, 1, -10deg);
  }

  60% {
    transform: rotate3d(0, 0, 1, 5deg);
  }

  80% {
    transform: rotate3d(0, 0, 1, -5deg);
  }

  to {
    transform: rotate3d(0, 0, 1, 0deg);
  }
`;o`
  from {
    transform: scale3d(1, 1, 1);
  }

  10%,
  20% {
    transform: scale3d(0.9, 0.9, 0.9) rotate3d(0, 0, 1, -3deg);
  }

  30%,
  50%,
  70%,
  90% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, 3deg);
  }

  40%,
  60%,
  80% {
    transform: scale3d(1.1, 1.1, 1.1) rotate3d(0, 0, 1, -3deg);
  }

  to {
    transform: scale3d(1, 1, 1);
  }
`;o`
  from {
    transform: translate3d(0, 0, 0);
  }

  15% {
    transform: translate3d(-25%, 0, 0) rotate3d(0, 0, 1, -5deg);
  }

  30% {
    transform: translate3d(20%, 0, 0) rotate3d(0, 0, 1, 3deg);
  }

  45% {
    transform: translate3d(-15%, 0, 0) rotate3d(0, 0, 1, -3deg);
  }

  60% {
    transform: translate3d(10%, 0, 0) rotate3d(0, 0, 1, 2deg);
  }

  75% {
    transform: translate3d(-5%, 0, 0) rotate3d(0, 0, 1, -1deg);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;var Zr=o`
  from {
    opacity: 0;
  }

  to {
    opacity: 1;
  }
`,Jr=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Qr=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,tn=o`
  from {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,en=o`
  from {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,Ut=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,rn=o`
  from {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,nn=o`
  from {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,an=o`
  from {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,sn=o`
  from {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,on=o`
  from {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,cn=o`
  from {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`,fn=o`
  from {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;function ln({duration:t=1e3,delay:e=0,timingFunction:r="ease",keyframes:n=Ut,iterationCount:a=1}){return Oe`
    animation-duration: ${t}ms;
    animation-timing-function: ${r};
    animation-delay: ${e}ms;
    animation-name: ${n};
    animation-direction: normal;
    animation-fill-mode: both;
    animation-iteration-count: ${a};

    @media (prefers-reduced-motion: reduce) {
      animation: none;
    }
  `}function dn(t){return t==null}function un(t){return typeof t=="string"||typeof t=="number"||typeof t=="boolean"}function Me(t,e){return r=>r?t():e()}function at(t){return Me(t,()=>null)}var Ht=t=>{const{cascade:e=!1,damping:r=.5,delay:n=0,duration:a=1e3,fraction:s=0,keyframes:i=Ut,triggerOnce:c=!1,className:l,style:u,childClassName:m,childStyle:p,children:C,onVisibilityChange:I}=t,$=S.useMemo(()=>ln({keyframes:i,duration:a}),[a,i]);return dn(C)?null:un(C)?E(pn,{...t,animationStyles:$,children:String(C)}):qr.isFragment(C)?E(Re,{...t,animationStyles:$}):E(Kr,{children:S.Children.map(C,(d,O)=>{if(!S.isValidElement(d))return null;const v=n+(e?O*a*r:0);switch(d.type){case"ol":case"ul":return E(It,{children:({cx:g})=>E(d.type,{...d.props,className:g(l,d.props.className),style:Object.assign({},u,d.props.style),children:E(Ht,{...t,children:d.props.children})})});case"li":return E(se,{threshold:s,triggerOnce:c,onChange:I,children:({inView:g,ref:k})=>E(It,{children:({cx:Y})=>E(d.type,{...d.props,ref:k,className:Y(m,d.props.className),css:at(()=>$)(g),style:Object.assign({},p,d.props.style,{animationDelay:v+"ms"})})})});default:return E(se,{threshold:s,triggerOnce:c,onChange:I,children:({inView:g,ref:k})=>E("div",{ref:k,className:l,css:at(()=>$)(g),style:Object.assign({},u,{animationDelay:v+"ms"}),children:E(It,{children:({cx:Y})=>E(d.type,{...d.props,className:Y(m,d.props.className),style:Object.assign({},p,d.props.style)})})})})}})})},mn={display:"inline-block",whiteSpace:"pre"},pn=t=>{const{animationStyles:e,cascade:r=!1,damping:n=.5,delay:a=0,duration:s=1e3,fraction:i=0,triggerOnce:c=!1,className:l,style:u,children:m,onVisibilityChange:p}=t,{ref:C,inView:I}=Ee({triggerOnce:c,threshold:i,onChange:p});return Me(()=>E("div",{ref:C,className:l,style:Object.assign({},u,mn),children:m.split("").map(($,d)=>E("span",{css:at(()=>e)(I),style:{animationDelay:a+d*s*n+"ms"},children:$},d))}),()=>E(Re,{...t,children:m}))(r)},Re=t=>{const{animationStyles:e,fraction:r=0,triggerOnce:n=!1,className:a,style:s,children:i,onVisibilityChange:c}=t,{ref:l,inView:u}=Ee({triggerOnce:n,threshold:r,onChange:c});return E("div",{ref:l,className:a,css:at(()=>e)(u),style:s,children:i})};o`
  from,
  20%,
  40%,
  60%,
  80%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  20% {
    transform: scale3d(1.1, 1.1, 1.1);
  }

  40% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  60% {
    opacity: 1;
    transform: scale3d(1.03, 1.03, 1.03);
  }

  80% {
    transform: scale3d(0.97, 0.97, 0.97);
  }

  to {
    opacity: 1;
    transform: scale3d(1, 1, 1);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(0, -3000px, 0) scaleY(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, 25px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, -10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, 5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  0% {
    opacity: 0;
    transform: translate3d(-3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(-10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(3000px, 0, 0) scaleX(3);
  }

  60% {
    opacity: 1;
    transform: translate3d(-25px, 0, 0) scaleX(1);
  }

  75% {
    transform: translate3d(10px, 0, 0) scaleX(0.98);
  }

  90% {
    transform: translate3d(-5px, 0, 0) scaleX(0.995);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  from,
  60%,
  75%,
  90%,
  to {
    animation-timing-function: cubic-bezier(0.215, 0.61, 0.355, 1);
  }

  from {
    opacity: 0;
    transform: translate3d(0, 3000px, 0) scaleY(5);
  }

  60% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  75% {
    transform: translate3d(0, 10px, 0) scaleY(0.95);
  }

  90% {
    transform: translate3d(0, -5px, 0) scaleY(0.985);
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`;o`
  20% {
    transform: scale3d(0.9, 0.9, 0.9);
  }

  50%,
  55% {
    opacity: 1;
    transform: scale3d(1.1, 1.1, 1.1);
  }

  to {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }
`;o`
  20% {
    transform: translate3d(0, 10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, -20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0) scaleY(3);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    opacity: 1;
    transform: translate3d(-20px, 0, 0) scaleX(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0) scaleX(2);
  }
`;o`
  20% {
    transform: translate3d(0, -10px, 0) scaleY(0.985);
  }

  40%,
  45% {
    opacity: 1;
    transform: translate3d(0, 20px, 0) scaleY(0.9);
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0) scaleY(3);
  }
`;var hn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
  }
`,yn=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 100%, 0);
  }
`,gn=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 100%, 0);
  }
`,bn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 100%, 0);
  }
`,xn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, 2000px, 0);
  }
`,vn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, 0, 0);
  }
`,wn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(-2000px, 0, 0);
  }
`,Sn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0);
  }
`,$n=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(2000px, 0, 0);
  }
`,Cn=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(-100%, -100%, 0);
  }
`,kn=o`
  from {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }

  to {
    opacity: 0;
    transform: translate3d(100%, -100%, 0);
  }
`,On=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -100%, 0);
  }
`,jn=o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(0, -2000px, 0);
  }
`;function En(t,e,r){switch(r){case"bottom-left":return e?yn:Jr;case"bottom-right":return e?gn:Qr;case"down":return t?e?xn:en:e?bn:tn;case"left":return t?e?wn:rn:e?vn:Ut;case"right":return t?e?$n:an:e?Sn:nn;case"top-left":return e?Cn:sn;case"top-right":return e?kn:on;case"up":return t?e?jn:fn:e?On:cn;default:return e?hn:Zr}}var B=t=>{const{big:e=!1,direction:r,reverse:n=!1,...a}=t,s=S.useMemo(()=>En(e,n,r),[e,r,n]);return E(Ht,{keyframes:s,...a})};o`
  from {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, -360deg);
    animation-timing-function: ease-out;
  }

  40% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -190deg);
    animation-timing-function: ease-out;
  }

  50% {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 150px)
      rotate3d(0, 1, 0, -170deg);
    animation-timing-function: ease-in;
  }

  80% {
    transform: perspective(400px) scale3d(0.95, 0.95, 0.95) translate3d(0, 0, 0)
      rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }

  to {
    transform: perspective(400px) scale3d(1, 1, 1) translate3d(0, 0, 0) rotate3d(0, 1, 0, 0deg);
    animation-timing-function: ease-in;
  }
`;o`
  from {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(1, 0, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(1, 0, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;o`
  from {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    animation-timing-function: ease-in;
    opacity: 0;
  }

  40% {
    transform: perspective(400px) rotate3d(0, 1, 0, -20deg);
    animation-timing-function: ease-in;
  }

  60% {
    transform: perspective(400px) rotate3d(0, 1, 0, 10deg);
    opacity: 1;
  }

  80% {
    transform: perspective(400px) rotate3d(0, 1, 0, -5deg);
  }

  to {
    transform: perspective(400px);
  }
`;o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(1, 0, 0, -20deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(1, 0, 0, 90deg);
    opacity: 0;
  }
`;o`
  from {
    transform: perspective(400px);
  }

  30% {
    transform: perspective(400px) rotate3d(0, 1, 0, -15deg);
    opacity: 1;
  }

  to {
    transform: perspective(400px) rotate3d(0, 1, 0, 90deg);
    opacity: 0;
  }
`;o`
  0% {
    animation-timing-function: ease-in-out;
  }

  20%,
  60% {
    transform: rotate3d(0, 0, 1, 80deg);
    animation-timing-function: ease-in-out;
  }

  40%,
  80% {
    transform: rotate3d(0, 0, 1, 60deg);
    animation-timing-function: ease-in-out;
    opacity: 1;
  }

  to {
    transform: translate3d(0, 700px, 0);
    opacity: 0;
  }
`;o`
  from {
    opacity: 0;
    transform: scale(0.1) rotate(30deg);
    transform-origin: center bottom;
  }

  50% {
    transform: rotate(-10deg);
  }

  70% {
    transform: rotate(3deg);
  }

  to {
    opacity: 1;
    transform: scale(1);
  }
`;o`
  from {
    opacity: 0;
    transform: translate3d(-100%, 0, 0) rotate3d(0, 0, 1, -120deg);
  }

  to {
    opacity: 1;
    transform: translate3d(0, 0, 0);
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    opacity: 0;
    transform: translate3d(100%, 0, 0) rotate3d(0, 0, 1, 120deg);
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -200deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    transform: rotate3d(0, 0, 1, -90deg);
    opacity: 0;
  }

  to {
    transform: translate3d(0, 0, 0);
    opacity: 1;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 200deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, -45deg);
    opacity: 0;
  }
`;o`
  from {
    opacity: 1;
  }

  to {
    transform: rotate3d(0, 0, 1, 90deg);
    opacity: 0;
  }
`;var Nn=o`
  from {
    transform: translate3d(0, -100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,In=o`
  from {
    transform: translate3d(-100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Mn=o`
  from {
    transform: translate3d(100%, 0, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Rn=o`
  from {
    transform: translate3d(0, 100%, 0);
    visibility: visible;
  }

  to {
    transform: translate3d(0, 0, 0);
  }
`,Tn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, 100%, 0);
  }
`,An=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(-100%, 0, 0);
  }
`,zn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(100%, 0, 0);
  }
`,Pn=o`
  from {
    transform: translate3d(0, 0, 0);
  }

  to {
    visibility: hidden;
    transform: translate3d(0, -100%, 0);
  }
`;function Yn(t,e){switch(e){case"down":return t?Tn:Nn;case"right":return t?zn:Mn;case"up":return t?Pn:Rn;case"left":default:return t?An:In}}var Ln=t=>{const{direction:e,reverse:r=!1,...n}=t,a=S.useMemo(()=>Yn(r,e),[e,r]);return E(Ht,{keyframes:a,...n})};o`
  from {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  50% {
    opacity: 1;
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(-1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(1000px, 0, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-10px, 0, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 1000px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  60% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  from {
    opacity: 1;
  }

  50% {
    opacity: 0;
    transform: scale3d(0.3, 0.3, 0.3);
  }

  to {
    opacity: 0;
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, -60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, 2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(-2000px, 0, 0);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(-42px, 0, 0);
  }

  to {
    opacity: 0;
    transform: scale(0.1) translate3d(2000px, 0, 0);
  }
`;o`
  40% {
    opacity: 1;
    transform: scale3d(0.475, 0.475, 0.475) translate3d(0, 60px, 0);
    animation-timing-function: cubic-bezier(0.55, 0.055, 0.675, 0.19);
  }

  to {
    opacity: 0;
    transform: scale3d(0.1, 0.1, 0.1) translate3d(0, -2000px, 0);
    animation-timing-function: cubic-bezier(0.175, 0.885, 0.32, 1);
  }
`;const Xn=()=>f.jsxs("div",{className:"flex justify-between items-center h-max tabletM:flex-col-reverse",children:[f.jsxs("div",{className:"w-1/2 tabletM:w-full tabletM:mt-16 mobileXL:mt-12 mobileL:mt-0",children:[f.jsx(B,{direction:"left",duration:3e3,triggerOnce:!0,children:f.jsxs(st,{variant:1,className:" text-7xl mb-6 tabletS:text-5xl mobileXL:text-3xl ",children:[f.jsx("span",{className:"text-pink-600 animate-pulse",children:" Unleash "})," ",f.jsx("span",{children:"the Power of Words"})]})}),f.jsx(B,{direction:"left",duration:3e3,triggerOnce:!0,children:f.jsx("p",{"data-testid":"hero-text",className:" text-lg mobileXL:text-base leading-relaxed ",children:"Share your creativity with the world on our inclusive platform. Post diverse content, connect with like-minded individuals, and inspire others with your unique perspective. Join chatter and unleash your creative potential today!"})}),f.jsx("div",{className:"mt-8",children:f.jsx(B,{direction:"left",duration:3e3,triggerOnce:!0,children:f.jsx(oe,{className:"bg-pink-600 w-[200px] text-white-50 rounded-[40px] p-2 font-semibold",children:"Write Now !! Its Free"})})})]}),f.jsx("div",{className:" relative w-1/2 tabletM:w-full h-[400px] ms-8 rounded-sm cursor-pointer  tabletM:ms-0 tabletXS:h-[250px] tabletM:mb-6",children:f.jsx(B,{direction:"down",duration:3e3,triggerOnce:!0,children:f.jsx("img",{src:"https://firebasestorage.googleapis.com/v0/b/chatter-be02c.appspot.com/o/chatterImages%2Fwrite.svg?alt=media&token=04bdbea6-2d6b-4302-b58d-96c97a444dd2",title:"hero",alt:"hero",className:"rounded-sm object-cover w-full h-full hover:transform hover:scale-90 transition duration-500 ease-in-out "})})})]}),_n=({title:t,description:e,icon:r})=>{const{theme:n}=ie();return f.jsx(Ln,{direction:"left",damping:.5,triggerOnce:!0,duration:2e3,children:f.jsxs(Fe,{className:`p-5 me-6 tabletXS:me-0 mb-6 w-[300px] h-[350px] tabletXS:w-[280px]
        hover:transform hover:scale-90
        cursor-pointer hover:border-b-8 rounded-md
         border-pink-600 transition duration-500 ease-in-out 
         ${n==="lightMode"?" text-black-950":n==="darkMode"&&"bg-white-200 text-black-950"}`,children:[f.jsx("div",{className:" text-center text-5xl text-pink-600 mb-4 font-bold",children:r}),f.jsx(st,{variant:3,className:"text-2xl mobileXL:text-xl  mb-6",children:t}),f.jsx("p",{className:"text-base",children:e})]})})};function Fn(t){return Te({tag:"svg",attr:{viewBox:"0 0 512 512"},child:[{tag:"path",attr:{d:"M254.125 26.188c-17.377-.003-31.66 14.28-31.656 31.656 0 7.617 2.733 14.64 7.28 20.125-10.79 3.876-19.043 10.963-26.906 22.06-13.057 18.43-23.687 49.03-35.406 92.782-10.257 38.29-24.345 57.012-34.657 70.563-10.31 13.55-16.252 20.325-16.25 42.688.002 3.5 1.975 7.314 8.44 12.03 6.463 4.717 16.877 9.383 29.905 13.188 26.055 7.612 62.442 11.962 100.25 11.97 19.384.004 38.368-1.15 55.78-3.28v.124c12.13-1.043 33.332-3.898 51.345-10.28 5.795-2.055 11.28-4.422 16.125-7.533 2.612-1.376 4.947-2.747 6.875-4.155 6.458-4.714 8.438-8.523 8.438-12.03-.004-22.363-5.935-29.135-16.25-42.69-10.316-13.553-24.42-32.27-34.688-70.56-11.732-43.757-22.343-74.35-35.406-92.782-8.225-11.607-16.895-18.836-28.438-22.594 4.31-5.41 6.908-12.24 6.906-19.626-.002-17.377-14.31-31.654-31.687-31.657zm0 18.687c7.278 0 13 5.694 13 12.97 0 7.272-5.722 12.97-13 12.968-7.278-.002-12.968-5.696-12.97-12.97 0-7.273 5.693-12.97 12.97-12.968zm9.22 43.22c34.616 10.188 49.56 64.686 58.124 101.56 14.99 64.56 45.652 82.98 53.03 111.25-.327.633-1.002 1.286-2.094 2.408-2.665 2.74-8.816 6.216-16.406 8.906-7.366 2.61-16 4.614-24.188 6.124-1.73-38.024-33.765-53.55-33.25-107.47.603-63.043-17.19-103.352-39.5-121.78 1.468-.233 2.886-.57 4.282-1zm-206.876 91.28C23.546 223.947 11.19 289.253 28.874 355.25c18.208 67.957 63.562 118.994 116.313 140.03-38.592-30.418-72.26-83.223-89.75-148.5-16.674-62.228-14.924-122.366 1.03-167.405zm399.436 0c15.955 45.04 17.705 105.177 1.03 167.406-17.49 65.277-51.157 118.082-89.748 148.5 52.75-21.036 98.135-72.073 116.343-140.03 17.686-65.997 5.298-131.303-27.624-175.875zM105.687 210.28c-29.71 34.43-42.433 83.74-29.343 132.595 13.478 50.306 50.845 87.082 95.5 101.156-32.19-21.55-59.46-60.02-72.406-108.342-12.344-46.066-8.896-91.175 6.25-125.407zm301.032 0c15.144 34.233 18.56 79.342 6.217 125.407-12.947 48.322-40.185 86.793-72.375 108.344 44.655-14.073 81.99-50.85 95.47-101.155 13.09-48.856.396-98.166-29.313-132.594zM146.53 348.25c1.218 12.736 11.944 22.686 25 22.688 9.422 0 17.642-5.173 21.94-12.844-15.986-2.11-30.823-5.08-43.814-8.875-1.06-.31-2.09-.65-3.125-.97z"}}]})(t)}const Vn=[{id:1,icon:f.jsx(Xe,{}),title:"Embrace Your Passion",description:"Are you fascinated by the latest gadgets, cutting-edge software, or emerging trends in the world of technology? If so, Chatter is the perfect place for you."},{id:2,icon:f.jsx(Fn,{}),title:"Be Heard",description:"Chatter is more than just a blog; it's a community.Share your unique perspective, insights, and experiences with a global audience of tech- savvy individuals."},{id:3,icon:f.jsx(Ae,{}),title:"Expand Your Knowledge",description:"Stay ahead of the curve and fuel your hunger for knowledge. Chatter offers a vast array of articles, guides, tutorials, and reviews to keep you up to date with the ever-evolving world of technology"},{id:4,icon:f.jsx(_e,{}),title:"Enhance Your Writing Skills",description:"Writing about technology not only helps you express your thoughts but also sharpens your communication skills."}],Bn=()=>f.jsxs("div",{className:"mt-20 mobileXL:mt-12 pb-8",children:[f.jsx(st,{variant:2,className:" text-4xl mobileXL:text-2xl font-bold mb-8 text-center",children:f.jsx(B,{direction:"up",triggerOnce:!0,duration:2e3,children:"Why Chatter?"})}),f.jsx("div",{className:" flex flex-wrap justify-center items-center",children:Vn.map(t=>{const{title:e,description:r,icon:n}=t;return f.jsx(_n,{title:e,description:r,icon:n},t.id)})})]}),Wn=()=>{const{user:t}=ze(),e=Pe(),r=()=>{e(t?"/write":"/onboard")};return f.jsxs("div",{className:" flex justify-between py-12 tabletM:flex-col",children:[f.jsx("div",{className:" relative w-1/2 tabletM:w-full h-[400px] ms-8 rounded-sm cursor-pointer  tabletM:ms-0 tabletXS:h-[250px] tabletM:mb-6",children:f.jsx("img",{src:"https://firebasestorage.googleapis.com/v0/b/chatter-be02c.appspot.com/o/chatterImages%2Fconnect.svg?alt=media&token=84ef304e-e8bb-481d-9da0-3f95081a3237",alt:"connect",title:"connect",className:"rounded-sm object-contain w-full h-full hover:transform hover:scale-90 transition duration-500 ease-in-out "})}),f.jsxs("div",{className:"w-1/2 tabletM:w-full ",children:[f.jsx(B,{duration:2e3,direction:"up",triggerOnce:!0,children:f.jsxs(st,{variant:2,className:"text-4xl tabletM:text-2xl mb-6 font-semibold leading-relaxed",children:["Write, read and ",f.jsx("span",{className:" text-pink-600 animate-pulse",children:" connect "})," ","with great minds on chatter"]})}),f.jsx(B,{duration:2e3,direction:"up",triggerOnce:!0,children:f.jsx("p",{className:"mb-4 text-lg",children:"Share people your great ideas, and also read write-ups based on your interests. with people of same interests and goals"})}),f.jsx("div",{children:f.jsx(B,{duration:2e3,direction:"up",triggerOnce:!0,children:f.jsx(oe,{onClick:r,title:"Get Started",className:"bg-pink-600 w-[200px] text-white-50 rounded-[40px] p-2 font-semibold",children:"Get Started"})})})]})]})};function Hn(){const{theme:t}=ie();return f.jsxs(f.Fragment,{children:[f.jsx(Ye,{title:"Chatter | Home",ogTitle:"Share your creativity with the world",description:"Share your creativity with the world on our inclusive platform. Post diverse content, connect with like-minded individuals",image:Kt,url:"/",twitterTitle:"Share your creativity with the world",twitterDescription:"Share your creativity with the world on our inclusive platform. Post diverse content, connect with like-minded individuals",twitterImage:Kt,twitterCard:"summary_large_image",ogType:"website",href:"/"}),f.jsxs(Le,{className:`transition duration-500 ease-in-out pt-44 tabletM:pt-24
        ${t==="lightMode"?" bg-white-50 text-black-950":t==="darkMode"&&"bg-gray-800 text-white-100"}
        `,children:[f.jsx(Xn,{}),f.jsx(Bn,{}),f.jsx(Wn,{})]})]})}export{Hn as default};
