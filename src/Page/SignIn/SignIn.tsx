import { Button, Form, Image, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

import bikreeLogo from '../../assets/bikreeLogo.jpeg';
import signInGreetings from '../../assets/The Little Things - Business Planning.png';
import { SigninDataInterface } from '../../interface/SignIn';
import { useSignIn } from '../../hooks/useSignIn';

const SignIn = () => {
  // Initialize the Ant Design form with useForm
  const [form] = Form.useForm();

  const { mutate } = useSignIn();

  const handleSubmit = (data: SigninDataInterface) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden">
      <div className="flex justify-center items-center md:w-1/2">
        <Form
          form={form}
          onFinish={handleSubmit}
          layout="vertical"
          name="sign-in"
          className="rounded-xl w-96 p-8 px-10"
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
          <Typography.Title level={4} className="text-center mt-4">
            <p className="text-2xl font-semibold">Sign In</p>
          </Typography.Title>
          <Form.Item
            label="Phone"
            className="mb-3"
            name="phone"
            rules={[
              {
                required: true,
                message: 'Please input your Phone Number!',
              },
              { min: 7, message: 'Phone should be at least 7 characters' },
            ]}
          >
            <Input placeholder="Phone Number" />
          </Form.Item>
          <Form.Item
            label="Password"
            name="password"
            rules={[
              {
                required: true,
                message: 'Please input your Password!',
              },
              { min: 6, message: 'Password should be at least 6 characters' },
            ]}
          >
            <Input.Password type="password" placeholder="Password" />
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

      <div className="hidden md:block w-full md:w-1/2 h-full bg-slate-200">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={signInGreetings}
            preview={false}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignIn;
