import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
 
@Injectable({
  providedIn: 'root'
})
export class JokeService {
  // http:HttpClient
  constructor(private http:HttpClient) { 
    // this.http = http
  }

  getjoke() {
    return this.http.get('https://api.chucknorris.io/jokes/random?category=dev') // observable
  }
}
