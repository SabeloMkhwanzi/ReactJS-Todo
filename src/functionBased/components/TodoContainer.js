import React, { useState, useEffect } from "react";
import Header from "./Header";
import InputTodo from "./InputTodo";
import TodosList from "./TodosList";
import { v4 as uuidv4 } from "uuid";
import { Route, Switch } from "react-router-dom";

import About from "../pages/About";
import NotMatch from "../pages/NotMatch";
import Navbar from "./Navbar";

/*
This file manages a state and two of the lifecycle methods, componentDidmount() and componentDidUpdate().

To replicate their respective logic and have a full grasp of the Hooks, you need to start thinking in terms of effects and not from the angle of substituting the class lifecycle methods.

In the file, let’s start by converting the state logic to use the useState Hook.
*/
const TodoContainer = () => {
  const [todos, setTodos] = useState(getInitialTodos());

  const handleChange = (id) => {
    setTodos((prevState) =>
      prevState.map((todo) => {
        if (todo.id === id) {
          return {
            ...todo,
            completed: !todo.completed,
          };
        }
        return todo;
      })
    );
  };

  const delTodo = (id) => {
    setTodos([
      ...todos.filter((todo) => {
        return todo.id !== id;
      }),
    ]);
  };

  const addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    setTodos([...todos, newTodo]);
  };

  const setUpdate = (updatedTitle, id) => {
    setTodos(
      todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      })
    );
  };

  /* In the class version, we are storing the input todos 
    items inside the local storage by calling the componentDidUpdate() method. Likewise,
    we are getting the stored items on-mount by calling the componentDidmount().
    But in a function component, we cannot use these methods. 
   Instead, we will make use of the useEffect.
   */

  /**
    This useEffect Hook takes in a function as an argument
    and an optional array (I omitted that for now).
    The function defines the side effect to run (in our case,.
    storing and reading todos items to and from the local storage)
    and the optional array will define when to re-run the effect.
    By default, this effect run after every completed render.
    That is, on the first render and after every state or prop changes. 
    */

  /*
   This array let you specify some dependencies.
   You can also leave it empty BUT ONLY if your effect doesn’t use any value from the rendered scope. In other words, the effect does not use values from inside your component.
   Should in case you are using any of the component value (like props, state or even functions) in the effect, you must add them as dependencies in the array.
   This way, if and only if any of the value(s) changes between re-renders, React will re-run the effect. Else it skips applying the effect.
   That is how to look at the effect Hook.
   Yes, React skips any form of re-rendering and only execute the effect ONES if you do not specify any dependency in the array, making it empty. This is synonymous to the componentDidMount in the class component.
   But don’t look at it from that angle. You might be tempted to leave the array empty while you have component values being used by the effects. This way, the impression you are given React is that your effect doesn’t depend on any value from inside the component. Whereas, it does.
   Leave React to decide when to do the re-run. Your job is to pass every necessary hint i.e dependencies through the array if you need to control the effect.
  */
  // useEffect(() => {
  //   console.log("run run");
  //   // getting stored items
  //   const temp = localStorage.getItem("todos");
  //   const loadedTodos = JSON.parse(temp);

  //   if (loadedTodos) {
  //     setTodos(loadedTodos);
  //   }
  // }, []);

  function getInitialTodos() {
    // get stared items

    const temp = localStorage.getItem("todos");
    const savedTods = JSON.parse(temp);
    return savedTods || [];
  }

  //Note: Like the useState(), we can use multiple useEffect() calls.

  useEffect(() => {
    // storing todos items
    const temp = JSON.stringify(todos);
    localStorage.setItem("todos", temp);
  }, [todos]);

  return (
    <>
      <Navbar />
      <Switch>
        <Route exact path="/">
          <div className="container">
            <div className="inner">
              <Header />
              <InputTodo addTodoProps={addTodoItem} />
              <TodosList
                todos={todos}
                handleChangeProps={handleChange}
                deleteTodoProps={delTodo}
                setUpdate={setUpdate}
              />
            </div>
          </div>
        </Route>
        <Route path="/about">
          <About />
        </Route>
        <Route path="*">
          <NotMatch />
        </Route>
      </Switch>
    </>
  );
};

export default TodoContainer;
