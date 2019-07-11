export interface PilotAttrs {
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;
}

export class Pilot implements  PilotAttrs {
  static defaultImageUrl = '/assets/space-5.png';
  id: number;
  firstName: string;
  lastName: string;
  imageUrl: string;

  constructor(attrs: Partial<PilotAttrs> = {}) {
    this.id = attrs.id;
    this.firstName = attrs.firstName;
    this.lastName = attrs.lastName;
    this.imageUrl = attrs.imageUrl;
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
