import { Component, OnInit } from '@angular/core';
import { RoleService } from '../role.service';
import { Router } from '@angular/router';
import { Role } from '../model/Role';

@Component({
  selector: 'app2-role-create',
  templateUrl: './role-create.component.html',
  styleUrls: ['./role-create.component.scss']
})
export class RoleCreateComponent implements OnInit {
  role:Role=new Role();

  constructor(private servr:RoleService,
    private Router:Router) { }

  ngOnInit(): void {
  }
  public registerNow()
  {    console.log(this.role);

    this.servr.createRole(this.role)
    .subscribe(data=> {   this.gotoList()
    }
    ,err=>{
  
    }
    )
    
    this.gotoList();
  }
  gotoList() {

    this.Router.navigate(['/ressource/role']);
    
  }

  gotolist()
  {
    this.Router.navigate(['/ressource/role']);
  }

}
