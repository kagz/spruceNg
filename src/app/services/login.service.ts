import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import {Observable} from 'rxjs/Observable';

@Injectable()
export class LoginService {

  constructor(private http: HttpClient) { }

  sendCredential(username: string, password: string) {
  	let url = "http://localhost:8080/token";
  	let encodedCredentials = btoa(username+":"+password);
  	let basicHeader = "Basic "+encodedCredentials;
  	let headers = new HttpHeaders ({
  		'Content-Type' : 'application/x-www-form-urlencoded',
  		'Authorization' : basicHeader
  	});

  	return this.http.get(url, {headers: headers});

  }

  checkSession() {
    let url = "http://localhost:8080/checkSession";
    
    let headers = new HttpHeaders ({
      'x-auth-token' : localStorage.getItem('xAuthToken')
    });

    return this.http.get(url, {headers: headers});
  }

  logout() {
    let url = "http://localhost:8080/user/logout";
    
    let headers = new HttpHeaders ({
      'x-auth-token' : localStorage.getItem('xAuthToken')
      
    });
    this.clear();
    return this.http.post(url, '', {headers: headers});
    
  }
  isUserLoggedIn() {
    let user = localStorage.getItem('xAuthToken')
    return !(user === null)
  }
  clear(){
    localStorage.removeItem('xAuthToken')
  }
}