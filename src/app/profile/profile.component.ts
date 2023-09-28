import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name:string = "Ankur"
  age:number = 20
  status:string = "coder" 
  salary:number = 120 

  
  btnColor:string;
  isDisable:boolean = true;
  constructor(){

    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
    
    const colors = ['primary', 'success', 'danger', "warning", 'info'];
    this.btnColor = "btn btn-"+colors[Math.floor(Math.random() * 6)]
  }
}