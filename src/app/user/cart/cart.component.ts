import { Component, OnInit,ViewChild,ElementRef, OnChanges, SimpleChanges } from '@angular/core';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { CartserviceService } from 'src/app/data-service/cartservice.service';
import { ProductserviceService } from 'src/app/data-service/productservice.service';
import { Iproduct } from 'src/app/models/iproduct';
import { faTrash ,faArrowLeftLong,faPlus,faMinus} from '@fortawesome/free-solid-svg-icons';
import { Icart } from 'src/app/models/icart';
import { IcartItem } from 'src/app/models/icart-item';
import { CartItemserviceService } from 'src/app/data-service/cart-itemservice.service';
import { OrderserviceService } from 'src/app/data-service/orderservice.service';
import { AddressserviceService } from 'src/app/data-service/addressservice.service';
import { Iaddress } from 'src/app/models/iaddress';


@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit{


 deleteIcon=faTrash
 backIcon=faArrowLeftLong
 plusIcon=faPlus
 minusIcon=faMinus
 cartPrice:number=0
  cart:Icart;
  jsonstring:string|null
  cartitem:number=0
  cartitems:IcartItem[]=[]
  json:any
  address:string
  addressArray:Iaddress[]=[]
   

  productId:number[]=[]



 constructor(private router:Router,private cartservice:CartserviceService,private cartitemservice:CartItemserviceService,private orderservice:OrderserviceService,private addressservice:AddressserviceService)
 {

  

   
 }
  ngOnInit(): void {

    this.jsonstring=sessionStorage.getItem('user-log');

    if(this.jsonstring!==null )
    {
       this.json=JSON.parse(this.jsonstring);

      this.cartservice.addToCart(this.json.id).subscribe(
        d=>{
         
          this.cartservice.getById(Number(this.json.id)).subscribe(
            data=>{
              this.cart=data as Icart
              
    
              
              console.log(this.cart)
               this.cartitem=this.cart.cartitem.length
              for(let i=0;i<this.cart.cartitem.length;i++)
              {
                 this.cartitems[i]=this.cart.cartitem[i];
              }

              this.addressservice.getByUser(Number(this.json.id)).subscribe(
                data=>{
                  this.addressArray=data as Iaddress[]
                }
              )

              this.calculatePrice()

              
            }
    
          )

        }
      )


     


    }
  }
  
 updateQty(c:IcartItem,qty:number)
  {
   
    
    c.quantity=c.quantity+qty
   this.calculatePrice()

 

    this.cartitemservice.updateQty(c).subscribe()

  }

  delete(c:IcartItem)
  {
    
    
    this.cartservice.delete(c).subscribe(
      data=>{
      
      this.calculatePrice()


      }



    );
    let i=this.cartitems.indexOf(c);
    this.cartitems.splice(i,1)
    this.cartitem-=1
    
 

  }
  calculatePrice()
  {
    this.cartPrice=0;
    this.cartitems.forEach(element => {
      this.cartPrice+=element.product.price*element.quantity
    });
  }

  checkout()
  {

    this.orderservice.addToOrder(this.address,this.cartitems[0].userid).subscribe(
    
    )
    this.cartitems=[]
        this.cartPrice=0
        this.cartitem=0
        sessionStorage.setItem("check","1")
       this.router.navigateByUrl("user/checkout")
   
    

  }
  originalValue(address:Iaddress)
  {
    return address.houseno+" ,"+address.street+" ,"+address.city+" ,"+address.state+" ,"+address.pincode

  }


  




  }

  

  

    


   

  