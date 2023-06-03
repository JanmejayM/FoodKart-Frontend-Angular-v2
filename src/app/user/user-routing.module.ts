import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { UserComponent } from './user.component';
import { ErrorPageComponent } from '../error-page/error-page.component';
import { LoginPopComponent } from '../login-pop/login-pop.component';
import { AuthGuard } from '../guard-service/auth.guard';
import { ProductserviceService } from '../data-service/productservice.service';
import { CartComponent } from './cart/cart.component';

const routes: Routes = [
  {path:'user',component:UserComponent,

  children:[
    {path:'',component:DashboardComponent},
    {path:'cart',component:CartComponent}




  ]

},
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
  providers: [AuthGuard,ProductserviceService]

})
export class UserRoutingModule { }
