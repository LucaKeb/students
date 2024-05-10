import { Student } from "../student/Student";
import { Subject } from "../subject/Subject";

export class Registry {
  constructor(public student: Student, public subjects: Subject[]) {}
}
