(()=>{"use strict";function e(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}function t(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,r=new Array(t);n<t;n++)r[n]=e[n];return r}var n,r,o,l,c,a,i,u,d,s,y,m,f,v,p,b,h,S,E,g,k,q;g=document.querySelector(".callback-btn.hidden-xs"),k=document.querySelector(".modal-overlay"),q=document.querySelector(".modal-callback"),g.addEventListener("click",(function(){k.style.display="block",q.style.display="block"})),function(){var e=document.querySelector(".modal-close > img"),t=document.querySelector(".modal-overlay"),n=document.querySelector(".modal-callback"),r=function(){t.style.display="none",n.style.display="none"};e.addEventListener("click",r),t.addEventListener("click",r)}(),function(){var e=document.querySelector(".button-services"),t=document.querySelector(".modal-overlay"),n=document.querySelector(".modal-callback");e.addEventListener("click",(function(){t.style.display="block",n.style.display="block"}))}(),function(){var t,n=function(t,n){var r="undefined"!=typeof Symbol&&t[Symbol.iterator]||t["@@iterator"];if(!r){if(Array.isArray(t)||(r=function(t,n){if(t){if("string"==typeof t)return e(t,n);var r=Object.prototype.toString.call(t).slice(8,-1);return"Object"===r&&t.constructor&&(r=t.constructor.name),"Map"===r||"Set"===r?Array.from(t):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?e(t,n):void 0}}(t))||n&&t&&"number"==typeof t.length){r&&(t=r);var o=0,l=function(){};return{s:l,n:function(){return o>=t.length?{done:!0}:{done:!1,value:t[o++]}},e:function(e){throw e},f:l}}throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}var c,a=!0,i=!1;return{s:function(){r=r.call(t)},n:function(){var e=r.next();return a=e.done,e},e:function(e){i=!0,c=e},f:function(){try{a||null==r.return||r.return()}finally{if(i)throw c}}}}(document.querySelectorAll(".top-menu a"));try{var r=function(){var e=t.value;e.addEventListener("click",(function(t){t.preventDefault();var n=e.getAttribute("href").substr(1);document.getElementById(n).scrollIntoView({behavior:"smooth",block:"start"})}))};for(n.s();!(t=n.n()).done;)r()}catch(e){n.e(e)}finally{n.f()}}(),v=document.querySelector(".top-slider"),p=document.querySelectorAll(".item"),b=document.querySelectorAll(".table"),h=0,S=function(){var e,t;e=b,p[t=h].style.display="none",e[t].classList.remove("active"),++h>=p.length&&(h=0),function(e,t,n,r){e[n].style.display="block",t[n].classList.add("active")}(p,b,h)},E=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:3e3;f=setInterval(S,e)},v.addEventListener("mouseover",(function(){clearInterval(f)})),v.addEventListener("mouseout",(function(){E()})),E(3e3),y=document.querySelector(".up"),m=document.querySelector(".main-wrapper"),y.style.display="none",window.addEventListener("scroll",(function(){window.scrollY>=600?y.style.display="block":y.style.display="none"})),y.addEventListener("click",(function(){m.scrollIntoView({behavior:"smooth",block:"start"})})),i=document.querySelector(".accordeon"),u=i.querySelectorAll(".element"),d=i.querySelectorAll(".element-content"),s=i.querySelectorAll(".title"),i.addEventListener("click",(function(e){var t=e.target;t.classList.contains("title")&&s.forEach((function(e,n){e===t&&function(e){for(var t=0;t<u.length;t++)e===t?u[t].classList.add("active"):u[t].classList.remove("active");for(var n=0;n<d.length;n++)d[n].style.display=e===n?"block":"none"}(n)}))})),function(){var e=document.getElementById("tel"),n=document.getElementById("fio"),r=document.getElementById("form-callback");e.addEventListener("input",(function(){this.value=this.value.replace(/[^\+\d]/g,"")})),e.addEventListener("change",(function(){e.value=e.value.match(/\+?[78]([-()]*\d){6,10}/g)})),n.addEventListener("input",(function(){this.value=this.value.replace(/[^а-яё\s]/gi,"")})),n.addEventListener("blur",(function(){n.value=n.value.match(/[а-яё]{2,}/gi,"")}));var o=document.createElement("div");o.style.cssText="font-size: 2rem; margin: 1rem 0;";var l=function(){e.value="",n.value="",setTimeout((function(){o.style.display="none"}),4e3)};r.addEventListener("submit",(function(e){e.preventDefault(),r.appendChild(o);var t=new FormData(r),n={};t.forEach((function(e,t){n[t]=e})),o.textContent="Загрузка...",c(t).then((function(e){if(200!==e.status)throw new Error("status network not 200");o.textContent="Спасибо! Мы скоро с вами свяжемся!",document.querySelector(".modal-overlay").style.display="none",document.querySelector(".modal-callback").style.display="none"})).catch((function(e){o.textContent="Что-то пошло не так...",console.error(e)})).finally(l)}));var c=function(e){return fetch("./server.php",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify((n=e,function(e){if(Array.isArray(e))return t(e)}(n)||function(e){if("undefined"!=typeof Symbol&&null!=e[Symbol.iterator]||null!=e["@@iterator"])return Array.from(e)}(n)||function(e,n){if(e){if("string"==typeof e)return t(e,n);var r=Object.prototype.toString.call(e).slice(8,-1);return"Object"===r&&e.constructor&&(r=e.constructor.name),"Map"===r||"Set"===r?Array.from(e):"Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r)?t(e,n):void 0}}(n)||function(){throw new TypeError("Invalid attempt to spread non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()))});var n}}(),function(){var e,t=document.documentElement.clientWidth,n=0;e=t>975?3:t>650?2:1;var r=document.querySelector(".services-carousel"),o=document.querySelector(".services-elements"),l=document.querySelectorAll(".item-slide"),c=document.querySelector(".arrow-left"),a=document.querySelector(".arrow-right"),i=l.length,u=o.clientWidth/e+1,d=1*u,s=function(){r.style.transform="translateX(".concat(n,"px)")},y=function(){c.disabled=0===n,a.disabled=n<=-(i-e)*u};y(),l.forEach((function(e){e.style.minWidth="".concat(u,"px")})),a.addEventListener("click",(function(){var t=i-(Math.abs(n)+e*u)/u;n-=t>=1?d:t*u,s(),y()})),c.addEventListener("click",(function(){var e=Math.abs(n)/u;n+=e>=1?d:e*u,s(),y()})),o.addEventListener("click",(function(e){e.target.classList.contains("absolute")&&(document.querySelector(".modal-overlay").style.display="block",document.querySelector(".modal-callback").style.display="block")}));var m=document.querySelector(".modal-close > img"),f=document.querySelector(".modal-overlay"),v=document.querySelector(".modal-callback"),p=function(){f.style.display="none",v.style.display="none"};m.addEventListener("click",p),f.addEventListener("click",p)}(),n=document.querySelector(".mob-menu-btn"),r=document.querySelector(".mobile-menu-close"),o=document.getElementById("overlay-menu"),l=document.querySelector(".mobile-menu"),c=l.querySelectorAll("ul>li>a"),a=function(){l.classList.toggle("open")},n.addEventListener("click",a),r.addEventListener("click",a),o.addEventListener("click",a),c.forEach((function(e){return e.addEventListener("click",a)}))})();