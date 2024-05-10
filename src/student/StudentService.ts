import { Student } from "./Student";
import { students } from "../database";

export class StudentService {
  saveStudent(student: Student) {
    students.push(student);
  }
  listStudent() {
    return students;
  }
  getById(id: number) {
    for (const student of students) {
      if (student.id == id) {
        return student;
      }
    }
    throw new Error("Estudante não Encontrado");
  }
}
