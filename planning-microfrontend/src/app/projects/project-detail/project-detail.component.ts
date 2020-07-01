import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'planning-microfrontend-project-detail',
  templateUrl: './project-detail.component.html',
  styleUrls: ['./project-detail.component.scss']
})
export class ProjectDetailComponent implements OnInit {
  id: string;
  project: any;
  sentProject$: any;

  constructor(private route: ActivatedRoute,
    private router: Router,
    private projectService: ProjectService) { }


  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    this.getOneProject(this.id);
  }
  getOneProject(id) {
    this.project = new Project();
    this.projectService.getProjectById(id)
      .subscribe(data => {
        console.log("data " + data);
        this.project = data;
        this.sentProject$ = data;
        this.projectService.setProj(this.project);
        this.projectService.idProject=this.projectService.getProj().id;
        console.log("this.projectService.idProject"+this.projectService.idProject)

        /********************** send the project to the component add-phase************************ */
        this.projectService.sendProject(this.project);
        console.log("project sent");
      },
        err => console.log(err)
      );
  }
  list() {
    this.router.navigate(['planning/projects']);
  }


}
