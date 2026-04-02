import { useEffect, useState } from 'react';
import { Loading } from '../components/Loading';
import axios from 'axios';
import { Outlet, Navigate } from 'react-router';
export const PublicRoutes = () => {
  const [isAuth, setAuth] = useState(null);

  const checkAuth = async () => {
    try {
      const resp = await axios.get('http://localhost:3000/api/auth/profile', {
        withCredentials: true,
      });
      console.log(resp.data);
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
