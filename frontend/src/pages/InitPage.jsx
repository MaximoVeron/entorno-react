import { useState } from 'react';
import { Button } from '../components/Button';
import { useForm } from '../hooks/useForm';
import axios from 'axios';
import { Navigate } from 'react-router';

export const InitPage = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [redirect, setRedirect] = useState(false);

  const { handleChange, handleReset, form } = useForm({
    username: '',
    password: '',
  });

  const { username, password } = form;

  const handleLoginSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const resp = await axios.post('http://localhost:3000/api/auth/login', form, {
        withCredentials: true,
      });

      if (resp.status === 200) {
        handleReset();
        setRedirect(true);
      }
    } catch (error) {
      setError(error.response?.data?.msg || 'Error al iniciar sesión');
    } finally {
      setLoading(false);
    }
  };

  const handleRegisterSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    setError(null);

    try {
      const resp = await axios.post('http://localhost:3000/api/auth/register', form, {
        withCredentials: true,
      });

      if (resp.status === 200) {
        handleReset();
        setHaveAccount(true);
      }
    } catch (error) {
      setError(error.response?.data?.msg || 'Error al registrarse');
    } finally {
      setLoading(false);
    }
  };

  if (redirect) return <Navigate to="/home" replace />;

  return haveAccount === false ? (
    <>
      <section>
        <h1>Bienvenido a mi pagina web</h1>
      </section>

      <section>
        <form onSubmit={handleRegisterSubmit}>
          <label htmlFor="username">Nombre de usuario</label>
          <input
            type="text"
            name="username"
            id="username"
            value={username}
            onChange={handleChange}
          />

          <label htmlFor="password">Contraseña</label>
          <input
            type="password"
            name="password"
            id="password"
            value={password}
            onChange={handleChange}
          />

          <Button type="submit" disabled={loading}>
            {loading ? 'Cargando...' : 'Registrarse'}
          </Button>
        </form>

        {error && <p style={{ color: 'red' }}>{error}</p>}

        <p onClick={() => setHaveAccount(true)}>Ya estas registrado? Inicia sesion</p>
      </section>
    </>
  ) : (
    <>
      <form onSubmit={handleLoginSubmit}>
        <label htmlFor="username">Usuario</label>
        <input type="text" name="username" id="username" value={username} onChange={handleChange} />

        <label htmlFor="password">Contraseña</label>
        <input
          type="password"
          name="password"
          id="password"
          value={password}
          onChange={handleChange}
        />

        <Button type="submit" disabled={loading}>
          {loading ? 'Cargando...' : 'Iniciar Sesion'}
        </Button>
      </form>

      {error && <p style={{ color: 'red' }}>{error}</p>}

      <p onClick={() => setHaveAccount(false)}>Aun no tienes una cuenta? Registrate</p>
    </>
  );
};
