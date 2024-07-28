Array.from(document.querySelectorAll(".tree li")).forEach(function(e){var n=e.childNodes[0].nodeValue.trim(),t=document.createElement("span");t.textContent=n,e.childNodes[0].nodeValue="",e.insertBefore(t,e.childNodes[0]),t.addEventListener("click",function(){var n=e.querySelector("ul");n&&(n.style.display="none"===n.style.display?"block":"none")})});
//# sourceMappingURL=index.6c39e14d.js.map
