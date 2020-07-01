import { Component, OnInit } from '@angular/core';
import { AuthService } from '../_services/auth.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app1-board-user',
  templateUrl: './board-user.component.html',
  styleUrls: ['./board-user.component.scss']
})
export class BoardUserComponent implements OnInit {

  constructor( private serv:AuthService,private router :Router) { }

  ngOnInit(): void {
    if(this.serv.isAuthenticated()==false)
    {
      this.router.navigateByUrl('');
    }
  }

}
