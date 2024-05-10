export class Course {
  id: number;
  name: string;

  constructor(name: string) {
    this.id = Math.floor(Math.random() * 5000);
    this.name = name;
  }
}
