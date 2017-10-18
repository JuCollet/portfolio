export default (function(){
    
    return {
        getElementIndexInElementList,
        todayDateToString,
        isVisible // Detect if an element is x % visible in viewport (element, int: 0-100);
    };
    
    function getElementIndexInElementList(elementList, element){
        let i = 0;
        let index = 0;
        [].forEach.call(elementList, el => {
            if(el === element){
                index = i;
            }
            i++;
        });
        return {
            index,
            length : i
        };
    }
    
    function todayDateToString(){
        const dayNames = ["lundi","mardi","mercredi","jeudi","vendredi","samedi","dimanche"];
        const monthNames = ["janvier", "février", "mars", "avril", "mai", "juin", "juillet", "août", "septembre", "octobre", "novembre", "décembre"];
        const date = new Date();
        return `${dayNames[date.getDay()]} ${date.getDate()} ${monthNames[date.getMonth()]}`;
    }
    
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
