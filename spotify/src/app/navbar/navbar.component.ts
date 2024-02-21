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
export class NavbarComponent implements OnInit, OnDestroy {

  isLoggedIn: boolean = false;
  loggedInObserver!: Subscription;

  constructor(private authService: AuthService) {}

  ngOnInit(): void {
    this.loggedInObserver = this.authService.loggedInObs.subscribe(loggedIn => {
      this.isLoggedIn = loggedIn;
    })
  }

  ngOnDestroy(): void {
    this.loggedInObserver.unsubscribe();
  }

  logout(): void {
    this.authService.logout();
  }

}
