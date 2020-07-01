import { Component, OnInit } from '@angular/core';
import { Ressource } from '../model/Ressource';
import { ActivatedRoute, Router } from '@angular/router';
import { RessourceService } from '../ressource.service';
import { Role } from '../model/Role';
import { RoleService } from '../role.service';
import { TeamService } from '../team.service';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import { Team } from '../model/Team';
import { SkillService } from '../skill.service';
import { Skill } from '../model/Skill';


@Component({
  selector: 'app2-ressource-details',
  templateUrl: './ressource-details.component.html',
  styleUrls: ['./ressource-details.component.scss']
})

export class RessourceDetailsComponent implements OnInit {
  
id:String;
ressource:Ressource;
roles:[Role];
teams:{};
skills:{};
skill:Skill;
skillName;
selectedValue: string;
  selectedCar: string;
  team: Team=new Team();
role :Role=new Role();
rolee :Role=new Role();
  constructor( private route:ActivatedRoute,private router: Router, private RessSer:RessourceService ,private roleser:RoleService , private teamser:TeamService ,private skillser : SkillService ) { }
  ngOnInit(): void {
    this.getallroles();
    this.getallTeams();
    this.getallskills();
    this.ressource=new Ressource();
    this.id=this.route.snapshot.params['id'];
this.RessSer.getRessource(this.id).subscribe(data=>{
  console.log(data)
  this.ressource=data;
},err=> console.log(err));
  }
  list(){
    this.router.navigate(['/ressource/ressource']);
  }
registerNow()
{
  this.updateRessource();    
}
updateRessource() {
  console.log(this.ressource);
  this.RessSer.createRessource(this.ressource)
    .subscribe(data => console.log(data), error => console.log(error));
  this.ressource=new Ressource();
  this.gotoList();
}

getallroles()
{
  this.roleser.getAllRole().subscribe(data=>{
this.roles=data;
console.log(this.roles);
  },err=>{

  })
}
getallTeams()
{
  this.teamser.getAllTeam().subscribe(data=>{
this.teams=data;
console.log(this.teams);
  
  },err=>console.log(err));

}

getallskills()
{
  this.skillser.getAllSkills().subscribe(data=>{
this.skills=data;
console.log(this.skills);
  })
}
ADDskills(){
console.log(this.skillName);
this.skillser.findskillbySkillname(this.skillName).subscribe(data=>{
this.skill=data;
this.ressource.skills=this.ressource.skills || [];
  console.log(this.skill);
  
  this.ressource.skills.push(this.skill);
  this.RessSer.createRessource(this.ressource).subscribe(data=>{console.log();
  })
  
  
  })

}



ADDteam()
{
  
  console.log(this.team);
  this.RessSer.ADDteamtoResource(this.ressource,this.team.teamName).subscribe(data => {
   
  }, error => console.log(error)); 

this.teamser.findteambyTeamname(this.team.teamName).subscribe(data=>{
this.team=data;
  this.team.ressources=this.team.ressources|| [];
  this.team.ressources.push(this.ressource);
  this.teamser.createTeam(this.team).subscribe(data=>{
    this.ngOnInit();  
  })
  
})

}


ADDrole()
{
  console.log(this.role);
console.log(this.ressource);
console.log(this.role.roleLabel);
this.RessSer.ADDroletoRessource(this.ressource,this.role.roleLabel).subscribe(data => {
  this.ngOnInit();  
 
}
  , error => console.log(error));

/*
  this.ressource.role=this.role;
  this.RessSer.createRessource(this.ressource).subscribe(data => {
  this.gotoList();}

  , error => console.log(error));
  /*this.ressource.role=null;
  console.log( this.ressource);
  role.ressources={};
  role.ressources.save(this.ressource);
  console.log(role.ressources);
  console.log(role);
  this.roleser.createRole(role).subscribe(data=> console.log(data),err=> console.log(err));
*/
 this.ngOnInit();
}
gotolist()
  {
    this.router.navigate(['/ressource/ressource']);
 
  }
gotoList() {

  this.router.navigate(['/ressource/ressource']);
  
}  
}
