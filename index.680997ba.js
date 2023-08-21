var e=e=>{let t=`
    <img width="44" height="44" class="mb-8" src="${e.img}" />
    <h3 class="text-[28px] font-medium font-montserrat tracking-[-0.05em] mb-3">${e.title}</h3>
    <p class="text-sm tracking-tighter mb-16">
      ${e.description}
    </p>
    <button class="text-base flex gap-2.5 items-center border-b-2 border-solid text-[#1B5B31] border-[#1B5B31] lg:text-sm xl:text-base">
      ${e.link}
      <svg class="rotate-[270deg]" width="16" height="17">
        <use href="/zadanie-rekrutacyjne/array.de936614.svg#arrow"></use>
      </svg>
    </button>`;return t};const t=document.getElementById("cards");[{img:"/zadanie-rekrutacyjne/project-card.fca56a7b.svg",title:"Projekty",description:"Zaprojektujemy Tw\xf3j ogr\xf3d w nowoczesnym stylu i z najlepszym wykorzystaniem istniejącej przestrzeni.",link:"Dowiedz się więcej"},{img:"/zadanie-rekrutacyjne/vizual-card.85163c10.svg",title:"Wizualizacje",description:"Przedstawimy Ci projekty koncepcyjne w postaci wirtualnego spaceru animowanego w technologii 3D.",link:"Dowiedz się więcej"},{img:"/zadanie-rekrutacyjne/realiz-card.f6cd3acf.svg",title:"Realizacje",description:"Zrealizujemy Twoje marzenie przy użyciu najnowszych rozwiązań i zaawansowanych technologii.",link:"Zobacz nasze realizacje"}].forEach(a=>{let i=document.createElement("div");i.classList.add("hover:shadow-lg","transition-transform","ease-in-out","duration-200","transform","hover:-translate-y-1","hover:cursor-pointer","min-w-[300px]","h-[378px]","max-w-[370px]","max-h-[378px]","py-10","px-12","bg-[#FFFFFF]","rounded-3xl"),i.innerHTML=e(a),t.appendChild(i)});
//# sourceMappingURL=index.680997ba.js.map
