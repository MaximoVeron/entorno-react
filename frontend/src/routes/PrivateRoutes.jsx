import axios from 'axios';
import { useEffect, useState } from 'react';
import { Navigate, Outlet } from 'react-router';
import { Loading } from '../components/Loading';

export const PrivateRoutes = () => {
  const [isAuth, setAuth] = useState(false);

  const checkAuth = async () => {
    try {
      const resp = await axios.get('http://localhost:3000/api/auth/profile', {
        withCredentials: true,
      });
      if (resp.status === 200) {
        setAuth(true);
      } else {
        setAuth(false);
      }
    } catch (error) {
      console.error('Error verificando autenticación:', error);
      setAuth(false);
    }
  };
  useEffect(() => {
    checkAuth();
  }, []);
  if (isAuth === null) return <Loading />;

  if (isAuth === true) return <Navigate to="/home" replace />;
  return <Outlet />;
};
