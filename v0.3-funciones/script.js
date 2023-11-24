//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.3-funciones
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Identificación del proyecto
const nombreDeGrupoNode = document.getElementById("nombreDeGrupo");
nombreDeGrupoNode.innerText = "Milan";

const versionNode = document.getElementById("version");
versionNode.innerText = "v0.3-funciones";

//////////////////////////////////////////////////////////////////////////
///    Carga inicial de datos de pacientes

const pacientes = ["pacienteFIC001", "pacienteFIC002"];

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

function cargaDatosPacientes() {
  localStorage.clear();
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
  pacientes.forEach((p) => {
    localStorage.setItem(p, JSON.stringify(eval(p)));
  });
}

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Función de comienzo

function comienzo() {
  cargaDatosPacientes();
  insertaEnDOMListaPacientes();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones para gestionar el modelo (Pacientes)

function recuperaTodosLosPacientes() {
  const pacientesItem = JSON.parse(localStorage.getItem("pacientes"));
  const pacientes = pacientesItem ?? [];
  return pacientes;
}

function recuperaPaciente(id) {
  const pacienteItem = JSON.parse(localStorage.getItem(id));
  return pacienteItem ?? {};
}

function recuperaNombrePaciente(id) {
  const paciente = recuperaPaciente(id);
  return paciente.name ?? "Unknown";
}

function recuperaCumpleanyosPaciente(id) {
  const paciente = recuperaPaciente(id);
  return paciente.birthdate ?? "Unknown";
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones para la gestión del DOM (Pacientes)

function insertaEnDOMListaPacientes() {
  // Añado un elemento ul al cuerpo con id listaPacientes
  const cuerpoNode = document.getElementById("cuerpo");
  const node = document.createElement("ul");
  node.id = "listaPacientes";
  cuerpoNode.appendChild(node);

  // Añado un elemento li en la listaPacientes para cada paciente

  const pacientes = recuperaTodosLosPacientes();
  pacientes.forEach((p) => {
    insertaPaciente(p);
  });

}

function insertaPaciente(p) {
  const listaPacientesNode = document.getElementById("listaPacientes");
  const node = document.createElement("li");
  node.innerText = recuperaNombrePaciente(p) + ": " + recuperaCumpleanyosPaciente(p);
  listaPacientesNode.appendChild(node);
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Programa principal

comienzo();
