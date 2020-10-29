var app=function(){"use strict";function e(){}function n(e){return e()}function l(){return Object.create(null)}function t(e){e.forEach(n)}function r(e){return"function"==typeof e}function a(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function s(e){return null==e?"":e}function i(e,n){e.appendChild(n)}function u(e,n,l){e.insertBefore(n,l||null)}function o(e){e.parentNode.removeChild(e)}function c(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function p(){return d(" ")}function _(e,n,l){null==l?e.removeAttribute(n):e.getAttribute(n)!==l&&e.setAttribute(n,l)}function h(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}class S{constructor(e=null){this.a=e,this.e=this.n=null}m(e,n,l=null){this.e||(this.e=c(n.nodeName),this.t=n,this.h(e)),this.i(l)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)u(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(o)}}let f;function m(e){f=e}const g=[],B=[],E=[],N=[],k=Promise.resolve();let b=!1;function L(e){E.push(e)}let v=!1;const G=new Set;function R(){if(!v){v=!0;do{for(let e=0;e<g.length;e+=1){const n=g[e];m(n),w(n.$$)}for(m(null),g.length=0;B.length;)B.pop()();for(let e=0;e<E.length;e+=1){const n=E[e];G.has(n)||(G.add(n),n())}E.length=0}while(g.length);for(;N.length;)N.pop()();b=!1,v=!1,G.clear()}}function w(e){if(null!==e.fragment){e.update(),t(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(L)}}const D=new Set;let A;function I(e,n){e&&e.i&&(D.delete(e),e.i(n))}function K(e,n,l,t){if(e&&e.o){if(D.has(e))return;D.add(e),A.c.push((()=>{D.delete(e),t&&(l&&e.d(1),t())})),e.o(n)}}function x(e,n){K(e,1,1,(()=>{n.delete(e.key)}))}function y(e){e&&e.c()}function z(e,l,a){const{fragment:s,on_mount:i,on_destroy:u,after_update:o}=e.$$;s&&s.m(l,a),L((()=>{const l=i.map(n).filter(r);u?u.push(...l):t(l),e.$$.on_mount=[]})),o.forEach(L)}function T(e,n){const l=e.$$;null!==l.fragment&&(t(l.on_destroy),l.fragment&&l.fragment.d(n),l.on_destroy=l.fragment=null,l.ctx=[])}function $(e,n){-1===e.$$.dirty[0]&&(g.push(e),b||(b=!0,k.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function F(n,r,a,s,i,u,c=[-1]){const d=f;m(n);const p=r.props||{},_=n.$$={fragment:null,ctx:null,props:u,update:e,not_equal:i,bound:l(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:l(),dirty:c,skip_bound:!1};let h=!1;if(_.ctx=a?a(n,p,((e,l,...t)=>{const r=t.length?t[0]:l;return _.ctx&&i(_.ctx[e],_.ctx[e]=r)&&(!_.skip_bound&&_.bound[e]&&_.bound[e](r),h&&$(n,e)),l})):[],_.update(),h=!0,t(_.before_update),_.fragment=!!s&&s(_.ctx),r.target){if(r.hydrate){const e=function(e){return Array.from(e.childNodes)}(r.target);_.fragment&&_.fragment.l(e),e.forEach(o)}else _.fragment&&_.fragment.c();r.intro&&I(n.$$.fragment),z(n,r.target,r.anchor),R()}m(d)}class Z{$destroy(){T(this,1),this.$destroy=e}$on(e,n){const l=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return l.push(n),()=>{const e=l.indexOf(n);-1!==e&&l.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var M="Berlin: aktuelle 7 Tage Corona Inzidenz",W="🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Berliner Bezirke!  ⚠️ Alle aktuelle Zahlen",C=["Inzidenz","Ampel","Corona","Berliner Bezirke","Warnung","Info"],U="Berlin",O={url:"https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?",params:"outFields=*&returnGeometry=false&f=json&outSR=4326&where=",locations:["Berlin Treptow-Köpenick","Berlin Mitte","Berlin Friedrichshain-Kreuzberg","Berlin Pankow","Berlin Lichtenberg","Berlin Marzahn-Hellersdorf","Berlin Charlottenburg-Wilmersdorf","Berlin Steglitz-Zehlendorf","Berlin Tempelhof-Schöneberg","Berlin Neukölln","Berlin Reinickendorf","Berlin Spandau"]};function V(n){let l,t,r,a,S,f,m,g,B,E,N,k,b,L,v,G,R,w,D,A,I,K,x=Number(n[0].cases7_per_100k).toFixed(2)+"",y=n[0].GEN.replace(U+"","")+"",z=n[1](n[0].EWZ)+"",T=n[1](n[0].cases)+"",$=n[1](n[0].deaths)+"";return{c(){l=c("div"),t=c("div"),r=c("div"),a=c("h3"),S=d(x),f=p(),m=c("div"),g=c("div"),B=d(y),N=p(),k=c("div"),b=c("div"),L=d("Einwohner: "),v=c("strong"),G=d(z),R=d(" | Fälle insgesamt: "),w=c("strong"),D=d(T),A=d(" | Tode: "),I=c("strong"),K=d($),_(a,"class","card__number svelte-zfjeps"),_(r,"class","card__column svelte-zfjeps"),_(g,"class","card__city svelte-zfjeps"),_(m,"class","card__column svelte-zfjeps"),_(t,"class",E=s("card__row card__row--full "+n[2])+" svelte-zfjeps"),_(b,"class","card__cases svelte-zfjeps"),_(k,"class","card__row svelte-zfjeps"),_(l,"class","card svelte-zfjeps")},m(e,n){u(e,l,n),i(l,t),i(t,r),i(r,a),i(a,S),i(t,f),i(t,m),i(m,g),i(g,B),i(l,N),i(l,k),i(k,b),i(b,L),i(b,v),i(v,G),i(b,R),i(b,w),i(w,D),i(b,A),i(b,I),i(I,K)},p(e,[n]){1&n&&x!==(x=Number(e[0].cases7_per_100k).toFixed(2)+"")&&h(S,x),1&n&&y!==(y=e[0].GEN.replace(U+"","")+"")&&h(B,y),4&n&&E!==(E=s("card__row card__row--full "+e[2])+" svelte-zfjeps")&&_(t,"class",E),3&n&&z!==(z=e[1](e[0].EWZ)+"")&&h(G,z),3&n&&T!==(T=e[1](e[0].cases)+"")&&h(D,T),3&n&&$!==($=e[1](e[0].deaths)+"")&&h(K,$)},i:e,o:e,d(e){e&&o(l)}}}function H(e,n,l){let{data:t}=n,{hmrUnit:r}=n,a="warning";return t.cases7_per_100k<=35&&(a="info"),t.cases7_per_100k>=50&&(a="danger"),e.$$set=e=>{"data"in e&&l(0,t=e.data),"hmrUnit"in e&&l(1,r=e.hmrUnit)},[t,r,a]}class q extends Z{constructor(e){super(),F(this,e,H,V,a,{data:0,hmrUnit:1})}}function j(n){let l,t,r,a,s,u,d,p,h,S,f,m,g,B,E,N,k,b,L,v,G,R,w,D,A,I,K,x,y,z,T,$,F,Z,U,O;return document.title=l=M,{c(){t=c("meta"),r=c("meta"),a=c("meta"),u=c("meta"),d=c("link"),p=c("link"),h=c("link"),S=c("link"),f=c("link"),m=c("link"),g=c("link"),B=c("link"),E=c("link"),N=c("link"),k=c("link"),b=c("link"),L=c("link"),v=c("meta"),G=c("meta"),R=c("meta"),w=c("meta"),D=c("meta"),A=c("meta"),I=c("meta"),K=c("meta"),x=c("meta"),y=c("meta"),z=c("meta"),T=c("link"),$=c("meta"),F=c("meta"),Z=c("meta"),U=c("script"),U.textContent="var siteID = '4';\n        var _paq = (window._paq = window._paq || []);\n        _paq.push(['disableCookies']);\n        _paq.push(['trackPageView']);\n        _paq.push(['enableLinkTracking']);\n        (function () {\n            var u = '//tracking.andre-bellmann.de/';\n            _paq.push(['setTrackerUrl', u + 'phpfortr.php']);\n            _paq.push(['setSiteId', siteID]);\n            var d = document,\n                    g = d.createElement('script'),\n                    s = d.getElementsByTagName('script')[0];\n            g.type = 'text/javascript';\n            g.async = true;\n            g.crossorigin = 'anonymous';\n            g.src = u + 'jsfortr.js';\n            s.parentNode.insertBefore(g, s);\n        })();\n    ",O=c("link"),_(t,"name","viewport"),_(t,"content","width=device-width,initial-scale=1"),_(r,"name","description"),_(r,"content",W),_(a,"name","keywords"),_(a,"content",s=C.join(", ")),_(u,"name","author"),_(u,"content","Andre Bellmann & Willy Woitas"),_(d,"rel","apple-touch-icon"),_(d,"sizes","57x57"),_(d,"href","./apple-icon-57x57.png"),_(p,"rel","apple-touch-icon"),_(p,"sizes","60x60"),_(p,"href","./apple-icon-60x60.png"),_(h,"rel","apple-touch-icon"),_(h,"sizes","72x72"),_(h,"href","./apple-icon-72x72.png"),_(S,"rel","apple-touch-icon"),_(S,"sizes","76x76"),_(S,"href","./apple-icon-76x76.png"),_(f,"rel","apple-touch-icon"),_(f,"sizes","114x114"),_(f,"href","./apple-icon-114x114.png"),_(m,"rel","apple-touch-icon"),_(m,"sizes","120x120"),_(m,"href","./apple-icon-120x120.png"),_(g,"rel","apple-touch-icon"),_(g,"sizes","144x144"),_(g,"href","./apple-icon-144x144.png"),_(B,"rel","apple-touch-icon"),_(B,"sizes","152x152"),_(B,"href","./apple-icon-152x152.png"),_(E,"rel","apple-touch-icon"),_(E,"sizes","180x180"),_(E,"href","./apple-icon-180x180.png"),_(N,"rel","icon"),_(N,"type","image/png"),_(N,"sizes","192x192"),_(N,"href","./android-icon-192x192.png"),_(k,"rel","icon"),_(k,"type","image/png"),_(k,"sizes","32x32"),_(k,"href","./favicon-32x32.png"),_(b,"rel","icon"),_(b,"type","image/png"),_(b,"sizes","96x96"),_(b,"href","./favicon-96x96.png"),_(L,"rel","icon"),_(L,"type","image/png"),_(L,"sizes","16x16"),_(L,"href","./favicon-16x16.png"),_(v,"name","google-site-verification"),_(v,"content","CqV3cESGHyG-BnuZ5ArKraqG8il80TAvZtgtB4PHDd8"),_(G,"property","og:image"),_(G,"content","https://ingomc.github.io/coburg19/android-icon-192x192.png"),_(R,"property","og:title"),_(R,"content",M),_(w,"property","og:description"),_(w,"content",W),_(D,"property","og:url"),_(D,"content","https://github.com/dutscher/berlin-corona-ampel/"),_(A,"name","twitter:card"),_(A,"content",M),_(I,"name","twitter:url"),_(I,"content","http://www.website.com/article-name"),_(K,"name","twitter:title"),_(K,"content",M),_(x,"name","twitter:description"),_(x,"content",W),_(y,"name","twitter:image"),_(y,"content","https://ingomc.github.io/coburg19/android-icon-192x192.png"),_(z,"name","”twitter:creator”"),_(z,"value","”@ingomc”"),_(T,"rel","manifest"),_(T,"href","./manifest.json"),_($,"name","msapplication-TileColor"),_($,"content","#292F36"),_(F,"name","msapplication-TileImage"),_(F,"content","/ms-icon-144x144.png"),_(Z,"name","theme-color"),_(Z,"content","#292F36"),_(U,"type","text/javascript"),_(O,"rel","icon"),_(O,"type","image/png"),_(O,"href","./favicon.png")},m(e,n){i(document.head,t),i(document.head,r),i(document.head,a),i(document.head,u),i(document.head,d),i(document.head,p),i(document.head,h),i(document.head,S),i(document.head,f),i(document.head,m),i(document.head,g),i(document.head,B),i(document.head,E),i(document.head,N),i(document.head,k),i(document.head,b),i(document.head,L),i(document.head,v),i(document.head,G),i(document.head,R),i(document.head,w),i(document.head,D),i(document.head,A),i(document.head,I),i(document.head,K),i(document.head,x),i(document.head,y),i(document.head,z),i(document.head,T),i(document.head,$),i(document.head,F),i(document.head,Z),i(document.head,U),i(document.head,O)},p(e,[n]){0&n&&l!==(l=M)&&(document.title=l)},i:e,o:e,d(e){o(t),o(r),o(a),o(u),o(d),o(p),o(h),o(S),o(f),o(m),o(g),o(B),o(E),o(N),o(k),o(b),o(L),o(v),o(G),o(R),o(w),o(D),o(A),o(I),o(K),o(x),o(y),o(z),o(T),o($),o(F),o(Z),o(U),o(O)}}}class P extends Z{constructor(e){super(),F(this,e,null,j,a,{})}}function J(n){let l,t,r,a,s;return{c(){l=c("header"),t=c("div"),r=c("h1"),r.textContent="🚦 Corona-Ampel für Berlin 🚦",a=p(),s=c("h2"),s.textContent=""+W,_(r,"class","svelte-1qnubhy"),_(s,"class","svelte-1qnubhy"),_(t,"class","wrapper container svelte-1qnubhy"),_(l,"class","svelte-1qnubhy")},m(e,n){u(e,l,n),i(l,t),i(t,r),i(t,a),i(t,s)},p:e,i:e,o:e,d(e){e&&o(l)}}}class Q extends Z{constructor(e){super(),F(this,e,null,J,a,{})}}function X(n){let l,t,r,a,s,d,h,S;return{c(){l=c("div"),t=c("a"),r=c("div"),r.innerHTML='<div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid svelte-180asd9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-180asd9"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"></path></svg></div>Facebook',s=p(),d=c("a"),h=c("div"),h.innerHTML='<div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid svelte-180asd9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-180asd9"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"></path></svg></div>WhatsApp',_(r,"class","resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium svelte-180asd9"),_(t,"class","resp-sharing-button__link svelte-180asd9"),_(t,"href",a="https://facebook.com/sharer/sharer.php?u="+encodeURI(n[0])),_(t,"target","_blank"),_(t,"rel","noopener"),_(t,"aria-label","Facebook"),_(h,"class","resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--medium svelte-180asd9"),_(d,"class","resp-sharing-button__link svelte-180asd9"),_(d,"href",S="whatsapp://send?text="+encodeURI(n[1])),_(d,"target","_blank"),_(d,"rel","noopener"),_(d,"aria-label","WhatsApp")},m(e,n){u(e,l,n),i(l,t),i(t,r),i(l,s),i(l,d),i(d,h)},p:e,i:e,o:e,d(e){e&&o(l)}}}function Y(e){let n=window.location;return[n,"Das hier ist ne coole Website "+n]}class ee extends Z{constructor(e){super(),F(this,e,Y,X,a,{})}}function ne(e,n,l){const t=e.slice();return t[10]=n[l],t}function le(e,n,l){const t=e.slice();return t[13]=n[l],t}function te(e){let n,l,t,r,a,d,h,f=e[13].label+"",m=e[0]===e[13].index?"down"===e[1]?"&#8615;":"&#8613":"";function g(...n){return e[8](e[13],...n)}return{c(){n=c("button"),t=p(),l=new S(t),r=new S(null),_(n,"class",a=s(e[0]===e[13].index?"active":"")+" svelte-1q8qjek")},m(e,a){var s,o,c,p;u(e,n,a),l.m(f,n),i(n,t),r.m(m,n),d||(o="click",c=g,(s=n).addEventListener(o,c,p),h=()=>s.removeEventListener(o,c,p),d=!0)},p(l,t){e=l,3&t&&m!==(m=e[0]===e[13].index?"down"===e[1]?"&#8615;":"&#8613":"")&&r.p(m),1&t&&a!==(a=s(e[0]===e[13].index?"active":"")+" svelte-1q8qjek")&&_(n,"class",a)},d(e){e&&o(n),d=!1,h()}}}function re(e,n){let l,t,r;return t=new q({props:{data:n[10],hmrUnit:se}}),{key:e,first:null,c(){l=d(""),y(t.$$.fragment),this.first=l},m(e,n){u(e,l,n),z(t,e,n),r=!0},p(e,n){const l={};32&n&&(l.data=e[10]),t.$set(l)},i(e){r||(I(t.$$.fragment,e),r=!0)},o(e){K(t.$$.fragment,e),r=!1},d(e){e&&o(l),T(t,e)}}}function ae(e){let n,l,r,a,s,S,f,m,g,B,E,N,k,b,L,v,G,R,w,D,$,F,Z,M,W,C,U,O,V,H,q,j,J,X,Y,ae,ie,ue,oe,ce,de,pe,_e,he,Se,fe,me,ge,Be,Ee,Ne,ke,be,Le,ve,Ge,Re,we,De,Ae,Ie,Ke,xe=e[5][0].last_update+"",ye=se(e[2])+"",ze=se(e[3])+"",Te=se(e[4])+"",$e=[],Fe=new Map;n=new P({}),a=new Q({});let Ze=e[6],Me=[];for(let n=0;n<Ze.length;n+=1)Me[n]=te(le(e,Ze,n));let We=e[5];const Ce=e=>e[10].OBJECTID;for(let n=0;n<We.length;n+=1){let l=ne(e,We,n),t=Ce(l);Fe.set(t,$e[n]=re(t,l))}return O=new ee({}),{c(){y(n.$$.fragment),l=p(),r=c("main"),y(a.$$.fragment),s=p(),S=c("center");for(let e=0;e<Me.length;e+=1)Me[e].c();f=p(),m=c("br"),g=p(),B=c("small"),E=d("Stand: "),N=c("strong"),k=d(xe),b=d(" | Einwohner: "),L=c("strong"),v=d(ye),G=d(" | Fälle insgesamt: "),R=c("strong"),w=d(ze),D=d(" | Tode: "),$=c("strong"),F=d(Te),Z=p(),M=c("div");for(let e=0;e<$e.length;e+=1)$e[e].c();W=p(),C=c("div"),U=c("center"),y(O.$$.fragment),V=p(),H=c("div"),q=c("p"),q.innerHTML="Einen Tag nach dem Treffen der <strong>Ministerpräsidenten und Kanzlerin Merkel</strong> hat\n                das bayerische Kabinett unter Leitung von Ministerpräsident Markus Söder die für Bayern\n                geltenden Bestimmungen beschlossen. ",j=p(),J=c("div"),X=p(),Y=c("p"),Y.innerHTML="Um die weitere Ausbreitung des Corona-Virus eindämmen und einen zweiten Lockdown zu\n                verhindern, wird\n                <strong>in Bayern die Corona-Ampel eingeführt.nbsp;</strong>",ae=p(),ie=c("p"),ie.innerHTML="<strong>Alle Regeln gelten für die Regionen als MUSS-Regeln. </strong>Nicht wie\n                bisher als &quot;Kann-Regeln&quot;",ue=p(),oe=c("p"),oe.innerHTML='<strong><span class="darkbluetext"><span class="greentext">Grün - Inzidenz bis 35 </span></span></strong>',ce=p(),de=c("ul"),de.innerHTML="<li>Allgemeine AHA + L-Regeln  (Abstand, Hygiene, Alltagsmaske und Lüften)</li> \n                <li>Kontaktbeschränkungen: Bis zu 10 Personen oder zwei Haushalte in der Öffentlichkeit\n                    treffen ist erlaubt</li> \n                <li>Maskenpflicht im ÖPNV, in Geschäften und im Einzelhandel, sowie in der Gastronomie bis zum\n                    Platz </li> \n                <li>Empfehlung, aber keine Pflicht: Private Feierlichkeiten mit bis zu 25 Personen sind\n                    erlaubt</li>",pe=p(),_e=c("p"),_e.innerHTML='<span class="yellowtext"><strong><span class="yellowtext"><span class="darkbluetext"><span class="yellowtext">Gelb -</span> </span></span></strong><span class="darkbluetext"><strong><span class="yellowtext">Inzidenz</span></strong></span></span><b style="background-color: initial;"><span class="darkbluetext"><span class="yellowtext"><span class="darkbluetext"> </span>35 bis 50</span></span></b>',he=p(),Se=c("ul"),Se.innerHTML="<li>Maskenpflicht wird ausgeweitet. \n                    <ul><li>Maskenpflicht auch im Unterricht ab der 5. Klasse</li> \n                        <li>Maskenpflicht an Hochschulen </li> \n                        <li>in öffentlichen Gebäuden</li> \n                        <li>am Arbeitsplatz, wenn der Abstand von 1,5m nicht eingehalten werden kann. Im\n                            Betrieb, sobald man den Platz verlässt.</li> \n                        <li>Öffentlichen Plätzen, die stark frequentiert sind.</li></ul></li> \n                <li>Allgemeine Sperrstunde ab 23 Uhr </li> \n                <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 23 Uhr </li> \n                <li>Auf öffentlichen Plätzen besteht ab 23 Uhr ein Alkoholverbot.</li> \n                <li>private Feiern und Treffen sind auf zwei Haushalte oder maximal 10 Personen\n                    beschränkt. Egal ob draußen, daheim oder im Lokal.</li>",fe=p(),me=c("p"),me.innerHTML='<span class="redtext"><strong>Rot - Inzidenz </strong></span><span class="redtext"><strong>ab 50</strong></span>',ge=p(),Be=c("ul"),Be.innerHTML="<li>Maskenpflicht wie bei 35-50 und zusätzlich Maskenpflicht auch in der\n                    Grundschule  </li> \n                <li>Allgemeine Sperrstunde ab 22 Uhr</li> \n                <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 22 Uhr </li> \n                <li>Auf öffentlichen Plätzen besteht ab 22 Uhr ein Alkoholverbot.</li> \n                <li>private Feiern und Treffen sind auf 5 Personen oder zwei Haushalte beschränkt.\n                    Egal ob draußen, daheim oder im Lokal.</li>",Ee=p(),Ne=c("center"),ke=d("Crafted with ❤️from\n                "),be=c("a"),be.textContent="Andre\n                    Bellmann",Le=d("\n                & "),ve=c("a"),Ge=d("Willy Woitas"),Re=c("br"),we=p(),De=c("a"),De.textContent="Corona\n                    Daten basierend auf API von ARCGIS/RKI_LANDKREISE",Ae=p(),Ie=c("div"),_(S,"class","sorter svelte-1q8qjek"),_(M,"class","card-wrapper container svelte-1q8qjek"),_(J,"id","intxt-1"),_(J,"class","aditem "),_(be,"href","https://www.andre-bellmann.de/?utm_source=social-media&utm_medium=corona&utm_campaign=website"),_(ve,"href","https://www.github.com/dutscher"),_(De,"href","https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?outFields=*&returnGeometry=false&f=json&outSR=4326&where=GEN%20=%20'BERLIN%20TREPTOW-K%C3%96PENICK'%20OR%20GEN%20=%20'BERLIN%20MITTE'%20OR%20GEN%20=%20'BERLIN%20FRIEDRICHSHAIN-KREUZBERG'%20OR%20GEN%20=%20'BERLIN%20PANKOW'%20OR%20GEN%20=%20'BERLIN%20LICHTENBERG'%20OR%20GEN%20=%20'BERLIN%20MARZAHN-HELLERSDORF'%20OR%20GEN%20=%20'BERLIN%20CHARLOTTENBURG-WILMERSDORF'%20OR%20GEN%20=%20'BERLIN%20STEGLITZ-ZEHLENDORF'%20OR%20GEN%20=%20'BERLIN%20TEMPELHOF-SCH%C3%96NEBERG'%20OR%20GEN%20=%20'BERLIN%20NEUK%C3%96LLN'%20OR%20GEN%20=%20'BERLIN%20REINICKENDORF'%20OR%20GEN%20=%20'BERLIN%20SPANDAU'"),_(H,"class","content svelte-1q8qjek"),_(C,"class","container"),_(Ie,"class","container")},m(e,t){z(n,e,t),u(e,l,t),u(e,r,t),z(a,r,null),i(r,s),i(r,S);for(let e=0;e<Me.length;e+=1)Me[e].m(S,null);i(S,f),i(S,m),i(S,g),i(S,B),i(B,E),i(B,N),i(N,k),i(B,b),i(B,L),i(L,v),i(B,G),i(B,R),i(R,w),i(B,D),i(B,$),i($,F),i(r,Z),i(r,M);for(let e=0;e<$e.length;e+=1)$e[e].m(M,null);i(r,W),i(r,C),i(C,U),z(O,U,null),i(C,V),i(C,H),i(H,q),i(H,j),i(H,J),i(H,X),i(H,Y),i(H,ae),i(H,ie),i(H,ue),i(H,oe),i(H,ce),i(H,de),i(H,pe),i(H,_e),i(H,he),i(H,Se),i(H,fe),i(H,me),i(H,ge),i(H,Be),i(H,Ee),i(H,Ne),i(Ne,ke),i(Ne,be),i(Ne,Le),i(Ne,ve),i(ve,Ge),i(Ne,Re),i(Ne,we),i(Ne,De),i(r,Ae),i(r,Ie),Ke=!0},p(e,[n]){if(67&n){let l;for(Ze=e[6],l=0;l<Ze.length;l+=1){const t=le(e,Ze,l);Me[l]?Me[l].p(t,n):(Me[l]=te(t),Me[l].c(),Me[l].m(S,f))}for(;l<Me.length;l+=1)Me[l].d(1);Me.length=Ze.length}if((!Ke||32&n)&&xe!==(xe=e[5][0].last_update+"")&&h(k,xe),(!Ke||4&n)&&ye!==(ye=se(e[2])+"")&&h(v,ye),(!Ke||8&n)&&ze!==(ze=se(e[3])+"")&&h(w,ze),(!Ke||16&n)&&Te!==(Te=se(e[4])+"")&&h(F,Te),32&n){const l=e[5];A={r:0,c:[],p:A},$e=function(e,n,l,t,r,a,s,i,u,o,c,d){let p=e.length,_=a.length,h=p;const S={};for(;h--;)S[e[h].key]=h;const f=[],m=new Map,g=new Map;for(h=_;h--;){const e=d(r,a,h),i=l(e);let u=s.get(i);u?t&&u.p(e,n):(u=o(i,e),u.c()),m.set(i,f[h]=u),i in S&&g.set(i,Math.abs(h-S[i]))}const B=new Set,E=new Set;function N(e){I(e,1),e.m(i,c),s.set(e.key,e),c=e.first,_--}for(;p&&_;){const n=f[_-1],l=e[p-1],t=n.key,r=l.key;n===l?(c=n.first,p--,_--):m.has(r)?!s.has(t)||B.has(t)?N(n):E.has(r)?p--:g.get(t)>g.get(r)?(E.add(t),N(n)):(B.add(r),p--):(u(l,s),p--)}for(;p--;){const n=e[p];m.has(n.key)||u(n,s)}for(;_;)N(f[_-1]);return f}($e,n,Ce,1,e,l,Fe,M,x,re,null,ne),A.r||t(A.c),A=A.p}},i(e){if(!Ke){I(n.$$.fragment,e),I(a.$$.fragment,e);for(let e=0;e<We.length;e+=1)I($e[e]);I(O.$$.fragment,e),Ke=!0}},o(e){K(n.$$.fragment,e),K(a.$$.fragment,e);for(let e=0;e<$e.length;e+=1)K($e[e]);K(O.$$.fragment,e),Ke=!1},d(e){T(n,e),e&&o(l),e&&o(r),T(a),function(e,n){for(let l=0;l<e.length;l+=1)e[l]&&e[l].d(n)}(Me,e);for(let e=0;e<$e.length;e+=1)$e[e].d();T(O)}}}function se(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function ie(e,n,l){let{data:t}=n;t=t.map(((e,n)=>e.attributes));let r="package",a="down",s=0,i=0,u=0;let o;return e.$$set=e=>{"data"in e&&l(7,t=e.data)},e.$$.update=()=>{3&e.$$.dirty&&l(5,o=function(e,n){let r=[],a="GEN";return"package"===e?(O.locations.forEach((e=>{t.forEach((n=>{n[a]===e&&(l(2,s+=n.EWZ),l(3,i+=n.cases),l(4,u+=n.deaths),r.push(n))}))})),r):(a=e,r=t.sort(((e,l)=>e[a]<l[a]?"up"===n?-1:1:e[a]>l[a]?"up"===n?1:-1:0)),r)}(r,a))},[r,a,s,i,u,o,[{index:"GEN",label:"ABC"},{index:"EWZ",label:"Einwohner"},{index:"cases7_per_100k",label:"Inzidenz"},{index:"cases",label:"Aktive Fälle"},{index:"deaths",label:"Tode"}],t,function(e){l(1,a=r!==e.index?"down":"down"===a?"up":"down"),l(0,r=e.index)}]}var ue={objectIdFieldName:"OBJECTID",uniqueIdField:{name:"OBJECTID",isSystemMaintained:!0},globalIdFieldName:"",geometryProperties:{shapeAreaFieldName:"Shape__Area",shapeLengthFieldName:"Shape__Length",units:"esriMeters"},geometryType:"esriGeometryPolygon",spatialReference:{wkid:4326,latestWkid:4326},fields:"",features:[{attributes:{OBJECTID:404,ADE:null,GF:null,BSG:null,RS:"11012",AGS:null,SDV_RS:null,GEN:"Berlin Reinickendorf",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:259689,KFL:null,DEBKG_ID:null,Shape__Area:89436651.1298828,Shape__Length:52066.3787897586,death_rate:1.14997604216579,cases:2087,deaths:24,cases_per_100k:803.653601038165,cases_per_population:.803653601038165,BL:"Berlin",BL_ID:"11",county:"SK Berlin Reinickendorf",last_update:"29.10.2020, 00:00 Uhr",cases7_per_100k:145.943802009327,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:139.801405699047}},{attributes:{OBJECTID:405,ADE:null,GF:null,BSG:null,RS:"11004",AGS:null,SDV_RS:null,GEN:"Berlin Charlottenburg-Wilmersdorf",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:334401,KFL:null,DEBKG_ID:null,Shape__Area:64774504.5493164,Shape__Length:43768.285631833,death_rate:.889547813194959,cases:2698,deaths:24,cases_per_100k:806.8157690916,cases_per_population:.8068157690916,BL:"Berlin",BL_ID:"11",county:"SK Berlin Charlottenburg-Wilmersdorf",last_update:"29.10.2020, 00:00 Uhr",cases7_per_100k:139.652692426159,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:139.801405699047}},{attributes:{OBJECTID:406,ADE:null,GF:null,BSG:null,RS:"11009",AGS:null,SDV_RS:null,GEN:"Berlin Treptow-Köpenick",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:266488,KFL:null,DEBKG_ID:null,Shape__Area:168005186.256348,Shape__Length:91502.1200065657,death_rate:1.07816711590297,cases:1113,deaths:12,cases_per_100k:417.654828735253,cases_per_population:.417654828735253,BL:"Berlin",BL_ID:"11",county:"SK Berlin Treptow-Köpenick",last_update:"29.10.2020, 00:00 Uhr",cases7_per_100k:67.5452553210651,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:139.801405699047}},{attributes:{OBJECTID:407,ADE:null,GF:null,BSG:null,RS:"11003",AGS:null,SDV_RS:null,GEN:"Berlin Pankow",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:398036,KFL:null,DEBKG_ID:null,Shape__Area:103362961.02002,Shape__Length:66428.5750865875,death_rate:1.66666666666667,cases:2280,deaths:38,cases_per_100k:572.812509421258,cases_per_population:.572812509421258,BL:"Berlin",BL_ID:"11",county:"SK Berlin Pankow",last_update:"29.10.2020, 00:00 Uhr",cases7_per_100k:105.518093840758,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:139.801405699047}},{attributes:{OBJECTID:408,ADE:null,GF:null,BSG:null,RS:"11008",AGS:null,SDV_RS:null,GEN:"Berlin Neukölln",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:321123,KFL:null,DEBKG_ID:null,Shape__Area:44996873.6523438,Shape__Length:40651.1686972196,death_rate:1.05263157894737,cases:4370,deaths:46,cases_per_100k:1360.84926959452,cases_per_population:1.36084926959452,BL:"Berlin",BL_ID:"11",county:"SK Berlin Neukölln",last_update:"29.10.2020, 00:00 Uhr",cases7_per_100k:223.590337658779,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:139.801405699047}},{attributes:{OBJECTID:409,ADE:null,GF:null,BSG:null,RS:"11011",AGS:null,SDV_RS:null,GEN:"Berlin Lichtenberg",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:286522,KFL:null,DEBKG_ID:null,Shape__Area:52197995.7641602,Shape__Length:46276.6771709678,death_rate:1.07066381156317,cases:1401,deaths:15,cases_per_100k:488.967688345049,cases_per_population:.488967688345049,BL:"Berlin",BL_ID:"11",county:"SK Berlin Lichtenberg",last_update:"29.10.2020, 00:00 Uhr",cases7_per_100k:89.3474148581959,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:139.801405699047}},{attributes:{OBJECTID:410,ADE:null,GF:null,BSG:null,RS:"11010",AGS:null,SDV_RS:null,GEN:"Berlin Marzahn-Hellersdorf",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:262967,KFL:null,DEBKG_ID:null,Shape__Area:61914765.7182617,Shape__Length:41111.1766110066,death_rate:.800711743772242,cases:1124,deaths:9,cases_per_100k:427.430057763902,cases_per_population:.427430057763902,BL:"Berlin",BL_ID:"11",county:"SK Berlin Marzahn-Hellersdorf",last_update:"29.10.2020, 00:00 Uhr",cases7_per_100k:65.0271707096328,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:139.801405699047}},{attributes:{OBJECTID:411,ADE:null,GF:null,BSG:null,RS:"11005",AGS:null,SDV_RS:null,GEN:"Berlin Spandau",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:239019,KFL:null,DEBKG_ID:null,Shape__Area:92940423.4116211,Shape__Length:60759.065594004,death_rate:.564971751412429,cases:1593,deaths:9,cases_per_100k:666.474213347056,cases_per_population:.666474213347056,BL:"Berlin",BL_ID:"11",county:"SK Berlin Spandau",last_update:"29.10.2020, 00:00 Uhr",cases7_per_100k:141.411352235596,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:139.801405699047}},{attributes:{OBJECTID:412,ADE:null,GF:null,BSG:null,RS:"11006",AGS:null,SDV_RS:null,GEN:"Berlin Steglitz-Zehlendorf",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:302177,KFL:null,DEBKG_ID:null,Shape__Area:102687173.001465,Shape__Length:62943.9339297434,death_rate:.786163522012579,cases:1908,deaths:15,cases_per_100k:631.418009974287,cases_per_population:.631418009974287,BL:"Berlin",BL_ID:"11",county:"SK Berlin Steglitz-Zehlendorf",last_update:"29.10.2020, 00:00 Uhr",cases7_per_100k:137.336726488118,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:139.801405699047}},{attributes:{OBJECTID:413,ADE:null,GF:null,BSG:null,RS:"11001",AGS:null,SDV_RS:null,GEN:"Berlin Mitte",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:375238,KFL:null,DEBKG_ID:null,Shape__Area:39452105.0620117,Shape__Length:35771.879143497,death_rate:.450353849453142,cases:4663,deaths:21,cases_per_100k:1242.67798037512,cases_per_population:1.24267798037512,BL:"Berlin",BL_ID:"11",county:"SK Berlin Mitte",last_update:"29.10.2020, 00:00 Uhr",cases7_per_100k:199.073654587222,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:139.801405699047}},{attributes:{OBJECTID:414,ADE:null,GF:null,BSG:null,RS:"11002",AGS:null,SDV_RS:null,GEN:"Berlin Friedrichshain-Kreuzberg",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:282059,KFL:null,DEBKG_ID:null,Shape__Area:20428655.7543945,Shape__Length:32780.5909146972,death_rate:.368262470706394,cases:2987,deaths:11,cases_per_100k:1058.99829468303,cases_per_population:1.05899829468303,BL:"Berlin",BL_ID:"11",county:"SK Berlin Friedrichshain-Kreuzberg",last_update:"29.10.2020, 00:00 Uhr",cases7_per_100k:198.185486015337,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:139.801405699047}},{attributes:{OBJECTID:415,ADE:null,GF:null,BSG:null,RS:"11007",AGS:null,SDV_RS:null,GEN:"Berlin Tempelhof-Schöneberg",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:341772,KFL:null,DEBKG_ID:null,Shape__Area:53122950.2021484,Shape__Length:46308.5674125585,death_rate:.966344551816061,cases:3001,deaths:29,cases_per_100k:878.070760624042,cases_per_population:.878070760624042,BL:"Berlin",BL_ID:"11",county:"SK Berlin Tempelhof-Schöneberg",last_update:"29.10.2020, 00:00 Uhr",cases7_per_100k:140.444506864225,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:139.801405699047}}]};return new class extends Z{constructor(e){super(),F(this,e,ie,ae,a,{data:7})}}({target:document.body,props:{name:"world",data:ue.features}})}();
//# sourceMappingURL=bundle.js.map
