(()=>{"use strict";var e,t,l,c;e=document.querySelector(".accordeon"),t=e.querySelectorAll(".element"),l=e.querySelectorAll(".element-content"),c=e.querySelectorAll(".title"),e.addEventListener("click",(function(e){var n=e.target;n.classList.contains("title")&&c.forEach((function(e,c){e===n&&function(e){for(var c=0;c<t.length;c++)e===c?t[c].classList.add("active"):t[c].classList.remove("active");for(var n=0;n<l.length;n++)l[n].style.display=e===n?"block":"none"}(c)}))}))})();