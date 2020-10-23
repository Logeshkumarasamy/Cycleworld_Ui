import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { HomeContantComponent } from './home-contant/home-contant.component';
import { LoginComponent } from './login/login.component';
import { SignInComponent } from './sign-in/sign-in.component';

const routes: Routes = [
  {path:'',component:HomeContantComponent},
  {path:'home',component:HomeContantComponent,data:{title:'HOME'}},
  {path:'ContactInfo',component:ContactInfoComponent},
  {path:'signinuser',component:SignInComponent},
  {path:'login',component:LoginComponent}

  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
