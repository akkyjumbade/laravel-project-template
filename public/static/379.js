"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[379],{7995:(r,e,a)=>{a.d(e,{T:()=>or});var n=a(1636),t=a(7811),s=a(3952),i=a(9641),c=a(7354);var l,u,b,o;function d(r,e){let a,{elementType:n="a",onPress:t,onPressStart:l,onPressEnd:u,onClick:b,isDisabled:o,...d}=r;"a"!==n&&(a={role:"link",tabIndex:o?void 0:0});let{focusableProps:p}=(0,i.kc)(r,e),{pressProps:m,isPressed:v}=(0,c.r7)({onPress:t,onPressStart:l,onPressEnd:u,isDisabled:o,ref:e}),O=(0,s.zL)(d,{labelable:!0}),f=(0,s.dG)(p,m);return{isPressed:v,linkProps:(0,s.dG)(O,{...f,...a,"aria-disabled":o||void 0,onClick:r=>{m.onClick(r),b&&(b(r),console.warn("onClick is deprecated, please use onPress"))}})}}l={},u="useLink",b=()=>d,Object.defineProperty(l,u,{get:b,set:o,enumerable:!0,configurable:!0});var p=a(2592);function m(r,e,a,n){Object.defineProperty(r,e,{get:a,set:n,enumerable:!0,configurable:!0})}function v(r){return r&&r.__esModule?r.default:r}function O(r,e){let{isCurrent:a,isDisabled:n,"aria-current":t,elementType:s="a",...i}=r,{linkProps:c}=d({isDisabled:n||a,elementType:s,...i},e),l={};return/^h[1-6]$/.test(s)||(l=c),a&&(l["aria-current"]=t||"page"),{itemProps:{"aria-disabled":n,...l}}}m({},"useBreadcrumbItem",(()=>O));m({},"useBreadcrumbs",(()=>Q));var f,S;S=JSON.parse('{"breadcrumbs":"عناصر الواجهة"}');var h;h=JSON.parse('{"breadcrumbs":"Трохи хляб"}');var j;j=JSON.parse('{"breadcrumbs":"Popis cesty"}');var N;N=JSON.parse('{"breadcrumbs":"Brødkrummer"}');var y;y=JSON.parse('{"breadcrumbs":"Breadcrumbs"}');var g;g=JSON.parse('{"breadcrumbs":"Πλοηγήσεις breadcrumb"}');var P;P=JSON.parse('{"breadcrumbs":"Breadcrumbs"}');var x;x=JSON.parse('{"breadcrumbs":"Migas de pan"}');var J;J=JSON.parse('{"breadcrumbs":"Lingiread"}');var k;k=JSON.parse('{"breadcrumbs":"Navigointilinkit"}');var C;C=JSON.parse('{"breadcrumbs":"Chemin de navigation"}');var w;w=JSON.parse('{"breadcrumbs":"שבילי ניווט"}');var D;D=JSON.parse('{"breadcrumbs":"Navigacijski putovi"}');var E;E=JSON.parse('{"breadcrumbs":"Morzsamenü"}');var T;T=JSON.parse('{"breadcrumbs":"Breadcrumb"}');var B;B=JSON.parse('{"breadcrumbs":"パンくずリスト"}');var I;I=JSON.parse('{"breadcrumbs":"탐색 표시"}');var z;z=JSON.parse('{"breadcrumbs":"Naršymo kelias"}');var L;L=JSON.parse('{"breadcrumbs":"Atpakaļceļi"}');var R;R=JSON.parse('{"breadcrumbs":"Navigasjonsstier"}');var A;A=JSON.parse('{"breadcrumbs":"Broodkruimels"}');var F;F=JSON.parse('{"breadcrumbs":"Struktura nawigacyjna"}');var G;G=JSON.parse('{"breadcrumbs":"Caminho detalhado"}');var M;M=JSON.parse('{"breadcrumbs":"Categorias"}');var U;U=JSON.parse('{"breadcrumbs":"Miez de pâine"}');var K;K=JSON.parse('{"breadcrumbs":"Навигация"}');var H;H=JSON.parse('{"breadcrumbs":"Navigačné prvky Breadcrumbs"}');var W;W=JSON.parse('{"breadcrumbs":"Drobtine"}');var Z;Z=JSON.parse('{"breadcrumbs":"Putanje navigacije"}');var _;_=JSON.parse('{"breadcrumbs":"Sökvägar"}');var q;q=JSON.parse('{"breadcrumbs":"İçerik haritaları"}');var V;V=JSON.parse('{"breadcrumbs":"Навігаційна стежка"}');var X;X=JSON.parse('{"breadcrumbs":"导航栏"}');var $;function Q(r){let{"aria-label":e,...a}=r,n=(0,p.hX)(v(f));return{navProps:{...(0,s.zL)(a,{labelable:!0}),"aria-label":e||n("breadcrumbs")}}}$=JSON.parse('{"breadcrumbs":"導覽列"}'),f={"ar-AE":S,"bg-BG":h,"cs-CZ":j,"da-DK":N,"de-DE":y,"el-GR":g,"en-US":P,"es-ES":x,"et-EE":J,"fi-FI":k,"fr-FR":C,"he-IL":w,"hr-HR":D,"hu-HU":E,"it-IT":T,"ja-JP":B,"ko-KR":I,"lt-LT":z,"lv-LV":L,"nb-NO":R,"nl-NL":A,"pl-PL":F,"pt-BR":G,"pt-PT":M,"ro-RO":U,"ru-RU":K,"sk-SK":H,"sl-SI":W,"sr-SP":Z,"sv-SE":_,"tr-TR":q,"uk-UA":V,"zh-CN":X,"zh-TW":$};var Y,rr=a(7294),er=a(5893);function ar(r,e){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.push.apply(a,n)}return a}function nr(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?ar(Object(a),!0).forEach((function(e){tr(r,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):ar(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function tr(r,e,a){return e in r?Object.defineProperty(r,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[e]=a,r}var sr,ir,cr=t.Z.nav(Y||(sr=["\n   font-size: 13px;\n   ol {\n      display: flex;\n      list-style: none;\n      margin: 0;\n      padding: 0;\n   }\n"],ir||(ir=sr.slice(0)),Y=Object.freeze(Object.defineProperties(sr,{raw:{value:Object.freeze(ir)}}))));function lr(r){var e=Q(r).navProps,a=rr.Children.toArray(r.children);return(0,er.jsx)(cr,nr(nr({},e),{},{children:(0,er.jsx)("ol",{children:a.map((function(r,e){return rr.cloneElement(r,{isCurrent:e===a.length-1})}))})}))}lr.Item=function(r){var e=rr.useRef(),a=O(nr(nr({},r),{},{elementType:"span"}),e).itemProps;return(0,er.jsxs)("li",{children:[(0,er.jsx)("span",nr(nr({},a),{},{ref:e,style:{color:"var(--blue)",textDecoration:r.isCurrent?null:"underline",fontWeight:r.isCurrent?"bold":null,cursor:r.isCurrent?"default":"pointer"},children:r.children})),!r.isCurrent&&(0,er.jsx)("span",{"aria-hidden":"true",style:{padding:"0 5px"},children:"›"})]})};var ur=["children","className"];function br(r,e){if(null==r)return{};var a,n,t=function(r,e){if(null==r)return{};var a,n,t={},s=Object.keys(r);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(t[a]=r[a]);return t}(r,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(r,a)&&(t[a]=r[a])}return t}function or(r){var e=r.title,a=r.children,t=(0,n.qt)().props.errors;return(0,er.jsxs)(er.Fragment,{children:[(0,er.jsxs)("header",{className:"container mx-auto py-3",children:[(0,er.jsx)(lr,{title:e}),e&&(0,er.jsx)("h1",{className:"leading-10 text-3xl font-bold",children:e})]}),t&&Object.keys(t).length>0&&(0,er.jsx)("div",{className:"container mx-auto py-3 mb-4 bg-red-400 text-white px-4 rounded-md",children:(0,er.jsx)("ol",{className:"text-sm",children:Object.keys(t).map((function(r){return(0,er.jsx)("li",{children:t[r]},r)}))})}),a]})}or.Section=function(r){var e=r.children,a=r.className;br(r,ur);return(0,er.jsx)("div",{className:"container mx-auto ".concat(a),children:e})}},6379:(r,e,a)=>{a.r(e),a.d(e,{default:()=>l});var n=a(9680),t=(a(1636),a(7995)),s=a(5893),i=["team","errors"];function c(r,e){if(null==r)return{};var a,n,t=function(r,e){if(null==r)return{};var a,n,t={},s=Object.keys(r);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||(t[a]=r[a]);return t}(r,e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(r);for(n=0;n<s.length;n++)a=s[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(r,a)&&(t[a]=r[a])}return t}function l(r){r.team;var e=r.errors;c(r,i);return(0,s.jsx)(t.T,{title:"Category",children:(0,s.jsxs)(t.T.Section,{children:[(0,s.jsxs)("form",{onSubmit:function(r){r.preventDefault(),n.Inertia.post(route("admin.taxonomies.store"),new FormData(r.target))},children:[(0,s.jsx)("input",{name:"title"}),(0,s.jsx)("button",{children:"Submit"})]}),JSON.stringify(e)]})})}}}]);