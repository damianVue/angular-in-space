import { Component, OnInit } from '@angular/core';
import { SpaceShip } from '../space-ship';
import { BomberShip } from '../bomber-ship';
import { FighterShip } from '../fighter-ship';
import { Pilot } from '../pilot';

@Component({
  selector: 'app-hangar',
  templateUrl: './hangar.component.html',
  styleUrls: ['./hangar.component.scss']
})
export class HangarComponent implements OnInit {
  spaceShips: SpaceShip[] = [];

  constructor() { }

  ngOnInit() {
    this.spaceShips.push(new BomberShip(new Pilot('Pepe Classic', '/assets/pilot-1.jpg')));
    this.spaceShips.push(new BomberShip());
    this.spaceShips.push(new FighterShip(new Pilot('Pepe Megusta', '/assets/pilot-3.jpg')));
  }

}
