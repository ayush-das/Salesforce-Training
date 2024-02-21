import { LightningElement,wire } from 'lwc';
import msgService from '@salesforce/messageChannel/lmsdemo__c';
import { publish,MessageContext } from 'lightning/messageService';
export default class LmsComponentA extends LightningElement {
    @wire(MessageContext) 
    messageContext;

    inputMessage;

    handleChange(event){
        this.inputMessage=event.detail.value;
    }

    handlePublish(){
        const message={
            lmsData:{
                data:this.inputMessage
            }
    };
    publish(this.messageContext,msgService,message);
}

    
}