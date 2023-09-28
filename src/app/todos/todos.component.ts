import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-todos',
  templateUrl: './todos.component.html',
  styleUrls: ['./todos.component.css']
})
export class TodosComponent implements OnInit {
  todos:Todo[]
  constructor() {
    this.todos = [
      {
        sno: 3,
        title: "This is title"
        desc: "Description"
        active: true
      },
      {
        sno: 4,
        title2: "This is title"
        desc: "Description"
        active: true
      },
      {
        sno: 5
        title3: "This is title"
        desc: "Description"
        active: true
      }
    ]
  }

}
