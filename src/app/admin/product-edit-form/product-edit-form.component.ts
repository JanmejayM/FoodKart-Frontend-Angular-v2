import { HttpClient } from '@angular/common/http';
import { Component, OnChanges, OnInit, SimpleChanges } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { Iproduct } from 'src/app/models/iproduct';
import { ProductserviceService } from 'src/app/data-service/productservice.service';
@Component({
  selector: 'app-product-edit-form',
  templateUrl: './product-edit-form.component.html',
  styleUrls: ['./product-edit-form.component.css']
})
export class ProductEditFormComponent implements OnInit{

  id:number;
  name:string="";
  description:string="";
  price:number;
  image:string="";

  isdis:boolean=false;
  result:Iproduct[]=[];


constructor(private activatedroute:ActivatedRoute,private productservices:ProductserviceService,private router:Router)
{
 
  

}
ngOnInit(): void {


  this.id=Number(this.activatedroute.snapshot.paramMap.get("id"));
  this.productservices.getProductById(this.id).subscribe(
    data=>{this.result=data

      this.name=this.result[0].name
  this.description=this.result[0].description
  this.price=this.result[0].price
  this.image=this.result[0].image

  if(this.name!=="" && this.description!=="" && this.image!=="" && this.price!==undefined)
  {
    this.isdis=true;

  }

    }
  )

  

  
}


save=()=>{

  this.result[0].id=this.id;
  this.result[0].name=this.name;
  this.result[0].description=this.description;
  this.result[0].image=this.image;
  this.result[0].price=this.price;

  this.productservices.updateProduct(this.result[0]).subscribe(

    (data)=>{
      },
    (error)=>{

    }

  )
  this.router.navigateByUrl('admin/admin-dashboard/(aux:product)')


  

  
}








}
