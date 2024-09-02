const express = require("express");
const router = express.Router();
const barbearia_controller = require("../controllers/barbearia.js");
const cep_endereco = require("./middlewares/cep_endereco.js");

router.post("/", cep_endereco, (req, res, next) => {
  const barbearia = req.body;
  const code = barbearia_controller.store(barbearia);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const barbearia = barbearia_controller.index();
  res.json(barbearia);
});

router.get("/:id", (req, res) => {
  const barbearia = barbearia_controller.show(req.params.id);
  res.json(barbearia);
});

router.put("/:id", cep_endereco, (req, res, next) => {
  const barbearia = req.body;
  const code = barbearia_controller.update(req.params.id, barbearia);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  barbearia_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
