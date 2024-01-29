import type { Meta, StoryObj } from '@storybook/react';

import { GeneralUserTable } from './GeneralUserTable';

const meta = {
    title: 'Tables/GeneralUserTable',
    component: GeneralUserTable,
} satisfies Meta<typeof GeneralUserTable>;
export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
    args: {
        data: [
            { field1: 'John', field2: 'a@a.com', field3: '12345678' },]
    },
};