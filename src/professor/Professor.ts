import { Person } from "../Person";
export class Professor extends Person {
  numberContract!: number;
  private id: number;

  constructor(name: string) {
    super(name);
    this.id = Math.floor(Math.random() * 50) + 5001;
  }

  getId() {
    return this.id;
  }
}
