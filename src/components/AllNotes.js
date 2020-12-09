import React from 'react';
import Note from './Note';

const AllNotes = ({ notes }) => {
  return (
    <>
      {notes.map((note) => (
        <Note key={note.id} note={note} />
      ))}
    </>
  );
};

export default AllNotes;
