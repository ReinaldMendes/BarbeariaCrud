const db = [];
const barbearia_controller = require("./barbearia.js");
let nextId = 1;

const model = (barbeiro, id = nextId++) => {
  if (
    barbeiro.nome != undefined &&
    barbeiro.nome != "" &&
    barbeiro.id_barbearia != undefined &&
    barbearia_controller.show(barbeiro.id_barbearia)
  ) {
    return {
      id,
      id_barbearia: barbeiro.id_barbearia,
      nome: barbeiro.nome,
      fotos: barbeiro.fotos,
      bio: barbeiro.bio,
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
