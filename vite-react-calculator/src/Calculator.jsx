
import { useState } from 'react'

function Calculator() {
  const [num1, setNum1] = useState('')
  const [num2, setNum2] = useState('')
  const [operation, setOperation] = useState('add')
  const [results, setResults] = useState([])

  const calculate = () => {
    const a = Number(num1)
    const b = Number(num2)
    let result

    if (operation === 'add') result = a + b
    if (operation === 'subtract') result = a - b
    if (operation === 'multiply') result = a * b

    setResults([...results, result])
  }

  return (
    <div>
      <input 
        type="number" 
        value={num1}
        onChange={(e) => setNum1(e.target.value)}
      />
      <input 
        type="number" 
        value={num2}
        onChange={(e) => setNum2(e.target.value)}
      />

      <select value={operation} onChange={(e) => setOperation(e.target.value)}>
        <option value="add">Add</option>
        <option value="subtract">Subtract</option>
        <option value="multiply">Multiply</option>
      </select>

      <button onClick={calculate}>Perform Action</button>

      <div>
        <h3>Results:</h3>
        <ul>
          {results.map((res, index) => (
            <li key={index}>{res}</li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Calculator
