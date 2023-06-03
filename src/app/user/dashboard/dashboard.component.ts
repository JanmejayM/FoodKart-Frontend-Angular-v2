import { HttpClient } from '@angular/common/http';
import { Component, OnInit} from '@angular/core';
import { Router } from '@angular/router';
import { CartItemserviceService } from 'src/app/data-service/cart-itemservice.service';
import { CartserviceService } from 'src/app/data-service/cartservice.service';
import { ProductserviceService } from 'src/app/data-service/productservice.service';
import { UserserviceService } from 'src/app/data-service/userservice.service';
import { IcartItem } from 'src/app/models/icart-item';
import { Iproduct } from 'src/app/models/iproduct';
import { faSearch } from '@fortawesome/free-solid-svg-icons';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {
  isReadMore:boolean=false;
  user:any;
   result : Iproduct[]=[];
  cartItemArray:IcartItem[]
  addText:string[]=[];
  searchText:string="";
  searchIcon=faSearch
  isTrue:boolean=true;

  jsonstring:string|null;

   


  constructor(private router:Router,
    private productservice:ProductserviceService,
    private userservice:UserserviceService,
    private http:HttpClient,
    private cartsservice:CartserviceService,
    private cartitemservice:CartItemserviceService
    )
  {
    if(sessionStorage.getItem("user-log")==null || sessionStorage.getItem("user-log")==undefined)
    {
      this.router.navigateByUrl("")

    }

        this.jsonstring=sessionStorage.getItem('user-log');


    
    // this.cart=cartservice.getProduct();

    








     
  }
  ngOnInit(): void {

    this.productservice.getProduct().subscribe(
      da=>this.result=da
      
    );
  }
  

  

  addCart=(product:Iproduct)=>
  {
    if(this.jsonstring!==null)
   {
    console.log(this.jsonstring)
   let json=JSON.parse(this.jsonstring);

   this.cartitemservice.addProductToCartItem(product,Number(json.id)).subscribe()

  
  

   

   }
  }

  RedirectCart()
 {

 } 

  

}
