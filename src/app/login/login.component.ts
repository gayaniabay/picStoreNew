import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';

import { AuthService} from '../auth/auth.service';
import { SharedService } from '../services/shared.service'

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loginForm: FormGroup;
  private formSubmitAttempt: boolean;
  loginError: string;
  hasLoginError: boolean;
  submitted: boolean;

  constructor(private fb: FormBuilder,private authService: AuthService, public sharedService: SharedService) {}

  ngOnInit() {
    this.loginForm = this.fb.group({
      username: ['', Validators.required],
      password: ['', Validators.required]
    });
  }
  get f() { return this.loginForm.controls; }
  onSubmit() {
    this.submitted = true;

    if (this.loginForm.valid) {
      this.authService.login(this.loginForm.value);
    }else{
      return;
    }
    this.formSubmitAttempt = true;
    this.hasLoginError = this.sharedService.hasLoginError;
    this.loginError = this.sharedService.setLoginErrorMessage;
  }
}
