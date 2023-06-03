import { HttpBackend, HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Iaddress } from '../models/iaddress';

@Injectable({
  providedIn: 'root'
})
export class AddressserviceService {

  constructor(private http:HttpClient) { }

  addAddress(data:any,
    id:number)
  {
    return this.http.post("http://localhost:8080/address-rest/add/"+id.toString(),data)
  }

  getByUser(id:number)
  {
    return this.http.get("http://localhost:8080/address-rest/fetch/"+id.toString())
  }
  deleteAddress(data:number)
  {
    return this.http.delete("http://localhost:8080/address-rest/delete/"+data.toString())
  }

  updateAdress(data:Iaddress)
  {
    return this.http.put("http://localhost:8080/address-rest/update",data)
  }
}
