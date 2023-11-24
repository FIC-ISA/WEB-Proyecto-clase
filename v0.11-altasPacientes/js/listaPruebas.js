//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version vv0.11-altasPacientes
//////////////////////////////////////////////////////////////////////////////////////////////////////

export { insertaEnDOMListaPruebas, suprimeDelDOMListaPruebas };

function insertaEnDOMListaPruebas() {
  insertaContenedorListaPruebas();
}

function suprimeDelDOMListaPruebas() {
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}

// Funciones auxiliares para la gestión del DOM

function insertaContenedorListaPruebas() {
  const listaPruebasNode = document.createElement("div");
  listaPruebasNode.id = "listaPruebas";
  listaPruebasNode.classList = "listaPruebas";
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.appendChild(listaPruebasNode);

  listaPruebasNode.innerHTML = "Listado de Pruebas";
}