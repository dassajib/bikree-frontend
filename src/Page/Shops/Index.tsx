import { Col, Row, Spin } from 'antd';
import { Link } from 'react-router-dom';
import { FaRegMoneyBillAlt } from 'react-icons/fa';

import { useShopList } from '../../hooks/useShop';
import { CreateShopDataInterface } from '../../interface/Shop';

const Shops = () => {
  const { data, isPending } = useShopList();

  if (isPending)
    return (
      <div className="flex justify-center mt-4">
        <Spin size="large" />
      </div>
    );

  return (
    <Row gutter={[16, 16]}>
      {data?.data?.map((shop: CreateShopDataInterface) => (
        <Col span={8} key={shop.uid}>
          <Link to="">
            <div className="group relative cursor-pointer overflow-hidden bg-white px-6 pt-10 pb-8 shadow-xl ring-1 ring-gray-900/5 transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl sm:mx-auto sm:max-w-sm sm:rounded-lg sm:px-10">
              <span className="absolute top-10 z-0 h-20 w-20 rounded-full bg-sky-500 transition-all duration-300 group-hover:scale-[10]"></span>
              <div className="relative z-10 mx-auto max-w-md">
                <span className="grid h-20 w-20 place-items-center rounded-full bg-sky-500 transition-all duration-300 group-hover:bg-sky-400">
                  <FaRegMoneyBillAlt className="h-10 w-10 text-white transition-all" />
                </span>
                <div className="space-y-6 pt-5 text-base leading-7 text-gray-600 transition-all duration-300 group-hover:text-white/90">
                  <h1>Shop name : {shop.name}</h1>
                  <h1>
                    Care Of :{' '}
                    {shop.owner.full_name.first +
                      ' ' +
                      shop.owner.full_name.last}
                  </h1>
                </div>
                {/* <div className="pt-5 text-base font-semibold leading-7">
                  <div className="text-sky-500 transition-all duration-300 group-hover:text-white">
                    Read the docs &rarr;
                  </div>
                </div> */}
              </div>
            </div>
          </Link>
        </Col>
      ))}
    </Row>
  );
};

export default Shops;
