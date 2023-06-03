import { Component, OnInit } from '@angular/core';
import { Ng2SearchPipeModule } from 'ng2-search-filter';
import { Iproduct } from 'src/app/models/iproduct';
import { Router, RouterLink } from '@angular/router';
import { ProductserviceService } from 'src/app/data-service/productservice.service';
import { faAddressCard } from '@fortawesome/free-solid-svg-icons';
import { faFile } from '@fortawesome/free-solid-svg-icons';
@Component({
  selector: 'app-product-page',
  templateUrl: './product-page.component.html',
  styleUrls: ['./product-page.component.css']
})
export class ProductPageComponent implements OnInit{
  result :Iproduct[]=[];
  data!:string;
  productIcon=faFile


  constructor(private productservice:ProductserviceService,private router:Router)
  {
   
     
  }

  ngOnInit(): void {
    this.productservice.getProduct().subscribe(
      da=>{this.result=da;

      }
    );

  }
  del(product:Iproduct)
  {
    this.productservice.deleteProduct(product.id).subscribe(
      data=>console.log(data)
      
    );

    //let i=this.result.indexOf(product);
    let i=this.result.findIndex(function(result)
    {
      return result.id===product.id;
    })
    this.result.splice(i,1);

    
  }
  edit(id:number)
  {
    this.router.navigateByUrl('admin/admin-dashboard/(aux:edit/'+id.toString());
  }

  addProductpage(){
    this.router.navigateByUrl('admin/admin-dashboard/(aux:add)');


  }
  



}
