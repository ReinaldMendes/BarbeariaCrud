const db = [];
const rede_controller = require("./rede.js");
let nextId = 1;

const model = (barbearia, id = nextId++) => {
  if (
    barbearia.nome != undefined &&
    barbearia.nome != "" &&
    barbearia.endereco != undefined &&
    barbearia.id_rede != undefined &&
    rede_controller.show(barbearia.id_rede)
  ) {
    return {
      id,
      id_rede: barbearia.id_rede,
      nome: barbearia.nome,
      fotos: barbearia.fotos,
      endereco: barbearia.endereco,
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
