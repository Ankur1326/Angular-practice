import { Component } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
// import { MatCardModule } from '@angular/material/card'

@Component({
    selector: 'app-login',
    templateUrl: './login.component.html',
    styleUrls: ['./login.component.css']
})
export class LoginComponent {
    public loginValid = true;
    public username = "";
    public password = "";
    public LocalStorage: any;
    private readonly returnUrl: string;
    loggedin: any;
    constructor(
        private _route: ActivatedRoute,
        private _router: Router,
    ) {
        this.returnUrl = this._route.snapshot.queryParams['returnUrl'] || '/home';
    }
    public onSubmit(): void {
        this.loginValid = true;
        let email = "joe@test.com";
        let password = "pass@01"
        if (this.username == email && password == this.password) {
            localStorage.setItem('is_loggedin', "yes");
            this._router.navigateByUrl(this.returnUrl);
        } else {
            console.log("invalid username password");
        }
    }
}