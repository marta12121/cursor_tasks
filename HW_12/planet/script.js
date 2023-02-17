const MAIN_URL = "https://swapi.dev/api/planets/";
const container = document.querySelector(".container");
const planetList = document.querySelector(".planet-list");


function renderPlanet(planet) {
    const planetCard = document.createElement("li");
    planetCard.classList.add("planet-card");
    planetCard.textContent = planet.name;

    planetList.append(planetCard);
}

async function getPlanet() {
    const data = await fetch(MAIN_URL);
    const planet_data = await data.json();
    console.log(planet_data.results);

    planet_data.results.forEach(elem => renderPlanet(elem));
};
getPlanet();

const return_btn = document.querySelector(".btn-r");
return_btn.addEventListener('click', () => {
    window.location = '../main-page/index.html'
});