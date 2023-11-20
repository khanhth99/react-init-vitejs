import { Outlet, useNavigate } from 'react-router-dom';
import {
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  UserOutlined,
  LogoutOutlined,
} from '@ant-design/icons';
import { Layout, Menu, Button, theme, Avatar, Typography, Dropdown } from 'antd';
import { useState } from 'react';
import mainMenu from '@menus/mainMenu';
import { themeColor } from '@theme/color';

const { Header, Sider, Content } = Layout;
function MainLayout() {
  const navigate = useNavigate();
  const [collapsed, setCollapsed] = useState(false);
  const {
    token: { colorBgContainer },
  } = theme.useToken();
  const { pathname } = window.location;
  console.log('pathname', pathname);

  const handleItemClick = (event: { key: any }) => {
    if (event.key === 'logout') {
      localStorage.clear();
      navigate('/auth/login');
    }
  };

  const items = [
    {
      key: 'logout',
      label: (
        <p>
          <LogoutOutlined /> Log out
        </p>
      ),
    },
  ];

  // const onClick = (e: any) => {
  //   navigate(`${e.key}`);
  // };

  return (
    <Layout style={{ height: '100%' }}>
      <Sider
        trigger={null}
        collapsible
        collapsed={collapsed}
        width={256}
        style={{
          background: colorBgContainer,
          overflow: 'auto',
          height: '100vh',
          position: 'fixed',
          left: 0,
          top: 0,
          bottom: 0,
        }}
      >
        <div
          className="h-[50px] mb-5 p-3 cursor-pointer"
          style={{
            position: 'sticky',
            top: 0,
          }}
          onClick={() => {
            navigate('/');
          }}
        >
          {collapsed ? (
            <img className="w-[50px] m-auto" src="/image/logo_sub.png" alt="" />
          ) : (
            <img className="w-[100%] m-auto" src="/image/logo.png" alt="" />
          )}
        </div>
        <div
          className="pt-1 pb-1"
          style={{ width: '70%', color: '#ccc', borderBottom: '1px solid #ccc', margin: 'auto' }}
        />
        <Menu
          // onClick={onClick}
          className="h-[calc(100vh-80px)]"
          mode="inline"
          defaultSelectedKeys={['1']}
          items={mainMenu}
          style={{
            overflowY: 'auto',
          }}
        />
      </Sider>
      <Layout style={{ marginLeft: !collapsed ? 256 : 80, overflowY: 'auto' }}>
        <Header
          style={{
            padding: 0,
            background: themeColor.main,
            position: 'sticky',
            top: 0,
            zIndex: 999,
            width: '100%',
            height: 64,
            display: 'flex',
            justifyContent: 'space-between',
          }}
        >
          <Button
            type="text"
            icon={collapsed ? <MenuUnfoldOutlined /> : <MenuFoldOutlined />}
            onClick={() => setCollapsed(!collapsed)}
            style={{
              fontSize: '16px',
              width: 64,
              height: 64,
              color: '#fff',
            }}
          />
          <Dropdown
            menu={{ items, onClick: (e) => handleItemClick(e) }}
            // overlay={items}
            trigger={['click']}
            className="pr-4 flex self-center items-center cursor-pointer"
          >
            <div
              onClick={(e) => {
                console.log(e);
                e.preventDefault();
              }}
            >
              <Avatar size={40} icon={<UserOutlined />} />
              <Typography className="pl-2 text-gray-100">Nguyễn Duy Khánh</Typography>
            </div>
          </Dropdown>
        </Header>
        <Content
          style={{
            // flexGrow: 1,
            margin: '16px 16px 0 16px',
            // padding: '16px 16px 0 16px',
            // top: 'calc(100vh - 100px)',
            // background: colorBgContainer,
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
}

export default MainLayout;
