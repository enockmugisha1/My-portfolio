// script.js
function opentab(tabName) {
    let tabContents = document.querySelectorAll(".table-content");
    let tabLinks = document.querySelectorAll(".tab-links");

    tabContents.forEach((tab) => tab.classList.remove("active-tab"));
    tabLinks.forEach((link) => link.classList.remove("active-link"));

    document.getElementById(tabName).classList.add("active-tab");
    event.currentTarget.classList.add("active-link");
}

function toggleMenu() {
    let navLinks = document.getElementById("nav-links");
    navLinks.classList.toggle("nav-active");
}
