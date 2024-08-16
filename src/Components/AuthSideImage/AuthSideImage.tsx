import { Image } from 'antd';

import greetings from '../../assets/undraw_blooming_re_2kc4.svg';

const AuthSideImage = () => {
  return (
    <div className="hidden md:block w-full md:w-1/2 h-full bg-slate-200 p-20">
      <div className="w-full h-full flex items-center justify-center">
        <Image
          src={greetings}
          preview={false}
          className="w-full h-full object-contain"
        />
      </div>
    </div>
  );
};

export default AuthSideImage;
