# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# ReactJS-Todo

A basic ReactJS App

Presently, three components are managing the stateful behaviour in the components directory. The `InputTodo`, `TodoItem` and the `TodoContainer`.

#### Using the React Hooks

All you need to keep in mind is that you only call Hooks at the top level of your function component or from custom Hooks. Not inside a loop, condition or regular function. This ensures that your component logic is visible to React and are called in the same order on every render.

This is important so React knows how to correctly preserve the state of the Hooks between multiple calls. If your project is set up using the Create React App, this rule is automatically enforced. Else, you’d need to include an ESLint plugin called eslint-plugin-react-hooks to enforce it.

The useState() Hook allows us to add some local state in a function component. Remember, in the class component as seen earlier, we defined the local state data in the state object and then, are accessed using this.state. Likewise, they are being updated using this.setState method.

useEffect (as the name implies) is another built-in Hook that is called in a function component to add some effect to it. In other words, it is used to perform side-effects. You can think of useEffect Hook as class componentDidMount, componentDidUpdate, and componentWillUnmount combined.

Remember, earlier, we mentioned how React Hook allows us to manage related logic together instead of having them split into different class lifecycle methods. You will see how that is applied in a moment.
