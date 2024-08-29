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
