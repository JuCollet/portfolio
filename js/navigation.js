import elements from "./elements";
import animations from "./animations";
import utils from "./utils";

export default (function(){
    
    return {
        arrowInit,
        disableArrow,
        menuNavigation,
        menuInit,
        TouchScrollInit
    };
    
    function arrowInit(){
        const arrows = document.getElementsByClassName('qa-arrow');

        // 1. Select all arrows & add eventListener
        [].forEach.call(arrows, el => {
            el.addEventListener('click', el => {
                
                // 2. Onclick scroll into quick-apps-right to left or right
                if(el.currentTarget.getAttribute('id') === "quick-apps-left") {
                    elements.quickappsListElement.scrollLeft -= elements.quickAppScrollOffset;
                } else {
                    elements.quickappsListElement.scrollLeft += elements.quickAppScrollOffset;
                }
                
                disableArrow(elements.quickappsListElement, elements.quickAppLeftArrow, elements.quickAppRightArrow, elements.quickAppScrollOffset);

            });
        });
        
        // 3. If scroll position = 0, then add arrow left opacity .5 and cursor = initial;
        disableArrow(elements.quickappsListElement, elements.quickAppLeftArrow, elements.quickAppRightArrow, elements.quickAppScrollOffset);
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
        
        if(el.offsetWidth > el.scrollLeft + elements.quickAppScrollOffset && !isElementWiderThanWindow()){
            arrowRight.style.cursor = "pointer";
            arrowRight.style.opacity = "1";            
        } else {
            arrowRight.style.cursor = "auto";
            arrowRight.style.opacity = ".1";            
        }
    }
    
    function menuNavigation(e){
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
    
    function menuInit(){
        const getMenuLinksList = document.getElementsByClassName('project-body-nav-list');
        [].forEach.call(getMenuLinksList, el => {
            [].forEach.call(el.children, el=>{
                el.addEventListener('click', function(e) {
                    menuNavigation(e);
                });
            });
        });
    }    
    
    function TouchScrollInit(){
        const contentList = document.querySelectorAll('.project-body-content-list > li');
        let scrollRecord = [];

        // 1. Ajouter un touch event à tous les contenus
        [].forEach.call(contentList, el => {
            el.addEventListener('touchmove', function(e){
                //e.preventDefault(); // Side-effect : block vertical scrolling :(
                scrollRecord.push(e.targetTouches[0].clientX);
            });
            el.addEventListener('touchend', function(e){
                const siblingsList = e.target.parentElement.parentElement.getElementsByTagName('li');
                const mobileNavBullets = e.target.parentElement.parentElement.parentElement.parentElement.querySelectorAll('.project-body-nav-mobile > ul > li ');
                // 1. Voir à quelle position le li touché se trouve dans la liste
                const position = utils.getElementIndexInElementList(siblingsList, e.target.parentElement);

                // 2. Si swipe right et li suivant existe, => swap menu
               if(_TouchScroll(scrollRecord, position) === 1){ // Swipe previous (right to left)
                   animations.setEveryOpacityToZero(siblingsList);
                   animations.setEveryDisplayToNone(siblingsList, 100);
                   animations.setDisplayToBlock(siblingsList[position.index-1], 100);
                   animations.setOpacityToOne(siblingsList[position.index-1], 100);
                   animations.removeEveryActiveClass(mobileNavBullets, 100);
                   animations.addActiveClass(mobileNavBullets[position.index-1], 100);
               } else if(_TouchScroll(scrollRecord, position) === -1){ // Swipe next (left to right)
                   animations.setEveryOpacityToZero(siblingsList);
                   animations.setEveryDisplayToNone(siblingsList, 100);
                   animations.setDisplayToBlock(siblingsList[position.index+1], 100);
                   animations.setOpacityToOne(siblingsList[position.index+1], 100);
                   animations.removeEveryActiveClass(mobileNavBullets, 100);
                   animations.addActiveClass(mobileNavBullets[position.index+1], 100);
               }
                scrollRecord = [];
            });
        });
    }
    
    function _TouchScroll(scrollArray, position){
        if(scrollArray[0] < scrollArray[scrollArray.length - 1] - elements.touchMenuScrollOffset) {
            if(position.index > 0){
                return 1;
            } else {
                return 0;
            }
        } else if(scrollArray[0] > scrollArray[scrollArray.length - 1] + elements.touchMenuScrollOffset){
            if(position.index <= position.length-2){
                return -1;
            } else {
                return 0;
            }
        }
    }
    
}());