import normalize from "normalize.css";
import styles from "../less/styles.less";

const ui = {};

const start = function(){
    const triggers = ui.animation.listTriggers();
    window.addEventListener('scroll', function(e) {
        ui.animation.request(triggers);
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
            if(element.dataset && element.dataset.trigger){
                triggersArray.push(element);
            }
        });
        return triggersArray;
    }
    
    // 3. if data animation is present & element on screen, add data-animation class to element
    // 4. if data animation is present & element on off, remove data-animation class from element if it has one    
    function _addOrRemoveAnimationClass(element, elementMustBeAdded){
        [].forEach.call(element.parentElement.parentElement.getElementsByTagName('*'), el=>{
            if(el.dataset && el.dataset.animation || el.getAttribute("data-animation")){ // Added 'getAttribute' method for Safari issue;
                el.dataset.animation.split(' ').forEach(function(animationName){
                    if(elementMustBeAdded ? !el.classList.contains(animationName) : el.classList.contains(animationName)){
                        elementMustBeAdded ? el.classList.add(animationName) : el.classList.remove(animationName);
                    }
                    if(animationName === 'slide'){
                        _moveUpDown(el, elementMustBeAdded);
                    }
                    if(animationName === 'video'){
                        _launchVideo(el, elementMustBeAdded);
                    }
                });
            }
        });    
    }
    
    function _moveUpDown(element, isHappening){
        if(isHappening && !element.dataset.move || element.dataset.move === 'undefined'){
            element.dataset.move = window.scrollY;
        }
        if(isHappening){
            element.style.transform = `translate(0px,${(element.dataset.move - window.scrollY)/10}px)`;
        } else {
            element.dataset.move = undefined;
        }
    }
    
    function _launchVideo(element, isHappening){
        if(isHappening){
            setTimeout(_=>{
                element.play();      
            }, 3000);
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