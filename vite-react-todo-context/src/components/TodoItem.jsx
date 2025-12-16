
import { useContext } from 'react'
import { TodoContext } from '../context/TodoContext'

function TodoItem({ todo }) {
  const { deleteTodo } = useContext(TodoContext)

  return (
    <div style={{
      display: 'flex',
      justifyContent: 'space-between',
      border: '1px solid #ccc',
      padding: '8px',
      marginBottom: '6px'
    }}>
      <span>{todo.title}</span>
      <button onClick={() => deleteTodo(todo.id)}>Delete</button>
    </div>
  )
}

export default TodoItem
