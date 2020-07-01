import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { RoleComponent } from './role/role.component';
import { RessourceComponent } from './ressource/ressource.component';
import { SkillComponent } from './skill/skill.component';
import { TeamComponent } from './team/team.component';
import { RessourceCreateComponent } from './ressource-create/ressource-create.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { RessourceDetailsComponent } from './ressource-details/ressource-details.component';
import { SkillCreateComponent } from './skill-create/skill-create.component';
import { UpdateressourceComponent } from './updateressource/updateressource.component';
import { AddroletoressourceComponent } from './addroletoressource/addroletoressource.component';
import { AuthGuard } from './security/guards/auth.guards';




const routes: Routes = [
  { path: "ressource/role", component: RoleComponent , canActivate:[AuthGuard]  },
  {path:"ressource/ressource", component: RessourceComponent , canActivate:[AuthGuard] },
  {path:"ressource/skill",component:SkillComponent , canActivate:[AuthGuard] },
  {path:"ressource/team",component:TeamComponent , canActivate:[AuthGuard] },
  {path:"ressource/CreateRessource",component:RessourceCreateComponent , canActivate:[AuthGuard] },
  {path:"ressource/CreateRole",component:RoleCreateComponent , canActivate:[AuthGuard] },
  {path:"ressource/CreateTeam",component:TeamCreateComponent , canActivate:[AuthGuard] },
  {path:"ressource/DetailsRessource/:id",component:RessourceDetailsComponent , canActivate:[AuthGuard] },
  {path:"ressource/ADDroletoRess/:id",component:AddroletoressourceComponent , canActivate:[AuthGuard] },
  {path:"ressource/UpdateRessource/:id",component:UpdateressourceComponent , canActivate:[AuthGuard] },

  {path:"ressource/CreateSkill",component:SkillCreateComponent , canActivate:[AuthGuard] },


  { path: '**', component: EmptyRouteComponent },];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
