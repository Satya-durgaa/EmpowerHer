import { getTodos, addTodo, deleteTodo } from "../models/todo.model.js";

export const fetchTodos = (req, res) => {
  try {
    res.status(200).json(getTodos());
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const createTodo = (req, res) => {
  try {
    const todo = { id: Date.now(), title: req.body.title };
    addTodo(todo);
    res.status(201).json(todo);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export const removeTodo = (req, res) => {
  try {
    deleteTodo(Number(req.params.id));
    res.status(200).json({ message: "Todo deleted" });
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
