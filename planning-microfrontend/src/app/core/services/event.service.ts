import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EventService {
  private urlCreate = 'http://localhost:8084/projects';
  private urlGet = 'http://localhost:8084/events';

  createdEvent:Event;


  constructor(private http: HttpClient) { }
  /*========================== create =================================*/
  // createEvent(event: Object): Observable<Object> {
  //   console.log("the event u wanna add to the project" + event);
  //   return this.http.post(`${this.urlCreate}`, event);
  // }
    /*========================== get all events =================================*/
    getEvents(id:string):Observable<any>{
      return this.http.get(`${this.urlCreate}/${id}`+"/getEvents");
    }
        /*========================== get One =================================*/
        getEvent(id:string):Observable<any>{
          return this.http.get(`${this.urlGet}/${id}`);

        }





}
