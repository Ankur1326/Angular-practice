import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { JokeService } from '../services/joke.service';

@Component({
  selector: 'app-joke',
  templateUrl: './joke.component.html',
  styleUrls: ['./joke.component.css']
})
export class JokeComponent implements OnInit {
  joke: string = 'Loading Joke';

  // http:HttpClient;
  constructor(private jokeService: JokeService) {
    // this.http = http
  }

  ngOnInit(): void {
    // HttpClient
    // this.fetchData()

    this.fetchJoke()
  }

  fetchJoke() {
    this.jokeService.getjoke().subscribe((data: any) => {
      this.joke = data.value
    })
  }

  // fetchData() {
  //   this.http.get('https://api.chucknorris.io/jokes/random?category=dev')
  //     .subscribe((data: any) => {
  //       // console.log(data);
  //       this.joke = data.value;

  //     })
  // console.log(this.http.get('https://api.chucknorris.io/jokes/random?category=dev'));
  // }

}
