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
