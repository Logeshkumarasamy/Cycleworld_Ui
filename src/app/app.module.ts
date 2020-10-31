import { BrowserModule} from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { HomeContantComponent } from './home-contant/home-contant.component';
import {MaterialModule} from './material/material.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { LoginComponent } from './login/login.component'
import {HttpClientModule } from '@angular/common/http';
import { DashboardComponent } from './dashboard/dashboard.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeContantComponent,
    ContactInfoComponent,
    SignInComponent,
    LoginComponent,
    DashboardComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MaterialModule,
    BrowserAnimationsModule,
    HttpClientModule,
    FormsModule,
  

  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
