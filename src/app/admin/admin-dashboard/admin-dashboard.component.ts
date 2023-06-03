import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faPowerOff ,faBagShopping, faList} from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-admin-dashboard',
  templateUrl: './admin-dashboard.component.html',
  styleUrls: ['./admin-dashboard.component.css']
})
export class AdminDashboardComponent {

  // product!:Product;
  powerIcon=faPowerOff
  orderIcon=faBagShopping
  productIcon=faList

  constructor(private router:Router)
  {
    if(sessionStorage.getItem("admin-log")==null || sessionStorage.getItem("admin-log")==undefined)
    {
      this.router.navigateByUrl("")

    }

  }
  logOut=()=>
  {
    sessionStorage.removeItem("admin-log");
    sessionStorage.removeItem("user-log");

 
    this.router.navigateByUrl("")
  }

  // add=(product:Product)=>
  // {

  // }
 
}
