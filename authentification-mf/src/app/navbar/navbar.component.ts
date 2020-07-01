import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app1-navbar',
  templateUrl: './navbar.component.html',
  styleUrls: ['./navbar.component.scss']
})
export class NavbarComponent implements OnInit {

  constructor(private authservice:AuthService,private router:Router) { }

  ngOnInit(): void {
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
logOut()
  {
    this.authservice.logout();
    this.router.navigateByUrl("/app1/login")

  }
}
