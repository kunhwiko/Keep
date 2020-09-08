import React, {useState} from "react";
import DeleteIcon from "@material-ui/icons/Delete";

function Note(props) {
  const [colorIndex, setColorIndex] = useState(0);
  const colors = ["#f5ba13","#FFB6C1","#93ed9b", "#93daed", "#cc93ed"];

  function handleClick() {
    props.onDelete(props.id);
  }

  function changeColorIndex() {
    setColorIndex((prevValue) => {
      return prevValue == colors.length-1 ? 0 : prevValue + 1;
    });
  }

  return (
    <div style = {{backgroundColor:colors[colorIndex]}} className="note">
      <button style = {{backgroundColor:colors[colorIndex]}} className="color-button" onClick={changeColorIndex}></button>
      <h1>{props.title}</h1>
      <p>{props.content}</p>
      <button style = {{backgroundColor:colors[colorIndex]}} className="delete-button" onClick={handleClick}>
        <DeleteIcon />
      </button>
    </div>
  );
}

export default Note;
