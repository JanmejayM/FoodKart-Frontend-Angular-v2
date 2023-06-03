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
   
    return this.http.post<Iuser>('http://localhost:8080/login-rest/signup',data);
  }

  login=(data:{username:string,password:string})=>{
    return this.http.post<Iuser>('http://localhost:8080/login-rest/login',data);

  }

  deleteUser(data:number)
  {
    return this.http.delete("http://localhost:8080/login-rest/del/"+data.toString());
  }

 
}
