// NoteForm.jsx
// Component for the form used to add new 1-on-1 notes.

import React, { useState } from "react";
import "./NoteForm.scss"

const NoteForm = ({ onAddNote }) => {
  const [commenter, setCommenter] = useState("");
  const [comment, setComment] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    const newNote = { commenter, comment };
    onAddNote(newNote);
    setCommenter("");
    setComment("");
  };

  return (
    <form onSubmit={handleSubmit} className="note-form">
      <div className="form-group">
        <label htmlFor="commenter">Commenter:</label>
        <input type="text" id="commenter" value={commenter} onChange={(e) => setCommenter(e.target.value)} />
      </div>
      <div className="form-group">
        <label htmlFor="comment">Comment:</label>
        <textarea id="comment" value={comment} onChange={(e) => setComment(e.target.value)} />
      </div>
      <button type="submit" className="notes-btn">Add Note</button>
    </form>
  );
};

export default NoteForm;