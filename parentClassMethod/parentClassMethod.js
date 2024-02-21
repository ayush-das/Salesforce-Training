import { LightningElement } from 'lwc';

export default class ParentClassMethod extends LightningElement {
    handlechange(e) {
        this.template.querySelector('c-child-class-method').refresh();
    }

}