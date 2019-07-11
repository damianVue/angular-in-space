import {Component, OnInit, ViewChild} from '@angular/core';
import { SpaceShip } from '../space-ship';
import { BomberShip } from '../bomber-ship';
import { FighterShip } from '../fighter-ship';
import { Pilot } from '../pilot';
import { PilotRoomComponent } from '../pilot-room/pilot-room.component';
import {SpaceShipService} from '../space-ship.service';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {
  selectedPilot: Pilot;
  spaceShips =  this.spaceShipService.hangarShips;

  @ViewChild(PilotRoomComponent, {static: false}) pilotRoom: PilotRoomComponent;

  constructor(private spaceShipService: SpaceShipService) { }

  ngOnInit() {
  }

  assignPilot(spaceShip: SpaceShip) {
    spaceShip.pilot = this.selectedPilot;
    this.pilotRoom.pilotLeave();
  }

  deassignPilot(spaceShip: SpaceShip) {
    this.pilotRoom.pilotReturn(spaceShip.pilot);
    spaceShip.pilot = null;
  }

}
