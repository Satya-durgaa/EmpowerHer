import { useContext, useMemo } from "react";
import { NotesContext } from "../context/NotesContext";

const NotesCount = () => {
  const { notes } = useContext(NotesContext);

  const total = useMemo(() => notes.length, [notes]);

  return <h3>Total Notes: {total}</h3>;
};

export default NotesCount;