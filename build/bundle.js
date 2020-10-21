var app=function(){"use strict";function e(){}function l(e){return e()}function a(){return Object.create(null)}function n(e){e.forEach(l)}function t(e){return"function"==typeof e}function s(e,l){return e!=e?l==l:e!==l||e&&"object"==typeof e||"function"==typeof e}function r(e){return null==e?"":e}function i(e,l){e.appendChild(l)}function u(e,l,a){e.insertBefore(l,a||null)}function p(e){e.parentNode.removeChild(e)}function _(e){return document.createElement(e)}function d(e){return document.createTextNode(e)}function o(){return d(" ")}function c(e,l,a){null==a?e.removeAttribute(l):e.getAttribute(l)!==a&&e.setAttribute(l,a)}function S(e,l){l=""+l,e.wholeText!==l&&(e.data=l)}let h;function y(e){h=e}const f=[],g=[],m=[],B=[],T=Promise.resolve();let E=!1;function D(e){m.push(e)}let N=!1;const b=new Set;function G(){if(!N){N=!0;do{for(let e=0;e<f.length;e+=1){const l=f[e];y(l),L(l.$$)}for(y(null),f.length=0;g.length;)g.pop()();for(let e=0;e<m.length;e+=1){const l=m[e];b.has(l)||(b.add(l),l())}m.length=0}while(f.length);for(;B.length;)B.pop()();E=!1,N=!1,b.clear()}}function L(e){if(null!==e.fragment){e.update(),n(e.before_update);const l=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,l),e.after_update.forEach(D)}}const k=new Set;let K;function F(e,l){e&&e.i&&(k.delete(e),e.i(l))}function q(e,l,a,n){if(e&&e.o){if(k.has(e))return;k.add(e),K.c.push((()=>{k.delete(e),n&&(a&&e.d(1),n())})),e.o(l)}}function V(e){e&&e.c()}function A(e,a,s){const{fragment:r,on_mount:i,on_destroy:u,after_update:p}=e.$$;r&&r.m(a,s),D((()=>{const a=i.map(l).filter(t);u?u.push(...a):n(a),e.$$.on_mount=[]})),p.forEach(D)}function I(e,l){const a=e.$$;null!==a.fragment&&(n(a.on_destroy),a.fragment&&a.fragment.d(l),a.on_destroy=a.fragment=null,a.ctx=[])}function R(e,l){-1===e.$$.dirty[0]&&(f.push(e),E||(E=!0,T.then(G)),e.$$.dirty.fill(0)),e.$$.dirty[l/31|0]|=1<<l%31}function v(l,t,s,r,i,u,_=[-1]){const d=h;y(l);const o=t.props||{},c=l.$$={fragment:null,ctx:null,props:u,update:e,not_equal:i,bound:a(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(d?d.$$.context:[]),callbacks:a(),dirty:_,skip_bound:!1};let S=!1;if(c.ctx=s?s(l,o,((e,a,...n)=>{const t=n.length?n[0]:a;return c.ctx&&i(c.ctx[e],c.ctx[e]=t)&&(!c.skip_bound&&c.bound[e]&&c.bound[e](t),S&&R(l,e)),a})):[],c.update(),S=!0,n(c.before_update),c.fragment=!!r&&r(c.ctx),t.target){if(t.hydrate){const e=function(e){return Array.from(e.childNodes)}(t.target);c.fragment&&c.fragment.l(e),e.forEach(p)}else c.fragment&&c.fragment.c();t.intro&&F(l.$$.fragment),A(l,t.target,t.anchor),G()}y(d)}class O{$destroy(){I(this,1),this.$destroy=e}$on(e,l){const a=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return a.push(l),()=>{const e=a.indexOf(l);-1!==e&&a.splice(e,1)}}$set(e){var l;this.$$set&&(l=e,0!==Object.keys(l).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}function Z(l){let a,n,t,s,h,y,f,g,m,B,T,E,D,N,b,G,L,k,K,F,q,V,A,I,R=Number(l[0].cases7_per_100k).toFixed(2)+"",v=l[0].BEZ+"",O=l[0].GEN+"",Z=l[0].last_update+"",$=l[0].cases+"";return{c(){a=_("div"),n=_("div"),t=_("div"),s=_("h3"),h=d(R),y=o(),f=_("div"),g=_("div"),m=d(v),B=o(),T=_("div"),E=d(O),D=o(),N=_("div"),b=_("div"),G=_("div"),L=d("Stand: "),k=d(Z),K=o(),F=_("div"),q=_("div"),V=d("Fälle insgesamt: "),A=d($),c(s,"class","card__number svelte-11pjaue"),c(t,"class","card__column svelte-11pjaue"),c(g,"class","card__area svelte-11pjaue"),c(T,"class","card__city svelte-11pjaue"),c(f,"class","card__column svelte-11pjaue"),c(n,"class","card__row svelte-11pjaue"),c(G,"class","card__update svelte-11pjaue"),c(b,"class","card__column svelte-11pjaue"),c(q,"class","card__cases svelte-11pjaue"),c(F,"class","card__column svelte-11pjaue"),c(N,"class","card__row svelte-11pjaue"),c(a,"class",I=r("card "+l[1])+" svelte-11pjaue")},m(e,l){u(e,a,l),i(a,n),i(n,t),i(t,s),i(s,h),i(n,y),i(n,f),i(f,g),i(g,m),i(f,B),i(f,T),i(T,E),i(a,D),i(a,N),i(N,b),i(b,G),i(G,L),i(G,k),i(N,K),i(N,F),i(F,q),i(q,V),i(q,A)},p(e,[l]){1&l&&R!==(R=Number(e[0].cases7_per_100k).toFixed(2)+"")&&S(h,R),1&l&&v!==(v=e[0].BEZ+"")&&S(m,v),1&l&&O!==(O=e[0].GEN+"")&&S(E,O),1&l&&Z!==(Z=e[0].last_update+"")&&S(k,Z),1&l&&$!==($=e[0].cases+"")&&S(A,$),2&l&&I!==(I=r("card "+e[1])+" svelte-11pjaue")&&c(a,"class",I)},i:e,o:e,d(e){e&&p(a)}}}function $(e,l,a){let{data:n}=l,t="warning";return n.cases7_per_100k<35&&(t="info"),n.cases7_per_100k>=50&&(t="danger"),e.$$set=e=>{"data"in e&&a(0,n=e.data)},[n,t]}class W extends O{constructor(e){super(),v(this,e,$,Z,s,{data:0})}}function w(l){let a;return{c(){a=_("header"),a.innerHTML='<div class="wrapper container svelte-neik8g"><h1 class="svelte-neik8g">🚦 Corona-Ampel für Coburg 🚦</h1> \n        <h2 class="svelte-neik8g">7-Tage Inzidenz pro 100.000 Einwohner in Coburg und Landkreis:</h2></div>',c(a,"class","svelte-neik8g")},m(e,l){u(e,a,l)},p:e,i:e,o:e,d(e){e&&p(a)}}}class x extends O{constructor(e){super(),v(this,e,null,w,s,{})}}function U(e,l,a){const n=e.slice();return n[2]=l[a],n}function z(l){let a,n;return a=new W({props:{data:l[2].attributes}}),{c(){V(a.$$.fragment)},m(e,l){A(a,e,l),n=!0},p:e,i(e){n||(F(a.$$.fragment,e),n=!0)},o(e){q(a.$$.fragment,e),n=!1},d(e){I(a,e)}}}function M(e){let l,a,t,s,r,d,S;a=new x({});let h=e[0],y=[];for(let l=0;l<h.length;l+=1)y[l]=z(U(e,h,l));const f=e=>q(y[e],1,1,(()=>{y[e]=null}));return{c(){l=_("main"),V(a.$$.fragment),t=o(),s=_("div");for(let e=0;e<y.length;e+=1)y[e].c();r=o(),d=_("div"),d.innerHTML='<div class="clearfix"><p>Einen Tag nach dem Treffen der <strong>Ministerpräsidenten und Kanzlerin Merkel</strong> hat das bayerische Kabinett unter Leitung von Ministerpräsident Markus Söder die für Bayern geltenden Bestimmungen beschlossen. </p><div id="intxt-1" class="aditem "></div><p>Um die weitere Ausbreitung des Corona-Virus eindämmen und einen zweiten Lockdown zu verhindern, wird <strong>in Bayern die Corona-Ampel eingeführt. </strong></p><p><strong>Alle Regeln gelten für die Regionen als MUSS-Regeln. </strong>Nicht wie bisher als &quot;Kann-Regeln&quot;</p><p><strong><span class="darkbluetext"><span class="greentext">Grün - Inzidenz bis 35 </span></span></strong></p><ul><li>Allgemeine AHA + L-Regeln  (Abstand, Hygiene, Alltagsmaske und Lüften)</li><li>Kontaktbeschränkungen: Bis zu 10 Personen oder zwei Haushalte in der Öffentlichkeit treffen ist erlaubt</li><li>Maskenpflicht im ÖPNV, in Geschäften und im Einzelhandel, sowie in der Gastronomie bis zum Platz </li><li>Empfehlung, aber keine Pflicht: Private Feierlichkeiten mit bis zu 25 Personen sind erlaubt</li></ul><p><span class="yellowtext"><strong><span class="yellowtext"><span class="darkbluetext"><span class="yellowtext">Gelb -</span> </span></span></strong><span class="darkbluetext"><strong><span class="yellowtext">Inzidenz</span></strong></span></span><b style="background-color: initial;"><span class="darkbluetext"><span class="yellowtext"><span class="darkbluetext"> </span>35 bis 50</span></span></b></p><ul><li>Maskenpflicht wird ausgeweitet. <ul><li>Maskenpflicht auch im Unterricht ab der 5. Klasse</li><li>Maskenpflicht an Hochschulen </li><li>in öffentlichen Gebäuden</li><li>am Arbeitsplatz, wenn der Abstand von 1,5m nicht eingehalten werden kann. Im Betrieb, sobald man den Platz verlässt.</li><li>Öffentlichen Plätzen, die stark frequentiert sind.</li></ul></li><li>Allgemeine Sperrstunde ab 23 Uhr </li><li>Generelles Alkoholverkaufsverbot an Tankstellen ab 23 Uhr </li><li>Auf öffentlichen Plätzen besteht ab 23 Uhr ein Alkoholverbot.</li><li>private Feiern und Treffen sind auf zwei Haushalte oder maximal 10 Personen beschränkt. Egal ob draußen, daheim oder im Lokal.</li></ul><p><span class="redtext"><strong>Rot - Inzidenz </strong></span><span class="redtext"><strong>ab 50</strong></span></p><ul><li>Maskenpflicht wie bei 35-50 und zusätzlich Maskenpflicht auch in der Grundschule  </li><li>Allgemeine Sperrstunde ab 22 Uhr</li><li>Generelles Alkoholverkaufsverbot an Tankstellen ab 22 Uhr </li><li>Auf öffentlichen Plätzen besteht ab 22 Uhr ein Alkoholverbot.</li><li>private Feiern und Treffen sind auf 5 Personen oder zwei Haushalte beschränkt. Egal ob draußen, daheim oder im Lokal.</li></ul><p><strong></strong></p></div>',c(s,"class","card-wrapper container svelte-opkbk7"),c(d,"class","container")},m(e,n){u(e,l,n),A(a,l,null),i(l,t),i(l,s);for(let e=0;e<y.length;e+=1)y[e].m(s,null);i(l,r),i(l,d),S=!0},p(e,[l]){if(1&l){let a;for(h=e[0],a=0;a<h.length;a+=1){const n=U(e,h,a);y[a]?(y[a].p(n,l),F(y[a],1)):(y[a]=z(n),y[a].c(),F(y[a],1),y[a].m(s,null))}for(K={r:0,c:[],p:K},a=h.length;a<y.length;a+=1)f(a);K.r||n(K.c),K=K.p}},i(e){if(!S){F(a.$$.fragment,e);for(let e=0;e<h.length;e+=1)F(y[e]);S=!0}},o(e){q(a.$$.fragment,e),y=y.filter(Boolean);for(let e=0;e<y.length;e+=1)q(y[e]);S=!1},d(e){e&&p(l),I(a),function(e,l){for(let a=0;a<e.length;a+=1)e[a]&&e[a].d(l)}(y,e)}}}function C(e,l,a){let{data:n}=l,t=[];return n.forEach((e=>{e.attributes.GEN.toLowerCase().includes("coburg")&&t.unshift(e),t.push(e)})),e.$$set=e=>{"data"in e&&a(1,n=e.data)},[t,n]}var j={objectIdFieldName:"OBJECTID",uniqueIdField:{name:"OBJECTID",isSystemMaintained:!0},globalIdFieldName:"",geometryProperties:{shapeAreaFieldName:"Shape__Area",shapeLengthFieldName:"Shape__Length",units:"esriMeters"},geometryType:"esriGeometryPolygon",spatialReference:{wkid:4326,latestWkid:4326},fields:[{name:"OBJECTID",type:"esriFieldTypeOID",alias:"OBJECTID",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"ADE",type:"esriFieldTypeSmallInteger",alias:"ADE",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"GF",type:"esriFieldTypeSmallInteger",alias:"GF",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"BSG",type:"esriFieldTypeSmallInteger",alias:"BSG",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"RS",type:"esriFieldTypeString",alias:"RS",sqlType:"sqlTypeOther",length:5,domain:null,defaultValue:null},{name:"AGS",type:"esriFieldTypeString",alias:"AGS",sqlType:"sqlTypeOther",length:5,domain:null,defaultValue:null},{name:"SDV_RS",type:"esriFieldTypeString",alias:"SDV_RS",sqlType:"sqlTypeOther",length:12,domain:null,defaultValue:null},{name:"GEN",type:"esriFieldTypeString",alias:"GEN",sqlType:"sqlTypeOther",length:33,domain:null,defaultValue:null},{name:"BEZ",type:"esriFieldTypeString",alias:"BEZ",sqlType:"sqlTypeOther",length:16,domain:null,defaultValue:null},{name:"IBZ",type:"esriFieldTypeSmallInteger",alias:"IBZ",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"BEM",type:"esriFieldTypeString",alias:"BEM",sqlType:"sqlTypeOther",length:13,domain:null,defaultValue:null},{name:"NBD",type:"esriFieldTypeString",alias:"NBD",sqlType:"sqlTypeOther",length:4,domain:null,defaultValue:null},{name:"SN_L",type:"esriFieldTypeString",alias:"SN_L",sqlType:"sqlTypeOther",length:2,domain:null,defaultValue:null},{name:"SN_R",type:"esriFieldTypeString",alias:"SN_R",sqlType:"sqlTypeOther",length:1,domain:null,defaultValue:null},{name:"SN_K",type:"esriFieldTypeString",alias:"SN_K",sqlType:"sqlTypeOther",length:2,domain:null,defaultValue:null},{name:"SN_V1",type:"esriFieldTypeString",alias:"SN_V1",sqlType:"sqlTypeOther",length:2,domain:null,defaultValue:null},{name:"SN_V2",type:"esriFieldTypeString",alias:"SN_V2",sqlType:"sqlTypeOther",length:2,domain:null,defaultValue:null},{name:"SN_G",type:"esriFieldTypeString",alias:"SN_G",sqlType:"sqlTypeOther",length:3,domain:null,defaultValue:null},{name:"FK_S3",type:"esriFieldTypeString",alias:"FK_S3",sqlType:"sqlTypeOther",length:1,domain:null,defaultValue:null},{name:"NUTS",type:"esriFieldTypeString",alias:"NUTS",sqlType:"sqlTypeOther",length:5,domain:null,defaultValue:null},{name:"RS_0",type:"esriFieldTypeString",alias:"RS_0",sqlType:"sqlTypeOther",length:12,domain:null,defaultValue:null},{name:"AGS_0",type:"esriFieldTypeString",alias:"AGS_0",sqlType:"sqlTypeOther",length:8,domain:null,defaultValue:null},{name:"WSK",type:"esriFieldTypeString",alias:"WSK",sqlType:"sqlTypeOther",length:23,domain:null,defaultValue:null},{name:"EWZ",type:"esriFieldTypeInteger",alias:"EWZ",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"KFL",type:"esriFieldTypeDouble",alias:"KFL",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"DEBKG_ID",type:"esriFieldTypeString",alias:"DEBKG_ID",sqlType:"sqlTypeOther",length:16,domain:null,defaultValue:null},{name:"Shape__Area",type:"esriFieldTypeDouble",alias:"Shape__Area",sqlType:"sqlTypeDouble",domain:null,defaultValue:null},{name:"Shape__Length",type:"esriFieldTypeDouble",alias:"Shape__Length",sqlType:"sqlTypeDouble",domain:null,defaultValue:null},{name:"death_rate",type:"esriFieldTypeDouble",alias:"Sterberate",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"cases",type:"esriFieldTypeInteger",alias:"Anzahl Fälle",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"deaths",type:"esriFieldTypeInteger",alias:"Anzahl Todesfälle",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"cases_per_100k",type:"esriFieldTypeDouble",alias:"Fälle/100.000 EW",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"cases_per_population",type:"esriFieldTypeDouble",alias:"Betroffenenrate",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"BL",type:"esriFieldTypeString",alias:"Bundesland",sqlType:"sqlTypeOther",length:256,domain:null,defaultValue:null},{name:"BL_ID",type:"esriFieldTypeString",alias:"Bundesland ID",sqlType:"sqlTypeOther",length:256,domain:null,defaultValue:null},{name:"county",type:"esriFieldTypeString",alias:"Landkreis",sqlType:"sqlTypeOther",length:256,domain:null,defaultValue:null},{name:"last_update",type:"esriFieldTypeString",alias:"Aktualisierung",sqlType:"sqlTypeOther",length:256,domain:null,defaultValue:null},{name:"cases7_per_100k",type:"esriFieldTypeDouble",alias:"Fälle der letzten 7 Tage/100.000 EW",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"recovered",type:"esriFieldTypeInteger",alias:"Genesene",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"EWZ_BL",type:"esriFieldTypeInteger",alias:"EWZ_BL",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"cases7_bl_per_100k",type:"esriFieldTypeDouble",alias:"Bundeslandweite Fälle der letzten 7 Tage/100.000 EW",sqlType:"sqlTypeOther",domain:null,defaultValue:null}],features:[{attributes:{OBJECTID:268,ADE:4,GF:4,BSG:1,RS:"09461",AGS:"09461",SDV_RS:"094610000000",GEN:"Bamberg",BEZ:"Kreisfreie Stadt",IBZ:40,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"61",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE241",RS_0:"094610000000",AGS_0:"09461000",WSK:"1972/07/01 00:00:00.000",EWZ:77373,KFL:54.62,DEBKG_ID:"DEBKGDL20000E5AI",Shape__Area:54954699.8215332,Shape__Length:40971.33209863,death_rate:7.38255033557047,cases:298,deaths:22,cases_per_100k:385.147273596733,cases_per_population:.385147273596733,BL:"Bayern",BL_ID:"9",county:"SK Bamberg",last_update:"21.10.2020, 00:00 Uhr",cases7_per_100k:19.3866077313792,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:54.9572917156359}},{attributes:{OBJECTID:270,ADE:4,GF:4,BSG:1,RS:"09463",AGS:"09463",SDV_RS:"094630000000",GEN:"Coburg",BEZ:"Kreisfreie Stadt",IBZ:40,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"63",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE243",RS_0:"094630000000",AGS_0:"09463000",WSK:"1977/01/01 00:00:00.000",EWZ:41072,KFL:48.29,DEBKG_ID:"DEBKGDL20000E24O",Shape__Area:48132641.3122559,Shape__Length:47477.3741286157,death_rate:2.5,cases:160,deaths:4,cases_per_100k:389.559797428905,cases_per_population:.389559797428905,BL:"Bayern",BL_ID:"9",county:"SK Coburg",last_update:"21.10.2020, 00:00 Uhr",cases7_per_100k:21.9127386053759,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:54.9572917156359}},{attributes:{OBJECTID:272,ADE:4,GF:4,BSG:1,RS:"09471",AGS:"09471",SDV_RS:"094610000000",GEN:"Bamberg",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"71",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE245",RS_0:"094710000000",AGS_0:"09471000",WSK:"1978/05/01 00:00:00.000",EWZ:147163,KFL:1167.82,DEBKG_ID:"DEBKGDL20000E64V",Shape__Area:1166583342.10889,Shape__Length:362711.190290549,death_rate:6.23973727422003,cases:609,deaths:38,cases_per_100k:413.826845062957,cases_per_population:.413826845062957,BL:"Bayern",BL_ID:"9",county:"LK Bamberg",last_update:"21.10.2020, 00:00 Uhr",cases7_per_100k:34.6554500791639,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:54.9572917156359}},{attributes:{OBJECTID:274,ADE:4,GF:4,BSG:1,RS:"09473",AGS:"09473",SDV_RS:"094630000000",GEN:"Coburg",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"73",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE247",RS_0:"094730000000",AGS_0:"09473000",WSK:"2013/01/01 00:00:00.000",EWZ:86747,KFL:590.41,DEBKG_ID:"DEBKGDL20000E1GL",Shape__Area:590710052.25708,Shape__Length:264831.82117682,death_rate:6.39658848614073,cases:469,deaths:30,cases_per_100k:540.652702687125,cases_per_population:.540652702687125,BL:"Bayern",BL_ID:"9",county:"LK Coburg",last_update:"21.10.2020, 00:00 Uhr",cases7_per_100k:13.8333314120373,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:54.9572917156359}},{attributes:{OBJECTID:277,ADE:4,GF:4,BSG:1,RS:"09476",AGS:"09476",SDV_RS:"094760145145",GEN:"Kronach",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"76",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE24A",RS_0:"094760000000",AGS_0:"09476000",WSK:"2009/01/01 00:00:00.000",EWZ:66743,KFL:651.51,DEBKG_ID:"DEBKGDL20000E0EC",Shape__Area:651427900.599854,Shape__Length:195015.277434266,death_rate:1.42857142857143,cases:210,deaths:3,cases_per_100k:314.639737500562,cases_per_population:.314639737500562,BL:"Bayern",BL_ID:"9",county:"LK Kronach",last_update:"21.10.2020, 00:00 Uhr",cases7_per_100k:16.4811291071723,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:54.9572917156359}},{attributes:{OBJECTID:279,ADE:4,GF:4,BSG:1,RS:"09478",AGS:"09478",SDV_RS:"094780139139",GEN:"Lichtenfels",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"78",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE24C",RS_0:"094780000000",AGS_0:"09478000",WSK:"2013/01/01 00:00:00.000",EWZ:66776,KFL:519.92,DEBKG_ID:"DEBKGDL20000E2H5",Shape__Area:519647169.088623,Shape__Length:187205.846382944,death_rate:3.94431554524362,cases:431,deaths:17,cases_per_100k:645.441475979394,cases_per_population:.645441475979394,BL:"Bayern",BL_ID:"9",county:"LK Lichtenfels",last_update:"21.10.2020, 00:00 Uhr",cases7_per_100k:46.4238648616269,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:54.9572917156359}},{attributes:{OBJECTID:294,ADE:4,GF:4,BSG:1,RS:"09662",AGS:"09662",SDV_RS:"096620000000",GEN:"Schweinfurt",BEZ:"Kreisfreie Stadt",IBZ:40,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"6",SN_K:"62",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE262",RS_0:"096620000000",AGS_0:"09662000",WSK:"1972/07/01 00:00:00.000",EWZ:53426,KFL:35.7,DEBKG_ID:"DEBKGDL20000DWGM",Shape__Area:35470859.157959,Shape__Length:39485.1982806469,death_rate:5.36723163841808,cases:354,deaths:19,cases_per_100k:662.598734698461,cases_per_population:.662598734698461,BL:"Bayern",BL_ID:"9",county:"SK Schweinfurt",last_update:"21.10.2020, 00:00 Uhr",cases7_per_100k:112.304870287875,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:54.9572917156359}},{attributes:{OBJECTID:299,ADE:4,GF:4,BSG:1,RS:"09674",AGS:"09674",SDV_RS:"096740147147",GEN:"Haßberge",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"6",SN_K:"74",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE267",RS_0:"096740000000",AGS_0:"09674000",WSK:"2009/01/01 00:00:00.000",EWZ:84384,KFL:956.19,DEBKG_ID:"DEBKGDL20000E1O5",Shape__Area:956058894.023438,Shape__Length:250001.715622342,death_rate:2.09059233449477,cases:287,deaths:6,cases_per_100k:340.11186954873,cases_per_population:.34011186954873,BL:"Bayern",BL_ID:"9",county:"LK Haßberge",last_update:"21.10.2020, 00:00 Uhr",cases7_per_100k:42.6621160409556,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:54.9572917156359}},{attributes:{OBJECTID:303,ADE:4,GF:4,BSG:1,RS:"09678",AGS:"09678",SDV_RS:"096620000000",GEN:"Schweinfurt",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"6",SN_K:"78",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE26B",RS_0:"096780000000",AGS_0:"09678000",WSK:"1972/07/01 00:00:00.000",EWZ:115445,KFL:841.38,DEBKG_ID:"DEBKGDL20000E09P",Shape__Area:840903919.659912,Shape__Length:324664.036452781,death_rate:2.80583613916947,cases:891,deaths:25,cases_per_100k:771.796093377799,cases_per_population:.771796093377799,BL:"Bayern",BL_ID:"9",county:"LK Schweinfurt",last_update:"21.10.2020, 00:00 Uhr",cases7_per_100k:112.607735285201,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:54.9572917156359}},{attributes:{OBJECTID:393,ADE:4,GF:4,BSG:1,RS:"16069",AGS:"16069",SDV_RS:"160690024024",GEN:"Hildburghausen",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"16",SN_R:"0",SN_K:"69",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DEG0E",RS_0:"160690000000",AGS_0:"16069000",WSK:"2009/01/01 00:00:00.000",EWZ:63197,KFL:938.43,DEBKG_ID:"DEBKGDL20000DWVH",Shape__Area:937297569.990723,Shape__Length:265821.005536133,death_rate:.961538461538462,cases:104,deaths:1,cases_per_100k:164.564773644319,cases_per_population:.164564773644319,BL:"Thüringen",BL_ID:"16",county:"LK Hildburghausen",last_update:"21.10.2020, 00:00 Uhr",cases7_per_100k:7.91176796366916,recovered:null,EWZ_BL:2133378,cases7_bl_per_100k:24.3744896591228}},{attributes:{OBJECTID:396,ADE:4,GF:4,BSG:1,RS:"16072",AGS:"16072",SDV_RS:"160720018018",GEN:"Sonneberg",BEZ:"Landkreis",IBZ:43,BEM:"--",NBD:"ja",SN_L:"16",SN_R:"0",SN_K:"72",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DEG0H",RS_0:"160720000000",AGS_0:"16072000",WSK:"2009/01/01 00:00:00.000",EWZ:57717,KFL:433.61,DEBKG_ID:"DEBKGDL20000DYQA",Shape__Area:432927012.661377,Shape__Length:161041.945432261,death_rate:7.53012048192771,cases:332,deaths:25,cases_per_100k:575.22047230452,cases_per_population:.57522047230452,BL:"Thüringen",BL_ID:"16",county:"LK Sonneberg",last_update:"21.10.2020, 00:00 Uhr",cases7_per_100k:12.1281424883483,recovered:null,EWZ_BL:2133378,cases7_bl_per_100k:24.3744896591228}}]};return new class extends O{constructor(e){super(),v(this,e,C,M,s,{data:1})}}({target:document.body,props:{name:"world",data:j.features}})}();
//# sourceMappingURL=bundle.js.map
