//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.8.menuOpciones
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Identificación del proyecto
const nombreDeGrupoNode = document.getElementById("nombreDeGrupo");
nombreDeGrupoNode.innerText = "Sevilla";

const versionNode = document.getElementById("version");
versionNode.innerText = "v0.8.menuOpciones";

import { cargaDatosPacientes } from "./js/modelo/datos.js";
import { insertaEnDOMOpcionesMenu } from "./js/menuOpciones.js";
import { insertaEnDOMContenidoInicial } from "./js/ContenidoInicial.js";

//////////////////////////////////////////////////////////////////////////////////////////////////////

// Función de comienzo

function comienzo() {
  cargaDatosPacientes();
  insertaEnDOMOpcionesMenu();
  insertaEnDOMContenidoInicial();
}

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Programa principal

comienzo();
