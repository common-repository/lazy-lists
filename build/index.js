!function(t){var e={};function n(r){if(e[r])return e[r].exports;var o=e[r]={i:r,l:!1,exports:{}};return t[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=t,n.c=e,n.d=function(t,e,r){n.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:r})},n.r=function(t){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},n.t=function(t,e){if(1&e&&(t=n(t)),8&e)return t;if(4&e&&"object"==typeof t&&t&&t.__esModule)return t;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var o in t)n.d(r,o,function(e){return t[e]}.bind(null,o));return r},n.n=function(t){var e=t&&t.__esModule?function(){return t.default}:function(){return t};return n.d(e,"a",e),e},n.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},n.p="",n(n.s=20)}([function(t,e){!function(){t.exports=this.wp.element}()},function(t,e){!function(){t.exports=this.wp.hooks}()},function(t,e){!function(){t.exports=this.wp.components}()},function(t,e){!function(){t.exports=this.wp.i18n}()},function(t,e){!function(){t.exports=this.wp.compose}()},function(t,e){!function(){t.exports=this.wp.blockEditor}()},function(t,e){!function(){t.exports=this.lodash}()},function(t,e){t.exports=function(t,e){(null==e||e>t.length)&&(e=t.length);for(var n=0,r=new Array(e);n<e;n++)r[n]=t[n];return r}},function(t,e){t.exports=function(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}},function(t,e){function n(){return t.exports=n=Object.assign||function(t){for(var e=1;e<arguments.length;e++){var n=arguments[e];for(var r in n)Object.prototype.hasOwnProperty.call(n,r)&&(t[r]=n[r])}return t},n.apply(this,arguments)}t.exports=n},function(t,e,n){var r;
/*!
  Copyright (c) 2017 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/!function(){"use strict";var n={}.hasOwnProperty;function o(){for(var t=[],e=0;e<arguments.length;e++){var r=arguments[e];if(r){var i=typeof r;if("string"===i||"number"===i)t.push(r);else if(Array.isArray(r)&&r.length){var l=o.apply(null,r);l&&t.push(l)}else if("object"===i)for(var c in r)n.call(r,c)&&r[c]&&t.push(c)}}return t.join(" ")}t.exports?(o.default=o,t.exports=o):void 0===(r=function(){return o}.apply(e,[]))||(t.exports=r)}()},function(t,e){function n(e){return"function"==typeof Symbol&&"symbol"==typeof Symbol.iterator?t.exports=n=function(t){return typeof t}:t.exports=n=function(t){return t&&"function"==typeof Symbol&&t.constructor===Symbol&&t!==Symbol.prototype?"symbol":typeof t},n(e)}t.exports=n},function(t,e,n){var r=n(14),o=n(15),i=n(16),l=n(17);t.exports=function(t){return r(t)||o(t)||i(t)||l()}},function(t,e){!function(){t.exports=this.wp.data}()},function(t,e,n){var r=n(7);t.exports=function(t){if(Array.isArray(t))return r(t)}},function(t,e){t.exports=function(t){if("undefined"!=typeof Symbol&&Symbol.iterator in Object(t))return Array.from(t)}},function(t,e,n){var r=n(7);t.exports=function(t,e){if(t){if("string"==typeof t)return r(t,e);var n=Object.prototype.toString.call(t).slice(8,-1);return"Object"===n&&t.constructor&&(n=t.constructor.name),"Map"===n||"Set"===n?Array.from(n):"Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)?r(t,e):void 0}}},function(t,e){t.exports=function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}},,,function(t,e,n){"use strict";n.r(e);var r=n(8),o=n.n(r),i=n(9),l=n.n(i),c=n(0),u=n(10),a=n.n(u),s=n(6),f=n(3),p=n(4),b=n(1),m=n(5),d=n(2),y=Object(p.createHigherOrderComponent)((function(t){return function(e){var n=e.name,r=e.isSelected,o=e.attributes,i=o.columns,l=o.showColumnsOnMobile,u=e.setAttributes;return"core/list"===n&&r?Object(c.createElement)(c.Fragment,null,Object(c.createElement)(t,e),Object(c.createElement)(m.InspectorControls,null,Object(c.createElement)(d.PanelBody,{title:Object(f.__)("Layout Settings","lazy-lists")},Object(c.createElement)(d.RangeControl,{label:Object(f.__)("Columns","lazy-lists"),value:i||1,onChange:function(t){u({columns:t})},min:1,max:5}),Object(c.createElement)(d.ToggleControl,{label:Object(f.__)("Show columns on mobile","lazy-lists"),checked:l,onChange:function(){return u({showColumnsOnMobile:!l})}})))):Object(c.createElement)(t,e)}}),"addLayoutSettings"),O=Object(p.createHigherOrderComponent)((function(t){return function(e){var n=e.name,r=e.block.attributes.columns;return"core/list"!==n?Object(c.createElement)(t,e):Object(c.createElement)(t,l()({},e,{className:"wp-block-list--".concat(r,"-columns")}))}}),"addColumnsClassToEditor"),h=function(t){return"core/list"!==t.name||(t.attributes=Object(s.assign)(t.attributes,{columns:{type:"number",default:1},showColumnsOnMobile:{type:"boolean",default:!1}})),t},v=function(t,e,n){var r=n.columns,i=n.showColumnsOnMobile;if("core/list"!==e.name)return t;var l=a()(o()({"wp-block-list--show-columns-on-mobile":i},"wp-block-list--".concat(r,"-columns"),Number(r)>1));return l?Object(s.assign)(t,{className:l}):t},j=n(11),g=n.n(j),x=n(12),w=n.n(x),S=n(13),E=Object(c.createElement)("svg",{focusable:"false",viewBox:"0 0 24 24",width:"24",height:"24",xmlns:"http://www.w3.org/2000/svg","aria-hidden":"true"},Object(c.createElement)("g",null,Object(c.createElement)("path",{d:"M6.5 5h1l.071 11.75 2.286-2.25 1.143.563L7 19l-4-3.938 1.143-.562 2.286 2.25zM14.68 11.112l.588-1.836h2.94l.588 1.836h1.692L17.644 3h-1.812L13 11.112h1.68zm3.144-3.132h-2.16l1.08-3.36 1.08 3.36zM19.52 21.112v-1.296h-3.66l3.528-5.676V13H14.18v1.296h3.372L14 19.996v1.116z"}))),C=function(t){var e=document.createElement("div");return e.innerHTML=t,e.innerText},M=function t(e){var n=arguments.length>1&&void 0!==arguments[1]&&arguments[1],r=new DOMParser,o=r.parseFromString(e,"text/html").querySelector("ul, ol"),i=w()(o.children).map((function(e){var r=e.innerHTML.includes("<ul>"),o=e.innerHTML.includes("<ol>");if(r||o){var i=e.innerHTML.split(/(<ul>|<ol>)/g)[0],l=!r||o&&e.innerHTML.indexOf("<ol>")<e.innerHTML.indexOf("<ul>")?"ol":"ul";return{prefix:i,items:t(e.innerHTML,n),type:l}}return e.innerHTML})).sort((function(t,e){return C(t).toUpperCase()<C(e).toUpperCase()?-1:1}));return n?i.reverse():i},k=function t(e){return e.map((function(e){return"object"===g()(e)?"<li>".concat(e.prefix,"<").concat(e.type,">")+t(e.items)+"</".concat(e.type,"></li>"):"<li>".concat(e,"</li>")})).join("")},T=Object(p.createHigherOrderComponent)((function(t){return function(e){var n=e.name,r=e.isSelected;return"core/list"===n&&r?Object(c.createElement)(c.Fragment,null,Object(c.createElement)(t,e),Object(c.createElement)(m.BlockControls,null,Object(c.createElement)(d.Toolbar,null,Object(c.createElement)(d.ToolbarButton,{icon:E,title:Object(f.__)("Sort alphabetically","lazy-lists"),onClick:function(){return function(t){var e=t.clientId,n=t.attributes.values,r=M("<ul>".concat(n,"</ul>"));if(r.length){var o=k(r);o===n&&(o=k(M("<ul>".concat(n,"</ul>"),!0))),Object(S.dispatch)("core/block-editor").updateBlockAttributes(e,{values:o})}}(e)}})))):Object(c.createElement)(t,e)}}),"addLayoutSettings");Object(b.addFilter)("editor.BlockEdit","sorta-brilliant/lazy-lists",y),Object(b.addFilter)("editor.BlockListBlock","sorta-brilliant/lazy-lists",O),Object(b.addFilter)("blocks.registerBlockType","sorta-brilliant/lazy-lists",h),Object(b.addFilter)("blocks.getSaveContent.extraProps","sorta-brilliant/lazy-lists",v),Object(b.addFilter)("editor.BlockEdit","sorta-brilliant/lazy-lists",T)}]);