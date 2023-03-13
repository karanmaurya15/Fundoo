import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'dashboard', component:DashboardComponent},
  {path : 'create-note',component:CreateNoteComponent}
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
