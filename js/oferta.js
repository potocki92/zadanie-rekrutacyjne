const ofertaToggle = document.getElementById("oferta-toggle");
const ofertaContent = document.getElementById("oferta-content");

ofertaToggle.addEventListener("click", () => {
  ofertaContent.classList.toggle("hidden");
});