import { ContactLogo } from '@libs/base-ui-components';
import { SearchOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { HeaderCategoryBanner } from './HeaderCategoryBanner';

export type GlobalHeaderProps = {
  children: React.ReactNode;
  onSearch: () => void;
};

export const GlobalHeader: React.FC<GlobalHeaderProps> = ({
  children,
  onSearch,
}: GlobalHeaderProps) => {
  return (
    <div>
      <HeaderCategoryBanner />
      <div className="min-h-[75px] max-h-[75px] w-full flex justify-start py-1 px-6 space-x-4 items-center bg-white border-b border-[#eee]">
        <a href="https://contact.co.nz/residential" data-testid="contact-logo">
          <ContactLogo />
        </a>
        <div className="w-full">{children}</div>
        <Button
          icon={<SearchOutlined style={{ fontSize: '24px' }} />}
          type="text"
          onClick={onSearch}
          data-testid="header-search-button"
        />
      </div>
    </div>
  );
};
