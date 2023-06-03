import { Component, OnInit } from '@angular/core';
import { AddressserviceService } from 'src/app/data-service/addressservice.service';
import { Iaddress } from 'src/app/models/iaddress';

@Component({
  selector: 'app-address-page',
  templateUrl: './address-page.component.html',
  styleUrls: ['./address-page.component.css']
})
export class AddressPageComponent implements OnInit{
  addressArray:Iaddress[]=[];
  jsonstring:string|null
  id:number
  btnClicked:boolean

  constructor(private addressservice:AddressserviceService)
  {
    
  }
  ngOnInit(): void {
    this.jsonstring=sessionStorage.getItem("user-log")
    if(this.jsonstring!=null)
    {
      this.id=JSON.parse(this.jsonstring).id
    }
    this.addressservice.getByUser(this.id).subscribe(
      data=>{
        this.addressArray=data as Iaddress[]
      }
    )
  }

  
  add(data:{
    
      "houseno":string,
    "street":string,
    "city":string,
    "state":string,
    "pincode":string
 
  })
  {
   // this.addressArray.push(data as Iaddress);
    this.addressservice.addAddress(data,Number(this.id)).subscribe(
      data=>{
        this.ngOnInit()

      }

      ,
      (error)=>{
        
      }
    )



  }

  deleteAddress(address:Iaddress){
  
   

   this.addressservice.deleteAddress(address.address_id).subscribe()

 this.ngOnInit()


  }
 

}
