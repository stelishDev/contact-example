import type { Meta, StoryObj } from '@storybook/react';

import { GlobalFooter } from './GlobalFooter';

const meta = {
  title: 'Layout/GlobalFooter',
  component: GlobalFooter,
};
export default meta;

type Story = StoryObj<typeof GlobalFooter>;

export const Footer: Story = {
  render: () => (
    <div className="w-full min-h-[600px] bg-slate-200">
      <GlobalFooter>
        <div className='flex justify-center items-center text-white py-8'>This is an example</div>
      </GlobalFooter>
    </div>
  ),
  args: {},
};
