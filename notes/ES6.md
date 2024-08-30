# Modern JavaScript (ES6)

Modern JavaScript (ES6 and later) introduced a range of new features that enhance the language's capabilities, make code more readable, and improve developer productivity. Here's an overview of key ES6+ features and modules:

### **1. ES6+ Features**

#### **Arrow Functions**
Arrow functions provide a shorter syntax for function expressions and handle the `this` context differently from traditional functions.

- **Syntax**:
  ```javascript
  const add = (a, b) => a + b;
  ```

- **Example**:
  ```javascript
  // Traditional function
  function multiply(x, y) {
    return x * y;
  }

  // Arrow function
  const multiply = (x, y) => x * y;
  ```

#### **Template Literals**
Template literals allow for easier string interpolation and multi-line strings using backticks (`` ` ``).

- **Syntax**:
  ```javascript
  const name = 'Alice';
  const greeting = `Hello, ${name}!`;
  ```

- **Example**:
  ```javascript
  let message = `This is a multi-line
  string using template literals.`;
  ```

#### **Destructuring Assignment**
Destructuring allows unpacking values from arrays or properties from objects into distinct variables.

- **Array Destructuring**:
  ```javascript
  const [a, b, c] = [1, 2, 3];
  ```

- **Object Destructuring**:
  ```javascript
  const person = { name: 'Alice', age: 25 };
  const { name, age } = person;
  ```

#### **Default Parameters**
Default parameters allow functions to have default values if no argument is provided.

- **Syntax**:
  ```javascript
  function greet(name = 'Guest') {
    return `Hello, ${name}!`;
  }
  ```

#### **Rest and Spread Operators**
The rest operator (`...`) collects multiple elements into an array, while the spread operator (`...`) expands elements of an array or object.

- **Rest Operator**:
  ```javascript
  function sum(...numbers) {
    return numbers.reduce((acc, curr) => acc + curr, 0);
  }
  ```

- **Spread Operator**:
  ```javascript
  const arr1 = [1, 2, 3];
  const arr2 = [...arr1, 4, 5]; // arr2 is [1, 2, 3, 4, 5]

  const obj1 = { a: 1, b: 2 };
  const obj2 = { ...obj1, c: 3 }; // obj2 is { a: 1, b: 2, c: 3 }
  ```

#### **Classes**
ES6 introduced class syntax for creating objects and handling inheritance more intuitively.

- **Syntax**:
  ```javascript
  class Person {
    constructor(name, age) {
      this.name = name;
      this.age = age;
    }

    greet() {
      return `Hello, my name is ${this.name}`;
    }
  }

  const person = new Person('Alice', 25);
  ```

#### **Modules**
Modules allow code to be divided into separate files with export and import functionality.

- **Exporting**:
  ```javascript
  // lib.js
  export const pi = 3.14;
  export function add(x, y) {
    return x + y;
  }
  ```

- **Importing**:
  ```javascript
  // app.js
  import { pi, add } from './lib.js';
  console.log(pi); // 3.14
  console.log(add(2, 3)); // 5
  ```

#### **Promises**
Promises represent the eventual result of an asynchronous operation and are used for handling asynchronous code more effectively.

- **Syntax**:
  ```javascript
  const promise = new Promise((resolve, reject) => {
    // Asynchronous operation
    if (success) {
      resolve('Success');
    } else {
      reject('Error');
    }
  });

  promise
    .then(result => console.log(result))
    .catch(error => console.error(error));
  ```

#### **Async/Await**
Async/await syntax provides a way to work with promises in a more synchronous fashion, making asynchronous code easier to write and read.

- **Syntax**:
  ```javascript
  async function fetchData() {
    try {
      let response = await fetch('https://api.example.com/data');
      let data = await response.json();
      console.log(data);
    } catch (error) {
      console.error('Error fetching data:', error);
    }
  }
  ```

### **2. JavaScript Modules**

JavaScript modules help in organizing code by separating it into different files, improving maintainability and reusability. ES6 introduced a standardized module system.

#### **Exporting Modules**

- **Named Exports**: Allows multiple exports from a module.
  ```javascript
  // math.js
  export const add = (a, b) => a + b;
  export const subtract = (a, b) => a - b;
  ```

- **Default Exports**: Allows a single export per module, which can be any value or function.
  ```javascript
  // greet.js
  export default function greet(name) {
    return `Hello, ${name}!`;
  }
  ```

#### **Importing Modules**

- **Named Imports**:
  ```javascript
  // main.js
  import { add, subtract } from './math.js';
  console.log(add(2, 3)); // 5
  console.log(subtract(5, 3)); // 2
  ```

- **Default Import**:
  ```javascript
  // main.js
  import greet from './greet.js';
  console.log(greet('Alice')); // Hello, Alice!
  ```

- **Renaming Imports**:
  ```javascript
  import { add as addition, subtract as subtraction } from './math.js';
  console.log(addition(2, 3)); // 5
  ```

#### **Dynamic Imports**
Dynamic imports allow you to load modules asynchronously.

- **Syntax**:
  ```javascript
  async function loadModule() {
    const module = await import('./module.js');
    module.someFunction();
  }
  ```

### **Summary**

- **Arrow Functions**: Shorter syntax for functions, lexical `this`.
- **Template Literals**: String interpolation and multi-line strings.
- **Destructuring**: Extract values from arrays or objects into variables.
- **Default Parameters**: Default values for function parameters.
- **Rest/Spread Operators**: Collect arguments into an array or spread elements in arrays/objects.
- **Classes**: Object-oriented programming syntax.
- **Modules**: Code organization using `export` and `import`.
- **Promises**: Handle asynchronous operations.
- **Async/Await**: Synchronous-like syntax for working with promises.
- **Dynamic Imports**: Load modules on demand.

These modern features and modules improve code organization, readability, and functionality, making it easier to write robust and maintainable JavaScript applications.