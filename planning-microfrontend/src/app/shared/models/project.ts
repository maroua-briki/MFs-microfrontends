import { Event } from '../../shared/models/event';
import { Observable } from 'rxjs';

export class Project {
    id: string;
    topic: string;
    startDate: string;
    endDate: string;
    events: Event[] = [];
    // events:Observable<Event[]>
    // events: Array<Event> = [];

    constructor() { }



    addEvent(event: Event) {
        console.log("add event in Event class" + event);
        let lenEvents = this.events.push(event);
        console.log("  len events" + lenEvents);
        console.log(this.events[0]);
    }

}
