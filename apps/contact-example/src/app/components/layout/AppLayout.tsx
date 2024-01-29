import { SearchOutlined, UserOutlined } from '@ant-design/icons';
import { Button, Input } from 'antd';
import { PageContent } from './PageContent';

import { GlobalFooter, GlobalHeader } from '@libs/base-ui-layout';

export type AppLayoutProps = {
  children?: React.ReactNode;
};

export const AppLayout = ({ children }: AppLayoutProps) => {
  return (
    <div>
      <GlobalHeader onSearch={() => {}}>
        <></>
      </GlobalHeader>
      <PageContent children={children}/>
      <GlobalFooter>
        <></>
      </GlobalFooter>
    </div>
  );
};
