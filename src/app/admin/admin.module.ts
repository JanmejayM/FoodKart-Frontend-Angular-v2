import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AdminRoutingModule } from './admin-routing.module';
import { AdminLoginComponent } from './admin-login/admin-login.component';

import { UserModule } from '../user/user.module';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { RouterModule } from '@angular/router';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule} from '@angular/forms';
import { AppModule } from '../app.module';
import { AdminComponent } from './admin.component';
import { ProductPageComponent } from './product-page/product-page.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { ProductFormComponent } from './product-form/product-form.component';
import { NavBarComponent } from '../nav-bar/nav-bar.component';
import { ProductEditFormComponent } from './product-edit-form/product-edit-form.component';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { OrderRevenueComponent } from './order-revenue/order-revenue.component';



@NgModule({
  declarations: [
    AdminLoginComponent,
    AdminDashboardComponent,
    AdminComponent,
    ProductPageComponent,
    ProductFormComponent,
    ProductEditFormComponent,
    OrderRevenueComponent ,
  ],
  imports: [
    CommonModule,
    AdminRoutingModule,
    UserModule,
    RouterModule,
    FormsModule,
    BrowserModule,
    ReactiveFormsModule,
    Ng2SearchPipeModule,
    AppModule,
    FontAwesomeModule
    
    

  ]
})
export class AdminModule { }
