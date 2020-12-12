import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcartComponent } from './addcart/addcart.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HomeContantComponent } from './home-contant/home-contant.component';
import { LoginComponent } from './login/login.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { ProCatComponent } from './pro-cat/pro-cat.component';
import { ProductDeteilsComponent } from './product-deteils/product-deteils.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { UserViewComponent } from './user-view/user-view.component';

const routes: Routes = [
  {path:'',component:HomeContantComponent},
  {path:'home',component:HomeContantComponent,data:{title:'HOME'}},
  {path:'ContactInfo',component:ContactInfoComponent},
  {path:'signinuser',component:SignInComponent},
  {path:'login',component:LoginComponent},
  {path:'Dashboard',component:DashboardComponent},
  {path:'UserView',component:UserViewComponent},
  {path :'productDetails',component:ProductDeteilsComponent},
  {path :'UserCart',component:AddcartComponent},
  {path:"order",component:OrderProductComponent},
  {path:"list",component:ProCatComponent}



  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
