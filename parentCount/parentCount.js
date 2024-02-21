import { LightningElement } from 'lwc';

export default class ParentCount extends LightningElement {
    count = 1;

    handleEventChange() {
        this.count++;
    }

}