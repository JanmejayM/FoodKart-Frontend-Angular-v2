import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iproduct } from '../models/iproduct';
import { Icart } from '../models/icart';
import { IcartItem } from '../models/icart-item';

@Injectable({
  providedIn: 'root'
})
export class CartItemserviceService {

  constructor(private http:HttpClient) { }


  addProductToCartItem(product:Iproduct,userid:number)
  {
    return this.http.post("http://localhost:8081/cartitem-rest/addProduct/"+userid.toString(),product);
  }

  

  updateQty(c:IcartItem)
  {
    return this.http.put("http://localhost:8081/cartitem-rest/updateQty",c);
  }

  deleteItem(c:IcartItem)
  {
    return this.http.post("http://localhost:8081/cartitem-rest/delete",c);

  }
  checkOut(userid:number,cartitems:IcartItem[])
  {
    return this.http.post("http://localhost:8081/cartitem-rest/onCheckout/"+userid.toString(),cartitems)
  }
}
