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
})();

//# sourceMappingURL=index.9a35beeb.js.map
