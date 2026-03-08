import { useState, useRef, useEffect, useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const NoteInput = () => {
  const [input, setInput] = useState("");
  const { addNote } = useContext(NotesContext);
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  const handleAdd = () => {
    if (!input.trim()) return;
    addNote(input);
    setInput("");
  };

  return (
    <div>
      <input
        ref={inputRef}
        value={input}
        onChange={(e) => setInput(e.target.value)}
        placeholder="Enter note"
      />
      <button onClick={handleAdd}>Add Note</button>
    </div>
  );
};

export default NoteInput;