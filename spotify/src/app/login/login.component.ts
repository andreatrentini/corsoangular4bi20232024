import { AfterViewInit, Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent implements OnInit, OnDestroy, AfterViewInit {

  loginErrorMessage!: string;
  loginErrorMessageObserver!: Subscription;

  @ViewChild('inputUsername') username!: ElementRef;

  constructor(private router: Router, private authService: AuthService) {}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  ngOnInit(): void {
    this.loginErrorMessageObserver = this.authService.loginErrorMessageObs.subscribe(errorMessage => {
      this.loginErrorMessage = errorMessage;
      timer(3000).subscribe(() => {
        this.loginErrorMessage = '';
      })
    })
  }

  ngOnDestroy(): void {
    this.loginErrorMessageObserver.unsubscribe();
  }

  ngAfterViewInit(): void {
    this.username.nativeElement.focus();
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  login(): void {
    this.authService.login(this.loginForm.value);
  }
}
