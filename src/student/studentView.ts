import { Course } from "../course/Course";
import { Student } from "./Student";
import { StudentService } from "./StudentService";
import { CourseService } from "../course/CourseService";

const iptName = document.getElementById("iptName") as HTMLInputElement;
const btnSave = document.getElementById("btnSave") as HTMLButtonElement;
const btnList = document.getElementById("btnList") as HTMLButtonElement;
const iptEmail = document.getElementById("iptEmail") as HTMLInputElement;
const tblStudent = document.getElementById("tblStudent") as HTMLTableElement;
const frmStudent = document.getElementById("frmStudent") as HTMLFormElement;
const iptYearBirth = document.getElementById(
  "iptYearBirth"
) as HTMLInputElement;

const selectCourse = document.getElementById(
  "selectCourse"
) as HTMLSelectElement;

let student: Student;
let course: Course;
let studentService = new StudentService();
const courseService = new CourseService();

function saveStudent(event: Event) {
  event.preventDefault();
  try {
    const course = courseService.getById(Number(selectCourse.value));
    //  course = new Course(selectCourse.options[selectCourse.selectedIndex].text);
    student = new Student(iptName.value, course);
    student.setEmail(iptEmail.value);
    student.yearBirth = Number(iptYearBirth.value);
    studentService.saveStudent(student);
    frmStudent.reset();
  } catch (error) {
    alert(error);
  }
  listStudent();
}
function listStudent() {
  tblStudent.innerHTML = "";
  for (student of studentService.listStudent()) {
    tblStudent.innerHTML =
      tblStudent.innerHTML +
      ` <tr>
    <td id="">${student.getName()}</td>
    <td>${student.getEmail()}</td>
    <td>${student.yearBirth}</td>
    <td>${student.getAge()}</td>
    <td>${student.course.name} </td>
  </tr> `;
  }
}

function listCourse() {
  for (const course of courseService.list()) {
    selectCourse.innerHTML =
      selectCourse.innerHTML +
      `<option value=${course.id}> ${course.name} </option> `;
  }
}
listCourse();

frmStudent.addEventListener("submit", saveStudent);
//btnSave.addEventListener("click", saveStudent);
btnList.addEventListener("click", listStudent);
