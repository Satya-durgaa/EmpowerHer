import express from "express";
import todoRoutes from "./routes/todo.routes.js";

const app = express();
app.use(express.json());

app.use("/todos", todoRoutes);

app.use((err, req, res, next) => {
  res.status(500).json({ error: err.message });
});

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
