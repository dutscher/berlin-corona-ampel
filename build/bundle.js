var app=function(){"use strict";function e(){}function n(e){return e()}function t(){return Object.create(null)}function i(e){e.forEach(n)}function a(e){return"function"==typeof e}function r(e,n){return e!=e?n==n:e!==n||e&&"object"==typeof e||"function"==typeof e}function s(e){return null==e?"":e}function o(e,n){e.appendChild(n)}function l(e,n,t){e.insertBefore(n,t||null)}function c(e){e.parentNode.removeChild(e)}function d(e){return document.createElement(e)}function u(e){return document.createTextNode(e)}function h(){return u(" ")}function p(e,n,t){null==t?e.removeAttribute(n):e.getAttribute(n)!==t&&e.setAttribute(n,t)}function m(e,n){n=""+n,e.wholeText!==n&&(e.data=n)}class f{constructor(e=null){this.a=e,this.e=this.n=null}m(e,n,t=null){this.e||(this.e=d(n.nodeName),this.t=n,this.h(e)),this.i(t)}h(e){this.e.innerHTML=e,this.n=Array.from(this.e.childNodes)}i(e){for(let n=0;n<this.n.length;n+=1)l(this.t,this.n[n],e)}p(e){this.d(),this.h(e),this.i(this.a)}d(){this.n.forEach(c)}}let g;function w(e){g=e}const b=[],v=[],k=[],x=[],$=Promise.resolve();let _=!1;function E(e){k.push(e)}let z=!1;const y=new Set;function R(){if(!z){z=!0;do{for(let e=0;e<b.length;e+=1){const n=b[e];w(n),B(n.$$)}for(w(null),b.length=0;v.length;)v.pop()();for(let e=0;e<k.length;e+=1){const n=k[e];y.has(n)||(y.add(n),n())}k.length=0}while(b.length);for(;x.length;)x.pop()();_=!1,z=!1,y.clear()}}function B(e){if(null!==e.fragment){e.update(),i(e.before_update);const n=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,n),e.after_update.forEach(E)}}const N=new Set;let C;function L(e,n){e&&e.i&&(N.delete(e),e.i(n))}function A(e,n,t,i){if(e&&e.o){if(N.has(e))return;N.add(e),C.c.push((()=>{N.delete(e),i&&(t&&e.d(1),i())})),e.o(n)}}function T(e,n){A(e,1,1,(()=>{n.delete(e.key)}))}function I(e){e&&e.c()}function M(e,t,r){const{fragment:s,on_mount:o,on_destroy:l,after_update:c}=e.$$;s&&s.m(t,r),E((()=>{const t=o.map(n).filter(a);l?l.push(...t):i(t),e.$$.on_mount=[]})),c.forEach(E)}function U(e,n){const t=e.$$;null!==t.fragment&&(i(t.on_destroy),t.fragment&&t.fragment.d(n),t.on_destroy=t.fragment=null,t.ctx=[])}function H(e,n){-1===e.$$.dirty[0]&&(b.push(e),_||(_=!0,$.then(R)),e.$$.dirty.fill(0)),e.$$.dirty[n/31|0]|=1<<n%31}function G(n,a,r,s,o,l,d=[-1]){const u=g;w(n);const h=a.props||{},p=n.$$={fragment:null,ctx:null,props:l,update:e,not_equal:o,bound:t(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(u?u.$$.context:[]),callbacks:t(),dirty:d,skip_bound:!1};let m=!1;if(p.ctx=r?r(n,h,((e,t,...i)=>{const a=i.length?i[0]:t;return p.ctx&&o(p.ctx[e],p.ctx[e]=a)&&(!p.skip_bound&&p.bound[e]&&p.bound[e](a),m&&H(n,e)),t})):[],p.update(),m=!0,i(p.before_update),p.fragment=!!s&&s(p.ctx),a.target){if(a.hydrate){const e=function(e){return Array.from(e.childNodes)}(a.target);p.fragment&&p.fragment.l(e),e.forEach(c)}else p.fragment&&p.fragment.c();a.intro&&L(n.$$.fragment),M(n,a.target,a.anchor),R()}w(u)}class q{$destroy(){U(this,1),this.$destroy=e}$on(e,n){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(n),()=>{const e=t.indexOf(n);-1!==e&&t.splice(e,1)}}$set(e){var n;this.$$set&&(n=e,0!==Object.keys(n).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}var j="Berlin: aktuelle 7 Tage Corona Inzidenz",S="🚦 Aktuelle 7 Tage-Inzidenz pro 100.000 Einwohner für Berliner Bezirke!  ⚠️ Alle aktuelle Zahlen",O=["Inzidenz","Ampel","Corona","Berliner Bezirke","Warnung","Info"],P="Berlin";function F(n){let t,i,a,r,f,g,w,b,v,k,x,$,_,E,z,y,R,B,N,C,L,A,T,I,M,U,H=Number(n[0].incidence).toFixed(2).replace(".",",")+"",G=n[0].newCases+"",q=n[0].name.replace(P+"","")+"",j=n[1](n[0].population)+"",S=n[1](n[0].cases)+"",O=n[1](n[0].deaths)+"";return{c(){t=d("div"),i=d("div"),a=d("div"),r=d("h3"),f=u(H),g=h(),w=d("h4"),b=u("Neue Fälle: "),v=u(G),k=h(),x=d("div"),$=d("div"),_=u(q),z=h(),y=d("div"),R=d("div"),B=u("Einwohner: "),N=d("strong"),C=u(j),L=u(" | Fälle insgesamt: "),A=d("strong"),T=u(S),I=u(" |\n            Tote: "),M=d("strong"),U=u(O),p(r,"class","card__number svelte-g2jwxz"),p(w,"class","card__number card__number--small svelte-g2jwxz"),p(a,"class","card__column svelte-g2jwxz"),p($,"class","card__city svelte-g2jwxz"),p(x,"class","card__column svelte-g2jwxz"),p(i,"class",E=s("card__row card__row--full "+n[2])+" svelte-g2jwxz"),p(R,"class","card__cases svelte-g2jwxz"),p(y,"class","card__row svelte-g2jwxz"),p(t,"class","card svelte-g2jwxz")},m(e,n){l(e,t,n),o(t,i),o(i,a),o(a,r),o(r,f),o(a,g),o(a,w),o(w,b),o(w,v),o(i,k),o(i,x),o(x,$),o($,_),o(t,z),o(t,y),o(y,R),o(R,B),o(R,N),o(N,C),o(R,L),o(R,A),o(A,T),o(R,I),o(R,M),o(M,U)},p(e,[n]){1&n&&H!==(H=Number(e[0].incidence).toFixed(2).replace(".",",")+"")&&m(f,H),1&n&&G!==(G=e[0].newCases+"")&&m(v,G),1&n&&q!==(q=e[0].name.replace(P+"","")+"")&&m(_,q),4&n&&E!==(E=s("card__row card__row--full "+e[2])+" svelte-g2jwxz")&&p(i,"class",E),3&n&&j!==(j=e[1](e[0].population)+"")&&m(C,j),3&n&&S!==(S=e[1](e[0].cases)+"")&&m(T,S),3&n&&O!==(O=e[1](e[0].deaths)+"")&&m(U,O)},i:e,o:e,d(e){e&&c(t)}}}function K(e,n,t){let{location:i}=n,{hmrUnit:a=(()=>{})}=n,r="warning";return i.incidence<=35&&(r="info"),i.incidence>=50&&i.incidence<100&&(r="danger"),i.incidence>=100&&(r="superdanger"),e.$$set=e=>{"location"in e&&t(0,i=e.location),"hmrUnit"in e&&t(1,a=e.hmrUnit)},[i,a,r]}class D extends q{constructor(e){super(),G(this,e,K,F,r,{location:0,hmrUnit:1})}}function W(n){let t,i,a,r,s,l,u,h,m,f,g,w,b,v,k,x,$,_,E,z,y,R,B,N,C,L,A,T,I,M,U,H,G,q,P,F;return document.title=t=j,{c(){i=d("meta"),a=d("meta"),r=d("meta"),l=d("meta"),u=d("link"),h=d("link"),m=d("link"),f=d("link"),g=d("link"),w=d("link"),b=d("link"),v=d("link"),k=d("link"),x=d("link"),$=d("link"),_=d("link"),E=d("link"),z=d("meta"),y=d("meta"),R=d("meta"),B=d("meta"),N=d("meta"),C=d("meta"),L=d("meta"),A=d("meta"),T=d("meta"),I=d("meta"),M=d("meta"),U=d("link"),H=d("meta"),G=d("meta"),q=d("meta"),P=d("script"),P.textContent="var siteID = '4';\n        var _paq = (window._paq = window._paq || []);\n        _paq.push(['disableCookies']);\n        _paq.push(['trackPageView']);\n        _paq.push(['enableLinkTracking']);\n        (function () {\n            var u = '//tracking.andre-bellmann.de/';\n            _paq.push(['setTrackerUrl', u + 'phpfortr.php']);\n            _paq.push(['setSiteId', siteID]);\n            var d = document,\n                    g = d.createElement('script'),\n                    s = d.getElementsByTagName('script')[0];\n            g.type = 'text/javascript';\n            g.async = true;\n            g.crossorigin = 'anonymous';\n            g.src = u + 'jsfortr.js';\n            s.parentNode.insertBefore(g, s);\n        })();\n    ",F=d("link"),p(i,"name","viewport"),p(i,"content","width=device-width,initial-scale=1"),p(a,"name","description"),p(a,"content",S),p(r,"name","keywords"),p(r,"content",s=O.join(", ")),p(l,"name","author"),p(l,"content","Andre Bellmann & Willy Woitas"),p(u,"rel","apple-touch-icon"),p(u,"sizes","57x57"),p(u,"href","./apple-icon-57x57.png"),p(h,"rel","apple-touch-icon"),p(h,"sizes","60x60"),p(h,"href","./apple-icon-60x60.png"),p(m,"rel","apple-touch-icon"),p(m,"sizes","72x72"),p(m,"href","./apple-icon-72x72.png"),p(f,"rel","apple-touch-icon"),p(f,"sizes","76x76"),p(f,"href","./apple-icon-76x76.png"),p(g,"rel","apple-touch-icon"),p(g,"sizes","114x114"),p(g,"href","./apple-icon-114x114.png"),p(w,"rel","apple-touch-icon"),p(w,"sizes","120x120"),p(w,"href","./apple-icon-120x120.png"),p(b,"rel","apple-touch-icon"),p(b,"sizes","144x144"),p(b,"href","./apple-icon-144x144.png"),p(v,"rel","apple-touch-icon"),p(v,"sizes","152x152"),p(v,"href","./apple-icon-152x152.png"),p(k,"rel","apple-touch-icon"),p(k,"sizes","180x180"),p(k,"href","./apple-icon-180x180.png"),p(x,"rel","icon"),p(x,"type","image/png"),p(x,"sizes","192x192"),p(x,"href","./android-icon-192x192.png"),p($,"rel","icon"),p($,"type","image/png"),p($,"sizes","32x32"),p($,"href","./favicon-32x32.png"),p(_,"rel","icon"),p(_,"type","image/png"),p(_,"sizes","96x96"),p(_,"href","./favicon-96x96.png"),p(E,"rel","icon"),p(E,"type","image/png"),p(E,"sizes","16x16"),p(E,"href","./favicon-16x16.png"),p(z,"name","google-site-verification"),p(z,"content","CqV3cESGHyG-BnuZ5ArKraqG8il80TAvZtgtB4PHDd8"),p(y,"property","og:image"),p(y,"content","https://ingomc.github.io/coburg19/android-icon-192x192.png"),p(R,"property","og:title"),p(R,"content",j),p(B,"property","og:description"),p(B,"content",S),p(N,"property","og:url"),p(N,"content","https://github.com/dutscher/berlin-corona-ampel/"),p(C,"name","twitter:card"),p(C,"content",j),p(L,"name","twitter:url"),p(L,"content","http://www.website.com/article-name"),p(A,"name","twitter:title"),p(A,"content",j),p(T,"name","twitter:description"),p(T,"content",S),p(I,"name","twitter:image"),p(I,"content","https://ingomc.github.io/coburg19/android-icon-192x192.png"),p(M,"name","”twitter:creator”"),p(M,"value","”@ingomc”"),p(U,"rel","manifest"),p(U,"href","./manifest.json"),p(H,"name","msapplication-TileColor"),p(H,"content","#292F36"),p(G,"name","msapplication-TileImage"),p(G,"content","/ms-icon-144x144.png"),p(q,"name","theme-color"),p(q,"content","#292F36"),p(P,"type","text/javascript"),p(F,"rel","icon"),p(F,"type","image/png"),p(F,"href","./favicon.png")},m(e,n){o(document.head,i),o(document.head,a),o(document.head,r),o(document.head,l),o(document.head,u),o(document.head,h),o(document.head,m),o(document.head,f),o(document.head,g),o(document.head,w),o(document.head,b),o(document.head,v),o(document.head,k),o(document.head,x),o(document.head,$),o(document.head,_),o(document.head,E),o(document.head,z),o(document.head,y),o(document.head,R),o(document.head,B),o(document.head,N),o(document.head,C),o(document.head,L),o(document.head,A),o(document.head,T),o(document.head,I),o(document.head,M),o(document.head,U),o(document.head,H),o(document.head,G),o(document.head,q),o(document.head,P),o(document.head,F)},p(e,[n]){0&n&&t!==(t=j)&&(document.title=t)},i:e,o:e,d(e){c(i),c(a),c(r),c(l),c(u),c(h),c(m),c(f),c(g),c(w),c(b),c(v),c(k),c(x),c($),c(_),c(E),c(z),c(y),c(R),c(B),c(N),c(C),c(L),c(A),c(T),c(I),c(M),c(U),c(H),c(G),c(q),c(P),c(F)}}}class Z extends q{constructor(e){super(),G(this,e,null,W,r,{})}}function V(n){let t,i,a,r,s;return{c(){t=d("header"),i=d("div"),a=d("h1"),a.textContent="🚦 Corona-Ampel für Berlin 🚦",r=h(),s=d("h2"),s.textContent=""+S,p(a,"class","svelte-1qnubhy"),p(s,"class","svelte-1qnubhy"),p(i,"class","wrapper container svelte-1qnubhy"),p(t,"class","svelte-1qnubhy")},m(e,n){l(e,t,n),o(t,i),o(i,a),o(i,r),o(i,s)},p:e,i:e,o:e,d(e){e&&c(t)}}}class J extends q{constructor(e){super(),G(this,e,null,V,r,{})}}function Q(n){let t,i,a,r,s,u,m,f;return{c(){t=d("div"),i=d("a"),a=d("div"),a.innerHTML='<div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid svelte-180asd9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-180asd9"><path d="M18.77 7.46H14.5v-1.9c0-.9.6-1.1 1-1.1h3V.5h-4.33C10.24.5 9.5 3.44 9.5 5.32v2.15h-3v4h3v12h5v-12h3.85l.42-4z"></path></svg></div>Facebook',s=h(),u=d("a"),m=d("div"),m.innerHTML='<div aria-hidden="true" class="resp-sharing-button__icon resp-sharing-button__icon--solid svelte-180asd9"><svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" class="svelte-180asd9"><path d="M20.1 3.9C17.9 1.7 15 .5 12 .5 5.8.5.7 5.6.7 11.9c0 2 .5 3.9 1.5 5.6L.6 23.4l6-1.6c1.6.9 3.5 1.3 5.4 1.3 6.3 0 11.4-5.1 11.4-11.4-.1-2.8-1.2-5.7-3.3-7.8zM12 21.4c-1.7 0-3.3-.5-4.8-1.3l-.4-.2-3.5 1 1-3.4L4 17c-1-1.5-1.4-3.2-1.4-5.1 0-5.2 4.2-9.4 9.4-9.4 2.5 0 4.9 1 6.7 2.8 1.8 1.8 2.8 4.2 2.8 6.7-.1 5.2-4.3 9.4-9.5 9.4zm5.1-7.1c-.3-.1-1.7-.9-1.9-1-.3-.1-.5-.1-.7.1-.2.3-.8 1-.9 1.1-.2.2-.3.2-.6.1s-1.2-.5-2.3-1.4c-.9-.8-1.4-1.7-1.6-2-.2-.3 0-.5.1-.6s.3-.3.4-.5c.2-.1.3-.3.4-.5.1-.2 0-.4 0-.5C10 9 9.3 7.6 9 7c-.1-.4-.4-.3-.5-.3h-.6s-.4.1-.7.3c-.3.3-1 1-1 2.4s1 2.8 1.1 3c.1.2 2 3.1 4.9 4.3.7.3 1.2.5 1.6.6.7.2 1.3.2 1.8.1.6-.1 1.7-.7 1.9-1.3.2-.7.2-1.2.2-1.3-.1-.3-.3-.4-.6-.5z"></path></svg></div>WhatsApp',p(a,"class","resp-sharing-button resp-sharing-button--facebook resp-sharing-button--medium svelte-180asd9"),p(i,"class","resp-sharing-button__link svelte-180asd9"),p(i,"href",r="https://facebook.com/sharer/sharer.php?u="+encodeURI(n[0])),p(i,"target","_blank"),p(i,"rel","noopener"),p(i,"aria-label","Facebook"),p(m,"class","resp-sharing-button resp-sharing-button--whatsapp resp-sharing-button--medium svelte-180asd9"),p(u,"class","resp-sharing-button__link svelte-180asd9"),p(u,"href",f="whatsapp://send?text="+encodeURI(n[1])),p(u,"target","_blank"),p(u,"rel","noopener"),p(u,"aria-label","WhatsApp")},m(e,n){l(e,t,n),o(t,i),o(i,a),o(t,s),o(t,u),o(u,m)},p:e,i:e,o:e,d(e){e&&c(t)}}}function X(e){let n=window.location;return[n,"Das hier ist ne coole Website "+n]}class Y extends q{constructor(e){super(),G(this,e,X,Q,r,{})}}function ee(e,n,t){const i=e.slice();return i[7]=n[t],i}function ne(e,n,t){const i=e.slice();return i[10]=n[t],i}function te(e){let n,t,i,a,r,u,m,g=e[10].label+"",w=e[1]===e[10].index?"down"===e[2]?"&#8615;":"&#8613":"";function b(...n){return e[5](e[10],...n)}return{c(){n=d("button"),i=h(),t=new f(i),a=new f(null),p(n,"class",r=s(e[1]===e[10].index?"active":"")+" svelte-1q8qjek")},m(e,r){var s,c,d,h;l(e,n,r),t.m(g,n),o(n,i),a.m(w,n),u||(c="click",d=b,(s=n).addEventListener(c,d,h),m=()=>s.removeEventListener(c,d,h),u=!0)},p(t,i){e=t,6&i&&w!==(w=e[1]===e[10].index?"down"===e[2]?"&#8615;":"&#8613":"")&&a.p(w),2&i&&r!==(r=s(e[1]===e[10].index?"active":"")+" svelte-1q8qjek")&&p(n,"class",r)},d(e){e&&c(n),u=!1,m()}}}function ie(e,n){let t,i,a;return i=new D({props:{location:n[7],hmrUnit:re}}),{key:e,first:null,c(){t=u(""),I(i.$$.fragment),this.first=t},m(e,n){l(e,t,n),M(i,e,n),a=!0},p(e,n){const t={};8&n&&(t.location=e[7]),i.$set(t)},i(e){a||(L(i.$$.fragment,e),a=!0)},o(e){A(i.$$.fragment,e),a=!1},d(e){e&&c(t),U(i,e)}}}function ae(e){let n,t,a,r,s,f,g,w,b,v,k,x,$,_,E,z,y,R,B,N,H,G,q,j,S,O,P,F,K,D,W,V,Q,X,ae,se,oe,le,ce,de,ue,he,pe,me,fe,ge,we,be,ve,ke,xe,$e,_e,Ee,ze,ye,Re,Be,Ne,Ce,Le,Ae,Te,Ie,Me,Ue=e[0].date+"",He=re(e[0].population)+"",Ge=re(e[0].cases)+"",qe=re(e[0].newCases)+"",je=re(e[0].deaths)+"",Se=[],Oe=new Map;n=new Z({}),r=new J({});let Pe=e[4],Fe=[];for(let n=0;n<Pe.length;n+=1)Fe[n]=te(ne(e,Pe,n));let Ke=e[3];const De=e=>e[7].id;for(let n=0;n<Ke.length;n+=1){let t=ee(e,Ke,n),i=De(t);Oe.set(i,Se[n]=ie(i,t))}return W=new Y({}),{c(){I(n.$$.fragment),t=h(),a=d("main"),I(r.$$.fragment),s=h(),f=d("center");for(let e=0;e<Fe.length;e+=1)Fe[e].c();g=h(),w=d("br"),b=h(),v=d("small"),k=u("Stand: "),x=d("strong"),$=u(Ue),_=u(" |\n            Einwohner: "),E=d("strong"),z=u(He),y=u(" |\n            Fälle: "),R=d("strong"),B=u(Ge),N=u(" |\n            Neue Fälle: "),H=d("strong"),G=u(qe),q=u(" |\n            Tote: "),j=d("strong"),S=u(je),O=h(),P=d("div");for(let e=0;e<Se.length;e+=1)Se[e].c();F=h(),K=d("div"),D=d("center"),I(W.$$.fragment),V=h(),Q=d("div"),X=d("p"),X.innerHTML="Einen Tag nach dem Treffen der <strong>Ministerpräsidenten und Kanzlerin Merkel</strong> hat\n                das bayerische Kabinett unter Leitung von Ministerpräsident Markus Söder die für Bayern\n                geltenden Bestimmungen beschlossen.",ae=h(),se=d("div"),oe=h(),le=d("p"),le.innerHTML="Um die weitere Ausbreitung des Corona-Virus eindämmen und einen zweiten Lockdown zu\n                verhindern, wird\n                <strong>in Bayern die Corona-Ampel eingeführt.</strong>",ce=h(),de=d("p"),de.innerHTML="<strong>Alle Regeln gelten für die Regionen als MUSS-Regeln.</strong> Nicht wie\n                bisher als &quot;Kann-Regeln&quot;",ue=h(),he=d("p"),he.innerHTML='<span class="greentext"><strong>Grün - Inzidenz bis 35</strong></span>',pe=h(),me=d("ul"),me.innerHTML="<li>Allgemeine AHA + L-Regeln (Abstand, Hygiene, Alltagsmaske und Lüften)</li> \n                <li>Kontaktbeschränkungen: Bis zu 10 Personen oder zwei Haushalte in der Öffentlichkeit\n                    treffen ist erlaubt</li> \n                <li>Maskenpflicht im ÖPNV, in Geschäften und im Einzelhandel, sowie in der Gastronomie bis zum\n                    Platz</li> \n                <li>Empfehlung, aber keine Pflicht: Private Feierlichkeiten mit bis zu 25 Personen sind\n                    erlaubt</li>",fe=h(),ge=d("p"),ge.innerHTML='<span class="yellowtext"><strong>Gelb - Inzidenz 35 bis 50</strong></span>',we=h(),be=d("ul"),be.innerHTML="<li>Maskenpflicht wird ausgeweitet.\n                    <ul><li>Maskenpflicht auch im Unterricht ab der 5. Klasse</li> \n                        <li>Maskenpflicht an Hochschulen</li> \n                        <li>in öffentlichen Gebäuden</li> \n                        <li>am Arbeitsplatz, wenn der Abstand von 1,5m nicht eingehalten werden kann. Im\n                            Betrieb, sobald man den Platz verlässt.</li> \n                        <li>Öffentlichen Plätzen, die stark frequentiert sind.</li></ul></li> \n                <li>Allgemeine Sperrstunde ab 23 Uhr</li> \n                <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 23 Uhr</li> \n                <li>Auf öffentlichen Plätzen besteht ab 23 Uhr ein Alkoholverbot.</li> \n                <li>Private Feiern und Treffen sind auf zwei Haushalte oder maximal 10 Personen\n                    beschränkt. Egal ob draußen, daheim oder im Lokal.</li>",ve=h(),ke=d("p"),ke.innerHTML='<span class="redtext"><strong>Rot - Inzidenz ab 50</strong></span>',xe=h(),$e=d("ul"),$e.innerHTML="<li>Maskenpflicht wie bei 35-50 und zusätzlich Maskenpflicht auch in der\n                    Grundschule</li> \n                <li>Allgemeine Sperrstunde ab 22 Uhr</li> \n                <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 22 Uhr</li> \n                <li>Auf öffentlichen Plätzen besteht ab 22 Uhr ein Alkoholverbot.</li> \n                <li>Private Feiern und Treffen sind auf 5 Personen oder zwei Haushalte beschränkt.\n                    Egal ob draußen, daheim oder im Lokal.</li>",_e=h(),Ee=d("center"),ze=u("Crafted with ❤️from\n                "),ye=d("a"),ye.textContent="Andre\n                    Bellmann",Re=u("\n                & "),Be=d("a"),Ne=u("Willy Woitas"),Ce=d("br"),Le=h(),Ae=d("a"),Ae.textContent="Corona\n                    Daten basierend auf API von ARCGIS/RKI_LANDKREISE",Te=h(),Ie=d("div"),p(f,"class","sorter svelte-1q8qjek"),p(P,"class","card-wrapper container svelte-1q8qjek"),p(se,"id","intxt-1"),p(se,"class","aditem "),p(ye,"href","https://www.andre-bellmann.de/?utm_source=social-media&utm_medium=corona&utm_campaign=website"),p(Be,"href","https://www.github.com/dutscher"),p(Ae,"href","https://services7.arcgis.com/mOBPykOjAyBO2ZKk/arcgis/rest/services/RKI_Landkreisdaten/FeatureServer/0/query?outFields=*&returnGeometry=false&f=json&outSR=4326&where=GEN%20=%20'BERLIN%20TREPTOW-K%C3%96PENICK'%20OR%20GEN%20=%20'BERLIN%20MITTE'%20OR%20GEN%20=%20'BERLIN%20FRIEDRICHSHAIN-KREUZBERG'%20OR%20GEN%20=%20'BERLIN%20PANKOW'%20OR%20GEN%20=%20'BERLIN%20LICHTENBERG'%20OR%20GEN%20=%20'BERLIN%20MARZAHN-HELLERSDORF'%20OR%20GEN%20=%20'BERLIN%20CHARLOTTENBURG-WILMERSDORF'%20OR%20GEN%20=%20'BERLIN%20STEGLITZ-ZEHLENDORF'%20OR%20GEN%20=%20'BERLIN%20TEMPELHOF-SCH%C3%96NEBERG'%20OR%20GEN%20=%20'BERLIN%20NEUK%C3%96LLN'%20OR%20GEN%20=%20'BERLIN%20REINICKENDORF'%20OR%20GEN%20=%20'BERLIN%20SPANDAU'"),p(Q,"class","content svelte-1q8qjek"),p(K,"class","container"),p(Ie,"class","container")},m(e,i){M(n,e,i),l(e,t,i),l(e,a,i),M(r,a,null),o(a,s),o(a,f);for(let e=0;e<Fe.length;e+=1)Fe[e].m(f,null);o(f,g),o(f,w),o(f,b),o(f,v),o(v,k),o(v,x),o(x,$),o(v,_),o(v,E),o(E,z),o(v,y),o(v,R),o(R,B),o(v,N),o(v,H),o(H,G),o(v,q),o(v,j),o(j,S),o(a,O),o(a,P);for(let e=0;e<Se.length;e+=1)Se[e].m(P,null);o(a,F),o(a,K),o(K,D),M(W,D,null),o(K,V),o(K,Q),o(Q,X),o(Q,ae),o(Q,se),o(Q,oe),o(Q,le),o(Q,ce),o(Q,de),o(Q,ue),o(Q,he),o(Q,pe),o(Q,me),o(Q,fe),o(Q,ge),o(Q,we),o(Q,be),o(Q,ve),o(Q,ke),o(Q,xe),o(Q,$e),o(Q,_e),o(Q,Ee),o(Ee,ze),o(Ee,ye),o(Ee,Re),o(Ee,Be),o(Be,Ne),o(Ee,Ce),o(Ee,Le),o(Ee,Ae),o(a,Te),o(a,Ie),Me=!0},p(e,[n]){if(22&n){let t;for(Pe=e[4],t=0;t<Pe.length;t+=1){const i=ne(e,Pe,t);Fe[t]?Fe[t].p(i,n):(Fe[t]=te(i),Fe[t].c(),Fe[t].m(f,g))}for(;t<Fe.length;t+=1)Fe[t].d(1);Fe.length=Pe.length}if((!Me||1&n)&&Ue!==(Ue=e[0].date+"")&&m($,Ue),(!Me||1&n)&&He!==(He=re(e[0].population)+"")&&m(z,He),(!Me||1&n)&&Ge!==(Ge=re(e[0].cases)+"")&&m(B,Ge),(!Me||1&n)&&qe!==(qe=re(e[0].newCases)+"")&&m(G,qe),(!Me||1&n)&&je!==(je=re(e[0].deaths)+"")&&m(S,je),8&n){const t=e[3];C={r:0,c:[],p:C},Se=function(e,n,t,i,a,r,s,o,l,c,d,u){let h=e.length,p=r.length,m=h;const f={};for(;m--;)f[e[m].key]=m;const g=[],w=new Map,b=new Map;for(m=p;m--;){const e=u(a,r,m),o=t(e);let l=s.get(o);l?i&&l.p(e,n):(l=c(o,e),l.c()),w.set(o,g[m]=l),o in f&&b.set(o,Math.abs(m-f[o]))}const v=new Set,k=new Set;function x(e){L(e,1),e.m(o,d),s.set(e.key,e),d=e.first,p--}for(;h&&p;){const n=g[p-1],t=e[h-1],i=n.key,a=t.key;n===t?(d=n.first,h--,p--):w.has(a)?!s.has(i)||v.has(i)?x(n):k.has(a)?h--:b.get(i)>b.get(a)?(k.add(i),x(n)):(v.add(a),h--):(l(t,s),h--)}for(;h--;){const n=e[h];w.has(n.key)||l(n,s)}for(;p;)x(g[p-1]);return g}(Se,n,De,1,e,t,Oe,P,T,ie,null,ee),C.r||i(C.c),C=C.p}},i(e){if(!Me){L(n.$$.fragment,e),L(r.$$.fragment,e);for(let e=0;e<Ke.length;e+=1)L(Se[e]);L(W.$$.fragment,e),Me=!0}},o(e){A(n.$$.fragment,e),A(r.$$.fragment,e);for(let e=0;e<Se.length;e+=1)A(Se[e]);A(W.$$.fragment,e),Me=!1},d(e){U(n,e),e&&c(t),e&&c(a),U(r),function(e,n){for(let t=0;t<e.length;t+=1)e[t]&&e[t].d(n)}(Fe,e);for(let e=0;e<Se.length;e+=1)Se[e].d();U(W)}}}function re(e){return e.toString().replace(/\B(?=(\d{3})+(?!\d))/g,".")}function se(e,n,t){let{data:i}=n,a="name",r="down";let s;return e.$$set=e=>{"data"in e&&t(0,i=e.data)},e.$$.update=()=>{6&e.$$.dirty&&t(3,s=function(e,n){let t=[],a="name";return a=e,console.log("data",i),t=i.locations.sort(((e,t)=>e[a]<t[a]?"up"===n?-1:1:e[a]>t[a]?"up"===n?1:-1:0)),t}(a,r))},[i,a,r,s,[{index:"name",label:"ABC"},{index:"population",label:"Einwohner"},{index:"incidence",label:"Inzidenz"},{index:"cases",label:"Fälle"},{index:"newCases",label:"Neue Fälle"},{index:"deaths",label:"Tote"}],function(e){t(2,r=a!==e.index?"down":"down"===r?"up":"down"),t(1,a=e.index)}]}var oe={date:"10.03.2021, 00:00 Uhr",population:3669491,cases:132339,deaths:2901,newCases:288,locations:[{id:410,name:"Berlin Marzahn-Hellersdorf",incidence:48.6753090691988,date:"10.03.2021, 00:00 Uhr",population:262967,cases:7427,deaths:217,newCases:19},{id:407,name:"Berlin Pankow",incidence:30.6504939251726,date:"10.03.2021, 00:00 Uhr",population:398036,cases:11370,deaths:194,newCases:45},{id:408,name:"Berlin Neukölln",incidence:77.2289745673776,date:"10.03.2021, 00:00 Uhr",population:321123,cases:15730,deaths:358,newCases:36},{id:414,name:"Berlin Friedrichshain-Kreuzberg",incidence:34.7445038094867,date:"10.03.2021, 00:00 Uhr",population:282059,cases:11104,deaths:135,newCases:null},{id:413,name:"Berlin Mitte",incidence:43.4390973195679,date:"10.03.2021, 00:00 Uhr",population:375238,cases:16780,deaths:266,newCases:54},{id:415,name:"Berlin Tempelhof-Schöneberg",incidence:81.3407768921971,date:"10.03.2021, 00:00 Uhr",population:341772,cases:13306,deaths:413,newCases:14},{id:406,name:"Berlin Treptow-Köpenick",incidence:48.782684398547,date:"10.03.2021, 00:00 Uhr",population:266488,cases:7209,deaths:167,newCases:16},{id:405,name:"Berlin Charlottenburg-Wilmersdorf",incidence:56.518969739923,date:"10.03.2021, 00:00 Uhr",population:334401,cases:11335,deaths:238,newCases:40},{id:412,name:"Berlin Steglitz-Zehlendorf",incidence:48.9779169162445,date:"10.03.2021, 00:00 Uhr",population:302177,cases:9756,deaths:216,newCases:7},{id:404,name:"Berlin Reinickendorf",incidence:66.2330710965809,date:"10.03.2021, 00:00 Uhr",population:259689,cases:10266,deaths:259,newCases:11},{id:409,name:"Berlin Lichtenberg",incidence:55.1441076077928,date:"10.03.2021, 00:00 Uhr",population:286522,cases:8142,deaths:218,newCases:31},{id:411,name:"Berlin Spandau",incidence:51.8787209385028,date:"10.03.2021, 00:00 Uhr",population:239019,cases:9914,deaths:220,newCases:15}]};return new class extends q{constructor(e){super(),G(this,e,se,ae,r,{data:0})}}({target:document.body,props:{name:"world",data:oe}})}();
//# sourceMappingURL=bundle.js.map
