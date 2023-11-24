//////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.5-datosPaciente
//////////////////////////////////////////////////////////////////////////

export { cargaDatosPacientes };

//////////////////////////////////////////////////////////////////////////
///    Carga inicial de datos de pacientes

const pacientes = ["pacienteFIC001", "pacienteFIC002"];

const pacienteFIC001 = {
  name: "José",
  gender: "male",
};

const pacienteFIC002 = {
  name: "María",
  gender: "female",
};

function cargaDatosPacientes() {
  localStorage.clear();
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
  pacientes.forEach((p) => {
    localStorage.setItem(p, JSON.stringify(eval(p)));
  });
}
