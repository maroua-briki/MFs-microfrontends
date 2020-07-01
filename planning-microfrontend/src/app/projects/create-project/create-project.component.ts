import { Component, OnInit } from '@angular/core';

import { Router } from '@angular/router';
import { Validators, FormBuilder, FormGroup } from '@angular/forms';
import { Project } from 'src/app/shared/models/project';
import { ProjectService } from 'src/app/core/services/project.service';


@Component({
  selector: 'planning-microfrontend-create-project',
  templateUrl: './create-project.component.html',
  styleUrls: ['./create-project.component.scss']
})
export class CreateProjectComponent implements OnInit {

  project: Project=new Project();
  submitted=false;
  createProjectForm: FormGroup;


  constructor(
    private projectService:ProjectService,
    private router: Router,
    private formBuilder:FormBuilder
  ) { 
    this.createForm();
  }
  createForm(){
    this.createProjectForm=this.formBuilder.group({
      topic:['', Validators.required],
      startDate:['', Validators.required],
      endDate:['', Validators.required]
    }
    )
  }
  ngOnInit(): void {
  }
  onSubmit() {
    this.submitted = true;
    console.log("hello I am in on submit")
    console.log(this.createProjectForm.value);
    this.projectService.createProject(this.createProjectForm.value).subscribe(
      res =>{
        console.log("hello I am in subscribe "+res);
        console.log("created successfully")
      },
      err => console.log(err)
    );
    this.createProjectForm.reset();

  }

}
