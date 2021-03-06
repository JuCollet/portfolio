import normalize from "normalize.css";
import styles from "../less/styles.less";

import '../img/logo.png';
import '../img/nav-modal-close.svg';
import '../img/periscope_demo_short_ld.mp4';
import '../img/periscope_iphone_mockup.png';
import '../img/periscope_macbook_mockup.png';
import '../img/periscope_macbook_screen.png';
import '../img/profileImg.jpeg';
import '../img/qa_centpatates_app.png';
import '../img/qa_paycheck_app.png';
import '../img/qa_puzzle_app.png';
import '../img/qode_iphone_mockup_1.png';
import '../img/qode_iphone_mockup_2.png';
import '../img/qode_pixel_mockup.png';
import '../img/portrait.jpg';

import animations from "./animations";
import { totalJourneyLength } from "./content";
import modal from "./modal";
import navigation from "./navigation";
import elements from "./elements";
import utils from "./utils";

modal.modalInit();
modal.linksInit();
navigation.menuInit();
navigation.arrowInit();
navigation.TouchScrollInit();
animations.landingTechno();
animations.setOpacityToOne(elements.landingArt);


[].forEach.call(elements.dateSpans, el => {
    el.innerHTML = utils.todayDateToString(true);
});

[].forEach.call(elements.journeyLength, el => {
    el.innerHTML = Math.abs(totalJourneyLength);
});

[].forEach.call(elements.dateDay, el => {
    el.innerHTML = utils.todayDateToString(false,true);
});

window.addEventListener('scroll', function(e) {
    animations.request(animations.listTriggers());
});
window.addEventListener('resize', function(){
    navigation.disableArrow(elements.quickappsListElement, elements.quickAppLeftArrow, elements.quickAppRightArrow);
});