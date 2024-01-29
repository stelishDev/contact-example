import { UserOutlined } from '@ant-design/icons';

export const SigninButton = () => {
  return (
    <button className="flex items-center space-x-2 bg-[#dd3640] hover:bg-[#dd3640]/40 text-white font-bold py-2 px-8 rounded-none">
        <UserOutlined />
        <span className='font-normal'>Sign In</span>
    </button>
  );
};
