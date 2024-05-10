import { StudentService } from "../student/StudentService";
import { Subject } from "../subject/Subject";
import { SubjectService } from "../subject/SubjectService";
import { Registry } from "./Registry";
import { RegistryService } from "./RegistryService";
const selectStudent = document.getElementById(
  "selectStudent"
) as HTMLSelectElement;

const selectSubject = document.getElementById(
  "selectSubject"
) as HTMLSelectElement;

const frmRegistry = document.getElementById("frmRegistry") as HTMLFormElement;
const subjectService = new SubjectService();

function save(event: Event) {
  event.preventDefault();
  try {
    const studentService = new StudentService();
    const registryService = new RegistryService();
    const student = studentService.getById(
      Number(frmRegistry.selectStudent.value)
    );
    const subjects: Subject[] = [];
    const formData = new FormData(frmRegistry);
    for (let id of formData.getAll("subjects")) {
      const subject = subjectService.getById(Number(id));
      subjects.push(subject);
    }
    const registry = new Registry(student, subjects);
    registryService.save(registry);
  } catch (error) {
    alert(error);
  }
}
function listSubject() {
  for (const subject of subjectService.list()) {
    selectSubject.innerHTML =
      selectSubject.innerHTML +
      `
    <option value=${subject.id}> ${subject.name} </option>
    `;
  }
}
listSubject();

function listStudent() {
  const studentService = new StudentService();
  for (let student of studentService.listStudent()) {
    selectStudent.innerHTML =
      selectStudent.innerHTML +
      `<option value=${student.id}> ${student.getName()} - ${
        student.course.name
      } </option>
`;
  }
}
listStudent();

frmRegistry.addEventListener("submit", save);
