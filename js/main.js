function scrollTo(element) {
    window.scroll({
        left: 0,
        top: element.offsetTop,
        behavior: "smooth"
    });
}

// buttons

var home = document.querySelector("#home");
var specials = document.querySelector("#Specials");
var about = document.querySelector("#About");
var menu = document.querySelector("#Menu");
var contact = document.querySelector("#Contact");
var up = document.querySelector("#up");

// plece (id name)

var place1 = document.querySelector(".specials");
var place2 = document.querySelector(".about");
var place3 = document.querySelector(".menu__body");
var place4 = document.querySelector(".contact__body");
var place5 = document.querySelector(".nav");

specials.addEventListener("click", () => {
    scrollTo(place1);
});

about.addEventListener("click", () => {
    scrollTo(place2);
});

menu.addEventListener("click", () => {
    scrollTo(place3);
});

contact.addEventListener("click", () => {
    scrollTo(place4);
});

up.addEventListener("click", () => {
    scrollTo(place5);
});