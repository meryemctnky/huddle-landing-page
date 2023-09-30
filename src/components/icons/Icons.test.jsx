import { beforeEach, expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Icons from './index';

let iconsRenderResult;
let iconsElement;

beforeEach(() => {
  iconsRenderResult = render(<Icons />);
  iconsElement = iconsRenderResult.getByTestId('icons');
});

test('renders Icons component correctly', () => {
  expect(iconsElement).toBeTruthy();
});

test('renders social media icons', () => {
  const socialIcons = iconsElement.querySelectorAll('.icon');

  socialIcons.forEach((icon) => {
    expect(icon).toBeVisible();
  });
});

test('uses the correct CSS classes', () => {
  const socialIcons = iconsElement.querySelectorAll('.icon');

  socialIcons.forEach((icon) => {
    expect(icon).toHaveClass('icon');
  });
});
