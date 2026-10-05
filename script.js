const menu = document.querySelector("#menu");
const button = menu.querySelector("button");
const jingle = document.querySelector("#jingle");
const audio = new Audio('zelda.mp3');
const yahaha = document.querySelector("#yahaha");
const korok = new Audio('yahaha.mp3');
const heartButton = document.querySelector(".heart-button");

//Funktion för att toggla hamburgarmenyn i phone-view
function openMenu(){
    menu.classList.toggle("open");
}

button.addEventListener("click", openMenu);

/* Fixa så att menyn är stängd när skärmen förstoras, OBS OVIKTIGT */


//Easter-egg: Jingle när en trycker på Juna
function playJingle() {
    audio.currentTime = 0;
    audio.play();
}

jingle.addEventListener("click", playJingle);

//Easter-egg: Jingle när en trycker på Hanna
function playKorok() {
    korok.currentTime = 0;
    korok.play();
}

yahaha.addEventListener("click", playKorok);
