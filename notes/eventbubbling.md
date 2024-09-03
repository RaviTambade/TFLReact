# Event Bubbling

In React, event handling follows a model similar to the native DOM, but with some important differences due to the way React handles events. Understanding event bubbling and how to manage it in React is crucial for effective event handling.

### What is Event Bubbling?

Event bubbling is a concept from the DOM API where events propagate from the innermost element to the outer elements. For instance, if you click on a button that is inside a `<div>`, the click event will first trigger on the button and then bubble up to the `<div>`, and so on up the DOM tree.

### How React Handles Events

In React, events are handled in a way that resembles the native DOM events but with synthetic events. React's SyntheticEvent is a cross-browser wrapper around the native event, which provides consistent behavior across different browsers.

### Basic Event Bubbling in React

Here's a basic example demonstrating event bubbling in React:

```jsx
import React from 'react';

function App() {
  const handleClick = (event) => {
    alert('Button clicked');
    // event.stopPropagation(); // Uncomment to stop bubbling
  };

  const handleDivClick = () => {
    alert('Div clicked');
  };

  return (
    <div onClick={handleDivClick} style={{ padding: '20px', backgroundColor: 'lightblue' }}>
      <button onClick={handleClick}>Click Me</button>
    </div>
  );
}

export default App;
```

### Explanation

- **Button Click**: When the button is clicked, the `handleClick` function will execute first, showing the alert "Button clicked".
- **Event Bubbling**: After the `handleClick` function executes, the event will bubble up to the `<div>`, triggering the `handleDivClick` function and showing the alert "Div clicked".

### Stopping Event Bubbling

Sometimes you may want to stop the event from bubbling up to parent elements. This can be done using the `event.stopPropagation()` method. Here's how you can modify the example to stop the bubbling:

```jsx
const handleClick = (event) => {
  event.stopPropagation(); // Prevents the event from bubbling up
  alert('Button clicked');
};
```

### Summary

- **Event Bubbling**: Events trigger on the innermost element first and then propagate up the DOM tree.
- **React SyntheticEvent**: React uses SyntheticEvent, which normalizes events for cross-browser compatibility.
- **Stopping Bubbling**: Use `event.stopPropagation()` to prevent the event from propagating to parent elements.

Understanding and controlling event bubbling in React allows you to handle events more precisely and manage complex interactions within your components.