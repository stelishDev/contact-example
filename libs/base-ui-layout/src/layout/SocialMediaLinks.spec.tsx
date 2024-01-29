import { render, screen } from '@testing-library/react';
import { SocialMediaLinks } from './SocialMediaLinks';

test('renders social media links', () => {
  render(<SocialMediaLinks />);
  const youtubeLink = screen.getByTitle('Contact Energy on Youtube');
  const facebookLink = screen.getByTitle('Contact Energy on Facebook');
  const instagramLink = screen.getByTitle('Contact Energy on Instagram');
  const linkedinLink = screen.getByTitle('Contact Energy on Linkedin');
  expect(youtubeLink).toBeDefined();
  expect(facebookLink).toBeDefined();
  expect(instagramLink).toBeDefined();
  expect(linkedinLink).toBeDefined();
});
