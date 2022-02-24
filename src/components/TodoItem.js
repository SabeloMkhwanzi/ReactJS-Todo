import React from "react";

function TodoItem(props) {
  return (
    <li>
      <input
        type="checkbox"
        checked={props.todo.complete}
        onChange={() => props.handleChangeProps(props.todo.id)}
      />
      {props.todo.title}
    </li>
  );
}

export default TodoItem;
