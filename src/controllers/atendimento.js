const db = [];
const clientes_controller = require("./cliente.js");
const servicos_controller = require("./servico.js");
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
const store = (body) => {
  const novo = model(body);
  if (novo) {
    db.push(novo);
    return 201;
  }
  return 400;
};

const index = () => db;

const show = (id) => db.find((el) => el.id == id);

const update = (id, body) => {
  const index = db.findIndex((el) => el.id == id);
  const novo = model(body, parseInt(id));
  if (novo && index != -1) {
    db[index] = novo;
    return 200;
  }
  return 400;
};
const destroy = (id) => {
  const index = db.findIndex((el) => el.id == id);
  if (index != -1) {
    db.splice(index, 1);
    return 200;
  }
  return 400;
};

module.exports = {
  store,
  index,
  show,
  update,
  destroy,
};
