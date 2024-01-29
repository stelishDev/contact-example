import type { Meta, StoryObj } from '@storybook/react';

import { SigninButton } from './SigninButton';

const meta = {
    title: 'Buttons/SigninButton',
    component: SigninButton,
} satisfies Meta<typeof SigninButton>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        testId: 'signin-button',
        onClick: () => {},
    },
}