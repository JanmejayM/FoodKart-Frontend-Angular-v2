import { Component,Input } from '@angular/core';
import { FormGroup, NgForm } from '@angular/forms';
import { Router } from '@angular/router';
import { ProductserviceService } from 'src/app/data-service/productservice.service';
@Component({
  selector: 'app-product-form',
  templateUrl: './product-form.component.html',
  styleUrls: ['./product-form.component.css']
})
export class ProductFormComponent {

    constructor(private productservice:ProductserviceService ,private router:Router)
    {

    }

add=(r:{name:string,
  description:string,
  image:string,
  price:number
})=>{

this.productservice.addProduct(r).subscribe(


);

//this.router.navigateByUrl('/admin-dashboard/(aux:product)');






}





}
