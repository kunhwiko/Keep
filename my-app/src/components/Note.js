import React from "react";

function Note() {
  // class can only be applied to HTML elements and not custom components!
  return <div className="note">
    <h1>Title</h1>
    <p>Content</p>
  </div>
}

export default Note;