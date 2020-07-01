import { Component, OnInit, ViewChild } from '@angular/core';
import { RessourceService } from '../ressource.service';
import { HttpClient } from '@angular/common/http';
import { MatTableDataSource } from '@angular/material/table';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog, MatDialogConfig } from "@angular/material";

import { NgForm, FormGroup } from '@angular/forms'
import { from, Observable } from 'rxjs';
import { Router } from '@angular/router';
import { Ressource } from '../model/Ressource';
import { Role } from '../model/Role';
import { RoleCreateComponent } from '../role-create/role-create.component';
import { RessourceCreateComponent } from '../ressource-create/ressource-create.component';

@Component({
  selector: 'app2-ressource',
  templateUrl: './ressource.component.html',
  styleUrls: ['./ressource.component.scss']
})

export class RessourceComponent implements OnInit {

  constructor(private ressourceserv: RessourceService,
    private router: Router, private dialog: MatDialog,) { }
  displayedColumns: string[] = ['firstName', 'lastName', 'Profile', 'Phone', 'Role', 'Team', 'Actions'];
  dataSource = new MatTableDataSource<any>();
  @ViewChild(MatPaginator) paginator: MatPaginator;

  data = [];

  ressources = {};
  rolee: Role = new Role();
  ressource: Ressource = new Ressource();
  resp: any;
  ressourcesList: any;
  ngOnInit(): void {

    this.reloadData();

    this.reloadData();

  }
  /* getallRessource()
   {
     this.ressourceserv.getAllRessource().
 subscribe(data=>{
   this.ressources=data;
   console.log(data);
 },err=>
 {
   console.log("error");
 }
 )
   }
   */
  /*ADDrole()
  {}
  reload2()
  { window.location.reload;
    this.reloadData();
  }
  */
  toggleClock() {
    const event = new Event('toggleClock');
    console.log("send");

    window.dispatchEvent(event);
  }
  RessourceDetails(id: String) {
    console.log(id);
    this.router.navigate(['ressource/DetailsRessource/', id]);
  }
  RessourceUpdate(id: String) {
    console.log(id);
    this.router.navigate(['ressource/UpdateRessource/', id])
  }
  reloadData() {
    this.ressourceserv.getAllRessource().
      subscribe(data => {
        this.ressources = data;
        this.data = data;
        this.dataSource.data = this.data;
        this.dataSource.paginator = this.paginator;
      }, err => {
        console.log("error");
      }

      )
  }
  RessourceDelete(ressource) {
    let c = confirm("are you sure to delete Mr: " + ressource.firstName);
    if (c)
      this.ressourceserv.ressourceDelete(ressource).subscribe(data => { this.reloadData(); }
        , err => {
          console.log("errrr");
        }
      )


    this.reloadData();
  }
  gotoList() {

    this.router.navigate(['/ressource/ressource'])
      .then(() => {
        window.location.reload();
      });
  }
  addteam(id) {
    this.router.navigate(['ressource/DetailsRessource/', id]);

  }

  addrole(id) {
    this.router.navigate(['ressource/DetailsRessource/', id]);

  }

}

