import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {MatDialogModule} from '@angular/material/dialog';
import {MatButtonModule} from '@angular/material/button';
import {map, startWith} from 'rxjs/operators';
import {MatSelectModule} from '@angular/material/select';
import {MatCheckboxModule} from '@angular/material/checkbox';
import {MatRadioModule} from '@angular/material/radio';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { ChartsModule } from 'ng2-charts';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './shared/navbar/navbar.component';
import { SidebarComponent } from './shared/sidebar/sidebar.component';
import { RoleComponent } from './role/role.component';
import { SkillComponent } from './skill/skill.component';
import { RessourceComponent } from './ressource/ressource.component';
import { TeamComponent } from './team/team.component';
import { RessourceCreateComponent } from './ressource-create/ressource-create.component';
import { RoleCreateComponent } from './role-create/role-create.component';
import { TeamCreateComponent } from './team-create/team-create.component';
import { RessourceDetailsComponent } from './ressource-details/ressource-details.component';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';
import { MatTableModule } from '@angular/material/table';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatPaginatorModule } from '@angular/material';
import { UpdateressourceComponent } from './updateressource/updateressource.component';
import { SkillCreateComponent } from './skill-create/skill-create.component';
import { MaterialModule } from "./material/material.module";
import { AddroletoressourceComponent } from './addroletoressource/addroletoressource.component';
import {MatListModule} from '@angular/material/list';
import { AuthGuard } from './security/guards/auth.guards';
import { authInterceptorProviders } from './security/interceptors/auth.interceptor';
import { TeamDetailsComponent } from './team-details/team-details.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    SidebarComponent,
    RoleComponent,
    RessourceComponent,
    SkillComponent,
    TeamComponent,
    RessourceCreateComponent,
    RoleCreateComponent,
    TeamCreateComponent,
    SidebarComponent,
    RessourceDetailsComponent,
    UpdateressourceComponent,
    SkillCreateComponent,
    AddroletoressourceComponent,
    TeamDetailsComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatListModule,
    HttpClientModule,
    FormsModule,
    MaterialModule,
    MatTableModule,
    BrowserAnimationsModule,
  MatPaginatorModule,
  MatDialogModule,
  MatButtonModule,
  MatSelectModule,
  MatRadioModule,
  MatCheckboxModule,
  NgbModule,
  ChartsModule



  ],
  providers: [AuthGuard ,authInterceptorProviders],
  bootstrap: [AppComponent]
})
export class AppModule { }
