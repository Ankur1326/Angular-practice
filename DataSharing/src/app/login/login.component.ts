import { Component,EventEmitter, Output, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  userName: string = '';
  @Output() login = new EventEmitter<string>();
  
  constructor() { }

  ngOnInit(): void {
  }

  submit() {
    console.log(this.userName);
    this.login.emit(this.userName)
  }

}
