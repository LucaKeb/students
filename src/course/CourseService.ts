import { Course } from "./Course";
import { courses } from "../database";
export class CourseService {
  list() {
    return courses;
  }
  save(course: Course) {
    courses.push(course);
  }
  getById(id: number) {
    for (const course of courses) {
      if (course.id == id) {
        return course;
      }
    }
    throw new Error("Curso não Encontrado");
  }
}
