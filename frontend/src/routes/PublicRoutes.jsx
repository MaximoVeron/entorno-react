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
      setAuth(resp.status === 200);
    } catch (error) {
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
