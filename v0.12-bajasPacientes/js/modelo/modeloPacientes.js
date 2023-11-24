//////////////////////////////////////////////////////////////////////////////////////////////////////
// Proyecto FIC
// Version v0.12-bajasPacientes
//////////////////////////////////////////////////////////////////////////////////////////////////////

export {
  recuperaTodosLosPacientes,
  recuperaPaciente,
  recuperaNombrePaciente,
  recuperaAtributoPaciente,
  actualizaPaciente,
  altaPaciente,
  borraPaciente,
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

function altaPaciente(datos) {
  // Funcion auxiliziar para generar un índice de la forma pacienteFICXXX

  function nuevoIndicePaciente() {
    const prefijo = "pacienteFIC";
    const pacientes = recuperaTodosLosPacientes();

    if (pacientes.length == 0) {
      return "pacienteFIC001";
    }

    const longitudPrefijo = prefijo.length;

    let indices = pacientes.map((p) => {
      const sufijo = p.substring(longitudPrefijo, p.length);
      return parseInt(sufijo);
    });

    indices = indices.sort();
    const ultimoIndice = indices.length - 1;
    const valorNuevoIndice = indices[ultimoIndice] + 1;

    let sufijo = "";
    if (valorNuevoIndice < 10) {
      sufijo = "00" + valorNuevoIndice;
    } else {
      sufijo = "0" + valorNuevoIndice;
    }

    return prefijo + sufijo;
  }

  // Se genera un nuevo indice y se añade al item (array de pacientes)
  const id = nuevoIndicePaciente();
  let pacientes = recuperaTodosLosPacientes();
  pacientes.push(id);
  localStorage.setItem("pacientes", JSON.stringify(pacientes));

  // Se añade un item para el nuevo paciente
  actualizaPaciente(id, datos);
}

function borraPaciente(id) {
  localStorage.removeItem(id);
  const pacientesPrevio = recuperaTodosLosPacientes();

  const pacientes = pacientesPrevio.filter((p) => {
    return p !== id;
  });

  localStorage.setItem("pacientes", JSON.stringify(pacientes));
}
