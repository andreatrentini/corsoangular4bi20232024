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
export class LoginComponent implements AfterViewInit {

  loginErrorMessage!: string;  

  @ViewChild('inputUsername') username!: ElementRef;

  constructor(private router: Router, private authService: AuthService) {}

  loginForm = new FormGroup({
    username: new FormControl('', [Validators.required, Validators.email]),
    password: new FormControl('', [Validators.required, Validators.minLength(8)])
  })

  ngAfterViewInit(): void {
    this.username.nativeElement.focus();
  }

  cancel(): void {
    this.router.navigate(['']);
  }

  login(): void {
    let msg = this.authService.login(this.loginForm.value);
    if (msg) {
      this.loginErrorMessage = msg;
      timer(3000).subscribe(() => {
        this.loginErrorMessage = ''
      })
    }
  }
}
