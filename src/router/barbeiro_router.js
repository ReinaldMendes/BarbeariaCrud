const express = require("express");
const router = express.Router();
const barbeiro_controller = require("../controllers/barbeiro.js");
router.post("/", (req, res) => {
  const barbeiro = req.body;
  const code = barbeiro_controller.store(barbeiro);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const barbeiro = barbeiro_controller.index();
  res.json(barbeiro);
});

router.get("/:id", (req, res) => {
  const barbeiro = barbeiro_controller.show(req.params.id);
  res.json(barbeiro);
});

router.put("/:id", (req, res) => {
  const barbeiro = req.body;
  const code = barbeiro_controller.update(req.params.id, barbeiro);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  barbeiro_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
