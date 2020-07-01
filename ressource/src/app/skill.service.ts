import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillService {
  host:string ="http://localhost:8082/Skill";
  jwt:string;

  constructor(private http:HttpClient) { }
  getAllSkills ():any {
    return this.http.get(this.host+"/GetAllSkill");
  }
  createSkill(skill: Object): Observable<Object> {
    return this.http.post(`${this.host+"/AddSkill"}`, skill,{responseType :'text' as 'json'});
  }
  getRessource(id: String): Observable<any> {
    //let headers=new HttpHeaders({'Authorization':this.jwt});
    return this.http.get(`${this.host+"/getRessByID"}/${id}`);
  }

  findskillbySkillname (skillName:String):  Observable<any>{
    return this.http.get(`${this.host+"/GetSkillbyskillName"}/${skillName}`);
  }

deleteskill(skill : Object): Observable<any> {
  return this.http.post(`${this.host+"/DeleatSkill"}`,skill,{responseType :'text' as 'json'});
//,{responseType :'text'}
}
  


}
