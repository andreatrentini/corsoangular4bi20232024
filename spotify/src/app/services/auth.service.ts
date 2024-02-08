import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Subject } from 'rxjs';

@Injectable({
  providedIn: 'root'
})

// FAKE AUTH SERVICE
export class AuthService {

  private isLoggedIn: boolean = false;
  private loginErrorSubject = new Subject<string>();
  loginErrorObservable = this.loginErrorSubject.asObservable();

  private loginSubject = new Subject<boolean>();
  loginObservable = this.loginSubject.asObservable();

  constructor(private router: Router) { }

  login(username: string, password: string) {
    if (username == 'admin' && password == 'cisco') {
      localStorage.setItem('token-bearer', '123456789');
      this.isLoggedIn = true;
      this.loginSubject.next(true);
      this.router.navigate(['']);
    }
    else {
      this.loginErrorSubject.next('Username or password incorrect.');
    } 
  }

  logout():void {
    localStorage.removeItem('token-bearer');
    this.isLoggedIn = false;
    this.loginSubject.next(false);
    this.router.navigate(['']);
  }

  get IsLoggedIn(): boolean {
    return this.isLoggedIn;
  }

}
