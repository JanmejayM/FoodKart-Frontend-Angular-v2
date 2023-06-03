import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { UserRoutingModule } from './user-routing.module';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user.component';
import { RouterModule } from '@angular/router';

import { PrivateNavbarComponent } from './private-navbar/private-navbar.component';
import { FormsModule } from '@angular/forms';
import { CartComponent } from './cart/cart.component';
import { ReadmoreComponent } from './readmore/readmore.component';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { NgModel } from '@angular/forms';
import { NgxPaginationModule } from 'ngx-pagination';
import { CheckoutPageComponent } from './checkout-page/checkout-page.component';

import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { AddressPageComponent } from './address-page/address-page.component';
import { AccountPageComponent } from './account-page/account-page.component';
import { OrderPageComponent } from './order-page/order-page.component';
import { OrderDetailsComponent } from './order-details/order-details.component';



@NgModule({
  declarations: [
    DashboardComponent,
    UserComponent,
    CartComponent,
    ReadmoreComponent,
    CheckoutPageComponent,
    AddressPageComponent,
    AccountPageComponent,
    OrderPageComponent,
    OrderDetailsComponent,
    PrivateNavbarComponent

  ],
  imports: [
    CommonModule,
    UserRoutingModule,
    FormsModule,
    Ng2SearchPipeModule,
    NgxPaginationModule,
    FontAwesomeModule
  ],

})
export class UserModule { }
