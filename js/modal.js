import elements from "./elements";
import modalGauge from "./modals/modal-freshgauge.html";

export default (function(){
    
    return {
        closeModal,
        modalInit
    };
    
    function closeModal(){
        elements.modal.style.transform = "translateY(100vh)";
        setTimeout(()=>{
            while (elements.modalContent.firstChild) {
                elements.modalContent.removeChild(elements.modalContent.firstChild);
            }
            elements.modalContent.style.display = "none";
        },250);
    }
    
    function modalInit(){
        elements.modalContent.innerHTML = modalGauge;
        elements.modalCloseButton.addEventListener('click', () => {
            closeModal();
        });
    }
    
    
    
}());