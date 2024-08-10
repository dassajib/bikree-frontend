import { Button, Form, Input, Typography } from 'antd';
import { CiShop } from 'react-icons/ci';

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
        <Typography.Title
          level={4}
          // style={{ textAlign: 'center', marginBottom: '20px' }}
          className='text-center'
        >
          Create Your Shop
        </Typography.Title>
        <Form.Item
        className='mt-5'
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
