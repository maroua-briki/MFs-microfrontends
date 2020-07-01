import { Component, OnInit} from '@angular/core';

import {ActivatedRoute, Router } from '@angular/router';
import { Event } from '../shared/models/event';
import { EventService } from '../core/services/event.service';
import { ProjectService } from '../core/services/project.service';
import { MatTableDataSource } from '@angular/material/table';



@Component({
  selector: 'planning-microfrontend-events',
  templateUrl: './events.component.html',
  styleUrls: ['./events.component.scss']
})
export class EventsComponent implements OnInit {
  searchKey: string;
  eventList: Event[];
  id:string;
  dataSource = new MatTableDataSource<Event>([]);


  displayedColumns: string[] = ['id', 'eventLabel', 'eventDate','eventTime', 'eventDesc','actions'];

  constructor(
    private eventService: EventService,
    private route: ActivatedRoute,
    private router: Router,
    private projectService:ProjectService
    ) {    
    }

  ngOnInit() {
    this.id = this.route.snapshot.params['id'];
    this.getEvents(this.id);
  }
  getEvents(id) {
      this.eventService.getEvents(id).subscribe(
      data =>{console.log(data);
        this.dataSource=data;
        this.eventList=data;}
    );
  }

deleteEvent(idEvent){
  this.projectService.deleteEvent(this.id,idEvent).subscribe(
    res => {
      console.log("deleted successfully" + res);
      // const item=this.eventList.find(item => item.eventId === idEvent);
      // console.log("item"+item);
      const index=this.eventList.findIndex(index => index.eventId=idEvent);
      console.log("index "+index);
      this.eventList.splice(index,1);
      let cloned:Event[]=this.eventList;
      cloned=this.eventList;
      console.log("fin");
      console.log(this.eventList);
    });
}
}

