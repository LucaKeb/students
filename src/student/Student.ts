import { Person } from "../Person";
import { Course } from "../course/Course";

export class Student extends Person {
  course: Course;
  constructor(name: string, course: Course) {
    super(name);
    this.course = course;
  }
}
