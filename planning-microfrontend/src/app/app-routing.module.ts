import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { EmptyRouteComponent } from './empty-route/empty-route.component';
import { APP_BASE_HREF } from '@angular/common';
import { ProjectsComponent } from './projects/projects.component';

import { EventsComponent } from './events/events.component';
import { AddPhaseComponent } from './phases/add-phase/add-phase.component';
import { PhasesComponent } from './phases/phases.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { AuthGuard } from './shared/security/guard/auth.guard';
import { EditPhaseComponent } from './phases/edit-phase/edit-phase.component';
import { PhaseDetailComponent } from './phases/phase-detail/phase-detail.component';
import { EditEventComponent } from './events/edit-event/edit-event.component';


const routes: Routes = [
  /*=============================== project routes =======================================*/
  { path: "planning/create-project", component: CreateProjectComponent,canActivate:[AuthGuard]},
  { path: "planning/projects", component: ProjectsComponent ,canActivate:[AuthGuard]},
  { path: 'planning/projects/detail/:id', component: ProjectDetailComponent,canActivate:[AuthGuard]  },
  { path: 'planning/update/:id', component: EditProjectComponent,canActivate:[AuthGuard] },
  /*=============================== event routes =======================================*/
  { path: "planning/projects/detail/:id/events", component: EventsComponent,canActivate:[AuthGuard]  },
  { path: "planning/projects/detail/:id/create-event", component: CreateEventComponent,canActivate:[AuthGuard]  },

  { path: "planning/projects/detail/:id/events/create-event", component: CreateEventComponent,canActivate:[AuthGuard]  },
  { path: "planning/projects/detail/:idProject/events/edit-event/:idEvent", component: EditEventComponent,canActivate:[AuthGuard]  },
  { path: "planning/projects/detail/:id/events/delete-event/:id", component: CreateEventComponent,canActivate:[AuthGuard]  },


  /*=============================== Phase routes =======================================*/
  { path: "planning/projects/detail/:id/phases", component: PhasesComponent,canActivate:[AuthGuard]  },
  { path: "planning/projects/detail/:id/phases/add-phase", component: AddPhaseComponent ,canActivate:[AuthGuard] },
  { path: "planning/projects/detail/:id/phases/edit-phase/:id", component: EditPhaseComponent ,canActivate:[AuthGuard] },
  { path: "planning/projects/detail/:id/phases/one/:id", component: PhaseDetailComponent ,canActivate:[AuthGuard] },
  /*=============================== empty routes =======================================*/
  { path: '**', component: EmptyRouteComponent }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule,
  ],
  providers: [
    { provide: APP_BASE_HREF, useValue: '/' },
  ],
})
export class AppRoutingModule { }
