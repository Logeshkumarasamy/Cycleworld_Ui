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
import { UserViewComponent } from './user-view/user-view.component';
import { ProductDeteilsComponent } from './product-deteils/product-deteils.component';
import { AddcartComponent } from './addcart/addcart.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { ProCatComponent } from './pro-cat/pro-cat.component';
import { CompareproductComponent } from './compareproduct/compareproduct.component';
import { FeedgetComponent } from './feedget/feedget.component';





@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    HomeContantComponent,
    ContactInfoComponent,
    SignInComponent,
    LoginComponent,
    DashboardComponent,
    UserViewComponent,
    ProductDeteilsComponent,
    AddcartComponent,
    OrderProductComponent,
    ProCatComponent,
    CompareproductComponent,
    FeedgetComponent
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
