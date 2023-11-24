//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.7.datosPaciente-botonVolver
//////////////////////////////////////////////////////////////////////////////////////////////////////

import { insertaEnDOMListaPacientes } from "./listaPacientes.js";
import { actualizaVistaActual } from "./menuOpciones.js";
import {
  recuperaNombrePaciente,
  recuperaAtributoPaciente,
  actualizaPaciente,
  altaPaciente,
} from "./modelo/modeloPacientes.js";

export { insertaEnDOMDatosPaciente, suprimeDelDOMDatosPaciente };

let tipoInteraccion = "";
let idPaciente = "";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones para la gestión del DOM (datos del Paciente)

function insertaEnDOMDatosPaciente(id, tipo) {
  tipoInteraccion = tipo;
  idPaciente = id;
  actualizaVistaActual("datosPaciente");
  insertaContenedorDatosPaciente();

  insertaNombrePacienteEnContenedor();
  insertaPacienteActivoEnContenedor();
  insertaGeneroPacienteEnContenedor();
  insertaBotonesEnContenedor();

  if (tipoInteraccion == "consulta") {
    actualizaValoresContenedor(idPaciente);
  }

  // Habilita la gestión de los eventos pulsar en el boton Volver y Guardar
  const botonVolverNode = document.getElementById("botonVolver");
  botonVolverNode.addEventListener("click", respuestaPulsarBotonVolver);
  const botonGuardarNode = document.getElementById("botonGuardar");
  botonGuardarNode.addEventListener("click", respuestaPulsarBotonGuardar);
}

function suprimeDelDOMDatosPaciente() {
  const botonVolverNode = document.getElementById("botonVolver");
  botonVolverNode.removeEventListener("click", respuestaPulsarBotonVolver);

  const botonGuardarNode = document.getElementById("botonGuardar");
  botonGuardarNode.removeEventListener("click", respuestaPulsarBotonGuardar);

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
  datosPacienteNode.classList = "datosPaciente";
  datosPacienteNode.dataset.paciente = idPaciente;
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

function insertaBotonesEnContenedor() {
  // Se crea un contenedor donde se incluyen todos los botones
  const divNode = document.createElement("div");
  const datosPacienteNode = document.getElementById("datosPaciente");
  datosPacienteNode.appendChild(divNode);
  // Añade atributos id y class para el acceso y los estilos
  divNode.id = "botones";
  divNode.classList = "botones";

  const botonVolverNode = creaBotonNode("Volver", "botonVolver");
  divNode.appendChild(botonVolverNode);

  const botonGuardarNode = creaBotonNode("Guardar", "botonGuardar");
  divNode.appendChild(botonGuardarNode);
}

function creaBotonNode(texto, valorId) {
  const botonNode = document.createElement("button");
  botonNode.innerText = texto;
  botonNode.id = valorId;
  botonNode.classList = "boton";
  return botonNode;
}

function creaLabelNode(texto, valueFor) {
  const labelNode = document.createElement("label");
  labelNode.innerText = texto;
  labelNode.setAttribute("for", valueFor);

  return labelNode;
}

function actualizaValoresContenedor() {
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

function respuestaPulsarBotonGuardar() {
  const datosPaciente = recolectaDatosPaciente();

  switch (tipoInteraccion) {
    case "consulta":
      const datosPacienteNode = document.getElementById("datosPaciente");
      const idPaciente = datosPacienteNode.dataset.paciente;

      actualizaPaciente(idPaciente, datosPaciente);
      break;
    case "alta":
      altaPaciente(datosPaciente);
      break;
  }

  respuestaPulsarBotonVolver();
}

function recolectaDatosPaciente() {
  const datosPaciente = {};

  const nameNode = document.getElementById("name");
  datosPaciente.name = [{ text: nameNode.value }];

  const genderNode = document.getElementById("gender");
  datosPaciente.gender = genderNode.value;

  const activeNode = document.getElementById("active");
  datosPaciente.active = activeNode.checked;

  return datosPaciente;
}
