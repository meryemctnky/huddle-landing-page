import React from 'react';
import { test, expect, describe } from 'vitest';
import { render } from '@testing-library/react';
import App from './App';

test('renders App component without errors', () => {
  const { container, getByTestId } = render(<App />);

  // Checking that the App component is rendered
  expect(container.querySelector('.container')).toBeTruthy();

  // Checking that child components are rendered
  expect(getByTestId('header')).toBeTruthy();
  expect(container.querySelector('.main')).toBeTruthy();
  expect(getByTestId('hero')).toBeTruthy();
  expect(container.querySelector('.content')).toBeTruthy();
  expect(getByTestId('title')).toBeTruthy();
  expect(getByTestId('button')).toBeTruthy();
  expect(getByTestId('icons')).toBeTruthy();
});
