const express = require("express");
const app = express();

app.use(express.json());

// Endpoint 1: Retorna uma lista de usuários
app.get("/users", (req, res) => {
  const users = [
    { id: 1, name: "Alice" },
    { id: 2, name: "Bob" },
  ];
  res.json(users);
});

// Endpoint 2: Adiciona um usuário
app.post("/users", (req, res) => {
  const { name } = req.body;
  if (!name) {
    return res.status(400).json({ error: "Name is required" });
  }
  const newUser = { id: Date.now(), name };
  res.status(201).json(newUser);
});

module.exports = app;
