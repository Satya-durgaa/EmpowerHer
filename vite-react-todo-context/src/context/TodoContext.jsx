
import { createContext, useState } from 'react'

export const TodoContext = createContext(null)

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])

  const addTodo = (title) => {
    setTodos(prev => [
      ...prev,
      { id: Date.now(), title }
    ])
  }

  const deleteTodo = (id) => {
    setTodos(prev => prev.filter(todo => todo.id !== id))
  }

  return (
    <TodoContext.Provider value={{ todos, addTodo, deleteTodo }}>
      {children}
    </TodoContext.Provider>
  )
}

export default TodoProvider
