import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { JwtModule, JwtHelperService } from '@auth0/angular-jwt';


const httpOptions = {
  headers: new HttpHeaders({ 'Content-Type': 'application/json' })
};

@Injectable({
  providedIn: 'root'
})
export class AuthService {
  host: string = 'http://localhost:8080';
  jwt: string;
  username: string;
  roles: Array<string>;
  roleString: string;
  constructor(private http: HttpClient) {
    this.roles = ['a'];
  }

  login(data) {
    return this.http.post(this.host + "/login", data, { observe: 'response' })
  }
  saveToken(jwt: string) {
    localStorage.setItem('token', jwt);
    this.jwt = jwt;
    console.log(jwt);
    this.parseJWT();
  }

  parseJWT() {
    let jwtHelper = new JwtHelperService();
    let ojbtJWT = jwtHelper.decodeToken(this.jwt);
    this.username = ojbtJWT;
    this.roleString = ojbtJWT.roles[0].authority;
    console.log(this.roleString);
  }
  logout() {
    localStorage.removeItem('token');
    this.initParams();
  }
  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roles = ['a'];
    this.roleString = null;
  }

  loadToken() {
    this.jwt = localStorage.getItem('token');//je recupere le token
    this.parseJWT();//je dois le parser
  }
  isUser() {
    return this.roleString == "USER"
  }
  isAdmin() {
    return this.roleString == 'ADMIN'
  }

  isAuthenticated() {
    return this.roleString != null && (this.isAdmin() || this.isUser())
  }












  /*login(credentials): Observable<any> {

    return this.http.post(AUTH_API + '/login', { username: credentials.username, password: credentials.password
}, {observe:'response'});
  
  }

  register(user): Observable<any> {
    return this.http.post(AUTH_API + '/signup', {
      username: user.username,
      repassword: user.repassword,
      password: user.password
    }, httpOptions);
  }*/
}