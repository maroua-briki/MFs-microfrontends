import { Component, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { PhaseService } from 'src/app/core/services/phase.service';
import { Router, ActivatedRoute } from '@angular/router';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { Phase } from 'src/app/shared/models/phase';

@Component({
  selector: 'planning-microfrontend-edit-phase',
  templateUrl: './edit-phase.component.html',
  styleUrls: ['./edit-phase.component.scss']
})
export class EditPhaseComponent implements OnInit {


  subscription: Subscription;
  receivedPhase$: Phase;
  phase: Phase;
  submitted = false;
  id: string;
  projectId:string;
  createPhaseForm: FormGroup;


  createForm() {
    this.createPhaseForm = this.formBuilder.group({
      phaseLabel: ['', Validators.required],
      startDate: ['', Validators.required],
      endDate: ['', Validators.required]
    })
  }

  constructor(
    private phaseService: PhaseService,
    private router: Router,
    private formBuilder: FormBuilder,
    private route: ActivatedRoute
  ) {
    this.createForm();

  }

  ngOnInit(): void {
    this.id = this.route.snapshot.params['id'];
    console.log("the id of the phase : " + this.id);
    this.phaseService.getPhaseById(this.id).subscribe(
      data => {
        this.phase = data;
        this.projectId=this.phase.project.id;
        this.createPhaseForm.patchValue({
          phaseLabel: this.phase.phaseLabel,
          startDate: this.phase.startDate,
          endDate: this.phase.endDate
        });
      });
  }

  editPhase() {
    if (this.createPhaseForm.valid) {
      this.submitted = true;
      console.log("it is a valid phase");
      console.log("form data"+ this.createPhaseForm.value.phaseLabel);

      this.phaseService.editPhase(this.id, this.createPhaseForm.value)
        .subscribe(
          data => {
            console.log("the new phase :" +data);
            console.log("I am in subscribe");
          },
          error => console.log(error)
        );
      this.createPhaseForm.reset();
      this.goToPhaseList();
    }

  }
  goToPhaseList() {
    this.router.navigate(['planning/projects/detail/',this.projectId,'phases']);
  }

}


// ngOnInit(): void {
//   this.subscription = this.phaseService.getPhase().subscribe(
//     data => {
//       this.receivedPhase$ = data;
//       console.log("received phase: " + this.receivedPhase$);
//       console.log("received phase: " + this.receivedPhase$.phaseLabel);
//     },
//     err => {
//       console.log(err);
//     }
//   );
// }