export default class Modal {

    close(selector) {
        const modalContainer = document.querySelector(selector);
        modalContainer.classList.remove("modal_state_opened");
    }

    open(selector) {
        const modalContainer = document.querySelector(selector);
        modalContainer.classList.add("modal_state_opened");
    }

}