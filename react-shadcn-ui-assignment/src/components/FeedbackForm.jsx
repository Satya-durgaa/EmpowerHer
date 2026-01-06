import { useState } from "react";

export default function FeedbackForm() {
  const [data, setData] = useState(null);
  const [form, setForm] = useState({ name: "", email: "", feedback: "" });

  const submit = () => setData(form);

  return (
    <div>
      <h2>Feedback Form</h2>
      <input placeholder="Name" onChange={e => setForm({...form, name: e.target.value})} />
      <input placeholder="Email" onChange={e => setForm({...form, email: e.target.value})} />
      <textarea placeholder="Feedback" onChange={e => setForm({...form, feedback: e.target.value})} />
      <button onClick={submit}>Submit</button>

      {data && <pre>{JSON.stringify(data, null, 2)}</pre>}
    </div>
  );
}