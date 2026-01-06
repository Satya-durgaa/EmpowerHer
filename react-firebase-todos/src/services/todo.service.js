import axios from "axios";

const API_URL = "https://example.com/todos"; // replace with Firebase REST

export const getTodos = (userId) =>
  axios.get(`${API_URL}?userId=${userId}`);

export const addTodo = (todo) =>
  axios.post(API_URL, todo);

export const updateTodo = (id, data) =>
  axios.put(`${API_URL}/${id}`, data);

export const deleteTodo = (id) =>
  axios.delete(`${API_URL}/${id}`);