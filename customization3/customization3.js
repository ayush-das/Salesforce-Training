import { LightningElement } from 'lwc';
import LightningAlert from "lightning/alert";
import LightningConfirm from "lightning/confirm";
import LightningPrompt from "lightning/prompt";

export default class Customization3 extends LightningElement {

    async handleAlertClick() {
        await LightningAlert.open({
            message: "This is the alert message.",
            theme: "error", // a red theme intended for error states
            label: "Error!", // this is the header text
        });
        // alert notification has been closed
        //After Close we can Show Someting else
    }

    async handleConfirmClick() {
        await LightningConfirm.open({
            message: "This is the confirmation message.",
            variant: "headerless",
            label: "This is the aria-label value",
        });
    }

    async handlePromptClick() {
        await LightningPrompt.open({
            message: "Please enter your feedback:",
            // theme defaults to "default"
            label: "Please Respond!", // this is the header text 
            defaultValue: "Optional initial input value ...!!",
        });
    }



}