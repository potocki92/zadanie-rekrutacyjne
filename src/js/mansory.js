import SimpleLightbox from "simplelightbox";
import "simplelightbox/dist/simple-lightbox.min.css";

const masonryContainer = document.querySelector(".masonry");
const expandButton = document.getElementById("expand-button");
let currentPage = 1;

const fetchImages = async (page) => {
  const API_KEY = "34880786-eb7cfd58b108d519b70562252";
  const query = "garden";
  const response = await fetch(
    `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=21`
  );
  const data = await response.json();
  return data.hits;
};

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

function updateMasonryHeight() {
  const numImages =
    masonryContainer.querySelectorAll(".realizacje-item").length;
  const imageHeight = 300; // Wysokość pojedynczego zdjęcia (zmień na odpowiednią wartość)
  const expandedHeight = numImages * imageHeight; // Całkowita wysokość dla wszystkich zdjęć
  masonryContainer.style.maxHeight = `${expandedHeight}px`; // Ustaw nową wysokość
}

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
