import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  private tokenBearer: any;
  private isLoggedIn: boolean = false;

  private loginErrorMessage = new Subject<string>();
  loginErrorMessageObs = this.loginErrorMessage.asObservable();

  private loggedInSubject = new Subject<boolean>();
  loggedInObs = this.loggedInSubject.asObservable();

  constructor(private router: Router) { }

  login(credentials: any): string {
    // Sistema fake di autenticazione
    if (credentials.username == 'andrea.trentini@marconirovereto.it' && credentials.password == 'P@ssw0rd')
    {
      this.tokenBearer = '12561257654765427';
      localStorage.setItem('token-bearer', this.tokenBearer);
      this.isLoggedIn = true;
      this.loggedInSubject.next(true);
      this.router.navigate(['']);
      return '';
    }
    else {
      return 'Username or password invalid.';
      this.loginErrorMessage.next('Username or password invalid.');
    }
  }

  logout(): void {
    this.tokenBearer = null;
    this.isLoggedIn = false;
    localStorage.removeItem('token-bearer');
    this.loggedInSubject.next(false);
    this.router.navigate(['']);
  }

  get IsLoggedIn() {
    return this.isLoggedIn;
  }
}
