import { ReactNode, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

type LayoutProps = {
  children: ReactNode;
};

function Layouts({ children }: LayoutProps) {
  const location = useLocation();
  const { pathname } = location;
  const navigate = useNavigate();
  useEffect(() => {
    window.scrollTo({
      top: 0,
      left: 0,
      behavior: 'smooth',
    });
  }, [pathname]);

  // check auth
  useEffect(() => {
    if (localStorage.getItem('token') === null) {
      navigate('/auth/login');
    } else {
      // navigate('/');
    }
  }, []);

  return children || null;
}

export default Layouts;
