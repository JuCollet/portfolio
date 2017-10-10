import normalize from "normalize.css";
import styles from "../less/styles.less";

import '../img/periscope_demo_short_ld.mp4';
import '../img/periscope_iphone_mockup.png';
import '../img/periscope_macbook_mockup.png';
import '../img/periscope_macbook_screen.png';
import '../img/qa_centpatates_app.png';
import '../img/qa_paycheck_app.png';
import '../img/qa_puzzle_app.png';
import '../img/qode_iphone_mockup_1.png';
import '../img/qode_iphone_mockup_2.png';
import '../img/qode_pixel_mockup.png';


const ui = {};
const totalJourneyLength = Math.round((Date.parse("October 1, 2016") - Date.now())/86400000);
const quickappsListElement = document.getElementsByClassName('quick-apps-list')[0];
const quickAppLeftArrow = document.getElementById('quick-apps-left');
const quickAppRightArrow = document.getElementById('quick-apps-right');
const quickAppScrollOffset = 100;

const start = function(){
    const triggers = ui.animation.listTriggers();
    ui.menu.init();
    ui.navigation.arrowInit();
    window.addEventListener('scroll', function(e) {
        ui.animation.request(triggers);
    });
    window.addEventListener('resize', function(){
        ui.navigation.disableArrow(quickappsListElement, quickAppLeftArrow, quickAppRightArrow);
    });
};

ui.animation = (function(){
    
    return {
        request, // Detect if any element wich request animation is visible;
        listTriggers // Return an array with every element that contain the data-trigger="true" attribute;
    };
    
    // 2. if it's on screen, check for siblings with animation data
    function request(elementsArray){
        [].forEach.call(elementsArray, el => {
           if(ui.utils.isVisible(el, 100)){
                _addOrRemoveAnimationClass(el, true);
           } else {
                _addOrRemoveAnimationClass(el, false);
           }
        });
    }
    
    function listTriggers(){
        let triggersArray = [];
        const allTags = document.getElementsByTagName('*');
        [].forEach.call(allTags, function(element){
            if(element.getAttribute("data-trigger")){
                triggersArray.push(element);
            }
        });
        return triggersArray;
    }
    
    // 3. if data animation is present & element on screen, add data-animation class to element
    // 4. if data animation is present & element on off, remove data-animation class from element if it has one    
    function _addOrRemoveAnimationClass(element, elementMustBeAdded){
        [].forEach.call(element.parentElement.parentElement.getElementsByTagName('*'), el=>{
            if(el.getAttribute("data-animation")){
                el.getAttribute("data-animation").split(' ').forEach(function(animationName){
                    if(animationName === 'video'){
                        return _launchVideo(el, elementMustBeAdded);
                    }
                    if(animationName === 'needle'){
                        return _updateGaugeNeedlePosition(el, elementMustBeAdded);
                    }                    
                    if(elementMustBeAdded ? !el.classList.contains(animationName) : el.classList.contains(animationName)){
                        elementMustBeAdded ? el.classList.add(animationName) : el.classList.remove(animationName);
                    }
                    if(animationName === 'slide'){
                        _moveUpDown(el, elementMustBeAdded);
                    }
                });
            }
        });    
    }
    
    function _moveUpDown(element, isHappening){
        if(isHappening && !element.getAttribute("data-move") || element.getAttribute("data-move") === 'undefined'){
            element.setAttribute("data-move", window.scrollY);
        }
        if(isHappening){
            element.style.transform = `translate(0px,${(element.getAttribute("data-move") - window.scrollY)/10}px)`;
        } else {
            element.setAttribute("data-move", undefined);
        }
    }
    
    function _launchVideo(element, isHappening){
        if(isHappening){
            setTimeout(_=>{
                element.play();      
            }, 1500);
        }
    }
    
    function _updateGaugeNeedlePosition(el, isHappening){
        if(isHappening){
            let freshness = Math.round((((Date.parse(el.getAttribute("data-date")) - Date.now())/86400000)/totalJourneyLength)*180);
            if(freshness-90 < 0){
            freshness = Math.abs(freshness-90) > 90 ? 90 : Math.abs(freshness-90);
            } else {
            freshness = -Math.abs(freshness-90) < - 90 ? -90 : -Math.abs(freshness-90);
            }
            el.parentNode.getElementsByClassName('gauge-oldness')[0].innerText = Math.abs(Math.round((Date.parse(el.getAttribute("data-date")) - Date.now())/86400000)) + " jours";
            el.getElementById('gauge-needle').setAttribute('transform', `rotate(${freshness} 50 50)`);
        }
    }
    
}());

