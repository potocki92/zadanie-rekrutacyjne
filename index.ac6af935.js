document.addEventListener("DOMContentLoaded",function(){let e=document.querySelector(".hero h1"),t=document.querySelector(".hero span"),n=document.querySelector("#hero img"),a=[{text:"Nowoczesna aranżacja Twojego ogrodu",spanText:"Marka GiardDesign to wieloletnie doświadczenie i wysoka estetyka realizacji. Oferujemy kompleksowy zakres usług z indywidualnym podejściem do każdego projektu.",imgSrcset:"/zadanie-rekrutacyjne/Photo.e147f6fd.jpg 1x, /zadanie-rekrutacyjne/Photo@2x.afe82740.jpg 2x"},{text:"Zielone piękno Twojego ogrodu",spanText:"Nasza firma zajmuje się profesjonalną aranżacją ogrod\xf3w, tworząc wyjątkowe przestrzenie pełne natury i harmonii.",imgSrcset:"/zadanie-rekrutacyjne/hero-garden.fa6a9902.jpg 1x, /zadanie-rekrutacyjne/hero-garden.fa6a9902.jpg 2x"},{text:"Tw\xf3j raj na ziemi",spanText:"Stworzymy dla Ciebie wymarzony ogr\xf3d, gdzie możesz odpocząć, cieszyć się pięknem roślin i spędzać czas na łonie natury.",imgSrcset:"/zadanie-rekrutacyjne/hero-garden-2.22fb90a1.jpg 1x, /zadanie-rekrutacyjne/hero-garden-2.22fb90a1.jpg 2x"}],o=0;function r(){e.textContent=a[o].text,t.textContent=a[o].spanText,n.srcset=a[o].imgSrcset}document.addEventListener("touchstart",function(e){startX=e.touches[0].clientX}),document.addEventListener("touchend",function(e){if("undefined"==typeof startX)return;let t=e.changedTouches[0].clientX,n=startX-t;n>0?o=(o+1)%a.length:n<0&&(o=(o-1+a.length)%a.length),r(),startX=void 0}),document.getElementById("before").addEventListener("click",function(){o=(o-1+a.length)%a.length,r()}),document.getElementById("after").addEventListener("click",function(){o=(o+1)%a.length,r()})});
//# sourceMappingURL=index.ac6af935.js.map