
import { useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");
  const [error,setError]=useState("");
  const navigate = useNavigate();

  const login=(e)=>{
    e.preventDefault();
    if(email==="admin@gmail.com" && password==="admin@123"){
      localStorage.setItem("isLoggedIn",true);
      navigate("/todos");
    } else {
      setError("Invalid email or password");
    }
  };

  return (
    <div className="container">
      <h2>Login</h2>
      <form onSubmit={login}>
        <input placeholder="Email" onChange={e=>setEmail(e.target.value)} />
        <input type="password" placeholder="Password" onChange={e=>setPassword(e.target.value)} />
        <button>Login</button>
      </form>
      {error && <p className="error">{error}</p>}
    </div>
  );
}
