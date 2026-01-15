const express = require("express");
const fs = require("fs");
const upload = require("../middleware/upload.middleware");
const uniqueEmail = require("../middleware/uniqueEmail.middleware");
const cloudinary = require("../config/cloudinary.config");

const router = express.Router();
const DB_PATH = "./src/db.json";

const readDB = () => JSON.parse(fs.readFileSync(DB_PATH, "utf-8"));
const writeDB = data => fs.writeFileSync(DB_PATH, JSON.stringify(data, null, 2));

router.post("/signup", upload.single("profile"), uniqueEmail, async (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).json({ error: "Profile image is required" });
    }

    const result = await cloudinary.uploader.upload_stream(
      { resource_type: "image" },
      (error, result) => {
        if (error) throw error;

        const db = readDB();
        const user = {
          id: Date.now(),
          name: req.body.name,
          email: req.body.email,
          password: req.body.password,
          profilePic: result.secure_url
        };

        db.users.push(user);
        writeDB(db);

        res.status(201).json({
          message: "User registered successfully",
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            profilePic: user.profilePic
          }
        });
      }
    );

    result.end(req.file.buffer);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
});

module.exports = router;
