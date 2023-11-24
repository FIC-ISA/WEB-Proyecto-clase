//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.5-datosPaciente
//////////////////////////////////////////////////////////////////////////////////////////////////////

import { recuperaNombrePaciente } from "./modelo/modeloPacientes.js";

export { insertaEnDOMDatosPaciente };

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones para la gestión del DOM (datos del Paciente)

function insertaEnDOMDatosPaciente(idPaciente) {
  insertaContenedorDatosPaciente();
  insertaNombrePacienteEnContenedor();
  actualizaValoresContendor(idPaciente);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones auxiliares para la gestión del DOM (Pacientes)///

function insertaContenedorDatosPaciente() {
  // Los datos del paciente se reunen en un nodo contenedor DIV datosPaciente
  // al que se le asocia un id para poder acceder al mismo
  // El contenedor datosPaciente se incorpora al cuerpo del documento
  const datosPacienteNode = document.createElement("div");
  const cuerpoNode = document.getElementById("cuerpo");
  datosPacienteNode.id = "datosPaciente";

  cuerpoNode.appendChild(datosPacienteNode);
}

function insertaNombrePacienteEnContenedor() {
  // El nombre del paciente se incorpora dentro de un elemento DIV
  // que incluyen los elementos label e input

  const nodeDiv = document.createElement("div");
  const datosPacienteNode = document.getElementById("datosPaciente");
  datosPacienteNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Nombre: ", "name");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "name";
  inputNode.type = "text";
  nodeDiv.appendChild(inputNode);
}

function creaLabelNode(texto, valueFor) {
  const labelNode = document.createElement("label");
  labelNode.innerText = texto;
  labelNode.setAttribute("for", valueFor);

  return labelNode;
}

function actualizaValoresContendor(idPaciente) {
  const nombreNode = document.getElementById("name");
  nombreNode.value = recuperaNombrePaciente(idPaciente);
}
