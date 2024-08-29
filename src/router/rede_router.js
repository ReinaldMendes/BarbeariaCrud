const express = require("express");
const router = express.Router();

router.post("/", (req, res) => {
  const rede = req.body;
  const code = rede_controller.store(rede);
  res.status(code).json();
});

router.get("/", (req, res) => {
  const rede = rede_controller.index();
  res.json(rede);
});

router.get("/:id", (req, res) => {
  const rede = rede_controller.show(req.params.id);
  res.json(rede);
});

router.put("/:id", (req, res) => {
  const rede = req.body;
  const code = rede_controller.update(req.params.id, rede);
  res.status(code).json();
});

router.delete("/:id", (req, res) => {
  rede_controller.destroy(req.params.id);
  res.json();
});

module.exports = router;
