import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke: string = 'Loading Joke';

  // http:HttpClient;
  constructor(private http: HttpClient) {
    // this.http = http
  }

  ngOnInit(): void {
    // HttpClient
    this.fetchData()
  }

  fetchData() {
    this.http.get('https://api.chucknorris.io/jokes/random?category=dev')
      .subscribe((data: any) => {
        // console.log(data);
        this.joke = data.value;

      })
    // console.log(this.http.get('https://api.chucknorris.io/jokes/random?category=dev'));
  }

}
