import { Button, Card, Col, Row } from 'antd';
import { FaRegEdit } from 'react-icons/fa';
import { MdDeleteOutline } from 'react-icons/md';
import { Link } from 'react-router-dom';

import { useShopList } from '../../hooks/useShop';
import { CreateShopDataInterface } from '../../interface/Shop';

const Shops = () => {
  const { data } = useShopList();
  
  return (
    <Row gutter={[16, 16]}>
      {data?.data.map((shop: CreateShopDataInterface) => (
        <Col span={8} key={shop.uid}>
          <Link to="">
            <Card
              title={shop.name}
              className="card hover:bg-slate-200 hover:border-2 hover:border-gray-500 flex flex-col justify-between shadow-2xl cursor-pointer"
            >
              <div className="flex justify-between">
                <Button
                  type="primary"
                  size="middle"
                  shape="circle"
                  icon={<FaRegEdit />}
                />
                <Button
                  type="primary"
                  size="middle"
                  shape="circle"
                  icon={<MdDeleteOutline />}
                />
              </div>
            </Card>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default Shops;
