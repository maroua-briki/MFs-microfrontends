import { Injectable } from '@angular/core';
import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class TeamService {
  jwt:string;
  host:string ="http://localhost:8082/Team";

  constructor(private http:HttpClient) { }
  getAllTeam ():any {
   
    return this.http.get(this.host+"/GetAllTeams");
  }
  createTeam(team: Object): Observable<Object> {
    
    return this.http.post(`${this.host+"/ADDTeam"}`, team,{responseType :'text' as 'json'});
  }
  findteambyTeamname (teamName:String):  Observable<any>{
    return this.http.get(`${this.host+"/GetSTeambyteamName"}/${teamName}`);
  }
  teamDelete(team:Object): Observable<any> {
    
    
    return this.http.post(`${this.host+"/DeleatTeam"}`,team,{responseType :'text' as 'json'});
//,{responseType :'text'}

}
}
