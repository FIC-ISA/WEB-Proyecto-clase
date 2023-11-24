//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.8.menuOpciones
//////////////////////////////////////////////////////////////////////////////////////////////////////

export { insertaEnDOMListaPruebas, suprimeDelDOMListaPruebas };

function insertaEnDOMListaPruebas() {
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "Listado de Pruebas";
}

function suprimeDelDOMListaPruebas() {
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}
