import express from "express";
import fs from "fs";

const app = express();
const PORT = 3000;

app.use(express.json());

const readData = () => {
  const data = fs.readFileSync("db.json", "utf-8");
  return JSON.parse(data);
};

const writeData = (data) => {
  fs.writeFileSync("db.json", JSON.stringify(data, null, 2));
};

app.get("/students", (req, res) => {
  const data = readData();
  res.status(200).json(data.students);
});

app.post("/students", (req, res) => {
  const data = readData();
  const { id, name, course, year } = req.body;

  if (!id || !name || !course || !year) {
    return res.status(400).json({ message: "All fields are required" });
  }

  data.students.push({ id, name, course, year });
  writeData(data);

  res.status(201).json({ message: "Student added successfully" });
});

app.put("/students", (req, res) => {
  const data = readData();
  const { id, name, course, year } = req.body;

  const index = data.students.findIndex(s => s.id === id);
  if (index === -1) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students[index] = { ...data.students[index], name, course, year };
  writeData(data);

  res.status(200).json({ message: "Student updated successfully" });
});

app.delete("/students/:id", (req, res) => {
  const data = readData();
  const id = parseInt(req.params.id);

  const updated = data.students.filter(s => s.id !== id);
  if (updated.length === data.students.length) {
    return res.status(404).json({ message: "Student not found" });
  }

  data.students = updated;
  writeData(data);

  res.status(200).json({ message: "Student deleted successfully" });
});

app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
