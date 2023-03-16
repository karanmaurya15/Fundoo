import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginComponent } from './Components/login/login.component';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RegisterComponent } from './Components/register/register.component';
import { ResetPasswordComponent } from './Components/reset-password/reset-password.component';
import { ForgotPasswordComponent } from './Components/forgot-password/forgot-password.component';
import { DashboardComponent } from './Components/dashboard/dashboard.component';
import { IconComponent } from './Components/icon/icon.component';
import { DisplayNoteComponent } from './Components/display-note/display-note.component';
import { GetAllNoteComponent } from './Components/get-all-note/get-all-note.component';

import {MatFormFieldModule} from '@angular/material/form-field';
import {MatButtonModule} from '@angular/material/button';
import {MatInputModule} from '@angular/material/input';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatIconModule } from '@angular/material/icon';
import {MatSidenavModule} from '@angular/material/sidenav';
import { MatListModule } from '@angular/material/list';
import { CreateNoteComponent } from './Components/create-note/create-note.component';
import { MatCardModule } from '@angular/material/card';
import { MatMenuModule } from '@angular/material/menu';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    ResetPasswordComponent,
    ForgotPasswordComponent,
    RegisterComponent,
    DashboardComponent,
    CreateNoteComponent,
    IconComponent,
    DisplayNoteComponent,
    GetAllNoteComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,MatFormFieldModule,MatButtonModule,MatInputModule,MatCheckboxModule,
    FormsModule,ReactiveFormsModule,HttpClientModule,MatToolbarModule,MatIconModule,MatSidenavModule,
    MatListModule,MatCardModule,MatMenuModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
