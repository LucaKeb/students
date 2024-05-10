import { CourseService } from "../course/CourseService";
import { SubjectService } from "./SubjectService";
import { Subject } from "./Subject";
const selectCourse = document.getElementById(
  "selectCourse"
) as HTMLSelectElement;
const frmSubject = document.getElementById("frmSubject") as HTMLFormElement;
const tblSubject = document.getElementById("tblSubject") as HTMLTableRowElement;
const courseService = new CourseService();
const subjectService = new SubjectService();

function save(event: Event) {
  event.preventDefault();
  try {
    const course = courseService.getById(Number(frmSubject.selectCourse.value));
    const subject = new Subject(frmSubject.iptName.value, course);
    subjectService.save(subject);
  } catch (error) {
    alert(error);
  }
  listSubject();
}

function listSubject() {
  tblSubject.innerHTML = "";
  for (const subject of subjectService.list()) {
    tblSubject.innerHTML =
      tblSubject.innerHTML +
      `<tr> <td> ${subject.name} </td> <td> ${subject.course.name}  </td> </tr>`;
  }
}
listSubject();

function listCourse() {
  for (const course of courseService.list()) {
    selectCourse.innerHTML =
      selectCourse.innerHTML +
      `<option value=${course.id}> ${course.name} </option> `;
  }
}
listCourse();

frmSubject.addEventListener("submit", save);
