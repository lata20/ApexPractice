import { LightningElement, track } from 'lwc';
export default class Sample extends LightningElement {
   @track firstname='hello';
   handlechange(event){
  this.firstname=event.target.value;  // This will not change even we change the view text data.   
   }
}