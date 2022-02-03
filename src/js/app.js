import fullpage from 'fullpage.js';

const FullPageConfig = new fullpage('#fullpage', {
    licenseKey: null,
    sectionsColor: ['#f2f2f2', '#4BBFC3', '#7BAABE', '#ccddff'],
    anchors: ['Graditelj', 'Storitve', 'thirdPage', 'fourthPage'],
    menu: '#fullpage',
    css3: true,
    scrollingSpeed: 700
})