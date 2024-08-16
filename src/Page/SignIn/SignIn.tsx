import { Button, Form, Image, Input, Typography } from 'antd';
import { IoIosPhonePortrait } from 'react-icons/io';
import { TbPassword } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import bikreeLogo from '../../assets/bikreeLogo.jpeg';
import greetings from '../../assets/undraw_blooming_re_2kc4.svg';

const SignIn = () => {
  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden">
      <div className="flex justify-center items-center md:w-1/2">
        <Form
          name="sign-in"
          className="rounded-xl w-80 p-8 px-10"
          initialValues={{
            remember: true,
          }}
        >
          <div className="flex justify-center">
            <Image
              className="object-cover rounded"
              preview={false}
              src={bikreeLogo}
              height={35}
              width={35}
            />
          </div>
          <Typography.Title level={4} className="text-center mt-5">
            <p className="text-3xl font-bold">Sign In</p>
          </Typography.Title>
          <Form.Item
            className="mt-5"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your Phone Number!',
              },
            ]}
          >
            <Input
              prefix={<IoIosPhonePortrait size={20} />}
              placeholder="Phone Number"
            />
          </Form.Item>
          <Form.Item
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
            ]}
          >
            <Input.Password
              prefix={<TbPassword size={20} />}
              type="password"
              placeholder="Password"
            />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full font-bold"
            >
              Sign In
            </Button>
          </Form.Item>
          <div className="text-center">
            <Link to="/signup">Haven't account yet?</Link>
          </div>
        </Form>
      </div>
      <div className="hidden md:block w-full md:w-1/2 h-full bg-slate-200 p-20">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={greetings}
            preview={false}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
