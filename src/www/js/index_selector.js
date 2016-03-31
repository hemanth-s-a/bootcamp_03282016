document.addEventListener("DOMContentLoaded", function() {
    var domElement, domElements;

    domElements= document.getElementsByTagName("ul");
    domElement = $("#cookie-list");

    console.dir(domElements);

    domElements = document.getElementsByClassName("favorite");
    console.dir(domElements);

    domElements = $(".favorite");
    console.dir(domElements);

    domElements = document.querySelector("#cookie-list");
    console.dir(domElements);

    domElements = document.querySelectorAll(".favorite");
    console.dir(domElements);
});