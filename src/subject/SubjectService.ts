import { Subject } from "./Subject";
import { subjects } from "../database";
export class SubjectService {
  save(subject: Subject) {
    subjects.push(subject);
  }
  list() {
    return subjects;
  }
  getById(id: number) {
    for (const subject of subjects) {
      if (subject.id == id) {
        return subject;
      }
    }
    throw new Error("Não encontrou a Disciplina");
  }
}
