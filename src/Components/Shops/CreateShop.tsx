import { Button, Form, Input, Typography } from 'antd';
import { CiShop } from 'react-icons/ci';

const CreateShop = () => {
  return (
    <div className="flex justify-center items-center w-screen h-screen">
      <Form
        name="create-shop"
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
          Create Your Shop
        </Typography.Title>
        <Form.Item
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
