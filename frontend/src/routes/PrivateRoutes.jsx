import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router';
import { Loading } from '../components/Loading';

export const PrivateRoutes = () => {
  const [isAuth, setAuth] = useState(null);

  const checkAuth = async () => {
    try {
      const resp = await axios.get('http://localhost:3000/api/auth/profile', {
        withCredentials: true,
      });
      setAuth(resp.status === 200);
    } catch (error) {
      setAuth(false);
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  if (isAuth === null) return <Loading />;

  if (isAuth === false) return <Navigate to="/login" replace />;
  return <Outlet />;
};
