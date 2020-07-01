import { Injectable } from '@angular/core';

import { JwtHelperService } from '@auth0/angular-jwt';


@Injectable({
  providedIn: 'root'
})
export class AuthService {
  jwt: string;
  username: string;
  roles: Array<string>;
  roleString: string;

  constructor() { }

  gettoken() {
    let jwt = localStorage.getItem('token');
    return jwt;
  }

  isAuthenticated() {
    // let jwt = this.gettoken();
    // return jwt!=null;

    return (this.roleString || this.isAdmin() || this.isUser())
  }
  isUser() {
    return this.roleString == "USER"
  }

  isAdmin() {
    return this.roleString == 'ADMIN'

  }
  logout() {
    localStorage.removeItem('token');
    this.initParams();

  }
  initParams() {
    this.jwt = undefined;
    this.username = undefined;
    this.roleString = null;
    this.roles = ['a'];
  }
  saveToken() {
    this.jwt = localStorage.getItem('token');
    this.parseJWT();
  }


  parseJWT() {
    let jwtHelper = new JwtHelperService();
    let ojbtJWT = jwtHelper.decodeToken(this.jwt);
    this.username = ojbtJWT.obj;
    this.roles = ojbtJWT.roles;
    this.roleString = ojbtJWT.roles[0].authority;
  }

}
