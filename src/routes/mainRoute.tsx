import { lazy } from 'react';

import Loadable from '@components/Loadable';

const MainLayout = Loadable(lazy(() => import('@layouts/MainLayout')));
const Accounts = Loadable(lazy(() => import('@containers/Accounts')));
const Roles = Loadable(lazy(() => import('@containers/Roles')));
const Notification = Loadable(lazy(() => import('@containers/Notification')));
const Dashboard = Loadable(lazy(() => import('@containers/Dashboard')));

const MainRoutes = {
  path: '/',
  element: <MainLayout />,
  children: [
    {
      path: '/',
      element: <Dashboard />,
    },
    {
      path: '/dashboard',
      element: <Dashboard />,
    },
    {
      path: 'accounts',
      element: <Accounts />,
    },
    {
      path: 'roles',
      element: <Roles />,
    },
    {
      path: 'notification',
      element: <Notification />,
    },
  ],
};

export default MainRoutes;
