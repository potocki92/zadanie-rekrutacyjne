/**
 * Funkcja inicjalizująca zachowanie interakcji na stronie dla urządzeń mobilnych.
 */ (function() {
    const searchInput = document.getElementById("search-input");
    searchInput.addEventListener("input", ()=>{
        searchInput.value.trim() !== "" ? searchInput.classList.add("input-filled") : searchInput.classList.remove("input-filled");
    });
    /**
   * Obserwuje zmiany szerokości pola wyszukiwania.
   */ const resizeObserver = new ResizeObserver((entries)=>{
        for (const entry of entries)entry.target === searchInput && entry.contentRect.width === 0 ? searchInput.classList.add("no-outline") : searchInput.classList.remove("no-outline");
    });
    resizeObserver.observe(searchInput);
    /**
   * Obsługuje menu mobilne oraz nawigację.
   */ const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");
    const links = document.getElementById("nav-links");
    const menuItems = document.querySelectorAll("#nav-links li");
    const heroLogo = document.getElementById("hero-logo");
    menuToggle.addEventListener("click", ()=>{
        menuToggle.classList.toggle("active");
        links.classList.toggle("invisible");
        nav.classList.toggle("show");
    });
    menuItems.forEach((item, index)=>{
        if (index === 0 || index === array.length - 1) return; // Omiń pierwszy element
        item.addEventListener("click", ()=>{
            if (window.innerWidth <= 768) {
                links.classList.add("invisible");
                nav.classList.remove("show");
                menuToggle.classList.remove("active");
            }
        });
    });
    heroLogo.addEventListener("click", ()=>{
        if (window.innerWidth <= 768) {
            links.classList.add("invisible");
            nav.classList.remove("show");
            menuToggle.classList.remove("active");
        }
    });
    const header = document.querySelector("header");
    /**
   * Obsługuje efekt związany ze zmianą pozycji scrolla.
   */ window.addEventListener("scroll", ()=>{
        if (window.innerWidth <= 768) window.scrollY > 0 ? header.classList.add("fixed", "top-0", "bg-white", "shadow-md") : header.classList.remove("fixed", "top-0", "bg-white", "shadow-md");
    });
    /**
   * Nasłuchuje zmiany szerokości okna przeglądarki.
   */ window.addEventListener("resize", ()=>{
        if (window.innerWidth >= 768) {
            menuToggle.classList.remove("active");
            nav.classList.remove("show");
            header.classList.remove("fixed", "top-0", "bg-white", "shadow-md");
        }
    });
})();

//# sourceMappingURL=index.9a35beeb.js.map
