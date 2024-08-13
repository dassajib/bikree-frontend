import { Button, Form, Image, Input, Typography } from 'antd';
import { CiShop } from 'react-icons/ci';

import bikreeLogo from '../../assets/bikreeLogo.jpeg';

const CreateShop = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Form
        name="create-shop"
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
        <Typography.Title
          level={4}
          className="text-center mt-5"
        >
          Create Your Shop
        </Typography.Title>
        <Form.Item
          className="mt-5"
          name="shop-name"
          rules={[
            {
              required: true,
              message: 'Please input your Shop Name!',
            },
          ]}
        >
          <Input prefix={<CiShop size={20} />} placeholder="Shop Name" />
        </Form.Item>
        <Form.Item>
          <Button type="primary" htmlType="submit" className="w-full">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateShop;
