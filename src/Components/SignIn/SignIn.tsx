import { Button, Form, Image, Input, Typography } from 'antd';
import { IoIosPhonePortrait } from 'react-icons/io';
import { TbPassword } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import bikreeLogo from '../../assets/bikreeLogo.jpeg';

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Form
        name="sign-in"
        className="sm:shadow-2xl rounded-xl w-80"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.33)',
          padding: '30px 40px 30px 40px',
        }}
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
          Sign In to Bikree
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
          <Input
            prefix={<TbPassword size={20} />}
            type="password"
            placeholder="Password"
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Sign in
          </Button>
        </Form.Item>
        <div className="text-center text-cyan-700">
          <Link to="/signup">Haven't account yet?</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
