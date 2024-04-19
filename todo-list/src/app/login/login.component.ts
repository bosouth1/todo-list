import { Component, Input } from '@angular/core';
import { AuthenticationService } from '../authentication.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {
  username: string = "";
  password: string = "";

  constructor(private authService: AuthenticationService, private router: Router) {}

  login(): void {
    const loggedIn = this.authService.login(this.username, this.password);
    if (loggedIn) {
      // redirect to homepage
      this.router.navigate(['/dashboard']);
      console.log('Redirecting...');
    } else {
      // throw validation error
    }
  }

}