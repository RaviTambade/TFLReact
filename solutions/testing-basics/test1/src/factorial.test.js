// factorial.test.js
const factorial = require('./factorial');

test('calculates factorial of 5 to be 120', () => {
  expect(factorial(5)).toBe(120);
});

test('calculates factorial of 0 to be 1', () => {
  expect(factorial(0)).toBe(1);
});

test('returns undefined for negative numbers', () => {
  expect(factorial(-1)).toBeUndefined();
});
