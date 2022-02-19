import fullpage from 'fullpage.js';
import Parallax from 'parallax-js';

const FullPageConfig = new fullpage('#fullpage', {
    licenseKey: null,
    anchors: ['Graditelj', 'Storitve', 'thirdPage', 'fourthPage'],
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

const sg = document.getElementById('sg');
const sp = document.getElementById('sp');
const fas = document.getElementById('fas');
const image = document.getElementById('services-image');

sg.addEventListener('click', function() {
    image.style.backgroundImage = "url('../images/splosno_gradbenistvo.png')";
});

sp.addEventListener('click', function() {
    image.style.backgroundImage = "url('../images/stavbno_pohistvo.png')";
});

fas.addEventListener('click', function() {
    image.style.backgroundImage = "url('../images/fasaderstvo.png')";
});
