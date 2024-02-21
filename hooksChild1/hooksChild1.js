import { LightningElement } from 'lwc';

export default class HooksChild1 extends LightningElement {

    constructor() {
        super();

        console.log(('###Constructor called in Child1'));
    }

    connectedCallback() {
        console.log(('###Connected callback called in Child1'));
    }

    renderedCallback() {
        console.log(('###Rendered callback called in Child1'));
    }

}