import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/_services/auth.service';
import { Router } from '@angular/router';
import { assetUrl } from 'src/single-spa/asset-url';
import { singleSpaAngular } from 'single-spa-angular';
import * as singleSpa from 'single-spa';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {
  form: any = {};
  isLoggedIn = false;
  isLoginFailed = false;
  errorMessage = '';
  logoUrl = assetUrl("bd.png");

  roles: string[] = [];

  constructor(private authService: AuthService,
    private router: Router) { }

  ngOnInit() {
    /*if (this.tokenStorage.getToken()) {
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
    }*/
  }

  onLogin(data) {

    console.log(data);
    this.authService.login(data).subscribe(res => {
      let jwt = res.headers.get('Authorization');
      console.log(jwt);
      this.authService.saveToken(jwt);
      singleSpa.triggerAppChange();
      window.location.replace('/home');

    }, err => {

    })

  }
  isAdmin() {
    return this.authService.isAdmin();
  }
  isUser() {
    return this.authService.isUser();
  }
  /*this.authService.login(this.form).subscribe(
    data => {
      console.log(data);
let jwt=data.headers.get('Authorization');
console.log(jwt)
      this.tokenStorage.saveToken(data.accessToken);
      this.tokenStorage.saveUser(data);
console.log(this.tokenStorage);
      this.isLoginFailed = false;
      this.isLoggedIn = true;
      this.roles = this.tokenStorage.getUser().roles;
      this.reloadPage();
    },
    err => {
//       this.errorMessage = err.error.message;
 //     this.isLoginFailed = true;
    }
  );
  */


  reloadPage() {
    window.location.reload();
  }
}