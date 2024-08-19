import { Button, Form, Image, Input, Typography } from 'antd';
import { useNavigate } from 'react-router-dom';

import bikreeLogo from '../../assets/bikreeLogo.jpeg';
import verifyOtpImg from '../../assets/Fresh Folk - Brainstorming.png';

const CreateShop = () => {
  const navigate = useNavigate();

  const handleSubmit = () => {
    navigate('/dashboard');
  };

  return (
    <div className="flex flex-col md:flex-row items-center justify-between h-screen overflow-hidden">
      <div className="flex justify-center items-center md:w-1/2">
        <Form
          onFinish={handleSubmit}
          layout="vertical"
          name="create-shop"
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
            <p className="text-2xl font-semibold">Create Shop</p>
          </Typography.Title>

          <Form.Item
            name="createShop"
            label="Shop Name"
            className="mb-3"
            rules={[
              { required: true, message: 'Please Enter Your Shop Name' },
              { whitespace: true },
              { min: 2, message: 'name should be at least 2 characters' },
            ]}
            hasFeedback
          >
            <Input placeholder="Shop Name" />
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

export default CreateShop;
