import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Iuser } from '../models/iuser';
@Injectable({
  providedIn: 'root'
})
export class UserserviceService {

  constructor(private http:HttpClient) { 

  }


  signup=(data:Iuser)=>
  {
   
    return this.http.post<Iuser>('http://localhost:8083/login-rest/signup',data);
  }

  login=(data:{username:string,password:string})=>{
    return this.http.post<Iuser>('http://localhost:8083/login-rest/login',data);

  }

  

 
}
