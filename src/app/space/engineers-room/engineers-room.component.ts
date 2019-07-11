import {Component, EventEmitter, OnInit, Output} from '@angular/core';
import {SpaceShipType} from '../space-ship-type.enum';
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {OrderFormValue} from '../order-form-value';
import {SpaceShip} from '../space-ship';
import {SpaceShipService} from '../space-ship.service';
import {map} from 'rxjs/operators';

interface ShipType {
  label: string;
  value: SpaceShipType;
}

@Component({
  selector: 'app-engineers-room',
  templateUrl: './engineers-room.component.html',
  styleUrls: ['./engineers-room.component.scss']
})
export class EngineersRoomComponent implements OnInit {
  shipsCount = this.spaceShipService.hangarShips.pipe(
    map((ships) => ships.length)
  );

  spaceShipTypes: ShipType[] = [
    {label: 'Mysliwiec', value: SpaceShipType.Fighter},
    {label: 'Bomber', value: SpaceShipType.Bomber}
  ];

  form: FormGroup;
  private isProducing = false;

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
    this.form = new FormGroup({
      shipType: new FormControl(SpaceShipType.Fighter, {
        validators: [Validators.required]
      }),
      shipCount: new FormControl(1, {
        validators: [Validators.required, Validators.min(1), Validators.max(5)]
      })
    });
  }

  orderSpaceShips(formValue: OrderFormValue) {
    this.isProducing = true;
    this.spaceShipService.produceShips(formValue)
      .subscribe({
        complete: () => this.isProducing = false
      });
  }

}
