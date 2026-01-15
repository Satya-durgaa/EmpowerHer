const express = require("express");
const todoRoutes = require("./routes/todos.routes");
const loggerMiddleware = require("./middleware/logger.middleware");

const app = express();

app.use(express.json());
app.use(loggerMiddleware);

app.use("/todos", todoRoutes);

app.listen(3000, () => {
  console.log("Server is running on http://localhost:3000");
});
