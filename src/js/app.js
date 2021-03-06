import fullpage from 'fullpage.js';
import Parallax from 'parallax-js';

// FullPage.js
const FullPageConfig = new fullpage('#fullpage', {
    licenseKey: null,
    anchors: ['Graditelj', 'Storitve', 'O_nas', 'Kontakt', 'Info'],
    navigation: true,
	navigationPosition: 'left',
    css3: true,
    scrollingSpeed: 700,
    slidesNavigation: true,
	slidesNavPosition: 'bottom',
    controlArrows: false,
    keyboardScrolling: true,
    onLeave: function(origin, destination, direction, trigger){

        // Hamburger animation on scroll
        let bars = document.getElementsByClassName("bar");
        
        function triggerAnim(el, anim) {
            el.style.animation = anim + " 0.7s ease-in-out",
            el.style.transformOrigin = "right",
            setTimeout(function() {
                el.style.animation = "none",
                el.style.transformOrigin = "initial"
            }, 700);
        };

		if(direction == "down"){
            for(let bar of bars){
                triggerAnim(bar, "tiltUp")
            };
		}

		else if(direction == "up"){
            for(let bar of bars){
                triggerAnim(bar, "tiltDown")
            };
		}    
	}
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