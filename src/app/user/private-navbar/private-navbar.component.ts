import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { faCartShopping } from '@fortawesome/free-solid-svg-icons';
import { faHome } from '@fortawesome/free-solid-svg-icons';
import { faPhone } from '@fortawesome/free-solid-svg-icons';
import { faPowerOff } from '@fortawesome/free-solid-svg-icons';
import { faCutlery } from '@fortawesome/free-solid-svg-icons';
import { faUserAlt } from '@fortawesome/free-solid-svg-icons';
import { faGear } from '@fortawesome/free-solid-svg-icons';
import { faBagShopping } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-private-navbar',
  templateUrl: './private-navbar.component.html',
  styleUrls: ['./private-navbar.component.css']
})
export class PrivateNavbarComponent {

  dispIcon=faCutlery
  contactIcon=faPhone
  cartIcon=faCartShopping
  homeIcon=faHome
  logoutIcon=faPowerOff
  userIcon=faUserAlt
  settingIcon=faGear
  orderIcon=faBagShopping
  jsonstring:string|null
  name:string
  

  constructor(private router:Router)
  {
    this.jsonstring=sessionStorage.getItem('user-log');

    if(this.jsonstring!==null )
    {
      let json=JSON.parse(this.jsonstring);

     this.name=json.firstname
    }
  }
  logOut=()=>
  {
    sessionStorage.removeItem("user-log");
    sessionStorage.removeItem("admin-log");

    this.router.navigateByUrl("")

  }

}
