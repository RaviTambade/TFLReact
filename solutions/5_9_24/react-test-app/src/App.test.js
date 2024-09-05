// src/App.test.js
import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import App from './App';

test('renders App and interacts with Counter', () => {
  render(<App />);

  // Check if App renders
  expect(screen.getByText(/My App/i)).toBeInTheDocument();

  // Check if Counter renders and interact with it
  expect(screen.getByText(/Count: 0/i)).toBeInTheDocument();
  fireEvent.click(screen.getByText(/Increment/i));
  expect(screen.getByText(/Count: 1/i)).toBeInTheDocument();
});
