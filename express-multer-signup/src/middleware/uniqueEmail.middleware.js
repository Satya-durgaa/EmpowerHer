const fs = require("fs");

const DB_PATH = "./src/db.json";

const uniqueEmail = (req, res, next) => {
  const db = JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
  const exists = db.users.some(u => u.email === req.body.email);

  if (exists) {
    return res.status(409).json({ error: "Email already exists" });
  }

  next();
};

module.exports = uniqueEmail;
