import { useState } from "react";

export default function TodoApp() {
  const [todos, setTodos] = useState([]);
  const [text, setText] = useState("");

  const addTodo = () => {
    setTodos([...todos, { text, done: false }]);
    setText("");
  };

  return (
    <div>
      <h2>Todo App</h2>
      <input value={text} onChange={e => setText(e.target.value)} />
      <button onClick={addTodo}>Add</button>
      <ul>
        {todos.map((t, i) => (
          <li key={i}>
            <input type="checkbox" onChange={() => {
              const copy = [...todos];
              copy[i].done = !copy[i].done;
              setTodos(copy);
            }} />
            {t.text}
          </li>
        ))}
      </ul>
    </div>
  );
}