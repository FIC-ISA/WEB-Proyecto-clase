//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.10-actualizacionPacientes
//////////////////////////////////////////////////////////////////////////////////////////////////////

export { insertaEnDOMContenidoInicial, suprimeDelDOMContenidoInicial };

const contenidoHTML = `
<div id="contenidoInicial" class="contenidoInicial">
<h1>Bienvenido a la página inicial</h1>
<img class="imagenGrupo" src="./img/500x200dummyimage.png" alt="Imagen de Grupo FIC" />
<p>Componentes del grupo</p>
<ul class="listaComponentes">
  <li class="itemComponente">
    <img src="./img/150x150.componente01.avatarMaker.png" alt="Avatar componente 1" /> UVUS Componente
    1
  </li>
  <li class="itemComponente">
    <img src="./img/150x150.componente02.avatarMaker.png" alt="Avatar componente 1" /> UVUS Componente
    2
  </li>
  <li class="itemComponente">
    <img src="./img/150x150.componente03.avatarMaker.png" alt="Avatar componente 1" /> UVUS Componente
    3
  </li>
</ul>
</div>
`;

function insertaEnDOMContenidoInicial() {
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = contenidoHTML;
}

function suprimeDelDOMContenidoInicial() {
  const cuerpoNode = document.getElementById("cuerpo");
  cuerpoNode.innerHTML = "";
}
