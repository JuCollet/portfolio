import elements from "./elements";
import modalGauge from "./modals/modal-freshgauge.html";
import modalQaCP from "./modals/modal-qa-centpatates.html";
import utils from "./utils";
import animations from "./animations";

export default (function(){
    
    return {
        closeModal,
        linksInit,
        modalInit,
        buildModal
    };
    
    function buildModal(nameOfModal){
        if(nameOfModal === "modalGauge"){
            elements.modalContent.innerHTML = modalGauge;
            document.querySelector('#modal-today-date').innerHTML = utils.todayDateToString();
        } else if(nameOfModal === "modalQaCP") {
            elements.modalContent.innerHTML = modalQaCP;
            animations.updateGaugeNeedlePosition(document.querySelector('.modal-qa').querySelector('.gauge'), true);
        } else {
            return ;
        }
        _showModal();
    }    
    
    function closeModal(){
        elements.modal.style.top = "100vh";
        setTimeout(()=>{
            while (elements.modalContent.firstChild) {
                elements.modalContent.removeChild(elements.modalContent.firstChild);
            }
            elements.modalContent.style.display = "none";
        },250);
    }
    
    function linksInit(){
        [].forEach.call(elements.freshness, el => {
            el.addEventListener('click', () => {
                buildModal('modalGauge');
            });
        });
    }
    
    function modalInit(){
        buildModal("modalQaCP");
        elements.modalCloseButton.addEventListener('click', () => {
            closeModal();
        });
    }
    
    function _showModal(){
        elements.modalContent.style.display = "block";
        elements.modal.style.top = "0";
    }
    
}());