const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const clientes = req.body;
  const code = clientes_controller.store(clientes);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const clientes = clientes_controller.index();
  res.json(clientes);
});

router.get("/:id", (req, res) => {
  const clientes = clientes_controller.show(req.params.id);
  res.json(clientes);
});

router.put("/:id", (req, res) => {
  const clientes = req.body;
  const code = clientes_controller.update(req.params.id, clientes);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  clientes_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
