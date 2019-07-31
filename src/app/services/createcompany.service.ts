import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

import { ApiRequestService } from './api-request.service';
import { CreateCompany } from '../model/createcompany.model';

@Injectable()
export class CreateCompanyService {

  constructor(private apiRequest: ApiRequestService) {}

  public getCreateCompanyById(Id: string): Observable<any> {
    return this.apiRequest.get('createcompany' + Id);
  }

  public getCreateCompanys({pageSize = 5, pageNum = 1}): Observable<any> {
    return this.apiRequest
            .get(`createcompany?pageSize=${pageSize}&pageNum=${pageNum}`)
  }


  public createCreateCompany(createcompany: CreateCompany): Observable<any> {
    return this.apiRequest.post('createcompany', createcompany);
  }

  public getUserCreateCompanys(): Observable<any> {
    return this.apiRequest.get('createcompany/manage');
  }

  public deleteCreateCompany(Id: string): Observable<any> {
    return this.apiRequest.delete(`createcompany/${Id}`);
  }

  public updateCreateCompany(Id: string, createcompanyData: any): Observable<any> {
    return this.apiRequest.patch(`createcompany/${Id}`, createcompanyData);
  }

//   public verifyCreateCompanyUser(Id: string): Observable<any> {
//     return this.apiRequest.get(`createcompanys/${Id}/verify-user`);
//   }
}
