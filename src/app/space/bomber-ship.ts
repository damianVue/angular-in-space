import { SpaceShip } from './space-ship';
import { Pilot } from './pilot';

export class BomberShip extends SpaceShip {
  constructor(pilot?: Pilot) {
    super('Bombi', '/assets/space-2.png', pilot);
    this.activeShields = true;
  }
}
