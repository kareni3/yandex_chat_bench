export default class Form {

    constructor(formDOMElement) {
        this.form = formDOMElement;
        this.form.addEventListener('submit', (event) => {
            event.preventDefault();
            console.log(this.getInputValues());
        })
    }

    getInputValues() {
        const inputFields = [...this.form.getElementsByTagName('textarea'),
                             ...this.form.getElementsByTagName('input')];

        return Array.from(inputFields).map(inputField => inputField.value)
    }

}