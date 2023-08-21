// Input search
(function () {
  const searchInput = document.getElementById("search-input");

  searchInput.addEventListener("input", () => {
    searchInput.value.trim() !== ""
      ? searchInput.classList.add("input-filled")
      : searchInput.classList.remove("input-filled");
  });

  const resizeObserver = new ResizeObserver((entries) => {
    for (const entry of entries) {
      entry.target === searchInput && entry.contentRect.width === 0
        ? searchInput.classList.add("no-outline")
        : searchInput.classList.remove("no-outline");
    }
  });

  resizeObserver.observe(searchInput);

  // Mobile
  const menuToggle = document.getElementById("menu-toggle");
  const nav = document.querySelector("nav");
  const links = document.getElementById("nav-links");

  menuToggle.addEventListener("click", () => {
    menuToggle.classList.toggle("active");
    nav.classList.toggle("show");
  });

  const header = document.querySelector("header");

  window.addEventListener("scroll", () => {
    if (window.innerWidth <= 768) {
      if (window.scrollY > 0) {
        header.classList.add("fixed", "top-0", "bg-white", "shadow-md");
      } else {
        header.classList.remove("fixed", "top-0", "bg-white", "shadow-md");
      }
    }
  });

  // Dodaj nasłuch szerokości okna
  window.addEventListener("resize", () => {
    if (window.innerWidth >= 768) {
      menuToggle.classList.remove("active");
      nav.classList.remove("show");

      header.classList.remove("fixed", "top-0", "bg-white", "shadow-md");
    }
  });
})();
