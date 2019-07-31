import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { AddcompaniesComponent } from './pages/addcompanies/addcompanies.component';

import { ViewstaffsComponent } from './pages/viewstaffs/viewstaffs.component';

import { LoginComponent } from './auth/login/login.component';
import { ForgetpasswordComponent } from './auth/forgetpassword/forgetpassword.component';
import { NotFoundComponent } from './errors/not-found/not-found.component';
import { ServerErrorComponent } from './errors/server-error/server-error.component';
import { RegisterComponent } from './auth/register/register.component';

import { AddjobsComponent } from './pages/addjobs/addjobs.component';
import { ViewClients } from './pages/viewclients/viewclients.component';
import { EditcompanyComponent } from './edits/editcompany/editcompany.component';
import { ProfileComponent } from './edits/profile/profile.component';
import { UpdatejobComponent } from './edits/updatejob/updatejob.component';
import { EditstaffComponent } from './edits/editstaff/editstaff.component';

import { CommonModule } from '@angular/common';
import { HomepageComponent } from './home/homepage/homepage.component';
import { RootComponent } from './home/root/root.component';
import { AuthGuard } from './services/auth-guard.service';
import { ViewPostedJobsComponent } from './pages/viewpostedjobs/viewpostedjobs.component';
import { BookedJobsComponent } from './pages/bookedjobs/bookedjobs.component';


const routes: Routes = [
 
 
  { path: 'dashboard', component: RootComponent , canActivate:[AuthGuard], children: [

    {path: '', component: HomepageComponent},
    { path: 'addcompanies', component: AddcompaniesComponent },
  
  { path: 'addjobs', component: AddjobsComponent },
  { path: 'viewstaffs', component: ViewstaffsComponent },
  { path: 'viewclients', component: ViewClients },
  { path: 'viewjobs', component: ViewPostedJobsComponent },
{path: 'bookedjobs',component:BookedJobsComponent},
//  {path: 'bookedjobs/:id', component: StaffComponent },
{ path: 'editprofile', component: ProfileComponent },
{path: 'editcompany/:id', component: EditcompanyComponent },
{path: 'editjob/:id', component: UpdatejobComponent },
{path: 'editstaff/:id', component: EditstaffComponent },
  ]},
  { path: 'login', component: LoginComponent },
  { path: 'signup', component: RegisterComponent },
  { path: 'forgetpassword', component: ForgetpasswordComponent },
  { path: '404', component: NotFoundComponent}, 
  { path: '500', component: ServerErrorComponent },
  { path: '', redirectTo: 'login', pathMatch: 'full' },


  { path: '**', redirectTo: 'login', pathMatch: 'full'}


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
