import { Component, ElementRef, OnDestroy, OnInit, ViewChild } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from '../services/auth.service';
import { Subscription, timer } from 'rxjs';

@Component({
  selector: 'app-login-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './login-form.component.html',
  styleUrl: './login-form.component.css'
})
export class LoginFormComponent implements OnInit, OnDestroy {

  @ViewChild('inputUsername') userName!: ElementRef;

  errorMessage!: string;
  errorMesssageSubscription!: Subscription;

  constructor(private router: Router, private authService: AuthService) {}

  ngOnInit(): void {
    this.errorMesssageSubscription = this.authService.loginErrorObservable.subscribe(error => {
      this.errorMessage = error;
      this.userName.nativeElement.focus();
      timer(3000).subscribe(() => {
        this.errorMessage = '';
      })
    })
  }

  ngOnDestroy(): void {
    this.errorMesssageSubscription.unsubscribe();
  }

  loginForm = new FormGroup({
    username: new FormControl('', Validators.required),
    password: new FormControl('', Validators.required)
  })

  cancel(): void {
    this.router.navigate(['']);
  }

  login(): void {
    if (this.loginForm.value.username && this.loginForm.value.password) {
      this.authService.login(this.loginForm.value.username, this.loginForm.value.password);
    }

  }

}
