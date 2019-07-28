import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class RepositoryService {


  constructor(private http: HttpClient) { }

  public getData(route: string) {
    return this.http.get(this.createCompleteRoute(route, environment.urlAddress));
  }
 
  public create(route: string, body) {
    return this.http.post(this.createCompleteRoute(route, environment.urlAddress), body, this.generateHeaders());
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
    return {
      headers: new HttpHeaders({'Content-Type': 'application/json'})
    }
  }
}