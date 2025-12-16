
import { useState } from 'react'
import ComponentA from './ComponentA'
import ComponentB from './ComponentB'

function StatusToggle() {
  const [status, setStatus] = useState(false)

  return (
    <div>
      <button onClick={() => setStatus(!status)}>
        Toggle Status
      </button>

      <div style={{ marginTop: '10px' }}>
        {status ? <ComponentA /> : <ComponentB />}
      </div>
    </div>
  )
}

export default StatusToggle
