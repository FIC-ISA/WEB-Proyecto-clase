//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.2-listaPacientes-name
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Identificación del proyecto
const nombreDeGrupoNode = document.getElementById("nombreDeGrupo");
nombreDeGrupoNode.innerText = "Sevilla";

const versionNode = document.getElementById("version");
versionNode.innerText = "v0.2-listaPacientes-name";

//////////////////////////////////////////////////////////////////////////
///    Carga inicial de datos de pacientes

const arrayPacientes = ["pacienteFIC001", "pacienteFIC002"];

const pacienteFIC001 = {
  name: "José",
  gender: "male",
  birthdate: "1963-02-05"
};

const pacienteFIC002 = {
  name: "María",
  gender: "female",
  birthdate: "1969-02-05"
};

localStorage.clear();
localStorage.setItem("pacientes", JSON.stringify(arrayPacientes));
arrayPacientes.forEach((p) => {
  localStorage.setItem(p, JSON.stringify(eval(p)));
});

//////////////////////////////////////////////////////////////////////////
// Composición de la página web

const pacientesItem = JSON.parse(localStorage.getItem("pacientes"));
const pacientes = pacientesItem ?? [];

// Añado un elemento ul al cuerpo con id listaPacientes
const cuerpoNode = document.getElementById("cuerpo");
const nodeUL = document.createElement("ul");
nodeUL.id = "listaPacientes";
cuerpoNode.appendChild(nodeUL);

// Relleno el elemento ul con items (uno para cada paciente)
const listaPacientesNode = document.getElementById("listaPacientes");
pacientes.forEach((p) => {
  const nodeLI = document.createElement("li");

  const pacienteItem = JSON.parse(localStorage.getItem(p));
  const paciente = pacienteItem ?? {};
  const nombrePaciente = paciente.name ?? "<<Unknown>>";
  const cumpleanyosPaciente = paciente.birthdate ?? "<<Unknown>>";

  nodeLI.innerText = "Nombre: " + nombrePaciente + ", Cumpleaños:  " + cumpleanyosPaciente;
  listaPacientesNode.appendChild(nodeLI);
});


