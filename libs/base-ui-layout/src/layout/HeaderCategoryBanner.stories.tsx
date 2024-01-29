import type { Meta, StoryObj } from '@storybook/react';

import { HeaderCategoryBanner } from "./HeaderCategoryBanner";

const meta = {
    title: 'Layout/HeaderCategoryBanner',
    component: HeaderCategoryBanner,
} satisfies Meta<typeof HeaderCategoryBanner>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {},
}