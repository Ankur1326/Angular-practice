import { Component } from '@angular/core';

@Component({
  selector: 'app-card',
  templateUrl: './card.component.html',
  styleUrls: ['./card.component.css']
})
export class CardComponent {

  nameInParent: string = 'defaule value'
  recieveName(name: string) {
    this.nameInParent = name
    
    console.log("recive value is " ,this.nameInParent);
    
  }
}
