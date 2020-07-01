import { Component, OnInit } from '@angular/core';
import { SkillService } from '../skill.service';
import { Router } from '@angular/router';
import { Skill } from '../model/Skill';

@Component({
  selector: 'app2-skill-create',
  templateUrl: './skill-create.component.html',
  styleUrls: ['./skill-create.component.scss']
})
export class SkillCreateComponent implements OnInit {
skill:Skill=new Skill(); 
  constructor( private servsk:SkillService,
    private Router:Router) { }

  ngOnInit(): void {
  }
  public registerNow()
  {    console.log(this.skill);

    this.servsk.createSkill(this.skill)
    .subscribe(data=>{  this.gotoList();},err=>{
    }
    )
    
    this.gotoList();
  }
  gotoList() {

    this.Router.navigate(['/ressource/skill']);
    
  }

  gotolist()
  {
    this.Router.navigate(['/ressource/skill']);
  }
}
