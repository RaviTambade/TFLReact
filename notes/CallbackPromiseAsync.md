
# JavaScript callbacks, promisesand async/await

### 1. **Callbacks**

**Callbacks** are functions passed as arguments to other functions and are executed after the completion of an asynchronous operation. They provide a way to continue execution after the asynchronous task is done.

#### How Callbacks Work

When an asynchronous operation is initiated, you provide a callback function that should be executed when the operation completes.

```javascript
function fetchData(callback) {
  setTimeout(() => {
    let data = "Sample Data";
    callback(null, data); // Callback is called with no error and the data
  }, 1000);
}

fetchData((error, result) => {
  if (error) {
    console.error('Error:', error);
    return;
  }
  console.log('Result:', result); // Output after 1 second: Result: Sample Data
});
```

#### Issues with Callbacks

- **Callback Hell**: Nested callbacks can lead to complex and hard-to-read code.
- **Error Handling**: Managing errors across multiple callbacks can be cumbersome.

### 2. **Promises**

**Promises** represent the eventual completion (or failure) of an asynchronous operation and its resulting value. They provide a more manageable approach to handle asynchronous operations compared to callbacks.

#### Promise States

- **Pending**: The initial state of a promise. The operation has not completed yet.
- **Fulfilled**: The operation completed successfully.
- **Rejected**: The operation failed with an error.

#### Creating and Using Promises

```javascript
let promise = new Promise((resolve, reject) => {
  setTimeout(() => {
    let data = "Sample Data";
    resolve(data); // Promise is resolved with the data
  }, 1000);
});

promise
  .then(result => {
    console.log('Result:', result); // Output after 1 second: Result: Sample Data
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

#### Chaining Promises

Promises can be chained to perform multiple asynchronous operations in sequence.

```javascript
fetchData()
  .then(result => {
    console.log('First result:', result);
    return anotherAsyncOperation();
  })
  .then(secondResult => {
    console.log('Second result:', secondResult);
  })
  .catch(error => {
    console.error('Error:', error);
  });
```

### 3. **Async/Await**

**Async/await** is syntactic sugar built on top of promises, introduced in ES2017 (ES8). It provides a more synchronous way to write asynchronous code, making it easier to read and maintain.

#### Using `async` and `await`

- **`async` Function**: A function declared with `async` always returns a promise. Inside this function, you can use `await` to pause execution until the promise is resolved or rejected.

- **`await` Keyword**: Used inside `async` functions to pause execution until the promise resolves, returning the resolved value or throwing an error.

#### Example

```javascript
async function fetchData() {
  return new Promise((resolve, reject) => {
    setTimeout(() => {
      resolve("Sample Data");
    }, 1000);
  });
}

async function getData() {
  try {
    let result = await fetchData();
    console.log('Result:', result); // Output after 1 second: Result: Sample Data
  } catch (error) {
    console.error('Error:', error);
  }
}

getData();
```

#### Benefits of Async/Await

- **Readability**: Code is easier to read and write, resembling synchronous code.
- **Error Handling**: Easier to handle errors using `try/catch` blocks.

### Summary

- **Callbacks**: Functions passed as arguments to be executed after an asynchronous task completes. Can lead to callback hell and complex error handling.
- **Promises**: Objects representing the future result of an asynchronous operation. Provide better control over asynchronous operations compared to callbacks and support chaining and error handling.
- **Async/Await**: Syntactic sugar over promises that simplifies writing and understanding asynchronous code. Allows for a more synchronous style of coding with straightforward error handling.

These mechanisms provide different approaches to handle asynchronous operations in JavaScript, each with its own advantages and use cases. Understanding these will help you write cleaner and more maintainable code.