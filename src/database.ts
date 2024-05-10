import { Student } from "./student/Student";
import { Professor } from "./professor/Professor";
import { Course } from "./course/Course";
import { Subject } from "./subject/Subject";
import { Registry } from "./registry/Registry";

export const students: Student[] = [];

export const professors: Professor[] = [];

const bsi = new Course("BSI");
const tsi = new Course("TSI");
const licenciatura = new Course("Licenciatura");
export const courses: Course[] = [];
courses.push(bsi, tsi, licenciatura);

const poo = new Subject("POO", bsi);
const web = new Subject("Web", tsi);
export const subjects: Subject[] = [];
subjects.push(poo, web);

const student1 = new Student("Adair", tsi);
const student2 = new Student("Rohlig", bsi);
students.push(student1, student2);

export const registries: Registry[] = [];
