import { Button, Form, Input, Typography } from 'antd';
import { IoIosPhonePortrait } from 'react-icons/io';
import { TbPassword } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const SignIn = () => {
  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Form
        name="sign-in"
        style={{
          backgroundColor: 'rgba(255, 255, 255, 0.33)',
          boxShadow: '0px 8px 32px 0 rgba(0, 0, 255, 0.33)',
          padding: '60px 60px 60px 60px',
          borderRadius: '10px',
        }}
        initialValues={{
          remember: true,
        }}
      >
        <Typography.Title
          level={4}
          style={{ textAlign: 'center', marginBottom: '20px' }}
        >
          Sign In to Bikree
        </Typography.Title>
        <Form.Item
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
        <Link to="/signup">Haven't account yet?</Link>
      </Form>
    </div>
  );
};

export default SignIn;
