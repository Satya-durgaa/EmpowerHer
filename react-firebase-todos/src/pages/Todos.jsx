import { useAuth } from "../context/AuthContext";

export default function Todos() {
  const { user, logout } = useAuth();
  return (
    <div>
      <h1>Todos Dashboard</h1>
      <p>User: {user?.email}</p>
      <button onClick={logout}>Logout</button>
    </div>
  );
}