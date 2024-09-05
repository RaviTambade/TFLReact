
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import Counter from './Counter';

test('renders with initial count and increments on button click', () => {
  render(<Counter />);

  // Check initial count
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();

  // Click increment button
  fireEvent.click(screen.getByText(/Increment/i));

  // Check updated count
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});
