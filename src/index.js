const express = require("express");
const clientes_controller = require("./controllers/cliente.js");
const usuario_router = require("./router/usuario_router.js");
const rede_controller = require("./controllers/rede.js");
const barbearia_controller = require("./controllers/barbearia.js");
const barbeiro_controller = require("./controllers/barbeiro.js");
const servicos_controller = require("./controllers/servico.js");
const atendimento_controller = require("./controllers/atendimento.js");
const cep_endereco = require("./middlewares/cep_endereco.js");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/usuarios", usuario_router);
//GERENCIAMENTO ATENDIMENTO
app.listen(port, () => {
  console.log(`Sucesso na conexão ${port}`);
});
