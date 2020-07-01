import { Component, OnInit } from '@angular/core';
import { FormGroup, FormBuilder, Validators } from '@angular/forms';
import { EventService } from 'src/app/core/services/event.service';
import { Router, ActivatedRoute } from '@angular/router';
import { ProjectService } from 'src/app/core/services/project.service';
import { Event } from 'src/app/shared/models/event';

@Component({
  selector: 'planning-microfrontend-edit-event',
  templateUrl:'./edit-event.component.html',
  styleUrls: ['./edit-event.component.scss']
})
export class EditEventComponent implements OnInit {

  submitted = false;
  createEventForm: FormGroup;
  idProject: string;
  idEvent:string;
  event:Event=new Event();

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
   // this.id = this.route.snapshot.params['id'];
    this.route.paramMap.subscribe( params => {
      this.idProject = params.get('idProject');
      console.log("this.idProject"+this.idProject);
      this.idEvent = params.get('idEvent');
      console.log("this.idEvent"+this.idEvent);
    });
    this.eventService.getEvent(this.idEvent).subscribe(
      res =>{
        this.event=res
        this.createEventForm.patchValue({
          eventLabel:this.event.eventLabel,
          eventDate:this.event.eventDate,
          eventTime:this.event.eventTime,
          eventDesc:this.event.eventDesc
          

        })

      }
    )
 //   this.editEv(this.idProject,this.idEvent);

  }
  editEv() {
    if (this.createEventForm.valid) {
      this.submitted = true;
      let ev:Event=this.createEventForm.value;
      this.event.eventId=this.idEvent;
      this.projectService.updateProject(this.idProject ,ev)
        .subscribe(
          res => {
            console.log("event updated successfully" + res);
          });
      this.createEventForm.reset();
      this.goToEventList(this.idProject);
    }
  }
    goToEventList(id) {
      let url: string = "planning/projects/detail/" + id + "/events"
      this.router.navigateByUrl(url);
    }
}
