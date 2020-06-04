window.onscroll = () => {
    const nav = document.querySelector('nav');
    if (this.scrollY <= 20) nav.style.background = 'transparent'; else nav.style.background = '#fff';
};

let mainNavLinks = document.querySelectorAll(".nav-item > a");
let mainSections = document.querySelectorAll("section");

let lastId;
let cur = [];

window.addEventListener("scroll", event => {
    let fromTop = window.scrollY + 400;
    mainNavLinks.forEach(link => {
        const section = document.querySelector(link.hash);

        if (
            section.offsetTop < fromTop &&
            section.offsetTop + section.offsetHeight > fromTop
        ) {
            link.classList.add("active");
        } else {
            link.classList.remove("active");
        }
    });
});