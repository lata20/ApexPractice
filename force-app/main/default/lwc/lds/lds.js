import { LightningElement,track } from 'lwc';
import { createRecord } from "lightning/uiRecordApi";

export default class Lds extends LightningElement {
    @track show=true;
    today = new Date(); 
    @track startTime;
    @track endTime;
    @track diff;
    duration;
    
      diff=new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});
      
    duration=this.diff; 
     
    button1Handler(){
        
        this.startTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});  
        console.log(this.startTime); 
    }
    
    button2Handler(){
        
        this.endTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'}); 
        console.log(this.endTime); 
        this.diff = ((new Date().getTime())/1000/60/60)-((this.today.getTime())/1000/60/60);
        this.diff=(Math.floor(this.diff));
        
        console.log(this.diff);
        const fields = {'StartTime__c' : this.startTime, 'EndTime__c' : this.endTime, 'TotalDuration__c': this.diff};
        const recordInput = {apiName : 'Timesheet__c', fields};

        createRecord(recordInput).then(response => {
            console.log('Timesheet has been created : ', response.id);
            
        }).catch(error =>{
            console.error('Error in creating account : ', error.body.message);
        });
        this.show=false;
    }
    button3Handler(){
        this.startTime="";
        this.endTime="";
            }

            
            
 connectedCallback(){
     setInterval(() => {
       this.diff= new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});
    
     }, 1000);
     this.template.diff=this.diff;
 }  
}

