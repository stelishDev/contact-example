import { render, fireEvent, screen } from '@testing-library/react';
import { SigninButton } from './SigninButton';

test('renders SigninButton with correct text', () => {
  render(<SigninButton onClick={() => {}} testId="signin-button" />);
  expect(screen.getByText('Sign In')).toBeInTheDocument();
});

test('calls onClick when button is clicked', () => {
  const onClick = vi.fn();
  render(<SigninButton testId="signin-button" onClick={onClick} />);
  fireEvent.click(screen.getByTestId('signin-button'));
  expect(onClick).toHaveBeenCalled();
});
