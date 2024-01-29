import { UserOutlined } from '@ant-design/icons';

export type SigninButtonProps = {
  testId: string;
  onClick: () => void;
};

export const SigninButton = ({ testId, onClick }: SigninButtonProps) => {
  return (
    <button
      data-testid={testId}
      onClick={onClick}
      className="flex items-center space-x-2 bg-[#dd3640] hover:bg-[#dd3640]/40 text-white font-bold py-2 px-8 rounded-none"
    >
      <UserOutlined />
      <span className="font-normal">Sign In</span>
    </button>
  );
};
