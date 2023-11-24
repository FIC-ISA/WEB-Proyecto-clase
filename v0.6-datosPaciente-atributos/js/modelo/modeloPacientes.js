//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// v0.6-datosPaciente-atributos
//////////////////////////////////////////////////////////////////////////////////////////////////////

export {
  recuperaTodosLosPacientes,
  recuperaPaciente,
  recuperaNombrePaciente,
  recuperaAtributoPaciente,
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
      break;
    case "birthdate":
      valor = datosPaciente.birthdate ?? "Unknown"
  }

  return valor;
}
