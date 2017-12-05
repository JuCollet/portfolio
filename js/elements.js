export default {
    body : document.querySelector('body'),
    dateDay : document.querySelectorAll('.dateDay-string'),
    dateSpans : document.querySelectorAll('.date-string'),
    freshness : document.getElementsByClassName('freshness'),
    journeyLength : document.querySelectorAll('.journeyLength-string'),
    landingTechno : document.getElementById('landing-techno'),
    landingArt : document.getElementById('art-portrait'),
    modal : document.getElementById('modal'),
    modalContent : document.getElementById('modal-content'),
    modalCloseButton : document.getElementById('nav-modal-close-btn'),
    quickappsListElement : document.getElementsByClassName('quick-apps-list')[0],
    quickappsElements : document.querySelectorAll('.quick-apps-list li'),
    quickAppLeftArrow : document.getElementById('quick-apps-left'),
    quickAppRightArrow : document.getElementById('quick-apps-right'),
    quickAppScrollOffset : 100,
    touchMenuScrollOffset : 25
};