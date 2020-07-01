import { Component } from '@angular/core';
import { AuthService } from './_services/auth.service';
import { Router } from '@angular/router';
import {NavbarComponent} from './navbar/navbar.component'

@Component({
  selector: 'authentification-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'authentification';
  opened=false;

  constructor(private authservice:AuthService,private router:Router)
  {}
  toggleSidebar(){
    this.opened=!this.opened;
  }
  ngOnInit():void
  {
    this.authservice.loadToken();
  }
  logOut() {
    this.authservice.logout();
    this.router.navigateByUrl("/authentification/login")

  }
  isAdmin()
  {
    if (this.authservice.isAdmin())
  return 1 ;
  else
  return 0;
  }
  isUser()
  {if (this.authservice.isUser())
    return 1 ;
    else
    return 0;
  }
  isAuthenticated(){
    return this.authservice.isAuthenticated();
}
}
