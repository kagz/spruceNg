import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class UsersService {


  constructor(private http: HttpClient) { }

  public getData(route: string) {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }


//new create
create(link: string, body: any) {
  return this.http.post(link, body, { headers: this.generateHeaders() }).toPromise();
}
//new 4get
forget(link: string, body: any) {
  return this.http.post(link, body, { headers: this.generateHeaders() }).toPromise();
}

//deletjob
  public delete(route: string){
    return this.http.post(this.createCompleteRoute(route, environment.urlAddress), this.generateHeaders());
  }

  // //stop
  public stop(route: string){
    return this.http.post(this.createCompleteRoute(route, environment.urlAddress), this.generateHeaders());
  }

  //start
  public startJobNow(route: string ){
    return this.http.post(this.createCompleteRoute(route, environment.urlAddress), this.generateHeaders());
  }
    // //pause
    public pauseJob(route: string){
      return this.http.post(this.createCompleteRoute(route, environment.urlAddress), this.generateHeaders());
    }
       //resume
       public resumeJob(route: string){
        return this.http.post(this.createCompleteRoute(route, environment.urlAddress), this.generateHeaders());
      } 

 
  private createCompleteRoute(route: string, envAddress: string) {
    return `${envAddress}/${route}`;
  }
 
  private generateHeaders() {
    const token = localStorage.getItem('token');
    return token ? new HttpHeaders().set('Authorization', token) : null;
  }

}
