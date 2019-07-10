import { Pilot } from './pilot';

export abstract class SpaceShip {
  modelName: string;
  imageUrl: string;
  health = 100;
  activeShields: boolean;
  activeWeapons: boolean;
  pilot: Pilot;

  constructor(modelName: string, imageUrl: string, pilot: Pilot) {
    this.modelName = modelName;
    this.imageUrl = imageUrl;
    this.pilot = pilot;
  }
}
