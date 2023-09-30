import { test, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import Content from './index';
import styles from './style.css';

let descRenderResult;
let descElement;

beforeEach(() => {
  descRenderResult = render(<Content />);
  descElement = descRenderResult.getByTestId('desc');
});

test('renders Content component correctly', () => {
  expect(descElement).toBeTruthy();
});

test('renders the correct text', () => {
  expect(descElement).toHaveTextContent(
    'Huddle re-imagines the way we build communities. You have a voice, but so does your audience. Create connections with your users as you engage in genuine discussion.'
  );
});

test('uses the correct CSS class', () => {
  expect(descElement).toHaveClass('desc');
});
