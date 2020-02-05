import $ from "jquery";

class Modal {
	constructor(){
		this.openModelButton=$(".openModal");
		this.modal=$(".modal");
		this.closeModalButton=$(".modal__close");
		this.events();
	}

	events(){
		this.openModelButton.click(this.openModal.bind(this));

		this.closeModalButton.click(this.closeModal.bind(this));

		$(document).keyup(this.keyPressHandler.bind(this));
	}

		keyPressHandler(event){
				if(event.keyCode==27){
					this.closeModal();
				}
		}
	openModal(){
			this.modal.addClass("modal--visible"); 
			return false;
	}

	closeModal(){
			this.modal.removeClass("modal--visible"); 
	}

}


export default Modal;