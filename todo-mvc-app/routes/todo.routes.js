import express from "express";
import { fetchTodos, createTodo, removeTodo } from "../controllers/todo.controller.js";

const router = express.Router();

router.get("/", fetchTodos);
router.post("/", createTodo);
router.delete("/:id", removeTodo);

export default router;
