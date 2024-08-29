const express = require("express");
const router = express.Router();
const usuarios_controller = require("../controllers/usuario.js");

router.post("/", (req, res) => {
  const usuarios = req.body;
  const code = usuarios_controller.store(usuarios);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const usuarios = usuarios_controller.index();
  res.json(usuarios);
});

router.get("/:id", (req, res) => {
  const usuarios = usuarios_controller.show(req.params.id);
  res.json(usuarios);
});

router.put("/:id", (req, res) => {
  const usuarios = req.body;
  const code = usuarios_controller.update(req.params.id, usuarios);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  usuarios_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
