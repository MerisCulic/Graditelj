import fullpage from 'fullpage.js';
import Parallax from 'parallax-js';

// FullPage.js
const FullPageConfig = new fullpage('#fullpage', {
    licenseKey: null,
    anchors: ['Graditelj', 'Storitve', 'O_nas', 'Kontakt', 'Footer'],
    navigation: true,
	navigationPosition: 'left',
    css3: true,
    scrollingSpeed: 700,
    slidesNavigation: true,
	slidesNavPosition: 'bottom',
    controlArrows: false,
    keyboardScrolling: true
});

// Parallax.js
const scene = document.getElementById('parallax-scene');
const parallaxInstance = new Parallax(scene, {
    relativeInput: false
});

// Services category selection functionality
const sg = document.getElementById('sg-icon');
const sp = document.getElementById('sp-icon');
const fas = document.getElementById('fas-icon');

const changeCategory = (category) => {
    const image = document.getElementById('services-image');
    const description = document.getElementById(`${category}`);
    const descContainer = document.getElementById('descriptions');
    const activeDesc = descContainer.getElementsByClassName("active");

    image.style.backgroundImage = `url('../images/${category}.webp')`;
    activeDesc[0].className = activeDesc[0].className.replace("active", "");
    description.classList.add("active");
};

sg.addEventListener('click', function() {
    changeCategory('splosno-gradbenistvo');
});

sp.addEventListener('click', function() {
    changeCategory('stavbno-pohistvo');
});

fas.addEventListener('click', function() {
    changeCategory('fasaderstvo');
});

// Navigation menu functionality
const nav = document.getElementById("nav");
const menu = document.getElementById("menu-bar");
const list = document.getElementsByClassName("nav-list");
const navLinks = document.getElementsByClassName("nav-link");

const menuOnClick = () => {
    nav.classList.toggle("active");
    list[0].classList.toggle("active");
    menu.classList.toggle("active");
}

menu.addEventListener('click', function() {
    menuOnClick()
});

for(let i=0; i<navLinks.length; i++) {
    navLinks[i].addEventListener('click', function() {
        menuOnClick();
    })
}