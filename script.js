const menu = document.querySelector("#menu");
const button = menu.querySelector("button");
const jingle = document.querySelector("#jingle");
const audio = new Audio('zelda.mp3');

//Funktion för att toggla hamburgarmenyn i phone-view
function openMenu(){
    menu.classList.toggle("open");
}

button.addEventListener("click", openMenu);


//Easter-egg: Jingle när en trycker på Juna
function playJingle() {
    audio.currentTime = 0;
    audio.play();
}

jingle.addEventListener("click", playJingle);

