
const express = require("express");
const os = require("os");
const dns = require("dns");
const readFileData = require("./read");

const app = express();
const PORT = 3000;

// Test route
app.get("/test", (req, res) => {
  res.send("Test route is working!");
});

// Read file route
app.get("/readfile", (req, res) => {
  try {
    const data = readFileData();
    res.send(data);
  } catch (error) {
    res.status(500).send("Error reading file");
  }
});

// System details route
app.get("/systemdetails", (req, res) => {
  const totalMemory = (os.totalmem() / (1024 ** 3)).toFixed(0) + " GB";
  const freeMemory = (os.freemem() / (1024 ** 3)).toFixed(0) + " GB";

  res.json({
    platform: os.platform(),
    totalMemory,
    freeMemory,
    cpuModel: os.cpus()[0].model,
    cpuCores: os.cpus().length
  });
});

// Get IP route
app.get("/getip", (req, res) => {
  dns.lookup("masaischool.com", { all: true }, (err, addresses) => {
    if (err) {
      return res.status(500).json({ error: "DNS lookup failed" });
    }
    res.json({
      hostname: "masaischool.com",
      addresses
    });
  });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
