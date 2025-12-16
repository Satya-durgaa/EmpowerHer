
import { useContext, useState } from 'react'
import { TodoContext } from '../context/TodoContext'

function AddTodo() {
  const [title, setTitle] = useState('')
  const { addTodo } = useContext(TodoContext)

  const handleAdd = () => {
    if (title.trim() === '') return
    addTodo(title)
    setTitle('')
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
        placeholder="Enter todo"
      />
      <button onClick={handleAdd}>Add</button>
    </div>
  )
}

export default AddTodo
