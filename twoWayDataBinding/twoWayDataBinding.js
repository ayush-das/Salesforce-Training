import { LightningElement } from 'lwc';

export default class TwoWayDataBinding extends LightningElement {
    //Store a String

    userValue = '';



    handleChange(event) {
        this.userValue = event.target.value;
    }

}