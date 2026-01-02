import React, { useEffect, useState } from "react";
import { getTodos } from "../api/todoService";
import { Link } from "react-router-dom";

const TodoList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    getTodos()
      .then((res) => setTodos(res.data))
      .catch(console.log);
  }, []);

  return (
    <div>
      <h2>Todo List</h2>
      {todos.slice(0, 10).map((todo) => (
        <div key={todo.id}>
          <Link to={`/todo/${todo.id}`}>{todo.title}</Link>
          <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
          <hr />
        </div>
      ))}
    </div>
  );
};

export default TodoList;
