import { test, expect, beforeEach } from 'vitest';
import { render } from '@testing-library/react';
import Hero from './index';

let heroRenderResult;
let heroSection;

beforeEach(() => {
  heroRenderResult = render(<Hero />);
  heroSection = heroRenderResult.getByTestId('hero');
});

test('renders Hero component without erros', () => {
  expect(heroSection).toBeTruthy();
});

test('renders image element', () => {
  const mockupImage = heroSection.querySelector('img');
  expect(mockupImage).toBeTruthy();
});

test('uses the correct CSS class', () => {
  const mockupImage = heroSection.querySelector('.mockupImage');
  expect(mockupImage).toHaveClass('mockupImage');
});
