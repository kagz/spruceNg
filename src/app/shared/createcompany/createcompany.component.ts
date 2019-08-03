import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
import { CreateCompany } from 'src/app/model/createcompany.model';
import { HttpErrorResponse } from '@angular/common/http';
import { Router } from '@angular/router';
import { CreateCompanyService } from 'src/app/services/createcompany.service';
import { MatDialog } from '@angular/material';
import { ErrorHandlerService } from 'src/app/services/error-handler.service';
import { SuccessPageComponent } from 'src/app/errors/success/success.component';
import { DataService } from 'src/app/services/data.service';
import { ApiRequestService } from 'src/app/services/api-request.service';
@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreateCompanyComponent implements OnInit {
  public newCompanyForm: FormGroup;
  email = '';
  name='';
  jobdesc = '';
  phone = '';
  clientLocation = '';


  constructor(
 private data: DataService,
    private location: Location,
    private apiRequest: ApiRequestService ,
    private router: Router,
    ) { }

  ngOnInit() {
    this.newCompanyForm = new FormGroup({
     name: new FormControl('kamagera', [Validators.required, Validators.maxLength(60)]),

      jobdesc: new FormControl('wizi na upinji', [Validators.required, Validators.maxLength(100)])
      ,
      phone: new FormControl('0721284155', [Validators.required, Validators.maxLength(100)])
      ,
      email: new FormControl('kamagera@gmail.com', [Validators.required, Validators.maxLength(100)]),
      clientLocation: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }


  public onCancel = () => {
    this.location.back();
  }
//adding the company
async addCompany() {

  try {
    if (this.newCompanyForm) {

      let bodyData:CreateCompany = {
        email: this.email,
        name: this.name,
        jobdesc : this.jobdesc,
        phone : this.phone,
        clientLocation : this.clientLocation,

    }
     
      const data = await this.apiRequest.post(
        'company',
        bodyData
      );
      data['success']
        ? this.router.navigate(['dashboard'])
          .then(() => this.data.success(data['message']))
          .catch(error => this.data.error(error))
        : this.data.error(data['message']);
    }
  } catch (error) {
    this.data.error(error['message']);
  }
  
}


//static states
  states: string[] = [
    'Alabama', 'Alaska', 'Arizona', 'Arkansas', 'California', 'Colorado', 'Connecticut', 'Delaware',
    'Florida', 'Georgia', 'Hawaii', 'Idaho', 'Illinois', 'Indiana', 'Iowa', 'Kansas', 'Kentucky',
    'Louisiana', 'Maine', 'Maryland', 'Massachusetts', 'Michigan', 'Minnesota', 'Mississippi',
    'Missouri', 'Montana', 'Nebraska', 'Nevada', 'New Hampshire', 'New Jersey', 'New Mexico',
    'New York', 'North Carolina', 'North Dakota', 'Ohio', 'Oklahoma', 'Oregon', 'Pennsylvania',
    'Rhode Island', 'South Carolina', 'South Dakota', 'Tennessee', 'Texas', 'Utah', 'Vermont',
    'Virginia', 'Washington', 'West Virginia', 'Wisconsin', 'Wyoming'
  ]
}
