# React Lifecycle

In React, lifecycle events (or lifecycle methods) are hooks that allow you to execute code at specific points in a component's life. These events are essential for managing side effects, performing setup and cleanup, and controlling how components behave throughout their lifecycle. 

### Lifecycle Phases in React

React components have distinct phases in their lifecycle:

1. **Mounting**: When a component is being created and inserted into the DOM.
2. **Updating**: When a component is being re-rendered as a result of changes to either its props or state.
3. **Unmounting**: When a component is being removed from the DOM.

### Lifecycle Methods in Class Components

In class components, lifecycle methods are used to perform actions at different points in a component’s lifecycle. Here are the key lifecycle methods:

#### 1. Mounting
- **`constructor(props)`**: Initializes the component’s state and binds methods. Called before the component is mounted.
- **`static getDerivedStateFromProps(props, state)`**: Invoked before rendering when new props are received. Can be used to update state based on props.
- **`componentDidMount()`**: Called after the component is mounted. Ideal for fetching data, setting up subscriptions, or triggering side effects.

#### 2. Updating
- **`static getDerivedStateFromProps(props, state)`**: As mentioned above, also invoked during updates when new props are received.
- **`shouldComponentUpdate(nextProps, nextState)`**: Determines if a component should re-render. Can be used for performance optimization.
- **`render()`**: Required method that returns the JSX to be rendered.
- **`getSnapshotBeforeUpdate(prevProps, prevState)`**: Called right before the DOM is updated. Can capture information from the DOM before changes are made.
- **`componentDidUpdate(prevProps, prevState, snapshot)`**: Called after the component has updated. Ideal for handling post-update side effects.

#### 3. Unmounting
- **`componentWillUnmount()`**: Called just before the component is unmounted and destroyed. Used for cleanup tasks like removing event listeners or canceling network requests.

### Lifecycle Hooks in Functional Components with Hooks

With the introduction of React Hooks in version 16.8, functional components can now also manage side effects and state with similar capabilities to class components. Here’s how lifecycle functionality translates to functional components:

- **`useEffect` Hook**:
  - **`useEffect(() => { ... }, [])`**: Acts like `componentDidMount` and `componentDidUpdate` combined. It runs after the initial render and any subsequent updates.
  - **`useEffect(() => { return () => { ... }; }, [])`**: The return function is akin to `componentWillUnmount`. It cleans up effects when the component is unmounted or before the effect runs again.
  - **`useEffect(() => { ... }, [dependencies])`**: Runs the effect only when specified dependencies change, similar to `componentDidUpdate`.

#### Example of `useEffect` Hook

Here’s a basic example of how `useEffect` can be used in a functional component to perform side effects:

```jsx
import React, { useState, useEffect } from 'react';

function ExampleComponent() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    // This is like componentDidMount and componentDidUpdate
    document.title = `You clicked ${count} times`;

    return () => {
      // This is like componentWillUnmount
      document.title = 'React App';
    };
  }, [count]); // Only re-run the effect if count changes

  return (
    <div>
      <p>You clicked {count} times</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
    </div>
  );
}
```

### Summary

- **Class Components**: Use lifecycle methods like `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` to manage component behavior and side effects.
- **Functional Components**: Use the `useEffect` hook to handle side effects, which combines lifecycle behaviors from class components into a single, more flexible API.

Both approaches allow you to control how your components interact with the DOM and manage state and side effects throughout their lifecycle. With hooks, functional components gain powerful lifecycle capabilities, making them a more attractive option for many React developers.