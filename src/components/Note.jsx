import React from "react";

function Note(props) {
  function deleteNote(event) {
    event.preventDefault();
    props.onDelete([
      ...props.list.filter((note) => note.key !== props.info.key),
    ]);
  }
  return (
    <div className="note">
      <h1>{props.info.title}</h1>
      <p>{props.info.content}</p>
      <button onClick={deleteNote}>DELETE</button>
    </div>
  );
}

export default Note;
