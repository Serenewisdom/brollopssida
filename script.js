const menu = document.querySelector("#menu");
const button = menu.querySelector("button");

function openMenu(){
    menu.classList.toggle("open");
}

button.addEventListener("click", openMenu);