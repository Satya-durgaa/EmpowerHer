
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'
import TodoItem from './TodoItem'

function TodoList() {
  const { todos } = useContext(TodoContext)

  return (
    <div style={{ marginTop: '20px' }}>
      {todos.map(todo => (
        <TodoItem key={todo.id} todo={todo} />
      ))}
    </div>
  )
}

export default TodoList
