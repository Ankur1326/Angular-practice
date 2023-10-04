import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent {
  name:string = "ramesh"
  age:number = 20
  status:string = "coder" 
  salary:number = 40 
  inputValue:string = "Ram"
  
  btnColor:string;
  isDisable:boolean = true;
  constructor(){  

    setTimeout(() => {
      this.isDisable = false;
    }, 3000);
    
    const colors = ['primary', 'success', 'danger', "warning", 'info'];
    this.btnColor = "btn btn-"+colors[Math.floor(Math.random() * 6)]
  }

  convertToIner() {
    console.log(this.salary * 74);
  }

  getInput(e:any) {
    console.log(e.target.value)
    this.inputValue = e.target.value 
  }

  fruits = ["banana", "mango", "apple", "orange", "pinaple"]

  heros = ["Dwayne", "Vin", "Tom", "Johnny", "Robert", "Leonardo"]
}