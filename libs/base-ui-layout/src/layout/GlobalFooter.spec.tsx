// Test cases:
// 1. Renders children passed as props
// 2. Contains the correct links with the specified href attributes
// 3. Renders SocialMediaLinks and ContactLogoWhite components
import { render } from '@testing-library/react';
import { GlobalFooter } from './GlobalFooter';

describe('GlobalFooter', () => {
  it('renders children passed as props', () => {
    const { getByText } = render(<GlobalFooter>Test Children</GlobalFooter>);
    expect(getByText('Test Children')).toBeInTheDocument();
  });

  it('contains the correct links with the specified href attributes', () => {
    const { getByText } = render(
      <GlobalFooter>
        <></>
      </GlobalFooter>
    );
    expect(
      getByText(
        'For independent complaint or pricing advice, click here. UDL & Powerswitch can help.'
      ).closest('a')
    ).toHaveAttribute('href', 'https://contact.co.nz/support/consumer-advice');
    expect(
      getByText(
        'To read our Residential Consumer Care policy on how we’ll keep you safe and connected, click here.'
      ).closest('a')
    ).toHaveAttribute('href', 'https://contact.co.nz/support/care');
  });

  it('renders SocialMediaLinks and ContactLogoWhite components', () => {
    const { getByTestId } = render(
      <GlobalFooter>
        <></>
      </GlobalFooter>
    );
    expect(getByTestId('social-media-links')).toBeInTheDocument();
    expect(getByTestId('contact-logo-white')).toBeInTheDocument();
  });
});
