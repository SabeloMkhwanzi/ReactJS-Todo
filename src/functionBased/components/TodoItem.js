import React, { useState, useEffect } from "react";
import styles from "./TodoItem.module.css";
import { FaTrash } from "react-icons/fa";

/*
Performing the componentWillUnmount logic in the function component
So when the component is about to be destroyed React calls the method so it could perform the cleanup.

useEffect Hook works a bit different.

This Hook, as we already know run on every render by default. It also performs a cleanup effect from the previous render before another cycle and of course before the component is unmounted. This helps prevent bugs in your component.

*/
const TodoItem = (props) => {
  const [editing, setEditing] = useState(false);

  const handleEditing = () => {
    setEditing(true);
  };

  const handleUpdatedDone = (event) => {
    if (event.key === "Enter") {
      setEditing(false);
    }
  };

  const completedStyle = {
    fontStyle: "italic",
    color: "#595959",
    opacity: 0.4,
    textDecoration: "line-through",
  };

  const { completed, id, title } = props.todo;

  let viewMode = {};
  let editMode = {};

  if (editing) {
    viewMode.display = "none";
  } else {
    editMode.display = "none";
  }

  /*
  Anytime you return a function inside the useEffect Hook, and then have no dependency in the array, the effect will run just once and the return function will be called when the component is about to unmount.

However, if we do not specify an array, the effect goes back to default. That is, it executes on every re-render and performs the cleanup before it runs the next time and of course before the component unmount.

In this case, in our app, you’ll be seeing the log message on every interaction with the todos items. Whether you toggle the checkbox, edit an item, delete or input new items, you’ll see the log message in the console.

We didn’t want that. So, we had to add an array of dependencies. But this time, no component value was specified in the effect. Hence the array is empty.

At this point, you have total control over the type of component to create. We can now manage the stateful logic in a function component. 
   */

  useEffect(() => {
    return () => {
      console.log("Cleaning up...");
    };
  }, []);

  return (
    <li className={styles.item}>
      <div onDoubleClick={handleEditing} style={viewMode}>
        <input
          type="checkbox"
          className={styles.checkbox}
          checked={completed}
          onChange={() => props.handleChangeProps(id)}
        />
        <button onClick={() => props.deleteTodoProps(id)}>
          <FaTrash style={{ color: "orangered", fontSize: "16px" }} />
        </button>
        <span style={completed ? completedStyle : null}>{title}</span>
      </div>
      <input
        type="text"
        style={editMode}
        className={styles.textInput}
        value={title}
        onChange={(e) => {
          props.setUpdate(e.target.value, id);
        }}
        onKeyDown={handleUpdatedDone}
      />
    </li>
  );
};

export default TodoItem;
