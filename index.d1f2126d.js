(function() {
    /**
   * Obsługuje menu mobilne oraz nawigację.
   */ const menuToggle = document.getElementById("menu-toggle");
    const nav = document.querySelector("nav");
    const links = document.getElementById("myTopnav");
    const menuItems = document.querySelectorAll("nav li");
    const heroLogo = document.getElementById("hero-logo");
    menuToggle.addEventListener("click", ()=>{
        menuToggle.classList.toggle("active");
        nav.classList.toggle("show");
    });
    menuItems.forEach((item, index)=>{
        if (index === 0) return; // Omiń pierwszy element oraz ostatni element
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
    const sections = document.querySelectorAll("section");
    window.onscroll = ()=>{
        let current = "";
        sections.forEach((section)=>{
            const sectionTop = section.offsetTop;
            if (pageYOffset >= sectionTop - 60) current = section.getAttribute("id");
        });
        menuItems.forEach((a)=>{
            a.classList.remove("active");
            if (a.classList.contains(current)) {
                console.log(current, a);
                a.classList.add("active");
            }
        });
    };
})();

//# sourceMappingURL=index.d1f2126d.js.map
