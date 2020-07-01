import { Component, OnInit } from '@angular/core';
import { Phase } from 'src/app/shared/models/phase';
import { PhaseService } from 'src/app/core/services/phase.service';
import { Router, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'planning-microfrontend-phase-detail',
  templateUrl: './phase-detail.component.html',
  styleUrls: ['./phase-detail.component.scss']
})
export class PhaseDetailComponent implements OnInit {

  id: string;
  phase: Phase = new Phase();
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private phaseService: PhaseService
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("the id of the phase : " + this.id);
    this.getPhase(this.id);
  }
  getPhase(id) {
    this.phaseService.getPhaseById(id).subscribe(
      data => {
        console.log(data);
        this.phase = data;
        this.phaseService.sendPhase(this.phase);
        console.log("phase sent");
      },
      err => console.log(err)
    );

  }

}
