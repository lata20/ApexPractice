import { LightningElement,track } from 'lwc';

export default class Target extends LightningElement {
    @track msg;
   
    connectedCallback(){
        this.timerRef = window.setInterval(()=>{
            //const secsDiff = new Date().getTime() - startTime.getTime()
           // console.log(this.secsDiff);
          //  this.timer = this.secondToHms(Math.floor(secsDiff/1000))
          this.timer = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit', second: '2-digit'});  
          console.log('testing',this.timer);
          
        }, 1000)
    
        this.template.queryse
    }   
}