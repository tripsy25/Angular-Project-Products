import { verifyHostBindings } from "@angular/compiler";
import { Component, Input, OnChanges, Output, SimpleChanges, EventEmitter } from "@angular/core";

@Component({
    selector: 'pm-star',
    templateUrl: './star.component.html',
    styleUrls: ['./star.component.css']
})

export class StarComponent implements OnChanges{    //OnChanges is an Interface
    ngOnChanges(changes: SimpleChanges): void {
        this.cropWidth = this.rating * 75/5;    //Calculation for cropping the stars and displaying them
                                    //It will happen when ngOnChanges lifecycle hook event occurs &
                                    // it will only occur when it watches for changes to input properties.
    } 
    @Input() rating: number = 4;     //Both these properties are binded inside the star.component.html file
                                    //@Input is the decorator here and is used to communicate 
                                    //between the Nested component and the Container(Parent component)
                                    //Inside product.component.html, property binding took place for the 
                                    //property which is having @Input decorator. 
                                    //Anytime the container data changes, the OnChanges lifecycle 
                                    //event is generated. The cropWidth is recalculated and the appropriate stars
                                    //are displayed.
    cropWidth: number = 75;

    @Output() ratingClicked : EventEmitter<string> = 
    new EventEmitter<string>();  //Aptly output decorator for sending data
    //from nested to container component.

    onClick() : void {
       // console.log(`The rating ${this.rating} was clicked!`); //Here, we're using 
                    //ES2015 backticks to specify a javascript template literal.
                    //A template literal allows us to use a placeholder to
                    // insert an expression within a string($(this.rating))
                    //Every time the user try to click the rating, the rating will be
                    //shown inside the debugging window on chrome.

       //Here, instead of logging, we want to emit our ratingClicked event and
       //pass the message to the container component.
       
       this.ratingClicked.emit(`The rating ${this.rating} was called.`)
       //We use the event property and call it's emit method passing in the
       //desired string. Now, we're emitting this ratingClicked event to our
       //container, how does the container listen to and respond to the event?
       //It uses Event Binding. In the product-list.component.html,  we bind to 
       //the event emitted from the StarComponent using event binding.
       //For event binding, we use paranthesis and specify 
       //the name of the event to listen for. We want to 
       //listen to the Star Component's ratingClicked event.
       //When the event occurs, we call a method in the 
       //product-list.component. Let's call it 
       //onRatingClicked.
       //Recall that we are passing a string when raising
       //this event so let's pass that string into our 
       //onRatingClicked method. We do that using $event,
       //$event passes along any data associated with the 
       //generated event.
       
    }
    
}


