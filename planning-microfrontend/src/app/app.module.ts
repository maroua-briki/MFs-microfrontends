import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ProjectsComponent } from './projects/projects.component';
import {HttpClientModule} from '@angular/common/http'
import { ProjectService } from './core/services/project.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PageHeaderComponent } from './shared/page-header/page-header.component';
import { EventsComponent } from './events/events.component';
import { MaterialModule } from './shared/material-imports/material/material.module';
import { MatPaginatorModule } from '@angular/material/paginator';
import { MatTableModule } from '@angular/material/table';
import { MatSortModule } from '@angular/material/sort';
import { MatFormFieldModule } from '@angular/material/form-field';
import {MatInputModule} from '@angular/material/input';
import { PhasesComponent } from './phases/phases.component';
import { AddPhaseComponent } from './phases/add-phase/add-phase.component';
import { CreateProjectComponent } from './projects/create-project/create-project.component';
import { EditProjectComponent } from './projects/edit-project/edit-project.component';
import { ProjectDetailComponent } from './projects/project-detail/project-detail.component';
import { CreateEventComponent } from './events/create-event/create-event.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { SpinnerComponent } from './shared/spinner/spinner.component';
import { AuthGuard } from './shared/security/guard/auth.guard';
import { authInterceptorProviders } from './shared/security/interceptors/auth.interceptor';
import { EditPhaseComponent } from './phases/edit-phase/edit-phase.component';
import { PhaseDetailComponent } from './phases/phase-detail/phase-detail.component';
import {MatIconModule} from '@angular/material/icon';
import { EditEventComponent } from './events/edit-event/edit-event.component';



@NgModule({
  declarations: [
    AppComponent,
    ProjectsComponent,
    CreateProjectComponent,
    EditProjectComponent,
    ProjectDetailComponent,
    CreateEventComponent,
    PageHeaderComponent,
    EventsComponent,
    SidebarComponent,
    SpinnerComponent,
    PhasesComponent,
    AddPhaseComponent,
    EditPhaseComponent,
    PhaseDetailComponent,
    EditEventComponent
    
    
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    MaterialModule,
    MatPaginatorModule,
    MatTableModule,
    MatSortModule,
    MatFormFieldModule,
    MatInputModule,
    MatIconModule,


  ],

  providers: [ProjectService,AuthGuard,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
