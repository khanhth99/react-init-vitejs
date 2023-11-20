import { DashboardOutlined, NotificationOutlined, SettingOutlined } from '@ant-design/icons';
import { ReactNode } from 'react';
import { Link } from 'react-router-dom';

interface MenuItem {
  key: string;
  label: ReactNode;
  icon?: ReactNode;
  url?: string;
  children?: MenuItem[];
}

const mainMenu: MenuItem[] = [
  {
    key: `dashboard`,
    url: '/dashboard',
    label: <Link to="/dashboard">Dashboard</Link>,
    icon: <DashboardOutlined />,
  },
  {
    key: `menu2`,
    label: `Setting`,
    icon: <SettingOutlined />,
    children: [
      {
        key: `accounts`,
        url: '/accounts',
        label: <Link to="/accounts">Accounts</Link>,
      },
      {
        key: `roles`,
        url: '/roles',
        label: <Link to="/roles">Roles</Link>,
      },
    ],
  },
  {
    key: `notification`,
    url: '/notification',
    label: <Link to="/notification">Notification</Link>,
    icon: <NotificationOutlined />,
  },
];

export default mainMenu;
