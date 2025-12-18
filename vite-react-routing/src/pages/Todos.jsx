
import { useEffect, useState } from 'react'

function Todos() {
  const [todos, setTodos] = useState([])

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(res => res.json())
      .then(data => setTodos(data.slice(0, 10)))
  }, [])

  return (
    <div style={{
      display: 'grid',
      gridTemplateColumns: 'repeat(auto-fill, minmax(200px, 1fr))',
      gap: '15px'
    }}>
      {todos.map(todo => (
        <div key={todo.id} style={{
          border: '1px solid #ccc',
          padding: '15px',
          borderRadius: '6px'
        }}>
          <h4>{todo.title}</h4>
          <p>
            Status: {todo.completed ? 'Completed' : 'Not Completed'}
          </p>
        </div>
      ))}
    </div>
  )
}

export default Todos
