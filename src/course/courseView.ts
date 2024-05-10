import { Course } from "./Course";
import { CourseService } from "./CourseService";

const frmCourse = document.getElementById("frmCourse") as HTMLFormElement;
const tblCourse = document.getElementById("tblCourse") as HTMLTableRowElement;

const courseService = new CourseService();
let course: Course;
function save(event: Event) {
  event.preventDefault();
  const course = new Course(frmCourse.iptName.value);
  courseService.save(course);
  list();
}
function list() {
  tblCourse.innerHTML = "";
  for (course of courseService.list()) {
    tblCourse.innerHTML =
      tblCourse.innerHTML + `  <tr> <td> ${course.name} </td> </tr>`;
  }
}

frmCourse.addEventListener("submit", save);
