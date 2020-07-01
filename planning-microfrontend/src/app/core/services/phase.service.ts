import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable, Subject, BehaviorSubject } from 'rxjs';
import { Phase } from 'src/app/shared/models/phase';

@Injectable({
  providedIn: 'root'
})
export class PhaseService {
  private urlCreate = 'http://localhost:8084/phases/create';
  private urlGetAll = 'http://localhost:8084/phases/byProject';
  private urlUpdate = 'http://localhost:8084/phases/update';
  private urlGetById = 'http://localhost:8084/phases';
  private urlDelete = 'http://localhost:8084/phases/delete';

  public phaseSubject$:Subject<Phase> = new BehaviorSubject<Phase>(null);




  constructor(private http: HttpClient) { }

  /*========================== create =================================*/
  createPhase(phase: Object): Observable<Object> {
    console.log("the phase u wanna create" + phase);
    return this.http.post(`${this.urlCreate}`, phase);
  }
  /*========================== get =================================*/
  getPhases(id: string): Observable<any> {
    return this.http.get(`${this.urlGetAll}/${id}`);
  }
  /*========================== get =================================*/
  getPhaseById(id: string): Observable<any> {
    return this.http.get(`${this.urlGetById}/${id}`);

  }

  /*========================== edit =================================*/
  editPhase( id: string, phase: any): Observable<Object> {
    return this.http.put(`${this.urlUpdate}/${id}`, phase);
  }
  /*========================== delete =================================*/

  deletPhase(id: string): Observable<any> {
    return this.http.get(`${this.urlDelete}/${id}`);

  }
    /*========================== sharing data between Components =================================*/

  sendPhase(phase:Phase){
    this.phaseSubject$.next(phase);
  }
  getPhase():Observable<Phase>{
    return this.phaseSubject$.asObservable();
  }
}
