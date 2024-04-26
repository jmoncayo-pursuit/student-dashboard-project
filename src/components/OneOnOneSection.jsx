// OneOnOneSection.jsx
// Component to display 1-on-1 notes for a student, including a form for adding new notes and a list of previous notes.

import React, { useState, useEffect } from "react";
import NoteForm from "./NoteForm";

const OneOnOneSection = ({ student, onCloseNotes }) => {
  const [notes, setNotes] = useState([]);

  useEffect(() => {
    const storedNotes = localStorage.getItem(`notes_${student.username}`);
    if (storedNotes) {
      setNotes(JSON.parse(storedNotes));
    }
  }, [student]);

  const handleAddNote = (newNote) => {
    const updatedNotes = [...notes, newNote];
    setNotes(updatedNotes);
    
    localStorage.setItem(`notes_${student.username}`, JSON.stringify(updatedNotes));
  };

  return (
    <div className="one-on-one-section">
      <h3>1-on-1 Notes</h3>
      <button className="close-notes-btn notes-btn" onClick={onCloseNotes}>Close Notes</button>
      <NoteForm onAddNote={handleAddNote} />
      <div className={`notes-list ${notes.length > 1 ? "scrollable-notes" : ""}`}>
        {notes.map((note, index) => (
          <div key={index} className="note">
            <p><strong>Commenter:</strong> {note.commenter}</p>
            <p><strong>Comment:</strong> {note.comment}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default OneOnOneSection;