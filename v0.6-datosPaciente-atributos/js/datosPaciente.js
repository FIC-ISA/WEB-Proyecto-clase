//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// v0.6-datosPaciente-atributos
//////////////////////////////////////////////////////////////////////////////////////////////////////

import { recuperaNombrePaciente, recuperaAtributoPaciente } from "./modelo/modeloPacientes.js";

export { insertaEnDOMDatosPaciente };

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones para la gestión del DOM (datos del Paciente)

function insertaEnDOMDatosPaciente(idPaciente) {
  insertaContenedorDatosPaciente();

  insertaNombrePacienteEnContenedor();
  insertaPacienteActivoEnContenedor();
  insertaGeneroPacienteEnContenedor();
  insertaBirthdatePacienteEnContenedor();

  actualizaValoresContendor(idPaciente);
}

///////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones auxiliares para la gestión del DOM (Pacientes)///

function insertaContenedorDatosPaciente() {
  // Los datos del paciente se reunen en un nodo contenedor DIV datosPaciente
  // al que se le asocia unid para poder acceder al mismo
  // El contenedor datosPaciente se incorpora al cuerpo del documento
  const datosPacienteNode = document.createElement("div");
  datosPacienteNode.id = "datosPaciente";
  const cuerpoNode = document.getElementById("cuerpo");
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

function insertaPacienteActivoEnContenedor() {
  // El estado activo del registro del paciente se incorpora dentro de un elemento DIV
  // que incluyen los elementos label e input

  const nodeDiv = document.createElement("div");
  const datosPacienteNode = document.getElementById("datosPaciente");
  datosPacienteNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Activo: ", "active");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "active";
  inputNode.type = "checkbox";
  nodeDiv.appendChild(inputNode);
}

function insertaGeneroPacienteEnContenedor() {
  // El género del paciente se incorpora dentro de un elemento DIV
  // que incluyen los elementos label e input

  const nodeDiv = document.createElement("div");
  const datosPacienteNode = document.getElementById("datosPaciente");
  datosPacienteNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Género: ", "gender");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo select al nodo DIV
  const selectNode = document.createElement("select");
  selectNode.id = "gender";
  nodeDiv.appendChild(selectNode);

  const optionsHTML = `
     <option id="maleGender"    value="male">male</option>
     <option id="femaleGender"  value="female">female</option>
     <option id="otherGender"   value="other">other</option>
     <option id="unknownGender" value="unknown" selected>unknown</option>
  `;
  selectNode.innerHTML = optionsHTML;
}

function insertaBirthdatePacienteEnContenedor() {
  // El cumpleaños del paciente se incorpora dentro de un elemento DIV
  // que incluyen los elementos label e input

  const nodeDiv = document.createElement("div");
  const datosPacienteNode = document.getElementById("datosPaciente");
  datosPacienteNode.appendChild(nodeDiv);

  // Crea e incorpora el nodo etiqueta al nodo DIV
  const labelNode = creaLabelNode("Cumpleaños: ", "birthdate");
  nodeDiv.appendChild(labelNode);

  // Crea e incorpora el nodo entrada al nodo DIV
  const inputNode = document.createElement("input");
  inputNode.id = "birthdate";
  inputNode.type = "date";
  nodeDiv.appendChild(inputNode);
}

///////////////////////////////////////////////////////////////////////////////////////////////////////


function creaLabelNode(texto, valueFor) {
  const labelNode = document.createElement("label");
  labelNode.innerText = texto;
  labelNode.setAttribute("for", valueFor);

  return labelNode;
}

function actualizaValoresContendor(idPaciente) {
  const nombreNode = document.getElementById("name");
  nombreNode.value = recuperaNombrePaciente(idPaciente);

  const activeNode = document.getElementById("active");
  activeNode.checked = recuperaAtributoPaciente(idPaciente, "active");

  const generoPaciente = recuperaAtributoPaciente(idPaciente, "gender");
  const selector = generoPaciente + "Gender";
  const genderNode = document.getElementById(selector);

  genderNode.selected = "true";

  const birthdateNode = document.getElementById("birthdate");
  birthdateNode.value = recuperaAtributoPaciente(idPaciente, "birthdate");

}

