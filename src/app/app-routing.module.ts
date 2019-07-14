import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ViewjobsComponent } from './pages/viewjobs/viewjobs.component';
import { AddcompaniesComponent } from './pages/addcompanies/addcompanies.component';
import { ViewjobComponent } from './pages/viewjob/viewjob.component';
import { ViewstaffsComponent } from './pages/viewstaffs/viewstaffs.component';
import { AdminComponent } from './dashboard/admin/admin.component';
import { UsersComponent } from './dashboard/users/users.component';
import { LoginComponent } from './auth/login/login.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { RegisterComponent } from './auth/register/register.component';
import { AddstaffComponent } from './pages/addstaff/addstaff.component';
import { AddjobsComponent } from './pages/addjobs/addjobs.component';
import { JobComponent } from './edits/job/job.component';
import { ProfileComponent } from './edits/profile/profile.component';
import { StaffComponent } from './edits/staff/staff.component';
import { CommonModule } from '@angular/common';
import { HomepageComponent } from './home/homepage/homepage.component';
import { RootComponent } from './dashboard/root/root.component';

const routes: Routes = [
  { path: 'viewjobs', component: ViewjobsComponent },
 
  { path: 'dashboard', component: RootComponent , children: [
    {path: '', component: HomepageComponent},
    { path: 'addcompanies', component: AddcompaniesComponent },
  { path: 'editprofile', component: ProfileComponent },
  { path: 'postjobs', component: AddjobsComponent },
  { path: 'viewjob', component: ViewjobComponent },
  { path: 'editjob', component:JobComponent },
  { path: 'editstaff', component: StaffComponent },
  { path: 'viewstaffs', component: ViewstaffsComponent }
 
  ]},

  { path: 'usersDashboard', component: RootComponent , children: [
    {path: '', component: UsersComponent},
  
  { path: 'editprofile', component: ProfileComponent },
 
  { path: 'viewjob', component: ViewjobComponent },
 
  
 
  ]},


  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: '404', component: NotFoundComponent}, 
  { path: '500', component: ServerErrorComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },
// {path: 'job/:id', component: JobComponent },
// {path: 'profile/:id', component: ProfileComponent },
// {path: 'staff/:id', component: StaffComponent },

  { path: '**', redirectTo: '/404', pathMatch: 'full'}


];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes)
  ],
  exports: [
    RouterModule
  ],
  declarations: []
})
export class AppRoutingModule { }
