import React from "react";

function Note(props) {
  // class can only be applied to HTML elements and not custom components!
  return <div className="note">
    <h1>{props.title}</h1>
    <p>{props.content}</p>
  </div>
}

export default Note;