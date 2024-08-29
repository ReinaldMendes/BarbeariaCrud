let nextId = 1;

const model = (atendimento, id = nextId++) => {
  if (
    atendimento.id_cliente !== undefined &&
    clientes_controller.show(atendimento.id_cliente) &&
    atendimento.servicos !== undefined
  ) {
    let horarioInicio = new Date(`1970-01-01T${atendimento.horario_inicio}:00`);
    let horarioFim = new Date(horarioInicio);  // Cópia da data de início
    let precoTotal = 0;

    const servicosComNotas = atendimento.servicos.map(servico => {
      const servicoData = servicos_controller.show(servico.id_servico);
      
      if (servicoData) {
        // Incrementa o horário fim com a duração do serviço
        horarioFim.setMinutes(horarioFim.getMinutes() + servicoData.duracao);

        // Soma o preço do serviço ao preço total
        precoTotal += servicoData.preco;

        return {
          id_servico: servico.id_servico,
          nota: servico.nota,
          nome: servicoData.nome,
          duracao: servicoData.duracao,
          preco: servicoData.preco
        };
      }
    }).filter(servico => servico !== undefined);  // Remove serviços inválidos

    return {
      id,
      id_cliente: atendimento.id_cliente,
      servicos: servicosComNotas,
      horario_inicio: atendimento.horario_inicio,
      horario_fim: horarioFim.toTimeString().substr(0, 5),  // Retorna apenas HH:mm
      preco: precoTotal.toFixed(2),
      status_pagamento: atendimento.status_pagamento,
    };
  }
};
