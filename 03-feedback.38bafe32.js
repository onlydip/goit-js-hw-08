var e="undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self?self:"undefined"!=typeof window?window:"undefined"!=typeof global?global:{},t={},n="Expected a function",r=0/0,o=/^\s+|\s+$/g,i=/^[-+]0x[0-9a-f]+$/i,a=/^0b[01]+$/i,f=/^0o[0-7]+$/i,u=parseInt,l="object"==typeof e&&e&&e.Object===Object&&e,c="object"==typeof self&&self&&self.Object===Object&&self,s=l||c||Function("return this")(),d=Object.prototype.toString,m=Math.max,g=Math.min,v=function(){return s.Date.now()};function p(e){var t=typeof e;return!!e&&("object"==t||"function"==t)}function y(e){if("number"==typeof e)return e;if("symbol"==typeof(t=e)||t&&"object"==typeof t&&"[object Symbol]"==d.call(t))return r;if(p(e)){var t,n="function"==typeof e.valueOf?e.valueOf():e;e=p(n)?n+"":n}if("string"!=typeof e)return 0===e?e:+e;e=e.replace(o,"");var l=a.test(e);return l||f.test(e)?u(e.slice(2),l?2:8):i.test(e)?r:+e}t=function(e,t,r){var o=!0,i=!0;if("function"!=typeof e)throw TypeError(n);return p(r)&&(o="leading"in r?!!r.leading:o,i="trailing"in r?!!r.trailing:i),function(e,t,r){var o,i,a,f,u,l,c=0,s=!1,d=!1,b=!0;if("function"!=typeof e)throw TypeError(n);function h(t){var n=o,r=i;return o=i=void 0,c=t,f=e.apply(r,n)}function j(e){var n=e-l,r=e-c;return void 0===l||n>=t||n<0||d&&r>=a}function S(){var e,n,r,o=v();if(j(o))return T(o);u=setTimeout(S,(e=o-l,n=o-c,r=t-e,d?g(r,a-n):r))}function T(e){return(u=void 0,b&&o)?h(e):(o=i=void 0,f)}function O(){var e,n=v(),r=j(n);if(o=arguments,i=this,l=n,r){if(void 0===u)return c=e=l,u=setTimeout(S,t),s?h(e):f;if(d)return u=setTimeout(S,t),h(l)}return void 0===u&&(u=setTimeout(S,t)),f}return t=y(t)||0,p(r)&&(s=!!r.leading,a=(d="maxWait"in r)?m(y(r.maxWait)||0,t):a,b="trailing"in r?!!r.trailing:b),O.cancel=function(){void 0!==u&&clearTimeout(u),c=0,o=l=i=u=void 0},O.flush=function(){return void 0===u?f:T(v())},O}(e,t,{leading:o,maxWait:t,trailing:i})};const b=document.querySelector(".feedback-form input"),h=document.querySelector(".feedback-form textarea"),j=document.querySelector(".feedback-form"),S="feedback-form-state";let T={};j.addEventListener("input",(function(e){return e&&e.__esModule?e.default:e})(t)(function(e){T[e.target.name]=e.target.value,localStorage.setItem(S,JSON.stringify(T))},500)),j.addEventListener("submit",function(e){e.preventDefault();try{if(""===h.value||""===b.value)throw Error("Enter something else");console.log(T),e.currentTarget.reset(),localStorage.removeItem(S),T={}}catch(e){alert(e.message)}}),function(){try{let e=JSON.parse(localStorage.getItem(S));e&&e.email&&(b.value=e.email,T.email=e.email),e&&e.message&&(h.value=e.message,T.message=e.message)}catch(e){console.error(e)}}();
//# sourceMappingURL=03-feedback.38bafe32.js.map