ui.menu = (function(){
    
    return {
        navigation,
        init
    };
    
    function navigation(e){
        const selectedLinks = e.currentTarget;
        const selectedLinksText = selectedLinks.innerText;
        const content = selectedLinks.parentNode.parentElement.parentElement.getElementsByClassName("project-body-content-list")[0];
        const contentList = content.getElementsByTagName('li');
        
        // 1. Remove "active" class of all siblings links
        [].forEach.call(selectedLinks.parentNode.children, el => {
            if(el !== selectedLinks){
                el.classList.remove('active');
            }
        });
        
        // 2. Add "active" class to selected links
        selectedLinks.classList.add('active');
        
        // 3. Add opacity "0" to every li element
        [].forEach.call(contentList, el => {
            el.style.opacity = 0;
            el.classList.remove('active');
        });
        
        // 4. Add "active" class to selected li element
        // 5. Add opacity "1" to selected li element
        try {
            content.getElementsByClassName(selectedLinksText)[0].classList.add('active');
            content.getElementsByClassName(selectedLinksText)[0].style.opacity = 1;
        } catch(e){
            throw new Error('Missing content named "'+selectedLinksText+'"');
        }          
    }
    
    function init(){
        const getMenuLinksList = document.getElementsByClassName('project-body-nav-list');
        [].forEach.call(getMenuLinksList, el => {
            [].forEach.call(el.children, el=>{
                el.addEventListener('click', function(e) {
                    ui.menu.navigation(e);
                });
            });
        });
    }
    
}());

ui.navigation = (function(){
    
    return {
        arrowInit,
        disableArrow
    };
    
    function arrowInit(){
        const arrows = document.getElementsByClassName('qa-arrow');

        // 1. Select all arrows & add eventListener
        [].forEach.call(arrows, el => {
            el.addEventListener('click', el => {
                
                // 2. Onclick scroll into quick-apps-right to left or right
                if(el.currentTarget.getAttribute('id') === "quick-apps-left") {
                    quickappsListElement.scrollLeft -= quickAppScrollOffset;
                } else {
                    quickappsListElement.scrollLeft += quickAppScrollOffset;
                }
                
                disableArrow(quickappsListElement, quickAppLeftArrow, quickAppRightArrow, quickAppScrollOffset);

            });
        });
        
        // 3. If scroll position = 0, then add arrow left opacity .5 and cursor = initial;
        disableArrow(quickappsListElement, quickAppLeftArrow, quickAppRightArrow, quickAppScrollOffset);
    }
    
    function disableArrow(el, arrowLeft, arrowRight){
        
        function isElementWiderThanWindow(){
            return el.getElementsByTagName('li')[el.getElementsByTagName('li').length - 1].getBoundingClientRect().right < window.innerWidth;
        }
        
        if(el.scrollLeft === 0){
            arrowLeft.style.cursor = "auto";
            arrowLeft.style.opacity = ".1";
        } else {
            arrowLeft.style.cursor = "pointer";
            arrowLeft.style.opacity = "1";
        }
        
        if(el.offsetWidth > el.scrollLeft + quickAppScrollOffset && !isElementWiderThanWindow()){
            arrowRight.style.cursor = "pointer";
            arrowRight.style.opacity = "1";            
        } else {
            arrowRight.style.cursor = "auto";
            arrowRight.style.opacity = ".1";            
        }
    }
    
}());

ui.utils = (function(){
    
    return {
        isVisible // Detect if an element is x % visible in viewport (element, int: 0-100);
    };
    
    // 1. detect if a trigger is (or half, entirely) on screen.
    function isVisible(element, visibility){
        
        let visibilityOffset;
        const elementTopPosition = element.getBoundingClientRect().top;
        
        if(visibility && visibility <= 100 || visibility > 0){
            visibilityOffset = element.offsetHeight / 100 * visibility;   
        } else {
            visibilityOffset = 0;
        }
        
        if(
            elementTopPosition <= window.innerHeight - visibilityOffset &&
            elementTopPosition > 0 + (visibilityOffset - element.offsetHeight)
        ){
            return true;    
        } else {
            return false;
        }
    }
    
}());

start();