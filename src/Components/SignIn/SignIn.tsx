import { Button, Form, Input, Typography } from 'antd';
import React from 'react';
import { IoIosPhonePortrait } from 'react-icons/io';
import { TbPassword } from 'react-icons/tb';
import { Link } from 'react-router-dom';

const SignIn: React.FC = () => {
  return (
    <div className="signin">
      <Form
        name="normal_login"
        className="signin-form"
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
          <Button
            type="primary"
            htmlType="submit"
            className="form-button"
          >
            Sign in
          </Button>
        </Form.Item>
        <Link to="/signup">Haven't account yet?</Link>
      </Form>
    </div>
  );
};

export default SignIn;
