import { Address } from "../Address";
import { Professor } from "./Professor";
import { ProfessorService } from "./ProfessorService";
const iptName = document.getElementById("iptName") as HTMLInputElement;
const iptEmail = document.getElementById("iptEmail") as HTMLInputElement;
const iptNumberContract = document.getElementById(
  "iptNumberContract"
) as HTMLInputElement;

const iptStreet = document.getElementById("iptStreet") as HTMLInputElement;
const iptNumber = document.getElementById("iptNumber") as HTMLInputElement;


const tblProfessor = document.getElementById(
  "tblProfessor"
) as HTMLTableElement;
const frmProfessor = document.getElementById("frmProfessor") as HTMLFormElement;
const iptYearBirth = document.getElementById(
  "iptYearBirth"
) as HTMLInputElement;

let professor: Professor;
let address: Address;
const professorService = new ProfessorService();
function saveProfessor(event: Event) {
  event.preventDefault();
  try {
    professor = new Professor(iptName.value);
    professor.setEmail(iptEmail.value);
    professor.yearBirth = Number(iptYearBirth.value);
    address = new Address(iptStreet.value, Number(iptNumber.value));
    professor.address = address;

    professor.numberContract = Number(iptNumberContract.value);
    professorService.saveProfessor(professor);
  } catch (error) {
    alert(error);
  }
  listProfessor();
}
function listProfessor() {
  tblProfessor.innerHTML = "";
  for (let professor of professorService.listProfessor()) {
    tblProfessor.innerHTML =
      tblProfessor.innerHTML +
      `<tr>
      <td>${professor.getId()}</td>
      <td>${professor.getName()}</td>
      <td>${professor.getEmail()}</td>
      <td>${professor.yearBirth}</td>
      <td>${professor.numberContract}</td>
      <td>${professor.address.street}</td>
      <td>${professor.address.number}</td>
      <td> <a href="#"id=${professor.getId()}> 🗑️ </a></td>
    </tr>`;
  }

  console.log(professorService.listProfessor());
}

function deleteProfessor(event: Event) {
  event.preventDefault();
  if (confirm("Tem certeza que deseja apagar?")) {
    const element = event.target as HTMLLinkElement;
    professorService.deleteProfessor(Number(element.id));
    listProfessor();
  }
}

frmProfessor.addEventListener("submit", saveProfessor);
tblProfessor.addEventListener("click", deleteProfessor);
