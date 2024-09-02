const express = require("express");
const clientes_router = require("./router/cliente_router.js");
const usuario_router = require("./router/usuario_router.js");
const rede_router = require("./router/rede_router.js");
const barbearia_router = require("./router/barbearia_router.js");
const barbeiro_router = require("./router/barbeiro_router.js");
const servicos_router = require("./router/servico_router.js");
const atendimento_router = require("./router/atendimento_router.js");
const cep_endereco = require("./middlewares/cep_endereco.js");
const app = express();
const port = 3000;

app.use(express.json());

app.use("/clientes", clientes_router);
app.use("/usuarios", usuario_router);
app.use("/rede", rede_router);
app.use("/barbearia", barbearia_router);
app.use("/barbaeiro", barbeiro_router);
app.use("/servicos", servicos_router);
app.use("/atendimentos", atendimento_router);

//GERENCIAMENTO ATENDIMENTO
app.listen(port, () => {
  console.log(`Sucesso na conexão ${port}`);
});
