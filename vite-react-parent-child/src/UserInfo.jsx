
function UserInfo({ name, age }) {
  return (
    <div style={{
      border: '1px solid #ccc',
      padding: '10px',
      marginTop: '10px',
      borderRadius: '5px'
    }}>
      <p><strong>Name:</strong> {name}</p>
      <p><strong>Age:</strong> {age}</p>
    </div>
  )
}

export default UserInfo
