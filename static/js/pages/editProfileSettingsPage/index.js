import modal from '../../../styles/blocks/common/modal/modal.js';

const modalNames = [
    'modal_name_upload-file',
]

modalNames.forEach(modalName => {
    document.querySelector(`.${modalName} .modal__background`)
        .addEventListener('click', () => { modal.close(`.${modalName}`) });
})