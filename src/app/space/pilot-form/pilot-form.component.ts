import { Component, OnInit } from '@angular/core';
import {ActivatedRoute, Router} from '@angular/router';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import { map } from 'rxjs/operators';
import {PilotService} from '../pilot.service';
import {PilotValidators} from '../pilot-validators';

@Component({
  selector: 'app-pilot-form',
  templateUrl: './pilot-form.component.html',
  styleUrls: ['./pilot-form.component.scss']
})
export class PilotFormComponent implements OnInit {
  form: FormGroup;

  constructor(private route: ActivatedRoute, private pilotService: PilotService, private router: Router) { }

  ngOnInit() {
    this.route.data
      .pipe(map((data) => data.pilot))
      .subscribe((pilot) => {
        this.form = new FormGroup({
          id: new FormControl(pilot.id),
          firstName: new FormControl(pilot.firstName, { validators: [Validators.required, PilotValidators.pilotName]}),
          lastName: new FormControl(pilot.lastName, { validators: [Validators.required], asyncValidators: [PilotValidators.pilotForbidden]}),
          imageUrl: new FormControl(pilot.imageUrl)
        }, {updateOn: 'blur'});
      });
  }

  save(): void {
    const pilotAttr = this.form.value;
    this.pilotService.savePilot(pilotAttr).subscribe(
      () => this.router.navigate(['../..'], { relativeTo: this.route}),
      () => alert('Nie udało sie zapisac pilota!')
    );
  }
}
