
import { NavLink } from 'react-router-dom'

const linkStyle = ({ isActive }) => ({
  marginRight: '15px',
  textDecoration: 'none',
  color: isActive ? 'blue' : 'black',
  fontWeight: isActive ? 'bold' : 'normal'
})

function Navbar() {
  return (
    <nav style={{
      padding: '15px',
      backgroundColor: '#f2f2f2',
      marginBottom: '20px'
    }}>
      <NavLink to="/home" style={linkStyle}>Home</NavLink>
      <NavLink to="/aboutus" style={linkStyle}>About Us</NavLink>
      <NavLink to="/todos" style={linkStyle}>Todos</NavLink>
    </nav>
  )
}

export default Navbar
