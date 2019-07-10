import { Component, OnInit } from '@angular/core';
import {BomberShip} from '../bomber-ship';
import {Pilot} from '../pilot';
import {FighterShip} from '../fighter-ship';

@Component({
  selector: 'app-pilot-room',
  templateUrl: './pilot-room.component.html',
  styleUrls: ['./pilot-room.component.scss']
})
export class PilotRoomComponent implements OnInit {
  pilots: Pilot[] = [];
  selectedPilot: Pilot = null;

  constructor() { }

  ngOnInit() {
    this.pilots.push(new Pilot('Pepe Classic', '/assets/pilot-1.jpg'));
    this.pilots.push(new Pilot('Chomik Wino', '/assets/pilot-2.png'));
    this.pilots.push(new Pilot('Pepe Megusta', '/assets/pilot-3.jpg'));
  }

  select(pilot: Pilot): void {
    this.selectedPilot = pilot;
  }

}
