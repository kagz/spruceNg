import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import { Location } from '@angular/common';
@Component({
  selector: 'app-createcompany',
  templateUrl: './createcompany.component.html',
  styleUrls: ['./createcompany.component.css']
})
export class CreateCompanyComponent implements OnInit {
  public ownerForm: FormGroup;
  private dialogConfig;

  constructor(private location: Location) { }

  ngOnInit() {
    this.ownerForm = new FormGroup({
      companyname: new FormControl('', [Validators.required, Validators.maxLength(60)]),
      joinDate: new FormControl(new Date()),
      jobdesc: new FormControl('', [Validators.required, Validators.maxLength(100)])
      ,
      phone: new FormControl('', [Validators.required, Validators.maxLength(100)])
      ,
      email: new FormControl('', [Validators.required, Validators.maxLength(100)]),
      location: new FormControl('', [Validators.required, Validators.maxLength(100)])
    });
  }

  public hasError = (controlName: string, errorName: string) => {
    return this.ownerForm.controls[controlName].hasError(errorName);
  }

  public onCancel = () => {
    this.location.back();
  }
}
