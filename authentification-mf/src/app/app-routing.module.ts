import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { HomeComponent } from './home/home.component';
import { LoginComponent } from './login/login.component';
import { BoardUserComponent } from './board-user/board-user.component';
import { BoardAdminComponent } from './board-admin/board-admin.component';


const routes: Routes = [ 
  { path: "authentification/home", component: HomeComponent },
  { path: "authentification/login", component: LoginComponent },
 { path: "", redirectTo: 'authentification/login', pathMatch: 'full' },  
{ path: "authentification/admin", component: BoardAdminComponent },
{ path: "authentification/user", component: BoardUserComponent },
  { path: '**', component: EmptyRouteComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
