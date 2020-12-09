import React from 'react';

const Note = ({ note }) => {
  return (
    <div
      style={{ border: '2px solid #333', margin: '5px', textAlign: 'center' }}
    >
      <div>
        <h3>{note.date}</h3>
        <h3>{note.id}</h3>
        <h3>{note.note}</h3>
      </div>
      <div>
        <button>Add</button>
      </div>
    </div>
  );
};

export default Note;
