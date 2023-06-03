import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginPopComponent } from './login-pop/login-pop.component';
import { SignupPopComponent } from './signup-pop/signup-pop.component';
import {ErrorPageComponent} from './error-page/error-page.component';
import { UserComponent } from './user/user.component';
import { CartComponent } from './user/cart/cart.component';
import { AuthGuard } from './guard-service/auth.guard';

import { DashboardComponent } from './user/dashboard/dashboard.component';
import { AdminComponent } from './admin/admin.component';
import { AdminLoginComponent } from './admin/admin-login/admin-login.component';
import { AdminDashboardComponent } from './admin/admin-dashboard/admin-dashboard.component';

import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AppModule } from './app.module';
import { AdminModule } from './admin/admin.module';
import { ProductPageComponent } from './admin/product-page/product-page.component';
import { AdminAuthGuard } from './guard-service/admin-auth.guard';
import { ProductFormComponent } from './admin/product-form/product-form.component';
import { ProductEditFormComponent } from './admin/product-edit-form/product-edit-form.component';
import { AddressPageComponent } from './user/address-page/address-page.component';
import { AccountPageComponent } from './user/account-page/account-page.component';
import { OrderPageComponent } from './user/order-page/order-page.component';
import { OrderRevenueComponent } from './admin/order-revenue/order-revenue.component';
import { CheckoutPageComponent } from './user/checkout-page/checkout-page.component';

const routes: Routes = [

  {path: '', component : LoginPopComponent},
  {path:'signup', component : SignupPopComponent},

  {path:'user',component:UserComponent,canActivate:[AuthGuard],

  children:[
    {path:'',component:DashboardComponent},
    {path:'cart',component:CartComponent},
    {path:"address",component:AddressPageComponent},
    {path:"account",component:AccountPageComponent},
    {path:"orders",component:OrderPageComponent},
    {path:"checkout",component:CheckoutPageComponent}





  ]

},



  {path:'admin/admin-dashboard',component:AdminDashboardComponent,canActivate:[AdminAuthGuard],

  children:[

  {path: 'product', component:ProductPageComponent, outlet:'aux'},
  {path: 'add',component:ProductFormComponent,outlet:'aux'},
  {path: 'edit/:id',component:ProductEditFormComponent,outlet:'aux'},
  //path to be added
  {path:'order-revenue',component:OrderRevenueComponent,outlet:'aux'}


]
},
{path:'**',component:ErrorPageComponent},






 

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],

})
export class AppRoutingModule { }
