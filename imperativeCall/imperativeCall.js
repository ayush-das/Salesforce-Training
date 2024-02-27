import { LightningElement, api, track } from 'lwc';
import getAccounts from '@salesforce/apex/AccountController.getAccounts';

export default class ImperativeCall extends LightningElement {
    @api accList;
    @api error;
    @track columns = [
        { label: 'Account Number', fieldName: 'Id', type: 'text' },
        { label: 'Account Name', fieldName: 'Name', type: 'text' },
        { label: 'Type', fieldName: 'Type', type: 'text' },
        { label: 'Industry', fieldName: 'Industry', type: 'text' },
        { label: 'Annual Revenue', fieldName: 'AnnualRevenue', type: 'currency' },
        { label: 'Phone', fieldName: 'Phone', type: 'phone' }
    ];

    fetchAccountsData() {
        getAccounts()
            .then(result => {
                this.accList = result;

            })
            .catch(error => {
                this.error = error;
                console.error('Error fetching accounts:', error); // Log error for debugging
            });
    }
}