import { Component, OnInit, ViewChild } from '@angular/core';
import { SkillService } from '../skill.service';
import {MatTableDataSource} from '@angular/material/table';
import {MatPaginator} from '@angular/material/paginator';
import { Skill } from '../model/Skill';
import { RessourceService } from '../ressource.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app2-skill',
  templateUrl: './skill.component.html',
  styleUrls: ['./skill.component.scss']
})
export class SkillComponent implements OnInit {

  constructor(private ressourceserv :RessourceService,private skillserv: SkillService,private route: Router) { }
  skills;
  skill:Skill= new Skill();
  displayedColumns: string[] = ['skillName','Actions'];
  dataSource=new MatTableDataSource<any>();
    @ViewChild(MatPaginator) paginator: MatPaginator;

    data=[]; 
  
    ngOnInit(): void {
      /*
      if(this.ressourceserv.isAuthenticated()==false)
      {
        this.route.navigateByUrl('');
      }else
      {
        this.reloaddata();
      }
      */
      this.reloaddata();
  
        }

reloaddata()
{
  this.skillserv.getAllSkills().subscribe(data=>{
    this.skills=data;
    this.data=data;
    this.dataSource.data=this.data;
this.dataSource.paginator=this.paginator;
console.log(this.dataSource.data);
  },err=>
  {

  }
  )
}
deleteskill(skill)
{
   let c =confirm("are you sure to delete Skill: "+skill.skillName);
  if (c) 
{
this.skillserv.deleteskill(skill).subscribe(data=>{
  this.reloaddata();

}
,err=>{

})
this.reloaddata();
}

}


}
