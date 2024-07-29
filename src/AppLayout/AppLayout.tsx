import  { useState } from 'react';
import bikreeLogo from '../assets/bikreeLogo.jpeg';
import { AiFillFile } from 'react-icons/ai';
import { MdDashboard } from 'react-icons/md';
import { CiShop } from 'react-icons/ci';
import { FaHandHoldingDollar } from 'react-icons/fa6';
import { MdInventory } from 'react-icons/md';
import { Layout, Menu, theme, Typography, Image, Flex } from 'antd';
import { Link, Outlet } from 'react-router-dom';

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
  const {
    token: { colorBgContainer, borderRadiusLG },
  } = theme.useToken();

  return (
    <Layout style={{ minHeight: '100vh' }}>
      {/* side bar start */}
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
            style={{ cursor: 'pointer', marginTop: '10px' }}
          >
            {!collapsed && (
              <Typography.Title
                level={4}
                style={{ color: 'white', marginTop: '10px' }}
              >
                Bikree
              </Typography.Title>
            )}
            <Image
              preview={false}
              src={bikreeLogo}
              width={40}
              height={40}
              style={{ objectFit: 'cover' }}
            />
          </Flex>
        </Link>
        <Menu
          theme="dark"
          defaultSelectedKeys={['1']}
          items={items}
          style={{ marginTop: '16px' }}
        />
      </Sider>
      {/* side bar end */}
      <Layout>
        {/* header */}
        <Header
          style={{
            padding: 0,
            background: colorBgContainer,
            borderBlockEnd: '1px solid rgba(5, 5, 5, 0.07)',
          }}
        />
        {/* main content */}
        <Content style={{ margin: '0 16px' }}>
          <div
            style={{
              padding: 24,
              minHeight: 360,
              background: colorBgContainer,
              borderRadius: borderRadiusLG,
            }}
          >
            {<Outlet />}
          </div>
        </Content>
        <Footer style={{ textAlign: 'center' }}>
          ©{new Date().getFullYear()} Created by Bikree
        </Footer>
      </Layout>
    </Layout>
  );
};

export default AppLayout;
