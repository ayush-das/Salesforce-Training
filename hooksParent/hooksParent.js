import { LightningElement } from 'lwc';

export default class HooksParent extends LightningElement {

    constructor() {
        super();

        console.log(('##Constructor called in Parent'));
    }

    connectedCallback() {
        console.log(('##Connected callback called in Parent'));
    }

    renderedCallback() {
        console.log(('##Rendered callback called in Parent'));
    }

}