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
import { ViewjobsComponent } from './pages/viewjobs/viewjobs.component';
import { ViewjobComponent } from './pages/viewjob/viewjob.component';
import { JobsComponent } from './pages/jobs/jobs.component';





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
import { RootComponent } from './dashboard/root/root.component';
import { LocationStrategy, HashLocationStrategy } from '@angular/common';
import { FlexLayoutModule } from "@angular/flex-layout";
import { CompanydescComponent } from './shared/companydesc/companydesc.component';
import { CompanylocComponent } from './shared/companyloc/companyloc.component';
import { CompanyaddressComponent } from './shared/companyaddress/companyaddress.component';
import { ReactiveFormsModule } from '@angular/forms';
import { Logger } from './services/logger.service';
import { UpdatejobComponent } from './edits/updatejob/updatejob.component';

import { EditstaffComponent } from './edits/editstaff/editstaff.component';

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
    ViewjobsComponent,
    ViewjobComponent,
    ViewstaffsComponent,
    NotFoundComponent,
    ServerErrorComponent,
  
    EditcompanyComponent,
    ProfileComponent,
    JobsComponent,
    StaffComponent,
    HomepageComponent,
    NavbarComponent,
    ImagecardComponent,
    FigurecardComponent,
    MsgiconbtnComponent,
    RootComponent,
    CompanydescComponent,
    CompanylocComponent,
    CompanyaddressComponent,
    UpdatejobComponent,
 
    EditstaffComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    BrowserModule,
 FlexLayoutModule,
 MatCardModule,
    AppRoutingModule
    , ReactiveFormsModule
  ],
  providers: [
   [ SettingsService,Logger],
   {provide: LocationStrategy, useClass: HashLocationStrategy},

],
  bootstrap: [AppComponent]
})
export class AppModule { }
