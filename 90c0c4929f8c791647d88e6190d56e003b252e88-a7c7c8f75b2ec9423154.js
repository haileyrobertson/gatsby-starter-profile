(self.webpackChunkgatsby_starter_scientist=self.webpackChunkgatsby_starter_scientist||[]).push([[450],{7814:function(e,t,r){"use strict";r.d(t,{G:function(){return k}});var n=r(3636),o=r(5697),a=r.n(o),i=r(7294);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){u(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e){return c="function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"==typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},c(e)}function u(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function f(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}function d(e){return function(e){if(Array.isArray(e))return m(e)}(e)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(e)||function(e,t){if(!e)return;if("string"==typeof e)return m(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(e);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return m(e,t)}(e)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function m(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}function p(e){return t=e,(t-=0)==t?e:(e=e.replace(/[\-_\s]+(.)?/g,(function(e,t){return t?t.toUpperCase():""}))).substr(0,1).toLowerCase()+e.substr(1);var t}var b=["style"];function y(e){return e.split(";").map((function(e){return e.trim()})).filter((function(e){return e})).reduce((function(e,t){var r,n=t.indexOf(":"),o=p(t.slice(0,n)),a=t.slice(n+1).trim();return o.startsWith("webkit")?e[(r=o,r.charAt(0).toUpperCase()+r.slice(1))]=a:e[o]=a,e}),{})}var v=!1;try{v=!0}catch(E){}function g(e){return e&&"object"===c(e)&&e.prefix&&e.iconName&&e.icon?e:n.Qc.icon?n.Qc.icon(e):null===e?null:e&&"object"===c(e)&&e.prefix&&e.iconName?e:Array.isArray(e)&&2===e.length?{prefix:e[0],iconName:e[1]}:"string"==typeof e?{prefix:"fas",iconName:e}:void 0}function h(e,t){return Array.isArray(t)&&t.length>0||!Array.isArray(t)&&t?u({},e,t):{}}var k=i.forwardRef((function(e,t){var r=e.icon,o=e.mask,a=e.symbol,i=e.className,l=e.title,c=e.titleId,f=e.maskId,m=g(r),p=h("classes",[].concat(d(function(e){var t,r=e.beat,n=e.fade,o=e.beatFade,a=e.bounce,i=e.shake,l=e.flash,s=e.spin,c=e.spinPulse,f=e.spinReverse,d=e.pulse,m=e.fixedWidth,p=e.inverse,b=e.border,y=e.listItem,v=e.flip,g=e.size,h=e.rotation,k=e.pull,w=(u(t={"fa-beat":r,"fa-fade":n,"fa-beat-fade":o,"fa-bounce":a,"fa-shake":i,"fa-flash":l,"fa-spin":s,"fa-spin-reverse":f,"fa-spin-pulse":c,"fa-pulse":d,"fa-fw":m,"fa-inverse":p,"fa-border":b,"fa-li":y,"fa-flip":!0===v,"fa-flip-horizontal":"horizontal"===v||"both"===v,"fa-flip-vertical":"vertical"===v||"both"===v},"fa-".concat(g),null!=g),u(t,"fa-rotate-".concat(h),null!=h&&0!==h),u(t,"fa-pull-".concat(k),null!=k),u(t,"fa-swap-opacity",e.swapOpacity),t);return Object.keys(w).map((function(e){return w[e]?e:null})).filter((function(e){return e}))}(e)),d(i.split(" ")))),b=h("transform","string"==typeof e.transform?n.Qc.transform(e.transform):e.transform),y=h("mask",g(o)),E=(0,n.qv)(m,s(s(s(s({},p),b),y),{},{symbol:a,title:l,titleId:c,maskId:f}));if(!E)return function(){var e;!v&&console&&"function"==typeof console.error&&(e=console).error.apply(e,arguments)}("Could not find icon",m),null;var O=E.abstract,x={ref:t};return Object.keys(e).forEach((function(t){k.defaultProps.hasOwnProperty(t)||(x[t]=e[t])})),w(O[0],x)}));k.displayName="FontAwesomeIcon",k.propTypes={beat:a().bool,border:a().bool,beatFade:a().bool,bounce:a().bool,className:a().string,fade:a().bool,flash:a().bool,mask:a().oneOfType([a().object,a().array,a().string]),maskId:a().string,fixedWidth:a().bool,inverse:a().bool,flip:a().oneOf([!0,!1,"horizontal","vertical","both"]),icon:a().oneOfType([a().object,a().array,a().string]),listItem:a().bool,pull:a().oneOf(["right","left"]),pulse:a().bool,rotation:a().oneOf([0,90,180,270]),shake:a().bool,size:a().oneOf(["2xs","xs","sm","lg","xl","2xl","1x","2x","3x","4x","5x","6x","7x","8x","9x","10x"]),spin:a().bool,spinPulse:a().bool,spinReverse:a().bool,symbol:a().oneOfType([a().bool,a().string]),title:a().string,titleId:a().string,transform:a().oneOfType([a().string,a().object]),swapOpacity:a().bool},k.defaultProps={border:!1,className:"",mask:null,maskId:null,fixedWidth:!1,inverse:!1,flip:!1,icon:null,listItem:!1,pull:null,pulse:!1,rotation:null,size:null,spin:!1,spinPulse:!1,spinReverse:!1,beat:!1,fade:!1,beatFade:!1,bounce:!1,shake:!1,symbol:!1,title:"",titleId:null,transform:null,swapOpacity:!1};var w=function e(t,r){var n=arguments.length>2&&void 0!==arguments[2]?arguments[2]:{};if("string"==typeof r)return r;var o=(r.children||[]).map((function(r){return e(t,r)})),a=Object.keys(r.attributes||{}).reduce((function(e,t){var n=r.attributes[t];switch(t){case"class":e.attrs.className=n,delete r.attributes.class;break;case"style":e.attrs.style=y(n);break;default:0===t.indexOf("aria-")||0===t.indexOf("data-")?e.attrs[t.toLowerCase()]=n:e.attrs[p(t)]=n}return e}),{attrs:{}}),i=n.style,l=void 0===i?{}:i,c=f(n,b);return a.attrs.style=s(s({},a.attrs.style),l),t.apply(void 0,[r.tag,s(s({},a.attrs),c)].concat(d(o)))}.bind(null,i.createElement)},5734:function(e,t,r){"use strict";r.d(t,{Z:function(){return D}});var n=r(7294),o=r(7896),a=r(1883),i=r(4904),l=r(5248),s=r.n(l);var c=e=>{let{links:t}=e;return n.createElement("div",{className:"footer__links"},n.createElement(i.Z,{"aria-label":"Hailey Robertson",className:"footer__icon",nav:!0,to:"/"},n.createElement("div",{className:"footer__icon-svg-container"},n.createElement(s(),null))),n.createElement("ul",null,t.map((e=>n.createElement("li",{key:e.text},n.createElement(i.Z,{to:e.link},e.text))))))};var u=e=>{let{author:t,links:r}=e;return n.createElement("footer",{className:"footer"},r.length>0&&n.createElement(c,{links:r}),n.createElement("small",null,"©"," ",t,","," ",(new Date).getFullYear(),"."))};var f=e=>e&&e.length>0?e.filter((e=>e.link&&e.text)):[];var d=()=>{const{site:e}=(0,a.useStaticQuery)("1440116640"),{author:t,footerLinks:r}=e.siteMetadata,o=f(r);return n.createElement(u,{author:t,links:o})},m=r(9417),p=r(7814),b=r(5697),y=r.n(b),v=r(2788);const g=v.default.button.withConfig({displayName:"button-defaults__Button",componentId:"sc-fwi9fh-0"})(["background-color:transparent;border-color:transparent;box-sizing:border-box;font-family:var(--font-system);transform-origin:center;transition-duration:0.3s;transition-property:background-color,border-color,color;transition-timing-function:var(--timing-function);&:focus{outline:none;}&::-moz-focus-inner{border:0;}",";",";",";&:active{animation-duration:0.3s;animation-name:click;animation-timing-function:var(--timing-function)}@keyframes click{0%{transform:scale(1);}50%{transform:scale(0.85);}100%{transform:scale(1);}}"],(e=>e.disabled&&(0,v.css)(["&{cursor:not-allowed;opacity:0.6;}"])),(e=>e.shadow&&(0,v.css)(["&{box-shadow:0 2px 5px 0 rgba(0,0,0,0.26);}"])),(e=>"primary"===e.kind&&(0,v.css)(["&{background-color:var(--color-primary);color:var(--color-background);}&:focus:not([disabled]),&:hover:not([disabled]){background-color:#fff;border-color:var(--color-primary);color:var(--color-primary);}"])));g.defaultProps={disabled:!1,kind:"primary",shadow:!1},g.propTypes={disabled:y().bool,kind:y().string,shadow:y().bool};var h=g;const k=(0,v.default)(h).withConfig({displayName:"button-style__Button",componentId:"sc-ylt764-0"})(["align-items:center;border-color:transparent;border-radius:50%;border-style:solid;border-width:2px;display:flex;font-size:1em;justify-content:center;height:34px;padding:2px;position:relative;width:34px;z-index:1;&::before{border-radius:50%;content:'';height:100%;left:0;position:absolute;top:0;transition:inherit;transition-property:background-color,border-color,color,opacity,transform;transform:scale(0);transform-origin:center center;width:100%;z-index:-1;}"," ",""],(e=>"transparent"===e.kind&&(0,v.css)(["&{background-color:transparent;border:none;}&::before{background-color:var(--color-primary);opacity:0;}&:focus:not([disabled]),&:hover:not([disabled]){box-shadow:none;color:var(--color-font-contrast);}&:focus:not([disabled])::before,&:hover:not([disabled])::before{opacity:1;transform:scale(1);}"])),(e=>e.square&&(0,v.css)(["&{border-radius:0;}&::before{border-radius:0;}"])));k.defaultProps={disabled:!1,kind:"transparent",square:!1},k.propTypes={disabled:y().bool,kind:y().string,square:y().bool};var w=k;const E=e=>{let{ariaLabel:t,icon:r,pulse:o,rotation:a,size:i,spin:l,...s}=e;return n.createElement(w,Object.assign({"aria-hidden":!1,"aria-label":t},s),n.createElement(p.G,{icon:r,pulse:o,rotation:a,size:i,spin:l}))};E.defaultProps={pulse:!1,rotation:null,size:"1x",spin:!1};var O=E;var x=e=>{let{isHomePage:t}=e;return n.createElement(i.Z,{"aria-label":"Hailey Robertson",className:"nav__icon",nav:!0,to:"/"},n.createElement("div",{className:"nav__icon-svg-container"},n.createElement(s(),null)),n.createElement("span",null,"Hailey Robertson"))};var j=(e,t,r)=>"development"===e&&"http://localhost:8000/"===t||t===r||t===r+"/";var N=e=>{let{location:t}=e;const{site:r}=(0,a.useStaticQuery)("1271460761"),o=j("production",t.href,r.siteMetadata.siteUrl);return n.createElement(x,{isHomePage:o})};var I=e=>{let{darkMode:t,toggle:r}=e;return n.createElement(O,{ariaLabel:"switch to "+(t?"light":"dark")+" mode",icon:t?m.DBF:m.enB,kind:"primary",onClick:r,type:"button"})};const P="undefined"!=typeof window&&window,S=P?P.localStorage:{getItem:()=>null,removeItem:()=>{},setItem:()=>{}},_=()=>{try{const e="test-storage";return S.setItem(e,e),S.removeItem(e),!0}catch(e){return!1}};var C=()=>{const{0:e,1:t}=(0,n.useState)(!1);return(0,n.useEffect)((()=>{const r=()=>{const r=(n="darkMode",_?JSON.parse(S.getItem(n)):null);var n;r!==e&&t(r)};return window.addEventListener("storage",r),window.removeEventListener("storage",r)})),(0,n.useEffect)((()=>{const r=document.body.className.includes("dark-mode");r!==e&&t(r)}),[]),{darkMode:e,toggle:()=>{const r=!e,n=!0===r?"dark-mode":"light-mode",o=!0===r?"light-mode":"dark-mode";var a,i;document.body.classList.contains(o)?document.body.classList.replace(o,n):document.body.classList.add(n),t(r),a="darkMode",i=r,_&&S.setItem(a,JSON.stringify(i))}}};var L=()=>{const e=C();return n.createElement(I,{darkMode:e.darkMode,toggle:e.toggle})};var z=e=>{const t={publications:n.createElement(i.Z,{key:"publications",to:"/publications"},"Publications"),cv:n.createElement(i.Z,{key:"cv",to:"/cv"},"CV")};return n.createElement(n.Fragment,null,e.map((e=>t[e])))};var A=(0,n.forwardRef)(((e,t)=>{let{handleClick:r,links:o,location:a,transform:l}=e;const s=z(o);return n.createElement("div",{className:"nav"},n.createElement(N,{location:a}),n.createElement("div",{className:"nav__menu",style:{transform:l}},n.createElement(O,{ariaLabel:"navigation menu",icon:m.xiG,kind:"primary",onClick:r,type:"button"}),n.createElement("div",{className:"nav__menu-links",ref:t},n.createElement(i.Z,{to:"/"},"Hailey Robertson"),s,n.createElement(L,null))),n.createElement("div",{className:"nav__right"},s,n.createElement(L,null)))}));var M=(e,t)=>{if(!e||e.isOpen)return{isOpen:!1,transform:"translateX(0)"};const{width:r}=t.current.getBoundingClientRect();return{isOpen:!0,transform:"translateX(-"+r+"px)"}};var R=e=>{if(!e)return!1;const t=e.getBoundingClientRect();return Boolean(window.getComputedStyle(e).getPropertyValue("opacity")>0&&(t.height||t.width))};var H=function(e,t,r,o){void 0===r&&(r=!0),void 0===o&&(o=!1);const a=(e,r)=>{e&&t(r)},i=t=>{const r=e.current,n=!r.contains(t.target)&&(o||R(r));a(n,t)},l=t=>{const r=e.current;"Escape"===t.key&&R(r)&&a(!0,t)};(0,n.useEffect)((()=>(window.addEventListener("click",i),()=>{window.removeEventListener("click",i)}))),(0,n.useEffect)((()=>(r&&window.addEventListener("keydown",l),()=>{r&&window.removeEventListener("keydown",l)})));return()=>{window.removeEventListener("click",i),r&&window.removeEventListener("keydown",l)}};var T=()=>{const e=[];return(0,a.useStaticQuery)("2713384646").publications&&(e.push("publications"),e.push("cv")),e};var B=e=>{let{location:t}=e;const{0:r,1:o}=(0,n.useState)(M()),a=(0,n.useRef)(),i=T();H(a,(()=>{r.isOpen&&o(M(r,a))}));return n.createElement(A,{handleClick:()=>{o(M(r,a))},links:i,location:t,ref:a,transform:r.transform})};var D=e=>{let{children:t}=e;return n.createElement(o.Location,null,(e=>{let{location:r}=e;return n.createElement("div",{className:"layout"},n.createElement(B,{location:r}),n.createElement("noscript",{className:"noscript-warning"},"This site relies on JavaScript which is currently disabled in your browser. Some functionality will be missing as a result."),n.createElement("main",null,t),n.createElement(d,null))}))}},5248:function(e,t,r){var n=r(7294);function o(e){return n.createElement("svg",e,[n.createElement("title",{key:0},"DNA"),n.createElement("desc",{key:1},"logo"),n.createElement("path",{d:"M.1 494.1c-1.1 9.5 6.3 17.8 15.9 17.8l32.3.1c8.1 0 14.9-5.9 16-13.9.7-4.9 1.8-11.1 3.4-18.1H380c1.6 6.9 2.9 13.2 3.5 18.1 1.1 8 7.9 14 16 13.9l32.3-.1c9.6 0 17.1-8.3 15.9-17.8-4.6-37.9-25.6-129-118.9-207.7-17.6 12.4-37.1 24.2-58.5 35.4 6.2 4.6 11.4 9.4 17 14.2H159.7c21.3-18.1 47-35.6 78.7-51.4C410.5 199.1 442.1 65.8 447.9 17.9 449 8.4 441.6.1 432 .1L399.6 0c-8.1 0-14.9 5.9-16 13.9-.7 4.9-1.8 11.1-3.4 18.1H67.8c-1.6-7-2.7-13.1-3.4-18.1-1.1-8-7.9-14-16-13.9L16.1.1C6.5.1-1 8.4.1 17.9 5.3 60.8 31.4 171.8 160 256 31.5 340.2 5.3 451.2.1 494.1zM224 219.6c-25.1-13.7-46.4-28.4-64.3-43.6h128.5c-17.8 15.2-39.1 30-64.2 43.6zM355.1 96c-5.8 10.4-12.8 21.1-21 32H114c-8.3-10.9-15.3-21.6-21-32h262.1zM92.9 416c5.8-10.4 12.8-21.1 21-32h219.4c8.3 10.9 15.4 21.6 21.2 32H92.9z",key:2})])}o.defaultProps={"aria-label":"DNA logo",viewBox:"0 0 448 512"},e.exports=o,o.default=o}}]);
//# sourceMappingURL=90c0c4929f8c791647d88e6190d56e003b252e88-a7c7c8f75b2ec9423154.js.map