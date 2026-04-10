// factorial.js
function factorial(n) {
    if (n < 0) return undefined; // Factorial is not defined for negative numbers
    return n === 0 ? 1 : n * factorial(n - 1);
  }
  
  module.exports = factorial;
  