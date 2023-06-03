import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { UserserviceService } from '../data-service/userservice.service';
import { Iuser } from '../models/iuser';
@Component({
  selector: 'app-signup-pop',
  templateUrl: './signup-pop.component.html',
  styleUrls: ['./signup-pop.component.css']
})



export class SignupPopComponent {
  
  constructor(private http:HttpClient,private userservice:UserserviceService)
  {}
  
  message:string;
  mobNumberPattern = "^((\\+91-?)|0)?[0-9]{10}$"; 



  onSubmit=(data:any)=>
   {

    data["role"] = "user";

 console.log(data);
 let receive:Iuser;
  this.userservice.signup(data).subscribe(
    da=>{
      receive=da;
      if(Object.keys(receive).length!==0)
      {
        this.message="Account Created";
      }
     

    },
    (error)=>{
      if(error.status===403)
      {
        this.message="Account Already Exists";

      }
    }
  )

    
   }

  
       
}
