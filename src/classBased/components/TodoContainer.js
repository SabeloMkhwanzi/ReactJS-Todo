import React from "react";
import TodosList from "./TodosList";
import Header from "./Header";
import InputTodo from "./InputTodo";
import { v4 as uuidv4 } from "uuid";

class TodoContainer extends React.Component {
  handleChange = (id) => {
    this.setState((prevState) => ({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id)
          return {
            ...todo,
            completed: !todo.completed,
          };
        return todo;
      }),
    }));
  };

  delTodo = (id) => {
    this.setState({
      todos: [
        ...this.state.todos.filter((todo) => {
          return todo.id !== id;
        }),
      ],
    });
  };

  // we can update the state.
  //Back to the TodoContainer component,
  //update the addTodoItem() method so you have:

  addTodoItem = (title) => {
    const newTodo = {
      id: uuidv4(),
      title: title,
      completed: false,
    };
    this.setState({
      todos: [...this.state.todos, newTodo],
    });
  };

  setUpdate = (updatedTitle, id) => {
    this.setState({
      todos: this.state.todos.map((todo) => {
        if (todo.id === id) {
          todo.title = updatedTitle;
        }
        return todo;
      }),
    });
  };

  //componentDidMount(). This is because you’ll often perform some sort of effects (or side-effects).
  //For instance, making a network request,
  //subscriptions, setting up a timer,
  //setting up event listeners etc are examples of side
  //effects that you can perform in this method

  //on component mounts (i.e on page reload or on a subsequent visit),
  //we will check if there are to-dos items present in the local storage,
  // then, we grab them. This sounds like the logic should be in the componentDidMount lifecycle.
  componentDidUpdate(prevProps, prevState) {
    if (prevState.todo !== this.state.todos) {
      const temp = JSON.stringify(this.state.todos);
      localStorage.setItem("todos", temp);
    }
  }

  //we will get the stored item(s)
  //and add back to the view once component mount.
  componentDidMount() {
    const temp = localStorage.getItem("todos");
    const loadedTodos = JSON.parse(temp);
    if (loadedTodos) {
      this.setState({
        todos: loadedTodos,
      });
    }
  }

  state = {
    todos: [],
  };

  render() {
    return (
      <div className="container">
        <div className="inner">
          <Header />
          <InputTodo addTodoProps={this.addTodoItem} />
          <TodosList
            todos={this.state.todos}
            handleChangeProps={this.handleChange}
            deleteTodoProps={this.delTodo}
            setUpdate={this.setUpdate}
          />
        </div>
      </div>
    );
  }
}
export default TodoContainer;
