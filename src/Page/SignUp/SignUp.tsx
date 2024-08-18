import { Button, Form, Image, Input, Typography } from 'antd';
import { Link } from 'react-router-dom';

import { useSignUp } from '../../hooks/useSignUp';
import { SignupDataInterface } from '../../interface/SignUp';
import bikreeLogo from '../../assets/bikreeLogo.jpeg';
import signUpGreetings from '../../assets/The Little Things - UI Design.png';

const SignUp = () => {
  // Initialize the Ant Design form with useForm
  const [form] = Form.useForm();

  const { mutate } = useSignUp();

  const handleSubmit = (data: SignupDataInterface) => {
    mutate(data);
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden">
      <div className="flex justify-center items-center md:w-1/2">
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit}
          name="sign-up"
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
            <p className="text-2xl font-semibold">Sign Up</p>
          </Typography.Title>

          <Form.Item
            name="firstName"
            label="First Name"
            className="mb-3"
            rules={[
              { required: true, message: 'Please Enter Your First Name' },
              { whitespace: true },
              { min: 3, message: 'First Name should be at least 3 characters' },
            ]}
            hasFeedback
          >
            <Input placeholder="First Name" />
          </Form.Item>

          <Form.Item
            name="lastName"
            label="Last Name"
            className="mb-3"
            rules={[
              { required: true, message: 'Please Enter Your Last Name' },
              { whitespace: true },
              { min: 3, message: 'Last Name should be at least 3 characters' },
            ]}
            hasFeedback
          >
            <Input placeholder="Last Name" />
          </Form.Item>

          <Form.Item
            name="phone"
            label="Phone"
            className="mb-3"
            rules={[
              { required: true, message: 'Please Enter Your Phone' },
              { whitespace: true },
              { min: 7, message: 'Phone should be at least 7 characters' },
            ]}
            hasFeedback
          >
            <Input placeholder="Phone Number" />
          </Form.Item>

          <Form.Item
            name="password"
            label="Password"
            className="mb-3"
            rules={[
              { required: true, message: 'Please Enter Your Password' },
              { min: 6, message: 'Password should be at least 6 characters' },
            ]}
            hasFeedback
          >
            <Input.Password type="password" placeholder="Password" />
          </Form.Item>

          <Form.Item
            name="confirmPassword"
            label="Confirm Password"
            dependencies={['password']}
            rules={[
              { required: true, message: 'Please Enter Your Password Again' },
              { min: 6, message: 'Password should be at least 6 characters' },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject("Password doesn't match");
                },
              }),
            ]}
            hasFeedback
          >
            <Input.Password type="password" placeholder="Confirm Password" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full font-bold"
            >
              Sign Up
            </Button>
          </Form.Item>
          <div className="text-center">
            <Link to="/">Have an account?</Link>
          </div>
        </Form>
      </div>

      <div className="hidden md:block w-full md:w-1/2 h-full bg-slate-200">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={signUpGreetings}
            preview={false}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default SignUp;
