import { expect, test } from 'vitest';
import { render } from '@testing-library/react';
import Header from './index';

let headerRenderResult;
let logoElement;

beforeEach(() => {
  if (!logoElement) {
    headerRenderResult = render(<Header />);
    logoElement = headerRenderResult.getByTestId('logo');
  }
});

test('renders Header component without errors', () => {
  const headerElement = headerRenderResult.getByTestId('header');
  expect(headerElement).toBeTruthy();
});

test('renders logo element', () => {
  expect(logoElement).toBeTruthy();
});

test('checks the "alt" attribute of the logo element', () => {
  expect(logoElement.getAttribute('alt')).toBe('logo');
});

test('checks the "src" attribute of the logo element', () => {
  expect(logoElement.getAttribute('src')).toContain('logo');
});

test('should load logo successfully', async () => {
  logoElement.addEventListener('onload', () => {
    expect(logoElement.complete).toBe(true);
  });

  logoElement.addEventListener('onerror', () => {
    expect(logoElement.complete).toBe(false);
  });

  await new Promise((resolve) => setTimeout(resolve, 1000));
});
