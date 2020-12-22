import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddcartComponent } from './addcart/addcart.component';
import { BellsComponent } from './bells/bells.component';
import { BoyscatComponent } from './boyscat/boyscat.component';
import { ComapreproductComponent } from './comapreproduct/comapreproduct.component';
import { ContactInfoComponent } from './contact-info/contact-info.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { FeedgetComponent } from './feedget/feedget.component';
import { HelmatComponent } from './helmat/helmat.component';
import { HomeContantComponent } from './home-contant/home-contant.component';
import { LoginComponent } from './login/login.component';
import { OrderProductComponent } from './order-product/order-product.component';
import { ProCatComponent } from './pro-cat/pro-cat.component';
import { ProductDeteilsComponent } from './product-deteils/product-deteils.component';
import { PumpComponent } from './pump/pump.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SortprodutComponent } from './sortprodut/sortprodut.component';
import { UserViewComponent } from './user-view/user-view.component';
import { WomancatComponent } from './womancat/womancat.component';

const routes: Routes = [
  {path:'',component:HomeContantComponent},
  {path:'home',component:HomeContantComponent,data:{title:'HOME'}},
  {path:'ContactInfo',component:ContactInfoComponent},
  {path:'signinuser',component:SignInComponent},
  {path:'login',component:LoginComponent},
  {path:'Dashboard',component:DashboardComponent,
},
{ path: 'newsletter', component: OrderProductComponent },
  {path:'UserView',component:UserViewComponent},
  {path :'productDetails',component:ProductDeteilsComponent},
  {path :'UserCart',component:AddcartComponent},
  {path:'list',component:ProCatComponent},
  {path:'compareproduct',component:ComapreproductComponent},
  {path:"feedget",component:FeedgetComponent},
  {path:"sorting",component:SortprodutComponent},
  {path :'pump',component:PumpComponent},
  {path:'bells',component:BellsComponent},
  {path:'helmat',component:HelmatComponent},
  {path :'woman',component:WomancatComponent},
  {path:'mens',component:BoyscatComponent}



  
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
