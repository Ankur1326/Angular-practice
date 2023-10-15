import { Component } from '@angular/core';
import { User } from 'src/models/user';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'Practice_Angular';

  users: Array<User> = [
    { firstName: "Ram", lastName: "lakhen", age: 25, salary: 100, imagePath: "https://images.unsplash.com/photo-1682687220923-c58b9a4592ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHwxMXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60z" },
    // { firstName: "mohan", lastName: "kumar", age: 25, salary: 100, imagePath: "https://images.unsplash.com/photo-1696792557416-ef5e551ff700?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxlZGl0b3JpYWwtZmVlZHw0MXx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" },
    // { firstName: "kirshan", lastName: "doe", age: 25, salary: 100, imagePath: "https://images.unsplash.com/photo-1682687220431-81a76ec65505?ixlib=rb-4.0.3&ixid=M3wxMjA3fDF8MHxlZGl0b3JpYWwtZmVlZHw0OHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=600&q=60" },
  ]

  recieveData(e: any) {
    console.log(e);
  }

  show:boolean = true
}
