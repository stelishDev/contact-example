import { render } from '@testing-library/react';

import { GlobalHeader } from './GlobalHeader';

describe('GlobalHeader', () => {
  it('should render successfully', () => {
    const { baseElement } = render(
      <GlobalHeader>
        <></>
      </GlobalHeader>
    );
    expect(baseElement).toBeTruthy();
  });
});

it('renders children', () => {
  const { getByText } = render(
    <GlobalHeader>
      <div>Child Component</div>
    </GlobalHeader>
  );
  expect(getByText('Child Component')).toBeInTheDocument();
});

it('renders "talspot" text', () => {
  const { getByText } = render(
    <GlobalHeader>
      <></>
    </GlobalHeader>
  );
  expect(getByText('talspot')).toBeInTheDocument();
});
