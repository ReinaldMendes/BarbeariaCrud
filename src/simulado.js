app.post("/barbeiro", (req, res) => {
  const barbearia = req.body;
  const code = barbearia_controller.store(barbearia);
  res.status(code).json();
});

app.get("/barbeiro", (req, res) => {
  const barbearia = barbearia_controller.index();
  res.json(barbearia);
});

app.get("/barbeiro/:id", (req, res) => {
  const barbearia = barbearia_controller.show(req.params.id);
  res.json(barbearia);
});

app.put("/barbeiro/:id", (req, res) => {
  const barbearia = req.body;
  const code = barbearia_controller.update(req.params.id, barbearia);
  res.status(code).json();
});

app.delete("/barbeiro/:id", (req, res) => {
  barbearia_controller.destroy(req.params.id);
  res.json();
});
