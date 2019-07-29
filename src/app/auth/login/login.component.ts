import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { MatDialog } from '@angular/material';
import { LoginService } from 'src/app/services/login.service';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { SuccessPageComponent } from 'src/app/errors/success/success.component';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  loginForm: FormGroup;
  email = '';
  password = '';
  private dialogConfig;
  constructor(
    private formBuilder: FormBuilder,
    private router: Router,
    private loginService: LoginService,
    private dialog: MatDialog,
  
  private errorService: ErrorHandlerService 
  ) { }
  private  loggedIn = false;

  ngOnInit() {
    this.loginForm = this.formBuilder.group({
      email: ['', Validators.required],
      password: ['', Validators.required]
  });
  this.dialogConfig = {
    height: '200px',
    width: '400px',
    disableClose: true,
    data: {}
  }
  }
  Login() {
  
}
}