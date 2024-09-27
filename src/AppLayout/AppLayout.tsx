import { useState } from 'react';
import { AiFillFile } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { CiShop } from 'react-icons/ci';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { MdInventory } from 'react-icons/md';
import { Layout, Menu, Typography, Image, Flex } from 'antd';
import { Link, Outlet } from 'react-router-dom';

import bikreeLogo from '../assets/bikreeLogo.jpeg';
import SignOutButton from '../Components/SignOutButton/SignOutButton';

const { Header, Content, Footer, Sider } = Layout;

type MenuItem = {
  key: React.Key;
  label: React.ReactNode;
  icon: React.ReactNode;
};

function getItem(
  label: React.ReactNode,
  key: React.Key,
  icon: React.ReactNode,
  to: string
): MenuItem {
  return {
    key,
    icon,
    label: <Link to={to}>{label}</Link>,
  };
}

// siedbar data's
const items: MenuItem[] = [
  getItem('Dashboard', '1', <MdDashboard size={18} />, '/dashboard'),
  getItem('Shops', '2', <CiShop size={18} />, 'shops'),
  getItem('Inventory', '3', <MdInventory size={18} />, 'inventory'),
  getItem('Sales', '4', <FaHandHoldingDollar size={18} />, 'sales'),
  getItem('Reports', '5', <AiFillFile size={18} />, 'reports'),
];

const AppLayout = () => {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <Layout className="min-h-screen">
      <Sider
        collapsible
        collapsed={collapsed}
        onCollapse={(value) => setCollapsed(value)}
      >
        <div className="demo-logo-vertical" />
        <Link to="/dashboard">
          <Flex
            justify="space-evenly"
            align="center"
            className="cursor-pointer mt-3"
          >
            <Image
              preview={false}
              src={bikreeLogo}
              width={40}
              height={40}
              className="object-cover rounded"
            />
            {!collapsed && (
              <Typography.Title level={4} className="mt-2">
                <span className="text-white">Bikree</span>
              </Typography.Title>
            )}
          </Flex>
        </Link>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          items={items}
          className="mt-4"
        />
      </Sider>
      <Layout>
        <Header className="sticky top-0 z-10 bg-white border-b-[2px] border-b-[rgba(5,5,5,0.07)]">
          <div className="flex justify-end mt-4">
            <SignOutButton />
          </div>
        </Header>

        <Content className="bg-white">
          <div className="md:p-4 md:m-3 p-2 rounded-md">{<Outlet />}</div>
        </Content>

        <Footer className="flex justify-center items-center h-3">
          ©{new Date().getFullYear()} Created by Bikree
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
