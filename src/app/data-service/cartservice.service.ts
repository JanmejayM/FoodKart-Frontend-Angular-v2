import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Icart } from '../models/icart';
import { Iproduct } from '../models/iproduct';
import { IcartItem } from '../models/icart-item';

@Injectable({
  providedIn: 'root'
})
export class CartserviceService {

  cart:Icart[]=[];

  constructor(private http:HttpClient) {}

  getById(data:number):Observable<Icart>
  {
    return this.http.get<Icart>('http://localhost:8083/cart-rest/getCart/'+data.toString())
  }
  delete(data:IcartItem)
  {
    return this.http.post("http://localhost:8083/cart-rest/deleteCartItem",data)
  }
  addToCart(data:string)
  {
    return this.http.get("http://localhost:8083/cart-rest/addCart/"+data)
  }

  


}
