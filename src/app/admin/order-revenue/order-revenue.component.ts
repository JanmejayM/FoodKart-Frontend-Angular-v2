import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from 'src/app/data-service/orderservice.service';
import { Irevenue } from 'src/app/models/irevenue';

@Component({
  selector: 'app-order-revenue',
  templateUrl: './order-revenue.component.html',
  styleUrls: ['./order-revenue.component.css']
})
export class OrderRevenueComponent implements OnInit{

  from:string;
  to:string

  

  revenue:Irevenue

  disabled:boolean


  constructor(private orderservice:OrderserviceService)
  {

  }
  ngOnInit(): void {
  }
isDisabled()
{
  if(this.from!=undefined || this.from!=undefined && this.to!=undefined)
   {

    return false

  }
 return true;
}


calcRevenue(){

  if(this.from!==undefined && this.to===undefined)

  this.orderservice.getRevenue(this.from).subscribe(
    data=>{
     this.revenue=data as Irevenue
    }
  )

  else if(this.from!==undefined && this.to!==undefined)
  {
    this.orderservice.getRevenueMonthy(this.from,this.to).subscribe(
      data=>{
        this.revenue=data as Irevenue
      }
    )
  }

}


}
