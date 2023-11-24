//////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// v0.6-datosPaciente-atributos
//////////////////////////////////////////////////////////////////////////

export { cargaDatosPacientes };

//////////////////////////////////////////////////////////////////////////
///    Carga inicial de datos de pacientes

const pacientes = ["pacienteFIC001", "pacienteFIC002"];

const pacienteFIC001 = {
  name: [{ text: "José" }],
  active: false,
  gender: "male",
  birthdate: "1969-04-16"
};

const pacienteFIC002 = {
  name: [{ text: "María" }],
  active: true,
  gender: "female",
  birthdate: "1976-08-15"
};

function cargaDatosPacientes() {
  localStorage.clear();
  localStorage.setItem("pacientes", JSON.stringify(pacientes));
  pacientes.forEach((p) => {
    localStorage.setItem(p, JSON.stringify(eval(p)));
  });
}
