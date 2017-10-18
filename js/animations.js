import utils from "./utils";
import elements from "./elements";
import { landingTechno as technoContent } from "./content";

const totalJourneyLength = Math.round((Date.parse("October 1, 2016") - Date.now())/86400000);

export default (function(){
    
    return {
        addActiveClass, // Add active class to provided element
        request, // Detect if any element wich request animation is visible;
        landingTechno, // Animate the names of the technologies learned in landing page;
        listTriggers, // Return an array with every element that contain the data-trigger="true" attribute;
        removeEveryActiveClass, // Remove active class of everyElement
        setDisplayToBlock, // Set display of element to block
        setEveryDisplayToNone, // Set displau to none of every item   
        setEveryOpacityToZero, // Set opacity of every item to zero
        setOpacityToOne, // Set opacity of an element to one
        updateGaugeNeedlePosition // Update gauge needle position
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
    
    function landingTechno(){
        const landingTechnoSpan = elements.landingTechno;
        const technosLength = technoContent.length;
        const intervals = 75;
        let currentPosition = 0;

        const removeChars = () => {
            this.technoLength = landingTechnoSpan.innerText.length;
            this.removeLetter = setInterval(() => {
                landingTechnoSpan.innerText = landingTechnoSpan.innerText.slice(0,-1);
                this.technoLength--;
                if(this.technoLength === 0){
                    clearInterval(this.removeLetter);
                    addChars();
                }
            }, intervals);
        };
        
        const addChars = () => {
            if(currentPosition === technosLength){
                currentPosition = 0;
            }
            this.technoLength = technoContent[currentPosition].length;
            this.cursor = 0;
            this.addCharsInterval = setInterval(()=>{
                landingTechnoSpan.innerText = landingTechnoSpan.innerText + technoContent[currentPosition][this.cursor];
                this.cursor++;
                if(this.cursor === this.technoLength){
                    clearInterval(this.addCharsInterval);
                    currentPosition++;
                    changeTechno();
                }
            }, intervals);
        };

        const changeTechno = () => {
            setTimeout(()=>{
                removeChars();
            }, 3500);
        };
        
        changeTechno();

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
                        return updateGaugeNeedlePosition(el, elementMustBeAdded);
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
    
    function updateGaugeNeedlePosition(el, isHappening){
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