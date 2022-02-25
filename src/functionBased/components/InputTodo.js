import React, { useState } from "react";
import { FaPlusCircle } from "react-icons/fa";

const InputTodo = (props) => {
  /*What’s happening in the code?
Remember, in the class version, we declared a state object where we assigned a key-value pair. But now, we are doing this using the useState React Hook.

Here, instead of using this.state to access the current state value, we simply use the variable, title. Likewise, we are now updating the state using the second element returned by the useState.

As seen in the onChange and handleSubmit function, we are using the setTitle instead of this.setState used in the class component. 

Note: this keyword in a class component does not exist in a function component.

This also applies to the methods in the class component (onChange and handleSubmit).
 Remember we cannot use class methods in a 
function but we can define functions in a function.

*/

  const [title, setTitle] = useState("");

  const onChange = (e) => {
    setTitle(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (title.trim()) {
      props.addTodoProps(title);
      setTitle("");
    } else {
      alert("Please write item");
    }
  };
  return (
    <form onSubmit={handleSubmit} className="form-container">
      <input
        type="text"
        className="input-text"
        placeholder="Add todo..."
        value={title}
        name="title"
        onChange={onChange}
      />
      <button className="input-submit">
        <FaPlusCircle />
      </button>
    </form>
  );
};

export default InputTodo;
