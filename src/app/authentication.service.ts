import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class AuthenticationService {

  constructor() { }

  login(username: string, password: string): boolean {
    var success = false;

    if (username.length > 0 && password.length > 0) {
      success = true;
    }
    return success;
  }
}
