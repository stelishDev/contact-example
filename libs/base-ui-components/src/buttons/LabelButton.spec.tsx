import { render, screen, fireEvent } from '@testing-library/react';
import { LabelButton, Variant } from './index';

test('renders button with label and onClick handler', () => {
  // Arrange
  const mockOnClick = vi.fn();
  const mockLabel = 'Test Button';

  // Act
  const { getByText } = render(
    <LabelButton
      label={mockLabel}
      onClick={mockOnClick}
      testId="test-button"
      type="button"
      variant={Variant.Primary}
    />
  );

  // Assert
  expect(getByText(mockLabel)).toBeInTheDocument();
  fireEvent.click(screen.getByText(mockLabel));
  expect(mockOnClick).toHaveBeenCalled();
});

test('renders disabled button when disabled prop is true', () => {
  // Arrange
  const mockLabel = 'Test Button';

  // Act
  render(<LabelButton label={mockLabel} disabled={true} />);

  // Assert
  expect(screen.getByText(mockLabel)).toBeDisabled();
});

test('renders button with icon on the right', () => {
  // Arrange
  const mockLabel = 'Test Button';
  const mockIcon = { orientation: 'right', icon: <span /> };

  // Act
  render(<LabelButton label={mockLabel} icon={mockIcon} />);

  // Assert
  expect(
    screen.getByTestId('test-button-label').nextElementSibling
  ).toHaveClass('flex flex-1 justify-end');
});
