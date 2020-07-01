import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { RessourceService } from '../ressource.service';
import { Ressource } from '../model/Ressource';

@Component({
  selector: 'app2-updateressource',
  templateUrl: './updateressource.component.html',
  styleUrls: ['./updateressource.component.scss']
})
export class UpdateressourceComponent implements OnInit {
id:string;
ressource:Ressource;
team:any;
constructor(private route: ActivatedRoute,private router: Router,private servress : RessourceService) { }

  ngOnInit(): void {
  this.ressource=new Ressource();
  this.id = this.route.snapshot.params['id'];
  this.servress.getRessource(this.id)
      .subscribe(data => {
        console.log(data)
        this.ressource = data;
      }, error => console.log(error));
  }

  updateEmployee() {
    console.log(this.ressource);
    this.servress.createRessource(this.ressource)
      .subscribe(data => console.log(data), error => console.log(error));
   
   
      this.ressource=new Ressource();
    this.gotoList();
  }

  onSubmit() {
    this.updateEmployee();    
  }
  gotoList() {

    this.router.navigate(['/ressource/ressource'])
    
  }  
  gotolist() {
    this.router.navigate(['/app2/ressource']);
  }
}
