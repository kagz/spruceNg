import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { LoginComponent } from './auth/login/login.component';
import { RegisterComponent } from './auth/register/register.component';
import { FooterComponent } from './navigation/footer/footer.component';
import { HeaderComponent } from './navigation/header/header.component';
import { SidenavComponent } from './navigation/sidenav/sidenav.component';
import { AddcompaniesComponent } from './pages/addcompanies/addcompanies.component';
import { AddstaffComponent } from './pages/addstaff/addstaff.component';
import { AddjobsComponent } from './pages/addjobs/addjobs.component';

import { ViewClients } from './pages/viewclients/viewclients.component';
import { ViewstaffsComponent } from './pages/viewstaffs/viewstaffs.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';

import { EditcompanyComponent } from './edits/editcompany/editcompany.component';
import { ProfileComponent } from './edits/profile/profile.component';
import { StaffComponent } from './edits/staff/staff.component';
import {MatCardModule} from '@angular/material/card';
import { HomepageComponent } from './home/homepage/homepage.component';
import { NavbarComponent } from './navigation/navbar/navbar.component';
import { ImagecardComponent } from './navigation/imagecard/imagecard.component';
import { FigurecardComponent } from './navigation/figurecard/figurecard.component';
import { MaterialModule } from './material.module';
import { MsgiconbtnComponent } from './navigation/msgiconbtn/msgiconbtn.component';
import { SettingsService } from './services/settings.service';

import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CreatecustomerComponent } from './shared/createcustomer/createcustomer.component';
import { CompanylocComponent } from './shared/companyloc/companyloc.component';
import { CreateCompanyComponent } from './shared/createcompany/createcompany.component';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { Logger } from './services/logger.service';
import { UpdatejobComponent } from './edits/updatejob/updatejob.component';

import { EditstaffComponent } from './edits/editstaff/editstaff.component';
import { ToastService } from './services/toast.service';

import {  HttpClientModule } from '@angular/common/http';

import { SuccessPageComponent } from './errors/success/success.component';


import { ErrorComponent } from './errors/error/error.component';
import { AuthGuard } from './services/auth-guard.service';
import { UserInfoService } from './services/user-info.service';
import { AppConfig } from 'app-config';
import { ApiRequestService } from './services/api-request.service';
import { LoginService } from './services/login.service';
import { RegisterService } from './services/register.service';
import { ForgetPasswordService } from './services/forgetpassword.service';
import { ViewPostedJobsComponent } from './pages/viewpostedjobs/viewpostedjobs.component';
import { BookedJobsComponent } from './pages/bookedjobs/bookedjobs.component';
import { RootComponent } from './home/root/root.component';
import { CustomerService } from './services/newjobs.service';
import { CreateCompanyService } from './services/createcompany.service';

@NgModule({
  declarations: [
    AppComponent,
    ForgetpasswordComponent,
    LoginComponent,
    RegisterComponent,
    FooterComponent,
    HeaderComponent,
    SidenavComponent,
    AddcompaniesComponent,
    AddstaffComponent,
    AddjobsComponent,
  
    ViewPostedJobsComponent,
    ViewstaffsComponent,
    NotFoundComponent,
    ServerErrorComponent,
    ErrorComponent,
    EditcompanyComponent,
    ProfileComponent,
    ViewClients,
    StaffComponent,
    HomepageComponent,
    NavbarComponent,
    ImagecardComponent,
    FigurecardComponent,
    MsgiconbtnComponent,
    RootComponent,
    CreatecustomerComponent,
    CompanylocComponent,
    CreateCompanyComponent,
    UpdatejobComponent,
    BookedJobsComponent,
    EditstaffComponent,
 
    SuccessPageComponent

  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
 FlexLayoutModule,
 MatCardModule,
    AppRoutingModule,
    HttpClientModule
    , ReactiveFormsModule,
    FormsModule
  ],
  providers: [
   [ SettingsService,
    Logger,
    ToastService,
    AuthGuard,
    UserInfoService,
   AppConfig,
    ApiRequestService,
    LoginService,
    RegisterService,
    ForgetPasswordService,
    CreateCompanyService,
    CustomerService
  ],
   {provide: LocationStrategy, useClass: HashLocationStrategy},
],

entryComponents: [
  SuccessPageComponent,
  ErrorComponent
],

  bootstrap: [AppComponent]
})
export class AppModule { }
