let todos = [];

export const getTodos = () => todos;

export const addTodo = (todo) => {
  todos.push(todo);
};

export const deleteTodo = (id) => {
  todos = todos.filter(t => t.id !== id);
};
