# JavaScript arrays

JavaScript arrays come with a variety of built-in methods and operations for manipulating and accessing their elements. Here’s a comprehensive overview of common array operations:

### 1. **Creating Arrays**

- **Using Array Literals**:
  ```javascript
  let fruits = ['Apple', 'Banana', 'Cherry'];
  ```

- **Using the `Array` Constructor**:
  ```javascript
  let numbers = new Array(10); // Creates an array with 10 empty slots
  let moreNumbers = new Array(1, 2, 3); // Creates an array with elements 1, 2, 3
  ```

### 2. **Accessing Elements**

- **Indexing**:
  ```javascript
  let firstFruit = fruits[0]; // 'Apple'
  ```

- **Length Property**:
  ```javascript
  let length = fruits.length; // 3
  ```

### 3. **Modifying Arrays**

- **Adding Elements**:
  - **`push()`**: Adds elements to the end of the array.
    ```javascript
    fruits.push('Date'); // ['Apple', 'Banana', 'Cherry', 'Date']
    ```
  - **`unshift()`**: Adds elements to the beginning of the array.
    ```javascript
    fruits.unshift('Avocado'); // ['Avocado', 'Apple', 'Banana', 'Cherry', 'Date']
    ```

- **Removing Elements**:
  - **`pop()`**: Removes the last element of the array.
    ```javascript
    let lastFruit = fruits.pop(); // 'Date'
    ```
  - **`shift()`**: Removes the first element of the array.
    ```javascript
    let firstFruitRemoved = fruits.shift(); // 'Avocado'
    ```

- **Splicing**:
  - **`splice()`**: Adds or removes elements from a specific position.
    ```javascript
    fruits.splice(2, 1, 'Blueberry', 'Grapes'); 
    // Removes 1 element at index 2 and adds 'Blueberry', 'Grapes'
    // ['Avocado', 'Apple', 'Blueberry', 'Grapes', 'Banana']
    ```

### 4. **Iterating Over Arrays**

- **`for` Loop**:
  ```javascript
  for (let i = 0; i < fruits.length; i++) {
    console.log(fruits[i]);
  }
  ```

- **`forEach()`**: Executes a provided function once for each array element.
  ```javascript
  fruits.forEach(fruit => console.log(fruit));
  ```

- **`map()`**: Creates a new array with the results of calling a provided function on every element.
  ```javascript
  let upperFruits = fruits.map(fruit => fruit.toUpperCase());
  // ['AVOCADO', 'APPLE', 'BLUEBERRY', 'GRAPES', 'BANANA']
  ```

- **`filter()`**: Creates a new array with all elements that pass the test implemented by the provided function.
  ```javascript
  let longNamedFruits = fruits.filter(fruit => fruit.length > 5);
  // ['Avocado', 'Blueberry', 'Banana']
  ```

- **`reduce()`**: Executes a reducer function (that you provide) on each element of the array, resulting in a single output value.
  ```javascript
  let totalLength = fruits.reduce((total, fruit) => total + fruit.length, 0);
  // Sum of the lengths of all fruit names
  ```

### 5. **Searching and Finding**

- **`indexOf()`**: Returns the first index at which a given element can be found, or `-1` if not found.
  ```javascript
  let index = fruits.indexOf('Blueberry'); // 2
  ```

- **`includes()`**: Determines whether an array contains a certain element.
  ```javascript
  let hasBanana = fruits.includes('Banana'); // true
  ```

- **`find()`**: Returns the first element in the array that satisfies the provided testing function.
  ```javascript
  let foundFruit = fruits.find(fruit => fruit.startsWith('B')); // 'Blueberry'
  ```

- **`findIndex()`**: Returns the index of the first element that satisfies the provided testing function.
  ```javascript
  let foundIndex = fruits.findIndex(fruit => fruit.startsWith('B')); // 2
  ```

### 6. **Joining and Splitting**

- **`join()`**: Joins all elements of an array into a string.
  ```javascript
  let fruitString = fruits.join(', '); // 'Avocado, Apple, Blueberry, Grapes, Banana'
  ```

- **`split()`**: Splits a string into an array of substrings.
  ```javascript
  let words = 'apple,banana,cherry'.split(',');
  // ['apple', 'banana', 'cherry']
  ```

### 7. **Sorting and Reversing**

- **`sort()`**: Sorts the elements of an array in place and returns the array.
  ```javascript
  fruits.sort(); // Alphabetically sorted
  ```

- **`reverse()`**: Reverses the elements of an array in place.
  ```javascript
  fruits.reverse(); // Order of elements is reversed
  ```

### 8. **Concatenating and Slicing**

- **`concat()`**: Merges two or more arrays.
  ```javascript
  let moreFruits = fruits.concat(['Mango', 'Pineapple']);
  ```

- **`slice()`**: Extracts a section of an array and returns a new array.
  ```javascript
  let citrusFruits = fruits.slice(1, 3); // Extracts elements from index 1 to 3 (excluding 3)
  ```

### Summary

JavaScript arrays come with a robust set of methods to perform operations such as adding, removing, and modifying elements; iterating over items; searching for specific values; and manipulating the array structure. These methods help make array handling efficient and versatile in various programming scenarios.