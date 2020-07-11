import React from "react";
import DeleteIcon from "@material-ui/icons/Delete";

// Komponen ini adalah sebuah note yang telah dibuat dari user dan menampilkan note yang tersimpan

function Note(props) {
  function handleClick() {
    props.onDelete(props.id);
  }

  return (
    <div className="note">
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
