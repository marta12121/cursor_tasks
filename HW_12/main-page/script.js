const MAIN_URL = "https://swapi.dev/api/";
const container = document.querySelector(".container");
const button_get = document.querySelector(".btn-g");
const button_reload = document.querySelector(".btn-r");
const input = document.querySelector(".input");
const images = {
    "https://swapi.dev/api/people/1/": "../img/luke_sky.png",
    "https://swapi.dev/api/people/11/": "../img/luke_sky.png",
    "https://swapi.dev/api/people/43/": "../img/luke_sky.png",
    "https://swapi.dev/api/people/2/": "../img/c-3po.png",
    "https://swapi.dev/api/people/3/": "../img/r2.png",
    "https://swapi.dev/api/people/4/": "../img/darth_v.png",
    "https://swapi.dev/api/people/5/": "../img/leia.png",
    "https://swapi.dev/api/people/6/": "../img/owen.png",
    "https://swapi.dev/api/people/7/": "../img/r5-d4.png",
    "https://swapi.dev/api/people/8/": "../img/r5-d4.png",
    "https://swapi.dev/api/people/9/": "../img/biggs.png",
    "https://swapi.dev/api/people/10/": "../img/obi.png",
    "https://swapi.dev/api/people/12/": "../img/tarkin.png",
    "https://swapi.dev/api/people/13/": "../img/chewbacca.png",
    "https://swapi.dev/api/people/14/": "../img/han.png",
    "https://swapi.dev/api/people/15/": "../img/greedo.png",
    "https://swapi.dev/api/people/16/": "../img/gabba.png",
    "https://swapi.dev/api/people/18/": "../img/wedge.png",
    "https://swapi.dev/api/people/19/": "../img/jek.png",
    "https://swapi.dev/api/people/20/": "../img/yoda.png",
    "https://swapi.dev/api/people/21/": "../img/palpatine.png",
    "https://swapi.dev/api/people/22/": "../img/boba.png",
    "https://swapi.dev/api/people/23/": "../img/ig.png",
    "https://swapi.dev/api/people/24/": "../img/bossk.png",
    "https://swapi.dev/api/people/25/": "../img/lando.png",
    "https://swapi.dev/api/people/26/": "../img/lobot.png",
    "https://swapi.dev/api/people/40/": "../img/watto.png",
    "https://swapi.dev/api/people/33/": "../img/nute.png",
    "https://swapi.dev/api/people/35/": "../img/padme.png",
    "https://swapi.dev/api/people/36/": "../img/jar_jar.png",
    "https://swapi.dev/api/people/46/": "../img/ayla-secura.png",
    "https://swapi.dev/api/people/81/": "../img/antilles.png",
};



function renderUser(user) {
    const userCard = document.createElement("div");
    userCard.classList.add("user-card");

    const contentCard = document.createElement("div");
    contentCard.classList.add("content-card");

    const photoCard = document.createElement("div");
    photoCard.classList.add("photo-card");
    for (elem in images) {
        if (elem === user.url) {
            photoCard.style.backgroundImage = `url(${images[elem]})`;
        }
    }
    const fullName = document.createElement("h4");
    fullName.classList.add("full-name");
    fullName.textContent = "Full Name: " + user.name;

    const birthday = document.createElement("p");
    birthday.classList.add("birth");
    birthday.textContent = "Birthday: " + user.birth_year;

    const gender = document.createElement("p");
    gender.classList.add("gender");
    gender.textContent = "Gender: " + user.gender;

    contentCard.append(fullName);
    contentCard.append(birthday);
    contentCard.append(gender);
    userCard.append(contentCard);
    userCard.append(photoCard);
    container.append(userCard);
}
let each_user;
let arr = [];
button_get.addEventListener("click", async function getInfo() {

    const data = await (await fetch(`${MAIN_URL}films/${input.value}`)).json();

    for (let i = 0; i < data.characters.length; i++) {
        each_user = await (await fetch(data.characters[i])).json();
        arr.push(each_user);
    }
    arr.forEach(elem => renderUser(elem));
});

button_reload.addEventListener("click", function() {
    document.location.reload();
});

const next_btn = document.querySelector(".btn-n");
next_btn.addEventListener('click', () => {
    window.location = '../planet/index.html'
});