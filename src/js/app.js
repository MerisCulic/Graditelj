import fullpage from 'fullpage.js';
import Parallax from 'parallax-js';

const FullPageConfig = new fullpage('#fullpage', {
    licenseKey: null,
    anchors: ['Graditelj', 'Storitve', 'O_nas', 'Kontakt'],
    navigation: true,
	navigationPosition: 'left',
    css3: true,
    scrollingSpeed: 700,
    slidesNavigation: true,
	slidesNavPosition: 'bottom',
    controlArrows: false,
    keyboardScrolling: true
});

const scene = document.getElementById('parallax-scene');
const parallaxInstance = new Parallax(scene, {
    relativeInput: false
});

const sg = document.getElementById('sg-icon');
const sp = document.getElementById('sp-icon');
const fas = document.getElementById('fas-icon');

const changeCategory = (category) => {
    const image = document.getElementById('services-image');
    const description = document.getElementById(`${category}`);
    const descContainer = document.getElementById('descriptions');
    const activeDesc = descContainer.getElementsByClassName("active");

    image.style.backgroundImage = `url('../images/${category}.avif')`;
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

const nav = document.getElementById("nav");
const menu = document.getElementById("menu-bar");
const list = document.getElementsByClassName("nav-list");

const menuOnClick = () => {
    nav.classList.toggle("active");
    list[0].classList.toggle("active");
}

menu.addEventListener('click', function() {
    menuOnClick()
});
