const e=document.getElementById("search-input");e.addEventListener("input",()=>{""!==e.value.trim()?e.classList.add("input-filled"):e.classList.remove("input-filled")});const t=new ResizeObserver(t=>{for(let s of t)s.target===e&&0===s.contentRect.width?e.classList.add("no-outline"):e.classList.remove("no-outline")});t.observe(e);const s=document.getElementById("menu-toggle"),i=document.querySelector("nav");document.getElementById("nav-links"),s.addEventListener("click",()=>{s.classList.toggle("active"),i.classList.toggle("show")});const n=document.querySelector("header");window.addEventListener("scroll",()=>{window.innerWidth<=768&&(window.scrollY>0?n.classList.add("fixed","top-0","bg-white","shadow-md"):n.classList.remove("fixed","top-0","bg-white","shadow-md"))}),window.addEventListener("resize",()=>{window.innerWidth>=768&&(s.classList.remove("active"),i.classList.remove("show"),n.classList.remove("fixed","top-0","bg-white","shadow-md"))});
//# sourceMappingURL=index.39926272.js.map
