//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.1-listaPacientes-id
//////////////////////////////////////////////////////////////////////////////////////////////////////

// Identificación del proyecto
const nombreDeGrupoNode = document.getElementById("nombreDeGrupo");
nombreDeGrupoNode.innerText = "Milán";

const versionNode = document.getElementById("version");
versionNode.innerText = "v0.1-listaPacientes-id";

//////////////////////////////////////////////////////////////////////////
///    Carga inicial de datos de pacientes

const arrayPacientes = ["pacienteFIC001", "pacienteFIC002", "pacienteFIC003"];
localStorage.clear();
localStorage.setItem("pacientes", JSON.stringify(arrayPacientes));

//////////////////////////////////////////////////////////////////////////
// Composición de la página web

const pacientesItem = JSON.parse(localStorage.getItem("pacientes"));
// Nullish coalescing operator
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Nullish_coalescing
// La asignación sería equivalente al siguiente código
//     if (pacientesItem) {
//         pacientes = pacientesItem
//     } else {
//         pacientes = [];
//     }
const pacientes = pacientesItem ?? [];

// Añado un elemento ul al cuerpo con id listaPacientes
const cuerpoNode = document.getElementById("cuerpo");
const nodeUL = document.createElement("ul");          //crea una constante a partit del elemento html "ul"
nodeUL.id = "listaPacientes";                         //asigna un id al elemento html "ul"
cuerpoNode.appendChild(nodeUL);

// Relleno el elemento ul con items (uno para cada paciente)
const listaPacientesNode = document.getElementById("listaPacientes");
pacientes.forEach((p) => {
  const nodeLI = document.createElement("li");
  nodeLI.innerText = p;
  listaPacientesNode.appendChild(nodeLI);
});



/*-------------------------------------------------------CLASE -----------------------------------

////////////////////////////////////////////////////////////////////
///    Carga inicial de datos de practitioner

const arrayPractitioner = ["milanPractitioner001", "milanPractitioner002", "milanPractitioner003"];
localStorage.setItem("practitioner", JSON.stringify(arrayPractitioner));


//////////////////////////////////////////////////////////
//    Composición de la pagina web

const practitionerItem = JSON.parse(localStorage.getItem("practitioner"));
const practitioner = practitionerItem ?? [];


// Añado un elemento ul al cuerpo con id listaPacientes
//const cuerpoNode = document.getElementById("cuerpo");
const nodeULpract = document.createElement("ul");          //crea una constante a partit del elemento html "ul"
nodeULpract.id = "listaPractitioner";                         //asigna un id al elemento html "ul"
cuerpoNode.appendChild(nodeULpract);

// Relleno el elemento ul con items (uno para cada paciente)
const listaPractitionerNode = document.getElementById("listaPractitioner");
practitioner.forEach((p) => {
  const nodeLIpract = document.createElement("li");
  nodeLIpract.innerText = p;
  listaPractitionerNode.appendChild(nodeLIpract);
});

-----------------------------------------------------------------------*/