import { Link } from 'react-router';

export const HomePage = () => {
  return (
    <>
      <h1>Que te gustaria explorar?</h1>
      <div>
        <ul>
          <li>
            <Link to="/notes">Ir a notas</Link>
          </li>
        </ul>
      </div>
    </>
  );
};
