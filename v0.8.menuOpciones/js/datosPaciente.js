//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.7.datosPaciente-botonVolver
//////////////////////////////////////////////////////////////////////////////////////////////////////

import { insertaEnDOMListaPacientes } from "./listaPacientes.js";
import { actualizaVistaActual } from "./menuOpciones.js";
import { recuperaNombrePaciente, recuperaAtributoPaciente } from "./modelo/modeloPacientes.js";

export { insertaEnDOMDatosPaciente, suprimeDelDOMDatosPaciente };

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones para la gestión del DOM (datos del Paciente)

function insertaEnDOMDatosPaciente(idPaciente) {
  actualizaVistaActual("datosPaciente");
  insertaContenedorDatosPaciente();

  insertaNombrePacienteEnContenedor();
  insertaPacienteActivoEnContenedor();
  insertaGeneroPacienteEnContenedor();
  insertaBotonVolverEnContenedor();

  actualizaValoresContenedor(idPaciente);

  // Habilita la gestión del evento pulsar en el boton Volver
  const botonVolverNode = document.getElementById("botonVolver");
  botonVolverNode.addEventListener("click", respuestaPulsarBotonVolver);
}

function suprimeDelDOMDatosPaciente() {
  const botonVolverNode = document.getElementById("botonVolver");
  botonVolverNode.removeEventListener("click", respuestaPulsarBotonVolver);

  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
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

function insertaBotonVolverEnContenedor() {
  const botonNode = document.createElement("button");
  const datosPacienteNode = document.getElementById("datosPaciente");
  datosPacienteNode.appendChild(botonNode);

  botonNode.innerText = "Volver";
  botonNode.id = "botonVolver";
}

function creaLabelNode(texto, valueFor) {
  const labelNode = document.createElement("label");
  labelNode.innerText = texto;
  labelNode.setAttribute("for", valueFor);

  return labelNode;
}

function actualizaValoresContenedor(idPaciente) {
  const nombreNode = document.getElementById("name");
  nombreNode.value = recuperaNombrePaciente(idPaciente);

  const activeNode = document.getElementById("active");
  activeNode.checked = recuperaAtributoPaciente(idPaciente, "active");

  const generoPaciente = recuperaAtributoPaciente(idPaciente, "gender");
  const selector = generoPaciente + "Gender";
  const genderNode = document.getElementById(selector);

  genderNode.selected = "true";
}

// Funciones de respuesta a los eventos

function respuestaPulsarBotonVolver() {
  suprimeDelDOMDatosPaciente();
  actualizaVistaActual("listaPacientes");
  insertaEnDOMListaPacientes();
}
