import { Component, OnInit } from '@angular/core';
import { PhaseService } from '../core/services/phase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { Observable } from 'rxjs';
import { Phase } from '../shared/models/phase';
import { ProjectService } from '../core/services/project.service';

@Component({
  selector: 'planning-microfrontend-phases',
  templateUrl: './phases.component.html',
  styleUrls: ['./phases.component.scss']
})
export class PhasesComponent implements OnInit {

  id: string;
  phases:Observable<Phase[]>
  
  constructor(
    private phaseService: PhaseService,
    private projectService:ProjectService,
    private router: Router, 
    private route: ActivatedRoute) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("project id"+this.id);
    this.phaseService.getPhases(this.id).subscribe(
      data => {

        console.log(data);
        this.phases=data; },
      err => console.log(err));  }

  onEdit(){
    this.router.navigate(['./edit-phase', this.id]);
  }
onDelete(){
}

}
