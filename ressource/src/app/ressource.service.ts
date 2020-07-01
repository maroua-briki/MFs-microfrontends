import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Ressource } from './model/Ressource';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';



@Injectable({
  providedIn: 'root'
})
export class RessourceService {
  host:string ="http://localhost:8082/Ressource";
  jwt:string;
username:string;
ressupdate;
roles:Array<string>;
roleString:string;

  constructor(private http:HttpClient) {     this.roles=['a']; 
}

gettoken()
{let jwt=localStorage.getItem('token');
return jwt;
  
}
  
  getAllRessource():any
  {
    //let headers=new HttpHeaders({'Authorization':this.jwt});
    return this.http.get(this.host+"/GetAllRessource");
  }
  createRessource(ressource: Object): Observable<Object> {
    //let headers=new HttpHeaders({'Authorization':this.jwt});
    return this.http.post(`${this.host+"/AddRessource"}`, ressource,{responseType :'text' as 'json'});
    //{responseType :'text' as 'json'}
  }

  getRessource(id: String): Observable<any> {
    //let headers=new HttpHeaders({'Authorization':this.jwt});
    return this.http.get(`${this.host+"/getRessByID"}/${id}`);
  }
  ressourceDelete(ressource:Object): Observable<any> {
   // let headers=new HttpHeaders({'Authorization':this.jwt});
    return this.http.post(`${this.host+"/DeleateRessource"}`,ressource,{responseType :'text'});
//,{responseType :'text'}
}
updateRessource(id: string, ressource: object): Observable<Object> {
  console.log(ressource);

  return this.http.post(`${this.host+"/UpdateRess"}/${id}`, ressource);
}
ADDroletoRessource(ressource:Object,role:String)
{
    //let headers=new HttpHeaders({'Authorization':this.jwt});
   // console.log(this.jwt);
    return this.http.post(`${this.host+"/addRoleToUser"}/${role}`, ressource,{responseType :'text' as 'json'});
    //{responseType :'text' as 'json'}
  
}
ADDskillstoRessource(ressource:Object,skill:String)
{
  return  this.http.post(`${this.host+"/SkilltoRessource"}/${skill}`, ressource,{responseType :'text' as 'json'});
}
ADDteamtoResource(ressource:Object,team:String)
{
    //let headers=new HttpHeaders({'Authorization':this.jwt});
    //console.log(this.jwt);
    return this.http.post(`${this.host+"/TeamtoRessource"}/${team}`, ressource,{responseType :'text' as 'json'});
    //{responseType :'text' as 'json'}
  
}
  saveToken()
{
this.jwt=localStorage.getItem('token');
this.parseJWT();
}


parseJWT()
{
let jwtHelper=new JwtHelperService();
let ojbtJWT=jwtHelper.decodeToken(this.jwt);
this.username=ojbtJWT.obj;
this.roles=ojbtJWT.roles;
this.roleString=ojbtJWT.roles[0].authority;
}
logout()
{
  localStorage.removeItem('token');
  this.initParams();
  
}
initParams(){
  this.jwt=undefined;
  this.username=undefined;
  this.roleString=null;
  this.roles=['a'];
}

isAdmin(){
  return this.roleString=='ADMIN'


  //return this.roles[0]=='ADMIN';
  
}
/*loadToken()
{
  this.jwt=localStorage.getItem('token');//je recupere le token
this.parseJWT();//je dois le parser
}*/
isUser(){
  return this.roleString=="USER"}

  /*if ( this.roles[0]=='a')
  {
    return false;
  }
  else if(this.roles[0]=='USER')
  {
return true
  }
  */

isAuthenticated(){
  return  (this.jwt ||this.isAdmin()|| this.isUser())
}










}
