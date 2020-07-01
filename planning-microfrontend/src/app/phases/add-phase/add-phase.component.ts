import { Component, OnInit } from '@angular/core';
import { FormGroup, Validators, FormBuilder } from '@angular/forms';
import { Router, ActivatedRoute } from '@angular/router';
import { PhaseService } from 'src/app/core/services/phase.service';
import { Phase } from 'src/app/shared/models/phase';
import { ProjectService } from 'src/app/core/services/project.service';
import { Subscription } from 'rxjs';
import { Project } from 'src/app/shared/models/project';

@Component({
  selector: 'planning-microfrontend-add-phase',
  templateUrl: './add-phase.component.html',
  styleUrls: ['./add-phase.component.scss']
})
export class AddPhaseComponent implements OnInit {

  submitted = false;
  id:string;
  createPhaseForm: FormGroup;
  phase: Phase = new Phase();
  receivedProject$: Project;
  subscription: Subscription;

  createForm() {
    this.createPhaseForm = this.formBuilder.group({
      phaseLabel: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    })
  }

  constructor(
    private projectService: ProjectService,
    private phaseService: PhaseService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.createForm();
  }
  ngOnInit(): void {
    this.subscription = this.projectService.getProject().subscribe(
      data => {
        this.receivedProject$ = data;
        this.id=this.receivedProject$.id;
        console.log("received project: " + this.receivedProject$);
        console.log("id: " + this.receivedProject$.id);
        console.log("startDate: " + this.receivedProject$.startDate);
      },
      err => {
        console.log(err);
        console.log(this.subscription);
      }
    );
  }
  createPhase() {
    if (this.createPhaseForm.valid) {
      this.submitted = true;
      this.phase = this.createPhaseForm.value;
      this.phase.project = this.receivedProject$;
      this.phaseService.createPhase(this.createPhaseForm.value).subscribe(
        res => {
          console.log("res: " + res);
          console.log("created successfully")
        },
        err => console.log(err)
      );
      this.createPhaseForm.reset();
      this.goToPhaseList();

    }

  }
  goToPhaseList() {
    this.router.navigate(['planning/projects/detail/',this.id,'phases'])
  }
  ngOnDestroy() {
    this.subscription.unsubscribe();
  }
}
