import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Project } from '../shared/models/project';
import { ProjectService } from '../core/services/project.service';
import { Router } from '@angular/router';
import { AuthService } from '../core/services/auth.service';

@Component({
  selector: 'planning-microfrontend-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.scss']
})
export class ProjectsComponent implements OnInit {

  projects:Observable<Project[]>

  constructor(
    private projectService:ProjectService,
    private router: Router,
    private authService:AuthService
  ) { }

  ngOnInit(): void {
    this.getAllProjects();
    console.log("token "+this.authService.gettoken());

  }

  getAllProjects(){
    console.log("projects: "+this.projectService.getAllProjects());
    this.projects=this.projectService.getAllProjects();
  }
  updateProject(id: string){
    this.router.navigate(['planning/update', id]);
  }
  
  goToDetails(id:string){
  this.router.navigate(['planning/projects/detail',id])
}
deleteProject(id:string){
  this.projectService.deleteProject(id)
  .subscribe(
    data => {
      console.log(data);
      this.getAllProjects();
    }, err => console.log(err)
  );
}

}
