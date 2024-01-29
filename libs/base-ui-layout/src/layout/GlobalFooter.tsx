import { ContactLogoWhite } from '@libs/base-ui-components';
import { SocialMediaLinks } from './SocialMediaLinks';

export type GlobalFooterProps = {
  children: React.ReactNode;
};

export const GlobalFooter = ({ children }: GlobalFooterProps) => {
  return (
    <div className="min-h-[150px] w-full bg-charcoal p-2 border-t border-charcoal">
      <div className="py-8">{children}</div>
      <div className="py-8 text-white border-t border-white/50">
        <div className="flex justify-center items-center text-medium leading-8">
          <a href="https://contact.co.nz/support/consumer-advice">
            For independent complaint or pricing advice, click here. UDL &amp;
            Powerswitch can help.
          </a>
        </div>
        <div className="flex justify-center items-center text-medium leading-8">
          <a href="https://contact.co.nz/support/care">
            To read our Residential Consumer Care policy on how we’ll keep you
            safe and connected, click here.
          </a>
        </div>
      </div>
      <div className="grid grid-cols-3 py-8 border-t border-white/50">
        <div className='flex justify-center items-center'>
          <SocialMediaLinks />
        </div>
        <div className='flex justify-center items-center'>
          <ContactLogoWhite />
        </div>
      </div>
      <div></div>
    </div>
  );
};
