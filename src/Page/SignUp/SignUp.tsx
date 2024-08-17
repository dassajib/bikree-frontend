import { Button, Form, Image, Input, message, Typography } from 'antd';
import { Link } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import { validatePasswords } from '../../utils/validation';
import { useSignUp } from '../../hooks/useSignUp';
import { SignupDataInterface } from '../../interface/SignUp';
import bikreeLogo from '../../assets/bikreeLogo.jpeg';
import signUpGreetings from '../../assets/The Little Things - UI Design.png';

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
    <div className="flex flex-col md:flex-row items-center justify-between h-screen">
      <div className="flex justify-center items-center md:w-1/2">
        <Form
          layout="vertical"
          form={form}
          onFinish={handleSubmit(onSubmit)}
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
            label="First Name"
            className="mb-3"
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
                  placeholder="First Name"
                  status={fieldState.invalid ? 'error' : ''}
                />
              )}
            />
          </Form.Item>

          <Form.Item
            label="Last Name"
            className="mb-3"
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
                  placeholder="Last Name"
                  status={fieldState.invalid ? 'error' : ''}
                />
              )}
            />
          </Form.Item>

          <Form.Item
            label="Phone"
            className="mb-3"
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
                  placeholder="Phone Number"
                  status={fieldState.invalid ? 'error' : ''}
                />
              )}
            />
          </Form.Item>

          <Form.Item
            label="Password"
            className="mb-3"
            status={errors.password ? 'error' : ''}
            help={errors.password?.message}
          >
            <Controller
              name="password"
              control={control}
              rules={{ required: 'Please input your Password!' }}
              render={({ field, fieldState }) => (
                <Input.Password
                  {...field}
                  type="password"
                  placeholder="Password"
                  status={fieldState.invalid ? 'error' : ''}
                />
              )}
            />
          </Form.Item>

          <Form.Item
            label="Confirm Password"
            status={errors.confirmPassword ? 'error' : ''}
            help={errors.confirmPassword?.message}
          >
            <Controller
              name="confirmPassword"
              control={control}
              rules={{ required: 'Please confirm your Password!' }}
              render={({ field, fieldState }) => (
                <Input.Password
                  {...field}
                  type="password"
                  placeholder="Confirm Password"
                  status={fieldState.invalid ? 'error' : ''}
                />
              )}
            />
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
