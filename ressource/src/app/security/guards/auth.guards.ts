import { Injectable } from '@angular/core';
import { Router, CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot } from '@angular/router';
import { RessourceService } from 'src/app/ressource.service';


@Injectable()
export class AuthGuard implements CanActivate {

  constructor(private router: Router, private authService: RessourceService ) {}

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot) {
    if (this.authService.isAuthenticated()) {
        // logged in so return true
        return true;
    }

    // not logged in so redirect to login page with the return url and return false
    this.router.navigate(['authentification/login']);
    return false;
  }
}