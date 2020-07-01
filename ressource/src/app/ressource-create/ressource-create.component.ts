import { Component, OnInit } from '@angular/core';
import { Ressource } from '../model/Ressource';
import { RessourceService } from '../ressource.service';
import { Router } from '@angular/router';
import { FormGroup, FormBuilder } from '@angular/forms';
import { Role } from '../model/Role';


@Component({
  selector: 'app2-ressource-create',
  templateUrl: './ressource-create.component.html',
  styleUrls: ['./ressource-create.component.scss']
})
export class RessourceCreateComponent implements OnInit {
  role:Role=new Role();
  ressource:Ressource=new Ressource();
  submitted: boolean;

  constructor(private servress : RessourceService,
    private Router:Router,
  ) { }


  ngOnInit(): void {
    
    
}
 /* newRessource():void{
    this.submitted=false;
    //this.ressource=new Ressource();
  }
  /*onSubmit() {
    this.submitted = true;
    console.log("submit"); 
    
       
  }
  */
  public registerNow()
  {    console.log(this.ressource);

    this.servress.createRessource(this.ressource)
    .subscribe(data=>{console.log(data)
      this.gotoList();

    }
    ,err=>{
    
    }
    )
    
    this.gotoList();
  }
  gotolist()
  {
    this.Router.navigate(['/ressource/ressource']);
 
  }

  gotoList() {

    this.Router.navigate(['/ressource/ressource']);
    
  }  

}
