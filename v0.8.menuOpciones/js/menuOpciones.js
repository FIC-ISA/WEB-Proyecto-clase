//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.8.menuOpciones
//////////////////////////////////////////////////////////////////////////////////////////////////////

import { insertaEnDOMContenidoInicial, suprimeDelDOMContenidoInicial } from "./contenidoInicial.js";
import { insertaEnDOMListaPacientes, suprimeDelDOMListaPacientes } from "./ListaPacientes.js";
import { suprimeDelDOMDatosPaciente } from "./datosPaciente.js";
import { insertaEnDOMListaPruebas, suprimeDelDOMListaPruebas } from "./ListaPruebas.js";

export { insertaEnDOMOpcionesMenu, actualizaVistaActual };

// Cada opción en listaOpcionesMenú tendrá asociado un nodo LI en el DOM
// Los nodos LI dispondran de un atributo id
// Se le añade el prefijo opcion para que coincida con el valor del atributo id del Nodo LI en el DOM
let vistaActual = "contenidoInicial";

// Funciones para la gestión del DOM

function insertaEnDOMOpcionesMenu() {
  insertaContenedorOpcionesMenu();
  insertaOpcionesMenu();

  const menuNode = document.getElementById("opcionesMenu");
  menuNode.addEventListener("click", (e) => respuestaPulsarEnMenu(e));
}

// Funciones auxiliares de gestion del DOM

function insertaContenedorOpcionesMenu() {
  const opcionesMenuNode = document.createElement("ul");
  opcionesMenuNode.id = "opcionesMenu";
  const menuNode = document.getElementById("menu");
  menuNode.appendChild(opcionesMenuNode);
}

function insertaOpcionesMenu() {
  const opcionesHTML =
    '<li data-vista="contenidoInicial">Inicio</li>' +
    '<li data-vista="listaPacientes">Pacientes</li>' +
    '<li data-vista="listaPruebas">Pruebas</li>';

  /////////////////////////////////////////////////////////////
  //     Alternativa mejor haciendo uso combinado de map y join
  // const listaOpcionesMenu = ["Inicio", "Pacientes", "Pruebas"];
  // const vistaOpciones = {
  //   Inicio: "contenidoIncial",
  //   Pacientes: "listaPacientes",
  //   Pruebas: "listaPruebas",
  // };
  // const arrayOpcionesHTML = listaOpcionesMenu.map((opcion) => {
  //   return `<li data-vista="${vistaOpciones[opcion]}">${opcion}</li>`;
  // });
  // const opcionesHTML = arrayOpcionesHTML.join("");

  const opcionesMenuNode = document.getElementById("opcionesMenu");
  opcionesMenuNode.innerHTML = opcionesHTML;
}

// Función de respuesta al evento de Pulsar en las opciones del menú
//

function respuestaPulsarEnMenu(e) {
  const vistaOpcionPulsada = e.target.dataset.vista;

  if (vistaActual == vistaOpcionPulsada) return;

  eliminaDelDOMVistaActual();
  actualizaVistaActual(vistaOpcionPulsada);
  switch (vistaActual) {
    case "contenidoInicial":
      insertaEnDOMContenidoInicial();
      break;
    case "listaPacientes":
      insertaEnDOMListaPacientes();
      break;
    case "listaPruebas":
      insertaEnDOMListaPruebas();
      break;
  }
}

// Funcion auxiliar para gestionar el evento
/////
///////////

function eliminaDelDOMVistaActual() {
  switch (vistaActual) {
    case "contenidoInicial":
      suprimeDelDOMContenidoInicial();
      break;
    case "listaPacientes":
      suprimeDelDOMListaPacientes();
      break;
    case "listaPruebas":
      suprimeDelDOMListaPruebas();
      break;
    case "datosPaciente":
      suprimeDelDOMDatosPaciente();
      break;
  }
}

function actualizaVistaActual(vista) {
  vistaActual = vista;
}
