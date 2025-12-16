
import { useState } from 'react'
import TodosList from './TodosList'

function App() {
  const [showTodos, setShowTodos] = useState(true)

  return (
    <div style={{ padding: '20px' }}>
      <h2>Todo List with Cleanup</h2>

      <button onClick={() => setShowTodos(false)}>
        Unmount Todos
      </button>

      {showTodos && <TodosList />}
    </div>
  )
}

export default App
