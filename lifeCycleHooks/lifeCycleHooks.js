import { LightningElement } from 'lwc';

export default class LifeCycleHooks extends LightningElement {
    myList = [];
    areDetailsAvailable = false;

    name = "Ayush Das"

    handleChange(event) {
        this.areDetailsAvailable = event.target.checked;
    }

    // constructor() {
    //     super();
    //     console.log('LifeCycleHooks constructor called');
    // }

    // connectedCallback() {
    //     this.myList.push('LWC Training');
    //     console.log('Connected callback called');
    // }

    // disconnectedCallback() {

    //     //remove memory
    //     this.myList = '';
    //     console.log('Connected callback called');
    // }

    // renderedCallback() {
    //     console.log('Rendered callback called');
    // }

    // errorCallback(error, stack) {

    //     console.log('Error callback called' + error);

    // }
}