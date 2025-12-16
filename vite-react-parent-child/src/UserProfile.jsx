
import UserInfo from './UserInfo'

function UserProfile() {
  const name = "Satya Durga"
  const age = 21

  return (
    <div>
      <h3>User Profile</h3>
      <UserInfo name={name} age={age} />
    </div>
  )
}

export default UserProfile
