import { Component, OnInit } from '@angular/core';
import { Validators, FormGroup, FormControl } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-createcustomer',
  templateUrl: './createcustomer.component.html',
  styleUrls: ['./createcustomer.component.css']
})
export class CreatecustomerComponent implements OnInit {

  public newCustomerForm: FormGroup;
 

  constructor(private location: Location) { }

  ngOnInit() {
    this.newCustomerForm = new FormGroup({
      jobname: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      dateOfStart: new FormControl(new Date()),
     
      staffs: new FormControl('', [Validators.required, Validators.maxLength(100)])
      ,
      companyname: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      location: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
    
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.newCustomerForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }
}
