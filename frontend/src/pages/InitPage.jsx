import { useState } from "react";
import { Button } from "../components/Button";

export const InitPage = () => {
  const [haveAccount, setHaveAccount] = useState(false);
  const handleSubmit = () => {};
  return haveAccount === false ? (
    <>
      <section>
        <h1>Bienvenido a mi pagina web</h1>
      </section>
      <section>
        <form onSubmit={handleSubmit}>
          <label htmlFor="username">Nombre de usuario</label>
          <input type="text" name="username" id="username" />
          <label htmlFor="password">Contraseña</label>
          <input type="password" name="password" id="password" />
          <Button type="submit">Registrarse</Button>
        </form>
        <p
          onClick={() => {
            setHaveAccount(true);
          }}
        >
          Ya estas registrado? Inicia sesion
        </p>
      </section>
    </>
  ) : (
    <>
      <form>
        <label htmlFor="username">Usuario</label>
        <input type="text" name="username" id="username" />
        <label htmlFor="password">Contraseña</label>
        <input type="password" name="password" id="password" />
        <Button type="submit">Iniciar Sesion</Button>
      </form>
      <p
        onClick={() => {
          setHaveAccount(false);
        }}
      >
        Aun no tienes una cuenta? Registrate
      </p>
    </>
  );
};
