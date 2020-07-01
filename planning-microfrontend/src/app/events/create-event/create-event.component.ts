import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators, FormControl, AbstractControl, ValidatorFn } from '@angular/forms';
import { Observable } from 'rxjs';
import { EventService } from 'src/app/core/services/event.service';
import { ProjectService } from 'src/app/core/services/project.service';
import { Project } from 'src/app/shared/models/project';
import { Event } from 'src/app/shared/models/event';



@Component({
  selector: 'planning-microfrontend-create-event',
  templateUrl: './create-event.component.html',
  styleUrls: ['./create-event.component.scss']
})
export class CreateEventComponent implements OnInit {

  submitted = false;
  createEventForm: FormGroup;
  id: string;
  get f() { return this.createEventForm.controls; }


  createForm() {
    this.createEventForm = this.formBuilder.group({
      eventLabel: ['', Validators.required],
      eventDate: ['', Validators.required],
      eventTime: ['', Validators.required],
      eventDesc: ['', Validators.required]
    });
  }

  constructor(
    private eventService: EventService,
    private projectService: ProjectService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute

  ) {
    this.createForm();
  }

  ngOnInit(): void {
   

  }
  createEv() {
  this.id = this.route.snapshot.params['id'];
  if (this.createEventForm.valid) {
    this.submitted = true;
    this.projectService.addNewEvent( this.id , this.createEventForm.value)
      .subscribe(res => console.log("event created successfully" + res)
      );
    this.createEventForm.reset();
    this.goToEventList(this.id);

  }
}
  goToEventList(id) {
    let url: string = "planning/projects/detail/" + id + "/events"
    this.router.navigateByUrl(url);

 


  }

  // createEv() {
  //       let id: string=this.projectService.idProject;
  //       this.id = this.route.snapshot.params['id'];
  //       let event: Event=new Event;
  //       if (this.createEventForm.valid) {
  //         this.submitted = true;
  //         event = this.createEventForm.value;
  //         this.projectService.addNewEvent(id, event)
  //           .subscribe(
  //             res => {
  //               this.eventService.createdEvent=res;
  //               console.log("event created successfully"+res);

  //             },
  //             err => {
  //               console.log("err =  "+ err);
  //             }
  //           );
  //         this.createEventForm.reset();
  //         this.goToEventList(id);

  //       }

  //     }

  // getOneProject(id): any {
  //   let project: any = new Project();
  //   this.projectService.getProjectById(id)
  //     .subscribe(
  //       data => {
  //         project = data;
  //       },
  //       err => console.log(err)
  //     );
  //   console.log("I am in the end of getOneProject() = " + project);
  //   return project;
  // }

  //   createEv() {
  //     let id: string;
  //     let previousProject: Project = new Project();
  //     let event: Event=new Event;

  //     console.log("hello I am in on submit")
  //     if (this.createEventForm.valid) {
  //       this.submitted = true;
  //       event = this.createEventForm.value;
  //       console.log(event);
  //       id = this.route.snapshot.params['id'];
  //       console.log("this is the id I captured: " + id);
  //       previousProject = this.getOneProject(id);
  //       console.log("previousProject = " + previousProject);
  //       console.log("project before adding the new evet : "+previousProject.events);
  //       console.log("********************************************************");
  //       previousProject.events.push(event);
  //       console.log("project after adding the event : " + previousProject);
  //       this.projectService.addNewEvent(id, previousProject)
  //         .subscribe(
  //           res => {
  //             console.log("hello I am in subscribe " + res);
  //             console.log("created successfully");
  //           },
  //           err => {
  //             console.log("I am in error bloc");
  //             console.log("err =  "+ err);
  //           }
  //         );
  //       this.createEventForm.reset();
  //       this.goToEventList(id);

  //     }

  //   }
  //   goToEventList(id){
  //     let url: string = "planning/projects/detail/"+id+"/events"
  //     this.router.navigateByUrl(url);

  //   }
}
