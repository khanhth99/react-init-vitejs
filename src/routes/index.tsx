import { useRoutes } from 'react-router-dom';

// routes
import AuthRoutes from '@routes/authRoute';
import MainRoutes from '@routes/mainRoute';

// ==============================|| ROUTING RENDER ||============================== //

export default function ThemeRoutes() {
  return useRoutes([AuthRoutes, MainRoutes]);
}
