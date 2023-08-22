(function() {
    /**
   * Obsługuje menu mobilne oraz nawigację.
   */ const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");
    const menuItems = document.querySelectorAll("nav li");
    const heroLogo = document.getElementById("hero-logo");
    menuToggle.addEventListener("click", ()=>{
        menuToggle.classList.toggle("active");
        nav.classList.toggle("show");
    });
    console.log(menuItems);
    menuItems.forEach((item, index, array)=>{
        if (index === array.length - 1) return; // Pomija ostatni element
        item.addEventListener("click", ()=>{
            if (window.innerWidth <= 768) {
                nav.classList.remove("show");
                menuToggle.classList.remove("active");
            }
        });
    });
    heroLogo.addEventListener("click", ()=>{
        if (window.innerWidth <= 768) {
            nav.classList.remove("show");
            menuToggle.classList.remove("active");
        }
    });
    const header = document.querySelector("header");
    /**
   * Obsługuje efekt związany ze zmianą pozycji scrolla.
   */ window.addEventListener("scroll", ()=>{
        window.scrollY > 0 ? header.classList.add("fixed", "top-0", "bg-white", "shadow-md") : header.classList.remove("fixed", "top-0", "bg-white", "shadow-md");
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
    const sections = document.querySelectorAll("section");
    const footer = document.querySelector("footer");
    /**
   * Funkcja wywoływana przy przewijaniu strony. Aktualizuje stan nawigacji na podstawie aktualnie widocznych sekcji.
   * @function
   * @global
   */ window.onscroll = ()=>{
        let current = "";
        sections.forEach((section)=>{
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 160) current = section.getAttribute("id");
        });
        if (footer && pageYOffset + window.innerHeight >= footer.offsetTop) current = footer.getAttribute("id");
        menuItems.forEach((item)=>{
            const link = item.querySelector("a");
            if (link) {
                item.classList.remove("active");
                if (link.getAttribute("data-nav") === current) item.classList.add("active");
            }
        });
    };
})();

//# sourceMappingURL=index.d1f2126d.js.map
