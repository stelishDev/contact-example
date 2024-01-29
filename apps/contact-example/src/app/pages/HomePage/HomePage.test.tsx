import { render, screen } from '@testing-library/react';
import { HomePage } from './HomePage';

test('renders home page with title and paragraphs', () => {
  render(<HomePage />);
  const titleElement = screen.getByText('Example Page');
  const homePageElement = screen.getByTestId('home-page');
  expect(titleElement).toBeInTheDocument();
  expect(homePageElement).toBeInTheDocument();
});

test('renders form links', () => {
  render(<HomePage />);
  const form1Link = screen.getByText('Form 1');
  const form2Link = screen.getByText('Form 2');
  expect(form1Link).toBeInTheDocument();
  expect(form2Link).toBeInTheDocument();
});