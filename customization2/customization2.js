import { LightningElement } from 'lwc';
import { ShowToastEvent } from 'lightning/platformShowToastEvent';

export default class Customization2 extends LightningElement {
    handleSuccess() {
        // Create a new instance of ShowToastEvent
        const event = new ShowToastEvent({
            title: 'Success Message',
            message: 'This is a success message',
            variant: 'success'
        });

        // Dispatch the event to show the toast notification
        this.dispatchEvent(event);
    }

    handleError() {
        // Create a new instance of ShowToastEvent
        const event = new ShowToastEvent({
            title: 'Error Message',
            message: 'This is an error message',
            variant: 'error'
        });

        // Dispatch the event to show the toast notification
        this.dispatchEvent(event);
    }

    handleInfo() {
        // Create a new instance of ShowToastEvent
        const event = new ShowToastEvent({
            title: 'Info Message',
            message: 'This is an info message {0}, {1}',
            variant: 'info',
            messageData: [
                'Test',
                {
                    url: 'http://www.google.com/',
                    label: 'Click here...',
                },
            ],

            mode: 'pester'
        });

        // Dispatch the event to show the toast notification
        this.dispatchEvent(event);
    }

    handleWarning() {
        // Create a new instance of ShowToastEvent
        const event = new ShowToastEvent({
            title: 'Warning Message',
            message: 'This is a warning message',
            variant: 'warning'
        });

        // Dispatch the event to show the toast notification
        this.dispatchEvent(event);
    }
}