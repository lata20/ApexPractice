import { LightningElement,track,api } from 'lwc';
import { createRecord } from "lightning/uiRecordApi";
 

export default class Lds extends LightningElement {
    @track show=true;
    today = new Date(); 
   
    @track endTime;
    @track diff;
    duration;
    storedTime=window.localStorage.getItem("startTimer");
      diff=new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});
      
    duration=this.diff; 
     
    button1Handler(){
          this.startTime=this.storedTime || this.startTimerHandler();
         
      //  this.startTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'}); 
       
       
            }
            startTimerHandler(){
                this.startTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'}); 
                window.localStorage.setItem('startTimer',this.startTime);
                return this.startTime;
            }
    
    button2Handler(){
        window.localStorage.removeItem("startTimer");
        this.endTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'}); 
        console.log(this.endTime); 
        this.diff = ((new Date().getTime())/1000/60/60)-((this.today.getTime())/1000/60/60);
        this.diff=(Math.floor(this.diff));
        
        console.log(this.diff);
        const fields = {'StartTime__c' : this.startTime, 'EndTime__c' : this.endTime, 'TotalDuration__c': this.diff};
        const recordInput = {apiName : 'Timesheet__c', fields};

        createRecord(recordInput).then(response => {
            console.log('Timesheet has been created : ', response.id);
           this.recId=response.id;
            
        }).catch(error =>{
            console.error('Error in creating account : ', error.body.message);
        });
        this.show=false;

       
    }
    button3Handler(){
        this.startTime="";
        this.endTime="";
        window.localStorage.removeItem("startTimer");
            }

            
            
 connectedCallback(){
    
     setInterval(() => {
       this.diff= new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});
    
     }, 1000);
     this.template.diff=this.diff;
     if (window.localStorage.getItem("startTimer")){
        
         this.template.startTime=this.startTime;
     }
     
    
}

}
