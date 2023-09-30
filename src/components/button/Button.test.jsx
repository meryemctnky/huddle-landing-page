import { beforeEach, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Button from './index';

let button;

beforeEach(() => {
  button = render(<Button />);
});

test('renders Button component correctly', () => {
  expect(button).toBeTruthy();
});

test('checks the correct text', () => {
  const buttonElement = button.getByTestId('button');
  expect(buttonElement).toBeTruthy();
  expect(buttonElement).toHaveTextContent('Register');
});
