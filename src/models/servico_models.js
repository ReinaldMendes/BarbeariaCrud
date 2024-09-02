const barbeiro_controller = require("../controllers/barbeiro");

let nextId = 1;

const model = (servico, id = nextId++) => {
  if (
    servico.nome != undefined &&
    servico.nome != "" &&
    servico.preco != undefined &&
    !isNaN(Number(servico.preco)) &&
    servico.duracao_minutos != undefined &&
    servico.duracao_minutos > 0 &&
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
module.exports = model;
