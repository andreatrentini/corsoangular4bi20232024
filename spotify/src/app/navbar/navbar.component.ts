import { Component, OnDestroy, OnInit } from '@angular/core';
import { RouterLink } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-navbar',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './navbar.component.html',
  styleUrl: './navbar.component.css'
})
export class NavbarComponent implements OnInit, OnDestroy{

  isLoggedIn = this.authService.IsLoggedIn;
  loginSubscription!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loginSubscription = this.authService.loginObservable.subscribe(state => {
      this.isLoggedIn = state;
    })
  }

  ngOnDestroy(): void {
    this.loginSubscription.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }
}
