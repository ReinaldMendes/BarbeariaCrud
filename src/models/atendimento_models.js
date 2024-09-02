const clientes_controller = require("../controllers/cliente.js");
const servicos_controller = require("../controllers/servico.js");
let nextId = 1;

const validarServicos = (servico) => {
  return servico.every((servico) => {
    return (
      servicos_controller.show(servico.servico_id) &&
      servico.nota >= 0 &&
      servico.nota <= 10
    );
  });
};
const duracao = (servico) => {
  let soma = 0;
  servico.forEach((servico) => {
    soma += servicos_controller.show(servico.servico_id).duracao_minutos;
  });
  return soma;
};

const preco = (servico) => {
  let soma = 0;
  servico.forEach((servico) => {
    soma += servicos_controller.show(servico.servico_id).preco;
  });
};
const model = (atendimento, id = nextId++) => {
  if (
    atendimento.horario_inicio != undefined &&
    atendimento.horario_inicio >= 0 &&
    atendimento.id_cliente !== undefined &&
    clientes_controller.show(atendimento.id_cliente) &&
    atendimento.status_pagamento !== undefined &&
    atendimento.status_pagamento > 0 &&
    atendimento.status_pagamento <= 10 &&
    Array.isArray(body.servico) &&
    validarServicos(atendimento.servico)
  ) {
    return {
      id,
      id_cliente: atendimento.id_cliente,
      servicos: atendimento.servico,
      horario_inicio: atendimento.horario_inicio,
      horario_fim: atendimento.horario_inicio + duracao(atendimento.servico),
      preco: preco(atendimento.servico),
      status_pagamento: atendimento.status_pagamento,
    };
  }
};

module.exports = model;
