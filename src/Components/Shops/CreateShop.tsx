import { Button, Form, Input, Typography } from 'antd';
import { CiShop } from 'react-icons/ci';

import './CreateShop.css';

const CreateShop = () => {
  return (
    <div className="create-shop">
      <Form
        name="create-shop"
        className="create-shop-form"
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
          <Button type="primary" htmlType="submit" className="form-button">
            Create
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default CreateShop;
