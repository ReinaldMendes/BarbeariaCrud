const express = require("express");
const router = express.Router();
const servicos_controller = require("../controllers/servico.js");
router.post("/", (req, res) => {
  const servicos = req.body;
  const code = servicos_controller.store(servicos);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const servicos = servicos_controller.index();
  res.json(servicos);
});

router.get("/:id", (req, res) => {
  const servicos = servicos_controller.show(req.params.id);
  res.json(servicos);
});

router.put("/:id", (req, res) => {
  const servicos = req.body;
  const code = servicos_controller.update(req.params.id, servicos);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  servicos_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
