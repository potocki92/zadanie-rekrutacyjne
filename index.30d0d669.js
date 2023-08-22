!function(){let e=document.getElementById("search-input");e.addEventListener("input",()=>{""!==e.value.trim()?e.classList.add("input-filled"):e.classList.remove("input-filled")});let t=new ResizeObserver(t=>{for(let i of t)i.target===e&&0===i.contentRect.width?e.classList.add("no-outline"):e.classList.remove("no-outline")});t.observe(e)}();
//# sourceMappingURL=index.30d0d669.js.map
