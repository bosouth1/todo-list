import { Component } from '@angular/core';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent {

  username: string = "";
  password: string = "";
  confirmPassword: string = "";

  submitRegistration(): void {
    console.log('it works');
  }
}
