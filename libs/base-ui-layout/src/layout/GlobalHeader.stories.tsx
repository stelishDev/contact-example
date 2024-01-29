import type { Meta, StoryObj } from '@storybook/react';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

import { GlobalHeader } from './GlobalHeader';
import exp from 'constants';

const meta: Meta<typeof GlobalHeader> = {
  component: GlobalHeader,
  title: 'Layout/GlobalHeader',
};
export default meta;
type Story = StoryObj<typeof GlobalHeader>;

export const Heading: Story = {
  render: () => (
    <div className="w-full min-h-[600px] bg-light-grey">
      <GlobalHeader onSearch={() => {}}>
        <input type="text" />
      </GlobalHeader>
    </div>
  ),
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const contactLogo = canvas.getByTestId('contact-logo');
    const searchButton = canvas.getByTestId('header-search-button');
    expect(contactLogo).toBeVisible();
    expect(searchButton).toBeVisible();
    expect(contactLogo).toHaveAttribute('href', 'https://contact.co.nz/residential');
  },
};
