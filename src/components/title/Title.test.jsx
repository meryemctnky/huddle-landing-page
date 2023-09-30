import { test, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import Title from './index';

let titleRenderResult;
let titleElement;

beforeEach(() => {
  titleRenderResult = render(<Title />);
  titleElement = titleRenderResult.getByTestId('title');
});

test('renders Title component correctly', () => {
  expect(titleElement).toBeTruthy();
});

test('checks the correct text', () => {
  expect(titleElement).toHaveTextContent('Build The Community Your Fans Will Love');
});

test('uses the correct CSS class', () => {
  expect(titleElement).toHaveClass('title');
});
