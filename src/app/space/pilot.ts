export class Pilot {
  static defaultImageUrl = '/assets/space-5.png';
  firstName: string;
  lastName: string;
  imageUrl: string;

  constructor(fullName: string, imageUrl: string = Pilot.defaultImageUrl) {
    this.fullName = fullName;
    this.imageUrl = imageUrl;
  }

  set fullName(fullName) {
    const tmp: string[] = fullName.split(' ');
    this.firstName = tmp[0];
    this.lastName = tmp[1];
  }

  get fullName() {
    return `${this.firstName} ${this.lastName}`;
  }
}
