import { Component } from '@angular/core';

import { Router} from '@angular/router';
import { faCutlery } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.css']
})
export class NavBarComponent {

faIcon=faCutlery
  constructor(
    
    private router: Router
  )
  {
   
  }

  

  login=()=>
    {
      this.router.navigate([""]);
    }
  
  signup=()=>
  {
    this.router.navigate(["signup"]);

  } 
  
 
}
