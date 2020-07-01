import { Injectable } from '@angular/core';
import { HttpClient ,HttpHeaders} from '@angular/common/http';
import { Observable } from 'rxjs';
import { Role } from './model/Role';
import { RessourceService } from './ressource.service';

@Injectable({
  providedIn: 'root'
})
export class RoleService {
 host:string ="http://localhost:8082/Role";
 jwt:string;

  constructor(private http:HttpClient) {

   }


getAllRole ():any {
  return this.http.get(this.host+"/GetAllRole");
}
createRole(role: Object): Observable<Object> {
  return this.http.post(`${this.host+"/ADDrole"}`, role,{responseType :'text' as 'json'});
}

roleDelete(role:Object): Observable<any> {
    
    return this.http.post(`${this.host+"/DeleateRole"}`,role,{responseType :'text' as 'json'});
//,{responseType :'text'}

}
}
