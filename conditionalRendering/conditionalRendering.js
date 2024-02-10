import { LightningElement } from 'lwc';

export default class ConditionalRendering extends LightningElement {
    areDetailsAvailable = false;

    name = "Ayush Das"

    handleChange(event) {
        //if true then show div
        this.areDetailsAvailable = event.target.checked;
    }
}