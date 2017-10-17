import utils from "./utils";

const totalJourneyLength = Math.round((Date.parse("October 1, 2016") - Date.now())/86400000);

export default (function(){
    
    return {
        addActiveClass, // Add active class to provided element
        request, // Detect if any element wich request animation is visible;
        listTriggers, // Return an array with every element that contain the data-trigger="true" attribute;
        removeEveryActiveClass, // Remove active class of everyElement
        setDisplayToBlock, // Set display of element to block
        setEveryDisplayToNone, // Set displau to none of every item   
        setEveryOpacityToZero, // Set opacity of every item to zero
        setOpacityToOne // Set opacity of an element to one
    };
    
    function addActiveClass(element, delay = 0){
        setTimeout(() => {
            element.classList.add('active');
        }, delay);
    }
    
    // 2. if it's on screen, check for siblings with animation data
    function request(elementsArray){
        [].forEach.call(elementsArray, el => {
           if(utils.isVisible(el, 100)){
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
    
    function removeEveryActiveClass(elementsList, delay = 0){
        setTimeout(()=>{
            [].forEach.call(elementsList, el => {
                el.classList.remove('active');
            });
        }, delay);
    }
    
    function setDisplayToBlock(element, delay = 0){
        setTimeout(()=>{
            element.style.display = "block";
        }, delay);
    }    
    
    function setEveryDisplayToNone(elementsList, delay = 0){
        setTimeout(()=>{
            [].forEach.call(elementsList, el => {
                el.style.display = "none";
            });
        }, delay);
    }    
    
    function setEveryOpacityToZero(elementsList, delay = 0){
        setTimeout(()=>{
            [].forEach.call(elementsList, el => {
                el.style.opacity = 0;
            });
        }, delay);
    }
    
    function setOpacityToOne(element, delay = 0){
        setTimeout(()=>{
            element.style.opacity = 1;
        }, delay);
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