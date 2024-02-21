import { LightningElement } from 'lwc';

export default class ChildComponent extends LightningElement {
    handleInputChange(event) {

        //tHE MESSAGE IS STORED AND SENT TO Event.Detail
        const message = event.target.value;
        this.dispatchEvent(new CustomEvent('messagechange', { detail: message }));
    }
}