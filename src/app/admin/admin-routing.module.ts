import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AdminDashboardComponent } from './admin-dashboard/admin-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { AdminComponent } from './admin.component';
import { FormsModule } from '@angular/forms';
import { ProductPageComponent } from './product-page/product-page.component';

const routes: Routes = [
  {path:'admin',component:AdminComponent,

  children:[
    {path:'',component:AdminLoginComponent},
    {path:'admin-dashboard',component:AdminDashboardComponent}
    

  ]
  },
  
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AdminRoutingModule { }
