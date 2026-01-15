const express = require("express");
const fs = require("fs");
const rateLimiter = require("../middleware/rateLimiter.middleware");
const validateTodo = require("../middleware/validateTodo.middleware");

const router = express.Router();
const DB_PATH = "./src/db.json";

const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
const writeDB = data => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

router.post("/add", validateTodo, (req, res) => {
  const db = readDB();
  const newTodo = { id: Date.now(), title: req.body.title };
  db.todos.push(newTodo);
  writeDB(db);
  res.status(201).json(newTodo);
});

router.get("/", rateLimiter, (req, res) => {
  const db = readDB();
  res.status(200).json(db.todos);
});

router.get("/:todoId", (req, res) => {
  const db = readDB();
  const todo = db.todos.find(t => t.id == req.params.todoId);
  if (!todo) return res.status(404).json({ message: "Todo not found" });
  res.json(todo);
});

router.put("/update/:todoId", (req, res) => {
  const db = readDB();
  const index = db.todos.findIndex(t => t.id == req.params.todoId);
  if (index === -1) return res.status(404).json({ message: "Todo not found" });

  db.todos[index] = { ...db.todos[index], ...req.body };
  writeDB(db);
  res.json({ message: "Todo updated" });
});

router.delete("/delete/:todoId", (req, res) => {
  const db = readDB();
  db.todos = db.todos.filter(t => t.id != req.params.todoId);
  writeDB(db);
  res.json({ message: "Todo deleted" });
});

module.exports = router;
