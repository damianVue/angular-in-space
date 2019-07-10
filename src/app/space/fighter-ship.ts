import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class FighterShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Figti', '/assets/space-3.png', pilot);
    this.activeWeapons = true;
  }
}
