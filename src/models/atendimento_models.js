const clientes_controller = require("../controllers/cliente.js");
const servicos_controller = require("../controllers/servico.js");
let nextId = 1;

const model = (atendimento, id = nextId++) => {
  if (
    atendimento.id_cliente !== undefined &&
    clientes_controller.show(atendimento.id_cliente) &&
    atendimento.servicos !== undefined
  ) {
    const servicosComNotas = atendimento.servicos.map((servico) => {
      return {
        id_servico: servico.id_servico,
        nota: servico.nota,
      };
    });

    return {
      id,
      id_cliente: atendimento.id_cliente,
      servicos: servicosComNotas,
      horario_inicio: atendimento.horario_inicio,
      horario_fim: atendimento.horario_fim,
      preco: atendimento.preco,
      status_pagamento: atendimento.status_pagamento,
    };
  }
};

module.exports = model;
