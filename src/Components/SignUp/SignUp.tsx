import { Button, Form, Input, message, Typography } from 'antd';
import { CiUser } from 'react-icons/ci';
import { IoIosPhonePortrait } from 'react-icons/io';
import { TbPassword } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import { validatePasswords } from '../../utils/validation';
import { useSignUp } from '../../hooks/useSignUp';
import { SignupDataInterface } from '../../interface/SignUp';

const SignUp = () => {
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SignupDataInterface>();
  const { mutate } = useSignUp();

  const onSubmit = (data: SignupDataInterface) => {
    const error = validatePasswords(data.password, data.confirmPassword);
    if (error) {
      message.error(error);
      return;
    }

    mutate(data);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Form
        onFinish={handleSubmit(onSubmit)}
        name="sign-up"
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
          Sign Up to Bikree
        </Typography.Title>

        <Form.Item
          status={errors.firstName ? 'error' : ''}
          help={errors.firstName?.message}
        >
          <Controller
            name="firstName"
            control={control}
            rules={{ required: 'Please input your First Name!' }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                prefix={<CiUser size={20} />}
                placeholder="First Name"
                status={fieldState.invalid ? 'error' : ''}
              />
            )}
          />
        </Form.Item>

        <Form.Item
          status={errors.lastName ? 'error' : ''}
          help={errors.lastName?.message}
        >
          <Controller
            name="lastName"
            control={control}
            rules={{ required: 'Please input your Last Name!' }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                prefix={<CiUser size={20} />}
                placeholder="Last Name"
                status={fieldState.invalid ? 'error' : ''}
              />
            )}
          />
        </Form.Item>

        <Form.Item
          status={errors.phone ? 'error' : ''}
          help={errors.phone?.message}
        >
          <Controller
            name="phone"
            control={control}
            rules={{ required: 'Please input your Phone Number!' }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                prefix={<IoIosPhonePortrait size={20} />}
                placeholder="Phone Number"
                status={fieldState.invalid ? 'error' : ''}
              />
            )}
          />
        </Form.Item>

        <Form.Item
          status={errors.password ? 'error' : ''}
          help={errors.password?.message}
        >
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Please input your Password!' }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                prefix={<TbPassword size={20} />}
                type="password"
                placeholder="Password"
                status={fieldState.invalid ? 'error' : ''}
              />
            )}
          />
        </Form.Item>

        <Form.Item
          status={errors.confirmPassword ? 'error' : ''}
          help={errors.confirmPassword?.message}
        >
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: 'Please confirm your Password!' }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                prefix={<TbPassword size={20} />}
                type="password"
                placeholder="Confirm Password"
                status={fieldState.invalid ? 'error' : ''}
              />
            )}
          />
        </Form.Item>

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Sign Up
          </Button>
        </Form.Item>
        <Link to="/">Have an account?</Link>
      </Form>
    </div>
  );
};

export default SignUp;
