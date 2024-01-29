import { render, fireEvent, screen } from '@testing-library/react';
import { GlobalHeader } from './GlobalHeader';

test('renders children inside GlobalHeader', () => {
  render(
    <GlobalHeader onSearch={() => {}}>
      <div>Test Children</div>
    </GlobalHeader>
  );
  expect(screen.getByText('Test Children')).toBeInTheDocument();
});

test('calls onSearch prop when search button is clicked', () => {
  const onSearchMock = vi.fn();
  render(<GlobalHeader onSearch={onSearchMock}><></></GlobalHeader>);
  fireEvent.click(screen.getByTestId('header-search-button'));
  expect(onSearchMock).toHaveBeenCalled();
});