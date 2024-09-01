import { useNavigate } from 'react-router-dom';
import { Button, message, Popover } from 'antd';
import { GoSignOut } from 'react-icons/go';

import { useAuthStore } from '../../store/authStore';

const SIgnOutButton = () => {
  const { clearToken } = useAuthStore();
  const navigate = useNavigate();

  const handleSignOut = () => {
    clearToken();
    navigate('/');
    message.success('Please Sign In Your Account');
  };

  const content = (
    <div className="bg-white w-36 flex justify-center">
      <Button onClick={handleSignOut} type="primary">
        Sign Out
      </Button>
    </div>
  );

  return (
    <Popover content={content} title="" trigger="hover">
      <Button className="outline-none border-0">
        <GoSignOut size={24} />
      </Button>
    </Popover>
  );
};

export default SIgnOutButton;
