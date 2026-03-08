import NoteInput from "./components/NoteInput";
import NotesList from "./components/NotesList";
import NotesCount from "./components/NotesCount";

function App() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Notes Dashboard</h1>
      <NoteInput />
      <NotesCount />
      <NotesList />
    </div>
  );
}

export default App;