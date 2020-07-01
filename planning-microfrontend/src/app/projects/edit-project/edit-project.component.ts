import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'planning-microfrontend-edit-project',
  templateUrl: './edit-project.component.html',
  styleUrls: ['./edit-project.component.scss']
})
export class EditProjectComponent implements OnInit {

  id:string;
  project:any;
  submitted:false;
  editForm:FormGroup;
  editProjectForm()
  {
      this.editForm=this.formBuilder.group({
        topic:['', Validators.required],
        startDate:['', Validators.required],
        endDate:['', Validators.required]
      } )
    }
  constructor(
    private projectService: ProjectService,
    private router: Router,
    private formBuilder:FormBuilder,
    private route : ActivatedRoute
  ) { 
    this.editProjectForm();
  }

  ngOnInit(): void {
    this.project=new Project();
    this.id=this.route.snapshot.params['id'];
    this.projectService.getProjectById(this.id)
    .subscribe(data=>{
      console.log(data);
      this.project=data;
      this.editForm.patchValue({
        topic:this.project.topic,
        startDate:this.project.startDate,
        endDate:this.project.endDate
      });
    }, err => console.log(err));
  }

  updateProject(){
    console.log("I am in update project");
    if(this.editForm.valid){
      console.log("it is a valid project");
      this.projectService.updateProject(this.id, this.editForm.value)
      .subscribe(
        data => console.log(data),
        error => console.log(error)) ; 
    }

   
    }
    onSubmit(){
      this.updateProject();
    }

    goToPhaseList(){
      this.router.navigate(['../..']);
    }
  

}
