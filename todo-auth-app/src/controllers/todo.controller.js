import { supabase } from "../config/supabase.js";

export const createTodo = async (req, res) => {
  await supabase.from("todos").insert([{ title: req.body.title, userId: req.user.userId }]);
  res.status(201).json({ message: "Todo created" });
};

export const getTodos = async (req, res) => {
  const { data } = await supabase.from("todos").select("*").eq("userId", req.user.userId);
  res.json(data);
};

export const updateTodo = async (req, res) => {
  await supabase.from("todos").update(req.body).eq("id", req.params.id).eq("userId", req.user.userId);
  res.json({ message: "Todo updated" });
};

export const deleteTodo = async (req, res) => {
  await supabase.from("todos").delete().eq("id", req.params.id).eq("userId", req.user.userId);
  res.json({ message: "Todo deleted" });
};
