import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillService } from '../skill.service';
import { TeamService } from '../team.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Team } from '../model/Team';
import { RessourceService } from '../ressource.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app2-team',
  templateUrl: './team.component.html',
  styleUrls: ['./team.component.scss']
})
export class TeamComponent implements OnInit {
  displayedColumns: string[] = ['teamName','Actions'];
  dataSource=new MatTableDataSource<any>();
    @ViewChild(MatPaginator) paginator: MatPaginator;
team:Team=new Team();
  constructor(private ressourceserv :RessourceService,private teamser:TeamService,private route: Router) { }
  data=[]; 
  teams;
total;
  ngOnInit(): void {
    /*
    if(this.ressourceserv.isAuthenticated()==false)
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
    this.teamser.getAllTeam().subscribe(data=>
      {
this.teams=data;
this.data=data;
    this.dataSource.data=this.data;
this.dataSource.paginator=this.paginator;
console.log(this.dataSource.data);

      },err=>
      {
        console.log('error')
      })
  }
  deleteTeam(team)
  {
    let c =confirm("are you sure to delete Team: "+team.teamName);
  if (c) 
  {
this.teamser.teamDelete(team).subscribe(data=>{
  this.reloadData();
}
,err=>{

})
this.reloadData();
}

}
}
