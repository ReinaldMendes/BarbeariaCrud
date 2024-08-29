let nextID = 1;
const model = (usuario, id = nextID++) => {
  if (usuario.email != undefined && usuario.email != "") {
    return {
      id: id,
      email: usuario.email,
      senha: usuario.senha,
    };
  }
};
module.exports = model;
