// OneOnOneSection.jsx
// Component to display 1-on-1 notes for a student, including a form for adding new notes and a list of previous notes.

import React, { useState } from "react";
import NoteForm from "./NoteForm";

const OneOnOneSection = ({ student }) => {
  const [notes, setNotes] = useState([]);

  const handleAddNote = (newNote) => {
    setNotes([...notes, newNote]);
  };

  return (
    <div className="one-on-one-section">
      <h3>1-on-1 Notes</h3>
      <NoteForm onAddNote={handleAddNote} />
      <div className="notes-list">
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
