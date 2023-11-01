import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  // How to create reactive form and How to use it.

  myReactiveForm: FormGroup;

  constructor() { }

  genders: any = [
    {
      id: 1,
      genderType: "Female"
    },
    {
      id: 2,
      genderType: "Male"
    },
    {
      id: 3,
      genderType: "Other"
    },
  ]

  subjects = [
    {
      id: 1,
      subjectType: "Physics",
    },
    {
      id: 2,
      subjectType: "chemistry",
    },
    {
      id: 3,
      subjectType: "Mathe",
    }
  ]


  ngOnInit() {
    this.myReactiveForm = new FormGroup({
      'first-lastName': new FormGroup({
        'firstname': new FormControl(null, Validators.required),
        'lastname': new FormControl(null, Validators.required),
      }),

      'birthday': new FormControl(null, Validators.required),
      'gender': new FormControl("Male"),
      'email': new FormControl(null, [Validators.required, Validators.email]),
      'phoneNumber': new FormControl(null),
      'selectSubject': new FormControl('Subject 2')
    })
  }

  onSubmit() {
    console.log(this.myReactiveForm)
  }

}