# JavaScript Syntax

JavaScript syntax refers to the set of rules that define the structure of JavaScript code. Understanding these basics is essential for writing correct and efficient JavaScript programs. Here’s a breakdown of fundamental JavaScript syntax:

### 1. **Variables**

Variables store data that can be used and manipulated in your code. You declare variables using `var`, `let`, or `const`.

- **`var`**: Declares a variable with function or global scope. It has been mostly replaced by `let` and `const`.

  ```javascript
  var name = 'John';
  ```

- **`let`**: Declares a block-scoped variable that can be reassigned.

  ```javascript
  let age = 25;
  age = 26;
  ```

- **`const`**: Declares a block-scoped variable that cannot be reassigned. The variable’s value must be initialized.

  ```javascript
  const pi = 3.14;
  ```

### 2. **Data Types**

JavaScript has several built-in data types:

- **Primitive Types**:
  - **String**: Represents text.
    ```javascript
    let message = "Hello, World!";
    ```
  - **Number**: Represents both integer and floating-point numbers.
    ```javascript
    let count = 10;
    let price = 19.99;
    ```
  - **Boolean**: Represents `true` or `false`.
    ```javascript
    let isActive = true;
    ```
  - **Undefined**: Represents a variable that has not been assigned a value.
    ```javascript
    let value;
    console.log(value); // Output: undefined
    ```
  - **Null**: Represents the intentional absence of any object value.
    ```javascript
    let data = null;
    ```

- **Object Types**:
  - **Object**: Represents a collection of key-value pairs.
    ```javascript
    let person = {
      name: 'Alice',
      age: 30
    };
    ```
  - **Array**: A special type of object for storing ordered collections.
    ```javascript
    let numbers = [1, 2, 3, 4];
    ```

### 3. **Operators**

Operators perform operations on values and variables. Some common operators are:

- **Arithmetic Operators**: `+`, `-`, `*`, `/`, `%`, `++`, `--`
  ```javascript
  let sum = 5 + 3; // 8
  let product = 5 * 2; // 10
  ```

- **Comparison Operators**: `==`, `===`, `!=`, `!==`, `>`, `<`, `>=`, `<=`
  ```javascript
  let isEqual = (5 === 5); // true
  ```

- **Logical Operators**: `&&` (AND), `||` (OR), `!` (NOT)
  ```javascript
  let result = (true && false); // false
  ```

### 4. **Control Structures**

Control structures direct the flow of execution in your code.

- **Conditional Statements**: `if`, `else if`, `else`, `switch`
  ```javascript
  let day = 'Monday';

  if (day === 'Monday') {
    console.log('Start of the week');
  } else if (day === 'Friday') {
    console.log('End of the work week');
  } else {
    console.log('Middle of the week');
  }
  ```

- **Loops**: `for`, `while`, `do...while`
  ```javascript
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }

  let count = 0;
  while (count < 5) {
    console.log(count);
    count++;
  }
  ```

### 5. **Functions**

Functions are blocks of code designed to perform a particular task. They can be declared using the `function` keyword or as arrow functions.

- **Function Declaration**:
  ```javascript
  function greet(name) {
    return `Hello, ${name}!`;
  }

  console.log(greet('Alice')); // Output: Hello, Alice!
  ```

- **Arrow Function** (introduced in ES6):
  ```javascript
  const add = (a, b) => a + b;

  console.log(add(2, 3)); // Output: 5
  ```

### 6. **Events**

JavaScript can handle events such as clicks, form submissions, etc., using event listeners.

- **Event Listener**:
  ```javascript
  document.getElementById('myButton').addEventListener('click', () => {
    alert('Button clicked!');
  });
  ```

### 7. **Comments**

Comments are used to explain and annotate code. JavaScript supports single-line and multi-line comments.

- **Single-Line Comment**:
  ```javascript
  // This is a single-line comment
  ```

- **Multi-Line Comment**:
  ```javascript
  /*
    This is a multi-line comment
  */
  ```

### Summary

- **Variables**: `var`, `let`, `const`
- **Data Types**: String, Number, Boolean, Undefined, Null, Object, Array
- **Operators**: Arithmetic, Comparison, Logical
- **Control Structures**: Conditional statements, Loops
- **Functions**: Function declaration, Arrow functions
- **Events**: Event handling with event listeners
- **Comments**: Single-line and multi-line comments

Understanding these basics provides a solid foundation for writing and troubleshooting JavaScript code.