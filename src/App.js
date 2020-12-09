import { useState } from 'react';
import './App.css';
import AllNotes from './components/AllNotes';
import CreateNote from './components/CreateNote';

const App = () => {
  const [notes, setNotes] = useState([]);

  const createNote = (newNote) => {
    setNotes([...notes, newNote]);
  };
  return (
    <>
      <CreateNote createNote={createNote} /> <AllNotes notes={notes} />
    </>
  );
};

export default App;
