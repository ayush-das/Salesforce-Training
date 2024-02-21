import { LightningElement } from 'lwc';

export default class ParentClassProperty extends LightningElement {

    percentage

    handleChange(event) {
        this.percentage = event.target.value;
    }


}