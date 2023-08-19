const renderCards = (card) => {
  const markup = `
    <img width="44" height="44" class="mb-8" src="${card.img}" />
    <h3 class="text-[28px] font-medium font-montserrat tracking-[-0.05em] mb-3">${card.title}</h3>
    <p class="text-sm tracking-tighter mb-16">
      ${card.description}
    </p>
    <button class="text-base flex gap-2.5 items-center border-b-2 border-solid text-[#1B5B31] border-[#1B5B31] lg:text-sm xl:text-base">
      ${card.link}
      <svg class="rotate-[270deg]" width="16" height="17">
        <use href="./images/svg/array.svg#arrow"></use>
      </svg>
    </button>`;

  return markup;
};

const cardsArray = [
  {
    img: "./images/svg/project-card.svg",
    title: "Projekty",
    description:
      "Zaprojektujemy Twój ogród w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.",
    link: "Dowiedz się więcej",
  },
  {
    img: "./images/svg/vizual-card.svg",
    title: "Wizualizacje",
    description:
      "Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.",
    link: "Dowiedz się więcej",
  },
  {
    img: "./images/svg/realiz-card.svg",
    title: "Realizacje",
    description:
      "Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.",
    link: "Zobacz nasze realizacje",
  },
];
const cards = document.getElementById("cards");

cardsArray.forEach((cardData) => {
  const cardElement = document.createElement("div");
  cardElement.classList.add(
    "hover:shadow-lg",
    "transition-transform",
    "ease-in-out",
    "duration-200",
    "transform",
    "hover:-translate-y-1",
    "hover:cursor-pointer",
    "min-w-[300px]",
    "h-[378px]",
    "max-w-[370px]",
    "max-h-[378px]",
    "py-10",
    "px-12",
    "bg-[#FFFFFF]",
    "rounded-3xl"
  );
  cardElement.innerHTML = renderCards(cardData);
  cards.appendChild(cardElement);
});

export { renderCards };
