import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-checkout-page',
  templateUrl: './checkout-page.component.html',
  styleUrls: ['./checkout-page.component.css']
})
export class CheckoutPageComponent {

  json:any
  jsonstring:string|null



  constructor(private router:Router)
  {    this.jsonstring=sessionStorage.getItem('check');

  if(this.jsonstring!==null )
  {

    this.json=JSON.parse(this.jsonstring);
    if(this.json!=1)
    {
      this.router.navigateByUrl("/user")

    }


     }
  }
showOrder()
{
  this.router.navigateByUrl("/user/orders")
  sessionStorage.setItem("check","0")
}

showCart(){
  this.router.navigateByUrl("/user/cart")
  sessionStorage.setItem("check","0")

}


}
