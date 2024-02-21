import { LightningElement,wire } from 'lwc';
import msgService from '@salesforce/messageChannel/lmsdemo__c';
import { subscribe,MessageContext, APPLICATION_SCOPE,unsubscribe } from 'lightning/messageService';
 
export default class LmsComponentB extends LightningElement {
@wire(MessageContext)
MessageContext;
 
messageReceived;
 
subscription;
 
handleMessage(message){
    this.messageReceived=message.lmsData.data?message.lmsData.data:'No Data Received';
}
 
connectedCallback(){
    this.subscription=subscribe(this.MessageContext,msgService,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE});
}
 
handleSubscribe(){
    console.log("Subscribed");
    this.subscription=subscribe(this.MessageContext,msgService,(message)=>{this.handleMessage(message)},{scope:APPLICATION_SCOPE});
}
 

handleUnSubscribe() {     
    try {         
        if (this.subscription) {                         
            unsubscribe(this.subscription);                        
             this.subscription = null;             
             console.log("Unsubscribed successfully.");        
             } 
             else {             
                console.log("No active subscription to unsubscribe from.");         
            }     
        } 
        catch(error) {         
            console.error("Error occurred during unsubscribe:", error);     
        } 
    }
}
 
