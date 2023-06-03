import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { UserserviceService } from '../data-service/userservice.service';
import { Iuser } from '../models/iuser';

@Component({
  selector: 'app-login-pop',
  templateUrl: './login-pop.component.html',
  styleUrls: ['./login-pop.component.css']
})
export class LoginPopComponent {

message:string="";

constructor(private http:HttpClient,private router:Router,private userservice:UserserviceService)
{
  
  

}

onSubmit(login:{username:string,password:string}):void
 {
  let response:Iuser;
   this.userservice.login(login).subscribe(
    
    data=>{
      response=data as Iuser;

      
        if(response.role=="user")
        {
        this.router.navigate(["/user"]);
        sessionStorage.setItem("user-log",JSON.stringify(response));
        }
        if(response.role=="admin")
        {
          this.router.navigateByUrl("admin/admin-dashboard/(aux:product)");

          sessionStorage.setItem("admin-log",JSON.stringify(response));
        }

    },
    (error)=>{
      if(error.status===404)
      {
        this.message="Wrong Credentials"
      }
    }
    )
    
   

  
  
 


}
}
