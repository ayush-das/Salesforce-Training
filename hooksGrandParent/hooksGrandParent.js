import { LightningElement } from 'lwc';

export default class HooksGrandParent extends LightningElement {

    constructor() {
        super();

        console.log(('#constructor called in Grand Parent'));
    }

    connectedCallback() {
        console.log(('#Connected callback called in Grand Parent'));
    }

    renderedCallback() {
        console.log(('#Rendered callback called in Grand Parent'));
    }
}