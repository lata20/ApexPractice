import { LightningElement,track } from 'lwc';

export default class SimpleInterest extends LightningElement {
    principal;
    rate;
    year;
     
    @track outputText;
    principalHandler(event){
        this.principal=parseInt(event.target.value);
    }
    timeHandler(event){
        this.year=parseInt(event.target.value);
    }
    rateHandler(event){
        this.rate=parseInt(event.target.value);
    }
    buttonHandler(){
        this.outputText ='simple interest is:'+(this.principal*this.rate*this.year)/100;
        
    }
}