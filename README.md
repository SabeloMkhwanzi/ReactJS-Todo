# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

# ReactJS-Todo

A basic ReactJS App

This React tutorial React for beginners series. [Full Tutorial here by Ibaslogic](https://ibaslogic.com/react-tutorial-for-beginners/)  

* React Tutorial: The Beginner's Guide to Learning React in 2022
* Working with React Form and Handling Event 3 – How to implement CSS in Reactjs App
* How to Edit Todos Items
* Persisting React State in Local Storage
* Getting Started With React Lifecycle Methods
* Getting Started With React Hooks
* Routing With React Router
* How to add Hamburger Menu in React
* Deploying React App to GitHub Pages

Presently, three components are managing the stateful behaviour in the components directory. The `InputTodo`, `TodoItem` and the `TodoContainer`.

#### Using the React Hooks

All you need to keep in mind is that you only call Hooks at the top level of your function component or from custom Hooks. Not inside a loop, condition or regular function. This ensures that your component logic is visible to React and are called in the same order on every render.

This is important so React knows how to correctly preserve the state of the Hooks between multiple calls. If your project is set up using the Create React App, this rule is automatically enforced. Else, you’d need to include an ESLint plugin called eslint-plugin-react-hooks to enforce it.

The useState() Hook allows us to add some local state in a function component. Remember, in the class component as seen earlier, we defined the local state data in the state object and then, are accessed using this.state. Likewise, they are being updated using this.setState method.

useEffect (as the name implies) is another built-in Hook that is called in a function component to add some effect to it. In other words, it is used to perform side-effects. You can think of useEffect Hook as class componentDidMount, componentDidUpdate, and componentWillUnmount combined.

Remember, earlier, we mentioned how React Hook allows us to manage related logic together instead of having them split into different class lifecycle methods. You will see how that is applied in a moment.

#### React Router

In React, we use React router to keep track of the current URL and renders different views as it changes. It is a third party library that allows us to seamlessly perform routing in React app.

This routing can either be a client-side (in our case) or server-side rendering.

React router, just like React has different but close implementations in the web environment and the native environment.

Installation
`npm install react-router-dom`

This library gives us all the tools and components we need to implement routing in our React app. For React native (mobile) app, you would install the react-router-native instead.
