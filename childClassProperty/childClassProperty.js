import { LightningElement, api } from 'lwc';

export default class ChildClassProperty extends LightningElement {
    @api percentage;

    get style() {
        return `background-color: red; min-height: 20px; width: ${this.percentage}%; min-width: 10px; border: 1px solid black;`;
    }
}