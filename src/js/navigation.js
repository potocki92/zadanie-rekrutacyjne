(function () {
  /**
   * Obsługuje menu mobilne oraz nawigację.
   */
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");
  const links = document.getElementById("myTopnav");
  const menuItems = document.querySelectorAll("nav a");
  const heroLogo = document.getElementById("hero-logo");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("show");
  });

  menuItems.forEach((item, index) => {
    if (index === 0) {
      return; // Omiń pierwszy element oraz ostatni element
    }
    item.addEventListener("click", () => {
      if (window.innerWidth <= 768) {
        nav.classList.remove("show");
        menuToggle.classList.remove("active");
      }
    });
  });

  heroLogo.addEventListener("click", () => {
    if (window.innerWidth <= 768) {
      nav.classList.remove("show");
      menuToggle.classList.remove("active");
    }
  });
  const header = document.querySelector("header");

  /**
   * Obsługuje efekt związany ze zmianą pozycji scrolla.
   */
  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 768) {
      window.scrollY > 0
        ? header.classList.add("fixed", "top-0", "bg-white", "shadow-md")
        : header.classList.remove("fixed", "top-0", "bg-white", "shadow-md");
    }
  });

  /**
   * Nasłuchuje zmiany szerokości okna przeglądarki.
   */
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      menuToggle.classList.remove("active");
      nav.classList.remove("show");
      header.classList.remove("fixed", "top-0", "bg-white", "shadow-md");
    }
  });

  function isElementVisible(element) {
    const rect = element.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.bottom <=
        (window.innerHeight || document.documentElement.clientHeight)
    );
  }

  // Funkcja aktualizująca podświetlony link
  function updateActiveLink() {
    console.log(menuItems);
    menuItems.forEach((link) => {
      const sectionId = link.getAttribute("href");
      const section = document.querySelector(sectionId);

      if (section && isElementVisible(section)) {
        link.classList.add("active");
      } else {
        link.classList.remove("active");
      }
    });
  }

  // Nasłuchuj zdarzenia przewijania strony
  window.addEventListener("scroll", updateActiveLink);
})();
