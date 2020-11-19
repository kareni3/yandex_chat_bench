import Modal from '../../../styles/blocks/common/modal/modal.js';

const modal = new Modal();

const modalNames = [
    'modal_name_upload-file',
]

modalNames.forEach(modalName => {
    document.querySelector(`.${modalName} .modal__background`)
        .addEventListener('click', () => { modal.close(`.${modalName}`) });
})