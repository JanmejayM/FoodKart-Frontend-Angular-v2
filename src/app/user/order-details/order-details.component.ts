import { Component,Input } from '@angular/core';
import { Iorderdetails } from 'src/app/models/iorderdetails';

@Component({
  selector: 'app-order-details',
  templateUrl: './order-details.component.html',
  styleUrls: ['./order-details.component.css']
})
export class OrderDetailsComponent {

  @Input()orderDetails:Iorderdetails[]

  @Input()totalPrice:number

  constructor()
  {
    
  }
  display()
  {
    console.log(this.orderDetails)
  }




}
