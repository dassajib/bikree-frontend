import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import { CiUser } from 'react-icons/ci';
import { IoIosPhonePortrait } from 'react-icons/io';
import { TbPassword } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const SignUp: React.FC = () => {
  return (
    <div className="signup">
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
      >
        <Typography.Title
          level={4}
          style={{ textAlign: 'center', marginBottom: '20px' }}
        >
          Sign Up to Bikree
        </Typography.Title>
        <Form.Item
          name="first-name"
          rules={[
            {
              required: true,
              message: 'Please input your First Name!',
            },
          ]}
        >
          <Input prefix={<CiUser size={20} />} placeholder="First Name" />
        </Form.Item>
        <Form.Item
          name="last-name"
          rules={[
            {
              required: true,
              message: 'Please input your Last Name!',
            },
          ]}
        >
          <Input prefix={<CiUser size={20} />} placeholder="Last Name" />
        </Form.Item>
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
        <Form.Item
          name="confirm-password"
          rules={[
            {
              required: true,
              message: 'Please confirm your Password!',
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
          <Button
            type="primary"
            htmlType="submit"
            className="login-form-button"
          >
            Sign Up
          </Button>
        </Form.Item>
        <Link to="/">Have an account?</Link>
      </Form>
    </div>
  );
};

export default SignUp;
