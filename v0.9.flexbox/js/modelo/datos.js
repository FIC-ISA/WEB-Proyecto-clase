//////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.9.flexbox
//////////////////////////////////////////////////////////////////////////

export { cargaDatosPacientes };

//////////////////////////////////////////////////////////////////////////
///    Carga inicial de datos de pacientes

const pacientes = ["pacienteFIC001", "pacienteFIC002"];

const pacienteFIC001 = {
  name: [{ text: "José" }],
  active: false,
  gender: "male",
};

const pacienteFIC002 = {
  name: [{ text: "María" }],
  active: true,
  gender: "female",
};

function cargaDatosPacientes() {
  localStorage.clear();
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
  pacientes.forEach((p) => {
    localStorage.setItem(p, JSON.stringify(eval(p)));
  });
}
