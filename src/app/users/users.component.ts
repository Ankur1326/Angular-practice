import { Component, EventEmitter, Input, OnInit, Output, OnChanges, OnDestroy } from '@angular/core';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrls: ['./users.component.css']
})
export class UsersComponent implements OnInit, OnChanges, OnDestroy {

  @Input() name!: string;
            
  @Input() firstName: string;
  @Input() lastName: string;
  @Input() age: Number;
  @Input() salary: Number;
  @Input() imagePath: string;
  
  @Output() myevent = new EventEmitter<string>()
  
  passData() {
    this.myevent.emit("coders never quit")
  }

  constructor() {

  }

  text: String;

  listenerRef = setInterval(() => {}, 1000)
  
  ngOnInit() { // ngOnInit is always call after constrctor
    this.text = "I am text"
    // properties 
    // event listener register
    // initial data fetch
    
    this.listenerRef = setInterval(() => {
      console.log('timer running...')
    }, 2000)
  }

  ngOnChanges() {  // ngOnChanges is called after the constructor but before the "ngOnInit" method called and when input properties are updated then again will be calling. 

  }

  ngOnDestroy() {
    console.log("ngOnDestroy");
    clearInterval(this.listenerRef)
    
  }

}