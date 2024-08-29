let nextId = 1;

const model = (rede, id = nextId++) => {
  if (
    rede.nome != undefined &&
    rede.nome != "" &&
    rede.id_usuario != undefined &&
    usuarios_controller.show(rede.id_usuario)
  ) {
    return {
      id,
      id_usuario: rede.id_usuario,
      nome: rede.nome,
    };
  }
};
