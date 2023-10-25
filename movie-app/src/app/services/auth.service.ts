import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private auth: AuthService) { }

  login(uname: string, pword: string) {
    if (uname === 'suren' && pword === '1234') {
      return 200;        
    } else {
      return 403;
    }
  }
}
