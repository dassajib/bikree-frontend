import { Button, Form, Image, Input, Typography } from 'antd';
import { IoIosPhonePortrait } from 'react-icons/io';
import { TbPassword } from 'react-icons/tb';
import { Link } from 'react-router-dom';

import bikreeLogo from '../../assets/bikreeLogo.jpeg';
import { Controller, useForm } from 'react-hook-form';
import { SigninDataInterface } from '../../interface/SignIn';
import { useSignIn } from '../../hooks/useSignIn';

const SignIn = () => {
  // Initialize the Ant Design form with useForm
  const [form] = Form.useForm();

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<SigninDataInterface>();

  const { mutate } = useSignIn();

  const onSubmit = (data: SigninDataInterface) => {
    mutate(data);
  };

  return (
    <div className="flex justify-center items-center h-screen w-screen">
      <Form
        form={form}
        onFinish={handleSubmit(onSubmit)}
        name="sign-in"
        className="sm:shadow-2xl bg-white rounded-xl w-80 p-8 px-10"
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
          Sign In to Bikree
        </Typography.Title>
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

        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Sign in
          </Button>
        </Form.Item>
        <div className="text-center text-cyan-700">
          <Link to="/signup">Haven't account yet?</Link>
        </div>
      </Form>
    </div>
  );
};

export default SignIn;
