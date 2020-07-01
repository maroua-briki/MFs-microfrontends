import { Component, OnInit } from '@angular/core';
import { TeamService } from '../team.service';
import { Router } from '@angular/router';
import { Team } from '../model/Team';

@Component({
  selector: 'app2-team-create',
  templateUrl: './team-create.component.html',
  styleUrls: ['./team-create.component.scss']
})
export class TeamCreateComponent implements OnInit {
team:Team=new Team();
  constructor(private servt:TeamService,
    private Router:Router) { }

  ngOnInit(): void {
  }
  public registerNow()
  {    console.log(this.team);

    this.servt.createTeam(this.team)
    .subscribe(data=>{    this.gotoList();
    },err=>{
      console.log("errrr");
    }
    )
    
    this.gotoList();
  }
  gotolist()
  {
    this.Router.navigate(['/ressource/team']);
  }
  gotoList() {

    this.Router.navigate(['/ressource/team']);
    
  }
}
