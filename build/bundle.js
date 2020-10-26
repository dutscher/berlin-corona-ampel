var app=function(){"use strict";function l(){}function e(l){return l()}function n(){return Object.create(null)}function t(l){l.forEach(e)}function r(l){return"function"==typeof l}function u(l,e){return l!=l?e==e:l!==e||l&&"object"==typeof l||"function"==typeof l}function a(l){return null==l?"":l}function s(l,e){l.appendChild(e)}function _(l,e,n){l.insertBefore(e,n||null)}function i(l){l.parentNode.removeChild(l)}function c(l){return document.createElement(l)}function o(l){return document.createTextNode(l)}function d(){return o(" ")}function p(l,e,n){null==n?l.removeAttribute(e):l.getAttribute(e)!==n&&l.setAttribute(e,n)}function S(l,e){e=""+e,l.wholeText!==e&&(l.data=e)}let h;function B(l){h=l}const f=[],N=[],g=[],k=[],b=Promise.resolve();let E=!1;function m(l){g.push(l)}let G=!1;const D=new Set;function L(){if(!G){G=!0;do{for(let l=0;l<f.length;l+=1){const e=f[l];B(e),K(e.$$)}for(B(null),f.length=0;N.length;)N.pop()();for(let l=0;l<g.length;l+=1){const e=g[l];D.has(e)||(D.add(e),e())}g.length=0}while(f.length);for(;k.length;)k.pop()();E=!1,G=!1,D.clear()}}function K(l){if(null!==l.fragment){l.update(),t(l.before_update);const e=l.dirty;l.dirty=[-1],l.fragment&&l.fragment.p(l.ctx,e),l.after_update.forEach(m)}}const A=new Set;let v;function I(l,e){l&&l.i&&(A.delete(l),l.i(e))}function R(l,e,n,t){if(l&&l.o){if(A.has(l))return;A.add(l),v.c.push((()=>{A.delete(l),t&&(n&&l.d(1),t())})),l.o(e)}}function y(l){l&&l.c()}function Z(l,n,u){const{fragment:a,on_mount:s,on_destroy:_,after_update:i}=l.$$;a&&a.m(n,u),m((()=>{const n=s.map(e).filter(r);_?_.push(...n):t(n),l.$$.on_mount=[]})),i.forEach(m)}function $(l,e){const n=l.$$;null!==n.fragment&&(t(n.on_destroy),n.fragment&&n.fragment.d(e),n.on_destroy=n.fragment=null,n.ctx=[])}function F(l,e){-1===l.$$.dirty[0]&&(f.push(l),E||(E=!0,b.then(L)),l.$$.dirty.fill(0)),l.$$.dirty[e/31|0]|=1<<e%31}function w(e,r,u,a,s,_,c=[-1]){const o=h;B(e);const d=r.props||{},p=e.$$={fragment:null,ctx:null,props:_,update:l,not_equal:s,bound:n(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(o?o.$$.context:[]),callbacks:n(),dirty:c,skip_bound:!1};let S=!1;if(p.ctx=u?u(e,d,((l,n,...t)=>{const r=t.length?t[0]:n;return p.ctx&&s(p.ctx[l],p.ctx[l]=r)&&(!p.skip_bound&&p.bound[l]&&p.bound[l](r),S&&F(e,l)),n})):[],p.update(),S=!0,t(p.before_update),p.fragment=!!a&&a(p.ctx),r.target){if(r.hydrate){const l=function(l){return Array.from(l.childNodes)}(r.target);p.fragment&&p.fragment.l(l),l.forEach(i)}else p.fragment&&p.fragment.c();r.intro&&I(e.$$.fragment),Z(e,r.target,r.anchor),L()}B(o)}class z{$destroy(){$(this,1),this.$destroy=l}$on(l,e){const n=this.$$.callbacks[l]||(this.$$.callbacks[l]=[]);return n.push(e),()=>{const l=n.indexOf(e);-1!==l&&n.splice(l,1)}}$set(l){var e;this.$$set&&(e=l,0!==Object.keys(e).length)&&(this.$$.skip_bound=!0,this.$$set(l),this.$$.skip_bound=!1)}}function T(e){let n,t,r,u,h,B,f,N,g,k,b,E,m,G,D,L,K,A,v,I,R,y,Z,$,F=Number(e[0].cases7_per_100k).toFixed(2)+"",w=e[0].BEZ+"",z=e[0].GEN+"",T=e[0].last_update+"",W=e[0].cases+"";return{c(){n=c("div"),t=c("div"),r=c("div"),u=c("h3"),h=o(F),B=d(),f=c("div"),N=c("div"),g=o(w),k=d(),b=c("div"),E=o(z),m=d(),G=c("div"),D=c("div"),L=c("div"),K=o("Stand: "),A=o(T),v=d(),I=c("div"),R=c("div"),y=o("Fälle insgesamt: "),Z=o(W),p(u,"class","card__number svelte-1kqnspd"),p(r,"class","card__column svelte-1kqnspd"),p(N,"class","card__area svelte-1kqnspd"),p(b,"class","card__city svelte-1kqnspd"),p(f,"class","card__column svelte-1kqnspd"),p(t,"class","card__row svelte-1kqnspd"),p(L,"class","card__update svelte-1kqnspd"),p(D,"class","card__column svelte-1kqnspd"),p(R,"class","card__cases svelte-1kqnspd"),p(I,"class","card__column svelte-1kqnspd"),p(G,"class","card__row svelte-1kqnspd"),p(n,"class",$=a("card "+e[1])+" svelte-1kqnspd")},m(l,e){_(l,n,e),s(n,t),s(t,r),s(r,u),s(u,h),s(t,B),s(t,f),s(f,N),s(N,g),s(f,k),s(f,b),s(b,E),s(n,m),s(n,G),s(G,D),s(D,L),s(L,K),s(L,A),s(G,v),s(G,I),s(I,R),s(R,y),s(R,Z)},p(l,[e]){1&e&&F!==(F=Number(l[0].cases7_per_100k).toFixed(2)+"")&&S(h,F),1&e&&w!==(w=l[0].BEZ+"")&&S(g,w),1&e&&z!==(z=l[0].GEN+"")&&S(E,z),1&e&&T!==(T=l[0].last_update+"")&&S(A,T),1&e&&W!==(W=l[0].cases+"")&&S(Z,W),2&e&&$!==($=a("card "+l[1])+" svelte-1kqnspd")&&p(n,"class",$)},i:l,o:l,d(l){l&&i(n)}}}function W(l,e,n){let{data:t}=e,r="warning";return t.cases7_per_100k<35&&(r="info"),t.cases7_per_100k>=50&&(r="danger"),l.$$set=l=>{"data"in l&&n(0,t=l.data)},[t,r]}class V extends z{constructor(l){super(),w(this,l,W,T,u,{data:0})}}function x(e){let n;return{c(){n=c("header"),n.innerHTML='<div class="wrapper container svelte-1qnubhy"><h1 class="svelte-1qnubhy">🚦 Corona-Ampel für Coburg 🚦</h1> \n    <h2 class="svelte-1qnubhy">7-Tage Inzidenz pro 100.000 Einwohner in Coburg und Landkreis:</h2></div>',p(n,"class","svelte-1qnubhy")},m(l,e){_(l,n,e)},p:l,i:l,o:l,d(l){l&&i(n)}}}class U extends z{constructor(l){super(),w(this,l,null,x,u,{})}}function M(l,e,n){const t=l.slice();return t[2]=e[n],t}function C(e){let n,t;return n=new V({props:{data:e[2].attributes}}),{c(){y(n.$$.fragment)},m(l,e){Z(n,l,e),t=!0},p:l,i(l){t||(I(n.$$.fragment,l),t=!0)},o(l){R(n.$$.fragment,l),t=!1},d(l){$(n,l)}}}function q(l){let e,n,r,u,a,o,S,h,B;n=new U({});let f=l[0],N=[];for(let e=0;e<f.length;e+=1)N[e]=C(M(l,f,e));const g=l=>R(N[l],1,1,(()=>{N[l]=null}));return{c(){e=c("main"),y(n.$$.fragment),r=d(),u=c("div");for(let l=0;l<N.length;l+=1)N[l].c();a=d(),o=c("div"),o.innerHTML='<div class="content svelte-1j8phgf"><p>Einen Tag nach dem Treffen der <strong>Ministerpräsidenten und Kanzlerin Merkel</strong> hat\n        das bayerische Kabinett unter Leitung von Ministerpräsident Markus Söder die für Bayern\n        geltenden Bestimmungen beschlossen. </p> \n      <div id="intxt-1" class="aditem "></div> \n      <p>Um die weitere Ausbreitung des Corona-Virus eindämmen und einen zweiten Lockdown zu\n        verhindern, wird\n        <strong>in Bayern die Corona-Ampel eingeführt.nbsp;</strong></p> \n      <p><strong>Alle Regeln gelten für die Regionen als MUSS-Regeln. </strong>Nicht wie\n        bisher als &quot;Kann-Regeln&quot;</p> \n      <p><strong><span class="darkbluetext"><span class="greentext">Grün - Inzidenz bis 35 </span></span></strong></p> \n      <ul><li>Allgemeine AHA + L-Regeln  (Abstand, Hygiene, Alltagsmaske und Lüften)</li> \n        <li>Kontaktbeschränkungen: Bis zu 10 Personen oder zwei Haushalte in der Öffentlichkeit\n          treffen ist erlaubt</li> \n        <li>Maskenpflicht im ÖPNV, in Geschäften und im Einzelhandel, sowie in der Gastronomie bis zum\n          Platz </li> \n        <li>Empfehlung, aber keine Pflicht: Private Feierlichkeiten mit bis zu 25 Personen sind\n          erlaubt</li></ul> \n      <p><span class="yellowtext"><strong><span class="yellowtext"><span class="darkbluetext"><span class="yellowtext">Gelb -</span> </span></span></strong><span class="darkbluetext"><strong><span class="yellowtext">Inzidenz</span></strong></span></span><b style="background-color: initial;"><span class="darkbluetext"><span class="yellowtext"><span class="darkbluetext"> </span>35 bis 50</span></span></b></p> \n      <ul><li>Maskenpflicht wird ausgeweitet. \n          <ul><li>Maskenpflicht auch im Unterricht ab der 5. Klasse</li> \n            <li>Maskenpflicht an Hochschulen </li> \n            <li>in öffentlichen Gebäuden</li> \n            <li>am Arbeitsplatz, wenn der Abstand von 1,5m nicht eingehalten werden kann. Im\n              Betrieb, sobald man den Platz verlässt.</li> \n            <li>Öffentlichen Plätzen, die stark frequentiert sind.</li></ul></li> \n        <li>Allgemeine Sperrstunde ab 23 Uhr </li> \n        <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 23 Uhr </li> \n        <li>Auf öffentlichen Plätzen besteht ab 23 Uhr ein Alkoholverbot.</li> \n        <li>private Feiern und Treffen sind auf zwei Haushalte oder maximal 10 Personen\n          beschränkt. Egal ob draußen, daheim oder im Lokal.</li></ul> \n      <p><span class="redtext"><strong>Rot - Inzidenz </strong></span><span class="redtext"><strong>ab 50</strong></span></p> \n      <ul><li>Maskenpflicht wie bei 35-50 und zusätzlich Maskenpflicht auch in der\n          Grundschule  </li> \n        <li>Allgemeine Sperrstunde ab 22 Uhr</li> \n        <li>Generelles Alkoholverkaufsverbot an Tankstellen ab 22 Uhr </li> \n        <li>Auf öffentlichen Plätzen besteht ab 22 Uhr ein Alkoholverbot.</li> \n        <li>private Feiern und Treffen sind auf 5 Personen oder zwei Haushalte beschränkt.\n          Egal ob draußen, daheim oder im Lokal.</li></ul> \n      <center>Crafted with ❤️from\n        <a href="https://www.andre-bellmann.de/?utm_source=social-media&amp;utm_medium=corona&amp;utm_campaign=website">Andre Bellmann</a></center></div>',S=d(),h=c("div"),p(u,"class","card-wrapper container svelte-1j8phgf"),p(o,"class","container"),p(h,"class","container")},m(l,t){_(l,e,t),Z(n,e,null),s(e,r),s(e,u);for(let l=0;l<N.length;l+=1)N[l].m(u,null);s(e,a),s(e,o),s(e,S),s(e,h),B=!0},p(l,[e]){if(1&e){let n;for(f=l[0],n=0;n<f.length;n+=1){const t=M(l,f,n);N[n]?(N[n].p(t,e),I(N[n],1)):(N[n]=C(t),N[n].c(),I(N[n],1),N[n].m(u,null))}for(v={r:0,c:[],p:v},n=f.length;n<N.length;n+=1)g(n);v.r||t(v.c),v=v.p}},i(l){if(!B){I(n.$$.fragment,l);for(let l=0;l<f.length;l+=1)I(N[l]);B=!0}},o(l){R(n.$$.fragment,l),N=N.filter(Boolean);for(let l=0;l<N.length;l+=1)R(N[l]);B=!1},d(l){l&&i(e),$(n),function(l,e){for(let n=0;n<l.length;n+=1)l[n]&&l[n].d(e)}(N,l)}}}function O(l,e,n){let{data:t}=e,r=[];return t.forEach((l=>{r.push(l)})),l.$$set=l=>{"data"in l&&n(1,t=l.data)},[r,t]}var P={objectIdFieldName:"OBJECTID",uniqueIdField:{name:"OBJECTID",isSystemMaintained:!0},globalIdFieldName:"",geometryProperties:{shapeAreaFieldName:"Shape__Area",shapeLengthFieldName:"Shape__Length",units:"esriMeters"},geometryType:"esriGeometryPolygon",spatialReference:{wkid:4326,latestWkid:4326},fields:"",features:[{attributes:{OBJECTID:404,ADE:null,GF:null,BSG:null,RS:"11012",AGS:null,SDV_RS:null,GEN:"Berlin Reinickendorf",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:259689,KFL:null,DEBKG_ID:null,Shape__Area:89436651.1298828,Shape__Length:52066.3787897586,death_rate:1.19979134063641,cases:1917,deaths:23,cases_per_100k:738.190681931079,cases_per_population:.738190681931079,BL:"Berlin",BL_ID:"11",county:"SK Berlin Reinickendorf",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:130.925838214172,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:122.605560280704}},{attributes:{OBJECTID:405,ADE:null,GF:null,BSG:null,RS:"11004",AGS:null,SDV_RS:null,GEN:"Berlin Charlottenburg-Wilmersdorf",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:334401,KFL:null,DEBKG_ID:null,Shape__Area:64774504.5493164,Shape__Length:43768.285631833,death_rate:.988875154511743,cases:2427,deaths:24,cases_per_100k:725.775341580916,cases_per_population:.725775341580916,BL:"Berlin",BL_ID:"11",county:"SK Berlin Charlottenburg-Wilmersdorf",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:117.822614166824,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:122.605560280704}},{attributes:{OBJECTID:406,ADE:null,GF:null,BSG:null,RS:"11009",AGS:null,SDV_RS:null,GEN:"Berlin Treptow-Köpenick",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:266488,KFL:null,DEBKG_ID:null,Shape__Area:168005186.256348,Shape__Length:91502.1200065657,death_rate:1.10441767068273,cases:996,deaths:11,cases_per_100k:373.75041277656,cases_per_population:.37375041277656,BL:"Berlin",BL_ID:"11",county:"SK Berlin Treptow-Köpenick",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:61.5412326258593,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:122.605560280704}},{attributes:{OBJECTID:407,ADE:null,GF:null,BSG:null,RS:"11003",AGS:null,SDV_RS:null,GEN:"Berlin Pankow",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:398036,KFL:null,DEBKG_ID:null,Shape__Area:103362961.02002,Shape__Length:66428.5750865875,death_rate:1.95977307890665,cases:1939,deaths:38,cases_per_100k:487.141866564833,cases_per_population:.487141866564833,BL:"Berlin",BL_ID:"11",county:"SK Berlin Pankow",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:61.8034549638726,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:122.605560280704}},{attributes:{OBJECTID:408,ADE:null,GF:null,BSG:null,RS:"11008",AGS:null,SDV_RS:null,GEN:"Berlin Neukölln",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:321123,KFL:null,DEBKG_ID:null,Shape__Area:44996873.6523438,Shape__Length:40651.1686972196,death_rate:1.1948051948052,cases:3850,deaths:46,cases_per_100k:1198.91754872743,cases_per_population:1.19891754872743,BL:"Berlin",BL_ID:"11",county:"SK Berlin Neukölln",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:210.511237127207,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:122.605560280704}},{attributes:{OBJECTID:409,ADE:null,GF:null,BSG:null,RS:"11011",AGS:null,SDV_RS:null,GEN:"Berlin Lichtenberg",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:286522,KFL:null,DEBKG_ID:null,Shape__Area:52197995.7641602,Shape__Length:46276.6771709678,death_rate:1.25,cases:1280,deaths:16,cases_per_100k:446.737074290979,cases_per_population:.446737074290979,BL:"Berlin",BL_ID:"11",county:"SK Berlin Lichtenberg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:83.065174750979,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:122.605560280704}},{attributes:{OBJECTID:410,ADE:null,GF:null,BSG:null,RS:"11010",AGS:null,SDV_RS:null,GEN:"Berlin Marzahn-Hellersdorf",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:262967,KFL:null,DEBKG_ID:null,Shape__Area:61914765.7182617,Shape__Length:41111.1766110066,death_rate:.890207715133531,cases:1011,deaths:9,cases_per_100k:384.45888647625,cases_per_population:.38445888647625,BL:"Berlin",BL_ID:"11",county:"SK Berlin Marzahn-Hellersdorf",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:47.1542056607863,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:122.605560280704}},{attributes:{OBJECTID:411,ADE:null,GF:null,BSG:null,RS:"11005",AGS:null,SDV_RS:null,GEN:"Berlin Spandau",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:239019,KFL:null,DEBKG_ID:null,Shape__Area:92940423.4116211,Shape__Length:60759.065594004,death_rate:.632466619817287,cases:1423,deaths:9,cases_per_100k:595.350160447496,cases_per_population:.595350160447496,BL:"Berlin",BL_ID:"11",county:"SK Berlin Spandau",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:89.1142545153314,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:122.605560280704}},{attributes:{OBJECTID:412,ADE:null,GF:null,BSG:null,RS:"11006",AGS:null,SDV_RS:null,GEN:"Berlin Steglitz-Zehlendorf",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:302177,KFL:null,DEBKG_ID:null,Shape__Area:102687173.001465,Shape__Length:62943.9339297434,death_rate:.846432889963724,cases:1654,deaths:14,cases_per_100k:547.361314726137,cases_per_population:.547361314726137,BL:"Berlin",BL_ID:"11",county:"SK Berlin Steglitz-Zehlendorf",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:91.6681282824305,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:122.605560280704}},{attributes:{OBJECTID:413,ADE:null,GF:null,BSG:null,RS:"11001",AGS:null,SDV_RS:null,GEN:"Berlin Mitte",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:375238,KFL:null,DEBKG_ID:null,Shape__Area:39452105.0620117,Shape__Length:35771.879143497,death_rate:.498220640569395,cases:4215,deaths:21,cases_per_100k:1123.2870871287,cases_per_population:1.1232870871287,BL:"Berlin",BL_ID:"11",county:"SK Berlin Mitte",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:207.335078003827,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:122.605560280704}},{attributes:{OBJECTID:414,ADE:null,GF:null,BSG:null,RS:"11002",AGS:null,SDV_RS:null,GEN:"Berlin Friedrichshain-Kreuzberg",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:282059,KFL:null,DEBKG_ID:null,Shape__Area:20428655.7543945,Shape__Length:32780.5909146972,death_rate:.41952707856598,cases:2622,deaths:11,cases_per_100k:929.592744780347,cases_per_population:.929592744780347,BL:"Berlin",BL_ID:"11",county:"SK Berlin Friedrichshain-Kreuzberg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:172.304376034801,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:122.605560280704}},{attributes:{OBJECTID:415,ADE:null,GF:null,BSG:null,RS:"11007",AGS:null,SDV_RS:null,GEN:"Berlin Tempelhof-Schöneberg",BEZ:"Bezirk",IBZ:null,BEM:null,NBD:null,SN_L:null,SN_R:null,SN_K:null,SN_V1:null,SN_V2:null,SN_G:null,FK_S3:null,NUTS:null,RS_0:null,AGS_0:null,WSK:null,EWZ:341772,KFL:null,DEBKG_ID:null,Shape__Area:53122950.2021484,Shape__Length:46308.5674125585,death_rate:1.01449275362319,cases:2760,deaths:28,cases_per_100k:807.555914469295,cases_per_population:.807555914469295,BL:"Berlin",BL_ID:"11",county:"SK Berlin Tempelhof-Schöneberg",last_update:"26.10.2020, 00:00 Uhr",cases7_per_100k:164.729702842831,recovered:null,EWZ_BL:3669491,cases7_bl_per_100k:122.605560280704}}]};return new class extends z{constructor(l){super(),w(this,l,O,q,u,{data:1})}}({target:document.body,props:{name:"world",data:P.features}})}();
//# sourceMappingURL=bundle.js.map
