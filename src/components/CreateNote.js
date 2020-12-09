import React, { useState } from 'react';

const CreateNote = ({ createNote }) => {
  const [note, setNote] = useState('');

  const noteHandler = (e) => {
    setNote(e.target.value);
  };
  const submitNote = (e) => {
    e.preventDefault();
    const data = {
      note,
      id: Math.floor(Math.random() * 1000),
      date: new Date().toJSON().slice(0, 10),
      isImportant: false,
    };
    createNote(data);
  };

  return (
    <form action="note" onSubmit={submitNote}>
      <textarea
        name="note"
        id="note"
        cols="30"
        rows="10"
        value={note}
        onChange={noteHandler}
        placeholder="Write your note here"
      ></textarea>
      <button type="submit">Add Note</button>
    </form>
  );
};

export default CreateNote;
