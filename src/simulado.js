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
