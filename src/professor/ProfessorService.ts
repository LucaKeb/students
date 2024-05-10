import { professors } from "../database";
import { Professor } from "./Professor";
export class ProfessorService {
  saveProfessor(professor: Professor) {
    console.log(professor)
    professors.push(professor);
  }
  listProfessor() {
    return professors;
  }
  deleteProfessor(id: number) {
    for (const professor of professors) {
      if (professor.getId() == id) {
        const index = professors.indexOf(professor);
        professors.splice(index, 1);
        return;
      }
    }
  }
}
