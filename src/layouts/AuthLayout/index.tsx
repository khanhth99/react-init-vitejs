import { Outlet } from 'react-router-dom';

function AuthLayout() {
  return (
    <div className="flex items-center justify-center h-[100%] bg-gray-100">
      <Outlet />
    </div>
  );
}

export default AuthLayout;
