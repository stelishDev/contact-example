import type { Meta, StoryObj } from '@storybook/react';
import { LabelButton } from './LabelButton';
import { Variant } from './types';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: 'Buttons/LabelButton',
  component: LabelButton,
} satisfies Meta<typeof LabelButton>;
export default meta;
type Story = StoryObj<typeof LabelButton>;

export const Default: Story = {
  render: () => (
    <LabelButton
      label="Primary"
      variant={Variant.Primary}
      type="button"
      testId="label-button"
    />
  ),
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    expect(canvas.getByText(/Primary/gi)).toBeTruthy();
  },
};
