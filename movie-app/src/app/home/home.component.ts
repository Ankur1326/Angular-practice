import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {

  // itemValue: any;
  
  // onClick(event: any) {
  //   console.log("Btn clicked !");
  //   console.log(this.itemValue.value);
    
  // }


  // value: any;
  
  // onClick(event: any) {
  //   this.value += (event.target as HTMLInputElement).value + " | "

  // }

  // eventHandler(event: any) {
  //   console.log(event.target.value);
    
  // }

  trendingMovies: any;

  constructor(private http: HttpClient) { }

  ngOnInit(): void {
    this.getTrendingMovie();

    this.getPopularMovie();
    this.getTheaterMovie();
  }

  getTrendingMovie() {
    this.http
    .get('http://localhost:4200/assets/data/trending-movies.json')
    .subscribe((movies) => {
      this.trendingMovies = movies;
      console.log("trendingMovies", this.trendingMovies);
      
    })
  }

  
  popularMovie: any; 
  getPopularMovie() {
    this.http
    .get('http://localhost:4200/assets/data/popular-movies.json')
    .subscribe((movies) => {
      this.popularMovie = movies;
      console.log(this.popularMovie);
      
    })
  }

  theatreMovie: any;

  getTheaterMovie() {
    this.http.get('http://localhost:4200/assets/data/theatre-movies.json')
    .subscribe((movies) => {
      this.theatreMovie = movies;
    })
  }
}
