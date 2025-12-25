
import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div className="container">
      <h1>Welcome to Home Page</h1>
      <Link to="/login">Go to Login</Link>
    </div>
  );
}
