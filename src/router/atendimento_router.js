const express = require("express");
const router = express.Router();
const atendimento_controller = require("../controllers/atendimento.js");

router.post("/", (req, res) => {
  const atendimento = req.body;
  const code = atendimento_controller.store(atendimento);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const atendimento = atendimento_controller.index();
  res.json(atendimento);
});

router.get("/:id", (req, res) => {
  const atendimento = atendimento_controller.show(req.params.id);
  res.json(atendimento);
});

router.put("/:id", (req, res) => {
  const atendimento = req.body;
  const code = atendimento_controller.update(req.params.id, atendimento);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  atendimento_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
