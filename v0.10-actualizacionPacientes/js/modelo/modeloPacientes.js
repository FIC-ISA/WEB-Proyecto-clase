//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.10-actualizacionPacientes
//////////////////////////////////////////////////////////////////////////////////////////////////////

export {
  recuperaTodosLosPacientes,
  recuperaPaciente,
  recuperaNombrePaciente,
  recuperaAtributoPaciente,
  actualizaPaciente,
};

//////////////////////////////////////////////////////////////////////////////////////////////////////
// Funciones para gestionar el modelo (Pacientes)

function recuperaTodosLosPacientes() {
  const pacientesItem = JSON.parse(localStorage.getItem("pacientes"));
  const pacientes = pacientesItem ?? [];
  return pacientes;
}

function recuperaPaciente(id) {
  const pacienteItem = JSON.parse(localStorage.getItem(id));
  return pacienteItem ?? {};
}

function recuperaNombrePaciente(id) {
  const paciente = recuperaPaciente(id);
  return paciente.name[0].text ?? "Unknown";
}

function recuperaAtributoPaciente(id, atributo) {
  let valor = "";
  const datosPaciente = recuperaPaciente(id);

  switch (atributo) {
    case "name":
      valor = datosPaciente.name[0].text ?? "Unknown";
      break;
    case "gender":
      valor = datosPaciente.gender ?? "unknown";
      break;
    case "active":
      valor = datosPaciente.active ?? false;
  }

  return valor;
}

function actualizaPaciente(id, datos) {
  localStorage.setItem(id, JSON.stringify(datos));
}
