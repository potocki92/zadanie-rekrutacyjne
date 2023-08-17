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

const menuToggle = document.getElementById("menu-toggle");
const nav = document.querySelector("nav");

menuToggle.addEventListener("click", () => {
  nav.classList.toggle("show");
});
