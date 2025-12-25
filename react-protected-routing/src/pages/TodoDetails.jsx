
import { useParams } from "react-router-dom";
import { useEffect,useState } from "react";

export default function TodoDetails(){
  const { todoId } = useParams();
  const [todo,setTodo]=useState(null);

  useEffect(()=>{
    fetch(`https://jsonplaceholder.typicode.com/todos/${todoId}`)
      .then(res=>res.json())
      .then(setTodo);
  },[todoId]);

  if(!todo) return <p>Loading...</p>;

  return (
    <div className="container">
      <h2>Todo Details</h2>
      <p>ID: {todo.id}</p>
      <p>Title: {todo.title}</p>
      <p>Status: {todo.completed ? "Completed" : "Not Completed"}</p>
    </div>
  );
}
