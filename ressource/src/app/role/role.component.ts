import { Component, OnInit, ViewChild } from '@angular/core';
import { RoleService } from '../role.service';
import { Role } from '../model/Role';
import { Router } from '@angular/router';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { RessourceService } from '../ressource.service';


@Component({
  selector: 'app2-role',
  templateUrl: './role.component.html',
  styleUrls: ['./role.component.scss']
})
export class RoleComponent implements OnInit {

  constructor( private ressourceserv :RessourceService, private roleservie :RoleService,private route: Router) { }
  displayedColumns: string[] = [ 'roleLabel' ,'Actions'];
  dataSource=new MatTableDataSource<any>();
  data=[]; 
  roles:any;
     array;
    role:Role =new Role();

    @ViewChild(MatPaginator) paginator: MatPaginator;

  ngOnInit(): void {
   /* if(this.ressourceserv.isAuthenticated()==false)
    {
      this.route.navigateByUrl('');
    }else
    {
      this.reloadData();
    }
    */
    this.reloadData();

      }
  
reloadData()
{
  this.roleservie.getAllRole().
subscribe(data =>{
  this.roles=data;
  this.data=data;

  console.log(this.data);
  this.dataSource.data=this.data;
  this.dataSource.paginator=this.paginator;
  console.log(this.dataSource.data);

},err=>
{
  console.log("error");
}
)
}
  
roleDelete(role)
{
  let c =confirm("are you sure to delete Mr: "+role.roleLabel);
  if (c)  
this.roleservie.roleDelete(role).subscribe(data=>
 { this.reloadData();
 })
  ,err=>{
}
this.reloadData();
}
}