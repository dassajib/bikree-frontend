import { Button, Form, Image, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import bikreeLogo from '../../assets/bikreeLogo.jpeg';
import verifyOtpImg from '../../assets/Friendly Ones - Sitting.png';

const OtpPage = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/create-shop');
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden">
      <div className="flex justify-center items-center md:w-1/2">
        <Form
          onFinish={handleSubmit}
          layout="vertical"
          name="OTP"
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
            <p className="text-2xl font-semibold">Verify OTP</p>
          </Typography.Title>

          <Form.Item
            name="OTP"
            label="OTP"
            className="mb-3"
            rules={[
              { required: true, message: 'Please Enter Your OTP' },
              { whitespace: true },
              { min: 4, message: 'OTP should be 4 characters' },
            ]}
            hasFeedback
          >
            <Input placeholder="OTP" />
          </Form.Item>

          <Form.Item>
            <Button
              type="primary"
              htmlType="submit"
              className="w-full font-bold"
            >
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>

      <div className="hidden md:block w-full md:w-1/2 h-full bg-slate-200">
        <div className="w-full h-full flex items-center justify-center">
          <Image
            src={verifyOtpImg}
            preview={false}
            className="w-full h-full object-contain"
          />
        </div>
      </div>
    </div>
  );
};

export default OtpPage;
