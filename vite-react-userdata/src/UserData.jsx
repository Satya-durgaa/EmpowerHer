
import { useEffect, useState } from 'react'

function UserData() {
  const [user, setUser] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users/1')
      .then(res => res.json())
      .then(data => {
        setUser(data)
        setLoading(false)
      })
  }, [])

  if (loading) {
    return <p>Loading...</p>
  }

  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '15px',
      borderRadius: '5px',
      maxWidth: '400px'
    }}>
      <p><strong>Name:</strong> {user.name}</p>
      <p><strong>Email:</strong> {user.email}</p>
      <p><strong>Phone:</strong> {user.phone}</p>
    </div>
  )
}

export default UserData
