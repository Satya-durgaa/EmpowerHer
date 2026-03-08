import { useContext } from "react";
import { NotesContext } from "../context/NotesContext";

const NotesList = () => {
  const { notes, selectedNote, setSelectedNote } = useContext(NotesContext);

  return (
    <ul>
      {notes.map((note, index) => (
        <li
          key={index}
          onClick={() => setSelectedNote(index)}
          style={{
            cursor: "pointer",
            background: selectedNote === index ? "yellow" : "transparent"
          }}
        >
          {note}
        </li>
      ))}
    </ul>
  );
};

export default NotesList;