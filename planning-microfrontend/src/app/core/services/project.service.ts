import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable,Subject, BehaviorSubject } from 'rxjs';
import { Project } from 'src/app/shared/models/project';

@Injectable({
  providedIn: 'root'
})
export class ProjectService {
  private urlCreate = 'http://localhost:8084/projects/create';
  private urlGetAll = 'http://localhost:8084/projects';
  private urlGetById = 'http://localhost:8084/projects';
  private urlUpdate = 'http://localhost:8084/projects/update';
  private urlDelete = 'http://localhost:8084/projects/delete';


  /*================================ sharing data ==============================================*/
  private project : Project;
  idProject:string;

  //projectSubject$= new BehaviorSubject<Project>(new Project());
  // projectSource$=this.projectSubject.asObservable(); //expose the subject as an observable
  public projectSubject$:Subject<Project> = new BehaviorSubject<Project>(null);
  //private projectSubject$ = new Subject<Project>();

  sendProject(project:Project){
    this.projectSubject$.next(project);
  }
  getProject():Observable<Project>{
    return this.projectSubject$.asObservable();
  }
  constructor(private http: HttpClient) { }
  /*========================== create =================================*/
  createProject(project: Project): Observable<any> {
    console.log("the project u wanna create" + project);
    return this.http.post(`${this.urlCreate}`, project);
  }
  /*========================== getall =================================*/
  getAllProjects(): Observable<any> {
    return this.http.get(`${this.urlGetAll}`);
  }
  /*========================== get by id =================================*/
  getProjectById(id: string): Observable<Object> {
    return this.http.get(`${this.urlGetById}/${id}`);
  }
  /*========================== update a project =================================*/
  updateProject(id: string, value: any): Observable<Object> {
    return this.http.put(`${this.urlUpdate}/${id}`, value)
  }
  /*========================== delete a project =================================*/
  deleteProject(id: string): Observable<any> {
    return this.http.delete(`${this.urlDelete}/${id}`);
  }
  /*========================== UPDATE the project by adding a new event to the event list =================================*/
  addNewEvent(id: string, event: any): Observable<any> {
    return this.http.put(`${this.urlUpdate}/${id}` + "/addEvent", event,{responseType: 'text'});
  }

  //getters & setters for the variable project

  getProj(){
    return this.project;
  }
  setProj(project: Project){
    this.project=project;
  }
      /*========================== get event by id =================================*/

      getEventById(id:string){
        return this.http.get(`${this.urlGetById}/${id}`);

      }
      deleteEvent(idProject:string,idEvent:string): Observable<any>{
        return this.http.delete(`${this.urlUpdate}/${idProject}` + "/delete"+`/${idEvent}`,{responseType: 'text'})
      }



}
