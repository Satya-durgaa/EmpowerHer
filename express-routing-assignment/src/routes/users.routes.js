const express = require("express");
const fs = require("fs");
const router = express.Router();

const DB_PATH = "./src/db.json";
const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
const writeDB = (data) => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

router.post("/add", (req, res) => {
  const db = readDB();
  const newUser = { id: Date.now(), ...req.body };
  db.users.push(newUser);
  writeDB(db);
  res.status(201).json(newUser);
});

router.get("/", (req, res) => {
  res.json(readDB().users);
});

router.get("/:userId", (req, res) => {
  const user = readDB().users.find(u => u.id == req.params.userId);
  if (!user) return res.status(404).json({ message: "User not found" });
  res.json(user);
});

router.put("/update/:userId", (req, res) => {
  const db = readDB();
  const index = db.users.findIndex(u => u.id == req.params.userId);
  if (index === -1) return res.status(404).json({ message: "User not found" });
  db.users[index] = { ...db.users[index], ...req.body };
  writeDB(db);
  res.json({ message: "User updated" });
});

router.delete("/delete/:userId", (req, res) => {
  const db = readDB();
  db.users = db.users.filter(u => u.id != req.params.userId);
  writeDB(db);
  res.json({ message: "User deleted" });
});

module.exports = router;
