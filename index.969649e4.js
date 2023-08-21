document.addEventListener("DOMContentLoaded", function() {
    const h1 = document.querySelector(".hero h1");
    const span = document.querySelector(".hero span");
    const img = document.querySelector("#hero img");
    const content = [
        {
            text: "Nowoczesna aranżacja Twojego ogrodu",
            spanText: "Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.",
            imgSrcset: "/zadanie-rekrutacyjne/Photo.e147f6fd.jpg 1x, /zadanie-rekrutacyjne/Photo@2x.afe82740.jpg 2x"
        },
        {
            text: "Zielone piękno Twojego ogrodu",
            spanText: "Nasza firma zajmuje się profesjonalną aranżacją ogrod\xf3w, tworząc wyjątkowe przestrzenie pełne natury i harmonii.",
            imgSrcset: "/zadanie-rekrutacyjne/hero-garden.fa6a9902.jpg 1x, /zadanie-rekrutacyjne/hero-garden.fa6a9902.jpg 2x"
        },
        {
            text: "Tw\xf3j raj na ziemi",
            spanText: "Stworzymy dla Ciebie wymarzony ogr\xf3d, gdzie możesz odpocząć, cieszyć się pięknem roślin i spędzać czas na łonie natury.",
            imgSrcset: "/zadanie-rekrutacyjne/hero-garden-2.22fb90a1.jpg 1x, /zadanie-rekrutacyjne/hero-garden-2.22fb90a1.jpg 2x"
        }
    ];
    let currentIndex = 0;
    function updateContent() {
        h1.textContent = content[currentIndex].text;
        span.textContent = content[currentIndex].spanText;
        img.srcset = content[currentIndex].imgSrcset;
    }
    function handleTouchStart(event) {
        startX = event.touches[0].clientX;
    }
    function handleTouchEnd(event) {
        if (typeof startX === "undefined") return;
        const endX = event.changedTouches[0].clientX;
        const deltaX = startX - endX;
        if (deltaX > 0) currentIndex = (currentIndex + 1) % content.length;
        else if (deltaX < 0) currentIndex = (currentIndex - 1 + content.length) % content.length;
        updateContent();
        startX = undefined;
    }
    document.addEventListener("touchstart", handleTouchStart);
    document.addEventListener("touchend", handleTouchEnd);
    document.getElementById("before").addEventListener("click", function() {
        currentIndex = (currentIndex - 1 + content.length) % content.length;
        updateContent();
    });
    document.getElementById("after").addEventListener("click", function() {
        currentIndex = (currentIndex + 1) % content.length;
        updateContent();
    });
});

//# sourceMappingURL=index.969649e4.js.map
