const express = require("express");
const clientes_controller = require("./controllers/cliente.js");
const usuarios_controller = require("./controllers/usuario.js");
const rede_controller = require("./controllers/rede.js");
const barbearia_controller = require("./controllers/barbearia.js");
const barbeiro_controller = require("./controllers/barbeiro.js");
const servicos_controller = require("./controllers/servico.js");
const atendimento_controller = require("./controllers/atendimento.js");
const cep_endereco = require("./middlewares/cep_endereco.js");
const app = express();
const port = 3000;

app.use(express.json());
//app.use(cep_endereco);

// app.post("/barbearia", cep_endereco, (req, res, next) => {
//   res.json(req.body);
// });
// app.get("/barbearia", (req, res) => {
//   res.json();
// });
//GERENCIAMENTO DE BARBEARIA
app.post("/barbearia", cep_endereco, (req, res, next) => {
  const barbearia = req.body;
  const code = barbearia_controller.store(barbearia);
  res.status(code).json();
});

app.get("/barbearia", (req, res) => {
  const barbearia = barbearia_controller.index();
  res.json(barbearia);
});

app.get("/barbearia/:id", (req, res) => {
  const barbearia = barbearia_controller.show(req.params.id);
  res.json(barbearia);
});

app.put("/barbearia/:id", cep_endereco, (req, res, next) => {
  const barbearia = req.body;
  const code = barbearia_controller.update(req.params.id, barbearia);
  res.status(code).json();
});

app.delete("/barbearia/:id", (req, res) => {
  barbearia_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO DE BARBEARIA
//GERENCIAMENTO DE BARBEIRO
app.post("/barbeiro", (req, res) => {
  const barbeiro = req.body;
  const code = barbeiro_controller.store(barbeiro);
  res.status(code).json();
});

app.get("/barbeiro", (req, res) => {
  const barbeiro = barbeiro_controller.index();
  res.json(barbeiro);
});

app.get("/barbeiro/:id", (req, res) => {
  const barbeiro = barbeiro_controller.show(req.params.id);
  res.json(barbeiro);
});

app.put("/barbeiro/:id", (req, res) => {
  const barbeiro = req.body;
  const code = barbeiro_controller.update(req.params.id, barbeiro);
  res.status(code).json();
});

app.delete("/barbeiro/:id", (req, res) => {
  barbeiro_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO DE BARBEIRO
//GERENCIAMENTO DE Clientes
app.post("/clientes", (req, res) => {
  const clientes = req.body;
  const code = clientes_controller.store(clientes);
  res.status(code).json();
});

app.get("/clientes", (req, res) => {
  const clientes = clientes_controller.index();
  res.json(clientes);
});

app.get("/clientes/:id", (req, res) => {
  const clientes = clientes_controller.show(req.params.id);
  res.json(clientes);
});

app.put("/clientes/:id", (req, res) => {
  const clientes = req.body;
  const code = clientes_controller.update(req.params.id, clientes);
  res.status(code).json();
});

app.delete("/clientes/:id", (req, res) => {
  clientes_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO DE Clientes
//GERENCIAMENTO USUARIOS
app.post("/usuarios", (req, res) => {
  const usuarios = req.body;
  const code = usuarios_controller.store(usuarios);
  res.status(code).json();
});

app.get("/usuarios", (req, res) => {
  const usuarios = usuarios_controller.index();
  res.json(usuarios);
});

app.get("/usuarios/:id", (req, res) => {
  const usuarios = usuarios_controller.show(req.params.id);
  res.json(usuarios);
});

app.put("/usuarios/:id", (req, res) => {
  const usuarios = req.body;
  const code = usuarios_controller.update(req.params.id, usuarios);
  res.status(code).json();
});

app.delete("/usuarios/:id", (req, res) => {
  usuarios_controller.destroy(req.params.id);
  res.json();
});
//GEREANCIAMENTO USUARIOS
//GERENCIAMENTO REDE
app.post("/rede", (req, res) => {
  const rede = req.body;
  const code = rede_controller.store(rede);
  res.status(code).json();
});

app.get("/rede", (req, res) => {
  const rede = rede_controller.index();
  res.json(rede);
});

app.get("/rede/:id", (req, res) => {
  const rede = rede_controller.show(req.params.id);
  res.json(rede);
});

app.put("/rede/:id", (req, res) => {
  const rede = req.body;
  const code = rede_controller.update(req.params.id, rede);
  res.status(code).json();
});

app.delete("/rede/:id", (req, res) => {
  rede_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO REDE
//GERENCIAMENT SERVICOS
app.post("/servicos", (req, res) => {
  const servicos = req.body;
  const code = servicos_controller.store(servicos);
  res.status(code).json();
});

app.get("/servicos", (req, res) => {
  const servicos = servicos_controller.index();
  res.json(servicos);
});

app.get("/servicos/:id", (req, res) => {
  const servicos = servicos_controller.show(req.params.id);
  res.json(servicos);
});

app.put("/servicos/:id", (req, res) => {
  const servicos = req.body;
  const code = servicos_controller.update(req.params.id, servicos);
  res.status(code).json();
});

app.delete("/servicos/:id", (req, res) => {
  servicos_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTE SERVICO
//GERENCIMENTO ATENDIMENTO
app.post("/atendimentos", (req, res) => {
  const atendimento = req.body;
  const code = atendimento_controller.store(atendimento);
  res.status(code).json();
});

app.get("/atendimentos", (req, res) => {
  const atendimento = atendimento_controller.index();
  res.json(atendimento);
});

app.get("/atendimentos/:id", (req, res) => {
  const atendimento = atendimento_controller.show(req.params.id);
  res.json(atendimento);
});

app.put("/atendimentos/:id", (req, res) => {
  const atendimento = req.body;
  const code = atendimento_controller.update(req.params.id, atendimento);
  res.status(code).json();
});

app.delete("/atendimentos/:id", (req, res) => {
  atendimento_controller.destroy(req.params.id);
  res.json();
});
//GERENCIAMENTO ATENDIMENTO
app.listen(port, () => {
  console.log(`Sucesso na conexão ${port}`);
});
