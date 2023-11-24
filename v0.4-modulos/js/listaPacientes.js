//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.4-modulos
//////////////////////////////////////////////////////////////////////////////////////////////////////

export { insertaEnDOMListaPacientes };

import { recuperaTodosLosPacientes, recuperaNombrePaciente } from "./modelo/modeloPacientes.js";

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

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones auxiliares para la gestión del DOM (Pacientes)

function insertaPaciente(p) {
  const listaPacientesNode = document.getElementById("listaPacientes");
  const node = document.createElement("li");
  node.innerText = recuperaNombrePaciente(p);
  listaPacientesNode.appendChild(node);
}
