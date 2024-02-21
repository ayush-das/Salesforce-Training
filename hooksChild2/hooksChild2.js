import { LightningElement } from 'lwc';

export default class HooksChild2 extends LightningElement {
    constructor() {
        super();

        console.log(('###Constructor called in Child2'));
    }

    connectedCallback() {
        console.log(('###Connected callback called in Child2'));
    }

    renderedCallback() {
        console.log(('###Rendered callback called in Child2'));
    }

}