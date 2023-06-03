import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Router } from '@angular/router';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-admin-login',
  templateUrl: './admin-login.component.html',
  styleUrls: ['./admin-login.component.css']
})
export class AdminLoginComponent {
  message:string="";
  json:Object={};
  
  constructor(private http:HttpClient,private router:Router)
  {
    
  }
  
  onSubmit(login:any):void
   {
    
  
  
    if(login.email=="admin@gmail.com"&& login.password=="admin")
    {
  
      this.json={
        user:login.email,
        password:login.password
      }
      
      sessionStorage.setItem("admin-log",JSON.stringify(this.json));

      
       this.router.navigateByUrl("/admin-dashboard/(aux:product)");
  
    
    }
   
    
    
    else{
      this.message="Wrong Credentials";
    }
    
    
   
  
  
  }

 
}
