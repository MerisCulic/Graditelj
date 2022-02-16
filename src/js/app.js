import fullpage from 'fullpage.js';
import Parallax from 'parallax-js';
import 'bootstrap';

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