import { Injectable } from '@angular/core';
import { IcartItem } from '../models/icart-item';
import { HttpClient } from '@angular/common/http';
import { Iorder } from '../models/iorder';

@Injectable({
  providedIn: 'root'
})
export class OrderserviceService {

  constructor(private http:HttpClient) { }

  addToOrder(address:string,userId:number)
  {
    return this.http.post('http://localhost:8082/order-rest/addOrder/'+`${userId}`+'?address="'+`${address}`+'"',null)
  }

  getByUserId(id:number)
  {
    return this.http.get("http://localhost:8082/order-rest/getUserOrder/"+id.toString())

  }

  getByOrderId(id:number)
  {
    return this.http.get("http://localhost:8082/order-rest/get/"+id.toString())
  }

  getRevenue(date:string)
  {
    return this.http.get('http://localhost:8082/order-rest/getdailyRevenue?date='+date)

  }
  getRevenueMonthy(date1:string,date2:string)
  {
    return this.http.get("http://localhost:8082/order-rest/getRevenueMonthly?fromdate="+`${date1}`+"&todate="+`${date2}`)

  }

}
