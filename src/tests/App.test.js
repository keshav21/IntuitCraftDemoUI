import React from 'react';
import { render } from '@testing-library/react';
import App from '../App';

test('renders the App component and displays the header', () => {
  render(<App />);
  const headerElement = document.querySelector('header');
  expect(headerElement.textContent).toContain('Intuit Craft Demo');
});