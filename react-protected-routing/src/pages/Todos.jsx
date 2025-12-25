
import { useEffect,useState } from "react";
import { useNavigate } from "react-router-dom";

export default function Todos(){
  const [todos,setTodos]=useState([]);
  const navigate=useNavigate();

  useEffect(()=>{
    fetch("https://jsonplaceholder.typicode.com/todos")
      .then(res=>res.json())
      .then(data=>setTodos(data.slice(0,10)));
  },[]);

  const logout=()=>{
    localStorage.removeItem("isLoggedIn");
    navigate("/login");
  };

  return (
    <div className="container">
      <h2>Todos</h2>
      <button onClick={logout}>Logout</button>
      <ul>
        {todos.map(t=>(
          <li key={t.id} className="todo" onClick={()=>navigate(`/todos/${t.id}`)}>
            {t.title}
          </li>
        ))}
      </ul>
    </div>
  );
}
