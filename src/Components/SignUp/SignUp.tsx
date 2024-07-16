import { Button, Form, Input, message, Typography } from 'antd';
import React from 'react';
import { CiUser } from 'react-icons/ci';
import { IoIosPhonePortrait } from 'react-icons/io';
import { TbPassword } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { useSignupStore } from '../../store/useSignUpStore';
import { validatePasswords } from '../../utils/validation';
import { useSignUp } from '../../hooks/useSignUp';

const SignUp: React.FC = () => {
  const {
    firstName,
    lastName,
    phone,
    password,
    confirmPassword,
    setFirstName,
    setLastName,
    setPhone,
    setPassword,
    setConfirmPassword,
  } = useSignupStore();

  const { mutate } = useSignUp();

  const onFinish = () => {
    const error = validatePasswords(password, confirmPassword);
    if (error) {
      message.error(error);
      return;
    }

    mutate({ firstName, lastName, phone, password, confirmPassword });
  };

  return (
    <div className="signup">
      <Form
        onFinish={onFinish}
        name="sign-up"
        className="signup-form"
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
          <Input
            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
            prefix={<CiUser size={20} />}
            placeholder="First Name"
          />
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
          <Input
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
            prefix={<CiUser size={20} />}
            placeholder="Last Name"
          />
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
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
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
            value={password}
            onChange={(e) => setPassword(e.target.value)}
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
            value={confirmPassword}
            onChange={(e) => setConfirmPassword(e.target.value)}
            prefix={<TbPassword size={20} />}
            type="password"
            placeholder="Confirm Password"
          />
        </Form.Item>

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="form-button"
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
