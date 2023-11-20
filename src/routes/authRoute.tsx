import { lazy } from 'react';

import Loadable from '@components/Loadable';
import AuthLayout from '@layouts/AuthLayout';

const AuthLogin = Loadable(lazy(() => import('@containers/Auth')));

const AuthenticationRoutes = {
  path: '/auth',
  element: <AuthLayout />,
  children: [
    {
      path: '/auth/login',
      element: <AuthLogin />,
    },
  ],
};

export default AuthenticationRoutes;
