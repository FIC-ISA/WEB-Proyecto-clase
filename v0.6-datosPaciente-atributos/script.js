//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// v0.6-datosPaciente-atributos
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Identificación del proyecto
const nombreDeGrupoNode = document.getElementById("nombreDeGrupo");
nombreDeGrupoNode.innerText = "Sevilla";

const versionNode = document.getElementById("version");
versionNode.innerText = "v0.6-datosPaciente-atributos";

import { cargaDatosPacientes } from "./js/modelo/datos.js";
import { insertaEnDOMListaPacientes } from "./js/listaPacientes.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Función de comienzo

function comienzo() {
  cargaDatosPacientes();
  insertaEnDOMListaPacientes();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Programa principal

comienzo();
