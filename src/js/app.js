import fullpage from 'fullpage.js';
import Parallax from 'parallax-js';

const FullPageConfig = new fullpage('#fullpage', {
    licenseKey: null,
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', '#ccddff'],
    anchors: ['Graditelj', 'Storitve', 'thirdPage', 'fourthPage'],
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