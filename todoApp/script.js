const TODOS_KEY = "todos";

const todosContainer = document.getElementById("todos-container");
const statusText = document.getElementById("status-text");
const reloadBtn = document.getElementById("reload-todos-btn");

function saveTodos(todos) {
  localStorage.setItem(TODOS_KEY, JSON.stringify(todos));
}

function getTodos() {
  const data = localStorage.getItem(TODOS_KEY);
  if (!data) return [];
  try {
    return JSON.parse(data);
  } catch {
    return [];
  }
}

async function fetchAndStoreTodos() {
  statusText.textContent = "Loading todos from API...";
  try {
    const res = await fetch("https://jsonplaceholder.typicode.com/todos");
    const data = await res.json();
    saveTodos(data.slice(0, 20));
    statusText.textContent = "Loaded 20 todos from API.";
    renderTodos();
  } catch {
    statusText.textContent = "Failed to load todos.";
  }
}

function renderTodos() {
  const todos = getTodos();
  todosContainer.innerHTML = "";

  if (todos.length === 0) {
    const msg = document.createElement("p");
    msg.textContent = "No Todos Available";
    msg.className = "empty-message";
    todosContainer.appendChild(msg);
    return;
  }

  todos.forEach((todo) => {
    const div = document.createElement("div");
    div.className = "todo-item";

    const left = document.createElement("div");
    left.className = "todo-left";

    const title = document.createElement("p");
    title.className = "todo-title";
    title.textContent = todo.title;

    const status = document.createElement("span");
    status.className =
      "todo-status " + (todo.completed ? "completed" : "pending");
    status.textContent = todo.completed ? "Completed" : "Pending";

    left.appendChild(title);
    left.appendChild(status);

    const actions = document.createElement("div");
    actions.className = "todo-actions";

    const toggleBtn = document.createElement("button");
    toggleBtn.className = "btn-complete";
    toggleBtn.textContent = todo.completed ? "Mark Pending" : "Mark Complete";
    toggleBtn.onclick = () => toggleTodoComplete(todo.id);

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "btn-delete";
    deleteBtn.textContent = "Delete";
    deleteBtn.onclick = () => deleteTodo(todo.id);

    actions.appendChild(toggleBtn);
    actions.appendChild(deleteBtn);

    div.appendChild(left);
    div.appendChild(actions);
    todosContainer.appendChild(div);
  });
}

function deleteTodo(id) {
  saveTodos(getTodos().filter((t) => t.id !== id));
  renderTodos();
}

function toggleTodoComplete(id) {
  saveTodos(
    getTodos().map((t) =>
      t.id === id ? { ...t, completed: !t.completed } : t
    )
  );
  renderTodos();
}

reloadBtn.onclick = () => {
  saveTodos([]);
  renderTodos();
  fetchAndStoreTodos();
};

document.addEventListener("DOMContentLoaded", () => {
  if (getTodos().length === 0) fetchAndStoreTodos();
  else renderTodos();
});
