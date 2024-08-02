import { Button, Form, Image, Input, message, Typography } from 'antd';
import { CiUser } from 'react-icons/ci';
import { IoIosPhonePortrait } from 'react-icons/io';
import { TbPassword } from 'react-icons/tb';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import { validatePasswords } from '../../utils/validation';
import { useSignUp } from '../../hooks/useSignUp';
import { SignupDataInterface } from '../../interface/SignUp';
import bikreeLogo from '../../assets/bikreeLogo.jpeg';

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
          Sign Up to Bikree
        </Typography.Title>

        <Form.Item
          className="mt-5"
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
        <div className="text-center text-cyan-700">
          <Link to="/">Have an account?</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
