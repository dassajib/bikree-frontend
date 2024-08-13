import { Button, Form, Image, Input, Typography } from 'antd';
import { TbDeviceMobileCheck } from 'react-icons/tb';
import { useNavigate } from 'react-router-dom';
import { Controller, useForm } from 'react-hook-form';

import bikreeLogo from '../../assets/bikreeLogo.jpeg';
import { OtpDataInterface } from '../../interface/otpPage';

const OtpPage = () => {
  // Initialize the Ant Design form with useForm
  const [form] = Form.useForm();

  // Initialize react-hook-form
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<OtpDataInterface>();

  const navigate = useNavigate();

  const onSubmit = (data: OtpDataInterface) => {
    console.log(data);
    navigate('/create-shop');
  };

  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Form
        form={form}
        onFinish={handleSubmit(onSubmit)}
        name="OTP"
        className="bg-white/30 shadow-[0_8px_32px_rgba(0,0,255,0.33)] p-16 rounded-lg"
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
          Verify Your Number
        </Typography.Title>
        <Form.Item
          className="mt-5"
          status={errors.otp ? 'error' : ''}
          help={errors.otp?.message}
        >
          <Controller
            name="otp"
            control={control}
            rules={{
              required: 'Please input your OTP Code!',
              validate: {
                isNumber: (value) =>
                  !isNaN(Number(value)) || 'OTP must be a number',
              },
            }}
            render={({ field, fieldState }) => (
              <Input
                {...field}
                prefix={<TbDeviceMobileCheck size={20} />}
                placeholder="OTP Code"
                status={fieldState.invalid ? 'error' : ''}
              />
            )}
          />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Submit
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default OtpPage;
