import modal from '../../../styles/blocks/common/modal/modal.js';

const modalNames = [
    'modal_name_add-new-contact',
    'modal_name_add-new-user',
    'modal_name_remove-user'
]

modalNames.forEach(modalName => {
    document.querySelector(`.${modalName} .modal__background`)
        .addEventListener('click', () => { modal.close(`.${modalName}`) });
})