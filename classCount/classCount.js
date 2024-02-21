import { LightningElement } from 'lwc';

export default class ClassCount extends LightningElement {
    handleClick() {
        //Send Event To Parent
        this.dispatchEvent(new CustomEvent('increasecount'));
    }

}