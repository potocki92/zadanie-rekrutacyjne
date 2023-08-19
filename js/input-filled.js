// Input search
const searchInput = document.getElementById("search-input");

searchInput.addEventListener("input", () => {
  searchInput.value.trim() !== ""
    ? searchInput.classList.add("input-filled")
    : searchInput.classList.remove("input-filled");
});

const resizeObserver = new ResizeObserver((entries) => {
  for (const entry of entries) {
    if (entry.target === searchInput && entry.contentRect.width === 0) {
      searchInput.classList.add("no-outline");
    } else {
      searchInput.classList.remove("no-outline");
    }
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
  links.classList.toggle("hidden");
});

menuToggle.addEventListener("click", () => {
  menuToggle.classList.toggle("active");

  if (window.innerWidth >= 768) {
    nav.classList.toggle("show");
    links.classList.toggle("hidden");
  } else {
    nav.classList.toggle("show");
  }
});
