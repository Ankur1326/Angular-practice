import { Component } from '@angular/core';
import { AuthService } from '../services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})
export class HeaderComponent {
  constructor(private auth: AuthService, private router: Router) { }

  goToHome() {
    this.router.navigate(['login'])
  }

  logout() {
    this.auth.logout()
  }
  
}
