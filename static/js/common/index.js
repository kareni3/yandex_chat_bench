import Form from '../../styles/blocks/common/form/form.js';


(function init () {
    initForms();
})();

function initForms() {
    const formDOMElements = document.getElementsByClassName('form')

    for (let formDOMElement of formDOMElements) {
        new Form(formDOMElement)
    }
}