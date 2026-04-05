import { useEffect, useState } from 'react';
import { NoteCard } from '../components/NoteCard';
import { Loading } from '../components/Loading';
import axios from 'axios';

export const NotesPage = () => {
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);
  const [notes, setNotes] = useState([]);
  useEffect(() => {
    const getNotes = async () => {
      setLoading(true);
      try {
        const resp = await axios.get('http://localhost:3000/api/auth/notes', {
          withCredentials: true,
        });
        console.log(resp.data);
        setNotes(resp.data.notes);
      } catch (error) {
        setError(error);
      } finally {
        setLoading(false);
      }
    };
    getNotes();
  }, []);
  if (loading === true) return <Loading />;
  if (error) console.log(error);
  if (notes.length === 0) return <h2>Aun no hay notas creadas</h2>;
  return (
    <div>
      <h1>Bienvenido a la seccion de notas</h1>
      <section>
        <div>
          {notes.map((note) => (
            <NoteCard
              key={note._id}
              title={note.title}
              author={note.author}
              content={note.content}
            />
          ))}
        </div>
      </section>
    </div>
  );
};
