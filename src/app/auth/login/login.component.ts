import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { LoginService } from 'src/app/services/login.service';
import { SuccessPageComponent } from 'src/app/errors/success/success.component';
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
  private dialogConfig;
  constructor(
      private formBuilder: FormBuilder,
      private router: Router,
      private loginService: LoginService,
      private dialog: MatDialog,
    
      private errorService: ErrorHandlerService  )
       { }
 
  ngOnInit() {
      this.loginForm = this.formBuilder.group({
          email: ['', Validators.required],
          password: ['', Validators.required]
      });

      this.loginService.logout(true);

      this.dialogConfig = {
        height: '200px',
        width: '400px',
        disableClose: true,
        data: {}
      }


  }
  Login() {
  	this.loginService.getToken(this.email, this.password).subscribe(
  		res => {
      //	console.log(res);
      
      if (res.user === undefined || res.user.token === undefined || res.user.token === "INVALID" ){
        this.errMsg = 'Username or password is incorrect';
        return;
    }
  			localStorage.setItem("xAuthToken", JSON.stringify(res));
  			
       
      this.router.navigate(['dashboard'])
     
  		}
  	);
  }
}