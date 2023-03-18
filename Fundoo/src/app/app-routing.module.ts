import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ArchiveNoteComponent } from './Components/archive-note/archive-note.component';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { GetAllNoteComponent } from './Components/get-all-note/get-all-note.component';
import { LoginComponent } from './Components/login/login.component';
import { RegisterComponent } from './Components/register/register.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { TrashNoteComponent } from './Components/trash-note/trash-note.component';


const routes: Routes = [
  {path:'login',component:LoginComponent},
  {path: 'register',component:RegisterComponent},
  {path:'reset-password',component:ResetPasswordComponent},
  {path:'forgot-password',component:ForgotPasswordComponent},
  {path:'dashboard', component:DashboardComponent, 
  children:[
    { path:'get-all-note',component:GetAllNoteComponent},
    {path:'trash-note',component:TrashNoteComponent},
    {path:'archive-note',component:ArchiveNoteComponent}
  ]}
  
];

@NgModule({ 
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
