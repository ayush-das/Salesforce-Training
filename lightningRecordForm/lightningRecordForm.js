import { LightningElement, api } from 'lwc';

import { ShowToastEvent } from 'lightning/platformShowToastEvent';
import NAME from '@salesforce/schema/Account.Name';
import REVENUE from '@salesforce/schema/Account.AnnualRevenue';
import INDUSTRY from '@salesforce/schema/Account.Industry';

export default class LightningRecordForm extends LightningElement {

    @api recordId;
    @api objectApiName;

    fields = [NAME, REVENUE, INDUSTRY];


    handleSubmit() {

        const evt = new ShowToastEvent({
            title: 'Account Updated',
            message: " Records Updated",
            variant: "success"
        });

        this.dispatchEvent(evt);

    }


    handleSubmit1() {

        const evt = new ShowToastEvent({
            title: 'Account Created',
            message: " Account Created successfully",
            variant: "success"
        });

        this.dispatchEvent(evt);

    }
}