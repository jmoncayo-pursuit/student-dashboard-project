// NoteForm.jsx
// Component for the form used to add new 1-on-1 notes.

import React, { useState } from "react";

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
    <form onSubmit={handleSubmit}>
      <label>
        Commenter:
        <input type="text" value={commenter} onChange={(e) => setCommenter(e.target.value)} />
      </label>
      <label>
        Comment:
        <textarea value={comment} onChange={(e) => setComment(e.target.value)} />
      </label>
      <button type="submit" className="notes-btn">Add Note</button>
    </form>
  );
};

export default NoteForm;
