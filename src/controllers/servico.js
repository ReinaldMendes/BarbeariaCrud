const db = [];
const barbeiro_controller = require("./barbeiro.js");
let nextId = 1;

const model = (servico, id = nextId++) => {
  if (
    servico.nome != undefined &&
    servico.nome != "" &&
    servico.id_barbeiro != undefined &&
    barbeiro_controller.show(servico.id_barbeiro)
  ) {
    return {
      id,
      id_barbeiro: servico.id_barbeiro,
      nome: servico.data,
      preco: servico.preco,
      duracao_minutos: servico.duracao_minutos,
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
