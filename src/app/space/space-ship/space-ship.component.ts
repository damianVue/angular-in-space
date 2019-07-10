import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-space-ship',
  templateUrl: './space-ship.component.html',
  styleUrls: ['./space-ship.component.scss']
})
export class SpaceShipComponent implements OnInit {
  spaceShip = {
    modelName: 'Falcon',
    imageUrl: 'assets/space-1.png',
    health: 100,
    activeShields: true,
    activeWeapons: false,
  };

  constructor() { }

  ngOnInit() {
  }

}
