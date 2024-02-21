import { LightningElement } from 'lwc';

export default class PrimitiveTypeParent extends LightningElement {

    message;

    changeText(event) {
        this.message = event.target.value;
    }
}