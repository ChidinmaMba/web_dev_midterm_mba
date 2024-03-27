import React, { useState } from "react";
import Header from "./Header";
import Footer from "./Footer";
import Note from "./Note";
import notes from "../notes";

function App() {
  const [notesList, setNotesList] = useState(notes);

  function addNote(event) {
    event.preventDefault();
    const newNote = {
      key: Date.now(),
      title: event.target.title.value,
      content: event.target.content.value,
    };
    setNotesList([newNote, ...notesList]);
    event.target.title.value = "";
    event.target.content.value = "";
  }

  return (
    <div>
      <Header />
      <div className="notes">
        <form onSubmit={addNote}>
          <input name="title" placeholder="Title" />
          <br />
          <textarea name="content" placeholder="Take a note..."></textarea>
          <button type="submit">Add</button>
        </form>
        <div>
          {notesList.map((note) => {
            return (
              <Note
                key={note.key}
                info={note}
                list={notesList}
                onDelete={setNotesList}
              />
            );
          })}
        </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
