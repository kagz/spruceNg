import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { MatDialog } from '@angular/material';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = '';
  password = '';
  errMsg="";
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private loginService: LoginService )
       { }
   ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });
      this.loginService.logout(true);
  }
  Login() {
  	this.loginService.getToken(this.email, this.password).subscribe(
  		res => {
      if (res.user === undefined || res.user.token === undefined || res.user.token === "INVALID" ){
        this.errMsg = 'Username or password is incorrect';
        return;
    }
        this.router.navigate(['dashboard'])
     }
  	);
  }
}