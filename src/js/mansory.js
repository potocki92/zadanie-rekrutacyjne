import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const masonryContainer = document.querySelector(".masonry");
const expandButton = document.getElementById("expand-button");
let currentPage = 1;

/**
 * Pobiera dane obrazów z API.
 *
 * @param {number} page - Numer strony do pobrania.
 * @returns {Promise<Object[]>} - Tablica obiektów reprezentujących obrazy.
 */
const fetchImages = async (page) => {
  const API_KEY = "34880786-eb7cfd58b108d519b70562252";
  const query = "garden";
  const response = await fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=21`
  );
  const data = await response.json();
  return data.hits;
};

/**
 * Generuje kod HTML dla elementu reprezentującego realizację.
 *
 * @param {Object} image - Obiekt reprezentujący obraz.
 * @returns {HTMLElement} - Element HTML reprezentujący realizację.
 */
const renderRealizacja = (image) => {
  const realizacja = document.createElement("div");
  realizacja.classList.add("realizacje-item");
  realizacja.innerHTML = `
    <a href="${image.largeImageURL}" data-lightbox="realizacje">
      <img src="${image.webformatURL}" alt="${image.tags}" class="realizacje-img" />
    </a>
  `;
  return realizacja;
};

/**
 * Obsługuje kliknięcie przycisku "Rozwiń", wczytując kolejne obrazy.
 */
expandButton.addEventListener("click", async () => {
  currentPage += 1;

  const images = await fetchImages(currentPage);
  images.forEach((image) => {
    masonryContainer.appendChild(renderRealizacja(image));
  });

  macyInit();

  const lightbox = new SimpleLightbox(".realizacje-item a", {
    captionDelay: 0,
    overlayOpacity: 0.7,
  });

  masonryContainer.classList.add("expanded");
  expandButton.remove();
  updateMasonryHeight();
});

function macyInit() {
  new Macy({
    container: ".masonry",
    trueOrder: false,
    waitForImages: true,
    margin: 30,
    columns: 3,
    breakAt: {
      1200: 2,
      768: 1,
    },
  });
}

/**
 * Aktualizuje wysokość kontenera masonry.
 */
function updateMasonryHeight() {
  const numImages =
    masonryContainer.querySelectorAll(".realizacje-item").length;
  const imageHeight = 500;
  const expandedHeight = numImages * imageHeight;
  masonryContainer.style.maxHeight = `${expandedHeight}px`;
}

/**
 * Obsługuje zdarzenie załadowania strony, wczytując początkowe obrazy.
 */
window.addEventListener("load", async () => {
  const images = await fetchImages(currentPage);
  images.forEach((image) => {
    masonryContainer.appendChild(renderRealizacja(image));
  });

  macyInit();
  currentPage += 1;

  const lightbox = new SimpleLightbox(".realizacje-item a", {
    captionDelay: 0,
    overlayOpacity: 0.7,
  });
});
