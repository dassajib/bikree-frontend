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
  // Initialize the Ant Design form with useForm
  const [form] = Form.useForm();

  // Initialize react-hook-form
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
    <div className="min-h-screen bg-custom-gradient flex justify-center items-center">
      <Form
        form={form}
        onFinish={handleSubmit(onSubmit)}
        name="sign-up"
        className="bg-custom-gradient shadow-custom-shadow rounded-xl w-80 p-8 px-10"
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
          <p className="text-white text-3xl font-bold">Sign Up</p>
        </Typography.Title>

        <Form.Item
          className="mt-5"
          status={errors.firstName ? 'error' : ''}
          help={
            errors.firstName ? (
              <span className="text-white">{errors.firstName?.message}</span>
            ) : null
          }
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
          help={
            errors.lastName ? (
              <span className="text-white">{errors.lastName?.message}</span>
            ) : null
          }
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
          help={
            errors.phone ? (
              <span className="text-white">{errors.phone?.message}</span>
            ) : null
          }
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
          help={
            errors.password ? (
              <span className="text-white">{errors.password?.message}</span>
            ) : null
          }
        >
          <Controller
            name="password"
            control={control}
            rules={{ required: 'Please input your Password!' }}
            render={({ field, fieldState }) => (
              <Input.Password
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
          help={
            errors.confirmPassword ? (
              <span className="text-white">{errors.confirmPassword?.message}</span>
            ) : null
          }
        >
          <Controller
            name="confirmPassword"
            control={control}
            rules={{ required: 'Please confirm your Password!' }}
            render={({ field, fieldState }) => (
              <Input.Password
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
          <Button type="primary" htmlType="submit" className="w-full font-bold">
            Sign Up
          </Button>
        </Form.Item>
        <div className="text-center text-white">
          <Link to="/">Have an account?</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignUp;
