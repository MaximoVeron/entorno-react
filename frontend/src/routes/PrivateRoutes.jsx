import axios from "axios";
import { useContext, useEffect, useState } from "react";
import { Navigate, Outlet } from "react-router";
import { Loading } from "../components/Loading";
import { NoteContext } from "../context/GlobalContext";

export const PrivateRoutes = () => {
  const [isAuth, setAuth] = useState(null);
  const { setUser, user } = useContext(NoteContext);
  const checkAuth = async () => {
    try {
      const resp = await axios.get("http://localhost:3000/api/auth/profile", {
        withCredentials: true,
      });
      setAuth(resp.status === 200);
      const userAuth = resp.data.user;
      setUser({
        id: userAuth.id,
        username: userAuth.username,
      });
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
