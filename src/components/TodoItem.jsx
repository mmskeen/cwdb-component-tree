import React from "react";

function TodoItem({ onChecked, text, id }) {
  return <li onClick={() => onChecked(id)}>{text}</li>;
}

export default TodoItem;
