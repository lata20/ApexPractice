
import { LightningElement,track } from 'lwc';

export default class ShapeCalculator extends LightningElement {
    start;
     end;
     time;
    
  

    side;
    dig1;
    dig2;
    length;
    breadth; 
    @track outputText;
    start = new Date(new Date().getTime());
    sideHandler(event){
        this.side=parseInt(event.target.value);
    }
    lengthHandler(event){
        this.length=parseInt(event.target.value);
    }
    breadthHandler(event){
        this.breadth=parseInt(event.target.value);
    }
    dig1Handler(event){
        this.dig1=parseInt(event.target.value);
    }
    dig2Handler(event){
        this.dig2=parseInt(event.target.value);
    }
    squareHandler(){
        this.outputText ='Area of square:'+(this.side*this.side);
        
    }
    rectHandler(){
        this.outputText ='Area of rect:'+(this.length*this.breadth);
        
    }
    rombhasHandler(){
        this.outputText ='Area of rombhas:'+(this.dig1*this.dig2)/2;
       this.end = new Date(new Date().getTime());
    }
    
time = new Date(this.end - this.start);

}