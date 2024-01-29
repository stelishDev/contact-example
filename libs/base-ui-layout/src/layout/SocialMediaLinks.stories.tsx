import type { Meta, StoryObj } from '@storybook/react';
import { SocialMediaLinks } from './SocialMediaLinks';

import { within } from '@storybook/testing-library';
import { expect } from '@storybook/jest';

const meta = {
  title: 'Layout/SocialMediaLinks',
  component: SocialMediaLinks,
} satisfies Meta<typeof SocialMediaLinks>;
export default meta;

type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  render: () => (
    <div className="w-full flex py-6 px-3 justify-center items-center bg-charcoal">
      <SocialMediaLinks />
    </div>
  ),
  args: {},
  play: async ({ canvasElement }) => {
    const canvas = within(canvasElement);
    const youtubeLink = canvas.getByTitle('Contact Energy on Youtube');
    const facebookLink = canvas.getByTitle('Contact Energy on Facebook');
    const instagramLink = canvas.getByTitle('Contact Energy on Instagram');
    const linkedinLink = canvas.getByTitle('Contact Energy on Linkedin');
    expect(youtubeLink).toBeVisible();
    expect(facebookLink).toBeVisible();
    expect(instagramLink).toBeVisible();
    expect(linkedinLink).toBeVisible();
    expect(youtubeLink).toHaveAttribute('href', 'https://www.youtube.com/user/ContactEnergy');
    expect(facebookLink).toHaveAttribute('href', 'https://www.facebook.com/ContactEnergy/');
    expect(instagramLink).toHaveAttribute('href', 'https://www.instagram.com/contact_energy/');
    expect(linkedinLink).toHaveAttribute('href', 'https://www.linkedin.com/company/contact-energy-ltd');
  },
};
