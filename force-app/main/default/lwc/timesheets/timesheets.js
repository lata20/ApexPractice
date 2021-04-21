import { LightningElement , track} from 'lwc';
import { createRecord } from "lightning/uiRecordApi";
export default class timesheets extends LightningElement {
   // @track show=true;
    timer = '0'
    timerRef
    
    actionHandler(event){
        const {label} = event.target
        if(label === 'Start'){
            this.setTimer()
        }
        if(label === 'Stop'){
            window.clearInterval(this.timerRef)
            window.localStorage.removeItem('startTimer')
            this.endTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});  
            console.log(this.endTime);
            //this.show=false;
            this.diff = ((new Date().getTime())/1000/60/60)-((this.startTimer.getTime())/1000/60/60);
            this.diff=(Math.floor(this.diff));
            console.log(this.diff);
        }
    }

            action1Handler(){
            const fields = {'StartTime__c' : this.StartTimerHandler(), 'EndTime__c' : this.endTime, 'TotalDuration__c': this.diff};
            const recordInput = {apiName : 'Timesheet__c', fields};
            createRecord(recordInput).then(response => {
                console.log('Timesheet has been created : ', response.id);
            }).catch(error =>{
                console.error('Error in creating account : ', error.body.message);
            });
        }
        
       
        
    
    StartTimerHandler(){
        this.startTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});  
        window.localStorage.setItem('startTimer', this.startTime);
        return this.startTime;
    }
    setTimer(){
       // const startTime = new Date( window.localStorage.getItem("startTimer") || this.StartTimerHandler())
        
        this.timerRef = window.setInterval(()=>{
            //const secsDiff = new Date().getTime() - startTime.getTime()
           // console.log(this.secsDiff);
          //  this.timer = this.secondToHms(Math.floor(secsDiff/1000))
          this.timer = this.StartTimerHandler();
          console.log(this.timer);
        }, 1000)
    }

    
    connectedCallback(){
        if(window.localStorage.getItem("startTimer")){
            this.setTimer()
        }
    }
}