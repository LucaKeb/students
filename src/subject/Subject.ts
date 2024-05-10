import { Course } from "../course/Course";
export class Subject {
  readonly id: number;
  constructor(public name: string, public course: Course) {
    this.name = name;
    this.course = course;
    this.id = Math.floor(Math.random() * 5000);
  }
}
