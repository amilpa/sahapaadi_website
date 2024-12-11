import { useState } from "react";
import Card from "./Card";
import { useEffect } from "react";

import { db } from "../config/firebase";
import { collection } from "firebase/firestore";

import { getDocs } from "firebase/firestore";

export default function Dashboard() {
  const [notes, setNotes] = useState([
    {
      id: 1,
      text: "Dandi march",
      date: "10/11/2024",
      yellow: true,
    },
    {
      id: 2,
      text: "Newton's Laws of motion",
      date: "12/11/2024",
      yellow: false,
    },
    {
      id: 3,
      text: "Thermodynamics",
      date: "24/11/2024",
      yellow: true,
    },
    {
      id: 4,
      text: "Photosynthesis",
      date: "30/11/2024",
      yellow: false,
    },
  ]);

  const [fetchNotes, setFetchNotes] = useState([]);

  useEffect(() => {
    const fetchNotes = async () => {
      const notesCollection = collection(db, "notes");
      const notesSnapshot = await getDocs(notesCollection);
      console.log(notesSnapshot);
      const notesList = notesSnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setFetchNotes(notesList);
    };

    fetchNotes();
  }, []);

  function handleDelete(id) {
    console.log("Deleting");
    let new_notes = notes.filter((note) => note.id !== id);
    setNotes(new_notes);
  }

  return (
    <div className="px-16">
      <h1 className="text-black font-semibold text-3xl font-mono mt-6">
        All notes
      </h1>
      <div className="mt-6 grid grid-cols-3 gap-y-6">
        {notes.map((note) => (
          <Card
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDelete={handleDelete}
            yellow={note.yellow}
          />
        ))}
        {fetchNotes.map((note) => (
          <Card
            key={note.id}
            id={note.id}
            text={note.text}
            date={note.date}
            handleDelete={handleDelete}
            yellow={note.yellow}
          />
        ))}
      </div>
    </div>
  );
}
