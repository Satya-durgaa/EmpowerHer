const express = require("express");
const fs = require("fs");
const router = express.Router();

router.post("/", (req, res) => {
  const data = JSON.parse(fs.readFileSync("db.json", "utf-8"));
  const newProduct = { id: Date.now(), ...req.body };
  data.products.push(newProduct);
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
  res.status(201).json({ message: "Product added", product: newProduct });
});

module.exports = router;
