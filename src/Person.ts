import { Address } from "./Address";
export abstract class Person {
  readonly id: number;
  private name: string;
  private email!: string;
  yearBirth!: number;
  address!: Address;

  constructor(name: string) {
    this.name = name;
    this.id = Math.floor(Math.random() * 50) + 5001;
  }

  getAge() {
    return new Date().getFullYear() - this.yearBirth;
  }

  getName() {
    return this.name;
  }
  getEmail() {
    return this.email;
  }
  setEmail(email: string) {
    if (!email.includes("@")) {
      throw new Error("Email Inválido");
    }
    this.email = email;
  }
}
