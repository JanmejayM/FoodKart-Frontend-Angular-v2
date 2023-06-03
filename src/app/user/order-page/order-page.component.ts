import { Component, OnInit } from '@angular/core';
import { OrderserviceService } from 'src/app/data-service/orderservice.service';
import { Iorder } from 'src/app/models/iorder';
import { faChevronRight } from '@fortawesome/free-solid-svg-icons';
import { Iorderdetails } from 'src/app/models/iorderdetails';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-order-page',
  templateUrl: './order-page.component.html',
  styleUrls: ['./order-page.component.css']
})
export class OrderPageComponent implements OnInit{

  orderArray:Iorder[]=[]
  jsonstring:string|null
  order:Iorderdetails[]=[]
  rightArrow=faChevronRight
  orderprice:number;
  constructor(private orderservice:OrderserviceService)
  {
    
   

  }
  ngOnInit(): void {

    this.jsonstring=sessionStorage.getItem('user-log');

    if(this.jsonstring!==null)
    {
      let json=JSON.parse(this.jsonstring);

  
    this.orderservice.getByUserId(Number(json.id)).subscribe(
      data=>{
         this.orderArray=data as Iorder[]

         this.orderArray.forEach(element => {
          let sub=element.summary.split(";")
          //element.summary=sub[0]
          element.summary=sub[0].substring(0,sub[0].indexOf(",")) 
           element.summary+="\n , "+ sub[1].substring(0,sub[1].indexOf(","))      
         });

         
      }
    )


    
    }
  }

  show(i:Iorder)
  {
   this.order=i.description
   this.orderprice=i.price
  }

}
