var app=function(){"use strict";function e(){}function l(e){return e()}function t(){return Object.create(null)}function n(e){e.forEach(l)}function a(e){return"function"==typeof e}function s(e,l){return e!=e?l==l:e!==l||e&&"object"==typeof e||"function"==typeof e}function i(e,l){e.appendChild(l)}function u(e){e.parentNode.removeChild(e)}function r(e){return document.createElement(e)}function p(e){return document.createTextNode(e)}function d(){return p(" ")}function y(e,l,t){null==t?e.removeAttribute(l):e.getAttribute(l)!==t&&e.setAttribute(l,t)}function o(e,l){l=""+l,e.wholeText!==l&&(e.data=l)}let T;function m(e){T=e}const h=[],f=[],c=[],g=[],_=Promise.resolve();let S=!1;function q(e){c.push(e)}let F=!1;const V=new Set;function O(){if(!F){F=!0;do{for(let e=0;e<h.length;e+=1){const l=h[e];m(l),b(l.$$)}for(m(null),h.length=0;f.length;)f.pop()();for(let e=0;e<c.length;e+=1){const l=c[e];V.has(l)||(V.add(l),l())}c.length=0}while(h.length);for(;g.length;)g.pop()();S=!1,F=!1,V.clear()}}function b(e){if(null!==e.fragment){e.update(),n(e.before_update);const l=e.dirty;e.dirty=[-1],e.fragment&&e.fragment.p(e.ctx,l),e.after_update.forEach(q)}}const E=new Set;function B(e,l){-1===e.$$.dirty[0]&&(h.push(e),S||(S=!0,_.then(O)),e.$$.dirty.fill(0)),e.$$.dirty[l/31|0]|=1<<l%31}function $(s,i,r,p,d,y,o=[-1]){const h=T;m(s);const f=i.props||{},c=s.$$={fragment:null,ctx:null,props:y,update:e,not_equal:d,bound:t(),on_mount:[],on_destroy:[],before_update:[],after_update:[],context:new Map(h?h.$$.context:[]),callbacks:t(),dirty:o,skip_bound:!1};let g=!1;if(c.ctx=r?r(s,f,((e,l,...t)=>{const n=t.length?t[0]:l;return c.ctx&&d(c.ctx[e],c.ctx[e]=n)&&(!c.skip_bound&&c.bound[e]&&c.bound[e](n),g&&B(s,e)),l})):[],c.update(),g=!0,n(c.before_update),c.fragment=!!p&&p(c.ctx),i.target){if(i.hydrate){const e=function(e){return Array.from(e.childNodes)}(i.target);c.fragment&&c.fragment.l(e),e.forEach(u)}else c.fragment&&c.fragment.c();i.intro&&((_=s.$$.fragment)&&_.i&&(E.delete(_),_.i(S))),function(e,t,s){const{fragment:i,on_mount:u,on_destroy:r,after_update:p}=e.$$;i&&i.m(t,s),q((()=>{const t=u.map(l).filter(a);r?r.push(...t):n(t),e.$$.on_mount=[]})),p.forEach(q)}(s,i.target,i.anchor),O()}var _,S;m(h)}function D(l){let t,n,a,s,T,m,h,f,c,g,_,S,q,F,V,O,b=l[0].cases7_per_100k+"",E=l[0].BEZ+"",B=l[0].GEN+"",$=l[0].last_update+"";return{c(){t=r("main"),n=r("h3"),n.innerHTML="<strong>7-Tage Inzidenz auf 100.000:</strong>",a=d(),s=r("h1"),T=p(b),m=d(),h=r("h2"),f=p("Bezirk: "),c=p(E),g=p(", "),_=p(B),S=d(),q=r("p"),F=r("small"),V=p("Zuletzt aktualisiert: "),O=p($),y(s,"class","svelte-1tky8bj"),y(t,"class","svelte-1tky8bj")},m(e,l){!function(e,l,t){e.insertBefore(l,t||null)}(e,t,l),i(t,n),i(t,a),i(t,s),i(s,T),i(t,m),i(t,h),i(h,f),i(h,c),i(h,g),i(h,_),i(t,S),i(t,q),i(q,F),i(F,V),i(F,O)},p(e,[l]){1&l&&b!==(b=e[0].cases7_per_100k+"")&&o(T,b),1&l&&E!==(E=e[0].BEZ+"")&&o(c,E),1&l&&B!==(B=e[0].GEN+"")&&o(_,B),1&l&&$!==($=e[0].last_update+"")&&o(O,$)},i:e,o:e,d(e){e&&u(t)}}}function N(e,l,t){let{name:n}=l,{data:a}=l;return e.$$set=e=>{"name"in e&&t(1,n=e.name),"data"in e&&t(0,a=e.data)},[a,n]}var I={objectIdFieldName:"OBJECTID",uniqueIdField:{name:"OBJECTID",isSystemMaintained:!0},globalIdFieldName:"",geometryProperties:{shapeAreaFieldName:"Shape__Area",shapeLengthFieldName:"Shape__Length",units:"esriMeters"},geometryType:"esriGeometryPolygon",spatialReference:{wkid:25832,latestWkid:25832},fields:[{name:"OBJECTID",type:"esriFieldTypeOID",alias:"OBJECTID",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"ADE",type:"esriFieldTypeSmallInteger",alias:"ADE",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"GF",type:"esriFieldTypeSmallInteger",alias:"GF",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"BSG",type:"esriFieldTypeSmallInteger",alias:"BSG",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"RS",type:"esriFieldTypeString",alias:"RS",sqlType:"sqlTypeOther",length:5,domain:null,defaultValue:null},{name:"AGS",type:"esriFieldTypeString",alias:"AGS",sqlType:"sqlTypeOther",length:5,domain:null,defaultValue:null},{name:"SDV_RS",type:"esriFieldTypeString",alias:"SDV_RS",sqlType:"sqlTypeOther",length:12,domain:null,defaultValue:null},{name:"GEN",type:"esriFieldTypeString",alias:"GEN",sqlType:"sqlTypeOther",length:33,domain:null,defaultValue:null},{name:"BEZ",type:"esriFieldTypeString",alias:"BEZ",sqlType:"sqlTypeOther",length:16,domain:null,defaultValue:null},{name:"IBZ",type:"esriFieldTypeSmallInteger",alias:"IBZ",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"BEM",type:"esriFieldTypeString",alias:"BEM",sqlType:"sqlTypeOther",length:13,domain:null,defaultValue:null},{name:"NBD",type:"esriFieldTypeString",alias:"NBD",sqlType:"sqlTypeOther",length:4,domain:null,defaultValue:null},{name:"SN_L",type:"esriFieldTypeString",alias:"SN_L",sqlType:"sqlTypeOther",length:2,domain:null,defaultValue:null},{name:"SN_R",type:"esriFieldTypeString",alias:"SN_R",sqlType:"sqlTypeOther",length:1,domain:null,defaultValue:null},{name:"SN_K",type:"esriFieldTypeString",alias:"SN_K",sqlType:"sqlTypeOther",length:2,domain:null,defaultValue:null},{name:"SN_V1",type:"esriFieldTypeString",alias:"SN_V1",sqlType:"sqlTypeOther",length:2,domain:null,defaultValue:null},{name:"SN_V2",type:"esriFieldTypeString",alias:"SN_V2",sqlType:"sqlTypeOther",length:2,domain:null,defaultValue:null},{name:"SN_G",type:"esriFieldTypeString",alias:"SN_G",sqlType:"sqlTypeOther",length:3,domain:null,defaultValue:null},{name:"FK_S3",type:"esriFieldTypeString",alias:"FK_S3",sqlType:"sqlTypeOther",length:1,domain:null,defaultValue:null},{name:"NUTS",type:"esriFieldTypeString",alias:"NUTS",sqlType:"sqlTypeOther",length:5,domain:null,defaultValue:null},{name:"RS_0",type:"esriFieldTypeString",alias:"RS_0",sqlType:"sqlTypeOther",length:12,domain:null,defaultValue:null},{name:"AGS_0",type:"esriFieldTypeString",alias:"AGS_0",sqlType:"sqlTypeOther",length:8,domain:null,defaultValue:null},{name:"WSK",type:"esriFieldTypeString",alias:"WSK",sqlType:"sqlTypeOther",length:23,domain:null,defaultValue:null},{name:"EWZ",type:"esriFieldTypeInteger",alias:"EWZ",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"KFL",type:"esriFieldTypeDouble",alias:"KFL",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"DEBKG_ID",type:"esriFieldTypeString",alias:"DEBKG_ID",sqlType:"sqlTypeOther",length:16,domain:null,defaultValue:null},{name:"Shape__Area",type:"esriFieldTypeDouble",alias:"Shape__Area",sqlType:"sqlTypeDouble",domain:null,defaultValue:null},{name:"Shape__Length",type:"esriFieldTypeDouble",alias:"Shape__Length",sqlType:"sqlTypeDouble",domain:null,defaultValue:null},{name:"death_rate",type:"esriFieldTypeDouble",alias:"Sterberate",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"cases",type:"esriFieldTypeInteger",alias:"Anzahl Fälle",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"deaths",type:"esriFieldTypeInteger",alias:"Anzahl Todesfälle",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"cases_per_100k",type:"esriFieldTypeDouble",alias:"Fälle/100.000 EW",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"cases_per_population",type:"esriFieldTypeDouble",alias:"Betroffenenrate",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"BL",type:"esriFieldTypeString",alias:"Bundesland",sqlType:"sqlTypeOther",length:256,domain:null,defaultValue:null},{name:"BL_ID",type:"esriFieldTypeString",alias:"Bundesland ID",sqlType:"sqlTypeOther",length:256,domain:null,defaultValue:null},{name:"county",type:"esriFieldTypeString",alias:"Landkreis",sqlType:"sqlTypeOther",length:256,domain:null,defaultValue:null},{name:"last_update",type:"esriFieldTypeString",alias:"Aktualisierung",sqlType:"sqlTypeOther",length:256,domain:null,defaultValue:null},{name:"cases7_per_100k",type:"esriFieldTypeDouble",alias:"Fälle der letzten 7 Tage/100.000 EW",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"recovered",type:"esriFieldTypeInteger",alias:"Genesene",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"EWZ_BL",type:"esriFieldTypeInteger",alias:"EWZ_BL",sqlType:"sqlTypeOther",domain:null,defaultValue:null},{name:"cases7_bl_per_100k",type:"esriFieldTypeDouble",alias:"Bundeslandweite Fälle der letzten 7 Tage/100.000 EW",sqlType:"sqlTypeOther",domain:null,defaultValue:null}],features:[{attributes:{OBJECTID:270,ADE:4,GF:4,BSG:1,RS:"09463",AGS:"09463",SDV_RS:"094630000000",GEN:"Coburg",BEZ:"Kreisfreie Stadt",IBZ:40,BEM:"--",NBD:"ja",SN_L:"09",SN_R:"4",SN_K:"63",SN_V1:"00",SN_V2:"00",SN_G:"000",FK_S3:"R",NUTS:"DE243",RS_0:"094630000000",AGS_0:"09463000",WSK:"1977/01/01 00:00:00.000",EWZ:41072,KFL:48.29,DEBKG_ID:"DEBKGDL20000E24O",Shape__Area:48132641.3122559,Shape__Length:47477.3741286157,death_rate:2.53164556962025,cases:158,deaths:4,cases_per_100k:384.690299961044,cases_per_population:.384690299961044,BL:"Bayern",BL_ID:"9",county:"SK Coburg",last_update:"20.10.2020, 00:00 Uhr",cases7_per_100k:17.0432411375146,recovered:null,EWZ_BL:13124737,cases7_bl_per_100k:50.9343539607689}}]};return new class extends class{$destroy(){!function(e,l){const t=e.$$;null!==t.fragment&&(n(t.on_destroy),t.fragment&&t.fragment.d(l),t.on_destroy=t.fragment=null,t.ctx=[])}(this,1),this.$destroy=e}$on(e,l){const t=this.$$.callbacks[e]||(this.$$.callbacks[e]=[]);return t.push(l),()=>{const e=t.indexOf(l);-1!==e&&t.splice(e,1)}}$set(e){var l;this.$$set&&(l=e,0!==Object.keys(l).length)&&(this.$$.skip_bound=!0,this.$$set(e),this.$$.skip_bound=!1)}}{constructor(e){super(),$(this,e,N,D,s,{name:1,data:0})}}({target:document.body,props:{name:"world",data:I.features[0].attributes}})}();
//# sourceMappingURL=bundle.js.map
