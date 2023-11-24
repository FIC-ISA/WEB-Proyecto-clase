//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.11-altasPacientes

export { insertaEnDOMListaPacientes, suprimeDelDOMListaPacientes };

import { recuperaTodosLosPacientes, recuperaNombrePaciente } from "./modelo/modeloPacientes.js";
import { actualizaVistaActual } from "./menuOpciones.js";
import { insertaEnDOMDatosPaciente } from "./datosPaciente.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones para la gestión del DOM (Pacientes)

function insertaEnDOMListaPacientes() {
  insertaContenedorListaPacientes();
  insertaPacientesEnContenedor();

  insertarBotonNuevoPaciente();

  // Añade un evento para que al pulsar en un paciente se muestren sus datos
  // Para simplificar la gestión, se crea un sólo evento que se asocia a toda la lista
  // La alternativa sería asociar un evento para cada elemento de la lista
  const listaPacientesNode = document.getElementById("listaPacientes");
  listaPacientesNode.addEventListener("click", (e) => respuestaPulsarEnPaciente(e));

  const botonNuevoPacienteNode = document.getElementById("botonNuevoPaciente");
  botonNuevoPacienteNode.addEventListener("click", (e) => respuestaPulsarBotonNuevoPaciente(e));
}

function suprimeDelDOMListaPacientes() {
  // Elimina el gestor de evento asociados al nodo
  const listaPacientesNode = document.getElementById("listaPacientes");
  listaPacientesNode.removeEventListener("click", (e) => respuestaPulsarEnPaciente(e));

  const botonNuevoPacienteNode = document.getElementById("botonNuevoPaciente");
  botonNuevoPacienteNode.removeEventListener("click", (e) => respuestaPulsarBotonNuevoPaciente(e));

  // Elimina el nodo del DOM
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones auxiliares para la gestión del DOM (Pacientes)

function insertaContenedorListaPacientes() {
  // Crea el nodo UL contenedor añadiendole el atributos id para poder acceder al contenedor
  const node = document.createElement("ul");
  node.id = "listaPacientes";
  // Añade una clase al nodo para darle estilo
  node.classList = "listaPacientes";
  // Añade el nodo al cuerpo del DOM
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.appendChild(node);
}

function insertaPacientesEnContenedor() {
  // Añade un nodo para cada paciente dentro del contenedor listaPacientes
  const listaPacientesNode = document.getElementById("listaPacientes");

  const pacientes = recuperaTodosLosPacientes();
  pacientes.forEach((p) => {
    const pacienteNode = creaPacienteNode(p);
    listaPacientesNode.appendChild(pacienteNode);
  });
}

function insertarBotonNuevoPaciente() {
  const cuerpoNode = document.getElementById("cuerpo");
  const node = document.createElement("button");
  node.innerText = "Nuevo Paciente";
  node.id = "botonNuevoPaciente";
  node.classList = "botonNuevoPaciente";
  cuerpoNode.appendChild(node);
}

// Funciones auxiliares para la gestión del DOM
function creaPacienteNode(p) {
  // Crea un nodo LI para cada paciente añadiendo
  // un atributo id para poder identificar el paciente cuyos datos se muestran
  // y un atributo data-item para poder identificar en el DOM a todos los items pacientes
  // con idea de gestionar el evento de pulsar en el paciente
  const node = document.createElement("li");
  node.id = p;
  node.dataset.item = "paciente";
  // Añade una clase para dar estilo a cada item paciente
  node.classList = "itemPaciente";

  node.innerText = recuperaNombrePaciente(p);

  return node;
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
///   Funciones gestoras de eventos

function respuestaPulsarEnPaciente(e) {
  // Solo se realiza la acción si se ha pulsado en un nodo con clase paciente
  if (e.target.dataset.item == "paciente") {
    suprimeDelDOMListaPacientes();
    insertaEnDOMDatosPaciente(e.target.id, "consulta");
  }
}

function respuestaPulsarBotonNuevoPaciente() {
  suprimeDelDOMListaPacientes();
  actualizaVistaActual("datosPaciente");
  insertaEnDOMDatosPaciente("", "alta");
}
