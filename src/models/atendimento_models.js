let nextId = 1;

const model = (atendimento, id = nextId++) => {
  if (
    atendimento.id_cliente !== undefined &&
    clientes_controller.show(atendimento.id_cliente) &&
    atendimento.servicos !== undefined &&
    atendimento.notas !== undefined
  ) {
    const servicos = [];

    atendimento.servicos.forEach((id_servico, index) => {
      if (servicos_controller.show(id_servico)) {
        servicos.push({
          id_servico,
          nota: atendimento.notas[index],
        });
      }
    });

    return {
      id,
      id_cliente: atendimento.id_cliente,
      servicos,
      horario_inicio: atendimento.horario_inicio,
      horario_fim: atendimento.horario_fim,
      preco: atendimento.preco,
      status_pagamento: atendimento.status_pagamento,
    };
  }
};



let nextId = 1;

const model = (atendimento, id = nextId++) => {
  if (
    atendimento.id_cliente != undefined &&
    clientes_controller.show(atendimento.id_cliente) &&
    atendimento.id_servico != undefined &&
    servicos_controller.show(atendimento.id_servico)
  ) {
    return {
      id,
      id_cliente: atendimento.id_cliente,
      servicos: [
        { id_servico: atendimento.id_servico, nota: atendimento.notas },
      ],
      horario_inicio: atendimento.horario_inicio,
      horario_fim: atendimento.ihorario_fim,
      preco: atendimento.id_cliente,
      status_pagamento: atendimento.id_cliente,
    };
  }
};
