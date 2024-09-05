# Jest Unit Testing

Jest is a powerful testing framework commonly used with JavaScript projects, including those involving React, Node.js, and other environments. It’s well-suited for unit testing, integration testing, and even snapshot testing.

Unit testing focuses on testing individual components or functions in isolation. Jest is particularly strong in this area due to its easy-to-use assertions and mocking capabilities.

Let's go through a simple example of unit testing in JavaScript using Jest. We'll cover the basics of setting up Jest, writing a function, and creating a test for it.

### Setup

1. **Install Jest**

   If you haven’t already, you need to install Jest. You can do this using npm:

   ```bash
   npm install --save-dev jest
   ```

   Alternatively, if you're using Yarn:

   ```bash
   yarn add --dev jest
   ```

2. **Add a Test Script**

   In your `package.json` file, add a test script to run Jest:

   ```json
   "scripts": {
     "test": "jest"
   }
   ```

### Example Code

Let’s create a simple function and write a test for it.

1. **Create a Function**

   Create a file called `math.js` with a simple function that we want to test:

   ```javascript
   // math.js
   function add(a, b) {
     return a + b;
   }

   module.exports = add;
   ```

2. **Write a Test**

   Create a file called `math.test.js` in the same directory:

   ```javascript
   // math.test.js
   const add = require('./math');

   test('adds 1 + 2 to equal 3', () => {
     expect(add(1, 2)).toBe(3);
   });

   test('adds 0 + 0 to equal 0', () => {
     expect(add(0, 0)).toBe(0);
   });

   test('adds -1 + 1 to equal 0', () => {
     expect(add(-1, 1)).toBe(0);
   });
   ```

### Running the Tests

To run your tests, use the following command:

```bash
npm test
```

or if you're using Yarn:

```bash
yarn test
```

### What’s Happening

- **Function (`math.js`)**: This is where you define the functionality you want to test.
- **Test File (`math.test.js`)**: This file contains the test cases for your function. Each `test` block describes a specific behavior you expect from the function. The `expect` function is used to define the expected output, and `toBe` is a matcher that checks if the output matches the expected result.

### Additional Features

Jest provides a comprehensive set of features for different types of testing:

- **Unit Testing**: Verify individual functions or components.
- **Integration Testing**: Test how components work together.
- **Mocking**: Isolate tests from external dependencies.
- **Snapshot Testing**: Ensure outputs remain consistent over time.
- **Asynchronous Testing**: Handle promises and async code.